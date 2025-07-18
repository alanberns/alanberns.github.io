function App() {
  return (
    <body class="bg-gradient-to-br from-blue-200 via-white to-blue-200 text-gray-800 min-h-screen flex flex-col items-center justify-center text-center px-6">

      <h1 class="text-4xl font-bold mb-2">Hola, soy Alan 👨‍💻</h1>
      <p class="text-center max-w-md mb-8 text-lg">
        Esta página reúne mis proyectos, portfolio y perfiles profesionales. ¡Bienvenido!
      </p>

      <div class="space-y-4 w-full max-w-sm mx-auto">
        <a href="https://alanberns.github.io/portfolio" class="block w-full bg-sky-200 text-indigo-700 font-semibold py-3 px-6 rounded-full shadow hover:bg-white transition text-center">
          🎨 Portfolio
        </a>
        <a href="https://alanberns.github.io/ViteApp" class="block w-full bg-sky-200 text-indigo-700 font-semibold py-3 px-6 rounded-full shadow hover:bg-white transition text-center">
          💻 Página web empresa de software
        </a>
        <a href="https://www.linkedin.com/in/alan-berns/" target="_blank" class="block w-full bg-sky-200 text-indigo-700 font-semibold py-3 px-6 rounded-full shadow hover:bg-white transition text-center">
          🔗 LinkedIn
        </a>
        <a href="https://github.com/alanberns" target="_blank" class="block w-full bg-sky-200 text-indigo-700 font-semibold py-3 px-6 rounded-full shadow hover:bg-white transition text-center">
          🐙 GitHub
        </a>
      </div>
      <footer class="mt-12 text-sm text-gray-500">
        © 2025 — Hecho con 💙 por Alan Berns
      </footer>
    </body>

  )
}

export default App
