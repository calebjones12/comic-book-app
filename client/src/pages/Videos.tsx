/**
 * Videos Page
 * Design: Dark background matching site theme, red accent borders, bold typography
 */

type YouTubeVideo = {
  id: string;
  label: string;
};

const animatedCommercials: YouTubeVideo[] = [
  { id: "jgXUBIa3Umg", label: "Black Dragon Regrets Nothing" },
  { id: "B7Iy3UrCY6g", label: "Baby Zorra Is Very Humble" },
  { id: "HCpBprR7xIQ", label: "Chenning Doesn't Ask Twice" },
  { id: "LPaLVXjiADk", label: "Syndrith Has Had Enough | Animated Short #4" },
  { id: "ymFOfpFkzBM", label: "Olyndris Isn't Listening | Animated Short #5" },
  { id: "RQknBBMwO64", label: "Nobody Warned Them About Her | Animated Short #6" },
];

function YouTubePlayer({ id, title }: { id: string; title: string }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden border-2 border-primary bg-black">
      <iframe
        src={`https://www.youtube.com/embed/${id}?rel=0&cc_load_policy=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}

const sectionHeadingClass = "mb-8 text-4xl font-display uppercase tracking-wide text-foreground md:text-6xl";
const videoGridClass = "grid grid-cols-1 gap-8 sm:grid-cols-2";
const videoTitleClass = "mb-4 text-xl font-display uppercase tracking-wide text-foreground md:text-2xl";
const commercialTitleClass = `${videoTitleClass} sm:min-h-24 lg:min-h-16`;

export default function Videos() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-8">
        <h1 className="mb-4 text-6xl font-display uppercase tracking-tight text-foreground md:text-8xl">
          VIDEOS
        </h1>
        <div className="mb-16 h-1 w-24 bg-primary" />

        <section aria-labelledby="animated-shorts-heading" className="mb-20">
          <h2 id="animated-shorts-heading" className={sectionHeadingClass}>
            Animated Shorts
          </h2>
          <div className={videoGridClass}>
            <article>
              <YouTubePlayer id="CW_Zs1ZAJKA" title="Animated Short" />
            </article>
          </div>
        </section>

        <section aria-labelledby="animated-commercials-heading" className="mb-20">
          <h2 id="animated-commercials-heading" className={sectionHeadingClass}>
            Animated Commercials
          </h2>
          <div className={videoGridClass}>
            {animatedCommercials.map((video) => (
              <article key={video.id}>
                <h3 className={commercialTitleClass}>{video.label}</h3>
                <YouTubePlayer id={video.id} title={`${video.label} video`} />
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="livestream-replays-heading">
          <h2 id="livestream-replays-heading" className={sectionHeadingClass}>
            Livestream Replays
          </h2>
          <div className={videoGridClass}>
            <article>
              <h3 className={videoTitleClass}>Launch Day Livestream</h3>
              <YouTubePlayer id="--9Axo-OQuI" title="Launch Day Livestream" />
            </article>
            <article>
              <h3 className={videoTitleClass}>Gigantic Kickoff Livestream Replay</h3>
              <YouTubePlayer id="HIZ-vDvkkLI" title="Gigantic Kickoff Livestream Replay" />
            </article>
            <article>
              <h3 className={videoTitleClass}>Intro Livestream</h3>
              <div className="relative aspect-video w-full overflow-hidden border-2 border-primary bg-black">
                <iframe
                  src="https://player.vimeo.com/video/1183871870?h=0&badge=0&autopause=0&player_id=0&app_id=58479"
                  title="Intro Livestream"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}
