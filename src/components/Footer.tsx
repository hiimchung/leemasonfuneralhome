const Footer = () => {
  return (
    <footer className="bg-navy-deep text-background/70 py-10 border-t border-background/5">
      <div className="container max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center">
            <span className="font-serif text-primary font-bold">L</span>
          </div>
          <div>
            <div className="font-serif text-background">Lee Mason Funeral Home</div>
            <div className="text-xs text-background/50">Serving with dignity · Kingston, Jamaica</div>
          </div>
        </div>
        <div className="text-xs text-background/50 text-center sm:text-right">
          <p className="italic font-serif text-gold/80 mb-1">"Our Sole Purpose is to Serve You With Dignity"</p>
          <p>© {new Date().getFullYear()} Lee Mason Funeral Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
