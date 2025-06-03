// server.js
const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch"); // IMPORTANTE para funcionar no Node

const app = express();
const PORT = 3001;

const NCBI_API_KEY = "5ee3209efa43505d1837bf665243eaf15308"; // sua chave

app.use(cors());

app.get("/api/pubmed", async (req, res) => {
  const q = req.query.q || "alzheimer";

  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encodeURIComponent(q)}&retmax=3&sort=pub+date&retmode=json&api_key=${NCBI_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Erro ao buscar PubMed:", err);
    res.status(500).json({ error: "Erro ao buscar PubMed", details: err.message });
  }
});

app.get("/api/pubmed-summary", async (req, res) => {
  const ids = req.query.ids;
  if (!ids) {
    return res.status(400).json({ error: "IDs são obrigatórios" });
  }

  const url = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${ids}&retmode=json&api_key=${NCBI_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Erro ao buscar Summary:", err);
    res.status(500).json({ error: "Erro ao buscar Summary", details: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
