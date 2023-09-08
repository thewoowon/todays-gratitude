import GPT from "./components/GPT";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="font-bold text-3xl">오늘의 감사</div>
      <GPT />
    </main>
  );
}
