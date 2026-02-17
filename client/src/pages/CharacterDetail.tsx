/**
 * Character Detail Page - Individual character with navigation
 */

import { useRoute, Link } from "wouter";
import { characters } from "@/data/characters";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CharacterDetail() {
  const [, params] = useRoute("/characters/:id");
  const characterId = params?.id;
  
  const currentIndex = characters.findIndex(c => c.id === characterId);
  const character = characters[currentIndex];
  
  if (!character) {
    return (
      <div className="min-h-screen py-24 bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-display text-foreground mb-4">CHARACTER NOT FOUND</h1>
          <Link href="/characters">
            <div className="inline-block bg-primary text-primary-foreground px-6 py-3 font-display text-xl uppercase cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
              Back to Characters
            </div>
          </Link>
        </div>
      </div>
    );
  }
  
  const prevCharacter = currentIndex > 0 ? characters[currentIndex - 1] : characters[characters.length - 1];
  const nextCharacter = currentIndex < characters.length - 1 ? characters[currentIndex + 1] : characters[0];

  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back Button */}
        <Link href="/characters">
          <div className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground font-body mb-8 cursor-pointer transition-colors">
            <ChevronLeft size={20} />
            Back to All Characters
          </div>
        </Link>

        {/* Character Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Image */}
          <div className="relative">
            <div className="sticky top-28">
              <div className="border-4 border-primary overflow-hidden">
                <img 
                  src={character.imageUrl} 
                  alt={character.name} 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-5xl md:text-7xl font-display mb-6 text-foreground">
              {character.name.toUpperCase()}
            </h1>
            
            <div className="space-y-6 font-body">
              <div className="grid grid-cols-2 gap-4 p-6 bg-card border-2 border-border">
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Race</div>
                  <div className="text-lg text-foreground">{character.race}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Class</div>
                  <div className="text-lg text-foreground">{character.class}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Realm of Origin</div>
                  <div className="text-lg text-foreground">{character.realm}</div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display mb-4 text-foreground">PERSONALITY & GOALS</h2>
                <p className="text-foreground/90 leading-relaxed">{character.personality}</p>
              </div>

              <div>
                <h2 className="text-3xl font-display mb-4 text-foreground">POWERS & ABILITIES</h2>
                <p className="text-foreground/90 leading-relaxed">{character.powers}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-12 border-t-4 border-border">
          <Link href={`/characters/${prevCharacter.id}`}>
            <div className="group flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
              <ChevronLeft size={32} className="text-primary" />
              <div>
                <div className="text-sm text-muted-foreground font-body">Previous</div>
                <div className="text-2xl font-display text-foreground">{prevCharacter.name.toUpperCase()}</div>
              </div>
            </div>
          </Link>

          <Link href={`/characters/${nextCharacter.id}`}>
            <div className="group flex items-center gap-4 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="text-right">
                <div className="text-sm text-muted-foreground font-body">Next</div>
                <div className="text-2xl font-display text-foreground">{nextCharacter.name.toUpperCase()}</div>
              </div>
              <ChevronRight size={32} className="text-primary" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
