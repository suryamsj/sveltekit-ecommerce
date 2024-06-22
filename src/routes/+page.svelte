<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Cart from '$lib/components/Cart.svelte';
	import Main from '$lib/components/Main.svelte';
	import { toastMessage } from '$lib/store.js';

	export let data;
	let openCart = false;
	let loading = false;
	$: ({ products } = data);
	$: message = $toastMessage;
</script>

<Navbar {openCart} setOpenCart={(/** @type {boolean} */ value) => (openCart = value)} />
<Cart {openCart} setOpenCart={(/** @type {boolean} */ value) => (openCart = value)} {loading} />
<Main {products} />

{#if message}
<div class="toast toast-center z-40">
  <div class="alert alert-success">
    <span>{message}</span>
  </div>
</div>
{/if}