type KickoffLivestreamProps = {
  className?: string;
};

const externalLinkClass =
  "font-bold text-primary underline underline-offset-4 transition-colors hover:text-accent";

export default function KickoffLivestream({ className = "" }: KickoffLivestreamProps) {
  return (
    <div className={`w-full border-l-4 border-primary bg-[#0a0a0a] px-5 py-4 shadow-lg lg:px-4 lg:py-3 ${className}`}>
      <div className="mb-4 space-y-2 lg:mb-3">
        <h2 className="font-display text-2xl uppercase leading-tight text-white md:text-3xl lg:text-[26px]">
          GRAPHIC NOVELS 1-4 ARE AVAILABLE NOW! CLICK{" "}
          <a
            href="https://www.caleb.top/go"
            target="_blank"
            rel="noreferrer"
            className={externalLinkClass}
          >
            HERE
          </a>{" "}
          TO GET THEM
        </h2>
        <p className="font-display text-lg uppercase leading-snug text-white/90 md:text-xl lg:text-lg">
          IF YOU ALREADY HAVE THE GRAPHIC NOVELS, CLICK{" "}
          <a
            href="https://www.caleb.top/pass"
            target="_blank"
            rel="noreferrer"
            className={externalLinkClass}
          >
            HERE
          </a>{" "}
          TO GET GRAPHIC NOVELS 5-8!
        </p>
      </div>

      <div className="space-y-3 font-body text-base leading-relaxed text-white/85 md:text-lg lg:text-lg lg:leading-snug">
        <p>
          We are now in the post-launch phase where we are funding every graphic novel one at a time. All graphic novels out to #8 have been funded, meaning they are guaranteed to be released. You can check the Status page{" "}
          <a href="/status" className={externalLinkClass}>
            here
          </a>{" "}
          at this site to see which graphic novels are completed and funded.
        </p>
        <p>
          Click{" "}
          <a
            href="https://www.caleb.top/go"
            target="_blank"
            rel="noreferrer"
            className={externalLinkClass}
          >
            HERE
          </a>{" "}
          to get graphic novels 1-4 and{" "}
          <a
            href="https://www.caleb.top/pass"
            target="_blank"
            rel="noreferrer"
            className={externalLinkClass}
          >
            HERE
          </a>{" "}
          to get 5-8.
        </p>
      </div>
    </div>
  );
}
