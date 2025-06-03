const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());

const NCBI_API_KEY = "5ee3209efa43505d1837bf665243eaf15308"; // Substitua pela sua chave

app.get("/api/pubmed_summary", async (req, res) => {
  const ids = req.query.ids;
  if (!ids) return res.status(400).json({ error: "IDs são obrigatórios" });
  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids}&retmode=json&api_key=${NCBI_API_KEY}`;
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar summary PubMed", details: err.message });
  }
});

module.exports = app;
