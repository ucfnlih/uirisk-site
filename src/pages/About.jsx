import { Link } from "react-router-dom";

export default function About() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui" }}>
      <Link to="/">← Back</Link>
      <h1>About</h1>
      <p>Placeholder content.</p>
    </div>
  );
}
