<script>
	import { totalQuantity } from '../store.js';

	/**
	 * @type {boolean}
	 */
	export let openCart;
	export let setOpenCart;

	$: quantity = $totalQuantity;
</script>

<!-- Navbar -->
<div class="navbar fixed top-0 z-10 bg-base-100 px-10 md:px-32">
	<div class="flex-1">
		<a class="text-xl font-semibold" href="/">SFood</a>
	</div>
	<div class="flex-none">
		<div class="dropdown dropdown-end">
			<button class="indicator" on:click={() => setOpenCart(!openCart)}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
					/></svg
				>
				{#if quantity > 0}
					<span class="badge indicator-item badge-sm font-semibold">{quantity}</span>
				{/if}
			</button>
		</div>
	</div>
</div>
