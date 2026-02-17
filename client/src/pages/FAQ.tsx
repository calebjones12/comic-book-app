/**
 * FAQ Page
 */

export default function FAQ() {
  const faqs = [
    {
      question: "Will Black Dragon and Pink Firefly be released as individual comics or graphic novels?",
      answer: "It's written in a comic book issue structure but initially it will be released as graphic novels. For example, graphic novel Volume 1 will be issues 1-5, Volume 2 will be issues 6-9. Volume 3 will be issues 10-15, and so on. Each story arc is around 20-25 issues, or 4-5 graphic novel volumes. We're going to keep issuing graphic novels like that, as compilations of issues. However, at some point we will be offering individual issues."
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
      answer: "As of the date of this FAQ I have written all of the issues out to issue #31, which is about halfway into story arc two. I also have the overall plot mapped out to the end of story arc three, meaning about 65 issues. So yeah, I've written a huge amount in advance. This allows for things like mysteries, foreshadowing, setups and payoffs, and all kinds of exciting twists. The entire story will go far beyond issue #31 of course. I continue to write new issues every week."
    },
    {
      question: "Did you use AI to write the comics?",
      answer: "NO! No, no, a thousand times no. No AI was used in ANY aspect of my writing. I, and I alone, have written 100% of the entire story, world, dialogue, plot, everything. Using AI to write anything would be stupid and I will NEVER do such a thing."
    },
    {
      question: "Did you use AI to create the artwork?",
      answer: "Partially. AI creates the baseline artwork to very strict end tested specifications, then a team of artists edits and adjusts the artwork to match the scripts I have written. So it's not an \"AI comic book\" at all; AI is only involved as one of the tools we use."
    },
    {
      question: "If the character of Black Dragon is based on you and Pink Firefly is based on your wife, does that mean all of the other characters are based on real people?",
      answer: "Many of them are, yes. Others are based on amalgams of several different people I have known (or know). Other characters are 100% my creation. That being said, all of the characters based on real people (including BD and PF) are highly exaggerated versions of these people. So Black Dragon is a highly exaggerated version of me, not literally me. When you read the comic you'll understand."
    },
    {
      question: "How does Alpha Male 2.0 factor into all of this?",
      answer: "The character of Black Dragon is the first 100% Alpha Male 2.0 character. He's not perfect, has flaws, and makes mistakes, but he lives the fantasy version of the Alpha Male 2.0 lifestyle, all of which you'll see in the comic as the story unfolds. The \"hidden that is not hidden\" intention of Black Dragon and Pink Firefly is to be introduced to Alpha Male 2.0 lifestyle and concepts without having to read a 550 page book (The Unchained Man)."
    },
    {
      question: "The comic book is called Black Dragon and Pink Firefly yet you have a ton of characters! How does that work?",
      answer: "In writing this comic series, I have reverse-engineered the top 20 aspects of the most popular and best-selling independent comic book titles. One of the core aspects of these was an ensemble cast of characters, which I enjoy writing anyway. Black Dragon and Pink Firefly are the two main characters but many other main characters are added as the story unfolds, including allies, antagonists, lovers, neutral third parties, and question marks. I have also made sure that the story starts simply, with just BD and PF, and the new characters are introduced slowly. One complaint I've seen for new comics is that too many characters are introduced all up front, or two quickly. I don't do that here. You'll see when you start reading. The story stars simple, then gets bigger, and bigger."
    },
    {
      question: "You say the stories won't have any wokeism but you also say they won't have any right-wing stuff either. What do you mean by this?",
      answer: "I mean exactly what I said. These comics don't have any of the left-wing woke bullshit you see in almost all mainstream entertainment today. However, it's also not a \"right-wing\" comic book either, because that would be just as stupid. In the first six issues the story pokes fun at both sides, a lot, just to make it clear the narrative isn't on either \"side\" (sort of like South Park). Then, with that foundation, it drops a lot of the satire (though not all of it) and really kicks into high gear with the big story arcs."
    },
    {
      question: "Is this comic for kids?",
      answer: "No. It's got blood, nudity, sex, violence (though no gore), complex themes, foul language, and so forth. It's for adults age 18 or over."
    },
    {
      question: "Are you going to have other comic titles besides Black Dragon and Pink Firefly?",
      answer: "That's the plan. Soon, I'd like to have other writers create more comics and graphic novels under the A2Heroes brand set in the same world and Black Dragon and Pink Firefly, either with their own unique character creations or making comics from side-characters in the main comic."
    },
    {
      question: "You've said that you're planning to do an animated Black Dragon and Pink Firefly TV show?",
      answer: "Animation is the logical next step, yes, but I would like to do much more than that. My goal is to make this an entire IP universe with things like collectibles, toys, movies, and so on. But that completely depends on how well we do with the comics first. If they sell well, we'll do all of that stuff."
    }
  ];

  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-display mb-6 text-foreground">
          FAQ
        </h1>
        <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-3xl mb-16">
          Everything you need to know about Black Dragon and Pink Firefly.
        </p>
        
        <div className="max-w-4xl space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border-2 border-border p-8 hover:border-primary transition-colors">
              <h2 className="text-2xl font-display mb-4 text-foreground">
                {faq.question}
              </h2>
              <p className="text-lg font-body text-foreground/90 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
