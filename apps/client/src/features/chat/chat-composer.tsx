import { Brain, Mic, Pause, Search, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useSpeechToText } from "../../shared/browser";
import { Button } from "../../shared/ui/components/button";
import { CardContent, CardFooter } from "../../shared/ui/components/card";
import { Textarea } from "../../shared/ui/components/textarea";

export type ChatComposerPayload = {
  readonly content: string;
  readonly deepThink: boolean;
  readonly webSearch: boolean;
};

export type ChatComposerProps = {
  readonly isDisabled: boolean;
  readonly isStreaming: boolean;
  readonly onSend: (payload: ChatComposerPayload) => void;
};

export function ChatComposer({
  isDisabled,
  isStreaming,
  onSend,
}: ChatComposerProps) {
  const [content, setContent] = useState("");
  const [deepThink, setDeepThink] = useState(false);
  const [webSearch, setWebSearch] = useState(false);
  const speech = useSpeechToText({ continuous: true, lang: "en-US" });

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = content.trim();
    if (!trimmed) return;
    onSend({ content: trimmed, deepThink, webSearch });
    setContent("");
  };

  return (
    <form
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-xl"
      onSubmit={submit}
    >
      <CardContent className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          <Button
            onClick={() => setDeepThink((value) => !value)}
            size="sm"
            type="button"
            variant={deepThink ? "default" : "outline"}
          >
            <Brain aria-hidden="true" size={16} />
            {deepThink ? "Deep think on" : "Deep think"}
          </Button>
          <Button
            onClick={() => setWebSearch((value) => !value)}
            size="sm"
            type="button"
            variant={webSearch ? "default" : "outline"}
          >
            <Search aria-hidden="true" size={16} />
            {webSearch ? "Web search on" : "Web search"}
          </Button>
          <Button
            disabled={!speech.isSupported}
            onClick={() => {
              if (speech.isRecording) {
                speech.stop();
              } else {
                speech.start(setContent);
              }
            }}
            size="sm"
            type="button"
            variant={speech.isRecording ? "default" : "outline"}
          >
            {speech.isRecording ? (
              <Pause aria-hidden="true" size={16} />
            ) : (
              <Mic aria-hidden="true" size={16} />
            )}
            {speech.isSupported ? "Voice input" : "Speech unavailable"}
          </Button>
        </div>
        <Textarea
          className="min-h-24"
          disabled={isDisabled || isStreaming}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Ask for corrections, role-play, or vocabulary examples..."
          value={content}
        />
      </CardContent>
      <CardFooter className="justify-end">
        <Button disabled={isDisabled || isStreaming} type="submit">
          <Send aria-hidden="true" size={18} />
          {isStreaming ? "Streaming..." : "Send"}
        </Button>
      </CardFooter>
    </form>
  );
}
