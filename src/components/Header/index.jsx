{/*import profile from "/public/profile.png";*/} // Imagem fictícia, troque pelo caminho correto.

export default function Header() {
    return (
        <header className="w-full bg-[#FBF4F4] flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-2"
                onClick={() => (window.location.href = "/login")}
            >
                <img src="/logo.svg" alt="logo" className="w-12 h-12" />
            </div>
            <div className="flex items-center gap-6">
                <button className="text-[#333] font-medium hover:text-[#555]"
                    onClick={() => (window.location.href = "/dashboard")}
                >
                    Dashboard
                </button>
                <button className="text-[#333] font-medium hover:text-[#555]"
                    onClick={() => (window.location.href = "/")}
                >
                    Produtos
                </button>
            </div>
            <div className="flex items-center gap-4">
                <button className="bg-[#F24D0D] hover:bg-[#F24D0D]/80 text-white px-4 py-2 rounded-md"
                onClick={() => (window.location.href = "/cadastrarProduto")}
                >
                    Novo Produto
                </button>
                {/*<img src={profile} alt="Perfil" className="w-10 h-10 rounded-full object-cover" />*/}
            </div>
        </header>
    );
}