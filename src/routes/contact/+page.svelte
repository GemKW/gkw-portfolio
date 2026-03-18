<script lang="ts">
  import type { ActionData } from './$types';
  let { form } = $props<{ form: ActionData }>();
</script>

<h1 class="text-3xl font-bold tracking-tight">Contact</h1>
<p class="mt-2 text-slate-600 dark:text-slate-300">
  Send a message and I will happily get back to you soon 🤓
</p>

{#if form?.success}
  <div class="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/40 dark:text-emerald-200">
    ✅ Thanks! Your message was received.
  </div>
{/if}

{#if form?.error}
  <div class="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-900 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-200">
    ❌ {form.error}
  </div>
{/if}

<form method="POST" class="mt-8 grid gap-4 max-w-xl">
  <div class="grid gap-2">
    <label class="text-sm font-semibold" for="name">Name</label>
    <input id="name" name="name" required
      class="rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
      value={form?.name ?? ""} />
  </div>

  <div class="grid gap-2">
    <label class="text-sm font-semibold" for="email">Email</label>
    <input id="email" name="email" type="email" required
      class="rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900"
      value={form?.email ?? ""} />
  </div>

  <div class="grid gap-2">
    <label class="text-sm font-semibold" for="message">Message</label>
    <textarea id="message" name="message" rows="6" required
      class="rounded-lg border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">{form?.message ?? ""}</textarea>
  </div>

  <button type="submit"
    class="rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-500">
    Send message
  </button>
</form>