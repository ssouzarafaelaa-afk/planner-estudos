"use client";

import { useState, useEffect } from "react";

const materiasIniciais = [
  {
    materia: "Economia Empresarial",
    dia: "Segunda",
    status: "Não iniciado",
    material:
      "Aula introdutória + resumo sobre oferta, demanda e mercado.",
    progresso: 0,
  },

  {
    materia: "Princípios de Gestão",
    dia: "Terça",
    status: "Não iniciado",
    material:
      "Estudar funções administrativas + mapa mental da matéria.",
    progresso: 0,
  },

  {
    materia: "Matemática Empresarial",
    dia: "Quarta",
    status: "Em andamento",
    material:
      "Resolver exercícios de porcentagem, juros simples e compostos.",
    progresso: 25,
  },

  {
    materia: "Comportamento Organizacional",
    dia: "Quinta",
    status: "Em andamento",
    material:
      "Leitura sobre motivação no trabalho + atividade prática.",
    progresso: 45,
  },

  {
    materia: "Labvida em Gestão de Recursos Humanos 1",
    dia: "Sexta",
    status: "Não iniciado",
    material:
      "Analisar estudos de caso sobre recrutamento e seleção.",
    progresso: 0,
  },

  {
    materia: "Responsabilidade Social e Sustentabilidade",
    dia: "Segunda",
    status: "Revisar",
    material:
      "Revisar conceitos ESG e responsabilidade corporativa.",
    progresso: 70,
  },

  {
    materia: "Analista Pleno DP e eSocial",
    dia: "Terça",
    status: "Em andamento",
    material:
      "Treinar admissões, férias, rescisão e fechamento do eSocial.",
    progresso: 40,
  },
];

export default function Home() {
  const [estudos, setEstudos] = useState([]);
  const [novaMateria, setNovaMateria] = useState("");

  useEffect(() => {
    const dados = localStorage.getItem("planner");

    if (dados) {
      setEstudos(JSON.parse(dados));
    } else {
      setEstudos(materiasIniciais);
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
        dia: "Segunda",
        status: "Não iniciado",
        material: "",
        progresso: 0,
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

  const andamento = estudos.filter(
    (e) => e.status === "Em andamento"
  ).length;

  const revisar = estudos.filter(
    (e) => e.status === "Revisar"
  ).length;

  const naoIniciado = estudos.filter(
    (e) => e.status === "Não iniciado"
  ).length;

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
          fontSize: "36px",
          marginBottom: "10px",
        }}
      >
        Planner de Estudos
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Faculdade + DP/eSocial
      </p>

      {/* DASHBOARD */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
          gap: "15px",
          marginBottom: "30px",
        }}
      >
        <DashboardCard
          titulo="Concluído"
          valor={concluidos}
          cor="#22c55e"
        />

        <DashboardCard
          titulo="Em andamento"
          valor={andamento}
          cor="#f59e0b"
        />

        <DashboardCard
          titulo="Revisar"
          valor={revisar}
          cor="#3b82f6"
        />

        <DashboardCard
          titulo="Não iniciado"
          valor={naoIniciado}
          cor="#ef4444"
        />

        <DashboardCard
          titulo="Total"
          valor={total}
          cor="#6366f1"
        />
      </div>

      {/* ADICIONAR MATÉRIA */}

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "16px",
          marginBottom: "30px",
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
            borderRadius: "10px",
            border: "1px solid #ccc",
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

      {/* CARDS */}

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
                marginBottom: "12px",
                borderRadius: "10px",
                border: "1px solid #ccc",
              }}
            />

            {/* DIA DA SEMANA */}

            <select
              value={item.dia}
              onChange={(e) =>
                alterarCampo(index, "dia", e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "10px",
              }}
            >
              <option>Segunda</option>
              <option>Terça</option>
              <option>Quarta</option>
              <option>Quinta</option>
              <option>Sexta</option>
            </select>

            {/* STATUS */}

            <select
              value={item.status}
              onChange={(e) =>
                alterarCampo(index, "status", e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "10px",
              }}
            >
              <option>Não iniciado</option>
              <option>Em andamento</option>
              <option>Concluído</option>
              <option>Revisar</option>
            </select>

            {/* PROGRESSO */}

            <input
              type="range"
              min="0"
              max="100"
              value={item.progresso}
              onChange={(e) =>
                alterarCampo(
                  index,
                  "progresso",
                  e.target.value
                )
              }
              style={{
                width: "100%",
                marginBottom: "10px",
              }}
            />

            <div
              style={{
                background: "#ddd",
                height: "18px",
                borderRadius: "999px",
                overflow: "hidden",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  width: `${item.progresso}%`,
                  background: "#22c55e",
                  height: "100%",
                }}
              />
            </div>

            <p
              style={{
                marginBottom: "15px",
                fontWeight: "bold",
              }}
            >
              Progresso: {item.progresso}%
            </p>

            {/* MATERIAL */}

            <textarea
              placeholder="Links, PDFs, materiais..."
              value={item.material}
              onChange={(e) =>
                alterarCampo(index, "material", e.target.value)
              }
              style={{
                width: "100%",
                padding: "12px",
                minHeight: "90px",
                marginBottom: "12px",
                borderRadius: "10px",
                border: "1px solid #ccc",
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
              Excluir
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function DashboardCard({ titulo, valor, cor }) {
  return (
    <div
      style={{
        background: cor,
        color: "white",
        padding: "20px",
        borderRadius: "16px",
        textAlign: "center",
      }}
    >
      <h3>{titulo}</h3>

      <h1
        style={{
          fontSize: "38px",
          marginTop: "10px",
        }}
      >
        {valor}
      </h1>
    </div>
  );
}
