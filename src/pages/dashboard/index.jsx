import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const [metrics] = useState({
    vendidos: 125,
    anunciados: 78,
    visitantes: 3200,
  });

  const data = [
    { dia: "Seg", visitantes: 500 },
    { dia: "Ter", visitantes: 700 },
    { dia: "Qua", visitantes: 800 },
    { dia: "Qui", visitantes: 600 },
    { dia: "Sex", visitantes: 750 },
    { dia: "Sab", visitantes: 400 },
    { dia: "Dom", visitantes: 450 },
  ];

  return (
    <PageWrapper>
        <div className="min-h-screen bg-gray-100 p-10">
        <h1 className="text-3xl font-bold mb-10 text-[#1D1D1D]">Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-gray-600">Produtos Vendidos</h2>
            <p className="text-4xl font-bold text-[#F24D0D]">{metrics.vendidos}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-gray-600">Produtos Anunciados</h2>
            <p className="text-4xl font-bold text-[#F24D0D]">{metrics.anunciados}</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-gray-600">Visitantes</h2>
            <p className="text-4xl font-bold text-[#F24D0D]">{metrics.visitantes}</p>
            </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-[#1D1D1D] mb-4">Visitantes por Dia</h2>
            <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dia" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="visitantes" fill="#F24D0D" radius={[8, 8, 0, 0]} />
            </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    </PageWrapper>
  );
}
