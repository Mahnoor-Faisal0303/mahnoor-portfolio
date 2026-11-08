export function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 bg-page text-ink px-5 sm:px-8 py-20 md:py-28 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-brand to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              {title}
            </h2>
            {subtitle && (
              <p className="text-ink-muted mt-3 max-w-2xl mx-auto text-sm sm:text-base">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }) {
  return (
    <span className="text-xs px-2.5 py-1 rounded-full border border-edge bg-surface text-violet-2">
      {children}
    </span>
  );
}

export const cardClass =
  "rounded-xl border border-edge bg-gradient-to-br from-card-a via-card-b to-card-c shadow-xl";
