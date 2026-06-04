import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, GraduationCap, Users, Building2, Star } from "lucide-react";
import { etablissements, temoignages } from "@/lib/mock-data";
import { EtablissementCard } from "@/components/EtablissementCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OrienSup — Trouvez votre avenir académique" },
      { name: "description", content: "Plateforme d'orientation post-bac : découvrez les écoles, comparez les filières et trouvez la formation qui vous correspond." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.12),transparent_50%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="size-4" /> Nouveau : Quiz intelligent d'orientation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Trouvez votre avenir académique avec <span className="text-primary">OrienSup</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Découvrez les meilleures écoles, comparez les formations et trouvez la filière qui vous correspond.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/quiz">
                <Button size="lg" className="gap-2">Commencer le quiz <ArrowRight className="size-4" /></Button>
              </Link>
              <Link to="/etablissements">
                <Button size="lg" variant="outline">Explorer les établissements</Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { icon: Building2, value: "50+", label: "Établissements" },
                { icon: GraduationCap, value: "200+", label: "Filières" },
                { icon: Users, value: "500+", label: "Étudiants orientés" },
              ].map((s) => (
                <div key={s.label}>
                  <s.icon className="size-5 text-primary mb-2" />
                  <div className="text-2xl font-bold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://www.ucad.sn/sites/default/files/5Q5A1426.jpg" alt="Étudiants sur le campus de l'UCAD à Dakar" className="size-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card border rounded-2xl shadow-xl p-4 flex items-center gap-3 max-w-xs">
              <div className="size-10 rounded-full bg-green-100 text-green-600 grid place-items-center">
                <Sparkles className="size-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">Compatibilité 92%</div>
                <div className="text-xs text-muted-foreground">Génie Logiciel — ESP</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POPULAR */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold">Établissements populaires</h2>
            <p className="text-muted-foreground mt-2">Les écoles les mieux notées par notre communauté.</p>
          </div>
          <Link to="/etablissements"><Button variant="ghost" className="gap-1">Voir tout <ArrowRight className="size-4" /></Button></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {etablissements.map((e) => <EtablissementCard key={e.id} etab={e} />)}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Témoignages alumni</h2>
            <p className="text-muted-foreground mt-2">Ils sont passés par là — découvrez leurs retours.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {temoignages.slice(0, 3).map((t) => (
              <div key={t.id} className="bg-card border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <img src={t.photo} alt={t.nom} className="size-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{t.nom}</div>
                    <div className="text-xs text-muted-foreground">{t.etablissement} · {t.promotion}</div>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`size-4 ${i < t.note ? "fill-amber-400 text-amber-400" : "text-muted"}`} />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">"{t.commentaire}"</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/temoignages"><Button variant="outline">Tous les témoignages</Button></Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Prêt à trouver votre voie ?</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
            En quelques questions, notre quiz vous recommande la filière et les écoles parfaites pour votre profil.
          </p>
          <Link to="/quiz" className="inline-block mt-8">
            <Button size="lg" variant="secondary" className="gap-2">Faire le quiz <ArrowRight className="size-4" /></Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
