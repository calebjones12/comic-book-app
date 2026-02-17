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
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663046994448/GtRqNaGzZIrmWqaz.jpg" 
              alt="A2Heroes" 
              className="h-10 w-auto"
            />
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground font-body">
              © {new Date().getFullYear()} A2Heroes. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 font-body">
              Dark Fantasy Comedy. No Compromises.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
