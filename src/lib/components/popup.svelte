<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import CrossIcon from "$lib/icons/CrossIcon.svelte";

  export let title: string = "SellerName";
  // export let country: string = "SellerName";
  // export let site: string = "SellerName";

  import { clickOutside } from "../../routes/clickOutside";
  import { scale } from "svelte/transition";

  const list = {
    "Trading Type": "Trading Type",
    Minimum: "Minimum",
    Max: "Max",
    Headline: "Headline",
    "Site Name": "Site Name",
    "Payment Method": "Payment Method",
    User: "User",
  };

  const dispatch = createEventDispatcher();

  function handleClickEvent() {
    dispatch("closePopup");
  }

  // function formatOfferProps(offer: any) {
  //   title = offer.user.username;\
  //   country = offer.country.country_name;

  //   site = offer.site_name;
  //   return {
  //     "Trading Type": offer.trading_type_name,
  //     Minimum: offer.min_trade_size,
  //     Max: offer.max_trade_size,
  //     Headline: offer.headline,
  //     "Site Name": offer.site_name,
  //     "Payment Method": offer.method.name,
  //     User: offer.user.username,
  //   };
  // }
</script>

<div
  use:clickOutside
  on:click_outside={handleClickEvent}
  transition:scale={{ duration: 200, start: 0.8, opacity: 0 }}
  class="shadow-custom card relative left-0 right-0 mx-auto w-[95%] bg-white p-4 dark:bg-[#374361] md:w-full"
>
  <dl class="list">
    <button
      on:click={handleClickEvent}
      class="absolute right-2 top-2 rounded-full p-1.5 text-black hover:bg-white/5 dark:text-white"
    >
      <CrossIcon />
    </button>
    <li class="flex items-center justify-start">
      <div
        class="text-figma-font !ml-0 flex flex-row !py-0 px-0 font-sans text-[17.97px] font-bold text-old-lavender dark:text-ghost-white"
      >
        {title}
      </div>
      <div class="gap-2">
        <span
          class="badge bg-anti-flash-white text-old-lavender dark:bg-independence dark:text-ghost-white"
          >Country</span
        >
        <span
          class="badge bg-anti-flash-white text-old-lavender dark:bg-independence dark:text-ghost-white"
          >Site</span
        >
      </div>
    </li>

    <hr class="!mt-4 !border-anti-flash-white" />

    <ul class="!mt-4 flex flex-col gap-2">
      {#each Object.entries(list) as [key, value]}
        <li class="flex font-sans text-old-lavender dark:text-ghost-white">
          {key}:
          {#if value === "Max"}
            <span
              class="badge ml-3 bg-anti-flash-white text-old-lavender dark:bg-independence dark:text-ghost-white"
            >
              {value}
            </span>
          {:else}
            <span class="ml-2">
              {value}
            </span>
          {/if}
        </li>
      {/each}
    </ul>
  </dl>
</div>

<style lang="postcss">
  .shadow-custom {
    box-shadow: 6.838072776794434px 5.470458507537842px 38.293209075927734px 0px
      #00000014;
  }

  .badge {
    @apply px-3 py-1.5 text-[14.37px] font-medium;
  }
</style>
