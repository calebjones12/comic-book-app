/**
 * Graphic Novels Page - Showcase the first eight graphic novel covers
 */

import { Link } from "wouter";

type GraphicNovel = {
  number: number;
  cover: string;
  availability: string;
};

const graphicNovels: GraphicNovel[] = [
  {
    number: 1,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/HMGMEbzTvbkjFQxY.png",
    availability: "Available Now - Click Here",
  },
  {
    number: 2,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/zwlVzLEWBDdyUFrl.png",
    availability: "Available Now - Click Here",
  },
  {
    number: 3,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/RHaTzAsOjqlLlIxL.jpg",
    availability: "Available Now - Click Here",
  },
  {
    number: 4,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/VaLqQwmtWQjObqfL.png",
    availability: "Available Now - Click Here",
  },
  {
    number: 5,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/TGAvcIkaDFNtDmLo.jpg",
    availability: "Available November!",
  },
  {
    number: 6,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/OoZqvVJXuzggqoFn.png",
    availability: "Available Soon If We Hit 1500 Buyers During Launch",
  },
  {
    number: 7,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/YUtFXEbFlRQhACga.png",
    availability: "Available Soon If We Hit 1500 Buyers During Launch",
  },
  {
    number: 8,
    cover: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/ZbsEnaTfzQhBGSaf.jpg",
    availability: "Available Soon If We Hit 1500 Buyers During Launch",
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
          <p className="max-w-3xl text-xl font-body text-muted-foreground md:text-2xl">
            Graphic novels #1 through #4 will be available on our launch date of October 22. To see the status of each graphic novel, click{" "}
            <Link href="/status">
              <span className="font-bold text-primary underline underline-offset-4 transition-colors hover:text-foreground">
                here
              </span>
            </Link>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {graphicNovels.map((graphicNovel) => (
            <article key={graphicNovel.number}>
              <div className="mb-4 lg:min-h-[56px]">
                <h2 className="text-2xl font-display uppercase tracking-wide text-foreground">
                  Graphic Novel #{graphicNovel.number}
                </h2>
                <p className="font-body text-sm font-bold uppercase tracking-wider text-primary">
                  {graphicNovel.number <= 4 ? (
                    <>
                      AVAILABLE NOW - CLICK{" "}
                      <a
                        href="https://www.caleb.top/go"
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 transition-colors hover:text-foreground"
                      >
                        HERE
                      </a>
                    </>
                  ) : (
                    graphicNovel.availability
                  )}
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
