/**
 * Graphic Novels Page - Showcase the first eight graphic novel covers
 */

type GraphicNovel = {
  number: number;
  cover: string;
  availability: string;
};

const graphicNovels: GraphicNovel[] = [
  {
    number: 1,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/HMGMEbzTvbkjFQxY.png",
    availability: "Available Now - Click HERE",
  },
  {
    number: 2,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/zwlVzLEWBDdyUFrl.png",
    availability: "Available Now - Click HERE",
  },
  {
    number: 3,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/RHaTzAsOjqlLlIxL.jpg",
    availability: "Available Now - Click HERE",
  },
  {
    number: 4,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/VaLqQwmtWQjObqfL.png",
    availability: "Available Now - Click HERE",
  },
  {
    number: 5,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/TGAvcIkaDFNtDmLo.jpg",
    availability: "Releasing November 21st! Click HERE",
  },
  {
    number: 6,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/OoZqvVJXuzggqoFn.png",
    availability: "Available Soon! Click HERE To Get Them!",
  },
  {
    number: 7,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/YUtFXEbFlRQhACga.png",
    availability: "Available Soon! Click HERE To Get Them!",
  },
  {
    number: 8,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/ZbsEnaTfzQhBGSaf.jpg",
    availability: "Available Soon! Click HERE To Get Them!",
  },
];

export default function Comics() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h1 className="mb-6 text-6xl font-display text-foreground md:text-8xl">
            GRAPHIC NOVELS
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {graphicNovels.map((graphicNovel) => (
            <article key={graphicNovel.number}>
              <div className={`mb-4 ${graphicNovel.number >= 5 ? "lg:min-h-[72px]" : ""}`}>
                <h2 className="text-2xl font-display uppercase tracking-wide text-foreground">
                  Graphic Novel #{graphicNovel.number}
                </h2>
                <p className="font-body text-sm font-bold uppercase tracking-wider text-primary">
                  {graphicNovel.availability.split("HERE")[0]}
                  <a
                    href={graphicNovel.number <= 4 ? "https://www.caleb.top/go" : "https://www.caleb.top/pass"}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 transition-colors hover:text-foreground"
                  >
                    HERE
                  </a>
                  {graphicNovel.availability.split("HERE")[1]}
                </p>
              </div>
              <div className="group overflow-hidden border-4 border-border bg-black transition-colors duration-200 hover:border-primary">
                <img
                  src={graphicNovel.cover}
                  alt={`Graphic Novel #${graphicNovel.number} cover`}
                  className="aspect-[1000/1527] h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}
