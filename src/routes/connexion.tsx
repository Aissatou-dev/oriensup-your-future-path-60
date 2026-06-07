import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap } from "lucide-react";
import { useAuth } from "@/lib/auth";

export const Route = createFileRoute("/connexion")({
  head: () => ({ meta: [{ title: "Connexion — OrienSup" }] }),
  component: ConnexionPage,
});

function ConnexionPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate({ to: "/" });
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] grid lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between bg-primary text-primary-foreground p-12">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="size-9 rounded-lg bg-white/15 grid place-items-center">
            <GraduationCap className="size-5" />
          </div>
          OrienSup
        </Link>
        <div>
          <h2 className="text-4xl font-bold leading-tight">Votre orientation, simplifiée.</h2>
          <p className="mt-4 text-primary-foreground/80 max-w-md">
            Rejoignez plus de 500 étudiants qui ont déjà trouvé leur filière idéale grâce à OrienSup.
          </p>
        </div>
        <div className="text-sm text-primary-foreground/70">© 2026 OrienSup</div>
      </div>

      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <Tabs defaultValue="login">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="login">Connexion</TabsTrigger>
              <TabsTrigger value="signup">Inscription</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <form onSubmit={submit} className="space-y-4 mt-6">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="vous@example.com" required />
                </div>
                <div>
                  <Label htmlFor="pwd">Mot de passe</Label>
                  <Input id="pwd" type="password" placeholder="••••••••" required />
                </div>
                <Button type="submit" className="w-full">Se connecter</Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={submit} className="space-y-4 mt-6">
                <div>
                  <Label htmlFor="nom">Nom complet</Label>
                  <Input id="nom" placeholder="Aminata Sarr" required />
                </div>
                <div>
                  <Label htmlFor="email2">Email</Label>
                  <Input id="email2" type="email" placeholder="vous@example.com" required />
                </div>
                <div>
                  <Label htmlFor="bac">Série du Bac</Label>
                  <select id="bac" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm">
                    <option>S1</option><option>S2</option><option>L</option><option>G</option><option>Technique</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="pwd2">Mot de passe</Label>
                  <Input id="pwd2" type="password" required />
                </div>
                <Button type="submit" className="w-full">Créer un compte</Button>
              </form>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
