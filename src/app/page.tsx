export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-zinc-950 text-zinc-50 font-sans">
      <main className="flex flex-col items-center gap-6 text-center px-6">
        <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          IDLETIME
        </h1>
        <p className="max-w-md text-lg text-zinc-400">
          Welcome to IDLETIME. The project is up and running — start building from{" "}
          <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm text-zinc-200">
            src/app/page.tsx
          </code>
          .
        </p>
        <span className="mt-4 rounded-full border border-zinc-700 px-4 py-1.5 text-sm text-zinc-500">
          Next.js · Tailwind · Deployed on Vercel
        </span>
      </main>
    </div>
  );
}
