import React from "react";
import { Card } from "../components/ui/card";

const noticias = [
  {
    titulo: "Novo medicamento mostra eficácia em testes clínicos iniciais",
    descricao:
      "Pesquisadores anunciaram os resultados promissores de um novo composto que atua reduzindo os níveis de beta-amiloide no cérebro. O estudo, conduzido com mais de 500 pacientes em fase inicial da Doença de Alzheimer, mostrou melhora cognitiva em 40% dos casos.",
    data: "10 de junho de 2025"
  },
  {
    titulo: "Estudo brasileiro aponta efeito neuroprotetor da Bacopa monnieri",
    descricao:
      "Cientistas da Universidade de São Paulo investigaram o uso da planta Bacopa monnieri em modelos animais com sintomas semelhantes à Doença de Alzheimer. Os resultados indicam uma melhora significativa na memória e redução do estresse oxidativo cerebral.",
    data: "2 de junho de 2025"
  },
  {
    titulo: "Nova vacina contra proteína tau entra em fase 2 de testes",
    descricao:
      "Uma vacina experimental voltada à prevenção do acúmulo da proteína tau no cérebro começou a fase 2 de testes clínicos. Especialistas esperam que essa abordagem reduza a progressão da Doença de Alzheimer em pacientes com sintomas leves.",
    data: "28 de maio de 2025"
  },
  {
  titulo: "Pesquisa revela papel da microbiota intestinal no Alzheimer",
  descricao:
    "Estudo europeu aponta que alterações na microbiota intestinal podem estar ligadas à inflamação cerebral e progressão da Doença de Alzheimer.",
  data: "12 de junho de 2025"
},
{
  titulo: "Dispositivo vestível detecta sinais precoces de Alzheimer",
  descricao:
    "Tecnologia wearable desenvolvida por pesquisadores canadenses identifica padrões de sono e movimento associados aos estágios iniciais da doença.",
  data: "8 de junho de 2025"
},
{
  titulo: "Uso de realidade virtual melhora cognição em idosos",
  descricao:
    "Ensaios clínicos com realidade virtual demonstraram ganhos significativos em atenção e memória em idosos com comprometimento cognitivo leve.",
  data: "6 de junho de 2025"
},
{
  titulo: "Nova abordagem genética para frear o Alzheimer é descoberta",
  descricao:
    "Cientistas conseguiram inibir a expressão de um gene associado ao acúmulo de placas amiloides, abrindo portas para terapias personalizadas.",
  data: "1 de junho de 2025"
},
{
  titulo: "Aplicativo brasileiro auxilia no monitoramento de sintomas cognitivos",
  descricao:
    "Startup nacional lança app que ajuda pacientes e familiares a registrarem sinais diários de progressão da doença.",
  data: "30 de maio de 2025"
},
{
  titulo: "Suplementação com ômega-3 é associada a menor declínio cognitivo",
  descricao:
    "Revisão sistemática aponta que doses adequadas de DHA e EPA podem proteger contra deterioração cognitiva leve.",
  data: "27 de maio de 2025"
},
{
  titulo: "Tratamento combinado mostra bons resultados em fase 3",
  descricao:
    "Fármaco com ação anti-inflamatória e antioxidante, em combinação com estimulação cerebral não invasiva, demonstrou benefícios duradouros.",
  data: "25 de maio de 2025"
},
{
  titulo: "Estudo aponta que meditação reduz risco de Alzheimer",
  descricao:
    "Pesquisadores da Universidade de Harvard demonstraram que práticas regulares de meditação estão associadas à redução de biomarcadores inflamatórios e melhora na conectividade cerebral.",
  data: "20 de maio de 2025"
},
{
  titulo: "Uso de inteligência artificial acelera diagnóstico precoce",
  descricao:
    "Ferramentas baseadas em IA analisam exames de imagem e histórico clínico, possibilitando a identificação da Doença de Alzheimer com até 2 anos de antecedência.",
  data: "18 de maio de 2025"
}

  
];

const eventos = [
  {
    nome: "Congresso Internacional de Neurociência e Memória",
    local: "São Paulo, Brasil",
    data: "15 a 18 de julho de 2025"
    
  },
  {
    nome: "Simpósio Latino-Americano sobre Alzheimer",
    local: "Buenos Aires, Argentina",
    data: "3 a 6 de agosto de 2025"
    
  },
  {
    nome: "Fórum Global de Doenças Neurodegenerativas",
    local: "Lisboa, Portugal",
    data: "25 a 27 de setembro de 2025"
    
  },
  {
    nome: "Alzheimer's Association International Conference (AAIC)",
    data: "27 Julho a 31 setembro de 2025",
    local:"Toronto, Canada",
    link: "https://www.conferenceregistration.org/aaic/"
  },
  {
    nome: "Dementia World Conference",
    data: "5 a 7 de setembro de 2025",
    local:" Crowne Plaza Boston-Woburn, Estados Unidos",
    link: "https://www.dementiaworldconference.com/"
  },
  {
    nome: "Evento Alzheimer - UERJ",
    data: "29 a 31 de julho de 2025",
    local:"Rio de Janeiro, Brasil",
    link: "https://www.cepuerj.uerj.br/cursos2.php?tipo=eventos&curso=S01370&ano=2025"
  },
  {
    nome: "Congresso de Geriatria da USP",
    data: "25 a 27 de setembro de 2025",
    local:"São Paulo, Brasil",
    link: "https://congressogerousp.com.br/"
  },
  {
    nome: "EndoDebate Alzheimer Online",
    data: "29 de setembro de 2025",
    local:"São Paulo, Brasil",
    link: "https://www.endodebate.com.br/produto/endodebate-alzheimer-online-2025/"
  },
  {
    nome: "ECNP Congress 2025",
    data: "11 a 14 de outubro de 2025",
    local:"Amsterdã, Holanda",
    link: "https://www.ecnp.eu/congress2025/"
  },
  {
    nome: "Neuropharma Conferences",
    data: "25 a 26 de agosto de 2025",
    local:"Londeres, Inglaterra",
    link: "https://neuro.pharmaceuticalconferences.com/"
  },
  {
    nome: "Brain Disorders Conference",
    data: "06 a 07 de outubro de 2025",
    local:"Las Vegas, Estados Unidos",
    link: "https://braindisorders.neuroconferences.com/"
  },
  {
    nome: "Congresso Internacional de Neurociência Translacional",
    data: "06 a 08 de novembro de 2025",
    local:"Evento Online",
    link: "https://doity.com.br/congressocinets"
  }
];

export default function NoticiasAvancosAlzheimer() {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4 text-center">📅Notícias Recentes sobre Alzheimer</h2>
      <div className="row g-4 mb-5">
        {noticias.map((n, i) => (
          <div className="col-md-4" key={i}>
            <Card className="p-3 shadow-sm h-100">
              <h5 className="text-primary fw-bold">{n.titulo}</h5>
              <small className="text-muted">{n.data}</small>
              <p className="mt-2 small">{n.descricao}</p>
            </Card>
          </div>
        ))}
      </div>

       <h3 className="fw-bold mb-3 text-center">🧠Eventos Científicos sobre Memória e Alzheimer</h3>
      <div className="row g-4 mb-4">
        {eventos.map((e, i) => (
          <div className="col-md-4" key={i}>
            <Card className="p-3 shadow-sm h-100">
              <h6 className="text-dark fw-bold">{e.nome}</h6>
              <p className="mb-1"><strong>Local:</strong> {e.local}</p>
              <p className="mb-1"><strong>Data:</strong> {e.data}</p>
              {e.link && (
                <a href={e.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
                  Acessar Evento
                </a>
              )}
            </Card>
          </div>
        ))}
      </div>

      <div className="text-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=pt.brazilian%23holiday%40group.v.calendar.google.com&ctz=America%2FSao_Paulo"
          style={{ border: 0, width: "100%", height: "500px" }}
          frameBorder="0"
          scrolling="no"
          title="Calendário de Eventos"
        ></iframe>
      </div>
    </div>
  );
}
