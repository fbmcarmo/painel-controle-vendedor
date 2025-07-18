import CardProduto from "@/components/CardProduto";
import PageWrapper from "@/components/PageWrapper";
import { useEffect, useState } from "react";
import instance from "@/api/instance";
import { useRouter } from "next/router";

export default function Home() {

  const router = useRouter();
  const [produtos, setProdutos] = useState([]);
  const [usuarioId, setUsuarioId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const idUser = localStorage.getItem("userId");

    if (!token || !idUser) {
      router.push("/login");
      return;
    }

    setUsuarioId(idUser);
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    setLoading(true);
    const idUser = localStorage.getItem("userId");

    try {
      const response = await instance.get(`/produtos`);
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      toast.error("Erro ao carregar seus produtos.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <PageWrapper>
      <div className="w-full min-h-screen flex flex-col items-center bg-[#FBF4F4]">
        <section className="w-full flex flex-col p-30">
          <h1 className="text-3xl font-bold text-[#1D1D1D]">Seus produtos</h1>
          <p className="text-2xl text-[#666666]">Acesse e gerencie a sua lista de produtos à venda</p>
        </section>
        <section>
          <CardProduto 
            banner={produtos.banner}
            titulo={produtos.titulo}
            estado={produtos.estado}
            preco={produtos.preco}
            descricao={produtos.descricao}
            categoria={produtos.categoria}
          />
        </section>
      </div>
    </PageWrapper>
  )
}
