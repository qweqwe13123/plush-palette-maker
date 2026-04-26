import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

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

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});
