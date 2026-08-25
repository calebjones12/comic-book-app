/**
 * Neo-Brutalism Footer
 * Simple, bold footer with sharp styling
 */

export default function Footer() {
  return (
    <footer className="bg-card border-t-4 border-primary py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img 
              src="/images/logos/A2Heroes-002-(flat).jpg" 
              alt="A2Heroes" 
              className="h-10 w-auto"
            />
          </div>

          <div className="text-center">
            <p className="text-sm font-body text-foreground/80">
              <a
                href="https://alphamale20.kartra.com/page/smr1824"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-primary/80 transition-colors font-semibold"
              >
                Click here
              </a>{" "}
              to get on our preferred mailing list to get access to secret live streams (with me, Caleb) that no one else gets plus get notified of launch dates as well as sneak peaks (pages, artwork, videos) not available anywhere else.
            </p>
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
