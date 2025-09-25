"use client";
import { EventData } from "@/lib/types";

export default function EventList({ events, onDelete }: { events: EventData[], onDelete: (id:string)=>void }) {
  if (!events.length) return <p className="p-2">Nessun evento</p>;
  return (
    <ul className="p-2 bg-white rounded border">
      {events.map(e=> (
        <li key={e.id} className="border-b p-2 flex items-center justify-between last:border-b-0">
          <span>{e.title} <span className="text-gray-500">({e.date})</span></span>
          <button onClick={()=>e.id && onDelete(e.id)} className="text-red-600">Elimina</button>
        </li>
      ))}
    </ul>
  );
}
