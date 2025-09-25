"use client";
import { useState } from "react";
import { EventData } from "@/lib/types";

export default function EventForm({ onSubmit }: { onSubmit: (e: EventData) => void }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  return (
    <form onSubmit={(e) => { 
      e.preventDefault(); 
      if (!title || !date) return;
      onSubmit({ title, date });
      setTitle(""); setDate("");
    }} className="p-2 flex gap-2">
      <input className="border p-2 rounded flex-1" placeholder="Titolo" value={title} onChange={(e)=>setTitle(e.target.value)} />
      <input className="border p-2 rounded" type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
      <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded">Aggiungi</button>
    </form>
  );
}
