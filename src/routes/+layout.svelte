<script lang="ts">
  import "../app.css";
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  let { children } = $props();
</script>

<div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
  <header class="sticky top-0 z-10 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
    <nav class="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
      <a href="/">
        GemK<span class="text-purple-600 dark:text-purple-400">.dev</span>
      </a>

      <div class="flex items-center gap-5">
        <a href="/">About Me</a>
        <a href="/resume">Resume</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
        <ThemeToggle />
      </div>
    </nav>
  </header>

  <main class="mx-auto w-full max-w-5xl px-4 py-10">
    {@render children()}
  </main>

  <footer class="border-t border-slate-200 py-8 dark:border-slate-800">
    <div class="mx-auto max-w-5xl px-4 text-sm text-slate-600 dark:text-slate-400">
      © {new Date().getFullYear()} GemK — Built with SvelteKit + Tailwind
    </div>
  </footer>
</div>