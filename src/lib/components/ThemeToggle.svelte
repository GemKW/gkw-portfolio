<script lang="ts">
  import { onMount } from "svelte";

  let isDark = false;

  // Set theme and icon/label
  function setTheme(dark: boolean) {
    isDark = dark;
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }

  // On load, detect the REAL mode
  onMount(() => {
    // 1. If <html> already has dark class, use it
    if (document.documentElement.classList.contains("dark")) {
      isDark = true;
      return;
    }

    // 2. Otherwise check saved preference
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved === "dark");
      return;
    }

    // 3. Otherwise fall back to system preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(systemPrefersDark);
  });
</script>

<button
  on:click={() => setTheme(!isDark)}
  class="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium
         border border-slate-300 bg-white dark:bg-slate-900 dark:border-slate-700
         text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-800
         transition-all duration-300"
>
  <!-- EMOJIS + LABEL -->
  {#if isDark}
    <span class="text-xl">🌙</span>
    <span>Dark</span>
  {:else}
    <span class="text-xl">🌞</span>
    <span>Light</span>
  {/if}
</button>
