import { categories } from "@/content/stack";

export function TechStack() {
  return (
    <section
      id="stack"
      className="max-w-7xl mx-auto px-6 py-20 border-t-[3px] border-border-brutal"
    >
      <h2 className="font-mono text-4xl uppercase mb-12">
        TECH STACK / 2026
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="border-[3px] border-border-brutal bg-background p-6 shadow-[6px_6px_0_0_var(--shadow-color)]"
          >
            <div className="mb-4 pb-3 border-b-[3px] border-border-brutal">
              <h3 className="font-mono text-sm uppercase text-gold">
                {category.title}
              </h3>
            </div>

            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-sm flex items-start gap-2"
                >
                  <span className="text-gold mt-1">■</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
