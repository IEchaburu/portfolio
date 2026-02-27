export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="border-[3px] border-border-brutal bg-background p-12 shadow-[6px_6px_0_0_var(--shadow-color)]">
        <h1 className="font-mono text-5xl md:text-7xl uppercase mb-6 leading-tight">
          IÑAKI
          <br />
          ECHABURU DUTREN
        </h1>

        <p className="font-mono text-lg mb-8 max-w-2xl">
          Software Developer specializing in distributed systems, event-driven
          architecture, and integrating AI into production-grade applications.
        </p>

        <a
          href="#contact"
          className="inline-block font-mono uppercase px-8 py-4 bg-gold text-black border-[3px] border-border-brutal hover:bg-neon-green transition-colors shadow-[6px_6px_0_0_var(--gold)]"
        >
          CONTACT ME →
        </a>
      </div>
    </section>
  );
}
