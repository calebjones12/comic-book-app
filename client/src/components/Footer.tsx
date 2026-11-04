/**
 * Neo-Brutalism Footer
 * Simple, bold footer with sharp styling
 */

export default function Footer() {
  return (
    <footer className="bg-card border-t-4 border-primary py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 shrink-0">
            <img
              src="/images/logos/A2Heroes_Logo_Transparent_v2.webp"
              alt="A2Heroes"
              className="h-12 w-auto flex-shrink-0"
            />
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground font-body">
              © {new Date().getFullYear()} A2Heroes. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-body">
              Dark Fantasy Comedy. No Compromises.
            </p>
            <p className="text-sm mt-2 font-body">
              <a
                href="/commitment"
                className="text-primary underline hover:text-primary/80 transition-colors font-semibold"
              >
                Our Commitments To You
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
