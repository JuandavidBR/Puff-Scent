"use client";

import { useState, ChangeEvent } from "react";

export function ImageUploader() {
const [preview, setPreview] = useState<string | null>(null);

const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Preview local
    setPreview(URL.createObjectURL(file));

    const data = new FormData();
    data.append("file", file);

    const res = await fetch("/api/upload", {
    method: "POST",
    body: data,
    });

    const json = await res.json();
    console.log("URL de Cloudinary:", json.url);

    // Aquí podrías:
    // - guardar la URL en estado
    // - o mandarla a tu backend / Supabase
};

return (
    <div className="space-y-2">
    <input type="file" onChange={handleChange} />
    {preview && (
        <img
        src={preview}
        alt="Preview"
        className="w-32 h-32 object-cover rounded-md mt-2"
        />
    )}
    </div>
);
}
