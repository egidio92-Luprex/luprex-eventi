export interface EventData {
  id?: string;
  title: string;
  description?: string;
  date: string;
  startTime?: string;
  endTime?: string;
  note?: string;
  createdAt?: string;
  updatedAt?: string;
  syncVersion?: number;
  allDay?: boolean;
  color?: string;
  category?: string;
  location?: string;
  crossesMidnight?: boolean;
}
