import {
  Flower2, Church, Flame, Plane, Heart, Gem,
  ScrollText, Music2, Globe2, CalendarClock, Sparkles, Cross,
} from "lucide-react";

const services = [
  { icon: Cross, title: "Custom & Wooden Caskets", desc: "Handcrafted caskets honouring your loved one's memory." },
  { icon: Gem, title: "Urns & Memorials", desc: "Elegant urns, headstones and grave markers." },
  { icon: Flower2, title: "Floral Arrangements", desc: "Beautiful wreaths and bespoke floral tributes." },
  { icon: Church, title: "Church Service", desc: "Coordinated, reverent services that comfort and uplift." },
  { icon: Flame, title: "Cremation", desc: "Respectful, professional cremation services." },
  { icon: Sparkles, title: "Embalming", desc: "Skilled preparation with the utmost care and dignity." },
  { icon: Plane, title: "Overseas Arrangements", desc: "Coordinating international transport and ceremonies." },
  { icon: Music2, title: "Marching Bands", desc: "Traditional Jamaican processional bands available." },
  { icon: Heart, title: "Grief Counselling", desc: "Compassionate support for you and your family." },
  { icon: CalendarClock, title: "Pre-Need Planning", desc: "Plan ahead with confidence and peace of mind." },
  { icon: Globe2, title: "Airport Pickup", desc: "Discreet, dignified airport transfer services." },
  { icon: ScrollText, title: "Hearse Service", desc: "Professional hearse and procession arrangements." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">Our Services</p>
          <h2 className="text-4xl sm:text-5xl text-primary mb-5 text-balance">
            Complete care, every step of the way
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From the first call to the final farewell, we handle every detail so your family
            can focus on remembering, honouring, and healing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-lg overflow-hidden shadow-soft">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-secondary group-hover:bg-gradient-gold flex items-center justify-center mb-5 transition-all duration-500">
                <s.icon className="w-5 h-5 text-accent group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-serif text-xl text-primary mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
