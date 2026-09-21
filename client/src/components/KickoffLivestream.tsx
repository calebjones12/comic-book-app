import { ArrowRight, PlayCircle } from "lucide-react";

type KickoffLivestreamProps = {
  className?: string;
};

export default function KickoffLivestream({ className = "" }: KickoffLivestreamProps) {
  return (
    <div className={`max-w-xl border-l-4 border-primary bg-white/5 px-5 py-4 shadow-lg ${className}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-body font-bold uppercase tracking-[0.2em] text-primary">
        <PlayCircle size={18} aria-hidden="true" />
        Live Event
      </div>
      <h2 className="mb-2 text-2xl md:text-3xl font-display leading-none text-white">
        Gigantic Kickoff Livestream
      </h2>
      <p className="mb-3 font-display text-lg uppercase tracking-wider text-white">
        September 4 · 8 PM EST · YouTube
      </p>
      <p className="mb-4 text-sm md:text-base font-body leading-relaxed text-white/80">
        See the artwork, animation, and story structure, plus specific launch dates for upcoming graphic novels. Prizes will be given away to viewers who attend live or watch the recording within 48 hours.
      </p>
      <a
        href="https://www.youtube.com/watch?v=HIZ-vDvkkLI"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-display text-lg uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        Watch on YouTube
        <ArrowRight size={20} />
      </a>
    </div>
  );
}
