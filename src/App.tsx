import {
  ArrowRight,
  Bath,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Droplets,
  Facebook,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Waves,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { Label } from "./components/ui/Label";
import { Select } from "./components/ui/Select";
import { Textarea } from "./components/ui/Textarea";
import { facebookConnection } from "./data/hydroshine";

const heroHighlights = [
  "Fast mobile booking",
  "Doorstep service",
  "Premium finish",
  "Warm, local support",
];

const features = [
  {
    icon: Truck,
    title: "We come to you",
    text: "Self-sufficient setup with water and power so the clean happens at your location.",
  },
  {
    icon: Clock3,
    title: "Paspas promise",
    text: "A quick, efficient standard wash without the waiting-room drag.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable finish",
    text: "Consistent process, crisp results, and easy rebooking for repeat customers.",
  },
  {
    icon: Droplets,
    title: "Hydro-smart wash",
    text: "A water-conscious workflow built for clean results and less mess.",
  },
];

const packages = [
  {
    name: "Regular Wash",
    price: "From ₱350",
    description: "A quick exterior clean for day-to-day upkeep.",
    bullets: ["Exterior rinse and foam", "Wheels and tires refreshed", "Windows wiped clean"],
  },
  {
    name: "Premium Wash",
    price: "From ₱650",
    description: "A deeper shine for drivers who want a more polished look.",
    bullets: ["Enhanced wash process", "Door jamb and detail touch-up", "Interior spot clean"],
  },
];

const serviceRows = [
  ["Sedan", "From ₱350", "From ₱650"],
  ["SUV / Pickup", "From ₱450", "From ₱800"],
  ["Van / Fleet", "From ₱550", "From ₱950"],
];

const addOns = [
  {
    icon: Bath,
    title: "Interior reset",
    text: "Cabin vacuum, wipe-down, and quick refresh for busy vehicles.",
  },
  {
    icon: Sparkles,
    title: "Add-on shine",
    text: "Boost the finish with extra attention where it matters most.",
  },
  {
    icon: Waves,
    title: "Detail extras",
    text: "Headlights, trim, and smaller problem areas handled on request.",
  },
];

const testimonials = [
  {
    name: "A. Carter",
    role: "Busy parent",
    quote:
      "I booked through Messenger, they showed up on time, and the car looked like it had a fresh reset.",
  },
  {
    name: "M. Nguyen",
    role: "Small business owner",
    quote:
      "The process was simple, fast, and way easier than taking the truck somewhere after work.",
  },
  {
    name: "J. Miller",
    role: "Repeat client",
    quote:
      "The finish was clean and consistent. I rebooked before they even left the driveway.",
  },
];

type LeadFormState = {
  name: string;
  phone: string;
  vehicle: string;
  service: string;
  location: string;
  notes: string;
};

const initialLead: LeadFormState = {
  name: "",
  phone: "",
  vehicle: "",
  service: "Regular Wash",
  location: "",
  notes: "",
};

export function App() {
  const [lead, setLead] = useState<LeadFormState>(initialLead);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative overflow-hidden bg-[#f4fbfd] text-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_32%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.92),rgba(244,251,253,1))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[repeating-linear-gradient(120deg,rgba(125,211,252,0.28)_0,rgba(125,211,252,0.28)_1px,transparent_1px,transparent_18px)] opacity-60" />

      <header className="sticky top-0 z-30 border-b border-sky-100/80 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-hydro-blue text-white shadow-soft">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hydro-teal">
                HydroShine
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Mobile wash and detailing
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-slate-950">
              Services
            </a>
            <a href="#proof" className="transition hover:text-slate-950">
              Results
            </a>
            <a href="#book" className="transition hover:text-slate-950">
              Book Now
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={facebookConnection.messengerUrl}
              className="hidden rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-hydro-blue hover:text-hydro-blue sm:inline-flex"
            >
              Messenger
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-hydro-blue px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-hydro-deep"
            >
              Book now
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-20 lg:pt-14">
          <div className="relative z-10">
            <Badge className="w-fit border border-sky-200 bg-white/85 text-hydro-deep">
              Clean → Shine → Convenience
            </Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              HydroShine brings a premium showroom shine to your doorstep.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              The fast mobile wash and detailing service for busy car owners who want
              a cleaner vehicle without losing their day.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={facebookConnection.messengerUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-hydro-yellow px-6 py-3 text-sm font-bold text-slate-950 shadow-sm transition hover:bg-yellow-300"
              >
                <MessageCircle className="h-4 w-4" />
                Start in Messenger
              </a>
              <a
                href="#book"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-sky-200 bg-white px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:border-hydro-blue hover:text-hydro-blue"
              >
                Get a quote
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/75 px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-hydro-teal" />
                  <span className="text-sm font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-hydro-blue" />
                Mobile service
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 className="h-4 w-4 text-hydro-blue" />
                Fast booking response
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-hydro-blue" />
                Reliable finish
              </span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute -left-6 top-12 hidden h-20 w-20 rounded-full bg-hydro-yellow/30 blur-2xl lg:block" />
            <div className="absolute -right-6 bottom-4 hidden h-24 w-24 rounded-full bg-sky-300/30 blur-2xl lg:block" />
            <Card className="relative overflow-hidden border-sky-100 bg-white/90 p-3 shadow-[0_20px_70px_rgba(14,165,233,0.16)]">
              <img
                src="/brand/hydroshine-hero.png"
                alt="HydroShine mobile detailing illustration"
                className="aspect-[4/3] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute left-6 top-6 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hydro-teal">
                  100% self-sufficient setup
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  We bring water and power to your location.
                </p>
              </div>
              <div className="absolute bottom-6 right-6 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hydro-teal">
                  Doorstep convenience
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Clean while you keep your day moving.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <div className="grid gap-4 md:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-sky-100 bg-white/90 p-5 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hydro-mist text-hydro-blue">
                <feature.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-slate-950">{feature.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{feature.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-3xl">
          <Badge className="bg-white/90 text-hydro-deep">Service menu</Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Clear packages. Clear pricing. Easy to book.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Keep the offer simple. HydrShine works best when customers can see the
            difference quickly and understand the next step immediately.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {packages.map((pack) => (
              <Card
                key={pack.name}
                className="border-sky-100 bg-white/95 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-950">{pack.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {pack.description}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-hydro-mist px-4 py-3 text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hydro-teal">
                      Starting at
                    </p>
                    <p className="text-xl font-black text-slate-950">{pack.price}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm text-slate-700">
                  {pack.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-hydro-teal" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <Card className="overflow-hidden border-sky-100 bg-white/95 shadow-sm">
            <div className="border-b border-sky-100 px-6 py-5">
              <h3 className="text-2xl font-black text-slate-950">Vehicle pricing</h3>
              <p className="mt-1 text-sm text-slate-600">
                Keep the table visible so customers can self-qualify fast.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] text-left">
                <thead className="bg-sky-50 text-sm text-slate-700">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Vehicle</th>
                    <th className="px-6 py-4 font-semibold">Regular</th>
                    <th className="px-6 py-4 font-semibold">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sky-100 text-sm">
                  {serviceRows.map(([vehicle, regular, premium]) => (
                    <tr key={vehicle} className="bg-white">
                      <td className="px-6 py-4 font-semibold text-slate-900">{vehicle}</td>
                      <td className="px-6 py-4 text-hydro-deep">{regular}</td>
                      <td className="px-6 py-4 text-hydro-teal">{premium}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-sky-100 px-6 py-5">
              <p className="text-sm text-slate-600">
                Need more? Ask about add-ons when you message us.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {addOns.map((addOn) => (
            <Card key={addOn.title} className="border-sky-100 bg-white/95 p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hydro-mist text-hydro-blue">
                <addOn.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-950">{addOn.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{addOn.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="proof" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <Card className="border-sky-100 bg-white/95 p-6 shadow-sm">
            <Badge className="bg-white/90 text-hydro-deep">Why it converts</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              The page answers the three questions that matter: what, why, and how fast.
            </h2>
            <div className="mt-6 space-y-4">
              {[
                ["What", "Premium mobile wash and detailing at your address."],
                ["Why", "Cleaner car, less time wasted, less friction to book."],
                ["How fast", "Messenger or short form. No deep navigation."],
              ].map(([label, text]) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl bg-sky-50 px-4 py-4">
                  <div className="mt-0.5 h-8 min-w-8 rounded-full bg-hydro-blue text-center text-sm font-black leading-8 text-white">
                    {label.slice(0, 1)}
                  </div>
                  <div>
                    <p className="font-bold text-slate-950">{label}</p>
                    <p className="mt-1 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name} className="border-sky-100 bg-white/95 p-5 shadow-sm">
                <div className="flex items-center gap-1 text-hydro-yellow">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-700">"{item.quote}"</p>
                <div className="mt-5">
                  <p className="font-bold text-slate-950">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    {item.role}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <Badge className="bg-white/90 text-hydro-deep">Book now</Badge>
            <h2 className="mt-4 max-w-2xl text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Get a quick quote and lock in a clean at your doorstep.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
              HydroShine is built for easy decisions: a clear offer, a clear process,
              and a fast way to start the conversation.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <ContactCard
                icon={MessageCircle}
                title="Messenger first"
                text="Best for fast replies and simple booking questions."
                cta="Open Messenger"
                href={facebookConnection.messengerUrl}
              />
              <ContactCard
                icon={Phone}
                title="Call or text"
                text="For direct scheduling when you already know what you need."
                cta="Tap to call"
                href="tel:+15551234567"
              />
            </div>
          </div>

          <Card className="border-sky-100 bg-white/96 p-6 shadow-[0_20px_60px_rgba(14,165,233,0.12)]">
            {submitted ? (
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
                <CheckCircle2 className="h-10 w-10 text-emerald-600" />
                <h3 className="mt-4 text-2xl font-black text-slate-950">
                  Request received.
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-700">
                  We’ll review the details and follow up with the next available slot.
                </p>
                <a
                  href={facebookConnection.messengerUrl}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-700"
                >
                  Continue in Messenger
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name">
                    <Input
                      value={lead.name}
                      onChange={(event) => setLead({ ...lead, name: event.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </Field>
                  <Field label="Phone">
                    <Input
                      value={lead.phone}
                      onChange={(event) => setLead({ ...lead, phone: event.target.value })}
                      placeholder="(555) 123-4567"
                      required
                    />
                  </Field>
                </div>

                <Field label="Vehicle">
                  <Input
                    value={lead.vehicle}
                    onChange={(event) =>
                      setLead({ ...lead, vehicle: event.target.value })
                    }
                    placeholder="Sedan, SUV, pickup, van..."
                    required
                  />
                </Field>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Service">
                    <Select
                      value={lead.service}
                      onChange={(event) =>
                        setLead({ ...lead, service: event.target.value })
                      }
                    >
                      {packages.map((pack) => (
                        <option key={pack.name}>{pack.name}</option>
                      ))}
                      <option>Interior Reset</option>
                    </Select>
                  </Field>
                  <Field label="Location">
                    <Input
                      value={lead.location}
                      onChange={(event) =>
                        setLead({ ...lead, location: event.target.value })
                      }
                      placeholder="Neighborhood or address"
                      required
                    />
                  </Field>
                </div>

                <Field label="Notes">
                  <Textarea
                    value={lead.notes}
                    onChange={(event) => setLead({ ...lead, notes: event.target.value })}
                    placeholder="Anything we should know before we quote?"
                  />
                </Field>

                <Button type="submit" className="w-full rounded-full py-6 text-base">
                  Get a quote
                  <ChevronRight className="h-4 w-4" />
                </Button>

                <p className="text-center text-xs leading-6 text-slate-500">
                  Or message us directly if you want the fastest reply.
                </p>
              </form>
            )}
          </Card>
        </div>
      </section>

      <footer className="border-t border-sky-100 bg-white/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p className="font-semibold text-slate-800">HydroShine — Clean, Shine, Convenience.</p>
          <div className="flex flex-wrap gap-4">
            <a href="/privacy-policy.html" className="transition hover:text-hydro-blue">
              Privacy policy
            </a>
            <a href="/terms-of-service.html" className="transition hover:text-hydro-blue">
              Terms of service
            </a>
            <a href="/data-deletion.html" className="transition hover:text-hydro-blue">
              Data deletion
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  text,
  cta,
  href,
}: {
  icon: typeof MessageCircle;
  title: string;
  text: string;
  cta: string;
  href: string;
}) {
  return (
    <Card className="border-sky-100 bg-white/95 p-5 shadow-sm">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-hydro-mist text-hydro-blue">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
      <a
        href={href}
        className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-hydro-blue transition hover:text-hydro-deep"
      >
        {cta}
        <ChevronRight className="h-4 w-4" />
      </a>
    </Card>
  );
}
