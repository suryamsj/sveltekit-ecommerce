<script>
	import { addToLocalStorage, formatRupiah } from '../utils.js';

	export let products;
</script>

<!-- Main -->
<main class="container relative mx-auto p-4 pt-24">
	<div class="-mx-2 flex flex-wrap">
		{#each products as product}
			<div class="mb-6 w-full px-2 sm:w-1/2 md:w-1/3">
				<div class="card flex h-full flex-col bg-base-100 shadow-md">
					<figure class="flex-shrink-0">
						<img
							src={product.image}
							alt={product.title}
							class="h-64 w-full object-cover object-top"
						/>
					</figure>
					<div class="card-body flex flex-grow flex-col justify-between">
						<div>
							<h2 class="card-title">{product.title}</h2>
							<p class="card-price text-xl font-semibold text-gray-800">
								{formatRupiah(product.price)}
							</p>
						</div>
						<div class="card-actions mt-4">
							<button class="btn btn-primary w-full" on:click={() => addToLocalStorage(product)}
								>Add to cart</button
							>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</main>
