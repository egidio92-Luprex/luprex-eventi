import { EventData } from './types';

export class EventsAPI {
  private static BASE_URL = 'https://LuprexEventi.abacusai.app/api/events2';

  static async getEvents(): Promise<EventData[]> {
    const res = await fetch(this.BASE_URL, { credentials: "include" });
    if (!res.ok) throw new Error("Errore caricamento eventi");
    return (await res.json()).events || [];
  }

  static async createEvent(event: EventData): Promise<EventData> {
    const res = await fetch(this.BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
      credentials: "include"
    });
    if (!res.ok) throw new Error("Errore creazione evento");
    return await res.json();
  }

  static async updateEvent(event: EventData): Promise<EventData> {
    const res = await fetch(`${this.BASE_URL}/${event.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
      credentials: "include"
    });
    if (!res.ok) throw new Error("Errore update evento");
    return await res.json();
  }

  static async deleteEvent(id: string): Promise<void> {
    const res = await fetch(`${this.BASE_URL}/${id}`, { method: "DELETE", credentials: "include" });
    if (!res.ok) throw new Error("Errore delete evento");
  }
}
