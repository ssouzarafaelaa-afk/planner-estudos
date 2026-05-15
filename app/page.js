"use client";

import { useState } from "react";

export default function Home() {
  const [estudos, setEstudos] = useState([
    {
      materia: "Comportamento Organizacional",
      dia: "Segunda",
      status: "Em andamento",
    },
    {
      materia: "Matemática Empresarial",
      dia: "Terça",
      status: "Não iniciado",
    },
    {
      materia: "Folha de Pagamento",
      dia: "Quarta",
      status: "Concluído",
    },
  ]);

  const alterarStatus = (index, novoStatus) => {
    const novosEstudos = [...estudos];
    novosEstudos[index].status = novoStatus;
    setEstudos(novosEstudos);
  };

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

      <div style={{ display: "grid", gap: "20px" }}>
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
            <input
              value={item.materia}
              onChange={(e) => {
                const novos = [...estudos];
                novos[index].materia = e.target.value;
                setEstudos(novos);
              }}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "18px",
                marginBottom: "10px",
              }}
            />

            <input
              value={item.dia}
              onChange={(e) => {
                const novos = [...estudos];
                novos[index].dia = e.target.value;
                setEstudos(novos);
              }}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
              }}
            />

            <select
              value={item.status}
              onChange={(e) =>
                alterarStatus(index, e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "10px",
                fontWeight: "bold",
              }}
            >
              <option>Não iniciado</option>
              <option>Em andamento</option>
              <option>Concluído</option>
              <option>Revisar</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
