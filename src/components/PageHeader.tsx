import { Badge } from "@/components/ui/badge";

interface PageHeaderProps {
  title: string;
  directory: string;
  description: string;
}

export function PageHeader({ title, directory, description }: PageHeaderProps) {
  return (
    <header className="mb-24 flex flex-col items-start justify-between gap-12 border-b border-border pb-16 md:flex-row md:items-end">
      <div className="space-y-8 max-w-3xl">
        <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground tracking-widest uppercase">
          <span>[ DIR . {directory} ]</span>
          <span className="h-[1px] w-12 bg-border"></span>
          <span>OK</span>
        </div>
        <h1 className="font-sans text-5xl font-light tracking-tight text-foreground sm:text-7xl leading-none">
          {title}
        </h1>
        <p className="font-mono text-xs text-foreground uppercase tracking-[0.3em] max-w-lg leading-relaxed">
          {description}
        </p>
      </div>
      
      <div className="flex flex-col items-start md:items-end gap-6 text-left md:text-right font-mono text-[10px] uppercase text-muted-foreground tracking-widest">
        <div className="mt-4 border border-border p-3 bg-muted/20">
          PRESS <span className="text-foreground font-bold">CMD + K</span> TO RETURN
        </div>
      </div>
    </header>
  );
}
