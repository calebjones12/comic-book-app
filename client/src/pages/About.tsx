/**
 * About Page
 */

export default function About() {
  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-display mb-8 text-foreground">
          ABOUT A2HEROES
        </h1>

        {/* Mailing List Box */}
        <div className="max-w-4xl mb-10 border-2 border-primary bg-card px-8 py-6">
          <p className="font-body text-base text-foreground/80 leading-relaxed">
            <a
              href="https://alphamale20.kartra.com/page/smr1824"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 transition-colors font-semibold"
            >
              Click here
            </a>{" "}
            to get on our preferred mailing list to get access to secret live streams (with me, Caleb) that no one else gets plus get notified of launch dates as well as sneak peaks (pages, artwork, videos) not available anywhere else.
          </p>
        </div>
        
        <div className="max-w-4xl space-y-8 font-body text-lg text-foreground/90 leading-relaxed">
          <p>
            Welcome to A2Heroes, home of <strong className="text-foreground">Black Dragon and Pink Firefly</strong>—a dark fantasy comedy comic series that refuses to adhere to modern-day norms.
          </p>
          
          <p>
            This is storytelling in its purest form: raw, irreverent, and unapologetically entertaining. The kind of bold narrative that made the '80s unforgettable—real stakes, complex characters, and zero sacred cows.
          </p>
          
          <div className="p-8 bg-card border-4 border-primary">
            <h2 className="text-3xl font-display mb-4 text-foreground">THE VISION</h2>
            <p className="text-foreground/90 mb-4">
              Modern day pop culture sucks. Movies, TV shows, novels, comic books, and music have all objectively declined in quality over the past 25 years. And it's getting worse.
            </p>
            <p className="text-foreground/90 mb-4">
              These graphic novels do the opposite of what most pop culture does today:
            </p>
            <ul className="text-foreground/90 space-y-2 list-none">
              <li>Long plotlines and character arcs that actually make sense.</li>
              <li>Complex, flawed characters who suffer, grow, and change.</li>
              <li>No wokeism, left-wing political correctness, or invincible, perfect girl-boss characters, but also no right-wing social, political, or religious preaching either.</li>
              <li>Actual sex and romance between men and women (perish the thought!!!).</li>
            </ul>
          </div>

          <p>
            Read our{" "}
            <a
              href="/commitment"
              className="text-primary underline hover:text-primary/80 transition-colors font-semibold"
            >
              full commitments to you →
            </a>
          </p>
          
          <p>
            Multi-layered story arcs already written from beginning to end, so every twist has been earned and every thread leads somewhere that matters. This is the biggest, most ambitious project I've poured my soul into for over many years.
          </p>
          
          
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
