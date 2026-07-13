import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="section" style={{ paddingTop: 90 }}>
      <div className="container center" style={{ maxWidth: 620 }}>
        <div className="offer-headline" style={{ fontSize: "4rem" }}><span>404</span></div>
        <h1>We couldn&apos;t find that page</h1>
        <p className="lead" style={{ margin: "0 auto 26px" }}>
          The page may have moved. Let&apos;s get you back to the best poker bonuses.
        </p>
        <div className="hero-cta" style={{ justifyContent: "center" }}>
          <Link href="/" className="btn btn-primary">Back to home</Link>
          <Link href="/best-poker-bonuses/" className="btn btn-ghost">Best bonuses</Link>
        </div>
      </div>
    </section>
  );
}
