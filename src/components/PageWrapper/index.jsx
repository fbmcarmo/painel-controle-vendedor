import Header from "../Header";

export default function PageWrapper({ children }) {
  return (
    <div className="w-full min-h-screen flex flex-col bg-[#FBF4F4] overflow-x-hidden">
      <Header />
      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  );
}
