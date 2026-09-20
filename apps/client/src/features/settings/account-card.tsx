import { LogOut } from "lucide-react";
import type { WebUser } from "../../shared/api";
import { Button } from "@/shared/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/components/card";

export type AccountCardProps = {
  readonly logout: () => void;
  readonly user: WebUser;
};

export function AccountCard({ logout, user }: AccountCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="text-muted-foreground text-sm">
                Words mastered
              </div>
              <div className="font-display text-primary text-2xl font-bold">
                {user.wordNumber}
              </div>
            </div>
            <div className="bg-muted rounded-lg p-4">
              <div className="text-muted-foreground text-sm">Practice days</div>
              <div className="font-display text-foreground text-2xl font-bold">
                {user.dayNumber}
              </div>
            </div>
          </div>
          <Button onClick={logout} type="button" variant="destructive">
            <LogOut aria-hidden="true" />
            Sign out
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
