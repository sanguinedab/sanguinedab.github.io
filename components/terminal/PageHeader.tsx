export function PageHeader({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="mb-8 flex items-baseline justify-between gap-3">
      <h1 className="glow flex items-baseline gap-3 text-2xl font-semibold tracking-tight text-fg md:text-3xl">
        <span aria-hidden className="text-accent">
          ▍
        </span>
        {title}
      </h1>
      <span className="text-sm text-green/70">// {hint}</span>
    </div>
  );
}
