import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, RotateCcw } from "lucide-react";
import { etablissements } from "@/lib/mock-data";

export const Route = createFileRoute("/quiz")({
  head: () => ({ meta: [{ title: "Quiz d'orientation — OrienSup" }] }),
  component: QuizPage,
});

const questions = [
  { q: "Quelle est votre série du Bac ?", options: ["S1", "S2", "L", "G", "Technique"] },
  { q: "Quel domaine vous attire ?", options: ["Informatique", "Commerce", "Santé", "Droit", "Ingénierie", "Communication"] },
  { q: "Quel est votre objectif professionnel ?", options: ["Développeur", "Entrepreneur", "Ingénieur", "Médecin", "Juriste", "Manager"] },
];

function QuizPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const choose = (opt: string) => {
    const next = [...answers, opt];
    setAnswers(next);
    if (step < questions.length - 1) setStep(step + 1);
    else setDone(true);
  };

  const reset = () => { setStep(0); setAnswers([]); setDone(false); };

  if (done) {
    const filieresReco = [
      { name: "Génie Logiciel", score: 92 },
      { name: "Informatique", score: 87 },
      { name: "Réseaux et Télécommunications", score: 81 },
    ];
    const reco = etablissements.filter((e) => ["esp", "ucad", "ism"].includes(e.id));

    return (
      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="size-4" /> Résultats prêts
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Vos filières recommandées</h1>
          <p className="text-muted-foreground mt-3">D'après vos réponses, voici les meilleures options pour vous.</p>
        </div>

        <div className="space-y-3 mb-10">
          {filieresReco.map((f, i) => (
            <div key={f.name} className="bg-card border rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary text-primary-foreground grid place-items-center text-sm font-bold">{i + 1}</div>
                  <h3 className="font-semibold text-lg">{f.name}</h3>
                </div>
                <span className="text-sm font-bold text-primary">{f.score}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary transition-all" style={{ width: `${f.score}%` }} />
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold mb-5">Établissements recommandés</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {reco.map((e) => (
            <Link key={e.id} to="/etablissements/$id" params={{ id: e.id }} className="block rounded-xl border bg-card overflow-hidden hover:shadow-md transition">
              <img src={e.image} alt="" className="aspect-video object-cover w-full" />
              <div className="p-4">
                <div className="text-xs text-primary font-semibold">{e.sigle}</div>
                <div className="font-medium text-sm">{e.nom}</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button onClick={reset} variant="outline" className="gap-2"><RotateCcw className="size-4" />Refaire le quiz</Button>
          <Link to="/dashboard"><Button className="gap-2">Voir mon espace <ArrowRight className="size-4" /></Button></Link>
        </div>
      </div>
    );
  }

  const current = questions[step];
  const progress = ((step) / questions.length) * 100;

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 py-16">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {step + 1} sur {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <h1 className="text-2xl md:text-3xl font-bold mb-8">{current.q}</h1>

      <div className="grid sm:grid-cols-2 gap-3">
        {current.options.map((opt) => (
          <button
            key={opt}
            onClick={() => choose(opt)}
            className="group text-left p-5 rounded-xl border bg-card hover:border-primary hover:bg-primary/5 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">{opt}</span>
              <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
