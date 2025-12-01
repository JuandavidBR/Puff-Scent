"use client";
import LoginIcon from '@/components/LoginIcon';
import { usePathname } from 'next/navigation';

export default function HeaderBar() {
  const pathname = usePathname();
  return (
    <div className="fixed top-4 left-4 z-50 pointer-events-auto flex items-center gap-6 w-full">
      {/* Logo eliminado, solo en NavBar */}
    </div>
  );
}
