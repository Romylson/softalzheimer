// api/pubmed.js
export default async function handler(req, res) {
  const NCBI_API_KEY = "5ee3209efa43505d1837bf665243eaf15308";

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const { q = "alzheimer" } = req.query;
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(q)}&retmax=3&sort=pub+date&retmode=json&api_key=${NCBI_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar PubMed", details: err.message });
  }
}
