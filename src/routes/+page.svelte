<script>
    // @ts-nocheck
    import '../app.css';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    onMount(() => {
        goto('./'); 
    });
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-image: url('/images/background.jpg'); 
        background-size: cover; 
        background-position: center; 
        text-align: center; 
        color: #FCF7F7; 
        font-family: 'Newsreader', serif; 
        padding: 20px;
    }

    h1 {
        font-size: 3rem; 
        font-family: 'Newsreader', serif; 
    }

    p {
        font-size: 1.5rem; 
        font-family: 'Newsreader', serif; 
    }

    .italic {
        font-style: italic; 
    }

    .shop-button {
        background-color: #426B1F; 
        color: #FCF7F7; 
        border: none;
        padding: 15px 30px; 
        border-radius: 5px; 
        cursor: pointer; 
        font-size: 1.25rem;
        margin-top: 20px; 
        transition: background-color 0.3s;
        font-family: 'Newsreader', serif; 
    }
    
    .shop-button:hover {
        background-color: #5B8A3C; 
    }
</style>

<main>
    <h1>Welcome!</h1>
    <p>We’re <span class="italic">farmers</span>, <span class="italic">purveyors</span>, and <span class="italic">eaters</span> of organically grown food.</p>
    <button class="shop-button" on:click={() => goto('./shop')}>Browse our shop</button>
</main>
