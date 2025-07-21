import { useState } from "react";
import { useRouter } from "next/router";
import instance from "@/api/instance";
import { toast } from "react-toastify";
import { MdEmail } from "react-icons/md";
import { FiKey, FiEye, FiEyeOff } from "react-icons/fi";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !senha) {
      toast.error("Preencha todos os campos!");
      return;
    }

    try {
      const response = await instance.post("/login", {
        email: email,
        password: senha,
      });

      await localStorage.setItem("token", response.data.token);

      if (response.data.user) {
        await localStorage.setItem("usuario", response.data.user.name);
        await localStorage.setItem("userId", response.data.user.id);
        await localStorage.setItem("fotoPerfil", response.data.user.banner);
      }

      toast.success("Login realizado com sucesso");
      window.location.href = "/";
    } catch (error) {
      console.log("Erro ao fazer login:", error);
      toast.error("Erro ao fazer login");
    }
  }

  return (
    <div className="relative flex flex-col md:flex-row w-full min-h-screen bg-white">
      <img
        src="/logo2.svg"
        alt="logo2"
        className="absolute top-6 left-6 w-[120px] sm:w-[180px] h-auto z-10"
      />
      <div className="w-full md:w-1/2 flex items-center justify-center bg-[#F5F5F5] rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none overflow-hidden order-1 md:order-1 h-64 md:h-auto">
        <img
          src="/cover.jpg"
          alt="imagem-de-fundo"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 sm:px-12 py-10 md:p-20 bg-white rounded-b-3xl md:rounded-r-3xl md:rounded-tl-none overflow-hidden order-2 md:order-2">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-[#1D1D1D] text-center md:text-left">
          Acesse sua conta
        </h1>
        <p className="text-sm sm:text-base text-gray-500 mb-10 text-center md:text-left">
          Informe seu e-mail e senha para entrar
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex flex-col gap-6">
          <label className="text-sm font-semibold text-gray-700">E-MAIL</label>
          <div className="relative">
            <MdEmail
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="email"
              placeholder="Seu e-mail cadastrado"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b border-gray-300 focus:border-[#F24D0D] outline-none px-10 py-2"
            />
          </div>
          <label className="text-sm font-semibold text-gray-700 mt-4">SENHA</label>
          <div className="relative">
            <FiKey
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type={mostrarSenha ? "text" : "password"}
              placeholder="Sua senha de acesso"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full border-b border-gray-300 focus:border-[#F24D0D] outline-none px-10 py-2 pr-10"
            />
            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#F24D0D] transition"
              aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
            >
              {mostrarSenha ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-md bg-[#F24D0D] hover:bg-[#F24D0D]/80 text-white font-semibold transition"
          >
            Acessar
          </button>
        </form>
        <div className="mt-10 text-center">
          <h3 className="text-gray-600 mb-3">Ainda não tem uma conta?</h3>
          <button
            onClick={() => router.push("/cadastrar")}
            className="border border-gray-300 px-6 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}












