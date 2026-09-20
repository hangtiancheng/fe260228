import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/shared/ui/components/avatar";

export type UserAvatarProps = {
  readonly avatarUrl: string | undefined;
  readonly name: string;
};

export function UserAvatar({ avatarUrl, name }: UserAvatarProps) {
  const fallback = name.slice(0, 1).toUpperCase();

  return (
    <Avatar className="size-10">
      {avatarUrl ? <AvatarImage alt={name} src={avatarUrl} /> : null}
      <AvatarFallback className="bg-primary/10 text-primary text-sm font-bold">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
}
