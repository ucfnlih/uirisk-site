import MapPlaceholder from "../components/MapPlaceholder";
import HomeButtons from "../components/HomeButtons";

export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", maxWidth: 1100, margin: "0 auto", padding: 24 }}>
      {/* Hero */}
      <header style={{ padding: "28px 0 16px 0" }}>
        <h1 style={{ fontSize: 44, lineHeight: 1.1, margin: 0 }}>Unemployment Risk Demo</h1>
        <p style={{ marginTop: 12, fontSize: 16, color: "#444", maxWidth: 820 }}>
          A prototype site showcasing interactive maps of unemployment risk across time, industry, and location.
        </p>
      </header>

      {/* Map */}
      <section style={{ marginTop: 10 }}>
        <MapPlaceholder />
      </section>

      {/* Navigation cards */}
      <section style={{ marginTop: 8 }}>
        <HomeButtons />
      </section>

      <footer style={{ marginTop: 40, paddingTop: 16, borderTop: "1px solid #eee", color: "#777", fontSize: 12 }}>
        © {new Date().getFullYear()} UI Risk Demo (Prototype)
      </footer>
    </div>
  );
}
