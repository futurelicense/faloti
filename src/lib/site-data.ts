export const CONTACT_EMAIL = "titilope.falola@chase.com";

export const pages = ["home", "experience", "publications", "resources"] as const;
export type PageId = (typeof pages)[number];

export const downloads = {
  resume: { file: "/downloads/Falola_Titilope_Rosemary_CV.pdf" },
  inventory: { file: "/downloads/heritage-inventory-starter.csv" },
} as const;
export type DownloadId = keyof typeof downloads;
export const downloadIds = Object.keys(downloads) as DownloadId[];

export const PUBLICATION_URL = "https://doi.org/10.56726/IRJMETS49059";

export type MediaItem = { id: `media-${number}`; title: string; outlet: string; url: string | null };

export const media: MediaItem[] = [
  {
    id: "media-1",
    title: "Nigeria Must Demonstrate Commitment to Heritage Conservation, Falola",
    outlet: "Leadership",
    url: "https://leadership.ng/nigeria-must-demonstrate-commitment-to-heritage-conservation-falola/",
  },
  {
    id: "media-2",
    title: "Nigeria Must Ensure Museums Are Prepared to Conserve Repatriated Cultural Treasures",
    outlet: "The Nigerian Post",
    url: "https://thenigerianpost.com.ng/nigeria-must-ensure-museums-are-adequately-prepared-to-receive-conserve-repatriated-looted-cultural-treasures-falola/",
  },
  {
    id: "media-3",
    title: "Provide Climate Control Systems and Security in Museums, Falola Tells Stakeholders",
    outlet: "Vital News",
    url: null,
  },
  {
    id: "media-4",
    title: "Nigeria's Museum Sector Needs Urgent Attention, Falola",
    outlet: "The Palace News",
    url: "https://thepalacenews.com/nigerias-museum-sector-needs-urgent-attention-falola/",
  },
  {
    id: "media-5",
    title: "Stakeholders Urged to Prioritise Museum Infrastructure Funding",
    outlet: "Nigerian Tribune",
    url: "https://tribuneonlineng.com/fg-stakeholders-urged-to-prioritise-funding-to-improve-museum-infrastructure/",
  },
  {
    id: "media-6",
    title: "Incorporate Public History and Museum Studies into Curricula, Falola Tells FG",
    outlet: "Democracy Newsline",
    url: "https://democracynewsline.com/incorporate-public-history-museum-studies-into-curricula-falola-tells-fg-others",
  },
  {
    id: "media-7",
    title: "Nigeria Needs to Address Shortcomings in Museum Sector, Falola",
    outlet: "Time Nigeria",
    url: "https://timenigeria.com/nigeria-needs-to-address-shortcomings-in-museum-sector-falola/",
  },
  {
    id: "media-8",
    title: "Nigerian Museums Suffering from Poor Funding and Lack of Trained Personnel",
    outlet: "Choice Reporters",
    url: "https://choicereporters.com/2024/11/04/nigerian-museums-suffering-from-poor-funding-lack-of-trained-personnel-falola/",
  },
];

export const viewIds = ["publication-ai", ...media.filter((m) => m.url).map((m) => m.id)];
