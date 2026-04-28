import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import candleImage from "@/assets/candle.jpg";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone").max(30),
  subject: z.string().trim().min(2, "Please enter a subject").max(150),
  message: z.string().trim().min(10, "Please share a few details").max(1000),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Message received",
        description: "Our team will reach out shortly. For urgent matters, please call 876-941-6236.",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-background">
      <div className="container max-w-6xl grid lg:grid-cols-5 gap-10">
        {/* Info side */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-sm bg-primary text-primary-foreground p-10 shadow-elegant">
          <img
            src={candleImage}
            alt=""
            width={1280}
            height={896}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-navy-deep" />

          <div className="relative">
            <p className="text-gold uppercase tracking-[0.3em] text-xs font-semibold mb-4">Reach Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4 leading-tight">
              We're here for you, day or night.
            </h2>
            <p className="text-background/75 text-sm leading-relaxed mb-10">
              For immediate assistance, please call us directly. Our 24-hour pickup
              service is available island-wide.
            </p>

            <div className="space-y-6">
              <a href="tel:8769416236" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                  <Phone className="w-4 h-4 text-gold group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-background/60 uppercase tracking-wider mb-1">Call us</div>
                  <div className="font-serif text-xl">876-941-6236</div>
                  <div className="text-xs text-background/60 mt-0.5">Fax: 876-905-3521</div>
                </div>
              </a>

              <a href="mailto:leemasonfh@yahoo.com" className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors">
                  <Mail className="w-4 h-4 text-gold group-hover:text-primary transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-background/60 uppercase tracking-wider mb-1">Email</div>
                  <div className="text-base">leemasonfh@yahoo.com</div>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-background/60 uppercase tracking-wider mb-1">Visit</div>
                  <div className="text-base">163 Constant Spring Road</div>
                  <div className="text-sm text-background/70">Kingston 8, St. Andrew</div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="text-xs text-background/60 uppercase tracking-wider mb-1">Office Hours</div>
                  <div className="text-base">Mon – Fri · 9:00am – 5:00pm</div>
                  <div className="text-xs text-gold mt-1">24-hour pickup available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form side */}
        <div className="lg:col-span-3 bg-card p-8 sm:p-10 rounded-sm border border-border shadow-soft">
          <p className="text-accent uppercase tracking-[0.3em] text-xs font-semibold mb-4">Send a Message</p>
          <h3 className="font-serif text-3xl text-primary mb-2">How can we help?</h3>
          <p className="text-muted-foreground text-sm mb-8">
            Fill out the form below and a member of our team will be in touch with care and discretion.
          </p>

          <form onSubmit={onSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">Name & Surname</Label>
                <Input id="name" name="name" required maxLength={100} className="mt-2 h-11" />
              </div>
              <div>
                <Label htmlFor="phone" className="text-xs uppercase tracking-wider text-muted-foreground">Phone Number</Label>
                <Input id="phone" name="phone" type="tel" required maxLength={30} className="mt-2 h-11" />
              </div>
            </div>
            <div>
              <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email Address</Label>
              <Input id="email" name="email" type="email" required maxLength={255} className="mt-2 h-11" />
            </div>
            <div>
              <Label htmlFor="subject" className="text-xs uppercase tracking-wider text-muted-foreground">Subject</Label>
              <Input id="subject" name="subject" required maxLength={150} className="mt-2 h-11" />
            </div>
            <div>
              <Label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">Message</Label>
              <Textarea id="message" name="message" required maxLength={1000} rows={5} className="mt-2 resize-none" />
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full sm:w-auto" disabled={submitting}>
              {submitting ? "Sending…" : (<><Send className="w-4 h-4" /> Send Message</>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
