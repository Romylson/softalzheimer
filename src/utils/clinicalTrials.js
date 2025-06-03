// Função para buscar estudos de um fármaco específico
export async function buscarEnsaiosClinicos(farmaco) {
  const url = `https://clinicaltrials.gov/api/query/study_fields?expr=${encodeURIComponent(farmaco)}&fields=NCTId,BriefTitle,Condition,OverallStatus,StudyType,StartDate,LocationCountry,LeadSponsorName,URL&min_rnk=1&max_rnk=8&fmt=json`;

  const res = await fetch(url);
  const data = await res.json();
  return data.StudyFieldsResponse.StudyFields;
}
