'use client';
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";

export default function AdminWax() {
  const [wax, setWax] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState<string|null>(null);
  const [editName, setEditName] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");

  useEffect(() => {
    fetchWax();
  }, []);

  async function fetchWax() {
    setLoading(true);
    const { data, error } = await supabase.from("products").select("*").eq("type", "wax");
    if (!error) setWax(data || []);
    setLoading(false);
  }

  async function addWax() {
    setLoading(true);
    await supabase.from("products").insert({
      name,
      type: "wax",
      description,
      price: price ? Number(price) : null,
      image_url: imageUrl
    });
    setName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    await fetchWax();
    setLoading(false);
  }

  async function deleteWax(id: string) {
    setLoading(true);
    await supabase.from("products").delete().eq("id", id);
    await fetchWax();
    setLoading(false);
  }

  async function updateWax(id: string) {
    setLoading(true);
    await supabase.from("products").update({
      name: editName,
      description: editDescription,
      price: editPrice ? Number(editPrice) : null,
      image_url: editImageUrl
    }).eq("id", id);
    setEditId(null);
    setEditName("");
    setEditDescription("");
    setEditPrice("");
    setEditImageUrl("");
    await fetchWax();
    setLoading(false);
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-serif text-3xl mb-8 text-center">CRUD Wax (productos)</h1>
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" className="border px-2 py-1" />
            <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción" className="border px-2 py-1" />
            <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Precio" type="number" className="border px-2 py-1" />
            <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="URL de imagen" className="border px-2 py-1" />
            <Button onClick={addWax} disabled={loading}>Agregar</Button>
          </div>
          <ul className="space-y-4">
            {wax.map((w: any) => (
              <li key={w.id} className="flex flex-col md:flex-row justify-between items-center border p-2 rounded gap-2">
                {editId === w.id ? (
                  <div className="flex gap-2 w-full">
                    <input value={editName} onChange={e => setEditName(e.target.value)} className="border px-2 py-1" />
                    <input value={editDescription} onChange={e => setEditDescription(e.target.value)} className="border px-2 py-1" />
                    <input value={editPrice} onChange={e => setEditPrice(e.target.value)} type="number" className="border px-2 py-1" />
                    <input value={editImageUrl} onChange={e => setEditImageUrl(e.target.value)} className="border px-2 py-1" />
                    <Button variant="outline" onClick={() => updateWax(w.id)} disabled={loading}>Guardar</Button>
                    <Button variant="ghost" onClick={() => setEditId(null)}>Cancelar</Button>
                  </div>
                ) : (
                  <div className="flex gap-2 w-full justify-between items-center">
                    <span>{w.name} - {w.description} - ${w.price} <br /><img src={w.image_url} alt="img" className="h-12 inline-block" /></span>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => {setEditId(w.id); setEditName(w.name); setEditDescription(w.description); setEditPrice(w.price); setEditImageUrl(w.image_url);}} disabled={loading}>Editar</Button>
                      <Button variant="outline" onClick={() => deleteWax(w.id)} disabled={loading}>Eliminar</Button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
