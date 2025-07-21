import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FiPlus, FiBox, FiLayout, FiLogOut } from "react-icons/fi";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [userName, setUserName] = useState("Usuário");
    const [userFoto, setUserFoto] = useState("");
    const [showTooltip, setShowTooltip] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const nome = localStorage.getItem("usuario");
        const foto = localStorage.getItem("fotoPerfil");
        if (nome) setUserName(nome);
        if (foto) setUserFoto(foto);
    }, []);

    async function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        localStorage.removeItem("userId");
        localStorage.removeItem("fotoPerfil");
        router.push("/login");
    }

    const handleMouseEnter = () => {
        const timeout = setTimeout(() => {
            setShowTooltip(true);
        }, 7000);
        setHoverTimeout(timeout);
    };

    const handleMouseLeave = () => {
        clearTimeout(hoverTimeout);
        setShowTooltip(false);
    };

    return (
        <header className="w-full bg-[#FBF4F4] flex flex-col md:flex-row items-center 
        justify-between px-6 md:px-8 py-4 gap-4 md:gap-0">
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => router.push("/")}
            >
                <img src="/logo.svg" alt="logo" className="w-12 h-12" />
            </div>
            <div className="flex items-center gap-2 md:gap-6 flex-wrap justify-center">
                <button
                    className={`flex items-center gap-2 font-medium px-4 py-2 rounded-md ${
                        router.pathname === "/dashboard"
                            ? "bg-[#F5EAEA] text-[#F24D0D]"
                            : "text-[#333] hover:text-[#555]"
                    }`}
                    onClick={() => router.push("/dashboard")}
                >
                    <FiLayout className="w-4 h-4" />
                    Dashboard
                </button>
                <button
                    className={`flex items-center gap-2 font-medium px-4 py-2 rounded-md ${
                        router.pathname === "/"
                            ? "bg-[#F5EAEA] text-[#F24D0D]"
                            : "text-[#333] hover:text-[#555]"
                    }`}
                    onClick={() => router.push("/")}
                >
                    <FiBox className="w-4 h-4" />
                    Produtos
                </button>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative">
                    <button
                        className="flex items-center gap-2 bg-[#F24D0D] hover:bg-[#F24D0D]/80
                         text-white px-4 py-2 rounded-md relative whitespace-nowrap"
                        onClick={() => router.push("/cadastrarProduto")}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <FiPlus className="w-4 h-4" />
                        Novo Produto
                        {showTooltip && (
                            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2
                             bg-black text-white text-xs px-3 py-1 rounded shadow">
                                Tá esperando o quê? Boraa moeer!! 🚀
                            </span>
                        )}
                    </button>
                </div>
                <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 px-3 py-2
                         bg-gray-100 rounded-md hover:bg-gray-200"
                    >
                        {userFoto && (
                            <img
                                src={userFoto}
                                alt="Foto Perfil"
                                className="w-8 h-8 rounded-full object-cover border border-gray-300"
                            />
                        )}
                        <span className="text-sm text-gray-700 max-w-[100px] truncate">{userName}</span>
                        <svg
                            className={`w-4 h-4 transform transition ${open ? "rotate-180" : "rotate-0"}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    {open && (
                        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                            <button
                                onClick={handleLogout}
                                className="w-full flex justify-between items-center px-4
                                 py-2 text-sm text-[#F24D0D] hover:bg-gray-100"
                            >
                                <span>Sair</span>
                                <FiLogOut className="w-4 h-4" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}







