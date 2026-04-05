/**
 * FAQ Page
 * Build: 2026-03-03
 */

import React from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "Will Black Dragon and Pink Firefly be released as individual comics or graphic novels?",
      answer: "It's written in a comic book issue structure but it will be released as graphic novels. We're treating the \"issues\" as \"chapters.\" For example, graphic novel Volume 1 will be issues 1-5, Volume 2 will be issues 6-9. Volume 3 will likely be issues 10-15, and so on. Each story arc is around 20-25 chapters, or 4-5 graphic novel volumes. We're going to keep issuing graphic novels like that, as compilations of issues. However, at some point we may offer individual issues."
    },
    {
      question: "Is this a printed comic or digital or both?",
      answer: "Digital only. This way we can offer it instantly to anyone in the world and keep the prices very low. Later we plan on offering printed versions."
    },
    {
      question: "Why not offer printed comics? A printed version would be awesome!",
      answer: "Yes, it would, but printed comics means an entire business infrastructure of printing, inventory, shipping and a bunch of other stuff that would cost money (and require higher prices). It would also mean that many people in other countries couldn't get them (or get them easily). My plan is to create a baseline of digital sales, and once this is in the bag, then move to printed versions (among other things)."
    },
    {
      question: "Is it true that you've already written out the entire story?",
      answer: "As of the date of this FAQ I have written all of the issues out to chapter #34, which is graphic novel #8. I also have the overall plot mapped out to chapter #65. So yeah, I've written a huge amount in advance. This allows for things like mysteries, foreshadowing, setups and payoffs, and all kinds of exciting twists. The entire story will go far beyond chapter #34 of course. I never get writer's block and I continue to write new issues every week."
    },
    {
      question: "How much will the graphic novels cost?",
      answer: "The cheapest in the entire independent comic book industry. For a 100-page, digital, new-release graphic novel they will probably be $7. If you purchase a bundle, they'll be even cheaper. My goal for the initial launch is not revenue, but units sold. Therefore, I've priced them as inexpensively as possible to make them an easy purchase for anyone."
    },
    {
      question: "When will the graphic novels be available?",
      answer: (<>Early May. We will publish an exact date with a countdown timer on this website very soon. <a href="https://alphamale20.kartra.com/page/smr1824" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80 transition-colors">Click here</a> to get on our preferred mailing list to get notified of dates as well as sneak peaks (pages, artwork, videos) not available anywhere else.</>) as React.ReactNode
    },
    {
      question: "Did you use AI to write the comics?",
      answer: "NO! No, no, a thousand times no. No AI was used in ANY aspect of my writing. I, and I alone, have written 100% of the entire story, world, dialogue, plot, everything. Using AI to write anything would be stupid and I will NEVER do such a thing. All A2Heroes comics will ALWAYS be 100% written by human beings, period, end of story."
    },
    {
      question: "Did you use AI to create the artwork?",
      answer: "We have a team of six human artists who create the artwork, but they use AI to speed up some of the artwork process. Artwork takes a long time and AI is used to get these graphic novels into your hands faster. (AI isn't yet at the point where it can create an entire comic book and keep all the character models and artwork consistent and high-quality. You need human artists.)"
    },
    {
      question: "If the character of Black Dragon is based on you and Pink Firefly is based on your wife, does that mean all of the other characters are based on real people?",
      answer: "Some of them, but not all. Others are based on amalgams of several different people I have known (or know). Other characters are 100% my creation. That being said, all of the characters based on real people (including BD and PF) are highly exaggerated versions of these people. So Black Dragon is a highly exaggerated version of me, not literally me. When you read the comic you'll understand."
    },
    {
      question: "How does Alpha Male 2.0 factor into all of this?",
      answer: "The character of Black Dragon is the first 100% Alpha Male 2.0 character. He's not perfect, has flaws, and makes mistakes, but he lives the fantasy version of the Alpha Male 2.0 lifestyle, all of which you'll see in the comic as the story unfolds. The \"hidden that is not hidden\" intention of Black Dragon and Pink Firefly is to introduce men to Alpha Male 2.0 lifestyle and concepts without having to read a 550 page book (The Unchained Man)."
    },
    {
      question: "The comic book is called Black Dragon and Pink Firefly yet you have a ton of characters! How does that work?",
      answer: "In writing this comic series, I have reverse-engineered the top 20 aspects of the most popular and best-selling independent comic book titles. One of the core aspects of these was an ensemble cast of characters, which I enjoy writing anyway. Black Dragon and Pink Firefly are the two main characters but many other main characters are added as the story unfolds, including allies, antagonists, lovers, neutral third parties, and question marks. I have also made sure that the story starts simply, with just BD and PF, and the new characters are introduced slowly. One complaint I've seen for new comics is that too many characters are introduced all up front, or too quickly. I don't do that here. You'll see when you start reading. The story starts simple, then gets bigger, and BIGGER."
    },
    {
      question: "You say the stories won't have any wokeism but you also say they won't have any right-wing stuff either. What do you mean by this?",
      answer: "I mean exactly what I said. These comics don't have any of the left-wing woke bullshit you see in almost all mainstream entertainment today. However, it's also not a \"right-wing\" comic book either, because that would be just as stupid. In the first six issues the story pokes fun at both sides, a lot, just to make it clear the narrative isn't on either \"side\" (like South Park, we poke fun at everyone). Then, with that foundation, it drops a lot of the satire (though not all of it) and really kicks into high gear with the big story arcs."
    },
    {
      question: "Is this comic for kids?",
      answer: "No. It's got blood, nudity, sex, violence (though no gore), complex themes, foul language, and so forth. It's for adults age 18 or over."
    },
    {
      question: "Are you going to have other comic titles besides Black Dragon and Pink Firefly?",
      answer: "That's the plan. I'd like to have people in the audience write for us and create more comics and graphic novels under the A2Heroes brand set in the same world and Black Dragon and Pink Firefly, either with their own unique character creations or making comics from side-characters in the main comic."
    },
    {
      question: "You've said that you're planning to do an animated Black Dragon and Pink Firefly TV show?",
      answer: "Animation is the logical next step, yes, but I would like to do much more than that. My goal is to make this an entire IP universe with things like collectibles, toys, movies, and so on. But that completely depends on how well we do with the comics first. If they sell well, yes, we'll do all of that stuff."
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-display mb-6 text-foreground">
          FAQ
        </h1>
        
        <div className="max-w-4xl space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border-2 border-border p-8 hover:border-primary transition-colors">
              <div className="mb-4 text-foreground" style={{fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700, fontSize: '1.15rem', textTransform: 'none', letterSpacing: '0.01em', lineHeight: '1.4'}}>
                {faq.question}
              </div>
              <p className="text-base font-body text-foreground/80 leading-relaxed">
                {faq.answer as React.ReactNode}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
