<script>
    // @ts-nocheck
    import '../app.css';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { CartOutline } from 'flowbite-svelte-icons'; 

    export let name = "Deployed by Sustainablers";

    
    onMount(() => {
        goto('/project2/'); 
    });
</script>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #F9F1E7;
        padding: 20px;
        flex-wrap: wrap;
    }
    .title {
        font-weight: bold;
        color: #426B1F;
        margin-left: 10px;
    }
    nav.tabs {
        display: flex;
        flex-wrap: wrap;
        margin-left: auto;
    }
    nav.tabs a.tab {
        margin: 0 15px;
        color: #000000;
        text-decoration: none;
        font-weight: bold;
        display: flex;
        align-items: center;
    }
    nav.tabs a.tab:hover {
        color: #426B1F;
    }
    .basket-button {
        background-color: #426B1F;
        color: #FCF7F7;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 14px;
        white-space: nowrap;
    }
    .basket-button span {
        margin-left: 5px;
    }
    footer {
        background-color: #426B1F;
        color: #FCF7F7;
        text-align: center;
        padding: 10px;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 50px;
    }
    main {
        margin-bottom: 60px; /* Adjust based on footer height to prevent overlap */
    }
    @media (max-width: 500px) {
        header {
            flex-direction: column;
            align-items: flex-start;
        }
        nav.tabs {
            justify-content: center;
            width: 100%;
        }
        nav.tabs a.tab {
            flex: 1;
            text-align: center;
            padding: 10px 0;
        }
    }
</style>

<main>
    <header>
        <h1 class="title">World Peas</h1>
        <nav class="tabs">
            <a class="tab" href="/project2/" aria-label="home">Home</a>
            <a class="tab" href="/project2/shop" aria-label="shop">Shop</a>
            <a class="tab" href="/project2/contact" aria-label="contact">Contact</a>
        </nav>
        <button class="basket-button" aria-label="basket">
            <CartOutline style="width: 16px; height: 16px;" />
            <span>My Cart</span>
        </button>
    </header>
    
    <slot />
</main>
<footer>
    {name}
</footer>
