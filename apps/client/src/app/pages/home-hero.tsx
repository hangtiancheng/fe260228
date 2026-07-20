import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { WordMarquee } from "../../features/word-marquee";
import { Badge } from "@/shared/ui/components/badge";
import { Button } from "@/shared/ui/components/button";
import { Card, CardContent, CardHeader } from "@/shared/ui/components/card";

export type HomeHeroProps = {
  readonly isSignedIn: boolean;
  readonly openAuth: () => void;
};

export function HomeHero({ isSignedIn, openAuth }: HomeHeroProps) {
  return (
    <section className="grid items-stretch gap-6 lg:grid-cols-[0.92fr_1.08fr]">
      <Card className="from-primary/10 to-accent/20 overflow-hidden border-0 bg-gradient-to-br shadow-lg backdrop-blur-md">
        <CardHeader className="gap-7 p-8 lg:p-12">
          <Badge className="bg-primary/15 text-primary w-fit gap-2 px-3 py-1">
            <Sparkles aria-hidden="true" />
            Five-day speaking streak starter
          </Badge>
          <div className="flex flex-col gap-4">
            <h1 className="home-hero-title font-display max-w-3xl text-5xl leading-none font-bold tracking-tight lg:text-7xl">
              Learn English with an AI scene partner.
            </h1>
            <p className="home-hero-subtitle text-muted-foreground max-w-xl text-lg leading-8">
              Move from passive study into guided conversations, course
              pathways, and vocabulary review that keeps the legacy routes
              intact.
            </p>
          </div>
          <CardContent className="home-hero-cta flex gap-3 p-0">
            {isSignedIn ? (
              <Button asChild>
                <a href="/chat/index">
                  Continue practice
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            ) : (
              <Button onClick={openAuth} type="button">
                Start learning
                <ArrowRight aria-hidden="true" />
              </Button>
            )}
            <Button asChild variant="outline">
              <a href="/courses/index">
                <BookOpen aria-hidden="true" />
                View courses
              </a>
            </Button>
          </CardContent>
        </CardHeader>
      </Card>
      <div className="home-hero-visual min-w-0">
        <WordMarquee />
      </div>
    </section>
  );
}
