<script>
    // @ts-nocheck
    import '../app.css';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    // Redirect to root path (/) on mount
    onMount(() => {
        goto('/project2/'); // Redirect to root path
    });
</script>

<style>
    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh; /* Full viewport height */
        background-image: url('/images/background.jpg'); /* Set background image */
        background-size: cover; /* Cover the entire area */
        background-position: center; /* Center the background */
        text-align: center; /* Center text */
        color: #FCF7F7; /* Set text color */
        font-family: 'Newsreader', serif; /* Use Newsreader font */
        padding: 20px;
    }

    h1 {
        font-size: 3rem; /* Large font size for heading */
        font-family: 'Newsreader', serif; /* Use Newsreader font */
    }

    p {
        font-size: 1.5rem; /* Large font size for paragraph */
        font-family: 'Newsreader', serif; /* Use Newsreader font */
    }

    .italic {
        font-style: italic; /* Italic style for specific words */
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
        font-family: 'Newsreader', serif; /* Use Newsreader font */
    }
    
    .shop-button:hover {
        background-color: #5B8A3C; 
    }
</style>

<main>
    <h1>Welcome!</h1>
    <p>We’re <span class="italic">farmers</span>, <span class="italic">purveyors</span>, and <span class="italic">eaters</span> of organically grown food.</p>
    <button class="shop-button" on:click={() => goto('/project2/shop')}>Browse our shop</button>
</main>
