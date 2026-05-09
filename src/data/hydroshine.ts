import { Booking } from "../types/booking";

export const facebookConnection = {
  pageName: "HydroShine Auto Detailing",
  pageId: "connect-meta-page-id",
  messengerUrl: "https://www.facebook.com/messages/t/",
};

export const messengerBookingPrompt =
  "Hi, this is Squirtle with HydroShine. I can help get your wash booked. What vehicle do you have, what area are you in, and would you prefer a weekday or weekend appointment?";

export const seededBookings: Booking[] = [
  {
    id: "booking-1001",
    createdAt: "2026-05-06T14:30:00.000Z",
    customerName: "Jordan Miller",
    phone: "(555) 314-2280",
    source: "Facebook Messenger",
    service: "Premium Detail",
    requestedDate: "2026-05-09",
    requestedTime: "10:00",
    address: "Oak Ridge neighborhood",
    pipelineStage: "Scheduled",
    status: "Confirmed",
    estimatedRevenue: 165,
    notes: "Asked about pet hair add-on for SUV interior.",
    facebookThreadId: "fb-thread-10442",
    contentChecklist: {
      beforePhoto: true,
      afterPhoto: false,
      shortVideo: false,
    },
  },
  {
    id: "booking-1002",
    createdAt: "2026-05-05T18:10:00.000Z",
    customerName: "Alyssa Carter",
    phone: "(555) 892-4411",
    source: "Facebook Lead Form",
    service: "Interior Reset",
    requestedDate: "2026-05-10",
    requestedTime: "13:30",
    address: "Downtown apartment garage",
    pipelineStage: "Contacted",
    status: "Needs Follow-up",
    estimatedRevenue: 120,
    notes: "Lead ad form. Needs final time confirmation.",
    facebookThreadId: "lead-form-88921",
    contentChecklist: {
      beforePhoto: false,
      afterPhoto: false,
      shortVideo: false,
    },
  },
  {
    id: "booking-1003",
    createdAt: "2026-05-03T09:15:00.000Z",
    customerName: "Marcus Nguyen",
    phone: "(555) 771-6095",
    source: "Referral",
    service: "Express Wash",
    requestedDate: "2026-05-04",
    requestedTime: "09:00",
    address: "Maple Street",
    pipelineStage: "Completed",
    status: "Completed",
    estimatedRevenue: 75,
    notes: "Good candidate for monthly maintenance package.",
    contentChecklist: {
      beforePhoto: true,
      afterPhoto: true,
      shortVideo: true,
    },
  },
];
