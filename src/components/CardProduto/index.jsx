export default function CardProduto({
  banner,
  titulo,
  estado,
  preco,
  descricao,
  categoria,
}) {

  const bgEstado =
    estado === "Anunciado"
      ? "#0095E5"
      : estado === "Vendido"
      ? "#28A745"
      : estado === "Cancelado"
      ? "#666666"
      : "#DAEC11FF";

  const textColorEstado = bgEstado === "#DAEC11FF" ? "black" : "white";

  const bgCategoria =
    categoria === "Móvel"
      ? "#3D3D3D"
      : categoria === "Brinquedo"
      ? "#E6410FFF"
      : categoria === "Papelaria"
      ? "#11DAF4FF"
      : categoria === "Saúde e Beleza"
      ? "#ED0CB5FF"
      : categoria === "Utensílio"
      ? "#14ED0CFF"
      : categoria === "Vestuário"
      ? "#E9ED0CFF"
      : "#140808E9";

  const textColorCategoria = bgCategoria === "#E9ED0CFF" ? "black" : "white";

  return (
    <div className="w-full sm:w-[300px] md:w-[400px] flex flex-col rounded-2xl 
      bg-white shadow-2xl border border-[#e5e7eb] hover:border-[#8292f0] transition-all duration-300">
      <div className="w-full h-[220px] relative">
        <img
          src={banner}
          alt={titulo}
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <div className="absolute top-2 right-2 flex items-center gap-2">
          <span
            className="px-2 py-0.5 rounded-md text-xs font-semibold"
            style={{
              backgroundColor: bgEstado,
              color: textColorEstado,
            }}
          >
            {estado}
          </span>
          <span
            className="px-2 py-0.5 text-xs rounded-md font-semibold"
            style={{
              backgroundColor: bgCategoria,
              color: textColorCategoria,
            }}
          >
            {categoria}
          </span>
        </div>
      </div>
      <div className="flex flex-col px-4 py-3 gap-2">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
          <p className="text-base sm:text-lg font-bold text-[#3E2723] line-clamp-2">
            {titulo}
          </p>
          <span className="text-base sm:text-lg font-bold text-[#8B4513] whitespace-nowrap">
            R$ {preco}
          </span>
        </div>
        <p className="text-sm text-[#374167] leading-snug">{descricao}</p>
      </div>
    </div>
  );
}





