import instance from "@/api/instance";
import { useEffect, useState } from "react";
import PageWrapper from "@/components/PageWrapper";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { FiArrowLeft, FiCheck } from "react-icons/fi";
import { ImBlocked } from "react-icons/im";

export default function EditarProduto() {
  const [imagemPreview, setImagemPreview] = useState("");
  const [banner, setBanner] = useState("");
  const [titulo, setTitulo] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [descricao, setDescricao] = useState("");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) fetchProduto();
  }, [id]);

  async function fetchProduto() {
    try {
      const response = await instance.get(`/produtos/${id}`);
      const produto = response.data;
      setBanner(produto.banner);
      setImagemPreview(produto.banner);
      setTitulo(produto.titulo);
      setPreco(produto.preco);
      setCategoria(produto.categoria);
      setEstado(produto.estado);
      setDescricao(produto.descricao);
    } catch (error) {
      console.error(error);
      toast.error("Erro ao buscar produto");
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!titulo || !preco || !categoria || !estado || !descricao || !banner) {
      toast.error("Preencha todos os campos!");
      return;
    }
    try {
      await instance.put(`/produtos/${id}`, {
        banner,
        titulo,
        estado,
        preco,
        categoria,
        descricao,
      });
      toast.success("Produto atualizado com sucesso!");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao atualizar produto!");
    }
  }

  async function handleMarkAsSold() {
    try {
      await instance.put(`/produtos/${id}`, {
        banner,
        titulo,
        estado: "Vendido",
        preco,
        categoria,
        descricao,
      });
      toast.success("Produto marcado como vendido!");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao marcar como vendido!");
    }
  }

  async function handleDeactivateAd() {
    try {
      await instance.put(`/produtos/${id}`, {
        banner,
        titulo,
        estado: "Cancelado",
        preco,
        categoria,
        descricao,
      });
      toast.success("Anúncio desativado com sucesso!");
      router.push("/");
    } catch (error) {
      console.error(error);
      toast.error("Erro ao desativar anúncio!");
    }
  }

  function handleCancel() {
    router.push("/");
  }

  return (
    <PageWrapper>
      <form onSubmit={handleSubmit}>
        <div className="w-full min-h-screen flex flex-col items-center bg-[#FBF4F4] p-4 sm:p-10">
          <section className="w-full flex flex-col gap-4 sm:gap-6 max-w-[1200px]">
            <button
              onClick={() => router.back()}
              type="button"
              className="flex items-center gap-2 text-[#F24D0D] font-medium"
            >
              <FiArrowLeft size={18} />
              Voltar
            </button>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1D1D1D]">Editar Produto</h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
              <p className="text-lg sm:text-2xl text-[#666666]">Gerencie as informações do produto cadastrado</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
                <button
                  onClick={handleMarkAsSold}
                  type="button"
                  className="flex items-center gap-2 text-[#F24D0D] font-medium transition hover:underline"
                >
                  <FiCheck size={18} />
                  Marcar como vendido
                </button>
                <button
                  onClick={handleDeactivateAd}
                  type="button"
                  className="flex items-center gap-2 text-[#F24D0D] font-medium transition hover:underline"
                >
                  <ImBlocked size={18} />
                  Desativar anúncio
                </button>
              </div>
            </div>
          </section>
          <div className="flex flex-col lg:flex-row w-full max-w-[1200px] gap-10 px-4 sm:px-10 py-10">
            <div className="flex flex-col gap-2 w-full lg:w-[300px]">
              <div className="w-full h-[300px] bg-[#F5EAEA] rounded-xl shadow-md flex items-center justify-center text-center text-[#333] font-semibold cursor-pointer overflow-hidden">
                {imagemPreview ? (
                  <img src={imagemPreview} alt="Pré-visualização" className="w-full h-full object-cover rounded-xl" />
                ) : (
                  <span>Imagem do produto</span>
                )}
              </div>
              <input
                type="text"
                placeholder="Cole o link da imagem"
                className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2 bg-transparent"
                value={banner}
                onChange={(e) => {
                  setImagemPreview(e.target.value);
                  setBanner(e.target.value);
                }}
              />
            </div>
            <div className="flex-1 bg-white rounded-xl shadow-md p-6 sm:p-8 flex flex-col gap-6">
              <h2 className="text-lg sm:text-xl font-bold text-[#1D1D1D]">Dados do produto</h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col flex-1">
                    <label className="text-sm text-gray-700 mb-1">Título</label>
                    <input
                      type="text"
                      placeholder="Nome do produto"
                      value={titulo}
                      onChange={(e) => setTitulo(e.target.value)}
                      className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2 bg-transparent"
                    />
                  </div>
                  <div className="flex flex-col w-full sm:w-[150px]">
                    <label className="text-sm text-gray-700 mb-1">Preço</label>
                    <input
                      type="text"
                      placeholder="R$ 0,00"
                      value={preco}
                      onChange={(e) => setPreco(e.target.value)}
                      className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2 bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-gray-700 mb-1">Descrição</label>
                  <textarea
                    placeholder="Escreva detalhes sobre o produto, tamanho, características"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    className="w-full border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2 resize-none bg-transparent"
                    rows={4}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex flex-col flex-1">
                    <label className="text-sm text-gray-700 mb-1">Status</label>
                    <select
                      className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2 bg-transparent text-gray-500"
                      value={estado}
                      onChange={(e) => setEstado(e.target.value)}
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="Anunciado">Anunciado</option>
                      <option value="Vendido">Vendido</option>
                      <option value="Cancelado">Cancelado</option>
                    </select>
                  </div>
                  <div className="flex flex-col flex-1">
                    <label className="text-sm text-gray-700 mb-1">Categoria</label>
                    <select
                      className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2 bg-transparent text-gray-500"
                      value={categoria}
                      onChange={(e) => setCategoria(e.target.value)}
                    >
                      <option value="" disabled>Selecione</option>
                      <option value="Móvel">Móvel</option>
                      <option value="Brinquedo">Brinquedo</option>
                      <option value="Papelaria">Papelaria</option>
                      <option value="Saúde e Beleza">Saúde e Beleza</option>
                      <option value="Utensílio">Utensílio</option>
                      <option value="Vestuário">Vestuário</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-end pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-6 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 rounded-md bg-[#F24D0D] hover:bg-[#F24D0D]/80 text-white font-semibold transition"
                >
                  Salvar alterações
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </PageWrapper>
  );
}


