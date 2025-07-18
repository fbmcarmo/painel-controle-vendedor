
export default function CardProduto({
  banner,
  titulo,
  estado,
  preco,
  descricao,
  categoria,
}) {
  return (
    <div className="w-full max-w-xs sm:max-w-sm md:max-w-[320px] min-h-[550px] flex flex-col rounded-2xl
     bg-white shadow-2xl border border-[#e5e7eb] hover:border-[#8B4513] transition-all duration-300 overflow-hidden">
      <div className="w-full h-[300px] rounded-t-2xl relative flex-shrink-0">
        <img
          src={banner}
          alt={titulo}
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <div
          style={{
            backgroundColor:
              estado === "Bom"
                ? "#3CE64AFF"
                : estado === "Muito bom"
                ? "#CCCCCC"
                : estado === "Aceitável"
                ? "#E0142CFF"
                : "#EB6D13FF",
          }}
          className="absolute top-2 left-2 px-2 py-0.5 rounded-xl"
        >
          <p
            style={{
              color:
                estado === "Bom"
                  ? "#06380AFF"
                  : estado === "Muito bom"
                  ? "#3C3B3BFF"
                  : estado === "Aceitável"
                  ? "#BD878EFF"
                  : "#9F4A0DFF",
            }}
            className="text-sm font-semibold"
          >
            {estado}
          </p>
        </div>
      </div>
      <div className="flex flex-col flex-grow justify-between px-4 py-3 gap-2">
        <div>
          <p className="text-[19px] font-bold text-[#3E2723] line-clamp-2">
            {titulo}
          </p>
          <p className="text-[15px] text-[#374167]">{descricao}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="px-2 py-0.5 bg-[#8B4513]/10 text-[#8B4513] text-[13px] rounded-lg font-semibold">
            {categoria}
          </span>
          <span className="text-xs text-gray-500 ml-2">Estado: {estado}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-[#8B4513]">{preco}</span>
        </div>
      </div>
      <div className="px-4 pb-4 mt-auto">
        <button
          className="w-full flex items-center justify-center gap-2 cursor-pointer
          text-white text-base font-semibold bg-[#955527] py-3 rounded-xl 
          hover:bg-[#7a431e] transition-colors duration-300 shadow-md"
          onClick={() => (window.location.href = "/carrinho")}
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}
