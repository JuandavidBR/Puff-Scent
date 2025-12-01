"use client";
// Extiende el tipo Window para permitir _adminListener
declare global {
  interface Window {
    _adminListener?: any;
  }
}
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";

export default function LoginPage() {
    // Extiende el tipo Window para permitir _adminListener
    // @ts-ignore
    if (typeof window !== 'undefined' && window._adminListener === undefined) {
      // @ts-ignore
      window._adminListener = undefined;
    }
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [password, setPassword] = useState("");
  const [recoverMode, setRecoverMode] = useState(false);
  const [recoverSent, setRecoverSent] = useState(false);
  const [loginDebug, setLoginDebug] = useState<string>("");
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (password) {
      // Login with password
      const { data, error: loginError } = await supabase.auth.signInWithPassword({ email, password });
      setLoading(false);
      if (loginError) {
        setError("Correo o contraseña incorrectos.");
        return;
      }
      setSent(false);
      // Check if user is admin and redirect
      const userEmail = data?.user?.email;
      if (userEmail) {
        const { data: admin } = await supabase.from('admins').select('*').eq('email', userEmail).single();
        setLoginDebug(`Correo: ${userEmail} | Admin: ${!!admin}`);
        if (admin) {
          router.replace('/admin');
        } else {
          setError("Inicio de sesión exitoso, pero no eres administrador.");
        }
      } else {
        setLoginDebug("No se detectó correo en la sesión.");
      }
    } else {
      // Login with magic link
      const { error: loginError } = await supabase.auth.signInWithOtp({ email });
      setLoading(false);
      if (loginError) {
        setError("No se pudo enviar el enlace. Verifica el correo.");
        return;
      }
      setSent(true);
      // Listen for auth state change and redirect if admin
      if (!window._adminListener) {
        window._adminListener = supabase.auth.onAuthStateChange(async (_event, session) => {
          const userEmail = session?.user?.email;
          if (userEmail) {
            const { data: admin } = await supabase.from('admins').select('*').eq('email', userEmail).single();
            setLoginDebug(`Correo: ${userEmail} | Admin: ${!!admin}`);
            if (admin) {
              router.replace('/admin');
            } else {
              setError("Inicio de sesión exitoso, pero no eres administrador.");
            }
          } else {
            setLoginDebug("No se detectó correo en la sesión.");
          }
        });
      }
    }
  }

  async function handleRecover(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error: recoverError } = await supabase.auth.resetPasswordForEmail(email);
    setLoading(false);
    if (recoverError) {
      setError("No se pudo enviar el correo de recuperación.");
      return;
    }
    setRecoverSent(true);
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-background pt-24">
        <form onSubmit={recoverMode ? handleRecover : handleLogin} className="bg-white p-8 rounded shadow w-full max-w-md flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4 text-center">{recoverMode ? "Recuperar contraseña" : "Iniciar sesión"}</h2>
          {loading && <div className="text-center text-gray-500">Cargando...</div>}
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            className="border px-3 py-2 rounded"
            required
          />
          {!recoverMode && (
            <>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Contraseña (opcional)"
                className="border px-3 py-2 rounded"
              />
              <Button type="submit" disabled={loading} className="w-full">{password ? "Iniciar sesión" : "Enviar enlace"}</Button>
              <button
                type="button"
                className="text-blue-600 text-sm underline mt-2"
                onClick={() => { setRecoverMode(true); setError(""); setRecoverSent(false); }}
              >¿Olvidaste tu contraseña?</button>
              {sent && <div className="text-green-600 text-sm text-center">Enlace enviado. Revisa tu correo.</div>}
            </>
          )}
          {recoverMode && (
            <>
              <Button type="submit" disabled={loading} className="w-full">Recuperar contraseña</Button>
              <button
                type="button"
                className="text-blue-600 text-sm underline mt-2"
                onClick={() => { setRecoverMode(false); setError(""); setRecoverSent(false); }}
              >Volver a iniciar sesión</button>
              {recoverSent && <div className="text-green-600 text-sm text-center">Correo de recuperación enviado. Revisa tu correo.</div>}
            </>
          )}
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          {loginDebug && <div className="text-xs text-center mt-2 text-gray-500">{loginDebug}</div>}
        </form>
      </div>
    </>
  );
}
