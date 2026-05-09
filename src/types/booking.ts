export type LeadSource =
  | "Facebook Messenger"
  | "Facebook Lead Form"
  | "Phone"
  | "Referral"
  | "Website";

export type PipelineStage =
  | "New Inquiry"
  | "Contacted"
  | "Scheduled"
  | "Completed"
  | "Repeat Customer";

export type ServiceType =
  | "Express Wash"
  | "Premium Detail"
  | "Interior Reset"
  | "Fleet Wash"
  | "Add-On Upgrade";

export type BookingStatus =
  | "New"
  | "Confirmed"
  | "Completed"
  | "Needs Follow-up";

export type ContentChecklist = {
  beforePhoto: boolean;
  afterPhoto: boolean;
  shortVideo: boolean;
};

export type Booking = {
  id: string;
  createdAt: string;
  customerName: string;
  phone: string;
  source: LeadSource;
  service: ServiceType;
  requestedDate: string;
  requestedTime: string;
  address: string;
  pipelineStage: PipelineStage;
  status: BookingStatus;
  estimatedRevenue: number;
  notes: string;
  facebookThreadId?: string;
  contentChecklist: ContentChecklist;
};

export type BookingFormState = Omit<
  Booking,
  "id" | "createdAt" | "facebookThreadId" | "contentChecklist"
>;
