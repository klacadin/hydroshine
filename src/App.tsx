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
import brandBubble from "./assets/brand/openart-image_Ca_j6hZ5_1773434579828_raw.jpg";
import brandMascot from "./assets/brand/openart-image_gExtOg1N_1773434598045_raw.jpg";
import brandLogo from "./assets/brand/HydroShine Brand Assets & Templates.png";
import brandPoster from "./assets/brand/HydroShine SocMed Template.jpg";

const highlights = [
  "Fast Messenger booking",
  "Doorstep convenience",
  "Premium finish",
  "Friendly local support",
];

const reasons = [
  {
    icon: Truck,
    title: "We bring the setup",
    text: "Water and power come with the team so the clean happens at your address.",
  },
  {
    icon: Clock3,
    title: "Quick, paspas service",
    text: "Designed for busy people who want the car done without a long wait.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent finish",
    text: "Simple process, reliable result, and easier repeat bookings.",
  },
  {
    icon: Droplets,
    title: "Hydro-smart workflow",
    text: "Clean results with a practical setup built for real mobile work.",
  },
];

const packages = [
  {
    name: "Regular Wash",
    price: "From ₱350",
    summary: "For everyday upkeep and quick refreshes.",
    bullets: ["Exterior foam and rinse", "Wheels and windows refreshed", "Fast turnaround"],
  },
  {
    name: "Premium Wash",
    price: "From ₱650",
    summary: "For a more polished, better-looking result.",
    bullets: ["Deeper clean process", "Extra detail touch-up", "Better showroom feel"],
  },
];

const priceRows = [
  ["Sedan", "₱350", "₱650"],
  ["SUV / Pickup", "₱450", "₱800"],
  ["Van / Fleet", "₱550", "₱950"],
];

const addOns = [
  {
    icon: Bath,
    title: "Interior reset",
    text: "Cabin vacuum and wipe-down for a cleaner daily drive.",
  },
  {
    icon: Sparkles,
    title: "Shine boost",
    text: "Extra attention for the areas customers notice first.",
  },
  {
    icon: Waves,
    title: "Detail extras",
    text: "Headlights, trim, and small problem spots handled on request.",
  },
];

const testimonials = [
  {
    name: "A. Carter",
    role: "Busy parent",
    quote:
      "Messenger booking was simple, they showed up on time, and the car looked freshly detailed.",
  },
  {
    name: "M. Nguyen",
    role: "Small business owner",
    quote:
      "Way easier than driving around for a wash. Clean result, quick communication, no hassle.",
  },
  {
    name: "J. Miller",
    role: "Repeat client",
    quote:
      "I rebooked right away because the finish was clean and the service felt dependable.",
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
    <main className="relative overflow-hidden bg-[#f7fdff] text-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(19,185,234,0.16),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(255,217,43,0.18),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,253,255,1))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[repeating-linear-gradient(120deg,rgba(19,185,234,0.22)_0,rgba(19,185,234,0.22)_1px,transparent_1px,transparent_20px)] opacity-50" />

      <header className="sticky top-0 z-30 border-b border-sky-100/80 bg-white/88 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={brandLogo}
              alt="HydroShine"
              className="h-12 w-auto object-contain sm:h-14"
            />
            <div className="hidden sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hydro-teal">
                Mobile wash and detailing
              </p>
              <p className="text-sm font-semibold text-slate-900">
                Built for convenience and repeat bookings
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a href="#services" className="transition hover:text-slate-950">
              Services
            </a>
            <a href="#why" className="transition hover:text-slate-950">
              Why us
            </a>
            <a href="#book" className="transition hover:text-slate-950">
              Book
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={facebookConnection.messengerUrl}
              className="hidden rounded-full border border-sky-200 bg-white px-4 py-2 text-sm font-bold text-slate-800 shadow-sm transition hover:border-hydro-blue hover:text-hydro-blue sm:inline-flex"
            >
              Messenger
            </a>
            <a
              href="#book"
              className="inline-flex items-center gap-2 rounded-full bg-hydro-blue px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-hydro-deep"
            >
              Book now
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-10 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:pb-20 lg:pt-14">
          <div className="relative z-10">
            <Badge className="w-fit border border-sky-200 bg-white/85 text-hydro-deep">
              Clean → Shine → Convenience
            </Badge>
            <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              HydroShine brings a premium showroom shine to your doorstep.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
              The mobile car wash and detailing service for busy drivers who want a
              cleaner vehicle, a better look, and one less thing to worry about.
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
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/82 px-4 py-3 shadow-sm"
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
                Fast response
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-hydro-blue" />
                Reliable finish
              </span>
            </div>
          </div>

          <div className="relative z-10">
            <div className="absolute -left-5 top-12 hidden h-20 w-20 rounded-full bg-hydro-yellow/30 blur-2xl lg:block" />
            <div className="absolute -right-6 bottom-4 hidden h-24 w-24 rounded-full bg-sky-300/30 blur-2xl lg:block" />
            <Card className="relative overflow-hidden border-sky-100 bg-white/92 p-3 shadow-glow">
              <img
                src={brandPoster}
                alt="HydroShine social media template"
                className="aspect-[1/1] w-full rounded-[1.5rem] object-cover object-center"
              />
              <div className="absolute left-4 top-4 max-w-[220px] rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hydro-teal">
                  At-home convenience
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  We come to you, so the car gets done without the extra trip.
                </p>
              </div>
              <div className="absolute bottom-4 right-4 rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-hydro-teal">
                  Paspas booking
                </p>
                <p className="mt-1 text-sm text-slate-700">
                  Quick Messenger replies and short booking steps.
                </p>
              </div>
            </Card>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Card className="overflow-hidden border-sky-100 bg-white/95 p-3 shadow-sm">
                <img
                  src={brandMascot}
                  alt="HydroShine mascot"
                  className="aspect-square w-full rounded-[1.25rem] object-cover"
                />
                <div className="px-1 pt-3">
                  <p className="text-sm font-bold text-slate-950">Friendly local feel</p>
                  <p className="mt-1 text-sm text-slate-600">
                    The visual tone stays warm, approachable, and easy to trust.
                  </p>
                </div>
              </Card>
              <Card className="overflow-hidden border-sky-100 bg-white/95 p-3 shadow-sm">
                <img
                  src={brandBubble}
                  alt="HydroShine color palette cue"
                  className="aspect-square w-full rounded-[1.25rem] object-cover"
                />
                <div className="px-1 pt-3">
                  <p className="text-sm font-bold text-slate-950">Brand colors</p>
                  <p className="mt-1 text-sm text-slate-600">
                    Hydro blue, bright yellow, and clean aqua neutrals.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6">
        <div className="grid gap-4 md:grid-cols-4">
          {reasons.map((reason) => (
            <Card
              key={reason.title}
              className="border-sky-100 bg-white/92 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hydro-mist text-hydro-blue">
                <reason.icon className="h-6 w-6" />
              </div>
              <h2 className="mt-4 text-lg font-bold text-slate-950">{reason.title}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600">{reason.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="services" className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-16">
        <div className="max-w-3xl">
          <Badge className="border border-sky-200 bg-white/90 text-hydro-deep">
            Service menu
          </Badge>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            Clear packages. Clear pricing. Easy to book.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            Customers should understand the offer in seconds. The page stays simple:
            what it is, what it costs, and how to request a slot.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            {packages.map((pack) => (
              <Card
                key={pack.name}
                className="border-sky-100 bg-white/96 p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-950">{pack.name}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {pack.summary}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-hydro-yellow/25 px-4 py-3 text-right">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-hydro-deep">
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

          <Card className="overflow-hidden border-sky-100 bg-white/96 shadow-sm">
            <div className="border-b border-sky-100 px-6 py-5">
              <h3 className="text-2xl font-black text-slate-950">Vehicle pricing</h3>
              <p className="mt-1 text-sm text-slate-600">
                Keep the table visible so the customer can self-qualify fast.
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
                  {priceRows.map(([vehicle, regular, premium]) => (
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

      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <Card className="border-sky-100 bg-white/96 p-6 shadow-sm">
            <Badge className="bg-white/90 text-hydro-deep">Why it converts</Badge>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950">
              It answers the three things people need before they book.
            </h2>
            <div className="mt-6 space-y-4">
              {[
                ["What", "Premium mobile wash and detailing at your address."],
                ["Why", "Cleaner car, less time wasted, less friction."],
                ["How fast", "Messenger or short form. No deep navigation."],
              ].map(([label, text]) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl bg-sky-50 px-4 py-4">
                  <div className="mt-0.5 flex h-8 min-w-8 items-center justify-center rounded-full bg-hydro-blue text-sm font-black text-white">
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
              HydroShine is built for easy decisions: clear offer, simple form, and a
              fast path to Messenger if the customer wants it.
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
                text="For direct scheduling when they already know what they need."
                cta="Tap to call"
                href="tel:+15551234567"
              />
            </div>
          </div>

          <Card className="border-sky-100 bg-white/96 p-6 shadow-glow">
            {submitted ? (
              <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-6">
                <img
                  src={brandMascot}
                  alt="HydroShine mascot"
                  className="h-16 w-16 rounded-2xl object-cover"
                />
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
                    onChange={(event) => setLead({ ...lead, vehicle: event.target.value })}
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

                <Button type="submit" className="w-full py-6 text-base">
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
          <p className="font-semibold text-slate-800">HydroShine - Clean, Shine, Convenience.</p>
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
