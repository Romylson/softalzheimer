import fetch from "node-fetch";

export default async function handler(req, res) {
  const ids = req.query.ids;
  const NCBI_API_KEY = process.env.NCBI_API_KEY;

  if (!ids) return res.status(400).json({ error: "IDs são obrigatórios" });

  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids}&retmode=json&api_key=${NCBI_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar Summary", details: err.message });
  }
}
