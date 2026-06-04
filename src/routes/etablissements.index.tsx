import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { etablissements } from "@/lib/mock-data";
import { EtablissementCard } from "@/components/EtablissementCard";

export const Route = createFileRoute("/etablissements/")({
  head: () => ({ meta: [{ title: "Établissements — OrienSup" }] }),
  component: ListPage,
});

const villes = ["Toutes", "Dakar", "Saint-Louis", "Thiès"];
const types = ["Tous", "Public", "Privé"];
const domaines = ["Tous", "Informatique", "Commerce", "Ingénierie", "Droit", "Santé"];
const couts = ["Tous", "< 1M FCFA", "1-2M FCFA", "> 2M FCFA"];

function ListPage() {
  const [q, setQ] = useState("");
  const [ville, setVille] = useState("Toutes");
  const [type, setType] = useState("Tous");
  const [domaine, setDomaine] = useState("Tous");

  const filtered = useMemo(() => {
    return etablissements.filter((e) => {
      if (q && !`${e.nom} ${e.sigle}`.toLowerCase().includes(q.toLowerCase())) return false;
      if (ville !== "Toutes" && e.ville !== ville) return false;
      if (type !== "Tous" && e.type !== type) return false;
      if (domaine !== "Tous" && !e.domaines.includes(domaine)) return false;
      return true;
    });
  }, [q, ville, type, domaine]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Tous les établissements</h1>
        <p className="text-muted-foreground mt-2">Explorez les écoles et universités du Sénégal.</p>
      </div>

      <div className="bg-card border rounded-2xl p-5 mb-8 shadow-sm">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
          <Input placeholder="Rechercher un établissement..." value={q} onChange={(e) => setQ(e.target.value)} className="pl-9" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <Select label="Type" value={type} onChange={setType} options={types} />
          <Select label="Ville" value={ville} onChange={setVille} options={villes} />
          <Select label="Domaine" value={domaine} onChange={setDomaine} options={domaines} />
          <Select label="Coût" value={couts[0]} onChange={() => {}} options={couts} />
        </div>
      </div>

      <div className="mb-4 text-sm text-muted-foreground">{filtered.length} résultat(s)</div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground mb-4">Aucun établissement ne correspond à vos critères.</p>
          <Button variant="outline" onClick={() => { setQ(""); setVille("Toutes"); setType("Tous"); setDomaine("Tous"); }}>Réinitialiser</Button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((e) => <EtablissementCard key={e.id} etab={e} />)}
        </div>
      )}
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  return (
    <label className="text-sm">
      <span className="text-muted-foreground text-xs">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="mt-1 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}
