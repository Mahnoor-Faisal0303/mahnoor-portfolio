export function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 bg-[#0b0314] text-white px-5 sm:px-8 py-20 md:py-28 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {title && (
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-400 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
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
    <span className="text-xs px-2.5 py-1 rounded-full border border-[#693B93] bg-[#1A0B2E] text-purple-200">
      {children}
    </span>
  );
}

export const cardClass =
  "rounded-xl border border-[#693B93] bg-gradient-to-br from-[#130428] via-[#2a0e52] to-[#190634] shadow-xl";
