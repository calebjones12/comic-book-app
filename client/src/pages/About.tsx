/**
 * About Page
 */

export default function About() {
  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-display mb-12 text-foreground">
          ABOUT A2HEROES
        </h1>
        
        <div className="max-w-4xl space-y-8 font-body text-lg text-foreground/90 leading-relaxed">
          <p>
            Welcome to A2Heroes, home of <strong className="text-foreground">Black Dragon and Pink Firefly</strong>—a dark fantasy comedy comic series that refuses to compromise.
          </p>
          
          <p>
            This is storytelling in its purest form: raw, irreverent, and unapologetically entertaining. The kind of bold narrative that made the '80s unforgettable—real stakes, complex characters, and zero sacred cows.
          </p>
          
          <div className="p-8 bg-card border-4 border-primary">
            <h2 className="text-3xl font-display mb-4 text-foreground">THE VISION</h2>
            <p className="text-foreground/90">
              Sex. Violence. Wit sharp enough to draw blood. Intricate plots that reward your attention with payoffs you won't see coming. A sprawling ensemble of characters you'll actually care about—flawed, fascinating, and unforgettable.
            </p>
          </div>
          
          <p>
            Multi-layered story arcs already written from beginning to end, so every twist has been earned and every thread leads somewhere that matters. This is the biggest, most ambitious project I've poured my soul into for over ten years.
          </p>
          
          <div className="p-8 bg-card border-4 border-accent">
            <h2 className="text-3xl font-display mb-4 text-foreground">NO AGENDAS</h2>
            <p className="text-foreground/90 mb-4">
              No wokeism. No girl bosses. No left-wing bullshit. No right-wing bullshit. No socialism, no feminism, no Christianity, no lecturing.
            </p>
            <p className="text-foreground/90">
              Just the ruthless commitment to character, story, and world-building that great fantasy demands.
            </p>
          </div>
          
          <p>
            The character of <strong className="text-foreground">Black Dragon</strong> is the first 100% Alpha Male 2.0 character—living the fantasy version of the Alpha Male 2.0 lifestyle. The "hidden that is not hidden" intention is to introduce readers to these concepts without having to read a 550-page book.
          </p>
          
          <div className="p-8 bg-card border-2 border-border">
            <h2 className="text-3xl font-display mb-4 text-foreground">THE FUTURE</h2>
            <p className="text-foreground/90">
              A2Heroes is just the beginning. The plan includes more comic titles set in the same world, animation, collectibles, toys, movies, and an entire IP universe. But it all starts with the comics—and how well they resonate with readers like you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
