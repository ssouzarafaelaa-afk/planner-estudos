
export default function Home() {
  const tarefas = [
    { dia: "Segunda", materia: "Comportamento Organizacional", status: "Em andamento" },
    { dia: "Terça", materia: "Matemática Empresarial", status: "Não iniciado" },
    { dia: "Quarta", materia: "Folha de Pagamento", status: "Concluído" },
  ];

  return (
    <main style={{padding:"30px",fontFamily:"Arial"}}>
      <h1>Planner de Estudos</h1>
      <p>Faculdade + DP/eSocial</p>

      {tarefas.map((t, i) => (
        <div key={i} style={{
          border:"1px solid #ccc",
          borderRadius:"12px",
          padding:"16px",
          marginTop:"12px"
        }}>
          <h3>{t.materia}</h3>
          <p>{t.dia}</p>
          <p>Status: {t.status}</p>
        </div>
      ))}
    </main>
  );
}
