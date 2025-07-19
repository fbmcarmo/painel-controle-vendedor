import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    router.push("/");
  }

  return (
    <div className="relative flex w-full min-h-screen">
      {/* Logo fixado no topo */}
      <img
        src="/logo2.svg"
        alt="logo2"
        className="absolute top-6 left-6 w-[180px] h-auto"
      />

      {/* Lado esquerdo com imagem e cantos arredondados à esquerda */}
      <div className="w-1/2 flex items-center justify-center bg-[#F5F5F5] rounded-l-3xl overflow-hidden">
        <img
          src="/cover.jpg"
          alt="imagem-de-fundo"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Lado direito com o formulário e cantos arredondados à direita */}
      <div className="w-1/2 flex flex-col justify-center items-center p-20 bg-white rounded-r-3xl overflow-hidden">
        <h1 className="text-4xl font-bold mb-2 text-[#1D1D1D]">Acesse sua conta</h1>
        <p className="text-gray-500 mb-10">Informe seu e-mail e senha para entrar</p>

        <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex flex-col gap-6">
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

          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-md bg-[#F24D0D] hover:bg-[#F24D0D]/80 text-white font-semibold transition"
          >
            Entrar
          </button>
        </form>

        <div className="mt-10 text-center">
          <h3 className="text-gray-600 mb-3">Ainda não tem uma conta?</h3>
          <button
            onClick={() => router.push("/cadastrar")}
            className="border border-gray-300 px-6 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}






