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

  // Split text by double line breaks to preserve paragraph structure
  const formatText = (text: string) => {
    return text.split('\n\n').map((paragraph, index) => (
      <p key={index} className="text-foreground/90 leading-relaxed mb-3 last:mb-0 text-sm">
        {paragraph.split('\n').map((line, lineIndex, array) => (
          <span key={lineIndex}>
            {line}
            {lineIndex < array.length - 1 && <br />}
          </span>
        ))}
      </p>
    ));
  };

  return (
    <div className="min-h-screen pt-12 pb-8 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Navigation */}
        <div className="flex justify-between items-center mb-4">
          <Link href={`/characters/${prevCharacter.id}`}>
            <div className="group flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <ChevronLeft size={24} className="text-primary" />
              <div>
                <div className="text-xs text-muted-foreground font-body">Previous</div>
                <div className="text-base font-display text-foreground">{prevCharacter.name.toUpperCase()}</div>
              </div>
            </div>
          </Link>

          <Link href={`/characters/${nextCharacter.id}`}>
            <div className="group flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
              <div className="text-right">
                <div className="text-xs text-muted-foreground font-body">Next</div>
                <div className="text-base font-display text-foreground">{nextCharacter.name.toUpperCase()}</div>
              </div>
              <ChevronRight size={24} className="text-primary" />
            </div>
          </Link>
        </div>

        {/* Character Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-8 mb-8">
          {/* Image - Full height, no border */}
          <div className="relative h-[calc(100vh-12rem)] lg:h-[calc(100vh-10rem)]">
            <img 
              src={character.imageUrl} 
              alt={character.name} 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Details */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-display mb-4 text-foreground leading-tight">
              {character.name.toUpperCase()}
            </h1>
            
            <div className="space-y-4 font-body">
              <div className="grid grid-cols-2 gap-3 p-4 bg-card border border-border">
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Race</div>
                  <div className="text-sm text-foreground font-medium">{character.race}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Class</div>
                  <div className="text-sm text-foreground font-medium">{character.class}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Realm of Origin</div>
                  <div className="text-sm text-foreground font-medium">{character.realm}</div>
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Age</div>
                  <div className="text-sm text-foreground font-medium">{character.age}</div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-display mb-3 text-foreground">PERSONALITY & GOALS</h2>
                <div className="space-y-3">
                  {formatText(character.personality)}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-display mb-3 text-foreground">POWERS & ABILITIES</h2>
                <div className="space-y-3">
                  {formatText(character.powers)}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}
