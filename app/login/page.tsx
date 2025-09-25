"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setErr(null);
    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.error) {
      setErr("Credenziali non valide");
      return;
    }
    window.location.href = "/dashboard";
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
        <input placeholder="Email" className="border p-2 rounded" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 rounded" value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit" className="bg-blue-600 text-white px-3 py-2 rounded">Accedi</button>
      </form>
      {err && <p className="text-red-600 mt-3">{err}</p>}
      <p className="mt-4 text-sm">Non hai un account? <a className="text-blue-600 underline" href="/signup">Registrati</a></p>
    </div>
  );
}
