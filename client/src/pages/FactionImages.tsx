/**
 * Faction Images Page
 * Full-width reference gallery displayed in the requested order.
 */

const factionImages = [
  {
    title: "Core Group",
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/ebXYOpxjGLcjxESF.png",
  },
  {
    title: "Critical Toll",
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/MDafAQWSNKSKRLUG.jpg",
  },
  {
    title: "Rathor",
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/hdRqzGhHbSwWVXhk.png",
  },
  {
    title: "Fairy Kingdom",
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/hjsjYylTbzfpIUcu.jpg",
  },
  {
    title: "Undead",
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/FBcTfhYKcFTyDiAM.png",
  },
  {
    title: "Royals",
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/qsxXAOTYpaxGAHvI.png",
  },
];

export default function FactionImages() {
  return (
    <main className="min-h-screen bg-background py-12 md:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="mb-12 text-5xl md:text-7xl font-display text-foreground">
          FACTION IMAGES
        </h1>

        <div className="mx-auto max-w-6xl space-y-14">
          {factionImages.map((faction) => (
            <figure key={faction.title} className="space-y-4">
              <figcaption className="text-3xl md:text-4xl font-display uppercase tracking-wide text-foreground">
                {faction.title}
              </figcaption>
              <img
                src={faction.src}
                alt={`${faction.title} faction artwork`}
                className="block h-auto w-full border-4 border-border bg-card object-contain shadow-sm"
              />
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}
