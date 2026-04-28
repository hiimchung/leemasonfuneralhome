import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-flowers.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Soft white lilies in dignified arrangement"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="relative z-10 container max-w-4xl text-center px-6 fade-in-up">
        <p className="text-gold uppercase tracking-[0.3em] text-xs sm:text-sm mb-6 font-medium">
          Lee Mason Funeral Home · Since serving Kingston with care
        </p>
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-background leading-[1.1] mb-6 text-balance">
          Honouring Lives.<br />
          <span className="italic text-gold-soft">Comforting Families.</span>
        </h1>
        <p className="text-base sm:text-lg text-background/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          In your moment of loss, allow us to carry the weight. Our sole purpose is to serve
          you with dignity by putting your family first — every step of the way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" variant="gold">
            <a href="tel:8769416236" className="gap-2">
              <Phone className="w-4 h-4" />
              Call 876-941-6236
            </a>
          </Button>
          <Button asChild size="lg" variant="outlineLight">
            <a href="#contact">Request Assistance</a>
          </Button>
        </div>

        <p className="mt-10 text-background/70 text-sm">
          <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse mr-2 align-middle" />
          24-Hour Island-Wide Pickup Service Available
        </p>
      </div>
    </section>
  );
};

export default Hero;
