import { useEffect, useState } from "react";

type KickoffLivestreamProps = {
  className?: string;
};

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

// October 30, 2026 at 11:59 PM PST (UTC-8).
const DEADLINE_TIMESTAMP = Date.UTC(2026, 9, 31, 7, 59, 59);

function getCountdown(): Countdown {
  const remaining = Math.max(0, DEADLINE_TIMESTAMP - Date.now());
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
  const isExpired = countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`w-full border-l-4 border-primary bg-[#0a0a0a] px-5 py-4 shadow-lg lg:px-4 lg:py-3 ${className}`}>
      <h2 className="mb-3 font-display text-2xl uppercase leading-tight text-white md:text-3xl lg:mb-2 lg:text-[26px]">
        THE LAUNCH HAS BEGUN. GRAPHIC NOVELS 1-4 ARE AVAILABLE NOW! CLICK{" "}
        <a
          href="https://www.caleb.top/go"
          target="_blank"
          rel="noreferrer"
          className="text-primary underline underline-offset-4 transition-colors hover:text-accent"
        >
          HERE
        </a>{" "}
        BEFORE THE DEADLINE OF OCT 30!
      </h2>

      {isExpired ? (
        <div className="mb-4 font-display text-2xl uppercase tracking-[0.15em] text-white lg:mb-3">
          DEADLINE REACHED
        </div>
      ) : (
        <div className="mb-4 grid grid-cols-4 gap-2 text-center lg:mb-3" aria-label="Countdown to the October 30, 2026 deadline">
          {[
            [countdown.days, "Days"],
            [countdown.hours, "Hours"],
            [countdown.minutes, "Minutes"],
            [countdown.seconds, "Seconds"],
          ].map(([value, label]) => (
            <div key={label} className="min-w-0">
              <div className="font-display text-xl leading-none text-white sm:text-2xl lg:text-[32px]">
                {formatValue(value as number)}
              </div>
              <div className="mt-1 truncate font-body text-[0.6rem] uppercase tracking-wider text-primary sm:text-xs lg:text-[11px]">
                {label}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="space-y-3 font-body text-base leading-relaxed text-white/85 md:text-lg lg:text-lg lg:leading-snug">
        <p>
          The launch has begun and now it's up to YOU to decide if we continue to release regular graphic novels every month, as well as audio dramas and animation. We MUST have 1,500 people purchase these graphic novels by midnight on October 30th. If we do, A2 Heroes becomes a real company with a real release schedule and it's ON.
        </p>
        <p>
          Click{" "}
          <a href="https://www.caleb.top/go" target="_blank" rel="noreferrer" className="font-bold text-primary underline underline-offset-4 transition-colors hover:text-accent">
            here
          </a>{" "}
          and get your graphic novels RIGHT NOW and refer all of your guy buddies. We've put in the work to complete the first four graphic novels. The rest is up to you. Click{" "}
          <a href="https://www.caleb.top/go" target="_blank" rel="noreferrer" className="font-bold text-primary underline underline-offset-4 transition-colors hover:text-accent">
            here
          </a>{" "}
          and get this done now.
        </p>
      </div>
    </div>
  );
}
