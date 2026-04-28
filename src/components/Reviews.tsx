import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "D. Suz Bolton",
    date: "June 2017",
    text: "They were exceptional in handling my mother's home going services.",
  },
  {
    name: "C. Bisasor",
    date: "October 2016",
    text: "I was really impressed with the professionalism every step of the way. I have recommended using Lee Mason to friends.",
  },
  {
    name: "Devon Moore",
    date: "June 2016",
    text: "Service at its very best. I was so impressed with the way your staff operated from the time of pickup until the funeral. Thank you so very much.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 lg:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--gold)) 0%, transparent 50%)',
      }} />

      <div className="container max-w-6xl relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Family Testimonials</p>
          <h2 className="text-4xl sm:text-5xl mb-4 text-balance">
            Words from families we've served
          </h2>
          <p className="text-background/70 max-w-xl mx-auto">
            Trusted by Kingston families to honour their loved ones with grace and dignity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative bg-background/5 backdrop-blur-sm border border-background/10 p-8 rounded-sm hover:bg-background/10 transition-colors"
            >
              <Quote className="w-8 h-8 text-gold/50 mb-4" />
              <p className="text-background/90 leading-relaxed mb-6 font-serif text-lg italic">
                "{r.text}"
              </p>
              <div className="pt-5 border-t border-background/10">
                <div className="font-medium text-background">{r.name}</div>
                <div className="text-xs text-background/60 mt-0.5">{r.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
