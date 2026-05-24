// Design: Dark fantasy theme — dark header, white body background, red accent headings, premium serif typography
// Body text uses dark color (#1a1a1a) since the commitments list sits on the white/light site background

export default function Commitment() {
  const commitments = [
    {
      title: "Canon Is Sacrosanct",
      body: "Once a graphic novel is published, the story is canon. The past will never be changed or erased later via retcons, time travel, multiverses, and so on.",
    },
    {
      title: "Commitment To A Male Audience",
      body: "These stories, this world, and these characters are 100% written for men. Any complaints or negative comments from women regarding anything related to these stories (and we're going to get them!) will be ignored. Women, we love ya, but you're not in our target audience, so we don't care what you want; there's plenty of pop culture for you. Go over there. This is for guys.",
    },
    {
      title: "Death Is Permanent",
      body: "When a character dies, they are dead forever. Resurrection magic does not exist in the A2Heroes universe. Since these are fantasy stories, we are allowed to show dead characters in things like visions, flashbacks, undead, etc (though even that stuff will be at a bare minimum), but never the character actually returning to life.",
    },
    {
      title: "Customer Is Paramount Over All Other Factors",
      body: "You, the customer, are always more important to us than politics, current modern-day culture, political correctness, investors, or formats. Our only mission is to make you happy with these stories. Everything else comes second.",
    },
    {
      title: "No Left Wing Wokeism or Political Correctness",
      body: "Modern-day culture is completely soaked with wokeism and left-wing values. These take you out of the story and make things confusing. There is absolutely none of that in these stories, and there never will be.",
    },
    {
      title: "Absolutely No Right Wing or Religious Preaching",
      body: "Just like there is no left-wing preaching, there is no right-wing preaching either. To be fair, I am a minarchist libertarian, and one of the characters is loosely based on me, so I can't promise that every once in a while a little libertarian-ish stuff might slip out of his mouth, but no one in these stories will preach politics to you, ever. We're here to entertain, not lecture.",
    },
    {
      title: "No Mary Sue / Girlboss Characters",
      body: "We had strong female characters in the 1980s, and they were awesome. Princess Leia, Sarah Connor, Ripley, Marion from Raiders, and so forth. There are some strong female characters in these stories. However, there will never be any Mary Sue/girlboss characters who are amazing at everything, go through no real character growth, and/or denigrate men.",
    },
    {
      title: "Everything Makes Sense",
      body: "Modern-day genre fiction (fantasy, sci-fi, horror) is rife with characters, plots, and/or settings that make no sense, even within the worlds they present. This is the result of serving political agendas or corporate checklists rather than a priority of telling rich, consistent stories. Every story, setting, and character in the A2Heroes universe makes sense within this world.",
    },
    {
      title: "Sex and Violence",
      body: "In terms of pop culture, Americans tend to be squeamish about seeing sex and nudity, and Europeans tend to be squeamish about seeing bloody violence. These stories have a lot of both, and they both intensify as the story progresses. If seeing sex or violence in a comic book bothers or offends you, this isn't for you.",
    },
    {
      title: "Non-Monogamy",
      body: "These stories prominently feature several male characters who are dating and/or married to and/or having sex with multiple women, and it is presented as a good thing for everyone involved. If that bothers or offends you, this isn't for you.",
    },
    {
      title: "No AI Pledge",
      body: "This world, these stories, the dialogue, the characters, and every other aspect is 100% written by human beings and always will be. No AI will ever be used in the writing of these stories. (Some AI is used in the artwork; please refer to the FAQ for more details.)",
    },
    {
      title: "No Investors",
      body: "A2Heroes will always be independently owned and we will never take on any investors. This maintains quality and the commitment to the customer.",
    },
    {
      title: "We Will Make Mistakes",
      body: "We will do our absolute best to provide you with high-quality stories, the likes of which you have never seen before. But we're going to make mistakes from time to time. These are graphic novels with hundreds of pages and thousands of panels of artwork. We have a quality assurance process that we follow rigorously, but some errors are unavoidable. Since you, the customer, are our priority, we will work with you and respect you as long as you don't freak out when mistakes are made. We will always correct mistakes whenever they are found.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Page header */}
      <div className="bg-[#0a0a0a] border-b border-white/10 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            className="font-display text-5xl md:text-6xl font-black uppercase tracking-tight text-white mb-6"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            Commitments To You
          </h1>
          <p
            className="text-lg text-white/70 leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            This is our code, our commitments to you, the customer.
          </p>
        </div>
      </div>

      {/* Commitments list */}
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
        {commitments.map((item, index) => (
          <div key={index} className="border-l-4 border-red-600 pl-6">
            <h2
              className="text-red-600 text-2xl font-bold uppercase tracking-wide mb-3"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              {item.title}
            </h2>
            <p
              className="text-foreground text-base md:text-lg leading-relaxed"
              style={{ fontFamily: "'Lora', serif" }}
            >
              {item.body}
            </p>
          </div>
        ))}
      </div>

      {/* Mailing List Box — bottom of page */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <div className="border-2 border-red-600 bg-card px-8 py-6">
          <p className="text-base text-foreground/80 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            <a
              href="https://alphamale20.kartra.com/page/smr1824"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 underline hover:text-red-500 transition-colors font-semibold"
            >
              Click here
            </a>{" "}
            to get on our preferred mailing list to get access to secret live streams (with me, Caleb) that no one else gets plus get notified of launch dates as well as sneak peaks (pages, artwork, videos) not available anywhere else.
          </p>
        </div>
      </div>
    </div>
  );
}
