"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [estudos, setEstudos] = useState([]);

  const [novaMateria, setNovaMateria] = useState("");

  useEffect(() => {
    const dadosSalvos = localStorage.getItem("planner");
    if (dadosSalvos) {
      setEstudos(JSON.parse(dadosSalvos));
    } else {
      setEstudos([
        {
          materia: "Comportamento Organizacional",
          dia: "Segunda",
          status: "Em andamento",
          resumo: "",
          material: "",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("planner", JSON.stringify(estudos));
  }, [estudos]);

  const alterarCampo = (index, campo, valor) => {
    const novos = [...estudos];
    novos[index][campo] = valor;
    setEstudos(novos);
  };

  const adicionarMateria = () => {
    if (!novaMateria) return;

    setEstudos([
      ...estudos,
      {
        materia: novaMateria,
        dia: "",
        status: "Não iniciado",
        resumo: "",
        material: "",
      },
    ]);

    setNovaMateria("");
  };

  const removerMateria = (index) => {
    const novos = estudos.filter((_, i) => i !== index);
    setEstudos(novos);
  };

  const total = estudos.length;

  const concluidos = estudos.filter(
    (e) => e.status === "Concluído"
  ).length;

  const progresso =
    total > 0 ? Math.round((concluidos / total) * 100) : 0;

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
          fontSize: "34px",
        }}
      >
        Planner de Estudos
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "20px",
        }}
      >
        Faculdade + DP/eSocial
      </p>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "20px",
        }}
      >
        <h2>Progresso Geral</h2>

        <div
          style={{
            background: "#ddd",
            height: "20px",
            borderRadius: "999px",
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              width: `${progresso}%`,
              background: "#22c55e",
              height: "100%",
            }}
          />
        </div>

        <p style={{ marginTop: "10px" }}>
          {progresso}% concluído
        </p>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "20px",
        }}
      >
        <h2>Adicionar Matéria</h2>

        <input
          placeholder="Nome da matéria"
          value={novaMateria}
          onChange={(e) => setNovaMateria(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        />

        <button
          onClick={adicionarMateria}
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Adicionar
        </button>
      </div>

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
            <input
              value={item.materia}
              onChange={(e) =>
                alterarCampo(index, "materia", e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "20px",
                marginBottom: "10px",
              }}
            />

            <input
              placeholder="Dia"
              value={item.dia}
              onChange={(e) =>
                alterarCampo(index, "dia", e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "10px",
              }}
            />

            <select
              value={item.status}
              onChange={(e) =>
                alterarCampo(index, "status", e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            >
              <option>Não iniciado</option>
              <option>Em andamento</option>
              <option>Concluído</option>
              <option>Revisar</option>
            </select>

            <textarea
              placeholder="Resumo da matéria"
              value={item.resumo}
              onChange={(e) =>
                alterarCampo(index, "resumo", e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                minHeight: "100px",
                marginBottom: "10px",
              }}
            />

            <textarea
              placeholder="Links, PDFs, materiais..."
              value={item.material}
              onChange={(e) =>
                alterarCampo(index, "material", e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                minHeight: "80px",
                marginBottom: "10px",
              }}
            />

            <button
              onClick={() => removerMateria(index)}
              style={{
                background: "#ef4444",
                color: "white",
                border: "none",
                padding: "10px 16px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Excluir Matéria
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
