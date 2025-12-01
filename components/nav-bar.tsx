"use client";
import Link from "next/link";
import LoginIcon from "@/components/LoginIcon";
import SiteTitle from "@/components/ui/site-title";
import { Menu, Instagram } from "lucide-react";
import { CartIcon } from "@/components/cart-icon";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function NavBar({ onReservarCita }: { onReservarCita?: () => void }) {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      const email = data?.user?.email || null;
      setUserEmail(email);
      if (email) {
        const { data: admin } = await supabase.from('admins').select('*').eq('email', email).single();
        setIsAdmin(!!admin);
      } else {
        setIsAdmin(false);
      }
    });
    // Listen for auth changes
    const { data: listener } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const email = session?.user?.email || null;
      setUserEmail(email);
      if (email) {
        const { data: admin } = await supabase.from('admins').select('*').eq('email', email).single();
        setIsAdmin(!!admin);
      } else {
        setIsAdmin(false);
      }
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 border-b border-border bg-background/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-40">
      <div className="flex items-center gap-8 text-sm tracking-wide">
        <div className="mr-6">
          <SiteTitle />
        </div>
        <Link href="/perfumes" className="text-foreground hover:text-accent transition-colors uppercase">Perfumes</Link>
        <Link href="/vapes" className="text-foreground hover:text-accent transition-colors uppercase">Vapes</Link>
        <Link href="/wax" className="text-foreground hover:text-accent transition-colors uppercase">Wax</Link>
        <Link href="/nosotros" className="text-foreground hover:text-accent transition-colors uppercase">Nosotros</Link>
        {isAdmin && (
          <Link href="/admin" passHref legacyBehavior>
            <a className="text-primary bg-primary/10 px-3 py-1 rounded ml-2 font-semibold hover:bg-primary/20 transition-colors">Panel Admin</a>
          </Link>
        )}
      </div>
      <div className="flex items-center gap-4 relative">
        <a href="https://www.instagram.com/puffscent" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <CartIcon />
        <button className="md:hidden text-foreground">
          <Menu className="w-5 h-5" />
        </button>
        {onReservarCita && (
          <Button onClick={onReservarCita} className="hidden md:inline-flex bg-primary text-primary-foreground hover:bg-primary/90 ml-4">
            Contactanos
          </Button>
        )}
        {/* LoginIcon con click para mostrar perfil */}
        <div onClick={() => setShowProfile(v => !v)} style={{ cursor: 'pointer' }}>
          <LoginIcon />
        </div>
        {showProfile && userEmail && (
          <div className="absolute top-full right-0 mt-2 bg-white border rounded shadow px-4 py-2 text-sm z-50">
            <span className="block mb-2">{userEmail}</span>
            <button
              className="w-full text-left text-red-600 hover:underline py-1"
              onClick={async () => {
                await supabase.auth.signOut();
                setShowProfile(false);
                window.location.reload();
              }}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
