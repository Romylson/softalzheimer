export default async function handler(req, res) {
  const q = req.query.q || "alzheimer";
  const apiKey = process.env.NCBI_API_KEY;

  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(q)}&retmax=3&sort=pub+date&retmode=json&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar PubMed", details: err.message });
  }
}
