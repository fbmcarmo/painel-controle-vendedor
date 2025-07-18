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

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  // filtros aplicados
  const [searchFiltro, setSearchFiltro] = useState("");
  const [statusFiltro, setStatusFiltro] = useState("");

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
    try {
      const response = await instance.get(`/produtos`);
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  }

  function aplicarFiltro() {
    setSearchFiltro(search);
    setStatusFiltro(status);
  }

  const produtosFiltrados = produtos.filter((produto) => {
    const matchNome = produto.titulo.toLowerCase().includes(searchFiltro.toLowerCase());
    const matchStatus = statusFiltro ? produto.estado === statusFiltro : true;
    return matchNome && matchStatus;
  });

  return (
    <PageWrapper>
      <div className="w-full min-h-screen flex flex-col items-center bg-[#FBF4F4]">
        <section className="w-full flex flex-col items-start p-10 max-w-[1200px]">
          <h1 className="text-3xl font-bold text-[#1D1D1D]">Seus produtos</h1>
          <p className="text-2xl text-[#666666]">Acesse e gerencie a sua lista de produtos à venda</p>
        </section>

        <div className="flex w-full max-w-[1200px] gap-8 px-10 pb-20">
          <aside className="w-[340px] bg-white rounded-xl p-5 shadow-md h-fit">
            <h2 className="font-semibold text-lg mb-4">Filtrar</h2>
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Pesquisar"
                className="w-full border-0 border-b-2 border-gray-300 focus:border-[#F24D0D] outline-none px-0 py-2 bg-transparent"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                className={`w-full border-0 border-b-2 border-gray-300 focus:border-[#F24D0D] outline-none px-0 py-2 bg-transparent ${!status ? "text-gray-400" : "text-black"}`}
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="" disabled>Status</option>
                <option value="Anunciado">Anunciado</option>
                <option value="Vendido">Vendido</option>
                <option value="Cancelado">Cancelado</option>
              </select>

              <button
                onClick={aplicarFiltro}
                className="w-full bg-[#F24D0D] hover:bg-[#F24D0D]/80 text-white rounded-md py-2 font-semibold transition"
              >
                Aplicar Filtro
              </button>
            </div>
          </aside>

          <section className="flex flex-wrap gap-6 justify-start w-full items-stretch">
            {produtosFiltrados.map((produto) => (
              <CardProduto
                key={produto.id}
                banner={produto.banner}
                titulo={produto.titulo}
                estado={produto.estado}
                preco={produto.preco}
                descricao={produto.descricao}
                categoria={produto.categoria}
              />
            ))}
          </section>
        </div>
      </div>
    </PageWrapper>
  );
}






