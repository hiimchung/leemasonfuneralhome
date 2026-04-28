import { Check } from "lucide-react";
import aboutImage from "@/assets/about-church.jpg";

const points = [
  "Decades of trusted service to Kingston families",
  "24-hour island-wide pickup, day or night",
  "Custom caskets crafted with care",
  "Overseas arrangements coordinated end-to-end",
  "Compassionate grief counselling included",
];

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-gradient-section">
      <div className="container max-w-6xl grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src={aboutImage}
            alt="Peaceful church interior with stained glass window"
            width={1280}
            height={1280}
            loading="lazy"
            className="rounded-sm shadow-elegant w-full"
          />
          <div className="absolute -bottom-6 -right-6 bg-gradient-gold p-6 rounded-sm shadow-gold hidden sm:block max-w-[200px]">
            <div className="font-serif text-3xl text-primary leading-none">5.0</div>
            <div className="text-primary/80 text-xs mt-1 uppercase tracking-wider">Family-rated service</div>
          </div>
        </div>

        <div>
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">About Us</p>
          <h2 className="text-4xl sm:text-5xl text-primary mb-6 text-balance leading-[1.15]">
            Putting your family <em className="text-accent not-italic font-medium">first</em>, always.
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Losing a loved one is one of life's most difficult moments. At Lee Mason Funeral Home,
              we've designed every service to walk beside you — bringing relatives and friends together
              to share grief and find comfort in togetherness.
            </p>
            <p>
              Our sole purpose is to serve clients with dignity by putting the deceased's family first.
              Let us handle every necessary arrangement so you can focus on what matters most.
            </p>
          </div>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground">
                <span className="mt-1 w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                </span>
                <span className="text-sm">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
