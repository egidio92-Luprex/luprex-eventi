"use client";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  const handleSignup = async (e:any) => {
    e.preventDefault();
    setMsg(null);
    const res = await fetch("/api/signup", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({email,password})
    });
    const data = await res.json();
    if(res.ok) setMsg("Registrazione completata! Vai al login.");
    else setMsg(data.error||"Errore signup");
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Registrazione</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-3">
        <input placeholder="Email" className="border p-2 rounded" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password (min 6)" className="border p-2 rounded" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit" className="bg-green-600 text-white px-3 py-2 rounded">Crea account</button>
      </form>
      {msg && <p className="mt-3">{msg}</p>}
      <p className="mt-4 text-sm">Hai già un account? <a className="text-blue-600 underline" href="/login">Accedi</a></p>
    </div>
  );
}
