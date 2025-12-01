
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";


export default function AdminHome() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checked, setChecked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      setUser(data?.user || null);
      if (!data?.user || !data.user.email) {
        setIsAdmin(false);
        setLoading(false);
        setChecked(true);
        return;
      }
      // Check if user is admin in Supabase
      const { data: admin } = await supabase.from('admins').select('*').eq('email', data.user.email).single();
      setIsAdmin(!!admin);
      setLoading(false);
      setChecked(true);
    });
  }, []);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Cargando...</div>;
  if (!checked) return null;
  if (!user)
    return <div className="min-h-screen flex items-center justify-center text-lg">No has iniciado sesión. Inicia sesión para acceder al panel de administración.</div>;
  if (!isAdmin)
    return <div className="min-h-screen flex items-center justify-center text-lg">No tienes permisos de administrador.</div>;

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center mb-6">
            <span className="text-sm text-muted-foreground mb-2">Sesión iniciada como: <b>{user?.email}</b></span>
            <Button
              variant="outline"
              className="mb-4 text-red-600 border-red-300 hover:bg-red-50"
              onClick={async () => {
                await supabase.auth.signOut();
                router.replace("/");
              }}
            >
              Cerrar sesión
            </Button>
          </div>
          <h1 className="font-serif text-4xl mb-8 text-center">Panel de Administración</h1>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <Button onClick={() => router.push("/admin/perfumes")}>Agregar/Editar Perfume</Button>
            <Button onClick={() => router.push("/admin/wax")}>Agregar/Editar Wax</Button>
            <Button onClick={() => router.push("/admin/vapes")}>Agregar/Editar Vape</Button>
          </div>
        </div>
      </div>
    </>
  );
}
