"use client";
import { useEffect, useState } from "react";
import { EventsAPI } from "@/lib/events-api";
import { EventData } from "@/lib/types";
import EventForm from "@/components/EventForm";
import EventList from "@/components/EventList";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);

  useEffect(()=>{
    EventsAPI.getEvents()
      .then(setEvents)
      .catch(()=>setErr("Errore nel caricamento eventi"))
      .finally(()=>setLoading(false));
  },[]);

  const addEvent = async (event: EventData) => {
    try {
      const e = await EventsAPI.createEvent(event);
      setEvents(prev => [...prev, e]);
    } catch(e) { setErr("Errore creazione evento"); }
  };

  const deleteEvent = async (id:string) => {
    try {
      await EventsAPI.deleteEvent(id);
      setEvents(prev => prev.filter(ev=>ev.id!==id));
    } catch(e) { setErr("Errore eliminazione evento"); }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Dashboard</h1>
        <button onClick={()=>signOut({callbackUrl:"/login"})} className="text-red-600 underline">Logout</button>
      </div>
      <EventForm onSubmit={addEvent} />
      {loading ? <p>Caricamento...</p> : <EventList events={events} onDelete={deleteEvent} />}
      {err && <p className="text-red-600 mt-3">{err}</p>}
    </div>
  );
}
