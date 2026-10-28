import { Link, createFileRoute } from "@tanstack/react-router";

import { DownloadLink, ViewLink } from "@/components/Tracked";
import { pageHead } from "@/lib/page-head";
import { PUBLICATION_URL } from "@/lib/site-data";
import { usePageView } from "@/lib/use-stats";

export const Route = createFileRoute("/")({
  head: pageHead(),
  component: HomePage,
});

function HomePage() {
  usePageView("home");

  return (
    <section className="page active" id="home">
      <div className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="pulse"></span> HERITAGE · INTELLIGENCE · INNOVATION
          </p>
          <h1>
            Preserving the past.
            <br />
            <em>Designing</em> the future.
          </h1>
          <p className="hero-lead">
            I'm <b>Falola Titilope Rosemary</b>, a digital cultural heritage and data professional
            connecting historical preservation, artificial intelligence, and high-impact technology
            systems.
          </p>
          <p className="hero-sub">
            From digitizing historical collections to coordinating enterprise technology operations,
            I make complex information more accessible, useful, and enduring.
          </p>
          <div className="actions">
            <Link className="btn primary" to="/experience" data-page="experience">
              Explore my experience <span>↗</span>
            </Link>
            <DownloadLink className="btn secondary" id="resume">
              Download CV <span>↓</span>
            </DownloadLink>
          </div>
          <div className="hero-location">
            Based in Wilmington, Delaware, USA <span>•</span> Open to research conversations
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-label">THE INTERSECTION OF</div>
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>
          <div className="center-orb">
            F<span>·</span>R
          </div>
          <div className="floating-tag t1">CULTURAL HERITAGE</div>
          <div className="floating-tag t2">AI & 3D SYSTEMS</div>
          <div className="floating-tag t3">DATA INTELLIGENCE</div>
          <div className="visual-footer">
            HISTORY × TECHNOLOGY <span>01 / 03</span>
          </div>
        </div>
      </div>
      <div className="metrics container">
        <div>
          <strong>
            8,000<span>+</span>
          </strong>
          <span>Historical artifacts digitized</span>
        </div>
        <div>
          <strong>
            $9<span>B</span>
          </strong>
          <span>Enterprise planning portfolio supported</span>
        </div>
        <div>
          <strong>2024</strong>
          <span>Peer-reviewed AI research publication</span>
        </div>
        <div>
          <strong>3</strong>
          <span>Academic qualifications + graduate certificate</span>
        </div>
      </div>
      <section className="section light">
        <div className="container">
          <div className="section-top">
            <div>
              <p className="kicker">01 / MY JOURNEY</p>
              <h2>
                Two worlds. <em>One purpose.</em>
              </h2>
            </div>
            <p>
              Combining a foundation in historical research with analytical and operational
              expertise to make knowledge more useful and systems more effective.
            </p>
          </div>
          <div className="story-grid">
            <article className="story-card">
              <span className="card-number">01</span>
              <div className="story-icon">◈</div>
              <h3>Understand the past</h3>
              <p>
                History, archaeology and museum studies shaped my commitment to preserving and
                interpreting cultural knowledge.
              </p>
              <span>HISTORY & PUBLIC ENGAGEMENT</span>
            </article>
            <article className="story-card">
              <span className="card-number">02</span>
              <div className="story-icon">◎</div>
              <h3>Digitize knowledge</h3>
              <p>
                At Atlanta History Center and the University of West Georgia, I used digitization,
                AI, 3D techniques and GIS to expand access to collections.
              </p>
              <span>DIGITAL HERITAGE & RESEARCH</span>
            </article>
            <article className="story-card">
              <span className="card-number">03</span>
              <div className="story-icon">↗</div>
              <h3>Scale impact</h3>
              <p>
                At JPMorgan Chase, I contribute to enterprise planning, product delivery and
                improving digital commerce experiences at scale.
              </p>
              <span>DATA & ENTERPRISE SYSTEMS</span>
            </article>
          </div>
        </div>
      </section>
      <section className="section dark-block">
        <div className="container two-col">
          <div>
            <p className="kicker">02 / FEATURED CONTRIBUTION</p>
            <h2>
              Making heritage
              <br />
              <em>accessible to more people.</em>
            </h2>
            <p className="block-lead">
              At Atlanta History Center, I digitized and cataloged more than 8,000 historical
              artifacts, applied AI and 3D modeling techniques, and supported AR experiences for
              public engagement.
            </p>
            <Link className="text-link" to="/experience" data-page="experience">
              Explore the full story ↗
            </Link>
          </div>
          <div className="showcase-panel">
            <div className="panel-top">DIGITAL PRESERVATION / SELECTED WORK</div>
            <div className="artifact-shape">
              <div className="artifact-inner">
                8,000<span>+</span>
              </div>
            </div>
            <div className="panel-bottom">
              <span>RESEARCH · DIGITIZATION · ACCESS</span>
              <span>2023</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section light">
        <div className="container">
          <div className="section-top">
            <div>
              <p className="kicker">03 / EXPLORE</p>
              <h2>
                Research that meets <em>real-world challenges.</em>
              </h2>
            </div>
            <Link className="text-link dark-link" to="/publications" data-page="publications">
              All publications & media ↗
            </Link>
          </div>
          <div className="feature-row">
            <div className="feature-art">
              AI<span>↗</span>
            </div>
            <div>
              <p className="small-label">PEER-REVIEWED PUBLICATION · 2024</p>
              <h3>
                Leveraging Artificial Intelligence and Data Analytics for Enhancing Museum
                Experiences
              </h3>
              <p>
                Exploring how AI and analytics can improve museum systems, visitor experiences and
                cultural engagement.
              </p>
              <ViewLink className="text-link dark-link" id="publication-ai" href={PUBLICATION_URL}>
                Read the research ↗
              </ViewLink>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
