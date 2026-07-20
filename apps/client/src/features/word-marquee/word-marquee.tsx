import { Sparkles } from "lucide-react";
import type { WordMarqueeItem } from "../../shared/api/word-marquee-schema";
import { Badge } from "@/shared/ui/components/badge";
import { useWordMarquee } from "./use-word-marquee";

export type WordMarqueeProps = {
  readonly eyebrow?: string;
  readonly title?: string;
};

const laneClasses = [
  "animate-[word-marquee-left_30s_linear_infinite]",
  "animate-[word-marquee-right_36s_linear_infinite]",
  "animate-[word-marquee-left_42s_linear_infinite]",
] as const;

function getLaneWords(words: readonly WordMarqueeItem[], lane: number) {
  const laneWords = words.filter(
    (_, index) => index % laneClasses.length === lane,
  );
  return laneWords.length > 0 ? laneWords : words;
}

function WordChip({ item }: { readonly item: WordMarqueeItem }) {
  return (
    <li className="group hover:border-primary/60 hover:bg-primary/20 flex min-w-max items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 shadow-lg shadow-black/20 backdrop-blur-md transition hover:-translate-y-1">
      <span className="text-2xl font-bold tracking-tight">{item.word}</span>
      <span className="text-primary font-mono text-xs">{item.phonetic}</span>
      <Badge className="border-white/20 text-white/75" variant="outline">
        {item.level}
      </Badge>
    </li>
  );
}

export function WordMarquee({
  eyebrow = "Live vocabulary stream",
  title = "Words in motion, ready for recall.",
}: WordMarqueeProps) {
  const words = useWordMarquee();

  return (
    <section
      aria-label="English word marquee"
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-sky-950 text-white shadow-2xl"
      data-speed="0.9"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.58_0.16_245/0.35),transparent_32%),radial-gradient(circle_at_78%_72%,oklch(0.7_0.17_155/0.28),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-size-[36px_36px] opacity-30" />
      <div className="relative z-10 flex h-full min-h-96 flex-col justify-between gap-8 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Badge className="bg-primary text-primary-foreground gap-2 px-3 py-1">
              <Sparkles aria-hidden="true" />
              {eyebrow}
            </Badge>
            <h2 className="font-display mt-4 max-w-lg text-4xl leading-none font-bold tracking-tight">
              {title}
            </h2>
          </div>
          <div className="hidden rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white/70 sm:block">
            MSW powered mock feed
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4">
          {laneClasses.map((className, lane) => {
            const laneWords = getLaneWords(words, lane);
            return (
              <ul
                aria-hidden={lane > 0}
                className={`flex w-max gap-4 ${className}`}
                key={className}
              >
                {[...laneWords, ...laneWords].map((item, index) => (
                  <WordChip item={item} key={`${item.id}-${lane}-${index}`} />
                ))}
              </ul>
            );
          })}
        </div>
        <p className="max-w-xl text-sm leading-7 text-white/65">
          The new lightweight vocabulary motion surface keeps the learning
          context in plain English while avoiding heavyweight visual assets.
        </p>
      </div>
    </section>
  );
}
