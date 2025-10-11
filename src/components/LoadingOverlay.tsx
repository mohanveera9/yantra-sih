export const LoadingOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center loading-overlay">
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32">
          <svg
            className="animate-rotate-yantra"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="100" cy="100" r="80" stroke="hsl(var(--gold-antique))" strokeWidth="2" opacity="0.3" />
            <circle cx="100" cy="100" r="60" stroke="hsl(var(--gold-bright))" strokeWidth="2" opacity="0.5" />
            <circle cx="100" cy="100" r="40" stroke="hsl(var(--gold-antique))" strokeWidth="2" opacity="0.7" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="hsl(var(--gold-bright))" strokeWidth="2" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="hsl(var(--gold-bright))" strokeWidth="2" />
            <line x1="35" y1="35" x2="165" y2="165" stroke="hsl(var(--gold-antique))" strokeWidth="1.5" />
            <line x1="165" y1="35" x2="35" y2="165" stroke="hsl(var(--gold-antique))" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="8" fill="hsl(var(--gold-bright))" />
          </svg>
        </div>
        <p className="mt-6 font-heading italic font-medium text-2xl text-heritage-cream tracking-wide">
          Calculating Celestial Alignments...
        </p>
      </div>
    </div>
  );
};
