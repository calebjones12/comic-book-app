/**
 * Neo-Brutalism Home Page
 * Bold asymmetric hero with diagonal slashes and aggressive styling
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center diagonal-slash bg-card"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.85)), url('https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/dMlhXJhLbLFhEXhH.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/KsAwurNsrlxgutKy.png" 
                alt="Black Dragon and Pink Firefly" 
                className="w-full max-w-2xl"
              />
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display mb-6 text-foreground leading-none">
              DARK FANTASY<br/>COMEDY
            </h1>
            
            <div className="space-y-4 text-lg md:text-xl font-body text-foreground/90 mb-8 max-w-2xl">
              <p>
                Sex. Violence. Wit sharp enough to draw blood. Intricate plots that reward your attention with payoffs you won't see coming.
              </p>
              <p>
                A sprawling ensemble of characters you'll actually care about—flawed, fascinating, and unforgettable. Multi-layered story arcs already written from beginning to end, so every twist has been earned and every thread leads somewhere that matters.
              </p>
              <p className="text-primary font-semibold">
                No wokeism. No girl bosses. No left-wing bullshit. No right-wing bullshit. No socialism, no feminism, no Christianity, no lecturing.
              </p>
              <p>
                Just the ruthless commitment to character, story, and world-building that great fantasy demands.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/comics">
                <div className="bg-primary text-primary-foreground px-8 py-4 font-display text-2xl uppercase tracking-wider hover:bg-accent hover:text-accent-foreground transition-all duration-200 cursor-pointer flex items-center gap-3 group">
                  Explore Comics
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
              
              <Link href="/characters">
                <div className="border-4 border-foreground text-foreground px-8 py-4 font-display text-2xl uppercase tracking-wider hover:bg-foreground hover:text-background transition-all duration-200 cursor-pointer">
                  Meet Characters
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Announcement Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-display mb-8 text-foreground">
            MARCH. THE WAIT ENDS.
          </h2>
          <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-3xl mx-auto">
            Official announcement with countdown clock dropping soon. This is going to be legendary.
          </p>
        </div>
      </section>

      {/* Featured Characters */}
      <section className="py-24 bg-card diagonal-slash-reverse">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-display mb-16 text-foreground">
            THE HEROES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/characters/black-dragon">
              <div className="group cursor-pointer relative overflow-hidden bg-background border-4 border-primary hover:border-accent transition-all duration-200">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/VMoaBgCrGpZwVdJY.png" 
                    alt="Black Dragon" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-4xl font-display text-foreground mb-2">BLACK DRAGON</h3>
                    <p className="text-muted-foreground font-body">Sarcastic Mercenary Warrior</p>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link href="/characters/pink-firefly">
              <div className="group cursor-pointer relative overflow-hidden bg-background border-4 border-accent hover:border-primary transition-all duration-200">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/qmytGdNeZtgHktdy.jfif" 
                    alt="Pink Firefly" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-4xl font-display text-foreground mb-2">PINK FIREFLY</h3>
                    <p className="text-muted-foreground font-body">Kind-Hearted Fairy Princess</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="text-center mt-12">
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
              THIS IS THE BIGGEST,<br/>MOST AMBITIOUS PROJECT
            </h2>
            <p className="text-xl md:text-2xl font-body text-center text-muted-foreground leading-relaxed">
              I've poured my soul into for over ten years. This is dark fantasy comedy in its purest form—raw, irreverent, and unapologetically entertaining. The kind of storytelling that made the '80s unforgettable: bold choices, real stakes, and zero sacred cows.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
