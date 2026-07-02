/**
 * Graphic Novel Status Page
 * Design: Dark medieval fantasy — parchment headers, illuminated manuscript accents,
 * glowing horizontal progress bars in yellow/blue/green per the Word doc spec.
 *
 * Color legend:
 *   Yellow  (#F5C518) = stage 100% completed
 *   Blue    (#3B82F6) = currently in progress
 *   Green   (#22C55E) = entire graphic novel complete & ready for launch
 *   Dark    (#1a1a1a) = not yet started
 */

import React from "react";

// Stage names
const STAGES = [
  "Outlining / Planning",
  "Writing",
  "Storyboarding",
  "Artwork",
  "Artwork Revisions",
  "100% Complete",
];

type StageStatus = "done" | "active" | "pending";
type NovelStatus = "complete" | "in-progress" | "pending";

interface GraphicNovel {
  number: number;
  stageStatuses: StageStatus[]; // length 6, one per STAGE
  novelStatus: NovelStatus;
}

interface Part {
  label: string;
  novels: GraphicNovel[];
}

// Data derived from the Word document highlights
const PARTS: Part[] = [
  {
    label: "Part One",
    novels: [
      // GN #1-3: all stages complete (green)
      { number: 1, stageStatuses: ["done","done","done","done","done","done"], novelStatus: "complete" },
      { number: 2, stageStatuses: ["done","done","done","done","done","done"], novelStatus: "complete" },
      { number: 3, stageStatuses: ["done","done","done","done","done","done"], novelStatus: "complete" },
      // GN #4-6: through Artwork done, Artwork Revisions active
      { number: 4, stageStatuses: ["done","done","done","done","active","pending"], novelStatus: "in-progress" },
      { number: 5, stageStatuses: ["done","done","done","done","active","pending"], novelStatus: "in-progress" },
      { number: 6, stageStatuses: ["done","done","done","active","pending","pending"], novelStatus: "in-progress" },
    ],
  },
  {
    label: "Part Two",
    novels: [
      // GN #7-8: through Writing done, Artwork active
      { number: 7, stageStatuses: ["done","done","done","active","pending","pending"], novelStatus: "in-progress" },
      { number: 8, stageStatuses: ["done","done","active","pending","pending","pending"], novelStatus: "in-progress" },
      // GN #9-10: through Writing done, Storyboarding active
      { number: 9, stageStatuses: ["done","done","active","pending","pending","pending"], novelStatus: "in-progress" },
      { number: 10, stageStatuses: ["done","done","active","pending","pending","pending"], novelStatus: "in-progress" },
      // GN #11: Outlining done, Writing active
      { number: 11, stageStatuses: ["done","active","pending","pending","pending","pending"], novelStatus: "in-progress" },
      // GN #12: only Outlining done
      { number: 12, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
    ],
  },
  {
    label: "Part Three",
    novels: [
      { number: 13, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
      { number: 14, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
      { number: 15, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
      { number: 16, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
      { number: 17, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
      { number: 18, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
    ],
  },
  {
    label: "Part Four",
    novels: [
      { number: 19, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
      { number: 20, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
      { number: 21, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
      { number: 22, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
      { number: 23, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
      { number: 24, stageStatuses: ["done","pending","pending","pending","pending","pending"], novelStatus: "pending" },
    ],
  },
];

function stageColor(status: StageStatus, novelStatus: NovelStatus): string {
  if (novelStatus === "complete") return "#22C55E"; // entire GN is green
  if (status === "done") return "#F5C518";           // yellow = completed stage
  if (status === "active") return "#3B82F6";         // blue = in progress
  return "transparent";                              // pending = empty
}

function stageBorder(status: StageStatus, novelStatus: NovelStatus): string {
  if (novelStatus === "complete") return "#16A34A";
  if (status === "done") return "#D4A017";
  if (status === "active") return "#2563EB";
  return "#3a3a3a";
}

function stageGlow(status: StageStatus, novelStatus: NovelStatus): string {
  if (novelStatus === "complete") return "0 0 10px rgba(34,197,94,0.6), 0 0 20px rgba(34,197,94,0.3)";
  if (status === "active") return "0 0 12px rgba(59,130,246,0.8), 0 0 24px rgba(59,130,246,0.4)";
  if (status === "done") return "0 0 6px rgba(245,197,24,0.4)";
  return "none";
}

function novelBadgeStyle(novelStatus: NovelStatus): React.CSSProperties {
  if (novelStatus === "complete") return { background: "#14532D", border: "1px solid #22C55E", color: "#86EFAC" };
  if (novelStatus === "in-progress") return { background: "#1E3A5F", border: "1px solid #3B82F6", color: "#93C5FD" };
  return { background: "#1a1a1a", border: "1px solid #3a3a3a", color: "#6b7280" };
}

function novelBadgeLabel(novelStatus: NovelStatus): string {
  if (novelStatus === "complete") return "✦ Complete";
  if (novelStatus === "in-progress") return "⚔ In Progress";
  return "◦ Queued";
}

export default function GraphicNovelStatus() {
  return (
    <div className="min-h-screen bg-background" style={{ fontFamily: "'Cinzel', 'Georgia', serif" }}>

      {/* Hero header */}
      <div
        className="relative py-20 text-center overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #111111 60%, #0d0d0d 100%)",
          borderBottom: "2px solid #8B0000",
        }}
      >
        {/* Decorative corner ornaments */}
        <div className="absolute top-4 left-6 text-red-800 opacity-40 text-4xl select-none">✦</div>
        <div className="absolute top-4 right-6 text-red-800 opacity-40 text-4xl select-none">✦</div>
        <div className="absolute bottom-4 left-6 text-red-800 opacity-40 text-4xl select-none">✦</div>
        <div className="absolute bottom-4 right-6 text-red-800 opacity-40 text-4xl select-none">✦</div>

        {/* Horizontal rule lines */}
        <div className="absolute top-12 left-0 right-0 flex items-center px-16 opacity-20">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-700 to-transparent" />
        </div>
        <div className="absolute bottom-12 left-0 right-0 flex items-center px-16 opacity-20">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-red-700 to-transparent" />
        </div>

        <h1
          className="text-5xl md:text-7xl font-display mb-4 text-white"
          style={{ textShadow: "0 0 30px rgba(139,0,0,0.5), 0 2px 4px rgba(0,0,0,0.8)", letterSpacing: "0.05em" }}
        >
          GRAPHIC NOVEL STATUS
        </h1>
        <p className="text-lg text-gray-400 max-w-xl mx-auto px-4" style={{ fontFamily: "inherit" }}>
          Track our progress below! This dashboard is updated in real time. Every graphic novel is approximately 100 pages.
        </p>
      </div>

      {/* Legend */}
      <div className="py-8 px-4" style={{ background: "#0d0d0d", borderBottom: "1px solid #222" }}>
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 md:gap-10">
          {[
            { color: "#F5C518", border: "#D4A017", glow: "rgba(245,197,24,0.5)", label: "Stage Completed" },
            { color: "#3B82F6", border: "#2563EB", glow: "rgba(59,130,246,0.7)", label: "Currently In Progress" },
            { color: "#22C55E", border: "#16A34A", glow: "rgba(34,197,94,0.6)", label: "Graphic Novel 100% Complete" },
          ].map(({ color, border, glow, label }) => (
            <div key={label} className="flex items-center gap-3">
              <div
                className="w-8 h-5 rounded-sm flex-shrink-0"
                style={{
                  background: color,
                  border: `1px solid ${border}`,
                  boxShadow: `0 0 8px ${glow}`,
                }}
              />
              <span className="text-sm text-gray-300" style={{ fontFamily: "'Georgia', serif" }}>{label}</span>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-5 rounded-sm flex-shrink-0"
              style={{ background: "transparent", border: "1px solid #3a3a3a" }}
            />
            <span className="text-sm text-gray-300" style={{ fontFamily: "'Georgia', serif" }}>Not Yet Started</span>
          </div>
        </div>
      </div>

      {/* Parts */}
      <div className="py-12 px-4" style={{ background: "#0d0d0d" }}>
        <div className="max-w-5xl mx-auto space-y-16">
          {PARTS.map((part, partIdx) => (
            <div key={part.label}>
              {/* Part header — parchment scroll style */}
              <div className="relative flex items-center justify-center mb-10">
                <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #8B0000, transparent)" }} />
                <div
                  className="mx-6 px-8 py-2 text-center relative"
                  style={{
                    background: "linear-gradient(135deg, #1a0a0a 0%, #2a1010 50%, #1a0a0a 100%)",
                    border: "1px solid #8B0000",
                    boxShadow: "0 0 20px rgba(139,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                    clipPath: "polygon(8px 0%, calc(100% - 8px) 0%, 100% 50%, calc(100% - 8px) 100%, 8px 100%, 0% 50%)",
                    minWidth: "180px",
                  }}
                >
                  <span
                    className="text-xl font-display tracking-widest uppercase"
                    style={{ color: "#E8C97E", textShadow: "0 0 10px rgba(232,201,126,0.4)" }}
                  >
                    {part.label}
                  </span>
                </div>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #8B0000, transparent)" }} />
              </div>

              {/* Novels */}
              <div className="space-y-6">
                {part.novels.map((novel) => (
                  <div
                    key={novel.number}
                    className="rounded-sm"
                    style={{
                      background: "linear-gradient(135deg, #111111 0%, #161616 100%)",
                      border: "1px solid #2a2a2a",
                      boxShadow: novel.novelStatus === "complete"
                        ? "0 0 15px rgba(34,197,94,0.15), inset 0 1px 0 rgba(255,255,255,0.03)"
                        : novel.novelStatus === "in-progress"
                        ? "0 0 15px rgba(59,130,246,0.1), inset 0 1px 0 rgba(255,255,255,0.03)"
                        : "inset 0 1px 0 rgba(255,255,255,0.02)",
                    }}
                  >
                    {/* Novel header row */}
                    <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: "1px solid #1e1e1e" }}>
                      <div className="flex items-center gap-3">
                        {/* Roman numeral ornament */}
                        <span
                          className="text-xs font-display tracking-widest"
                          style={{ color: "#8B0000", opacity: 0.7 }}
                        >
                          ✦
                        </span>
                        <h3
                          className="text-base md:text-lg font-display tracking-wide"
                          style={{ color: "#E8C97E", textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
                        >
                          Graphic Novel #{novel.number}
                        </h3>
                      </div>
                      <span
                        className="text-xs px-3 py-1 rounded-sm font-display tracking-wider"
                        style={novelBadgeStyle(novel.novelStatus)}
                      >
                        {novelBadgeLabel(novel.novelStatus)}
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="px-5 py-4">
                      {/* Stage labels */}
                      <div className="hidden md:grid mb-2" style={{ gridTemplateColumns: `repeat(${STAGES.length}, 1fr)`, gap: "3px" }}>
                        {STAGES.map((stage, si) => (
                          <div
                            key={si}
                            className="text-center"
                            style={{
                              fontSize: "0.6rem",
                              color: novel.stageStatuses[si] === "pending" ? "#444" : "#aaa",
                              fontFamily: "'Georgia', serif",
                              letterSpacing: "0.03em",
                              lineHeight: "1.2",
                            }}
                          >
                            {stage}
                          </div>
                        ))}
                      </div>

                      {/* Bar segments */}
                      <div className="flex gap-0.5 md:gap-1" style={{ height: "28px" }}>
                        {STAGES.map((stage, si) => {
                          const status = novel.stageStatuses[si];
                          const bg = stageColor(status, novel.novelStatus);
                          const border = stageBorder(status, novel.novelStatus);
                          const glow = stageGlow(status, novel.novelStatus);
                          const isFirst = si === 0;
                          const isLast = si === STAGES.length - 1;
                          return (
                            <div
                              key={si}
                              className="flex-1 relative flex items-center justify-center overflow-hidden"
                              style={{
                                background: bg,
                                border: `1px solid ${border}`,
                                boxShadow: glow,
                                borderRadius: isFirst ? "3px 0 0 3px" : isLast ? "0 3px 3px 0" : "0",
                                transition: "all 0.3s ease",
                              }}
                            >
                              {/* Shimmer overlay for active */}
                              {status === "active" && novel.novelStatus !== "complete" && (
                                <div
                                  className="absolute inset-0"
                                  style={{
                                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%)",
                                    animation: "shimmer 2s infinite",
                                  }}
                                />
                              )}
                              {/* Texture overlay for done */}
                              {(status === "done" || novel.novelStatus === "complete") && (
                                <div
                                  className="absolute inset-0 opacity-20"
                                  style={{
                                    backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 4px)",
                                  }}
                                />
                              )}
                              {/* Checkmark for completed (yellow) and fully complete (green) segments */}
                              {(novel.novelStatus === "complete" || status === "done") && (
                                <span className="relative z-10 text-xs font-bold" style={{ color: novel.novelStatus === "complete" ? "rgba(0,80,0,0.85)" : "rgba(100,70,0,0.85)", textShadow: "0 1px 1px rgba(255,255,255,0.3)", fontSize: "0.65rem" }}>✓</span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Mobile stage labels — rotated, shown only on small screens via CSS class */}
                      <div className="gn-mobile-labels mt-1" style={{ display: "grid", gridTemplateColumns: `repeat(${STAGES.length}, 1fr)`, gap: "3px", height: "72px", overflow: "visible" }}>
                        {STAGES.map((stage, si) => {
                          const status = novel.stageStatuses[si];
                          const color = novel.novelStatus === "complete"
                            ? "#86EFAC"
                            : status === "active"
                            ? "#93C5FD"
                            : status === "done"
                            ? "#FDE68A"
                            : "#444";
                          return (
                            <div
                              key={si}
                              style={{ position: "relative", overflow: "visible", display: "flex", justifyContent: "center" }}
                            >
                              <span
                                style={{
                                  position: "absolute",
                                  top: "4px",
                                  left: "50%",
                                  transformOrigin: "left top",
                                  transform: "rotate(45deg) translateX(-50%)",
                                  whiteSpace: "nowrap",
                                  fontSize: "0.55rem",
                                  color,
                                  fontFamily: "'Georgia', serif",
                                  lineHeight: 1,
                                }}
                              >
                                {stage}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer ornament */}
      <div className="py-8 text-center" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>
        <span className="text-red-900 opacity-40 text-2xl select-none">✦ ✦ ✦</span>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @media (min-width: 768px) {
          .gn-mobile-labels { display: none !important; }
        }
      `}</style>
    </div>
  );
}
