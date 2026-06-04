import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/etablissements", label: "Établissements" },
  { to: "/quiz", label: "Quiz" },
  { to: "/temoignages", label: "Témoignages" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-lg">
            <div className="size-9 rounded-lg bg-primary text-primary-foreground grid place-items-center">
              <GraduationCap className="size-5" />
            </div>
            <span>OrienSup</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active ? "text-primary bg-primary/10" : "text-foreground/70 hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/connexion">
              <Button variant="ghost" size="sm">Connexion</Button>
            </Link>
            <Link to="/dashboard">
              <Button size="sm">Mon espace</Button>
            </Link>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t bg-background">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-sm font-medium hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Link to="/connexion" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm">
                Connexion
              </Link>
              <Link to="/dashboard" onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-sm font-medium text-primary">
                Mon espace
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t bg-muted/30 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-bold">
              <div className="size-8 rounded-lg bg-primary text-primary-foreground grid place-items-center">
                <GraduationCap className="size-4" />
              </div>
              OrienSup
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              La plateforme d'orientation post-bac qui guide les nouveaux bacheliers vers leur avenir.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Plateforme</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/etablissements" className="hover:text-foreground">Établissements</Link></li>
              <li><Link to="/quiz" className="hover:text-foreground">Quiz d'orientation</Link></li>
              <li><Link to="/comparaison" className="hover:text-foreground">Comparer</Link></li>
              <li><Link to="/temoignages" className="hover:text-foreground">Témoignages</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">À propos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Notre mission</li>
              <li>Partenaires</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Légal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Conditions</li>
              <li>Confidentialité</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div className="border-t py-6 text-center text-sm text-muted-foreground">
          © 2026 OrienSup — Projet universitaire
        </div>
      </footer>
    </div>
  );
}
