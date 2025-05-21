// src/utils/uploadCloudinary.js
export async function uploadToCloudinary(file) {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "unsigned"); // Troque pelo seu nome de preset

  const res = await fetch("https://api.cloudinary.com/v1_1/daxi69y7t/image/upload", {
    method: "POST",
    body: data,
  });
  const json = await res.json();
  return json.secure_url;
}
