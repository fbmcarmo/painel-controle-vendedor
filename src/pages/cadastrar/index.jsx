import { useState } from "react";
import { useRouter } from "next/router";

export default function CadastroUsuario() {
    const [fotoPerfil, setFotoPerfil] = useState("");
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    const router = useRouter();

    function handleSubmit(event) {
        event.preventDefault();

        if (!fotoPerfil || !nome || !telefone || !email || !senha || !confirmarSenha) {
            alert("Preencha todos os campos!");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        console.log({
            fotoPerfil,
            nome,
            telefone,
            email,
            senha
        });

        router.push("/");
    }

    return (
        <div className="relative flex w-full min-h-screen">
            {/* Logo no canto superior esquerdo */}
            <img
                src="/logo2.svg"
                alt="logo2"
                className="absolute top-6 left-6 w-[180px] h-auto"
            />

            {/* Lado esquerdo com imagem */}
            <div className="w-1/2 flex items-center justify-center bg-[#F5F5F5] rounded-l-3xl overflow-hidden">
                <img
                    src="/cover.jpg"
                    alt="imagem-de-fundo"
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* Lado direito com formulário */}
            <div className="w-1/2 flex flex-col justify-center items-center p-20 bg-white">
                <h1 className="text-4xl font-bold mb-2 text-[#1D1D1D]">Crie sua conta</h1>
                <p className="text-gray-500 mb-10">Informe os seus dados pessoais e de acesso</p>

                <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex flex-col gap-6">

                    {/* Perfil */}
                    <h2 className="text-xl font-semibold text-[#1D1D1D]">Perfil</h2>

                    <div className="flex flex-col gap-2">
                        <div className="w-[120px] h-[120px] bg-[#F5EAEA] rounded-lg overflow-hidden self-center">
                            {fotoPerfil ? (
                                <img src={fotoPerfil} alt="Foto Perfil" className="w-full h-full object-cover" />
                            ) : (
                                <div className="flex w-full h-full items-center justify-center text-gray-400 text-sm">Foto</div>
                            )}
                        </div>
                        <input
                            type="text"
                            placeholder="Cole o link da sua foto"
                            value={fotoPerfil}
                            onChange={(e) => setFotoPerfil(e.target.value)}
                            className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Nome completo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2"
                        />
                        <input
                            type="text"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2"
                        />
                    </div>

                    {/* Acesso */}
                    <h2 className="text-xl font-semibold text-[#1D1D1D]">Acesso</h2>

                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2"
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2"
                        />
                        <input
                            type="password"
                            placeholder="Confirmar senha"
                            value={confirmarSenha}
                            onChange={(e) => setConfirmarSenha(e.target.value)}
                            className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2"
                        />
                    </div>

                    <button
                        type="submit"
                        className="mt-6 w-full py-3 rounded-md bg-[#F24D0D] hover:bg-[#F24D0D]/80 text-white font-semibold transition"
                    >
                        Cadastrar
                    </button>
                </form>

                <div className="mt-10 text-center">
                    <h3 className="text-gray-600 mb-3">Já tem uma conta?</h3>
                    <button
                        onClick={() => router.push("/login")}
                        className="border border-gray-300 px-6 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
                    >
                        Acessar
                    </button>
                </div>
            </div>
        </div>
    );
}

