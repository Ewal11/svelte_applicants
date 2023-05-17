<script lang="ts">
  import { LightSwitch } from "@skeletonlabs/skeleton";
  import FilterButton from "../lib/components/filterButton.svelte";
  import Popup from "../lib/components/popup.svelte";

  let showPopup: boolean = true;

  function handleClickEvent() {
    showPopup = !showPopup;
  }
</script>

<div
  class="container card mx-auto mt-4 flex max-w-[50%] flex-col items-center justify-center !bg-gray-50 pt-8 dark:!bg-[#2C3753]"
>
  <div class="mb-8 space-y-5">
    <h1 class="h1">Tradingbro.io Application</h1>

    <div class="flex gap-4 py-12">
      Lightswitch<LightSwitch ring="ring-white" width="w-[48px]" />
    </div>

    <div>
      The figma file can be found
      <a
        class="underline"
        href="https://www.figma.com/file/elhS7rfboC3aVdUoa19lJ5/tradingbro.io-(2)?type=design&node-id=101%3A2934&t=8BraDmbdqSoVPbAr-1"
        >Here</a
      >

      <p class="">The tasks can be found at the readme of the repo</p>

      <p class="mb-8 mt-4">
        Fork the repo and let me know once you submitted your branch
      </p>
      <hr />
    </div>

    <h2 class="text-2xl">Button</h2>
    <div
      class="card mb-12 mr-auto flex gap-4 border bg-white p-4 dark:border-surface-700"
    >
      <FilterButton title="Filters" target="filterPopup" />
      <FilterButton title="Columns" target="columnPopup" />
    </div>

    <hr />
    <h2 class="my-4 text-2xl">Popup</h2>

    {#if showPopup}
      <Popup on:closePopup={handleClickEvent} />
    {:else}
      <button
        on:click={handleClickEvent}
        class="btn border-2 border-anti-flash-white bg-white font-medium text-old-lavender hover:border-gray-300 dark:border-transparent dark:bg-independence dark:text-ghost-white dark:hover:bg-white/10"
        >Show popup</button
      >
    {/if}
  </div>
</div>
