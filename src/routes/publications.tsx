import { createFileRoute } from "@tanstack/react-router";

import { ViewLink } from "@/components/Tracked";
import { pageHead } from "@/lib/page-head";
import { PUBLICATION_URL, media } from "@/lib/site-data";
import { usePageView, useSiteStats } from "@/lib/use-stats";

export const Route = createFileRoute("/publications")({
  head: pageHead("Publications"),
  component: PublicationsPage,
});

function PublicationsPage() {
  usePageView("publications");
  const { views } = useSiteStats();

  return (
    <section className="page active" id="publications">
      <div className="container inner-page">
        <p className="kicker">PUBLICATIONS / 02</p>
        <h1>
          Ideas worth
          <br />
          <em>sharing.</em>
        </h1>
        <p className="page-intro">
          Research, public commentary and media coverage on cultural preservation, technology,
          museum development and access.
        </p>
        <div className="publication-hero">
          <div className="pub-cover">
            <span>RESEARCH / 2024</span>
            <strong>
              AI
              <br />
              <i>×</i>
              <br />
              HERITAGE
            </strong>
            <small>RESEARCH ON THE FUTURE OF MUSEUM EXPERIENCES</small>
          </div>
          <div>
            <p className="small-label">PEER-REVIEWED RESEARCH</p>
            <h2>
              Leveraging Artificial Intelligence and Data Analytics for Enhancing Museum
              Experiences
            </h2>
            <p>
              International Research Journal of Modernization in Engineering Technology and Science,
              2024.
            </p>
            <p className="doi">DOI: 10.56726/IRJMETS49059</p>
            <ViewLink className="btn primary" id="publication-ai" href={PUBLICATION_URL}>
              View publication ↗
            </ViewLink>
            <p className="count-line">
              <span id="publication-ai-views">
                {(views["publication-ai"] ?? 0).toLocaleString()}
              </span>{" "}
              recorded views on this portfolio
            </p>
          </div>
        </div>
        <div className="section-top press-heading">
          <div>
            <p className="kicker">IN THE MEDIA</p>
            <h2>
              Public conversation. <em>Lasting impact.</em>
            </h2>
          </div>
          <p>Selected articles and commentary referenced in the supplied CV.</p>
        </div>
        <div className="media-list" id="media-list">
          {media.map((item, i) => {
            const n = views[item.id] ?? 0;
            const content = (
              <>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>
                    {item.outlet}
                    {!item.url && " · Link not provided in CV"}{" "}
                    <span id={`${item.id}-views`}>{n ? `${n.toLocaleString()} views` : ""}</span>
                  </p>
                </div>
                <span className="arrow">{item.url ? "↗" : "—"}</span>
              </>
            );
            return item.url ? (
              <ViewLink key={item.id} className="media-item" id={item.id} href={item.url}>
                {content}
              </ViewLink>
            ) : (
              <div key={item.id} className="media-item">
                {content}
              </div>
            );
          })}
        </div>
        <p className="note">
          Article titles and destinations are drawn from the supplied CV. Third-party article
          availability may change.
        </p>
      </div>
    </section>
  );
}
