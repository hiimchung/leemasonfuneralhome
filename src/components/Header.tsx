import { Phone, Mail, MapPin } from "lucide-react";

const Header = () => {
  return (
    <header className="absolute top-0 inset-x-0 z-20">
      <div className="bg-navy-deep/80 backdrop-blur-sm border-b border-background/10">
        <div className="container max-w-6xl flex flex-wrap items-center justify-between gap-3 py-2 text-xs text-background/80">
          <div className="flex items-center gap-5 flex-wrap">
            <span className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-gold" />163 Constant Spring Rd, Kingston 8</span>
            <span className="hidden sm:flex items-center gap-1.5"><Mail className="w-3 h-3 text-gold" />leemasonfh@yahoo.com</span>
          </div>
          <a href="tel:8769416236" className="flex items-center gap-1.5 hover:text-gold transition-colors">
            <Phone className="w-3 h-3 text-gold" />876-941-6236
          </a>
        </div>
      </div>
      <nav className="container max-w-6xl flex items-center justify-between py-5">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
            <span className="font-serif text-primary font-bold text-lg">L</span>
          </div>
          <div className="leading-tight">
            <div className="font-serif text-background text-xl">Lee Mason</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-gold">Funeral Home</div>
          </div>
        </a>
        <div className="hidden md:flex items-center gap-8 text-background/90 text-sm">
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#about" className="hover:text-gold transition-colors">About</a>
          <a href="#reviews" className="hover:text-gold transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
