import { Link } from 'react-router-dom';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Kente-inspired logo mark */}
      <div className="relative w-10 h-10 flex-shrink-0">
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[2px]">
          <div className="bg-primary rounded-[1px]" />
          <div className="bg-secondary rounded-[1px]" />
          <div className="bg-primary rounded-[1px]" />
          <div className="bg-kente-green rounded-[1px]" />
          <div className="bg-primary rounded-[1px]" />
          <div className="bg-kente-green rounded-[1px]" />
          <div className="bg-primary rounded-[1px]" />
          <div className="bg-secondary rounded-[1px]" />
          <div className="bg-primary rounded-[1px]" />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-wider text-primary">
          OBAATANPA
        </span>
        <span className="font-sans text-[10px] font-medium tracking-[0.3em] text-muted-foreground uppercase">
          Kente Hub
        </span>
      </div>
    </Link>
  );
}
