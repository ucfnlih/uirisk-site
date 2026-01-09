import { Link } from "react-router-dom";

const cards = [
  { title: "Project Vision", path: "/vision", desc: "What this project aims to achieve." },
  { title: "Data Description", path: "/data", desc: "Sources, definitions, and coverage." },
  { title: "Explore City", path: "/city", desc: "Interactive city-level exploration." },
  { title: "Explore Industry", path: "/industry", desc: "Industry (NAICS) exploration." },
  { title: "About", path: "/about", desc: "Team and contact info." },
];

export default function HomeButtons() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginTop: 18 }}>
      {cards.map((c) => (
        <Link
          key={c.path}
          to={c.path}
          style={{
            textDecoration: "none",
            border: "1px solid #eaeaea",
            borderRadius: 16,
            padding: 16,
            color: "inherit",
            background: "white",
            boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
          }}
        >
          <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{c.title}</div>
          <div style={{ color: "#666", fontSize: 13, lineHeight: 1.4 }}>{c.desc}</div>
        </Link>
      ))}
    </div>
  );
}
