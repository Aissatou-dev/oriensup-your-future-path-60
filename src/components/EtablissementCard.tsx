import { Link } from "@tanstack/react-router";
import { Star, MapPin, Heart, GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import type { Etablissement } from "@/lib/mock-data";

export function EtablissementCard({ etab, compact }: { etab: Etablissement; compact?: boolean }) {
  const [fav, setFav] = useState(false);
  return (
    <div className="group rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
      <Link to="/etablissements/$id" params={{ id: etab.id }} className="block">
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img src={etab.image} alt={etab.nom} className="size-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      </Link>
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <div className="text-xs text-primary font-semibold">{etab.sigle}</div>
            <Link to="/etablissements/$id" params={{ id: etab.id }}>
              <h3 className="font-semibold text-base leading-tight hover:text-primary transition-colors">{etab.nom}</h3>
            </Link>
          </div>
          <Badge variant={etab.type === "Public" ? "secondary" : "outline"}>{etab.type}</Badge>
        </div>

        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><MapPin className="size-3.5" />{etab.ville}</span>
          <span className="flex items-center gap-1"><Star className="size-3.5 fill-amber-400 text-amber-400" />{etab.note}</span>
        </div>

        {!compact && <p className="text-sm text-muted-foreground line-clamp-2">{etab.description}</p>}

        <div className="flex items-center gap-2 pt-2">
          <Link to="/etablissements/$id" params={{ id: etab.id }} className="flex-1">
            <Button size="sm" className="w-full">Voir détails</Button>
          </Link>
          <Link to="/comparaison">
            <Button size="sm" variant="outline" aria-label="Comparer"><GitCompare className="size-4" /></Button>
          </Link>
          <Button size="sm" variant="outline" aria-label="Favori" onClick={() => setFav(!fav)}>
            <Heart className={`size-4 ${fav ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
      </div>
    </div>
  );
}
