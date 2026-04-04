/**
 * Comics Page - Showcase Black Dragon and Pink Firefly issues
 */

export default function Comics() {
  const issues = [
    { number: 1, cover: "/images/covers/Issue-1-Cover.jpg" },
    { number: 2, cover: "/images/covers/Issue-2-Cover.jpg" },
    { number: 3, cover: "/images/covers/Issue-3-Cover.jpg" },
    { number: 4, cover: "/images/covers/Issue-4-Cover.jpg" },
    { number: 5, cover: "/images/covers/Issue-5-Cover.jpg" },
    { number: 6, cover: "/images/covers/Issue-6-Cover.jpg" },
    { number: 7, cover: "/images/covers/Issue-7-Cover.jpg" },
    { number: 8, cover: "/images/covers/Issue-8-Cover-New.jpg" },
    { number: 9, cover: "/images/covers/Issue-9-Cover.jpg" },
  ];

  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-display mb-6 text-foreground">
            BLACK DRAGON &<br/>PINK FIREFLY
          </h1>
          <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-3xl">
            Dark fantasy comedy in its purest form. Each issue brings you deeper into a world of intricate plots, unforgettable characters, and unapologetic storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {issues.map((issue) => (
            <div 
              key={issue.number} 
              className="group relative bg-card border-4 border-border hover:border-primary transition-all duration-200 overflow-hidden"
            >
              <div className="aspect-[2/3] relative">
                <img 
                  src={issue.cover} 
                  alt={`Issue ${issue.number}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 font-display text-2xl">
                  #{issue.number}
                </div>
              </div>
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-display text-foreground">ISSUE {issue.number}</h3>
                <p className="text-muted-foreground font-body mt-2">Coming Soon</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-card border-4 border-accent">
          <h2 className="text-3xl md:text-5xl font-display mb-4 text-foreground">
            DIGITAL GRAPHIC NOVELS
          </h2>
          <p className="text-lg font-body text-foreground/90 mb-4">
            Initially released as graphic novel volumes. Volume 1 will be issues 1-5, Volume 2 will be issues 6-9, and so on. Each story arc is around 20-25 issues, or 4-5 graphic novel volumes.
          </p>
          <p className="text-lg font-body text-muted-foreground">
            Digital only for now—instant access anywhere in the world at very low prices. Printed versions coming later.
          </p>
        </div>
      </div>
    </div>
  );
}
