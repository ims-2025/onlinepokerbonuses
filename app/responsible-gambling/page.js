import { Breadcrumbs } from "../components/ui";

export const metadata = {
  title: { absolute: "Responsible Gambling — Play Safe & Get Support" },
  description:
    "Responsible gambling resources for US and Canada players: how to set limits, recognise problem gambling, and where to get free, confidential help.",
  alternates: { canonical: "/responsible-gambling/" },
  robots: { index: true, follow: true },
};

export default function ResponsibleGamblingPage() {
  return (
    <section className="page-hero" style={{ paddingBottom: 60 }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Responsible Gambling" }]} />
        <h1>Responsible Gambling</h1>
        <div className="prose">
          <p className="lead">
            Poker should be entertainment you can afford — never a source of income or a way to
            recover losses. If it ever stops being fun, it&apos;s time to pause.
          </p>

          <h2>Play within your limits</h2>
          <ul>
            <li>Set a budget before you play and treat it as the cost of entertainment.</li>
            <li>Only deposit money you can comfortably afford to lose.</li>
            <li>Set deposit, loss and session-time limits in your account tools.</li>
            <li>Never chase losses or borrow money to play.</li>
            <li>Take regular breaks and don&apos;t play when stressed, tired or upset.</li>
            <li>Keep gambling in balance with the rest of your life.</li>
          </ul>

          <h2>Warning signs of problem gambling</h2>
          <ul>
            <li>Spending more time or money than you intended.</li>
            <li>Chasing losses to &ldquo;get even.&rdquo;</li>
            <li>Hiding or lying about how much you play.</li>
            <li>Gambling to escape stress or low mood.</li>
            <li>Borrowing money or neglecting responsibilities to play.</li>
          </ul>
          <p>If any of these feel familiar, free and confidential help is available.</p>

          <h2>Where to get help</h2>
          <div className="card" style={{ background: "var(--bg-2)" }}>
            <h3 style={{ marginTop: 0 }}>United States</h3>
            <ul className="checklist">
              <li><strong style={{ color: "var(--text)" }}>1-800-GAMBLER</strong> — National Problem Gambling Helpline (call or text), 24/7.</li>
              <li><strong style={{ color: "var(--text)" }}>National Council on Problem Gambling</strong> — ncpgambling.org</li>
              <li><strong style={{ color: "var(--text)" }}>Gamblers Anonymous</strong> — gamblersanonymous.org</li>
            </ul>
          </div>
          <div className="card" style={{ background: "var(--bg-2)", marginTop: 16 }}>
            <h3 style={{ marginTop: 0 }}>Canada</h3>
            <ul className="checklist">
              <li><strong style={{ color: "var(--text)" }}>ConnexOntario</strong> — 1-866-531-2600, 24/7 free and confidential support.</li>
              <li><strong style={{ color: "var(--text)" }}>Canada Safety Council / provincial helplines</strong> — most provinces run a dedicated problem-gambling line.</li>
              <li><strong style={{ color: "var(--text)" }}>Gamblers Anonymous</strong> — meetings across Canada.</li>
            </ul>
          </div>

          <div className="callout warn" style={{ marginTop: 24 }}>
            <strong>18+ (or the legal age where you live).</strong> Gambling can be addictive. Use
            self-exclusion and account limit tools if you need them, and reach out for support without
            hesitation — it&apos;s free, confidential, and it works.
          </div>
        </div>
      </div>
    </section>
  );
}
