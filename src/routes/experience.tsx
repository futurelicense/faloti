import { createFileRoute } from "@tanstack/react-router";

import { pageHead } from "@/lib/page-head";
import { usePageView } from "@/lib/use-stats";

export const Route = createFileRoute("/experience")({
  head: pageHead("Experience"),
  component: ExperiencePage,
});

type Role = { period: string; current?: boolean; title: string; org: string; body: string; tags?: string[] };

const roles: Role[] = [
  {
    period: "MAR 2026 – PRESENT",
    current: true,
    title: "Senior Associate, Connected Commerce Product Delivery",
    org: "JPMorgan Chase & Co. · Wilmington, Delaware",
    body: "Analyze complex customer-facing digital commerce issues, identify recurring escalation patterns and work across product, engineering and partner teams to improve reliability and operational consistency.",
    tags: ["Product delivery", "Root-cause analysis", "Digital commerce"],
  },
  {
    period: "AUG 2024 – MAR 2026",
    title: "Senior Associate, PXT Budget Planning Coordinator",
    org: "JPMorgan Chase & Co. · Wilmington, Delaware",
    body: "Supported cross-functional planning across a $9 billion enterprise portfolio, coordinating Product, Design, Technology and Finance. Prepared executive reporting, standardized documentation and helped improve planning execution.",
    tags: ["$9B portfolio", "Planning operations", "Stakeholder alignment"],
  },
  {
    period: "MAY – JUL 2024",
    title: "Project Management Intern",
    org: "Yamaha Motor Manufacturing · Kennesaw, Georgia",
    body: "Supported enterprise software upgrades, standardized project processes and maintained charters, scope documents and project status reporting.",
  },
  {
    period: "JAN – DEC 2023",
    title: "Museum Collections Intern",
    org: "Atlanta History Center · Atlanta, Georgia",
    body: "Digitized and cataloged 8,000+ artifacts. Applied AI and 3D modeling techniques to preservation; designed collection documentation in Omeka; developed AR experiences and supported inclusive exhibitions.",
    tags: ["8,000+ artifacts", "Omeka", "AI & 3D modeling", "Augmented reality"],
  },
  {
    period: "JAN 2022 – JUL 2024",
    title: "Graduate Research Assistant",
    org: "University of West Georgia · Antonio J. Waring Jr. Archaeological Laboratory",
    body: "Conducted archaeological artifact analysis, digitization and 3D scanning; integrated GIS for spatial interpretation; and contributed to research communication and public exhibitions.",
    tags: ["GIS", "Archaeology", "3D scanning"],
  },
];

const education = [
  ["M.S. Applied Business Analytics", "Data Intelligence Track · University of West Georgia · 2024"],
  ["M.A. History", "University of West Georgia · 2023"],
  ["Graduate Certificate, Museum Studies", "University of West Georgia · 2023"],
  ["B.A. History and International Studies", "University of Ilorin · 2018"],
] as const;

const recognition = [
  ["Best Student in Public History Award", "University of West Georgia · 2022"],
  ["Durban Local History Museums Appreciation Award", "2023"],
  ["UWG Graduate Fellowship", "2022"],
  ["Education Abroad Scholarship, South Africa", "2023"],
  ["Tabernacle Baptist Church Fellowship", "2023 & 2024"],
  ["Professional memberships", "SAWH · NCPH · AHA · GAM · SEMC"],
] as const;

function ExperiencePage() {
  usePageView("experience");

  return (
    <section className="page active" id="experience">
      <div className="container inner-page">
        <p className="kicker">EXPERIENCE / 01</p>
        <h1>
          Where knowledge
          <br />
          becomes <em>action.</em>
        </h1>
        <p className="page-intro">
          A career across cultural institutions, historical research, data-informed operations,
          and large-scale commerce technology.
        </p>
        <div className="timeline">
          {roles.map((role) => (
            <article className="timeline-item" key={role.period}>
              <div className="timeline-meta">
                {role.period}
                {role.current && <span>CURRENT</span>}
              </div>
              <div>
                <h2>{role.title}</h2>
                <h3>{role.org}</h3>
                <p>{role.body}</p>
                {role.tags && (
                  <div className="tags">
                    {role.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <div className="split-section">
          <div>
            <p className="kicker">EDUCATION</p>
            <h2>Academic foundation</h2>
            <InfoList items={education} />
          </div>
          <div>
            <p className="kicker">RECOGNITION</p>
            <h2>Awards & affiliations</h2>
            <InfoList items={recognition} />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoList({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="info-list">
      {items.map(([name, detail]) => (
        <p key={name}>
          <b>{name}</b>
          <small>{detail}</small>
        </p>
      ))}
    </div>
  );
}
