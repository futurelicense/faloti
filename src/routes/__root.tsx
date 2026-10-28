import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { useRegisterVisit } from "@/lib/use-stats";
import appCss from "../styles.css?url";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width,initial-scale=1" },
      { name: "theme-color", content: "#0a1721" },
      {
        name: "description",
        content:
          "Falola Titilope Rosemary: digital cultural heritage, AI preservation, data analytics and enterprise technology portfolio.",
      },
      { title: "Falola Titilope Rosemary | Heritage × Technology" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}

function Layout() {
  useRegisterVisit();
  return (
    <>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  );
}

function NotFound() {
  return (
    <section className="page active">
      <div className="container inner-page">
        <p className="kicker">404</p>
        <h1>
          Page not <em>found.</em>
        </h1>
        <p className="page-intro">The page you're looking for doesn't exist or has moved.</p>
        <Link className="btn primary" to="/">
          Back home ↗
        </Link>
      </div>
    </section>
  );
}
