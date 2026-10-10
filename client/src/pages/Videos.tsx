/**
 * Videos Page
 * Design: Dark background matching site theme, red accent borders, bold typography
 */

type YouTubeVideo = {
  id: string;
  label: string;
};

const animatedShorts: YouTubeVideo[] = [
  { id: "HCpBprR7xIQ", label: "Animated Short 1" },
  { id: "B7Iy3UrCY6g", label: "Animated Short 2" },
  { id: "jgXUBIa3Umg", label: "Animated Short 3" },
];

function YouTubePlayer({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden border-2 border-primary bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

export default function Videos() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h1 className="mb-4 text-6xl font-display uppercase tracking-tight text-foreground md:text-8xl">
          VIDEOS
        </h1>
        <div className="mb-16 h-1 w-24 bg-primary" />

        <section aria-labelledby="livestreams-heading" className="mb-24">
          <h2
            id="livestreams-heading"
            className="mb-8 text-4xl font-display uppercase tracking-wide text-foreground md:text-6xl"
          >
            Livestreams
          </h2>

          <div className="mb-12">
            <h3 className="mb-5 text-2xl font-display uppercase tracking-wide text-foreground md:text-3xl">
              Gigantic Kickoff Livestream Replay
            </h3>
            <YouTubePlayer
              id="HIZ-vDvkkLI"
              title="Gigantic Kickoff Livestream Replay"
            />
          </div>

          <div>
            <h3 className="mb-5 text-2xl font-display uppercase tracking-wide text-foreground md:text-3xl">
              Intro Livestream
            </h3>
            <div className="relative aspect-video w-full overflow-hidden border-2 border-primary bg-black">
              <iframe
                src="https://player.vimeo.com/video/1183871870?h=0&badge=0&autopause=0&player_id=0&app_id=58479"
                title="Intro Livestream"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="animated-shorts-heading">
          <h2
            id="animated-shorts-heading"
            className="mb-8 text-4xl font-display uppercase tracking-wide text-foreground md:text-6xl"
          >
            Animated Shorts
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {animatedShorts.map((short) => (
              <article key={short.id}>
                <h3 className="mb-4 text-xl font-display uppercase tracking-wide text-foreground md:text-2xl">
                  {short.label}
                </h3>
                <YouTubePlayer
                  id={short.id}
                  title={`${short.label} video`}
                />
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
