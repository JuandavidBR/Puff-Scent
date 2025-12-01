"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function SupabaseStatus() {
  const [status, setStatus] = useState<string>("Verificando...");

  useEffect(() => {
    supabase
      .from("products")
      .select("id")
      .limit(1)
      .then(({ error }) => {
        if (error) {
          setStatus("❌ Error de conexión: " + error.message);
        } else {
          setStatus("✅ Supabase conectado correctamente");
        }
      });
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-card p-3 rounded shadow text-sm z-50">
      {status}
    </div>
  );
}
