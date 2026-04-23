/**
 * Videos Page
 * Design: Dark background matching site theme, red accent borders, bold typography
 */

export default function Videos() {
  return (
    <div className="min-h-screen py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-display mb-4 text-foreground uppercase tracking-tight">
          VIDEOS
        </h1>
        <div className="w-24 h-1 bg-primary mb-12" />

        {/* Video Entry */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-foreground mb-6 uppercase tracking-wide">
            First Black Dragon and Pink Firefly Livestream Replay
          </h2>
          <div
            className="relative w-full border-2 border-primary"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              src="https://player.vimeo.com/video/1183871870?h=0&badge=0&autopause=0&player_id=0&app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              title="First Black Dragon and Pink Firefly Livestream Replay"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

          <p className="font-body text-lg text-foreground/80 mt-8">
            There will be additional livestreams over the next few weeks. Check back here for dates!
          </p>
      </div>
    </div>
  );
}
