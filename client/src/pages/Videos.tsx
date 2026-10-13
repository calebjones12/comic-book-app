/**
 * Videos Page
 * Design: Dark background matching site theme, red accent borders, bold typography
 */

type YouTubeVideo = {
  id: string;
  label: string;
};

type ComingSoonVideo = {
  title: string;
  imageUrl: string;
};

const animatedShorts: YouTubeVideo[] = [
  { id: "jgXUBIa3Umg", label: "Black Dragon Regrets Nothing" },
  { id: "B7Iy3UrCY6g", label: "Baby Zorra" },
  { id: "HCpBprR7xIQ", label: "Chenning Doesn't Ask Twice" },
  { id: "LPaLVXjiADk", label: "Syndrith Has Had Enough | Animated Short #4" },
];

const comingSoonShorts: ComingSoonVideo[] = [
  {
    title: "Syndrith Has Had Enough | Animated Short #5",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/stSygImqAQvaxQJn.png",
  },
  {
    title: "Olyndris Isn't Listening | Animated Short #6",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/codlgzZkmcdWpreJ.png",
  },
  {
    title: "Nobody Warned Them About Her | Animated Short #7",
    imageUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/bvtgwyJSWoteAasE.png",
  },
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
            {comingSoonShorts.map((short) => (
              <article key={short.title}>
                <h3 className="mb-4 text-xl font-display uppercase tracking-wide text-foreground md:text-2xl">
                  {short.title}
                </h3>
                <div className="relative aspect-video w-full overflow-hidden border-2 border-border bg-black">
                  <img
                    src={short.imageUrl}
                    alt={`${short.title} coming soon thumbnail`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/80 px-4 py-3 text-center font-display text-lg uppercase tracking-wider text-white">
                    Coming Soon
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
