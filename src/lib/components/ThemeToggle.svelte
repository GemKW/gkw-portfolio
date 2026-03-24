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
         transition-colors duration-300"
>

  <!-- Icon wrapper so animation stays clean -->
  <span class="relative inline-block w-5 h-5">
    <!-- Sun Icon -->
    <svg
      class="absolute inset-0 w-5 h-5 transition-all duration-300
             transform
             opacity-100 rotate-0 scale-100
             dark:opacity-0 dark:rotate-90 dark:scale-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 4.5V2m0 20v-2.5M4.5 12H2m20 0h-2.5M5.64 5.64 4.22 4.22m15.56 15.56-1.42-1.42M5.64 18.36l-1.42 1.42m15.56-15.56-1.42 1.42M12 6.5a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11z"/>
    </svg>

    <!-- Moon Icon -->
    <svg
      class="absolute inset-0 w-5 h-5 transition-all duration-300
             transform
             opacity-0 -rotate-90 scale-0
             dark:opacity-100 dark:rotate-0 dark:scale-100"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"/>
    </svg>
  </span>

  <!-- Text Label -->
  <span class="transition-opacity duration-300">
    {#if isDark}
      Dark
    {:else}
      Light
    {/if}
  </span>
</button>
