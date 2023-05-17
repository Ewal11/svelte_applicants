<script lang="ts">
  import { popup, type PopupSettings } from "@skeletonlabs/skeleton";
  import { ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
  import { SlideToggle } from "@skeletonlabs/skeleton";
  import FilterIcon from "$lib/icons/FilterIcon.svelte";
  import ColumnsIcon from "$lib/icons/ColumnsIcon.svelte";

  // Props
  export let target: "columnPopup" | "filterPopup"; // Defines if the button should be a column or filter button
  export let title: string = "Placeholder"; // Name to be diplayed on the button

  let filterPopup: PopupSettings = {
    event: "click",
    target: target,
    placement: "bottom",
  };

  let checkedValue = false;
</script>

<button
  class="btn btn-sm flex min-w-[45px] flex-row justify-start rounded-md border-2 border-anti-flash-white py-3 hover:border-gray-300 dark:border-transparent dark:bg-independence md:px-4"
  use:popup={filterPopup}
>
  <span class="text-old-lavender dark:text-ghost-white">
    {#if target === "filterPopup"}
      <FilterIcon />
    {:else}
      <ColumnsIcon />
    {/if}
  </span>
  <span
    class="font-sans text-[15.77px] font-medium text-old-lavender dark:text-ghost-white"
  >
    {title}
  </span>
</button>

{#if target === "filterPopup"}
  <div
    class="list-filters bg-white dark:bg-independence"
    data-popup="filterPopup"
  >
    <ListBox rounded="rounded-none">
      <ListBoxItem
        on:click={() => (checkedValue = !checkedValue)}
        bind:group={checkedValue}
        active=""
        hover=""
        name="medium"
        value="books"
      >
        <svelte:fragment slot="lead">
          <SlideToggle
            bind:checked={checkedValue}
            name="slider-large"
            value="books"
            active="bg-[#00AEEF]"
            size="sm"
          />
        </svelte:fragment>
        TitlePlaceholder
      </ListBoxItem>
    </ListBox>
  </div>
{:else}
  <div
    class="list-filters bg-white dark:bg-independence"
    data-popup="columnPopup"
  >
    <ListBox rounded="rounded-none">
      <ListBoxItem
        on:click={() => (checkedValue = !checkedValue)}
        bind:group={checkedValue}
        active=""
        hover=""
        name="medium"
        value="books"
      >
        <svelte:fragment slot="lead">
          <SlideToggle
            bind:checked={checkedValue}
            name="slider-large"
            value="books"
            active="bg-[#00AEEF]"
            size="sm"
          />
        </svelte:fragment>
        TitlePlaceholder
      </ListBoxItem>
    </ListBox>
  </div>
{/if}

<style lang="postcss">
  .list-filters {
    box-shadow: 5.7086615562438965px 4.566929340362549px 31.968505859375px 0px
      #00000014;

    @apply w-60 rounded-lg py-2;
  }
</style>
