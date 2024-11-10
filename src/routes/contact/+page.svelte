<!-- svelte-ignore css_unused_selector -->
<!-- src/routes/contact/+page.svelte -->
<script>
    let name = '';
    let email = '';
    let subject = '';
    let message = '';

    function handleSubmit() {
        // Handle form submission logic here
        console.log({ name, email, subject, message });
        // Reset the form if necessary
        name = '';
        email = '';
        subject = '';
        message = '';
    }
</script>

<style>
   
</style>

<div class="min-h-screen flex flex-col items-center justify-start bg-white">
    <div class="w-full max-w-4xl p-8">
        <h1 class="text-5xl font-bold mb-4 text-center">Contact Us</h1>
        <hr class="border-t-2 border-green-700 mb-8" />
        <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2 mb-8 md:mb-0 flex flex-col items-start">
                <div class="mb-6">
                    <h2 class="text-2xl font-bold mb-2">Address</h2>
                    <p>East Tapinac, Olongapo, Philippines</p>
                </div>
                <div class="mb-6">
                    <h2 class="text-2xl font-bold mb-2">Phone</h2>
                    <p>Mobile: 09054718434</p>
                </div>
                <div class="mb-6">
                    <h2 class="text-2xl font-bold mb-2">Email</h2>
                    <p>sustainablers@gmail.com</p>
                </div>
                <div class="mb-6">
                    <h2 class="text-2xl font-bold mb-2">Working Time</h2>
                    <p>Monday-Saturday: 9:00 am  - 5:00 pm </p>
                </div>
            </div>
            <div class="md:w-1/2 md:pl-8 flex flex-col items-center">
                <form class="space-y-4 w-full" on:submit|preventDefault={handleSubmit}>
                    <div>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="block text-gray-700">Your name</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded" placeholder="Abc" bind:value={name} />
                    </div>
                    <div>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="block text-gray-700">Email address</label>
                        <input type="email" class="w-full p-2 border border-gray-300 rounded" placeholder="Abc@def.com" bind:value={email} />
                    </div>
                    <div>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="block text-gray-700">Subject</label>
                        <input type="text" class="w-full p-2 border border-gray-300 rounded" placeholder="This is optional" bind:value={subject} />
                    </div>
                    <div>
                        <!-- svelte-ignore a11y_label_has_associated_control -->
                        <label class="block text-gray-700">Message</label>
                        <textarea class="w-full p-2 border border-gray-300 rounded" placeholder="Hi! I'd like to ask about" bind:value={message}></textarea>
                    </div>
                    <div>
                        <button type="submit" class="w-full p-2 text-white rounded" style="background-color: #426B1F;">Submit</button>

                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
