import { useEffect, useState } from "react";
import { ArrowRight, PlayCircle } from "lucide-react";

type KickoffLivestreamProps = {
  className?: string;
};

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// October 22, 2026 at 2:00 PM America/New_York (EDT, UTC-4).
const LAUNCH_TIMESTAMP = Date.parse("2026-10-22T14:00:00-04:00");

function getCountdown(): Countdown {
  const remaining = Math.max(0, LAUNCH_TIMESTAMP - Date.now());
  const totalSeconds = Math.floor(remaining / 1000);

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function formatValue(value: number): string {
  return value.toString().padStart(2, "0");
}

export default function KickoffLivestream({ className = "" }: KickoffLivestreamProps) {
  const [countdown, setCountdown] = useState<Countdown>(getCountdown);
  const isLive = countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`max-w-xl border-l-4 border-primary bg-[#0a0a0a] px-5 py-4 shadow-lg ${className}`}>
      <div className="mb-2 flex items-center gap-2 text-sm font-body font-bold uppercase tracking-[0.2em] text-primary">
        <PlayCircle size={18} aria-hidden="true" />
        LAUNCH DAY LIVESTREAM
      </div>
      <h2 className="mb-2 text-2xl font-display leading-none text-white md:text-3xl">
        BOOKS 1–4 DROP LIVE
      </h2>
      <p className="mb-3 font-display text-lg uppercase tracking-wider text-white">
        THURSDAY, OCTOBER 22 · 2 PM EST · YOUTUBE
      </p>
      <p className="mb-4 text-sm font-body leading-relaxed text-white/80 md:text-base">
        The first four graphic novels go on sale during the stream at $5 each, a price that disappears when the launch ends. Prizes for everyone watching live or within 48 hours.
      </p>

      {isLive ? (
        <div className="mb-4 font-display text-2xl uppercase tracking-[0.2em] text-white">
          Live Now
        </div>
      ) : (
        <div className="mb-4 grid grid-cols-4 gap-2 text-center" aria-label="Countdown to launch day livestream">
          {[
            [countdown.days, "Days"],
            [countdown.hours, "Hours"],
            [countdown.minutes, "Minutes"],
            [countdown.seconds, "Seconds"],
          ].map(([value, label]) => (
            <div key={label} className="min-w-0">
              <div className="font-display text-xl leading-none text-white sm:text-2xl">
                {formatValue(value as number)}
              </div>
              <div className="mt-1 truncate font-body text-[0.6rem] uppercase tracking-wider text-primary sm:text-xs">
                {label}
              </div>
            </div>
          ))}
        </div>
      )}

      <a
        href="https://www.youtube.com/watch?v=--9Axo-OQuI"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 bg-primary px-5 py-3 font-display text-lg uppercase tracking-wider text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        SET A YOUTUBE REMINDER
        <ArrowRight size={20} />
      </a>
    </div>
  );
}
