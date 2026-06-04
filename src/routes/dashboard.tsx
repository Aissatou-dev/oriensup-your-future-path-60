import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

import { Pencil, Heart, Sparkles, Mail, GraduationCap } from "lucide-react";
import { mockUser, etablissements } from "@/lib/mock-data";
import { EtablissementCard } from "@/components/EtablissementCard";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Mon espace — OrienSup" }] }),
  component: Dashboard,
});

function Dashboard() {
  const favs = etablissements.filter((e) => mockUser.favoris.includes(e.id));
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-card border rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <img src={mockUser.photo} alt="" className="size-20 rounded-full object-cover ring-4 ring-primary/10" />
            <div className="min-w-0">
              <h2 className="font-bold text-lg truncate">{mockUser.nom}</h2>
              <div className="text-sm text-muted-foreground flex items-center gap-1 truncate"><Mail className="size-3.5" />{mockUser.email}</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5"><GraduationCap className="size-3.5" />Bac série {mockUser.serieBac}</div>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-5 gap-2"><Pencil className="size-3.5" />Modifier le profil</Button>
        </div>

        <div className="lg:col-span-2 rounded-2xl p-6 shadow-sm bg-gradient-to-br from-primary to-blue-700 text-primary-foreground">
          <div className="flex items-center gap-2 text-sm opacity-90"><Sparkles className="size-4" /> Résultat du quiz</div>
          <h3 className="text-3xl font-bold mt-2">{mockUser.quizResult.filiere}</h3>
          <p className="opacity-80 mt-1 text-sm">Filière la plus compatible avec votre profil</p>
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2"><span>Compatibilité</span><span className="font-bold">{mockUser.quizResult.compatibilite}%</span></div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white" style={{ width: `${mockUser.quizResult.compatibilite}%` }} />
            </div>
          </div>
          <Link to="/quiz"><Button variant="secondary" size="sm" className="mt-6">Refaire le quiz</Button></Link>
        </div>
      </div>

      <section>
        <div className="flex items-center gap-2 mb-5">
          <Heart className="size-5 text-red-500" />
          <h2 className="text-xl font-bold">Mes favoris</h2>
          <span className="text-sm text-muted-foreground">({favs.length})</span>
        </div>
        {favs.length === 0 ? (
          <p className="text-muted-foreground">Aucun établissement sauvegardé.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {favs.map((e) => <EtablissementCard key={e.id} etab={e} />)}
          </div>
        )}
      </section>
    </div>
  );
}

