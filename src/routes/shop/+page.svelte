<script>
    import { Card, Button } from 'flowbite-svelte';

    // Filtering and Sorting State
    let filterType = 'all';
    let showResults = 16;
    let sortBy = 'name';

    // Sample Data for Fruits, Vegetables, and Grains
    const items = {
        fruits: [
            { name: 'Apple', image: 'images/apple.jpg', description: 'Fresh and juicy apple', price: 100 },
            { name: 'Banana', image: 'images/banana.jpg', description: 'Sweet ripe banana', price: 50 },
            { name: 'Orange', image: 'images/orange.jpg', description: 'Citrusy and fresh orange', price: 65 },
            { name: 'Pineapple', image: 'images/pineapple.jpg', description: 'Tropical pineapple', price: 175 },
            { name: 'Watermelon', image: 'images/watermelon.jpg', description: 'Refreshing watermelon', price: 200 },
        ],
        vegetables: [
            { name: 'Carrot', image: 'images/carrots.jpg', description: 'Crunchy carrots', price: 60 },
            { name: 'Garlic', image: 'images/garlic.jpg', description: 'Fresh garlic cloves', price: 80 },
            { name: 'Bottle Gourd', image: 'images/Bottle gourd.jpg', description: 'Bottle gourd', price: 30 },
            { name: 'Okra', image: 'images/okra.jpg', description: 'Fresh okra', price: 25 },
            { name: 'Onion', image: 'images/onion.jpg', description: 'Crisp onion', price: 100 },
            { name: 'Potato', image: 'images/potato.jpg', description: 'Starchy potato', price: 45 },
        ],
        grains: [
            { name: 'Barley', image: 'images/Barley grain.jpg', description: 'Nutritious barley', price: 90 },
            { name: 'Oats', image: 'images/Oats.jpg', description: 'Whole oats', price: 110 },
            { name: 'Millet', image: 'images/Millet.jpg', description: 'Organic millet', price: 95 },
        ]
    };

    // Derived array based on filter and sort options
    $: filteredItems = (filterType === 'all'
        ? [...items.fruits, ...items.vegetables, ...items.grains]
        // @ts-ignore
        : items[filterType]
    )
        // @ts-ignore
        .sort((a, b) => sortBy === 'name' ? a.name.localeCompare(b.name) : a.price - b.price)
        .slice(0, showResults);
</script>

<div class="container mx-auto px-4 my-6 bg-transparent">
    <!-- Filter and Sort Controls -->
    <div class="bg-green-800 text-white p-2 flex flex-col md:flex-row items-stretch justify-between">
        <!-- Filter Section -->
        <div class="flex items-center space-x-2">
            <button class="flex items-center space-x-1">
                <i class="fas fa-filter"></i>
                <span>Filter</span>
            </button>
            <select bind:value={filterType} class="w-32 text-black text-center">
                <option value="all">All</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="grains">Grains</option>
            </select>
        </div>
        <!-- Show & Sort Section -->
        <div class="flex items-center space-x-2">
            <span>Show</span>
            <input type="number" bind:value={showResults} class="w-10 text-black text-center" min="1" />
            <span>Sort by</span>
            <select bind:value={sortBy} class="w-24 text-black text-center">
                <option value="name">Name</option>
                <option value="price">Price</option>
            </select>
        </div>
    </div>

    <!-- Product Collection Display -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {#each filteredItems as item}
            <Card padding="none" class="w-full flex flex-col justify-between mx-auto relative group">
                <a href="/">
                    <img class="w-full h-[300px] object-cover rounded-t-lg" src={item.image} alt={item.name} />
                    <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button class="m-1 bg-blue-500 text-white rounded-full w-36 h-10 flex items-center justify-center">Add to Cart</Button>
                        <Button class="m-1 bg-green-500 text-white rounded-full w-36 h-10 flex items-center justify-center">Buy Now</Button>
                    </div>
                </a>
                <div class="px-5 py-4 bg-gray-100 flex flex-col justify-between h-full">
                    <a href="/">
                        <h5 class="text-lg font-semibold text-gray-900">{item.name}</h5>
                        <p class="text-sm text-gray-600">{item.description}</p>
                    </a>
                    <span class="text-xl font-bold text-gray-900">₱{item.price.toFixed(2)}</span>
                </div>
            </Card>
        {/each}
    </div>
</div>
