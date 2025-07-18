export default function CardProduto({
  banner,
  titulo,
  estado,
  preco,
  descricao,
  categoria,
}) {
  return (
    <div className="w-full max-w-sm md:max-w-[400px] flex flex-col rounded-2xl 
      bg-white shadow-2xl border border-[#e5e7eb] hover:border-[#8B4513] transition-all duration-300">
      <div className="w-full h-[220px] relative">
        <img
          src={banner}
          alt={titulo}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute top-2 right-2 flex items-center gap-2">
          <span className="px-2 py-0.5 rounded-md text-xs text-white font-semibold"
            style={{
              backgroundColor:
                estado === "Anunciado"
                  ? "#0095E5"
                  : estado === "Vendido"
                  ? "#28A745"
                  : estado === "Cancelado"
                  ? "#666666"
                  : "#DAEC11FF",
            }}>
            {estado}
          </span>
          <span className="px-2 py-0.5 bg-[#8B4513]/10 text-white text-xs rounded-md font-semibold"
            style={{
              backgroundColor:
                categoria === "Móvel"
                  ? "#3D3D3D"
                  : categoria === "Brinquedo"
                  ? "#E6410FFF"
                  : categoria === "Papelaria"
                  ? "#11DAF4FF"
                  : categoria === "Saude e beleza"
                  ? "#ED0CB5FF"
                  : categoria === "Utensilio"
                  ? "#14ED0CFF"
                  : categoria === "Vestuario"
                  ? "#E9ED0CFF"
                  : "#140808E9",
            }}>
            {categoria}
          </span>
        </div>
      </div>
      <div className="flex flex-col px-4 py-3 gap-1">
        <div className="flex items-start justify-between">
          <p className="text-[18px] font-bold text-[#3E2723] max-w-[70%] line-clamp-2">
            {titulo}
          </p>
          <span className="text-lg font-bold text-[#8B4513] whitespace-nowrap">
            R$ {preco}
          </span>
        </div>
        <p className="text-[14px] text-[#374167] leading-snug">{descricao}</p>
      </div>
    </div>
  );
}




