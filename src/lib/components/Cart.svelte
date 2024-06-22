<script>
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import { cartItem, totalPrice } from '../store.js';
	import { removeItemFromCart, formatRupiah, createSnapMidtrans } from '../utils.js';

	/**
	 * @type {boolean}
	 */
	export let openCart;
	export let loading;
	export let setOpenCart;

	$: items = $cartItem;
	$: price = $totalPrice;
</script>

{#if openCart}
	<div class="fixed z-20 h-full w-full bg-black bg-opacity-30">
		<section
			transition:slide={{ delay: 250, duration: 300, easing: quintOut, axis: 'x' }}
			class="fixed right-0 top-0 z-30 h-full overflow-scroll bg-base-100 p-4 shadow-xl {openCart
				? ''
				: 'hidden'}"
		>
			<div class="relative h-full w-96 pb-5">
				<h1 class="mb-3 text-3xl font-semibold">Your Cart :</h1>
				<button
					class="absolute right-5 top-2 h-auto w-6 text-lg font-bold"
					on:click={() => setOpenCart(!openCart)}>X</button
				>
				{#each items as product}
					<div class="grid grid-cols-1">
						<div class="mb-3 w-full">
							<div class="card flex flex-row bg-base-100 px-3 shadow-md">
								<button
									class="btn btn-circle absolute right-5 top-5 bg-red-600 text-white"
									on:click={() => removeItemFromCart(product)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-trash"
										viewBox="0 0 16 16"
									>
										<path
											d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
										/>
										<path
											d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
										/>
									</svg>
								</button>
								<figure class="flex-shrink-0">
									<img
										src={product.image}
										alt={product.title}
										class="h-16 w-full object-cover object-top"
									/>
								</figure>
								<div class="card-body">
									<h2 class="text-lg">{product.title}</h2>
									<p class="card-price text-lg font-semibold text-gray-800">
										{formatRupiah(product.price)}
									</p>
									<p class="card-price text-lg font-semibold text-gray-800">
										Quantity : {product.quantity}
									</p>
								</div>
							</div>
						</div>
					</div>
				{:else}
					<div class="flex items-center justify-center h-full">
						<p class="font-semibold text-2xl">Empty Cart</p>
					</div>
				{/each}
				{#if items.length > 0}
					<div class="my-4 flex flex-col gap-3 pb-10">
						<p class="text-lg">
							Total Price : <span class="font-semibold">{formatRupiah(price)}</span>
						</p>
						{#if loading}
							<button class="btn btn-primary w-full" disabled>Purchase</button>
						{:else}
							<button
								class="btn btn-primary w-full"
								on:click={() => createSnapMidtrans(price, items)}>Purchase</button
							>
						{/if}
					</div>
				{/if}
			</div>
		</section>
	</div>
{/if}
