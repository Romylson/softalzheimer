// api/pubmed-summary.js
const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const ids = req.query.ids;
  const apiKey = process.env.NCBI_API_KEY;

  if (!ids) {
    return res.status(400).json({ error: "IDs são obrigatórios" });
  }

  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids}&retmode=json&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Erro ao buscar summary PubMed", err);
    res.status(500).json({ error: "Erro interno", details: err.message });
  }
};
