<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    // Redirect to root path (/) on mount
    onMount(() => {
        goto('/'); // Redirect to root path
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
        font-family: 'montserrat', sans-serif; /* Use Montserrat */
        padding: 20px;
    }

    h1 {
        font-size: 3rem; /* Large font size for heading */
    }

    p {
        font-size: 1.5rem; /* Large font size for paragraph */
    }

    .italic {
        font-style: italic; /* Italic style for specific words */
    }

    .shop-button {
        background-color: #426B1F; /* Button background color */
        color: #FCF7F7; /* Button text color */
        border: none; /* Remove border */
        padding: 15px 30px; /* Button padding */
        border-radius: 5px; /* Rounded corners */
        cursor: pointer; /* Pointer cursor on hover */
        font-size: 1.25rem; /* Large font size for button */
        margin-top: 20px; /* Space above the button */
        transition: background-color 0.3s; /* Transition effect */
    }
    
    .shop-button:hover {
        background-color: #5B8A3C; /* Darken button color on hover */
    }
</style>

<main>
    <h1>Welcome!</h1>
    <p>We’re <span class="italic">farmers</span>, <span class="italic">purveyors</span>, and <span class="italic">eaters</span> of organically grown food.</p>
    <button class="shop-button" on:click={() => goto('/shop')}>Browse our shop</button>
</main>
