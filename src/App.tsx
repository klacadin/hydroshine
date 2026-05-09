import {
  CalendarCheck,
  CheckCircle2,
  Clock3,
  DollarSign,
  ExternalLink,
  Facebook,
  MessageCircle,
  Phone,
  Plus,
  Save,
  Sparkles,
  UserRound,
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import { Badge } from "./components/ui/Badge";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { Input } from "./components/ui/Input";
import { Label } from "./components/ui/Label";
import { Select } from "./components/ui/Select";
import { Textarea } from "./components/ui/Textarea";
import { cn } from "./lib/utils";
import {
  Booking,
  BookingFormState,
  BookingStatus,
  LeadSource,
  PipelineStage,
  ServiceType,
} from "./types/booking";
import {
  facebookConnection,
  messengerBookingPrompt,
  seededBookings,
} from "./data/hydroshine";
import { useLocalStorage } from "./hooks/useLocalStorage";

const emptyBooking: BookingFormState = {
  customerName: "",
  phone: "",
  source: "Facebook Messenger",
  service: "Premium Detail",
  requestedDate: "",
  requestedTime: "",
  address: "",
  pipelineStage: "New Inquiry",
  status: "New",
  estimatedRevenue: 125,
  notes: "",
};

const statusTone: Record<BookingStatus, string> = {
  New: "bg-sky-100 text-sky-800",
  Confirmed: "bg-emerald-100 text-emerald-800",
  Completed: "bg-zinc-100 text-zinc-800",
  "Needs Follow-up": "bg-yellow-100 text-yellow-900",
};

const pipelineStages: PipelineStage[] = [
  "New Inquiry",
  "Contacted",
  "Scheduled",
  "Completed",
  "Repeat Customer",
];

const leadSources: LeadSource[] = [
  "Facebook Messenger",
  "Facebook Lead Form",
  "Phone",
  "Referral",
  "Website",
];

const serviceTypes: ServiceType[] = [
  "Express Wash",
  "Premium Detail",
  "Interior Reset",
  "Fleet Wash",
  "Add-On Upgrade",
];

export function App() {
  const [bookings, setBookings] = useLocalStorage<Booking[]>(
    "hydroshine.bookings",
    seededBookings,
  );
  const [form, setForm] = useState<BookingFormState>(emptyBooking);

  const metrics = useMemo(() => {
    const facebookLeads = bookings.filter((booking) =>
      booking.source.startsWith("Facebook"),
    );
    const scheduledToday = bookings.filter(
      (booking) =>
        booking.pipelineStage === "Scheduled" || booking.status === "Confirmed",
    );
    const openFollowUps = bookings.filter(
      (booking) =>
        booking.status === "Needs Follow-up" ||
        booking.pipelineStage === "New Inquiry" ||
        booking.pipelineStage === "Contacted",
    );
    const monthlyRevenue = bookings
      .filter((booking) => booking.status === "Completed")
      .reduce((sum, booking) => sum + booking.estimatedRevenue, 0);

    return {
      facebookLeads: facebookLeads.length,
      scheduled: scheduledToday.length,
      followUps: openFollowUps.length,
      revenue: monthlyRevenue,
    };
  }, [bookings]);

  const addBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.customerName || !form.phone || !form.requestedDate) {
      return;
    }

    const newBooking: Booking = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      customerName: form.customerName,
      phone: form.phone,
      source: form.source,
      service: form.service,
      requestedDate: form.requestedDate,
      requestedTime: form.requestedTime || "Time TBD",
      address: form.address || "Address pending",
      pipelineStage: form.pipelineStage,
      status: form.status,
      estimatedRevenue: Number(form.estimatedRevenue) || 0,
      notes: form.notes,
      facebookThreadId:
        form.source === "Facebook Messenger"
          ? `fb-thread-${Date.now().toString().slice(-5)}`
          : undefined,
      contentChecklist: {
        beforePhoto: false,
        afterPhoto: false,
        shortVideo: false,
      },
    };

    setBookings([newBooking, ...bookings]);
    setForm(emptyBooking);
  };

  const updateBooking = (id: string, updates: Partial<Booking>) => {
    setBookings(
      bookings.map((booking) =>
        booking.id === id ? { ...booking, ...updates } : booking,
      ),
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-hydro-blue text-white shadow-soft">
              <Sparkles className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-semibold text-hydro-blue">
                HydroShine Digital Growth System
              </p>
              <h1 className="text-2xl font-bold tracking-normal">
                Booking + Facebook Lead Hub
              </h1>
            </div>
          </div>
          <a
            href={facebookConnection.messengerUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-hydro-yellow px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-yellow-300"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Open Messenger
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[minmax(0,1fr)_380px]">
        <section className="space-y-5">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              icon={Facebook}
              label="Facebook leads"
              value={metrics.facebookLeads.toString()}
              detail="Messenger + lead forms"
            />
            <MetricCard
              icon={CalendarCheck}
              label="Scheduled"
              value={metrics.scheduled.toString()}
              detail="Ready for service"
            />
            <MetricCard
              icon={Clock3}
              label="Follow-ups"
              value={metrics.followUps.toString()}
              detail="Need reply today"
            />
            <MetricCard
              icon={DollarSign}
              label="Completed revenue"
              value={`$${metrics.revenue.toLocaleString()}`}
              detail="Local storage total"
            />
          </div>

          <Card className="overflow-hidden">
            <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold">Booking Monitor</h2>
                <p className="text-sm text-muted-foreground">
                  Track every inquiry from first message through completed wash.
                </p>
              </div>
              <Badge className="w-fit bg-hydro-mist text-hydro-deep">
                Clean → Shine → Convenience
              </Badge>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] text-left text-sm">
                <thead className="bg-slate-100 text-xs uppercase text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Customer</th>
                    <th className="px-4 py-3 font-semibold">Source</th>
                    <th className="px-4 py-3 font-semibold">Service</th>
                    <th className="px-4 py-3 font-semibold">Booking</th>
                    <th className="px-4 py-3 font-semibold">Pipeline</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold">Content</th>
                  </tr>
                </thead>
                <tbody className="divide-y bg-white">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="align-top">
                      <td className="px-4 py-4">
                        <div className="font-semibold">{booking.customerName}</div>
                        <div className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                          {booking.phone}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <SourceBadge source={booking.source} />
                        {booking.facebookThreadId ? (
                          <div className="mt-1 text-xs text-slate-500">
                            {booking.facebookThreadId}
                          </div>
                        ) : null}
                      </td>
                      <td className="px-4 py-4">
                        <div>{booking.service}</div>
                        <div className="mt-1 text-xs font-medium text-hydro-teal">
                          ${booking.estimatedRevenue}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div>{booking.requestedDate}</div>
                        <div className="text-xs text-slate-500">
                          {booking.requestedTime}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <Select
                          value={booking.pipelineStage}
                          onChange={(event) =>
                            updateBooking(booking.id, {
                              pipelineStage: event.target.value as PipelineStage,
                            })
                          }
                          aria-label={`Pipeline stage for ${booking.customerName}`}
                        >
                          {pipelineStages.map((stage) => (
                            <option key={stage}>{stage}</option>
                          ))}
                        </Select>
                      </td>
                      <td className="px-4 py-4">
                        <Select
                          value={booking.status}
                          onChange={(event) =>
                            updateBooking(booking.id, {
                              status: event.target.value as BookingStatus,
                            })
                          }
                          aria-label={`Booking status for ${booking.customerName}`}
                        >
                          {(["New", "Confirmed", "Completed", "Needs Follow-up"] as BookingStatus[]).map(
                            (status) => (
                              <option key={status}>{status}</option>
                            ),
                          )}
                        </Select>
                        <Badge className={cn("mt-2", statusTone[booking.status])}>
                          {booking.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-4">
                        <ContentChecks booking={booking} onChange={updateBooking} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        <aside className="space-y-5">
          <Card className="p-4">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold">New Booking</h2>
                <p className="text-sm text-muted-foreground">
                  Fast entry for Messenger or phone inquiries.
                </p>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hydro-blue text-white">
                <Plus className="h-5 w-5" aria-hidden="true" />
              </div>
            </div>

            <form className="space-y-3" onSubmit={addBooking}>
              <Field label="Customer name">
                <Input
                  value={form.customerName}
                  onChange={(event) =>
                    setForm({ ...form, customerName: event.target.value })
                  }
                  placeholder="Maria Lopez"
                  required
                />
              </Field>
              <Field label="Phone">
                <Input
                  value={form.phone}
                  onChange={(event) =>
                    setForm({ ...form, phone: event.target.value })
                  }
                  placeholder="(555) 123-0198"
                  required
                />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Source">
                  <Select
                    value={form.source}
                    onChange={(event) =>
                      setForm({ ...form, source: event.target.value as LeadSource })
                    }
                  >
                    {leadSources.map((source) => (
                      <option key={source}>{source}</option>
                    ))}
                  </Select>
                </Field>
                <Field label="Service">
                  <Select
                    value={form.service}
                    onChange={(event) =>
                      setForm({ ...form, service: event.target.value as ServiceType })
                    }
                  >
                    {serviceTypes.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </Select>
                </Field>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Date">
                  <Input
                    type="date"
                    value={form.requestedDate}
                    onChange={(event) =>
                      setForm({ ...form, requestedDate: event.target.value })
                    }
                    required
                  />
                </Field>
                <Field label="Time">
                  <Input
                    type="time"
                    value={form.requestedTime}
                    onChange={(event) =>
                      setForm({ ...form, requestedTime: event.target.value })
                    }
                  />
                </Field>
              </div>
              <Field label="Address">
                <Input
                  value={form.address}
                  onChange={(event) =>
                    setForm({ ...form, address: event.target.value })
                  }
                  placeholder="Neighborhood or full address"
                />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field label="Stage">
                  <Select
                    value={form.pipelineStage}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        pipelineStage: event.target.value as PipelineStage,
                      })
                    }
                  >
                    {pipelineStages.map((stage) => (
                      <option key={stage}>{stage}</option>
                    ))}
                  </Select>
                </Field>
                <Field label="Estimate">
                  <Input
                    type="number"
                    min="0"
                    value={form.estimatedRevenue}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        estimatedRevenue: Number(event.target.value),
                      })
                    }
                  />
                </Field>
              </div>
              <Field label="Notes">
                <Textarea
                  value={form.notes}
                  onChange={(event) =>
                    setForm({ ...form, notes: event.target.value })
                  }
                  placeholder="Vehicle, location, upsell opportunity, or customer request"
                />
              </Field>
              <Button type="submit" className="w-full">
                <Save className="h-4 w-4" aria-hidden="true" />
                Save Booking
              </Button>
            </form>
          </Card>

          <Card className="p-4">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Facebook Connection</h2>
                <p className="text-sm text-muted-foreground">
                  Ready for Messenger lead tracking.
                </p>
              </div>
            </div>
            <div className="space-y-3 text-sm">
              <ConnectionRow label="Page" value={facebookConnection.pageName} />
              <ConnectionRow label="Page ID" value={facebookConnection.pageId} />
              <ConnectionRow label="Lead source" value="Messenger + Lead Ads" />
              <div className="rounded-lg border bg-slate-50 p-3">
                <div className="mb-1 flex items-center gap-2 font-semibold text-hydro-deep">
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Integration path
                </div>
                <p className="text-slate-600">
                  Add Meta app credentials later, point Messenger webhooks to the
                  booking adapter, and incoming messages can create these same
                  local booking records.
                </p>
              </div>
              <div>
                <Label>Squirtle reply starter</Label>
                <div className="mt-2 rounded-lg border bg-white p-3 text-slate-700">
                  {messengerBookingPrompt}
                </div>
              </div>
            </div>
          </Card>
        </aside>
      </div>
    </main>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: typeof Facebook;
  label: string;
  value: string;
  detail: string;
}) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-600">{label}</p>
          <p className="mt-2 text-3xl font-bold tracking-normal">{value}</p>
          <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-hydro-mist text-hydro-blue">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
      </div>
    </Card>
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

function SourceBadge({ source }: { source: LeadSource }) {
  const facebook = source.startsWith("Facebook");

  return (
    <Badge
      className={cn(
        facebook ? "bg-blue-100 text-blue-800" : "bg-slate-100 text-slate-700",
      )}
    >
      {facebook ? <Facebook className="h-3.5 w-3.5" aria-hidden="true" /> : null}
      {source}
    </Badge>
  );
}

function ContentChecks({
  booking,
  onChange,
}: {
  booking: Booking;
  onChange: (id: string, updates: Partial<Booking>) => void;
}) {
  const items = [
    ["beforePhoto", "Before"],
    ["afterPhoto", "After"],
    ["shortVideo", "Video"],
  ] as const;

  return (
    <div className="flex flex-col gap-2">
      {items.map(([key, label]) => (
        <label key={key} className="flex items-center gap-2 text-xs">
          <input
            type="checkbox"
            checked={booking.contentChecklist[key]}
            onChange={(event) =>
              onChange(booking.id, {
                contentChecklist: {
                  ...booking.contentChecklist,
                  [key]: event.target.checked,
                },
              })
            }
            className="h-4 w-4 rounded border-slate-300 text-hydro-blue focus:ring-hydro-blue"
          />
          {label}
        </label>
      ))}
    </div>
  );
}

function ConnectionRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border bg-white px-3 py-2">
      <span className="text-slate-500">{label}</span>
      <span className="font-semibold text-slate-800">{value}</span>
    </div>
  );
}
