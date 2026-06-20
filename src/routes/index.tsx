import { createFileRoute } from "@tanstack/react-router";
import { WinkMark } from "@/components/WinkMark";

const REPO = "https://github.com/hackingpal/hackingpal";
const RELEASES = "https://github.com/hackingpal/hackingpal/releases/latest";
const DL = (asset: string) => `${RELEASES}/download/${asset}`;
const DOCKER_COMPOSE = "https://raw.githubusercontent.com/hackingpal/hackingpal/main/docker-compose.yml";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HackingPal — AI-assisted security workspace" },
      {
        name: "description",
        content:
          "Engagement-first security testing workspace. 75+ tools, Claude-powered copilot, scoped evidence, auto-drafted reports. macOS, Linux, Docker.",
      },
      { property: "og:title", content: "HackingPal — AI-assisted security workspace" },
      {
        property: "og:description",
        content:
          "Scoped engagements. 75+ tools. AI suggests, humans approve. Open source. macOS + Linux + Docker.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

const features = [
  {
    k: "01",
    title: "Engagement-first",
    body: "A scoped container for the work: targets, exclusions, evidence, and a report at the end. Lab mode skips the rails; Engagement mode enforces them.",
  },
  {
    k: "02",
    title: "AI suggests — humans approve",
    body: "A Claude-powered copilot interprets output, proposes the next check, and drafts the report. Every active attack still waits for a human click.",
  },
  {
    k: "03",
    title: "Auto-attached evidence",
    body: "Scan output, findings, screenshots — written to the engagement timeline as they happen. Append-only audit log records tool, target, argv, approver.",
  },
  {
    k: "04",
    title: "Playbooks, guided",
    body: "Bundles declare category, mode, and per-step rationale / success / approval. Passive Recon, Local Posture, Surface Inventory, Web App First Look ship built-in.",
  },
];

const toolGroups = [
  { name: "Discovery", items: ["LAN Scan", "Port Scanner", "Ping Sweep", "ARP", "mDNS"] },
  { name: "Recon", items: ["Subdomain Enum", "DNS Recon", "CT Logs", "Email Audit", "CMS Fingerprint"] },
  { name: "Web Exploit", items: ["Fuzz", "Auth Bypass", "SQLi Probe", "XSS Probe", "Takeover"] },
  { name: "Active Directory", items: ["Kerberos Roast", "BloodHound", "Lateral Move", "SMB Enum", "AdSpray"] },
  { name: "Cloud", items: ["S3 Scanner", "IAM Audit", "Public Buckets", "Metadata Probes"] },
  { name: "Forensics", items: ["Posture (macOS)", "Posture (Linux)", "Persistence Audit", "WPA Capture", "Packet Dump"] },
];

const downloads = [
  {
    platform: "macOS",
    arch: "Apple Silicon",
    file: "HackingPal-macos-arm64.dmg",
    url: DL("HackingPal-macos-arm64.dmg"),
    cta: "↓ Download .dmg",
    note: "Mount, drag to /Applications. Right-click → Open on first launch.",
  },
  {
    platform: "Linux",
    arch: "x86_64",
    file: "HackingPal-linux-x86_64.AppImage",
    url: DL("HackingPal-linux-x86_64.AppImage"),
    cta: "↓ Download .AppImage",
    note: "chmod +x, then run. Per-commit arm64 builds in Actions.",
  },
  {
    platform: "Docker",
    arch: "backend API",
    file: "docker compose up -d",
    url: DOCKER_COMPOSE,
    cta: "↓ Download docker-compose.yml",
    note: "Headless FastAPI sidecar. NET_RAW + NET_ADMIN for raw scans.",
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-mono">
      <Nav />
      <Hero />
      <Marquee />
      <Flow />
      <Features />
      <Tools />
      <Download />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <WinkMark size={28} variant="light" />
          <span className="text-sm tracking-[0.2em] font-semibold">HACKINGPAL</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest text-muted-foreground uppercase">
          <a href="#flow" className="hover:text-foreground transition">Flow</a>
          <a href="#features" className="hover:text-foreground transition">Features</a>
          <a href="#tools" className="hover:text-foreground transition">Tools</a>
          <a href="#download" className="hover:text-foreground transition">Download</a>
        </nav>
        <a
          href="#download"
          className="text-xs tracking-widest uppercase px-3 py-1.5 border border-terminal text-terminal hover:bg-terminal hover:text-accent-foreground transition"
        >
          ./download
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-scanlines pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-terminal to-transparent opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-32">
        <div className="flex items-center gap-2 text-xs text-muted-foreground tracking-widest uppercase mb-8 fade-up">
          <span className="inline-block w-2 h-2 bg-terminal rounded-full animate-pulse" />
          <span>v0.3.0 · MIT · macOS · Linux · Docker</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <p className="text-terminal text-sm mb-6 fade-up">
              <span className="opacity-60">~ $</span> cat ./mission.md
            </p>
            <h1 className="font-mono text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] fade-up">
              AI-assisted
              <br />
              security <span className="text-terminal glow-terminal">workspace</span>
              <span className="cursor-blink" />
            </h1>
            <p className="mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed font-sans fade-up">
              The center of the app is the <span className="text-foreground">engagement</span> — a scoped,
              named container for a single piece of work. Pick a playbook or pick tools one-by-one;
              every scan output, finding, and screenshot auto-attaches and becomes a report.
              A Claude copilot watches the session and helps you interpret it.
              <span className="text-terminal"> It suggests — it doesn't act.</span>
            </p>

            <div className="mt-10 flex flex-wrap gap-3 fade-up">
              <a
                href="#download"
                className="group inline-flex items-center gap-3 px-5 py-3 bg-terminal text-accent-foreground font-semibold tracking-wide hover:ring-terminal transition"
              >
                <span className="text-base">↓</span>
                <span>Download latest release</span>
                <span className="opacity-50 group-hover:translate-x-1 transition">→</span>
              </a>
              <a
                href={REPO}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-border hover:border-foreground transition"
              >
                <GhIcon />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <WinkMark size={180} variant="light" className="rounded-3xl shadow-2xl" />
              <div className="absolute -inset-4 bg-terminal/10 blur-3xl -z-10" />
            </div>
            <p className="mt-4 text-center text-xs tracking-[0.3em] text-muted-foreground">{">;)"}</p>
          </div>
        </div>

        <TerminalCard />
      </div>
    </section>
  );
}

function TerminalCard() {
  const lines = [
    { p: "engagement", c: "create acme-prod --scope acme.com,10.0.0.0/24", out: "✓ created · id=eng_8f3a" },
    { p: "playbook", c: "run web-app-first-look", out: "↳ 7 steps queued · awaiting approval" },
    { p: "approve", c: "step 1 → fuzz acme.com/api", out: "running · 312 reqs · 2 findings" },
    { p: "report", c: "draft --format md", out: "✓ drafted · 14 findings · 6 evidence files" },
  ];
  return (
    <div className="mt-20 mx-auto max-w-4xl border border-border bg-card/80 backdrop-blur rounded-lg overflow-hidden shadow-2xl fade-up">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border bg-secondary/50">
        <span className="w-3 h-3 rounded-full bg-destructive/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
        <span className="w-3 h-3 rounded-full bg-terminal/70" />
        <span className="ml-3 text-xs text-muted-foreground">mhp · engagement · acme-prod</span>
      </div>
      <div className="p-6 space-y-3 text-sm">
        {lines.map((l, i) => (
          <div key={i}>
            <div className="flex gap-2">
              <span className="text-terminal">mhp:{l.p} $</span>
              <span className="text-foreground">{l.c}</span>
            </div>
            <div className="pl-4 text-muted-foreground">{l.out}</div>
          </div>
        ))}
        <div className="flex gap-2 pt-1">
          <span className="text-terminal">mhp:report $</span>
          <span className="cursor-blink" />
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  const tags = [
    "75+ TOOLS",
    "ENGAGEMENT-FIRST",
    "CLAUDE COPILOT",
    "HUMAN-IN-THE-LOOP",
    "APPEND-ONLY AUDIT",
    "SCOPED EVIDENCE",
    "MIT LICENSE",
    "ELECTRON + REACT",
    "FASTAPI SIDECAR",
  ];
  return (
    <div className="border-b border-border overflow-hidden bg-secondary/30">
      <div className="flex gap-12 py-4 whitespace-nowrap animate-[scroll_40s_linear_infinite] text-xs tracking-[0.3em] text-muted-foreground">
        {[...tags, ...tags, ...tags].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="text-terminal">{">;)"}</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}

function Flow() {
  const steps = ["Engagement", "Targets", "Playbook", "Tools", "Evidence", "Report"];
  return (
    <section id="flow" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead kicker="// the flow" title="One arrow, end to end." />
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-3 sm:gap-4">
              <div className="px-4 py-3 border border-border bg-card hover:border-terminal transition group">
                <div className="text-[10px] tracking-widest text-muted-foreground">STEP {String(i + 1).padStart(2, "0")}</div>
                <div className="text-sm sm:text-base font-semibold group-hover:text-terminal transition">{s}</div>
              </div>
              {i < steps.length - 1 && <span className="text-terminal">→</span>}
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground font-sans max-w-2xl mx-auto">
          The 75+ individual tools — discovery, recon, web exploit, AD, cloud, forensics — are the
          <span className="text-foreground"> library</span> that lives inside engagements, not the product itself.
        </p>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead kicker="// principles" title="Built around how engagements actually run." />
        <div className="mt-12 grid md:grid-cols-2 gap-px bg-border">
          {features.map((f) => (
            <div key={f.k} className="bg-background p-8 hover:bg-card transition group">
              <div className="flex items-baseline justify-between mb-4">
                <span className="text-terminal text-xs tracking-widest">{f.k}</span>
                <span className="text-muted-foreground opacity-0 group-hover:opacity-100 transition">{">;)"}</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-sans">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section id="tools" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead
          kicker="// tool library"
          title="75+ tools, grouped the way the sidebar groups them."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toolGroups.map((g) => (
            <div key={g.name} className="border border-border p-6 hover:border-terminal/50 transition">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
                <h3 className="text-sm tracking-[0.2em] font-semibold">{g.name.toUpperCase()}</h3>
                <span className="text-xs text-muted-foreground">{g.items.length}+</span>
              </div>
              <ul className="space-y-2">
                {g.items.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition">
                    <span className="text-terminal opacity-60">$</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section id="download" className="border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHead kicker="// install" title="Grab a build. Run it." />
        <div className="mt-12 grid lg:grid-cols-3 gap-4">
          {downloads.map((d) => (
            <div key={d.platform} className="border border-border bg-card p-6 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs tracking-widest text-muted-foreground">{d.arch.toUpperCase()}</div>
                  <h3 className="text-2xl font-bold mt-1">{d.platform}</h3>
                </div>
                <WinkMark size={36} variant="light" />
              </div>
              <div className="px-3 py-2 bg-background border border-border text-xs font-mono text-terminal break-all">
                {d.file}
              </div>
              <p className="mt-4 text-sm text-muted-foreground font-sans flex-1">{d.note}</p>
              <a
                href={d.url}
                download={d.file}
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-terminal text-accent-foreground font-semibold tracking-wide hover:opacity-90 transition"
              >
                {d.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto border border-border bg-background p-6">
          <div className="text-xs tracking-widest text-muted-foreground mb-3">// FIRST RUN</div>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            First launch prompts for a fresh Keychain entry the first time it touches a privileged tool
            (tcpdump, nmap SYN/UDP/OS). For the AI Assistant, open{" "}
            <span className="text-foreground">Settings → API keys</span> and paste an Anthropic API key.
            All builds are unsigned — see <span className="text-terminal">docs/SIGNING.md</span> for what code-signing would take.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 grid sm:grid-cols-[auto_1fr_auto] gap-8 items-center">
        <div className="flex items-center gap-3">
          <WinkMark size={36} variant="light" />
          <div>
            <div className="text-sm font-bold tracking-widest">HACKINGPAL</div>
            <div className="text-xs text-muted-foreground">AI-assisted security workspace</div>
          </div>
        </div>
        <div className="text-xs text-muted-foreground text-center font-sans">
          For <span className="text-foreground">authorized engagements only</span>. MIT licensed. Use responsibly.
        </div>
        <div className="flex items-center gap-4 justify-self-end">
          <a href={REPO} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition" aria-label="GitHub">
            <GhIcon />
          </a>
          <a href={RELEASES} target="_blank" rel="noreferrer" className="text-xs tracking-widest uppercase text-terminal hover:underline">
            releases →
          </a>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-[10px] tracking-[0.4em] text-muted-foreground">
        {">;)"} &nbsp;·&nbsp; MADE FOR PEOPLE WHO READ MAN PAGES
      </div>
    </footer>
  );
}

function SectionHead({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs tracking-[0.3em] text-terminal mb-4">{kicker}</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">{title}</h2>
    </div>
  );
}

function GhIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.99 5.24.99 11.51c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-.95-.02-1.87-3.06.66-3.71-1.47-3.71-1.47-.5-1.28-1.23-1.62-1.23-1.62-1-.68.08-.67.08-.67 1.11.08 1.7 1.14 1.7 1.14.99 1.69 2.59 1.2 3.22.92.1-.72.39-1.2.7-1.48-2.44-.28-5-1.22-5-5.43 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.91 0 0 .93-.3 3.04 1.13a10.56 10.56 0 0 1 5.54 0c2.11-1.43 3.04-1.13 3.04-1.13.6 1.51.22 2.63.11 2.91.7.77 1.13 1.75 1.13 2.95 0 4.22-2.57 5.15-5.02 5.42.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.05 0 .3.2.64.76.53A11.02 11.02 0 0 0 23.01 11.5C23.01 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}
