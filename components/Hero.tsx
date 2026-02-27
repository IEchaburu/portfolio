export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="border-[3px] border-border-brutal bg-background p-6 sm:p-8 md:p-12 shadow-[6px_6px_0_0_var(--shadow-color)]">
        <h1 className="font-mono text-3xl sm:text-5xl md:text-7xl uppercase mb-4 sm:mb-6 leading-tight">
          IÑAKI
          <br />
          ECHABURU DUTREN
        </h1>

        <p className="font-mono text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl">
          Software Developer specializing in distributed systems, event-driven
          architecture, and integrating AI into production-grade applications.
        </p>

        <a
          href="#contact"
          className="inline-block font-mono uppercase px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-gold text-black border-[3px] border-border-brutal hover:bg-neon-green transition-colors shadow-[6px_6px_0_0_var(--gold)]"
        >
          CONTACT ME →
        </a>
      </div>
    </section>
  );
}
