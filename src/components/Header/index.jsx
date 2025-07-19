import { useState, useEffect } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    var userName = "Usuário";

    useEffect(() => {
        userName = localStorage.getItem("usuario");
    }, []);

    async function handleLogout() {
        // Aqui você pode apagar o token, limpar o localStorage etc.
        await localStorage.removeItem("token");
        await localStorage.removeItem("usuario");
        await localStorage.removeItem("userId");
        window.location.href = "/login";

    }

    return (
        <header className="w-full bg-[#FBF4F4] flex items-center justify-between px-8 py-4">
            <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => (window.location.href = "/")}
            >
                <img src="/logo.svg" alt="logo" className="w-12 h-12" />
            </div>

            <div className="flex items-center gap-6">
                <button
                    className="text-[#333] font-medium hover:text-[#555]"
                    onClick={() => (window.location.href = "/dashboard")}
                >
                    Dashboard
                </button>
                <button
                    className="text-[#333] font-medium hover:text-[#555]"
                    onClick={() => (window.location.href = "/")}
                >
                    Produtos
                </button>
            </div>

            <div className="relative flex items-center gap-4">
                <button
                    className="bg-[#F24D0D] hover:bg-[#F24D0D]/80 text-white px-4 py-2 rounded-md"
                    onClick={() => (window.location.href = "/cadastrarProduto")}
                >
                    Novo Produto
                </button>

                <div className="relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                    >
                        <span className="text-sm text-gray-700">{userName}</span>
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
                                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
