import { createFileRoute } from "@tanstack/react-router";

import { DownloadLink } from "@/components/Tracked";
import { pageHead } from "@/lib/page-head";
import { usePageView, useSiteStats } from "@/lib/use-stats";

export const Route = createFileRoute("/resources")({
  head: pageHead("Resources"),
  component: ResourcesPage,
});

function ResourcesPage() {
  usePageView("resources");
  const { downloads } = useSiteStats();

  return (
    <section className="page active" id="resources">
      <div className="container inner-page">
        <p className="kicker">FREE RESOURCES / 03</p>
        <h1>
          Knowledge made
          <br />
          <em>practical.</em>
        </h1>
        <p className="page-intro">
          Download a practical starter worksheet for digitization and browse the source CV. More
          research-oriented downloads can be added as they become available.
        </p>
        <div className="resource-grid">
          <article className="resource-card">
            <div className="resource-art ra1">
              <span>01</span>
              <strong>
                HERITAGE
                <br />
                INVENTORY
              </strong>
              <small>WORKSHEET · CSV</small>
            </div>
            <div className="resource-body">
              <p className="small-label">FREE STARTER TEMPLATE</p>
              <h2>Digital Collection Inventory Starter</h2>
              <p>
                A simple CSV worksheet for artifact identification, documentation, condition and
                digitization tracking. Portfolio-created sample, not an official institutional form.
              </p>
              <DownloadLink className="btn primary" id="inventory">
                Download worksheet ↓
              </DownloadLink>
              <p className="count-line">
                <span id="inventory-downloads">{(downloads["inventory"] ?? 0).toLocaleString()}</span>{" "}
                downloads recorded
              </p>
            </div>
          </article>
          <article className="resource-card">
            <div className="resource-art ra2">
              <span>02</span>
              <strong>
                CAREER
                <br />
                PROFILE
              </strong>
              <small>PROFESSIONAL CV · PDF</small>
            </div>
            <div className="resource-body">
              <p className="small-label">PROFESSIONAL DOCUMENT</p>
              <h2>Falola's Professional CV</h2>
              <p>
                Explore a detailed record of professional roles, academic training, selected
                accomplishments and public engagement.
              </p>
              <DownloadLink className="btn primary" id="resume">
                Download CV ↓
              </DownloadLink>
              <p className="count-line">
                <span id="resume-downloads">{(downloads["resume"] ?? 0).toLocaleString()}</span>{" "}
                downloads recorded
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
