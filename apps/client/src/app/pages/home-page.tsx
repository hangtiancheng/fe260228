import { useState } from "react";
import { useAuthSession } from "../../features/auth";
import { AuthDialog } from "../../features/auth-ui";
import { Badge } from "@/shared/ui/components/badge";
import { useAppServices } from "../use-app-services";
import { HomeFeatureGrid } from "./home-feature-grid";
import { HomeHero } from "./home-hero";
import { HomeStatGrid } from "./home-stat-grid";
import { useHomeMotion } from "./use-home-motion";

export function HomePage() {
  const { session } = useAppServices();
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const { user } = useAuthSession(session);
  const containerRef = useHomeMotion();

  return (
    <div className="flex flex-col gap-10" ref={containerRef}>
      <section>
        <HomeHero
          isSignedIn={Boolean(user)}
          openAuth={() => {
            setIsAuthOpen(true);
          }}
        />
      </section>
      <section className="home-intro text-center">
        <Badge className="bg-primary/10 text-primary mb-4" variant="secondary">
          Why fe260228
        </Badge>
        <h2 className="font-display text-4xl font-bold tracking-tight">
          A sharper way to practice
        </h2>
        <p className="text-muted-foreground mx-auto mt-4 max-w-2xl leading-8">
          The React migration keeps the trusted learning flow while adding typed
          API contracts, safer auth, and a lightweight vocabulary stream.
        </p>
      </section>
      <section>
        <HomeStatGrid />
      </section>
      <HomeFeatureGrid />
      <AuthDialog
        close={() => {
          setIsAuthOpen(false);
        }}
        isOpen={isAuthOpen}
      />
    </div>
  );
}
