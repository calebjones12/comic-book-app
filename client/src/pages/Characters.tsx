/**
 * Characters Page - Grid of all characters
 */

import { Link } from "wouter";
import { characters } from "@/data/characters";

export default function Characters() {
  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-display mb-6 text-foreground">
            CHARACTERS
          </h1>
          <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-3xl">
            A sprawling ensemble you'll actually care about—flawed, fascinating, and unforgettable. Click any character to learn more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {characters.map((character) => (
            <Link key={character.id} href={`/characters/${character.id}`}>
              <div className="group cursor-pointer relative overflow-hidden bg-card border-4 border-border hover:border-primary transition-all duration-200">
                <div className="aspect-[3/4] relative bg-white">
                  <img 
                    src={character.imageUrl} 
                    alt={character.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-2xl font-display text-foreground">{character.name.toUpperCase()}</h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
