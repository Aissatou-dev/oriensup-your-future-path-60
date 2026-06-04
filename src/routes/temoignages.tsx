import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { temoignages as initial } from "@/lib/mock-data";

export const Route = createFileRoute("/temoignages")({
  head: () => ({ meta: [{ title: "Témoignages alumni — OrienSup" }] }),
  component: TemoPage,
});

function TemoPage() {
  const [items, setItems] = useState(initial);
  const [note, setNote] = useState(5);
  const [comment, setComment] = useState("");
  const [etab, setEtab] = useState("ESP");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setItems([
      { id: Date.now().toString(), nom: "Vous", photo: "https://i.pravatar.cc/150?img=68", promotion: "Promo 2024", etablissement: etab, note, commentaire: comment },
      ...items,
    ]);
    setComment("");
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold">Témoignages alumni</h1>
        <p className="text-muted-foreground mt-2">Découvrez les retours de ceux qui sont passés par là.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {items.map((t) => (
            <div key={t.id} className="bg-card border rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <img src={t.photo} alt="" className="size-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-sm">{t.nom}</div>
                  <div className="text-xs text-muted-foreground">{t.etablissement} · {t.promotion}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`size-4 ${i < t.note ? "fill-amber-400 text-amber-400" : "text-muted"}`} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">"{t.commentaire}"</p>
            </div>
          ))}
        </div>

        <aside>
          <form onSubmit={submit} className="bg-card border rounded-2xl p-5 sticky top-20 shadow-sm">
            <h3 className="font-bold mb-4">Partager mon expérience</h3>
            <label className="text-sm">
              <span className="text-muted-foreground text-xs">Établissement</span>
              <select value={etab} onChange={(e) => setEtab(e.target.value)} className="mt-1 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm">
                {["ESP", "UCAD", "ISM", "IAM", "Supdeco"].map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>

            <div className="mt-3">
              <div className="text-xs text-muted-foreground mb-1">Note</div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <button type="button" key={i} onClick={() => setNote(i + 1)}>
                    <Star className={`size-6 ${i < note ? "fill-amber-400 text-amber-400" : "text-muted"}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <Textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Votre commentaire..." rows={4} />
            </div>

            <Button type="submit" className="w-full mt-4">Publier</Button>
          </form>
        </aside>
      </div>
    </div>
  );
}
