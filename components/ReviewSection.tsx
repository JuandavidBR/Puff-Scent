import { useState } from "react";

type Review = {
  rating: number;
  comment: string;
};

export default function ReviewSection() {
  const [reviews, setReviews] = useState<any[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("puffscent-reviews");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  return (
    <div className="w-full">
      <div className="mt-8">
        <h5 className="font-serif text-xl mb-4">Reseñas recientes</h5>
        <ul className="space-y-4">
          {reviews.length === 0 ? (
            <li className="text-muted-foreground">Aún no hay reseñas. ¡Sé el primero en opinar!</li>
          ) : (
            reviews.slice(-5).reverse().map((r, i) => (
              <li key={i} className="bg-card p-4 rounded shadow">
                <div className="flex items-center gap-2 mb-1">
                  {[1,2,3,4,5].map(star => (
                    <span key={star} className={`text-lg ${star <= r.rating ? 'text-yellow-400' : 'text-muted-foreground'}`}>★</span>
                  ))}
                </div>
                <div className="text-xs text-muted-foreground mb-1">{r.email}</div>
                {r.comment && <p className="text-muted-foreground">{r.comment}</p>}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
