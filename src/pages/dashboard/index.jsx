import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [metrics] = useState({
    vendidos: 125,
    anunciados: 78,
    visitantes: 3200,
  });

  // Dados de visitantes por dia (30 dias)
  const data = [
    { dia: "01", visitantes: 100 },
    { dia: "02", visitantes: 120 },
    { dia: "03", visitantes: 90 },
    { dia: "04", visitantes: 140 },
    { dia: "05", visitantes: 160 },
    { dia: "06", visitantes: 180 },
    { dia: "07", visitantes: 130 },
    { dia: "08", visitantes: 150 },
    { dia: "09", visitantes: 170 },
    { dia: "10", visitantes: 200 },
    { dia: "11", visitantes: 190 },
    { dia: "12", visitantes: 210 },
    { dia: "13", visitantes: 220 },
    { dia: "14", visitantes: 230 },
    { dia: "15", visitantes: 240 },
    { dia: "16", visitantes: 260 },
    { dia: "17", visitantes: 270 },
    { dia: "18", visitantes: 280 },
    { dia: "19", visitantes: 300 },
    { dia: "20", visitantes: 310 },
    { dia: "21", visitantes: 320 },
    { dia: "22", visitantes: 330 },
    { dia: "23", visitantes: 340 },
    { dia: "24", visitantes: 350 },
    { dia: "25", visitantes: 360 },
    { dia: "26", visitantes: 370 },
    { dia: "27", visitantes: 380 },
    { dia: "28", visitantes: 390 },
    { dia: "29", visitantes: 400 },
    { dia: "30", visitantes: 410 },
  ];

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-3xl font-bold mb-10 text-[#1D1D1D]">Dashboard</h1>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Lado esquerdo - cards métricos */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-200">
              <h2 className="text-blue-600 font-semibold mb-2">Produtos Vendidos</h2>
              <p className="text-4xl font-bold text-blue-400">{metrics.vendidos}</p>
              <p className="text-sm text-blue-300 mt-1">Detalhes adicionais aqui</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-200">
              <h2 className="text-blue-600 font-semibold mb-2">Produtos Anunciados</h2>
              <p className="text-4xl font-bold text-blue-400">{metrics.anunciados}</p>
              <p className="text-sm text-blue-300 mt-1">Detalhes adicionais aqui</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-blue-200">
              <h2 className="text-blue-600 font-semibold mb-2">Pessoas Visitantes</h2>
              <p className="text-4xl font-bold text-blue-400">{metrics.visitantes}</p>
              <p className="text-sm text-blue-300 mt-1">Detalhes adicionais aqui</p>
            </div>
          </div>

          {/* Lado direito - gráfico */}
          <div className="bg-white p-8 rounded-xl shadow-md md:w-2/3">
            <h2 className="text-xl font-bold text-[#1D1D1D] mb-6">Visitantes por Dia do Mês</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#E0F2FE" />
                <XAxis dataKey="dia" stroke="#60A5FA" />
                <YAxis stroke="#60A5FA" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="visitantes"
                  stroke="#60A5FA"
                  strokeWidth={3}
                  dot={{ r: 5, fill: "#3B82F6" }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}



