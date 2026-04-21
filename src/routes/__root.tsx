import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-[var(--gold)]">404</h1>
        <h2 className="mt-4 font-display text-2xl">Сторінку не знайдено</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          На жаль, цієї сторінки не існує.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-[var(--gold)] text-[var(--gold)] text-xs tracking-[0.25em] uppercase hover:bg-[var(--gold)] hover:text-primary-foreground transition-all"
          >
            На головну
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1a2e1f" },
      { title: "Піддони.dp — Преміум піддони у Дніпрі" },
      {
        name: "description",
        content:
          "Дерев'яні піддони 1200×800 та 1200×1000, пластикові й бананові ящики. Роздріб і опт по всій Україні.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Піддони.dp" },
      { property: "og:locale", content: "uk_UA" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Піддони.dp — Преміум піддони у Дніпрі" },
      { name: "twitter:title", content: "Піддони.dp — Преміум піддони у Дніпрі" },
      { name: "description", content: "Luxury Palette Studio — це веб-сайт, що представляє компанію, її продукцію та послуги." },
      { property: "og:description", content: "Luxury Palette Studio — це веб-сайт, що представляє компанію, її продукцію та послуги." },
      { name: "twitter:description", content: "Luxury Palette Studio — це веб-сайт, що представляє компанію, її продукцію та послуги." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0e38a0d8-f3aa-456d-bb84-c5f3a98d3778/id-preview-e4c6ccea--5fe3c0c3-70fd-4bc1-84f3-423449322209.lovable.app-1776773371699.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0e38a0d8-f3aa-456d-bb84-c5f3a98d3778/id-preview-e4c6ccea--5fe3c0c3-70fd-4bc1-84f3-423449322209.lovable.app-1776773371699.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
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
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster />
    </div>
  );
}
