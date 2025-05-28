const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api/pubmed", async (req, res) => {
  const q = req.query.q || "alzheimer";
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(q)}&retmax=3&sort=pub+date&retmode=json`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar PubMed", details: err.message });
  }
});

app.get("/api/pubmed_summary", async (req, res) => {
  const ids = req.query.ids;
  if (!ids) return res.status(400).json({ error: "IDs são obrigatórios" });
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids}&retmode=json`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar summary PubMed", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
