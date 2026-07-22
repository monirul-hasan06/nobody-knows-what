"use client";

import { useState } from "react";

const experiments = [
  {
    number: "001",
    title: "The Button That Does Something",
    copy: "Nobody remembers what. Pressing it twice is strongly discouraged.",
    tag: "MAYBE JS",
    status: "Kind of alive",
    color: "coral",
    symbol: "↯",
  },
  {
    number: "002",
    title: "404: Motivation Not Found",
    copy: "A productivity tool that politely tells you to take another break.",
    tag: "BAD IDEA",
    status: "Suspiciously useful",
    color: "acid",
    symbol: "☻",
  },
  {
    number: "003",
    title: "Deadline Generator 3000",
    copy: "Creates a deadline, ignores it, then creates a more urgent deadline.",
    tag: "CHAOS TECH",
    status: "Works on Fridays",
    color: "blue",
    symbol: "×",
  },
];

const terribleIdeas = [
  "A to-do app that deletes tasks when they look difficult.",
  "Dark mode, but every button controls a different light bulb.",
  "An AI that only answers: ‘C’mon, you can do better.’",
  "A README generator that writes ‘coming soon’ in 47 languages.",
  "A loading screen for projects that will never actually load.",
  "A ZIP file containing one smaller ZIP file. That’s the project.",
];

const embarrassmentArchive = [
  {
    number: "01",
    title: "The One-Letter CEO",
    copy: "Runs entire development teams with ‘ok’, ‘make’, and the legendary ‘n’. Fewer words. More ZIP files.",
    label: "MANAGEMENT",
  },
  {
    number: "02",
    title: "The Simple App Incident",
    copy: "Asked for a simple chat app. Added auth, encryption, real-time deletion, cron jobs, admin tools, security audits, and production deployment.",
    label: "SCOPE CREEP",
  },
  {
    number: "03",
    title: "Modern. More Modern. Undo.",
    copy: "The sacred design workflow: make it professional → make it modern → make it unique → actually, the old one was good.",
    label: "ART DIRECTION",
  },
  {
    number: "04",
    title: "No Rings Allowed",
    copy: "Borders and circular rings have been removed from multiple logos. Nobody knows what the rings did. Nobody dares to ask.",
    label: "PERSONAL FEUD",
  },
  {
    number: "05",
    title: "ZIP Before Breakfast",
    copy: "Can request an entire production-ready platform and ask for the downloadable ZIP before the database has emotionally prepared itself.",
    label: "DELIVERY SPEED",
  },
  {
    number: "06",
    title: "Thirty-Five Years of AI Experience",
    copy: "Regularly promotes newborn AI into a designer with 35 years of experience. Retirement benefits remain unconfirmed.",
    label: "HIRING",
  },
  {
    number: "07",
    title: "Kind of Solved",
    copy: "Reports bugs with the terrifyingly precise diagnosis: ‘Kind of solved, but still have some error.’ Developers begin meditation.",
    label: "QA REPORT",
  },
  {
    number: "08",
    title: "Make It Clear",
    copy: "Uploads a blurry image and calmly expects an AI to become a full forensic CCTV restoration laboratory.",
    label: "IMAGE OPS",
  },
  {
    number: "09",
    title: "Career Tab Overload",
    copy: "Math, DLD, cybersecurity, Figma, editing, web development, and content creation—all open at once like a human browser with 97 tabs.",
    label: "MULTICLASS",
  },
  {
    number: "10",
    title: "Tutorial Speedrun",
    copy: "Requests step-by-step instructions, then speedruns every step with ‘n, n, n’ until the final boss: ‘give full project ZIP.’",
    label: "EDUCATION",
  },
  {
    number: "11",
    title: "Nobody Knows What",
    copy: "Opened a repository called ‘You Know Who’ without knowing what to put in it—then opened this one because honesty won.",
    label: "LORE",
  },
  {
    number: "12",
    title: "Roast as a Service",
    copy: "Asked ‘আর কিছু?’ so many times that even personal embarrassment needed versions, updates, and a production release.",
    label: "META",
  },
];

export default function Home() {
  const [ideaIndex, setIdeaIndex] = useState(0);

  const scrollToExperiments = () => {
    document
      .querySelector("#experiments")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const generateIdea = () => {
    setIdeaIndex((current) => (current + 1) % terribleIdeas.length);
  };

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Nobody Knows What home">
          NKW
        </a>
        <nav aria-label="Main navigation">
          <a href="#experiments">Experiments</a>
          <a href="#about">About</a>
          <a href="#roasts">Roasts</a>
          <a href="#creator">Creator</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A repo for questionable ideas</p>
          <h1>
            Nobody
            <br />
            Knows
            <br />
            What
          </h1>
          <p className="intro">
            Random experiments, unfinished ideas, and tiny disasters that
            somehow work.
          </p>
          <div className="hero-actions">
            <button className="button button-primary" onClick={scrollToExperiments}>
              Explore the chaos <span aria-hidden="true">↓</span>
            </button>
            <a
              className="button button-secondary"
              href="https://github.com/monirul-hasan06/nobody-knows-what"
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="chaos-board" aria-label="A playful collage of code and project status">
          <div className="code-window card-shadow">
            <div className="window-dots" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <pre>
              <code>
                <span>01</span> const <b>chaos</b> = <em>true</em>;{"\n"}
                <span>02</span> while (idea = <strong>random</strong>()) {"{"}{"\n"}
                <span>03</span>   try {"{"} <mark>ship_it()</mark>; {"}"}{"\n"}
                <span>04</span>   catch (¯\\_(ツ)_/¯) {"{"}{"\n"}
                <span>05</span>     console.log(<mark>"who knows"</mark>);{"\n"}
                <span>06</span>   {"}"}{"\n"}
                <span>07</span> {"}"}
              </code>
            </pre>
          </div>

          <div className="asterisk-card card-shadow" aria-hidden="true">✱</div>

          <div className="error-card card-shadow" aria-hidden="true">
            <div className="error-grid">
              {Array.from({ length: 9 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
            <b>×</b>
            <span>○</span>
          </div>

          <div className="file-card card-shadow">
            <b>/chaos</b>
            <ul>
              <li>maybe_this_works.js</li>
              <li>idk.py</li>
              <li>what_even_is_this.ts</li>
              <li>nope.md</li>
              <li>try_again.sh</li>
            </ul>
          </div>

          <div className="status-card card-shadow">
            <small>Current status</small>
            <hr />
            <p>Kind of working.</p>
            <span aria-hidden="true">☺</span>
          </div>

          <div className="blue-square card-shadow" aria-hidden="true" />
          <div className="checker" aria-hidden="true" />
          <div className="dots" aria-hidden="true">•••••</div>
          <div className="stripes" aria-hidden="true" />
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          <span>Build first</span><b>✱</b><span>Explain later</span><b>✱</b>
          <span>Maybe it works</span><b>✱</b><span>No refunds</span><b>✱</b>
          <span>Build first</span><b>✱</b><span>Explain later</span><b>✱</b>
          <span>Maybe it works</span><b>✱</b><span>No refunds</span><b>✱</b>
        </div>
      </div>

      <section id="experiments" className="experiments-section">
        <div className="section-heading">
          <p>[ CURRENTLY CAUSING PROBLEMS ]</p>
          <h2>Recent questionable decisions</h2>
          <span aria-hidden="true">03-ish</span>
        </div>

        <div className="experiment-grid">
          {experiments.map((experiment) => (
            <article className={`experiment-card ${experiment.color}`} key={experiment.number}>
              <div className="card-topline">
                <span>EXP—{experiment.number}</span>
                <span>{experiment.tag}</span>
              </div>
              <div className="experiment-symbol" aria-hidden="true">
                {experiment.symbol}
              </div>
              <h3>{experiment.title}</h3>
              <p>{experiment.copy}</p>
              <footer>
                <span className="status-light" aria-hidden="true" />
                {experiment.status}
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="chaos-lab" aria-labelledby="chaos-lab-title">
        <div className="lab-copy">
          <p className="section-kicker">Free bad idea included</p>
          <h2 id="chaos-lab-title">The Chaos Generator™</h2>
          <p>
            Out of ideas? Excellent. Let a badly supervised algorithm make the
            next questionable decision for you.
          </p>
          <button className="button lab-button" onClick={generateIdea}>
            Generate another disaster <span aria-hidden="true">↻</span>
          </button>
        </div>

        <div className="idea-machine">
          <div className="machine-label">
            <span>OUTPUT_{String(ideaIndex + 1).padStart(2, "0")}</span>
            <span>CONFIDENCE: 12%</span>
          </div>
          <p aria-live="polite">“{terribleIdeas[ideaIndex]}”</p>
          <div className="machine-footer">
            <span>Totally original*</span>
            <span>*probably</span>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-title">
          <p>[ ABOUT THIS BEAUTIFUL MISTAKE ]</p>
          <h2>
            No roadmap.
            <br />
            No niche.
            <br />
            No problem.
          </h2>
        </div>

        <div className="about-copy">
          <p className="about-lead">
            Nobody Knows What is a home for small experiments, big curiosity,
            and code that works for reasons we are afraid to investigate.
          </p>
          <ol>
            <li>
              <span>01</span>
              <div><b>Random experiments</b><p>Ideas too strange for a serious repo.</p></div>
            </li>
            <li>
              <span>02</span>
              <div><b>Learning in public</b><p>Including the bugs. Especially the bugs.</p></div>
            </li>
            <li>
              <span>03</span>
              <div><b>Zero fake perfection</b><p>If it runs once, we celebrate responsibly.</p></div>
            </li>
          </ol>
        </div>
      </section>

      <section id="creator" className="creator-section" aria-labelledby="creator-title">
        <div className="creator-intro">
          <p className="creator-kicker">[ PERSON RESPONSIBLE FOR THIS MESS ]</p>
          <span className="creator-stamp" aria-hidden="true">FOUND<br />HIM</span>
          <h2 id="creator-title">Monirul<br />Hasan Mithu</h2>
          <p>
            Builder of this beautiful mistake, collector of questionable ideas,
            and the human who kept pressing <strong>“make it modern.”</strong>
          </p>
        </div>

        <div className="creator-links" aria-label="Creator links">
          <a href="https://www.fb.com/monirul.hasan06" target="_blank" rel="noreferrer">
            <span>01 / FACEBOOK</span>
            <b>monirul.hasan06</b>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="https://www.github.com/monirul-hasan06" target="_blank" rel="noreferrer">
            <span>02 / GITHUB</span>
            <b>monirul-hasan06</b>
            <i aria-hidden="true">↗</i>
          </a>
          <a href="https://me-at-portfolio-web.vercel.app" target="_blank" rel="noreferrer">
            <span>03 / PORTFOLIO</span>
            <b>See what else I made</b>
            <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>

      <section id="roasts" className="roast-section" aria-labelledby="roast-title">
        <div className="roast-heading">
          <div>
            <p>[ CLASSIFIED: PUBLICLY EMBARRASSING ]</p>
            <h2 id="roast-title">The embarrassment archive</h2>
          </div>
          <span aria-hidden="true">SELF<br />ROASTED</span>
        </div>

        <p className="roast-intro">
          Harmless evidence collected from years of ambitious ideas, mysterious
          feedback, and an absolutely unreasonable demand for downloadable ZIP files.
        </p>

        <div className="roast-grid">
          {embarrassmentArchive.map((item) => (
            <article className="roast-card" key={item.number}>
              <div className="roast-meta">
                <span>CASE #{item.number}</span>
                <span>{item.label}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <p className="roast-disclaimer">
          No private secrets were leaked. Only the funny evidence Monirul has already
          left at the scene. <span aria-hidden="true">☺</span>
        </p>
      </section>

      <section className="final-cta">
        <div className="cta-sticker" aria-hidden="true">100%<br />UNSURE</div>
        <p>Clone it. Break it. Pretend it was research.</p>
        <a
          className="button button-dark"
          href="https://github.com/monirul-hasan06/nobody-knows-what"
          target="_blank"
          rel="noreferrer"
        >
          Enter the repo <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="site-footer">
        <a className="footer-logo" href="#top">NKW</a>
        <p>Made by <a href="#creator">Monirul Hasan Mithu</a> with curiosity, questionable judgment, and Ctrl+Z.</p>
        <a href="#top">Back to chaos ↑</a>
      </footer>

      <section className="sr-only" aria-label="Project note">
        <p>More questionable decisions live down here.</p>
      </section>
    </main>
  );
}
