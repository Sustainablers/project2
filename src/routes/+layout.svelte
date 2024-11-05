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
        padding: 15px;
        flex-wrap: wrap;
        font-family: 'Newsreader', serif;
    }
    .title {
        font-weight: bold;
        font-size: x-large;
        color: #426B1F;
        margin-left: 10px;
        font-family: 'Newsreader', serif; 
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
        font-family: 'Newsreader', serif; 
    }
    nav.tabs a.tab:hover {
        color: #426B1F;
    }
    .shop-button {
        background-color: #426B1F;
        color: #FCF7F7;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 14px;
        font-family: 'Newsreader', serif; 
        font-weight: bold;
        white-space: nowrap;
    }
    .shop-button:hover {
        background-color: #365618;
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
        font-family: 'Newsreader', serif;
    }
    main {
        margin-bottom: 60px; 
        font-family: 'Newsreader', serif; 
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
        <h1 class="title">Pure Harvest</h1>
        <nav class="tabs">
            <a class="tab" href="/project2/" aria-label="home">Home</a>
            <a class="tab" href="/project2/contact" aria-label="contact">Contact</a>
            <button class="shop-button" aria-label="shop" on:click={() => goto('/project2/shop')}>Shop</button>
        </nav>
      
    </header>
    
    <slot />
</main>
<footer>
    {name}
</footer>
