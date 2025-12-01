import React from 'react';
import { Card } from '@/components/ui/card';
import { useCart } from '@/lib/cart-context';

type PerfumeItem = {
  name: string;
  brand: string;
  gender: string;
  price: number;
  image?: string;
  description?: string;
};

interface PerfumeListProps {
  perfumes: PerfumeItem[];
}

export default function PerfumeList({ perfumes }: PerfumeListProps) {
  const { addToCart } = useCart();
  if (perfumes.length === 0) return <div className="text-center py-8">No hay perfumes que coincidan con los filtros.</div>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {perfumes.map((p, idx) => (
        <Card key={idx} className="p-4 flex flex-col items-center">
          <img src={p.image || '/default-perfume.jpg'} alt={p.name} className="w-32 h-32 object-cover mb-2 rounded" />
          <div className="font-bold text-lg mb-1">{p.name}</div>
          <div className="text-sm text-muted-foreground mb-1">{p.brand}</div>
          <div className="text-xs mb-2">{p.gender}</div>
          <div className="font-semibold mb-2">₡{p.price * 1000}</div>
          <button
            className="bg-primary text-white px-4 py-1 rounded hover:bg-primary/90"
            onClick={() => addToCart(p)}
          >
            Agregar al carrito
          </button>
        </Card>
      ))}
    </div>
  );
}
