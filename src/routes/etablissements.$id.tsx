import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { etablissements, temoignages, filiereDetails, type Etablissement } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MapPin, Star, Heart, GitCompare, Award, TrendingUp, Building2, ChevronRight, Briefcase } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/etablissements/$id")({
  head: ({ params }) => {
    const e = etablissements.find((x) => x.id === params.id);
    return { meta: [{ title: e ? `${e.nom} — OrienSup` : "Établissement" }] };
  },
  loader: ({ params }) => {
    const etab = etablissements.find((e) => e.id === params.id);
    if (!etab) throw notFound();
    return { etab };
  },
  component: DetailPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl text-center py-20 px-4">
      <h1 className="text-2xl font-bold">Établissement introuvable</h1>
      <Link to="/etablissements"><Button className="mt-6">Retour à la liste</Button></Link>
    </div>
  ),
});

function DetailPage() {
  const { etab } = Route.useLoaderData() as { etab: Etablissement };
  const [fav, setFav] = useState(false);
  const [openFiliere, setOpenFiliere] = useState<string | null>(null);
  const filiereInfo = openFiliere ? filiereDetails[openFiliere] : null;
  const tems = temoignages.filter((t) => t.etablissement === etab.sigle);

  return (
    <div>
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={etab.image} alt={etab.nom} className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-20 relative">
        <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-lg">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={etab.type === "Public" ? "secondary" : "outline"}>{etab.type}</Badge>
                <span className="text-sm text-primary font-semibold">{etab.sigle}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold">{etab.nom}</h1>
              <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="size-4" />{etab.ville}</span>
                <span className="flex items-center gap-1"><Star className="size-4 fill-amber-400 text-amber-400" />{etab.note}/5</span>
                <span className="flex items-center gap-1"><TrendingUp className="size-4" />{etab.tauxInsertion}% d'insertion</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setFav(!fav)} className="gap-2">
                <Heart className={`size-4 ${fav ? "fill-red-500 text-red-500" : ""}`} />
                {fav ? "Sauvegardé" : "Favori"}
              </Button>
              <Link to="/comparaison"><Button className="gap-2"><GitCompare className="size-4" />Comparer</Button></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-10">
          <section>
            <h2 className="text-xl font-bold mb-3">À propos</h2>
            <p className="text-muted-foreground leading-relaxed">{etab.descriptionLongue}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4">Filières proposées</h2>
            <p className="text-sm text-muted-foreground mb-3">Cliquez sur une filière pour découvrir son contenu et ses débouchés.</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {etab.filieres.map((f) => (
                <button
                  type="button"
                  key={f}
                  onClick={() => setOpenFiliere(f)}
                  className="flex items-center gap-3 p-4 rounded-xl border bg-card text-left hover:border-primary hover:shadow-md transition-all group"
                >
                  <div className="size-9 rounded-lg bg-primary/10 text-primary grid place-items-center"><Building2 className="size-4" /></div>
                  <span className="font-medium text-sm flex-1">{f}</span>
                  <ChevronRight className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </button>
              ))}
            </div>
          </section>


          <section>
            <h2 className="text-xl font-bold mb-4">Galerie</h2>
            <div className="grid grid-cols-3 gap-3">
              {etab.galerie.map((img, i) => (
                <img key={i} src={img} alt="" className="aspect-square object-cover rounded-xl" />
              ))}
            </div>
          </section>

          {tems.length > 0 && (
            <section>
              <h2 className="text-xl font-bold mb-4">Témoignages alumni</h2>
              <div className="space-y-3">
                {tems.map((t) => (
                  <div key={t.id} className="border rounded-xl p-5 bg-card">
                    <div className="flex items-center gap-3 mb-2">
                      <img src={t.photo} alt="" className="size-10 rounded-full object-cover" />
                      <div>
                        <div className="font-semibold text-sm">{t.nom}</div>
                        <div className="text-xs text-muted-foreground">{t.promotion}</div>
                      </div>
                      <div className="ml-auto flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`size-3.5 ${i < t.note ? "fill-amber-400 text-amber-400" : "text-muted"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">"{t.commentaire}"</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-4">
          <div className="border rounded-2xl p-5 bg-card">
            <h3 className="font-semibold mb-3">Coût annuel</h3>
            <div className="text-2xl font-bold text-primary">{etab.cout}</div>
          </div>
          <div className="border rounded-2xl p-5 bg-card">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Award className="size-4 text-primary" />Accréditations</h3>
            <ul className="space-y-2">
              {etab.accreditations.map((a) => (
                <li key={a} className="flex items-center gap-2 text-sm"><span className="size-1.5 rounded-full bg-primary" />{a}</li>
              ))}
            </ul>
          </div>
          <div className="border rounded-2xl p-5 bg-primary/5">
            <h3 className="font-semibold mb-2">Pas encore décidé ?</h3>
            <p className="text-sm text-muted-foreground mb-3">Faites notre quiz pour comparer.</p>
            <Link to="/quiz"><Button size="sm" className="w-full">Faire le quiz</Button></Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
