const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const apiKey = process.env.NCBI_API_KEY;
  const q = req.query.q || "alzheimer";
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(q)}&retmax=3&sort=pub+date&retmode=json&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do PubMed", details: error.message });
  }
};
