import { Camera } from "lucide-react";
import type { ChangeEvent } from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/ui/components/avatar";
import { Button } from "@/shared/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/components/card";

export type AvatarCardProps = {
  readonly avatarUrl: string | null;
  readonly name: string;
  readonly uploadAvatar: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function AvatarCard({ avatarUrl, name, uploadAvatar }: AvatarCardProps) {
  const fallback = name.slice(0, 1).toUpperCase() || "A";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Avatar</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="size-24">
              {avatarUrl ? (
                <AvatarImage alt={`${name} avatar`} src={avatarUrl} />
              ) : null}
              <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-bold">
                {fallback}
              </AvatarFallback>
            </Avatar>
            <Button asChild>
              <label>
                <Camera aria-hidden="true" size={18} />
                Select avatar
                <input
                  accept="image/*"
                  className="hidden"
                  onChange={uploadAvatar}
                  type="file"
                />
              </label>
            </Button>
          </div>
          <p className="text-muted-foreground text-xs">
            Supports png, jpg, and webp images up to the server upload limit.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
