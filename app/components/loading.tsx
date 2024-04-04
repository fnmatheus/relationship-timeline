import { Hearts } from "react-loader-spinner"

export default function Loading() {
  return (
    <main className="h-screen bg-white text-black flex flex-col gap-4 justify-center items-center font-mono">
      <Hearts
        height={100}
        width={100}
        color="#7d373f"
      />
      <span className="drop-shadow-sub-title text-2xl">Carregando...</span>
    </main>
  );
}
