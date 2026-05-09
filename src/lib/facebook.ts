import { Booking, LeadSource } from "../types/booking";

export type FacebookLeadPayload = {
  customerName: string;
  phone: string;
  source: Extract<LeadSource, "Facebook Messenger" | "Facebook Lead Form">;
  messageId: string;
  requestedDate?: string;
  notes?: string;
};

export function mapFacebookLeadToBooking(payload: FacebookLeadPayload): Booking {
  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    customerName: payload.customerName,
    phone: payload.phone,
    source: payload.source,
    service: "Premium Detail",
    requestedDate: payload.requestedDate ?? "",
    requestedTime: "Time TBD",
    address: "Address pending",
    pipelineStage: "New Inquiry",
    status: "New",
    estimatedRevenue: 125,
    notes: payload.notes ?? "Imported from Facebook.",
    facebookThreadId: payload.messageId,
    contentChecklist: {
      beforePhoto: false,
      afterPhoto: false,
      shortVideo: false,
    },
  };
}
