export function HumanAI() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 border-t-[3px] border-border-brutal"
    >
      <div className="border-[3px] border-border-brutal bg-background p-6 sm:p-8 md:p-12 shadow-[6px_6px_0_0_var(--shadow-color)]">
        <h2 className="font-mono text-2xl sm:text-3xl md:text-4xl uppercase mb-6 md:mb-8">
          THE HUMAN & AI
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h3 className="font-mono text-lg sm:text-xl uppercase mb-3 sm:mb-4 text-gold">
              ENGINEERING PHILOSOPHY
            </h3>
            <p className="font-mono text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              I build systems that don&apos;t just work—they scale, adapt, and
              survive production chaos. My approach prioritizes
              observability-first architecture, domain-driven design, and
              treating infrastructure as a first-class concern.
            </p>
            <p className="font-mono text-xs sm:text-sm leading-relaxed">
              Every line of code is a trade-off. I document those decisions,
              build with testing in mind, and believe that the best code is code
              you don&apos;t have to write.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-lg sm:text-xl uppercase mb-3 sm:mb-4 text-neon-green">
              AI COLLABORATION IN 2026
            </h3>
            <p className="font-mono text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              I use AI as a force multiplier—not a replacement. Claude assists
              with boilerplate, helps explore edge cases, and acts as a rubber
              duck for architecture decisions. GitHub Copilot accelerates the
              mundane.
            </p>
            <p className="font-mono text-xs sm:text-sm leading-relaxed">
              But the hard problems—system design, performance optimization,
              managing distributed state—those still require human intuition,
              battle scars, and knowing when to ignore the AI&apos;s
              suggestions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
