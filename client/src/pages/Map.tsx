/**
 * Map Page - World map placeholder
 */

export default function Map() {
  return (
    <div className="min-h-screen py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-display mb-6 text-foreground">
          THE WORLD MAP
        </h1>
        <p className="text-xl md:text-2xl font-body text-muted-foreground max-w-3xl mb-12">
          Explore the vast realms where Black Dragon and Pink Firefly's adventures unfold.
        </p>
        
        <div className="bg-card border-4 border-primary p-12 text-center">
          <p className="text-3xl font-display text-muted-foreground">
            WORLD MAP COMING SOON
          </p>
          <p className="text-lg font-body text-muted-foreground mt-4">
            A detailed map of the Western Realms and beyond will be available here.
          </p>
        </div>
      </div>
    </div>
  );
}
