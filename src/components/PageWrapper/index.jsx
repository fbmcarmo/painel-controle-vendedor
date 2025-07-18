import Header from "../Header";

export default function PageWrapper({ children }) {
  return (
    <div className="w-full h-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full h-full min-h-screen bg-[#FBF4F4]">
        {children}
      </div>
    </div>
  );
}