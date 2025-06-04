// api/pubmed-summary.js
export default async function handler(req, res) {
  const NCBI_API_KEY = "5ee3209efa43505d1837bf665243eaf15308";

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { ids } = req.query;
  if (!ids) {
    return res.status(400).json({ error: "IDs são obrigatórios" });
  }

  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids}&retmode=json&api_key=${NCBI_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar Summary", details: err.message });
  }
}
