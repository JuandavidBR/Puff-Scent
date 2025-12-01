"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import NavBar from "@/components/nav-bar";
import { Link } from "lucide-react";  
// import { ImageUploader } from "@/components/image-uploader";


// Wrapper para obtener la URL subida y guardarla en imageUrl
export function ImageUploaderWithUrl({ setImageUrl }: { setImageUrl: (url: string) => void }) {
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    setLoading(true);
    const data = new FormData();
    data.append("file", file);
    const res = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    const json = await res.json();
    setLoading(false);
    if (json.url) {
      setImageUrl(json.url);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input type="file" onChange={handleChange} />
      {loading && <span className="text-xs text-gray-500">Subiendo...</span>}
      {preview && (
        <img src={preview} alt="Preview" className="w-16 h-16 object-cover rounded mt-2" />
      )}
    </div>
  );
}

export default function AdminPerfumes() {
    const [formError, setFormError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");
    const [perfumes, setPerfumes] = useState<any[]>([]);
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [gender, setGender] = useState("");
    const [size, setSize] = useState("");
    const [notes, setNotes] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [editId, setEditId] = useState<string | null>(null);
    const [editName, setEditName] = useState("");
    const [editBrand, setEditBrand] = useState("");
    const [editGender, setEditGender] = useState("");
    const [editSize, setEditSize] = useState("");
    const [editNotes, setEditNotes] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editImageUrl, setEditImageUrl] = useState("");

  useEffect(() => {
    fetchPerfumes();
  }, []);

  async function fetchPerfumes() {
    setLoading(true);
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("type", "perfume");
    if (!error) setPerfumes(data || []);
    setLoading(false);
  }

  async function addPerfume() {
    setFormError("");
    setFormSuccess("");
    // Validaciones
    if (!id.trim() || !name.trim() || !brand.trim() || !gender.trim() || !size.trim() || !notes.trim() || !description.trim() || !price.trim() || !imageUrl.trim()) {
      setFormError("Todos los campos son obligatorios, incluyendo la imagen.");
      setLoading(false);
      return;
    }
    const priceNum = Number(price);
    if (isNaN(priceNum) || priceNum <= 0) {
      setFormError("El precio debe ser un número positivo.");
      setLoading(false);
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("products").insert({
      id,
      name,
      brand,
      gender,
      size,
      notes,
      description,
      price: priceNum,
      image_url: imageUrl,
      type: "perfume",
    });
    setLoading(false);
    if (error) {
      setFormError(`Error al guardar el perfume: ${error.message || error}`);
      setLoading(false);
      return;
    }
    setFormSuccess("Perfume guardado exitosamente.");
    setId("");
    setName("");
    setBrand("");
    setGender("");
    setSize("");
    setNotes("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    await fetchPerfumes();
  }

  async function deletePerfume(id: string) {
    setLoading(true);
    await supabase.from("products").delete().eq("id", id);
    await fetchPerfumes();
    setLoading(false);
  }

  async function updatePerfume(id: string) {
    setLoading(true);
    await supabase
      .from("products")
      .update({
        name: editName,
        brand: editBrand,
        gender: editGender,
        size: editSize,
        notes: editNotes,
        description: editDescription,
        price: editPrice ? Number(editPrice) : null,
        image_url: editImageUrl,
      })
      .eq("id", id);
    setEditId(null);
    setEditName("");
    setEditBrand("");
    setEditGender("");
    setEditSize("");
    setEditNotes("");
    setEditDescription("");
    setEditPrice("");
    setEditImageUrl("");
    await fetchPerfumes();
    setLoading(false);
  }

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-background pt-24">
        <div className="container mx-auto px-4 py-16">
          <h1 className="font-serif text-3xl mb-8 text-center">
            CRUD Perfumes (productos)
          </h1>
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center flex-wrap">
            {formError && (
              <div className="text-red-500 text-sm text-center w-full mb-2">{formError}</div>
            )}
            {formSuccess && (
              <div className="text-green-600 text-sm text-center w-full mb-2">{formSuccess}</div>
            )}
            <input value={id} onChange={e => setId(e.target.value)} placeholder="ID" className="border px-2 py-1" />
            <input value={name} onChange={e => setName(e.target.value)} placeholder="Nombre" className="border px-2 py-1" />
            <input value={brand} onChange={e => setBrand(e.target.value)} placeholder="Marca" className="border px-2 py-1" />
            <input value={gender} onChange={e => setGender(e.target.value)} placeholder="Género" className="border px-2 py-1" />
            <input value={size} onChange={e => setSize(e.target.value)} placeholder="Tamaño" className="border px-2 py-1" />
            <input value={notes} onChange={e => setNotes(e.target.value)} placeholder="Notas" className="border px-2 py-1" />
            <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Descripción" className="border px-2 py-1" />
            <input value={price} onChange={e => setPrice(e.target.value)} placeholder="Precio" type="number" className="border px-2 py-1" />
            <ImageUploaderWithUrl setImageUrl={setImageUrl} />
            <Button onClick={addPerfume} disabled={loading}>
              {loading ? "Guardando..." : "Agregar"}
            </Button>
          </div>
          <ul className="space-y-4">
            {perfumes.map((p: any) => (
              <li
                key={p.id}
                className="flex flex-col md:flex-row justify-between items-center border p-2 rounded gap-2"
              >
                {editId === p.id ? (
                  <div className="flex gap-2 w-full flex-wrap">
                    <input value={editName} onChange={e => setEditName(e.target.value)} placeholder="Nombre" className="border px-2 py-1" />
                    <input value={editBrand} onChange={e => setEditBrand(e.target.value)} placeholder="Marca" className="border px-2 py-1" />
                    <input value={editGender} onChange={e => setEditGender(e.target.value)} placeholder="Género" className="border px-2 py-1" />
                    <input value={editSize} onChange={e => setEditSize(e.target.value)} placeholder="Tamaño" className="border px-2 py-1" />
                    <input value={editNotes} onChange={e => setEditNotes(e.target.value)} placeholder="Notas" className="border px-2 py-1" />
                    <input value={editDescription} onChange={e => setEditDescription(e.target.value)} placeholder="Descripción" className="border px-2 py-1" />
                    <input value={editPrice} onChange={e => setEditPrice(e.target.value)} placeholder="Precio" type="number" className="border px-2 py-1" />
                    <input value={editImageUrl} onChange={e => setEditImageUrl(e.target.value)} placeholder="URL Imagen" className="border px-2 py-1" />
                    <Button variant="outline" onClick={() => updatePerfume(p.id)} disabled={loading}>Guardar</Button>
                    <Button variant="ghost" onClick={() => setEditId(null)}>Cancelar</Button>
                  </div>
                ) : (
                  <div className="flex gap-2 w-full justify-between items-center flex-wrap">
                    <span>
                      <b>{p.name}</b> ({p.brand})<br />
                      <b>ID:</b> {p.id} | <b>Género:</b> {p.gender} | <b>Tamaño:</b> {p.size} | <b>Notas:</b> {p.notes}<br />
                      <b>Descripción:</b> {p.description}<br />
                      <b>Precio:</b> ${p.price}<br />
                      <img src={p.image_url} alt="img" className="h-12 inline-block" />
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" onClick={() => {
                        setEditId(p.id);
                        setEditName(p.name);
                        setEditBrand(p.brand);
                        setEditGender(p.gender);
                        setEditSize(p.size);
                        setEditNotes(p.notes);
                        setEditDescription(p.description);
                        setEditPrice(p.price);
                        setEditImageUrl(p.image_url);
                      }} disabled={loading}>Editar</Button>
                      <Button variant="outline" onClick={() => deletePerfume(p.id)} disabled={loading}>Eliminar</Button>
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
