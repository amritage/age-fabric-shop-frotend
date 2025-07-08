import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <h3>Oops! Page not found</h3>
      <p>Whoops, this is embarrassing. Looks like the page you were looking for was not found.</p>
      <Link href="/" style={{ padding: "10px 20px", background: "#222", color: "#fff", borderRadius: "5px", textDecoration: "none" }}>
        Back to Home
      </Link>
    </div>
  );
}
