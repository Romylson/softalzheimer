// api/pubmed.js
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const q = req.query.q;
  if (!q) {
    return res.status(400).json({ error: 'Parâmetro "q" é obrigatório.' });
  }

  try {
    // Exemplo de proxy para o PubMed (ajuste a URL conforme sua necessidade real)
    const pubmedUrl = `https://api.ncbi.nlm.nih.gov/lit/ctxp/v1/pmc/?format=json&term=${encodeURIComponent(q)}`;

    const response = await fetch(pubmedUrl);
    if (!response.ok) {
      return res.status(response.status).json({ error: `PubMed retornou status ${response.status}` });
    }
    const data = await response.json();
    // Aqui você pode filtrar/reformatar o JSON antes de devolver
    return res.status(200).json(data);
  } catch (error) {
    console.error('Erro na rota /api/pubmed:', error);
    return res.status(500).json({ error: 'Erro interno ao buscar PubMed.' });
  }
}
