import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const catalogPath = path.join(root, "databases", "databases.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));

const allowedModels = new Set(["rdf", "property", "multi", "specialized"]);
const allowedStatuses = new Set(["production", "emerging", "legacy"]);
const allowedVectors = new Set(["native", "integrated", "paired", "sibling", "none", "unclear"]);
const allowedLicenses = new Set(["permissive", "copyleft", "open-core", "source-available", "commercial"]);
const requiredDocs = [
  "README.md",
  "CONTRIBUTING.md",
  "DISCLAIMER.md",
];
const placeholderPattern = /OWNER|your-username|\[username\]/i;

const errors = [];
const warnings = [];
const seenIds = new Set();
const referencedProfiles = new Set();

function assert(condition, message) {
  if (!condition) errors.push(message);
}

assert(Array.isArray(catalog.databases), "databases.json must contain a databases array");

for (const db of catalog.databases) {
  const requiredFields = [
    "id",
    "name",
    "model",
    "status",
    "license",
    "license_type",
    "website",
    "query_interfaces",
    "vector_strategy",
    "vector_summary",
    "ha",
    "deployment",
    "best_fit",
    "profile",
    "source_urls",
    "notes",
  ];

  for (const field of requiredFields) {
    assert(db[field] !== undefined, `Missing field "${field}" on ${db.id ?? "<unknown>"}`);
  }

  assert(!seenIds.has(db.id), `Duplicate id "${db.id}"`);
  seenIds.add(db.id);

  assert(allowedModels.has(db.model), `Invalid model "${db.model}" on ${db.id}`);
  assert(allowedStatuses.has(db.status), `Invalid status "${db.status}" on ${db.id}`);
  assert(allowedVectors.has(db.vector_strategy), `Invalid vector strategy "${db.vector_strategy}" on ${db.id}`);
  assert(allowedLicenses.has(db.license_type), `Invalid license type "${db.license_type}" on ${db.id}`);
  assert(/^https:\/\//.test(db.website), `Website must be https for ${db.id}`);
  assert(Array.isArray(db.query_interfaces) && db.query_interfaces.length > 0, `query_interfaces must be a non-empty array for ${db.id}`);
  assert(Array.isArray(db.source_urls) && db.source_urls.length > 0, `source_urls must be a non-empty array for ${db.id}`);

  for (const url of db.source_urls ?? []) {
    assert(/^https:\/\//.test(url), `Source URL must be https for ${db.id}: ${url}`);
  }

  const profilePath = path.join(root, db.profile);
  referencedProfiles.add(path.normalize(profilePath));
  assert(fs.existsSync(profilePath), `Missing profile README for ${db.id}: ${db.profile}`);
}

for (const doc of requiredDocs) {
  const fullPath = path.join(root, doc);
  assert(fs.existsSync(fullPath), `Missing required doc: ${doc}`);
  if (fs.existsSync(fullPath)) {
    const text = fs.readFileSync(fullPath, "utf8");
    assert(!placeholderPattern.test(text), `Placeholder text still present in ${doc}`);
  }
}

const databaseDir = path.join(root, "databases");
for (const entry of fs.readdirSync(databaseDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const profilePath = path.normalize(path.join(databaseDir, entry.name, "README.md"));
  if (fs.existsSync(profilePath) && !referencedProfiles.has(profilePath)) {
    warnings.push(`Supplemental profile not in active catalog: databases/${entry.name}/README.md`);
  }
}

console.log(`Validated ${catalog.databases.length} catalog entries.`);
if (warnings.length > 0) {
  console.log("");
  console.log("Warnings:");
  for (const warning of warnings) console.log(`- ${warning}`);
}

if (errors.length > 0) {
  console.error("");
  console.error("Validation errors:");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}
