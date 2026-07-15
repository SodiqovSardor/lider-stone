export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <span className="font-serif text-2xl tracking-[0.3em] text-foreground/80">
          LIDER STONE
        </span>
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent/60" style={{ animationDelay: "0ms" }} />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent/60" style={{ animationDelay: "200ms" }} />
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent/60" style={{ animationDelay: "400ms" }} />
        </div>
      </div>
    </div>
  );
}
