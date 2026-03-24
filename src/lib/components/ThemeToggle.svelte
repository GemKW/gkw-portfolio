<script lang="ts">
  import { onMount } from "svelte";

  let isDark = false;

  function setTheme(dark: boolean) {
    isDark = dark;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  onMount(() => {
    // Check the actual HTML root — the source of truth
    const hasDark = document.documentElement.classList.contains("dark");

    if (hasDark) {
      isDark = true;
      return;
    }

    // Otherwise fallback to saved preference or system preference
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved === "dark");
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark);
  });
</script>

<button
  type="button"
  on:click={() => setTheme(!isDark)}
  class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium
         border border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-700
         text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800
         transition-all duration-300"
>
  {#if isDark}
    <span class="text-xl">🌙</span>
    <span>Dark</span>
  {:else}
    <span class="text-xl">🌞</span>
    <span>Light</span>
  {/if}
</button>
