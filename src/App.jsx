import React from "react";

export default function App() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <header className="mb-8 text-center">
        <img
          src="https://lucide.dev/icon/shield.svg"
          alt="Shield logo"
          className="mx-auto mb-4 w-16 h-16"
        />
        <h1 className="text-3xl font-bold">Ajay's Cybersecurity Blog</h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-300">
          Accessible cybersecurity blog and mentoring by navakt.
        </p>
      </header>
      <section className="w-full max-w-2xl">
        <article className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-6 shadow mb-6">
          <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
          <p>
            This blog will share accessible, actionable cybersecurity tips and stories. Stay tuned for updates!
          </p>
        </article>
        {/* Add more articles or blog post components here */}
      </section>
      <footer className="mt-12 text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} Ajay (navakt). All rights reserved.
      </footer>
    </main>
  );
}
