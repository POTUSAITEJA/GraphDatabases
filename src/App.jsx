import { useEffect, useMemo, useRef, useState } from "react";
import catalog from "../databases/databases.json";

const META = catalog._meta;
const DB = catalog.databases;

const MODEL_META = {
  rdf: { label: "RDF", full: "RDF / SPARQL", color: "#7cb2ff" },
  property: { label: "LPG", full: "Label Property Graph", color: "#ffa36b" },
  multi: { label: "Multi", full: "Multi-Model", color: "#4fd6de" },
  specialized: { label: "Special", full: "Specialized", color: "#c89bff" },
};

const STATUS_META = {
  production: { label: "Production", color: "#4ade80" },
  emerging: { label: "Emerging", color: "#fbbf24" },
  legacy: { label: "Legacy", color: "#94a3b8" },
};

const VECTOR_META = {
  native: { label: "Native", color: "#4ade80" },
  integrated: { label: "Integrated", color: "#5eb8f7" },
  paired: { label: "Paired", color: "#c89bff" },
  sibling: { label: "Sibling", color: "#ffa36b" },
  none: { label: "None", color: "#71717a" },
  unclear: { label: "Unclear", color: "#facc15" },
};

const LICENSE_META = {
  permissive: { label: "Permissive", color: "#4ade80" },
  copyleft: { label: "Copyleft", color: "#facc15" },
  "open-core": { label: "Open core", color: "#4fd6de" },
  "source-available": { label: "Source available", color: "#ffa36b" },
  commercial: { label: "Commercial", color: "#f87171" },
};

const T = {
  bg0: "#06060a",
  bg1: "#0a0a11",
  bg2: "#0f0f17",
  bg3: "#15151f",
  bgHover: "#181823",
  bdr: "rgba(255, 255, 255, 0.07)",
  bdrSoft: "rgba(255, 255, 255, 0.04)",
  bdrStrong: "rgba(255, 255, 255, 0.12)",
  fg: "#f4f4f8",
  fgDim: "#c8c8d4",
  fgMute: "#82828e",
  fgFaint: "#5a5a66",
  accent: "#7cb2ff",
  accentSoft: "rgba(124, 178, 255, 0.13)",
  accentStrong: "rgba(124, 178, 255, 0.5)",
};

const ORDER = {
  model: { rdf: 0, property: 1, multi: 2, specialized: 3 },
  status: { production: 0, emerging: 1, legacy: 2 },
  vector: { native: 0, integrated: 1, paired: 2, sibling: 3, unclear: 4, none: 5 },
};

const OSS_TYPES = new Set(["permissive", "copyleft"]);
const OPENISH_TYPES = new Set(["open-core", "source-available"]);

function Pill({ children, color, size = "sm" }) {
  const pad = size === "md" ? "5px 11px" : "4px 10px";
  const font = size === "md" ? 11 : 10;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: pad,
        borderRadius: 999,
        fontSize: font,
        fontWeight: 600,
        letterSpacing: 0.4,
        color,
        background: `${color}1c`,
        border: `1px solid ${color}40`,
        whiteSpace: "nowrap",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

function Chip({ label, value, onClear }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "5px 5px 5px 11px",
        background: T.accentSoft,
        border: `1px solid ${T.accentStrong}`,
        borderRadius: 999,
        fontSize: 11,
        color: T.fg,
        fontWeight: 500,
      }}
    >
      <span style={{ color: T.fgMute, textTransform: "uppercase", letterSpacing: 0.6, fontSize: 9, fontWeight: 600 }}>
        {label}
      </span>
      <span>{value}</span>
      <button
        onClick={onClear}
        style={{
          width: 18,
          height: 18,
          borderRadius: 999,
          border: "none",
          background: "transparent",
          color: T.fgMute,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 14,
          lineHeight: 1,
          transition: "all 0.15s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = `${T.accent}33`;
          e.currentTarget.style.color = T.fg;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = T.fgMute;
        }}
        aria-label={`Clear ${label} filter`}
      >
        ×
      </button>
    </div>
  );
}

function SortableTh({ children, sortKey, sortState, onSort, width, sticky }) {
  const active = sortState.key === sortKey;
  const arrow = active ? (sortState.dir === "asc" ? "↑" : "↓") : "";
  return (
    <th
      onClick={() => onSort(sortKey)}
      style={{
        position: sticky ? "sticky" : undefined,
        left: sticky ? 0 : undefined,
        zIndex: sticky ? 5 : undefined,
        background: sticky ? T.bg2 : "transparent",
        width,
        padding: "18px 16px",
        borderBottom: `1px solid ${T.bdrStrong}`,
        textAlign: "left",
        whiteSpace: "nowrap",
        fontSize: 10,
        color: active ? T.fg : T.fgMute,
        fontWeight: 600,
        letterSpacing: 1.3,
        textTransform: "uppercase",
        cursor: "pointer",
        userSelect: "none",
        transition: "color 0.15s ease",
      }}
      onMouseEnter={(e) => {
        if (!active) e.currentTarget.style.color = T.fgDim;
      }}
      onMouseLeave={(e) => {
        if (!active) e.currentTarget.style.color = T.fgMute;
      }}
    >
      <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
        {children}
        {arrow && <span style={{ color: T.accent, fontSize: 11 }}>{arrow}</span>}
      </span>
    </th>
  );
}

function Th({ children, width }) {
  return (
    <th
      style={{
        padding: "18px 16px",
        borderBottom: `1px solid ${T.bdrStrong}`,
        textAlign: "left",
        whiteSpace: "nowrap",
        fontSize: 10,
        color: T.fgMute,
        fontWeight: 600,
        letterSpacing: 1.3,
        textTransform: "uppercase",
        width,
      }}
    >
      {children}
    </th>
  );
}

export default function App() {
  const [model, setModel] = useState("all");
  const [status, setStatus] = useState("all");
  const [vector, setVector] = useState("all");
  const [license, setLicense] = useState("all");
  const [search, setSearch] = useState("");
  const [sortState, setSortState] = useState({ key: "default", dir: "asc" });
  const searchRef = useRef(null);

  // ⌘K / Ctrl+K focuses search
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onSort = (key) => {
    setSortState((prev) => {
      if (prev.key === key) {
        return { key, dir: prev.dir === "asc" ? "desc" : "asc" };
      }
      return { key, dir: "asc" };
    });
  };

  const modelCounts = useMemo(() => {
    const out = { all: DB.length, rdf: 0, property: 0, multi: 0, specialized: 0 };
    DB.forEach((db) => {
      out[db.model] = (out[db.model] || 0) + 1;
    });
    return out;
  }, []);

  const rows = useMemo(() => {
    const filtered = DB.filter((db) => {
      if (model !== "all" && db.model !== model) return false;
      if (status !== "all" && db.status !== status) return false;
      if (vector !== "all" && db.vector_strategy !== vector) return false;
      if (license === "oss" && !OSS_TYPES.has(db.license_type)) return false;
      if (license === "openish" && !OPENISH_TYPES.has(db.license_type)) return false;
      if (license === "commercial" && db.license_type !== "commercial") return false;

      if (search) {
        const text = [
          db.name,
          db.model,
          db.status,
          db.query_interfaces.join(" "),
          db.vector_summary,
          db.best_fit,
          db.notes,
          db.deployment,
        ]
          .join(" ")
          .toLowerCase();
        if (!text.includes(search.toLowerCase())) return false;
      }

      return true;
    });

    const sorter = (a, b) => {
      const dir = sortState.dir === "asc" ? 1 : -1;
      switch (sortState.key) {
        case "name":
          return a.name.localeCompare(b.name) * dir;
        case "model":
          return (
            (ORDER.model[a.model] - ORDER.model[b.model] ||
              a.name.localeCompare(b.name)) * dir
          );
        case "status":
          return (
            (ORDER.status[a.status] - ORDER.status[b.status] ||
              a.name.localeCompare(b.name)) * dir
          );
        case "vector":
          return (
            (ORDER.vector[a.vector_strategy] - ORDER.vector[b.vector_strategy] ||
              a.name.localeCompare(b.name)) * dir
          );
        case "license":
          return (a.license_type.localeCompare(b.license_type) || a.name.localeCompare(b.name)) * dir;
        default:
          return (
            ORDER.status[a.status] - ORDER.status[b.status] ||
            ORDER.model[a.model] - ORDER.model[b.model] ||
            ORDER.vector[a.vector_strategy] - ORDER.vector[b.vector_strategy] ||
            a.name.localeCompare(b.name)
          );
      }
    };

    return [...filtered].sort(sorter);
  }, [license, model, search, status, vector, sortState]);

  const counts = useMemo(() => {
    const result = { total: DB.length, production: 0, native: 0, oss: 0 };
    DB.forEach((db) => {
      if (db.status === "production") result.production += 1;
      if (db.vector_strategy === "native") result.native += 1;
      if (OSS_TYPES.has(db.license_type)) result.oss += 1;
    });
    return result;
  }, []);

  const activeChips = [];
  if (status !== "all")
    activeChips.push({ label: "Status", value: STATUS_META[status].label, clear: () => setStatus("all") });
  if (vector !== "all")
    activeChips.push({ label: "Vector", value: VECTOR_META[vector].label, clear: () => setVector("all") });
  if (license !== "all") {
    const labels = { oss: "OSS", openish: "Open-ish", commercial: "Commercial" };
    activeChips.push({ label: "License", value: labels[license], clear: () => setLicense("all") });
  }
  if (search)
    activeChips.push({ label: "Search", value: `"${search}"`, clear: () => setSearch("") });

  const clearAll = () => {
    setModel("all");
    setStatus("all");
    setVector("all");
    setLicense("all");
    setSearch("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: T.bg0,
        color: T.fg,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow — primary */}
      <div
        style={{
          position: "absolute",
          top: -320,
          left: "50%",
          width: 1400,
          height: 720,
          background:
            "radial-gradient(ellipse at center, rgba(124, 178, 255, 0.22) 0%, rgba(124, 178, 255, 0.06) 32%, transparent 62%)",
          pointerEvents: "none",
          zIndex: 0,
          animation: "gdrc-drift 18s ease-in-out infinite",
        }}
      />
      {/* Secondary warm glow */}
      <div
        style={{
          position: "absolute",
          top: 160,
          right: -220,
          width: 620,
          height: 620,
          background:
            "radial-gradient(circle, rgba(200, 155, 255, 0.11) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(8px)",
        }}
      />
      {/* Tertiary teal glow, lower-left */}
      <div
        style={{
          position: "absolute",
          top: 480,
          left: -180,
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(79, 214, 222, 0.07) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 0,
          filter: "blur(4px)",
        }}
      />

      <div
        style={{
          position: "relative",
          maxWidth: 1600,
          margin: "0 auto",
          padding: "72px 32px 96px",
          zIndex: 2,
        }}
      >
        {/* HERO */}
        <header style={{ marginBottom: 72, textAlign: "center" }}>
          <div
            className="gdrc-rise"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 32,
              padding: "8px 14px 8px 12px",
              background: "rgba(10, 10, 17, 0.72)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: `1px solid ${T.bdr}`,
              borderRadius: 999,
              boxShadow: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 10px 40px -20px rgba(0,0,0,0.8)",
            }}
          >
            <span
              style={{
                position: "relative",
                display: "inline-flex",
                width: 8,
                height: 8,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 999,
                  background: "#4ade80",
                  animation: "gdrc-pulse 2.2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  position: "relative",
                  width: 8,
                  height: 8,
                  borderRadius: 999,
                  background: "#4ade80",
                  boxShadow: "0 0 14px #4ade80",
                }}
              />
            </span>
            <span
              style={{
                fontSize: 10,
                color: T.fgDim,
                fontWeight: 600,
                letterSpacing: 1.6,
                textTransform: "uppercase",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              v{META.version} · Updated {META.last_updated}
            </span>
          </div>

          <h1
            className="gdrc-rise gdrc-rise-1"
            style={{
              margin: 0,
              fontSize: "clamp(52px, 8vw, 96px)",
              lineHeight: 0.94,
              letterSpacing: -3.2,
              fontWeight: 600,
              color: T.fg,
            }}
          >
            <span
              style={{
                display: "block",
                background: "linear-gradient(180deg, #ffffff 0%, #a8a8b8 110%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Graph Database
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: -2,
                background:
                  "linear-gradient(180deg, #d6e4ff 0%, #7cb2ff 55%, #5a8fd6 110%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: 4,
              }}
            >
              Resource Catalog
            </span>
          </h1>

          <p
            className="gdrc-rise gdrc-rise-2"
            style={{
              margin: "34px auto 0",
              maxWidth: 680,
              color: T.fgDim,
              fontSize: 17,
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            A curated reference for RDF stores, label property graph systems,
            multi-model engines, and specialized graph platforms — every entry
            anchored to primary sources with explicit vector-search classification.
          </p>
        </header>

        {/* STATS */}
        <section
          className="gdrc-rise gdrc-rise-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <SummaryCard label="Total entries" value={counts.total} detail="In the active catalog" accent="#7cb2ff" />
          <SummaryCard label="Production" value={counts.production} detail="Actively shippable" accent="#4ade80" />
          <SummaryCard label="Native vector" value={counts.native} detail="Vector in the same engine" accent="#4fd6de" />
          <SummaryCard label="Open source" value={counts.oss} detail="Permissive or copyleft" accent="#c89bff" />
        </section>

        {/* MODEL TABS — primary navigation */}
        <section className="gdrc-rise gdrc-rise-4" style={{ marginBottom: 20 }}>
          <div
            style={{
              display: "flex",
              gap: 4,
              padding: 5,
              background: "rgba(10, 10, 17, 0.72)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: `1px solid ${T.bdr}`,
              borderRadius: 14,
              overflowX: "auto",
              boxShadow: "0 1px 0 0 rgba(255,255,255,0.03) inset",
            }}
          >
            {[
              ["all", "All", null],
              ["rdf", MODEL_META.rdf.full, MODEL_META.rdf.color],
              ["property", MODEL_META.property.full, MODEL_META.property.color],
              ["multi", MODEL_META.multi.full, MODEL_META.multi.color],
              ["specialized", MODEL_META.specialized.full, MODEL_META.specialized.color],
            ].map(([id, text, accent]) => {
              const active = model === id;
              const count = modelCounts[id] || 0;
              const glow = accent || T.accent;
              return (
                <button
                  key={id}
                  onClick={() => setModel(id)}
                  style={{
                    flex: "1 1 auto",
                    minWidth: 120,
                    border: "none",
                    background: active
                      ? `linear-gradient(180deg, ${T.bg3} 0%, ${T.bg2} 100%)`
                      : "transparent",
                    color: active ? T.fg : T.fgMute,
                    padding: "14px 18px",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    fontSize: 13,
                    fontWeight: 500,
                    borderRadius: 10,
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    boxShadow: active
                      ? `inset 0 0 0 1px ${T.bdrStrong}, 0 0 24px -6px ${glow}55, 0 4px 16px -8px rgba(0,0,0,0.6)`
                      : "none",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = T.fgDim;
                      e.currentTarget.style.background = "rgba(255,255,255,0.025)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!active) {
                      e.currentTarget.style.color = T.fgMute;
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {active && accent && (
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 999,
                        background: accent,
                        boxShadow: `0 0 12px ${accent}, 0 0 4px ${accent}`,
                      }}
                    />
                  )}
                  <span>{text}</span>
                  <span
                    style={{
                      padding: "2px 8px",
                      background: active ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.035)",
                      borderRadius: 999,
                      fontSize: 10,
                      fontWeight: 600,
                      color: active ? T.fgDim : T.fgFaint,
                      fontFamily: "'JetBrains Mono', monospace",
                      fontVariantNumeric: "tabular-nums",
                      border: `1px solid ${active ? T.bdr : "transparent"}`,
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </section>

        {/* SECONDARY FILTERS */}
        <section
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
            padding: "14px 16px",
            background: "rgba(10, 10, 17, 0.55)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: `1px solid ${T.bdr}`,
            borderRadius: 14,
            marginBottom: 16,
          }}
        >
          <FilterGroup
            label="Status"
            value={status}
            onChange={setStatus}
            options={[
              ["all", "All"],
              ["production", "Production"],
              ["emerging", "Emerging"],
              ["legacy", "Legacy"],
            ]}
          />
          <div style={{ width: 1, height: 22, background: T.bdr }} />
          <FilterGroup
            label="Vector"
            value={vector}
            onChange={setVector}
            options={[
              ["all", "All"],
              ["native", "Native"],
              ["integrated", "Integrated"],
              ["paired", "Paired"],
              ["sibling", "Sibling"],
              ["unclear", "Unclear"],
              ["none", "None"],
            ]}
          />
          <div style={{ width: 1, height: 22, background: T.bdr }} />
          <FilterGroup
            label="License"
            value={license}
            onChange={setLicense}
            options={[
              ["all", "All"],
              ["oss", "OSS"],
              ["openish", "Open-ish"],
              ["commercial", "Commercial"],
            ]}
          />

          {/* Search with icon + ⌘K hint */}
          <div
            style={{
              flex: "1 1 260px",
              minWidth: 240,
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke={T.fgMute}
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: "absolute",
                left: 13,
                pointerEvents: "none",
              }}
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              ref={searchRef}
              className="gdrc-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search name, query, deployment, notes…"
              style={{
                width: "100%",
                background: T.bg0,
                border: `1px solid ${T.bdr}`,
                borderRadius: 10,
                padding: "10px 58px 10px 36px",
                color: T.fg,
                fontSize: 13,
                fontFamily: "inherit",
                outline: "none",
                transition: "all 0.2s ease",
              }}
            />
            <span
              className="gdrc-kbd"
              style={{
                position: "absolute",
                right: 10,
                pointerEvents: "none",
              }}
              aria-hidden="true"
            >
              ⌘K
            </span>
          </div>
        </section>

        {/* ACTIVE CHIPS + RESULTS COUNT */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
            paddingLeft: 4,
          }}
        >
          <div style={{ fontSize: 12, color: T.fgMute, fontWeight: 400 }}>
            <span
              style={{
                color: T.fg,
                fontWeight: 600,
                fontFamily: "'JetBrains Mono', monospace",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {rows.length}
            </span>
            <span> of {DB.length} entries</span>
          </div>
          {activeChips.length > 0 && (
            <>
              <div style={{ width: 1, height: 16, background: T.bdr }} />
              {activeChips.map((chip, i) => (
                <Chip
                  key={i}
                  label={chip.label}
                  value={chip.value}
                  onClear={chip.clear}
                />
              ))}
              <button
                onClick={clearAll}
                style={{
                  background: "none",
                  border: "none",
                  color: T.fgMute,
                  fontSize: 11,
                  fontWeight: 500,
                  cursor: "pointer",
                  textDecoration: "underline",
                  textUnderlineOffset: 3,
                  padding: "4px 6px",
                  fontFamily: "inherit",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = T.fg)}
                onMouseLeave={(e) => (e.currentTarget.style.color = T.fgMute)}
              >
                Clear all
              </button>
            </>
          )}
        </div>

        {/* TABLE */}
        <div
          style={{
            overflowX: "auto",
            borderRadius: 16,
            border: `1px solid ${T.bdr}`,
            background: "rgba(10, 10, 17, 0.72)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            boxShadow:
              "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 40px 120px -40px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(124, 178, 255, 0.04)",
          }}
        >
          <table
            style={{
              width: "100%",
              minWidth: 1540,
              borderCollapse: "separate",
              borderSpacing: 0,
            }}
          >
            <thead>
              <tr
                style={{
                  background:
                    "linear-gradient(180deg, rgba(20,20,28,0.92) 0%, rgba(15,15,23,0.92) 100%)",
                }}
              >
                <SortableTh sortKey="name" sortState={sortState} onSort={onSort} width={280} sticky>
                  Database
                </SortableTh>
                <SortableTh sortKey="model" sortState={sortState} onSort={onSort} width={110}>
                  Model
                </SortableTh>
                <SortableTh sortKey="status" sortState={sortState} onSort={onSort} width={130}>
                  Status
                </SortableTh>
                <SortableTh sortKey="license" sortState={sortState} onSort={onSort} width={160}>
                  License
                </SortableTh>
                <Th width={220}>Query</Th>
                <SortableTh sortKey="vector" sortState={sortState} onSort={onSort} width={130}>
                  Vector
                </SortableTh>
                <Th width={300}>Vector Detail</Th>
                <Th width={90}>HA</Th>
                <Th width={180}>Deployment</Th>
                <Th width={260}>Best Fit</Th>
                <Th width={110}>Sources</Th>
              </tr>
            </thead>
            <tbody>
              {rows.map((db, index) => {
                const bg = index % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)";
                const modelMeta = MODEL_META[db.model];
                const statusMeta = STATUS_META[db.status];
                const vectorMeta = VECTOR_META[db.vector_strategy];
                const licenseMeta = LICENSE_META[db.license_type];

                return (
                  <tr
                    key={db.id}
                    className="gdrc-row"
                    style={{
                      background: bg,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(124, 178, 255, 0.045)";
                      const sticky = e.currentTarget.querySelector("td[data-sticky='1']");
                      if (sticky) {
                        sticky.style.background = "#141420";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = bg;
                      const sticky = e.currentTarget.querySelector("td[data-sticky='1']");
                      if (sticky) {
                        sticky.style.background = T.bg1;
                      }
                    }}
                  >
                    <td
                      data-sticky="1"
                      style={{
                        position: "sticky",
                        left: 0,
                        zIndex: 4,
                        background: T.bg1,
                        padding: "22px 16px 22px 20px",
                        verticalAlign: "top",
                        borderTop: `1px solid ${T.bdrSoft}`,
                        borderLeft: `3px solid ${modelMeta.color}`,
                        boxShadow: `inset 0 0 30px -10px ${modelMeta.color}10`,
                      }}
                    >
                      <a
                        href={db.website}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: T.fg,
                          fontWeight: 600,
                          textDecoration: "none",
                          fontSize: 14,
                          letterSpacing: -0.3,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = T.accent)}
                        onMouseLeave={(e) => (e.currentTarget.style.color = T.fg)}
                      >
                        {db.name}
                        <span className="gdrc-link-arrow" style={{ fontSize: 11, color: T.fgMute }}>
                          ↗
                        </span>
                      </a>
                      <div
                        style={{
                          marginTop: 8,
                          fontSize: 11.5,
                          color: T.fgMute,
                          lineHeight: 1.6,
                        }}
                      >
                        {db.notes}
                      </div>
                    </td>
                    <TdBordered>
                      <Pill color={modelMeta.color}>{modelMeta.label}</Pill>
                    </TdBordered>
                    <TdBordered>
                      <Pill color={statusMeta.color}>{statusMeta.label}</Pill>
                    </TdBordered>
                    <TdBordered>
                      <div
                        style={{
                          fontSize: 12.5,
                          fontWeight: 500,
                          color: licenseMeta.color,
                          letterSpacing: -0.1,
                        }}
                      >
                        {db.license}
                      </div>
                      <div
                        style={{
                          marginTop: 4,
                          fontSize: 10,
                          color: T.fgFaint,
                          letterSpacing: 0.3,
                          textTransform: "uppercase",
                          fontWeight: 600,
                        }}
                      >
                        {licenseMeta.label}
                      </div>
                    </TdBordered>
                    <TdBordered>
                      <span
                        style={{
                          fontSize: 11.5,
                          color: T.fgDim,
                          lineHeight: 1.65,
                          fontFamily: "'JetBrains Mono', monospace",
                        }}
                      >
                        {db.query_interfaces.join(" / ")}
                      </span>
                    </TdBordered>
                    <TdBordered>
                      <Pill color={vectorMeta.color}>{vectorMeta.label}</Pill>
                    </TdBordered>
                    <TdBordered>
                      <span style={{ fontSize: 12, color: T.fgDim, lineHeight: 1.65 }}>
                        {db.vector_summary}
                      </span>
                    </TdBordered>
                    <TdBordered>
                      <span style={{ fontSize: 12, color: T.fgDim }}>{db.ha}</span>
                    </TdBordered>
                    <TdBordered>
                      <span style={{ fontSize: 12, color: T.fgDim, lineHeight: 1.6 }}>
                        {db.deployment}
                      </span>
                    </TdBordered>
                    <TdBordered>
                      <span style={{ fontSize: 12, color: T.fgDim, lineHeight: 1.65 }}>
                        {db.best_fit}
                      </span>
                    </TdBordered>
                    <TdBordered>
                      <a
                        href={db.source_urls[0]}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: T.accent,
                          fontSize: 11.5,
                          fontWeight: 500,
                          textDecoration: "none",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          transition: "color 0.15s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#a8c9ff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = T.accent)}
                      >
                        {db.source_urls.length} official
                        <span className="gdrc-link-arrow" style={{ fontSize: 10 }}>↗</span>
                      </a>
                    </TdBordered>
                  </tr>
                );
              })}
              {rows.length === 0 && (
                <tr>
                  <td
                    colSpan={11}
                    style={{
                      textAlign: "center",
                      padding: "80px 20px",
                      color: T.fgMute,
                      fontSize: 13,
                      borderTop: `1px solid ${T.bdrSoft}`,
                    }}
                  >
                    No entries match the current filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* LEGEND + METHODOLOGY */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.1fr) minmax(0, 1fr)",
            gap: 16,
            marginTop: 40,
          }}
        >
          <Panel title="Methodology">
            <p style={{ color: T.fgDim, fontSize: 13.5, lineHeight: 1.8 }}>
              {META.methodology}
            </p>
          </Panel>
          <Panel title="Vector strategy legend">
            <div style={{ display: "grid", gap: 12 }}>
              {Object.entries(VECTOR_META).map(([key, meta]) => (
                <div key={key} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, minWidth: 86 }}>
                    <Pill color={meta.color}>{meta.label}</Pill>
                  </div>
                  <span style={{ fontSize: 12.5, color: T.fgDim, lineHeight: 1.65 }}>
                    {META.vector_strategies[key]}
                  </span>
                </div>
              ))}
            </div>
          </Panel>
        </section>

        <footer
          style={{
            marginTop: 48,
            paddingTop: 28,
            borderTop: `1px solid ${T.bdrSoft}`,
            fontSize: 12,
            color: T.fgMute,
            lineHeight: 1.75,
            textAlign: "center",
          }}
        >
          Canonical data lives in{" "}
          <code
            style={{
              background: "rgba(255,255,255,0.03)",
              padding: "3px 9px",
              borderRadius: 6,
              fontSize: 11,
              color: T.fgDim,
              fontFamily: "'JetBrains Mono', monospace",
              border: `1px solid ${T.bdr}`,
            }}
          >
            databases/databases.json
          </code>
          . One source of truth for UI, docs, and validation.
        </footer>
      </div>
    </div>
  );
}

function TdBordered({ children }) {
  return (
    <td
      style={{
        padding: "22px 16px",
        verticalAlign: "top",
        borderTop: `1px solid ${T.bdrSoft}`,
      }}
    >
      {children}
    </td>
  );
}

function FilterGroup({ label, value, onChange, options }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          fontSize: 9,
          color: T.fgFaint,
          fontWeight: 600,
          letterSpacing: 1.3,
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
      <div
        style={{
          display: "flex",
          gap: 2,
          background: T.bg0,
          border: `1px solid ${T.bdr}`,
          borderRadius: 9,
          padding: 3,
        }}
      >
        {options.map(([id, text]) => {
          const active = value === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              style={{
                border: "none",
                background: active ? T.bg3 : "transparent",
                color: active ? T.fg : T.fgMute,
                padding: "6px 12px",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: 11,
                fontWeight: 500,
                borderRadius: 7,
                transition: "all 0.15s ease",
                boxShadow: active ? `inset 0 0 0 1px ${T.bdr}` : "none",
              }}
              onMouseEnter={(e) => {
                if (!active) e.currentTarget.style.color = T.fgDim;
              }}
              onMouseLeave={(e) => {
                if (!active) e.currentTarget.style.color = T.fgMute;
              }}
            >
              {text}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Panel({ title, children }) {
  return (
    <div
      className="gdrc-card"
      style={{
        background: "rgba(10, 10, 17, 0.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: `1px solid ${T.bdr}`,
        borderRadius: 16,
        padding: 26,
        boxShadow: "0 1px 0 0 rgba(255,255,255,0.03) inset",
      }}
    >
      <div
        style={{
          fontSize: 9,
          fontWeight: 600,
          marginBottom: 16,
          color: T.fgFaint,
          letterSpacing: 1.4,
          textTransform: "uppercase",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}

function SummaryCard({ label, value, detail, accent }) {
  return (
    <div
      className="gdrc-card"
      style={{
        background: "rgba(10, 10, 17, 0.72)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        border: `1px solid ${T.bdr}`,
        borderRadius: 16,
        padding: "24px 24px 22px",
        position: "relative",
        overflow: "hidden",
        boxShadow:
          "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 60px -30px rgba(0, 0, 0, 0.8)",
      }}
    >
      {/* Corner accent glow */}
      {accent && (
        <div
          style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 140,
            height: 140,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accent}22 0%, transparent 65%)`,
            pointerEvents: "none",
          }}
        />
      )}
      {accent && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 2,
            height: "100%",
            background: `linear-gradient(180deg, ${accent} 0%, transparent 100%)`,
            opacity: 0.8,
          }}
        />
      )}
      <div
        style={{
          fontSize: 9,
          color: T.fgFaint,
          fontWeight: 600,
          letterSpacing: 1.4,
          textTransform: "uppercase",
          fontFamily: "'JetBrains Mono', monospace",
          position: "relative",
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: 48,
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: -2,
          color: T.fg,
          fontFamily: "'JetBrains Mono', monospace",
          fontVariantNumeric: "tabular-nums",
          position: "relative",
        }}
      >
        {value}
      </div>
      <div
        style={{
          marginTop: 14,
          fontSize: 12,
          color: T.fgDim,
          position: "relative",
        }}
      >
        {detail}
      </div>
    </div>
  );
}
