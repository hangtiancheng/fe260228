import { Brain, MessageCircleHeart, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/components/card";

const features = [
  {
    content:
      "Practice inside realistic scenarios instead of memorizing isolated phrases.",
    icon: MessageCircleHeart,
    title: "Context-first speaking",
  },
  {
    content:
      "Typed AI flows and validated API contracts keep feedback reliable as features migrate.",
    icon: Brain,
    title: "Adaptive AI coaching",
  },
  {
    content:
      "Vocabulary review, streaks, and profile data are staged behind a safe auth boundary.",
    icon: ShieldCheck,
    title: "Progress that follows you",
  },
] as const;

export function HomeFeatureGrid() {
  return (
    <section className="grid gap-5 md:grid-cols-3">
      {features.map((feature) => {
        const Icon = feature.icon;

        return (
          <motion.article
            className="home-feature-card"
            key={feature.title}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="h-full shadow-sm transition-shadow hover:shadow-md">
              <CardHeader className="gap-4">
                <div className="bg-primary/10 text-primary flex size-14 items-center justify-center rounded-lg">
                  <Icon aria-hidden="true" size={28} />
                </div>
                <CardTitle className="font-display tracking-tight">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-7">
                  {feature.content}
                </p>
              </CardContent>
            </Card>
          </motion.article>
        );
      })}
    </section>
  );
}
