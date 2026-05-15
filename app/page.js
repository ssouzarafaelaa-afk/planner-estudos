export default function Home() {
  const estudos = [
    {
      materia: "Comportamento Organizacional",
      dia: "Segunda",
      status: "Em andamento",
      cor: "#facc15",
    },
    {
      materia: "Rotinas de Departamento Pessoal",
      dia: "Segunda",
      status: "Concluído",
      cor: "#22c55e",
    },
    {
      materia: "Matemática Empresarial",
      dia: "Terça",
      status: "Não iniciado",
      cor: "#ef4444",
    },
    {
      materia: "eSocial / SST / Eventos",
      dia: "Terça",
      status: "Em andamento",
      cor: "#f97316",
    },
    {
      materia: "Folha de Pagamento",
      dia: "Quarta",
      status: "Revisar",
      cor: "#3b82f6",
    },
  ];

  return (
    <div
      style={{
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "20px",
        fontFamily: "Arial",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "32px",
          marginBottom: "10px",
        }}
      >
        Planner de Estudos
      </h1>

      <p
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#555",
        }}
      >
        Faculdade + DP/eSocial
      </p>

      <div
        style={{
          display: "grid",
          gap: "20px",
        }}
      >
        {estudos.map((item, index) => (
          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                marginBottom: "10px",
                fontSize: "20px",
              }}
            >
              {item.materia}
            </h2>

            <p>
              <strong>Dia:</strong> {item.dia}
            </p>

            <div
              style={{
                marginTop: "15px",
                display: "inline-block",
                background: item.cor,
                color: "white",
                padding: "8px 14px",
                borderRadius: "999px",
                fontWeight: "bold",
              }}
            >
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
