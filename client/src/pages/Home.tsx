/**
 * Neo-Brutalism Home Page
 * Split hero: dark text panel left, full-height illustration right (all 4 characters visible)
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import KickoffLivestream from "@/components/KickoffLivestream";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* News Flash Banner */}
      <div className="bg-black border-b-4 border-red-600 py-3 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-body text-white text-sm md:text-base">
            Check out the new status dashboard of all upcoming graphic novels —{" "}
            <a
              href="/status"
              className="text-red-400 underline font-bold hover:text-red-300 transition-colors"
            >
              Click here
            </a>
          </span>
        </div>
      </div>

      {/* Hero Section - Split layout */}
      <section className="relative flex min-h-screen lg:min-h-[calc(100vh-9rem)]">
        {/* Left: Dark panel with text */}
        <div
          className="relative z-10 flex w-full flex-shrink-0 flex-col justify-start px-8 py-8 lg:w-[48%] lg:px-16 lg:py-8"
          style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111111 60%, #1a0a00 100%)' }}
        >
          {/* Subtle red accent line on left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

          <h1 className="mb-3 text-5xl font-display leading-none text-white md:text-6xl xl:text-7xl">
            BLACK DRAGON<br/>AND PINK FIREFLY
          </h1>
          <p className="mb-6 text-xl font-body font-semibold uppercase tracking-widest text-primary md:text-2xl">
            Graphic Novels
          </p>

          <p className="mb-4 max-w-xl font-body text-base text-white/85 md:text-lg">
            Sex. Violence. Wit sharp enough to draw blood.
          </p>

          <KickoffLivestream className="mb-4" />

          <div className="max-w-xl border border-primary/70 px-4 py-3 font-body text-sm text-white/85 sm:flex sm:items-center sm:gap-4">
            <strong className="block whitespace-nowrap font-display text-base uppercase tracking-wider text-white sm:text-lg">
              WANT FREE BONUSES?
            </strong>
            <span className="mt-1 block leading-relaxed sm:mt-0">
              Grab your referral link now. Prizes unlock with your very first referred reader.{" "}
              <a
                href="https://www.caleb.top/comic"
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap font-bold uppercase tracking-wide text-primary underline underline-offset-4 transition-colors hover:text-accent"
              >
                Get My Link →
              </a>
            </span>
          </div>
        </div>

        {/* Right: Full illustration — all 4 characters */}
        <div className="relative hidden flex-1 overflow-hidden lg:block">
          <img
            src="/assets/black-dragon-pink-firefly-characters.jpg"
            alt="Black Dragon and Pink Firefly characters"
            className="absolute inset-0 h-full w-full object-contain object-center"
            style={{ background: '#0d1a2e' }}
          />
          {/* Subtle left-edge fade to blend with dark panel */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-24"
            style={{ background: 'linear-gradient(to right, #0a0a0a, transparent)' }}
          />
        </div>

        {/* Mobile: image below text (stacked) */}
        <div
          className="absolute inset-0 -z-10 lg:hidden"
          style={{
            backgroundImage: `url('/assets/black-dragon-pink-firefly-characters.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.75)' }} />
        </div>
      </section>

      {/* Description and primary navigation */}
      <section className="bg-[#0a0a0a] py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 max-w-xl space-y-4 text-base font-body text-white/85 md:text-lg">
              <p>
                Intricate plots that reward your attention with payoffs you won't see coming.
              </p>
              <p>
                A sprawling ensemble of characters you'll actually care about—flawed, fascinating, and unforgettable. Multi-layered story arcs already written from beginning to end, so every twist has been earned and every thread leads somewhere that matters.
              </p>
              <p className="font-semibold text-primary">
                No wokeism. No girl bosses. No left-wing bullshit. No right-wing bullshit. No socialism, no feminism, no puritanical right-wing stuff, no lecturing.
              </p>
              <p>
                Just the ruthless commitment to character, story, and world-building that great old-school 1980's style fantasy demands.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/comics">
                <div className="flex cursor-pointer items-center gap-3 bg-primary px-8 py-4 font-display text-xl uppercase tracking-wider text-primary-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground group">
                  Explore Chapters
                  <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </div>
              </Link>

              <Link href="/characters">
                <div className="cursor-pointer border-4 border-white px-8 py-4 font-display text-xl uppercase tracking-wider text-white transition-all duration-200 hover:bg-white hover:text-black">
                  Meet Characters
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Characters */}
      <section className="py-24 bg-card diagonal-slash-reverse">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center">
            <Link href="/characters">
              <div className="inline-block bg-foreground text-background px-8 py-4 font-display text-2xl uppercase tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-pointer">
                View All Characters
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-display mb-12 text-foreground text-center">
              THIS IS THE BIGGEST,<br/>MOST AMBITIOUS PROJECT OF MY LIFE
            </h2>
            <p className="text-xl md:text-2xl font-body text-center text-muted-foreground leading-relaxed">
              I've poured my soul into for many years. This is dark fantasy comedy in its purest form—raw, irreverent, and unapologetically entertaining. The kind of storytelling that made the '80s unforgettable: bold choices, real stakes, and zero sacred cows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
