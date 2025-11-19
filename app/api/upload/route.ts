// app/api/upload/route.ts
import { NextResponse } from "next/server";
// Si ya tienes alias "@", usa esta:
import cloudinary from "@/lib/cloudinary";
// Si te da error el alias "@", cambia la línea de arriba por:
// import cloudinary from "../../../lib/cloudinary";

export async function POST(req: Request) {
try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
    return NextResponse.json(
        { error: "No se envió ningún archivo" },
        { status: 400 }
    );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
        .upload_stream({ folder: "puff-scent" }, (error, uploadResult) => {
        if (error) reject(error);
        else resolve(uploadResult);
        })
        .end(buffer);
    });

    return NextResponse.json({ url: result.secure_url });
} catch (error) {
    console.error(error);
    return NextResponse.json(
    { error: "Error subiendo la imagen" },
    { status: 500 }
    );
}
}
