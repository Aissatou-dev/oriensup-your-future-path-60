import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { etablissements } from "@/lib/mock-data";
import { Check, X, Star } from "lucide-react";

export const Route = createFileRoute("/comparaison")({
  head: () => ({ meta: [{ title: "Comparer — OrienSup" }] }),
  component: ComparePage,
});

function ComparePage() {
  const [a, setA] = useState("esp");
  const [b, setB] = useState("ism");
  const e1 = etablissements.find((e) => e.id === a)!;
  const e2 = etablissements.find((e) => e.id === b)!;

  const rows = [
    { label: "Type", v1: e1.type, v2: e2.type },
    { label: "Ville", v1: e1.ville, v2: e2.ville },
    { label: "Nombre de filières", v1: e1.filieres.length, v2: e2.filieres.length },
    { label: "Coût annuel", v1: e1.cout, v2: e2.cout },
    { label: "Accréditation", v1: e1.accreditations.join(", "), v2: e2.accreditations.join(", ") },
    { label: "Note moyenne", v1: `${e1.note}/5`, v2: `${e2.note}/5` },
    { label: "Taux d'insertion", v1: `${e1.tauxInsertion}%`, v2: `${e2.tauxInsertion}%` },
  ];

  const forces = (e: typeof e1) => [
    e.note >= 4.4 && "Note élevée",
    e.tauxInsertion >= 88 && "Excellente insertion",
    e.accreditations.length >= 2 && "Plusieurs accréditations",
    e.type === "Public" && "Coût accessible",
  ].filter(Boolean) as string[];

  const faibles = (e: typeof e1) => [
    e.coutValue > 2000000 && "Coût élevé",
    e.tauxInsertion < 85 && "Insertion à améliorer",
    e.filieres.length < 5 && "Offre limitée",
  ].filter(Boolean) as string[];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Comparer deux établissements</h1>
      <p className="text-muted-foreground mb-8">Choisissez deux écoles pour les analyser côte à côte.</p>

      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {[{ v: a, set: setA }, { v: b, set: setB }].map((s, i) => (
          <select key={i} value={s.v} onChange={(e) => s.set(e.target.value)} className="h-11 w-full rounded-lg border border-input bg-card px-4 font-medium">
            {etablissements.map((e) => <option key={e.id} value={e.id}>{e.nom}</option>)}
          </select>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-6">
        {[e1, e2].map((e) => (
          <div key={e.id} className="rounded-2xl overflow-hidden border bg-card">
            <img src={e.image} alt="" className="aspect-[16/7] object-cover w-full" />
            <div className="p-5">
              <div className="text-xs text-primary font-semibold">{e.sigle}</div>
              <h3 className="font-bold text-lg">{e.nom}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                <Star className="size-3.5 fill-amber-400 text-amber-400" />{e.note} · {e.ville}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border bg-card overflow-hidden shadow-sm">
        <table className="w-full">
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.label} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                <td className="p-4 font-medium text-sm w-1/3">{r.label}</td>
                <td className="p-4 text-sm">{r.v1}</td>
                <td className="p-4 text-sm">{r.v2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-8">
        {[e1, e2].map((e) => (
          <div key={e.id} className="rounded-2xl border bg-card p-6">
            <div className="font-semibold mb-3">{e.sigle}</div>
            <div className="mb-4">
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Points forts</div>
              <ul className="space-y-1.5">
                {forces(e).map((f) => <li key={f} className="flex items-start gap-2 text-sm"><Check className="size-4 text-green-600 mt-0.5" />{f}</li>)}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">Points faibles</div>
              <ul className="space-y-1.5">
                {faibles(e).length === 0 ? (
                  <li className="text-sm text-muted-foreground">Aucun point notable</li>
                ) : (
                  faibles(e).map((f) => <li key={f} className="flex items-start gap-2 text-sm"><X className="size-4 text-red-500 mt-0.5" />{f}</li>)
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
