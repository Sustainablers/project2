<script>
// @ts-nocheck

    
import { Card, Button } from 'flowbite-svelte';
    
    let filterType = 'all';
    let showResults = 16;
    let sortBy = 'name';
    let showModal = false;
    let selectedItem = null; 
    let quantity = 1;

    // Form data object
    let formData = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        postalCode: '',
        city: '',
        barangay: '',
        region: '',
    
    };
    
    
    // Validation function
    function validateForm() {
        const errors = {};
        if (!formData.firstName) errors.firstName = "First name is required.";
        if (!formData.lastName) errors.lastName = "Last name is required.";
        if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Invalid email.";
        if (!formData.phone || !/^\d{10,12}$/.test(formData.phone)) errors.phone = "Invalid phone number.";
        if (!formData.postalCode || !/^\d{4,5}$/.test(formData.postalCode)) errors.postalCode = "Invalid postal code.";
        return errors;
    }

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault();
        const errors = validateForm();
        
        if (Object.keys(errors).length === 0) {
            alert('Order placed for ' + selectedItem.name);
            closeModal();

            // Clear the form
            formData = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                postalCode: '',
                city: '',
                barangay: '',
                region: '',
            };
        } else {
            console.log(errors); // Log errors for debugging
        }
    }
    

    function handleBuyNow(item) {
        selectedItem = item;
        showModal = true;
    }

    function closeModal() {
        showModal = false;
        selectedItem = null;
    }
    
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
        ],
    };
    
    $: filteredItems = (filterType === 'all'
        ? [...items.fruits, ...items.vegetables, ...items.grains]
        // @ts-ignore
        : items[filterType]
       
    // @ts-ignore
    ).sort((a, b) => sortBy === 'name' ? a.name.localeCompare(b.name) : a.price - b.price)
        .slice(0, showResults);
  

</script>

    
    <!-- Full-Width Filter Section -->
    <div class="w-full bg-[#426B1F] text-white p-2 flex flex-col md:flex-row items-stretch justify-between">
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
 <!-- Container for Products -->
<div class="container mx-auto px-4 my-6 bg-transparent">
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {#each filteredItems as item}
        
            <Card padding="none" class="w-full h-auto flex flex-col justify-between mx-auto relative group">
               
                <div class="flex justify-center items-center">
                    <img class="w-full h-auto max-h-[200px] object-cover rounded-t-lg" src={item.image} alt={item.name} />
                </div>
                
                <div class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button on:click={() => handleBuyNow(item)} 
        class="m-1 bg-green-500 text-white rounded-full w-32 sm:w-36 h-8 sm:h-10 flex items-center justify-center">
    Buy Now
</Button>

                </div>
                <div class="px-3 py-2 bg-gray-100 flex flex-col justify-between">
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

<!-- Order Form Modal -->
{#if showModal}
<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
    <div class="bg-white p-4 md:p-6 rounded shadow-lg w-full max-w-4xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
        
        <!-- Order Form Section -->
        <div class="flex-1 w-full">
        <h2 class="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">Order Form</h2>
        <form on:submit={handleSubmit}>
            <div class="space-y-4">
                <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <input type="text" bind:value={formData.firstName} placeholder="First Name" class="flex-1 p-2 border rounded" required />
                    <input type="text" bind:value={formData.lastName} placeholder="Last Name" class="flex-1 p-2 border rounded" required />
                </div>
                <input type="email" bind:value={formData.email} placeholder="Email" class="w-full p-2 border rounded" required />
                <input type="tel" bind:value={formData.phone} placeholder="Phone" class="w-full p-2 border rounded" required />
                <input type="text" value="Philippines" class="w-full p-2 border rounded bg-gray-100" readOnly />
                <input type="text" bind:value={formData.address} placeholder="Address" class="w-full p-2 border rounded" required />
                <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <input type="text" bind:value={formData.postalCode} placeholder="Postal Code" class="flex-1 p-2 border rounded" required />
                    <input type="text" bind:value={formData.city} placeholder="City" class="flex-1 p-2 border rounded" required />
                </div>
                <input type="text" bind:value={formData.barangay} placeholder="Barangay" class="w-full p-2 border rounded" required />
                <input type="text" bind:value={formData.region} placeholder="Region" class="w-full p-2 border rounded" required />
            </div>
            <div class="flex justify-between items-center mt-6">
                <button type="button" on:click={closeModal} class="text-gray-600 text-lg">Cancel</button>
                <button type="submit" class="bg-[#426B1F] text-white px-4 py-2 rounded text-lg">Place Order</button>
            </div>
        </form>
    </div>
        <!-- Order Summary Section -->
        <div class="w-full md:w-[700px] bg-[#A1B88E] p-4 md:p-6 rounded-lg md:rounded-r-lg mt-4 md:mt-0 md:ml-4">
            <h2 class="text-lg font-semibold mb-4 text-center md:text-left">Order Summary</h2>
            <div class="bg-white p-4 rounded-lg flex flex-col md:flex-row items-center border-2 border-[#535C4B]">
                <img src={selectedItem.image} alt={selectedItem.name} class="w-24 h-24 rounded mb-4 md:mb-0 md:mr-4" />
                <div class="flex-1 text-center md:text-left">
                    <h3 class="font-semibold">{selectedItem.name}</h3>
                    <div class="flex items-center justify-center md:justify-start mt-2">

                        <input type="number" bind:value={quantity} min="1"  max="20" class="w-16 p-1 border rounded mr-2 border-[#535C4B]"  on:input={() => {
                 if (quantity > 20) {
            alert("Quantity limit is 20.");
            quantity = 20; 
        }
        calculatePrice();
    }} 
/>
                        <span class="text-gray-700">₱{(selectedItem.price * quantity).toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
{/if}
