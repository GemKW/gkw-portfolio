<script lang="ts">
  import { onMount } from "svelte";

  let isDark = false;

  function setTheme(dark: boolean) {
    isDark = dark;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  onMount(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved === "dark");
      return;
    }

    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    setTheme(!!prefersDark);
  });
</script>

<button
  type="button"
  class="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50
         dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
  on:click={() => setTheme(!isDark)}
  aria-label="Toggle dark mode"
>
  {#if isDark} 🌙 Dark {:else} ☀️ Light {/if}
</button>