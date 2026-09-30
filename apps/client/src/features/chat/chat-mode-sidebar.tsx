import { Bot } from "lucide-react";
import type { ChatMode, ChatRoleType } from "../../shared/api/chat-schema";
import { Button } from "../../shared/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../shared/ui/components/card";

export type ChatModeSidebarProps = {
  readonly activeRole: ChatRoleType | null;
  readonly modes: readonly ChatMode[];
  readonly selectRole: (role: ChatRoleType) => void;
};

export function ChatModeSidebar({
  activeRole,
  modes,
  selectRole,
}: ChatModeSidebarProps) {
  return (
    <Card className="bg-secondary/60 backdrop-blur-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <Bot aria-hidden="true" size={18} />
          Conversation roles
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        {modes.map((mode) => (
          <Button
            className="justify-start"
            key={mode.id}
            onClick={() => {
              selectRole(mode.role);
            }}
            type="button"
            variant={activeRole === mode.role ? "default" : "ghost"}
          >
            {mode.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  );
}
