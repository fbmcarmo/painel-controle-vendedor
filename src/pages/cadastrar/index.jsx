import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import instance from "@/api/instance";

import { FiUser, FiPhone, FiKey, FiEye, FiEyeOff, FiImage } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

export default function Cadastrar() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [fotoPerfil, setFotoPerfil] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!nome || !email || !senha || !confirmarSenha) {
      return toast.error("Preencha todos os campos");
    }

    if (senha.length < 8) {
      return toast.error("A senha deve conter no mínimo 8 caracteres");
    }

    if (senha !== confirmarSenha) {
      return toast.error("As senhas não coincidem");
    }

    try {
      await instance.post("/users", {
        banner: fotoPerfil,
        name: nome,
        telefone: telefone,
        email: email,
        password: senha,
      });

      toast.success("Cadastro realizado com sucesso!");
      router.push("/login");
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      toast.error("Erro ao cadastrar usuário. Verifique os dados ou tente novamente.");
    }
  }

  return (
    <div className="relative flex flex-col lg:flex-row w-full min-h-screen">
      <img src="/logo2.svg" alt="logo2" className="absolute top-4 left-4 w-[120px] md:w-[180px]" />    
      <div className="block md:hidden w-full h-48 bg-[#F5F5F5] overflow-hidden">
        <img
          src="/cover.jpg"
          alt="imagem-de-fundo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden md:flex w-1/2 items-center justify-center bg-[#F5F5F5] rounded-l-3xl overflow-hidden">
        <img
          src="/cover.jpg"
          alt="imagem-de-fundo"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 sm:p-10 md:p-16 lg:p-20 bg-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-[#1D1D1D]">Crie sua conta</h1>
        <p className="text-gray-500 mb-6 sm:mb-10 text-center">Informe os seus dados pessoais e de acesso</p>
        <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex flex-col gap-6">
          <h2 className="text-lg sm:text-xl font-semibold text-[#1D1D1D]">Perfil</h2>
          <div className="flex flex-col gap-2">
            <div className="w-24 h-24 sm:w-28 sm:h-28 bg-[#F5EAEA] rounded-lg overflow-hidden self-center">
              {fotoPerfil ? (
                <img src={fotoPerfil} alt="Foto Perfil" className="w-full h-full object-cover" />
              ) : (
                <div className="flex w-full h-full items-center justify-center">
                  <FiImage size={32} color="#F24D0D" />
                </div>
              )}
            </div>
            <input
              type="text"
              placeholder="Cole o link da sua foto"
              value={fotoPerfil}
              onChange={(e) => setFotoPerfil(e.target.value)}
              className="border-b border-gray-300 focus:border-[#F24D0D] outline-none px-3 py-2"
            />
            <label className="text-sm font-semibold text-gray-700">NOME</label>
            <div className="relative">
              <FiUser size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full border-b border-gray-300 focus:border-[#F24D0D] outline-none px-10 py-2"
              />
            </div>
            <label className="text-sm font-semibold text-gray-700">TELEFONE</label>
            <div className="relative">
              <FiPhone size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="(00) 00000-0000"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                className="w-full border-b border-gray-300 focus:border-[#F24D0D] outline-none px-10 py-2"
              />
            </div>
          </div>
          <h2 className="text-lg sm:text-xl font-semibold text-[#1D1D1D]">Acesso</h2>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-700">E-MAIL</label>
            <div className="relative">
              <MdEmail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                placeholder="Seu e-mail cadastrado"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b border-gray-300 focus:border-[#F24D0D] outline-none px-10 py-2"
              />
            </div>
            <label className="text-sm font-semibold text-gray-700">SENHA</label>
            <div className="relative">
              <FiKey size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha de acesso"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full border-b border-gray-300 focus:border-[#F24D0D] outline-none px-10 py-2 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#F24D0D] transition"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            <label className="text-sm font-semibold text-gray-700">CONFIRMAR SENHA</label>
            <div className="relative">
              <FiKey size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Confirme sua senha"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className="w-full border-b border-gray-300 focus:border-[#F24D0D] outline-none px-10 py-2 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#F24D0D] transition"
              >
                {showConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full py-3 rounded-md bg-[#F24D0D] hover:bg-[#F24D0D]/80 text-white font-semibold transition"
          >
            Cadastrar
          </button>
        </form>
        <div className="mt-8 sm:mt-10 text-center">
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






