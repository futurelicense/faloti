import { Link } from "@tanstack/react-router";

import { CONTACT_EMAIL } from "@/lib/site-data";
import { sum } from "@/lib/stats";
import { isLive } from "@/lib/supabase";
import { useSiteStats } from "@/lib/use-stats";

export function SiteFooter() {
  const stats = useSiteStats();

  return (
    <footer>
      <div className="container">
        <div className="footer-upper">
          <div>
            <p className="kicker">LET'S CONNECT</p>
            <h2>
              Let's preserve what matters.
              <br />
              <em>And build what comes next.</em>
            </h2>
            <p>
              Interested in cultural heritage, research collaboration, or technology-driven public
              engagement?
            </p>
            <a className="btn primary" href={`mailto:${CONTACT_EMAIL}`}>
              Start a conversation ↗
            </a>
          </div>
          <div className="footer-contact">
            <p>CONTACT</p>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <span>Wilmington, Delaware, USA</span>
          </div>
        </div>
        <div className="footer-stats">
          <div>
            <strong id="visits">{stats.totalVisits.toLocaleString()}</strong>
            <span>Site visits</span>
          </div>
          <div>
            <strong id="downloads">{sum(stats.downloads).toLocaleString()}</strong>
            <span>Resource downloads</span>
          </div>
          <div>
            <strong id="views">{sum(stats.views).toLocaleString()}</strong>
            <span>Publication & media views</span>
          </div>
          <div>
            <strong id="section-views">{stats.pageViews.toLocaleString()}</strong>
            <span>Section views</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Falola Titilope Rosemary</span>
          <span id="tracking-status">
            {isLive
              ? "Shared site activity counters enabled"
              : "Demo counters on this device only · Enable Supabase for shared totals"}
          </span>
          <Link to="/" data-page="home">
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
