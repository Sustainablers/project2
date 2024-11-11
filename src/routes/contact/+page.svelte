<script>
    // @ts-nocheck
    
    import { validateForm } from '$lib/formValidator2';
    
    let name = '';
    let email = '';
    let subject = '';
    let message = '';
    let alertMessage = '';
    let alertVisible = false;
    let errors = {};
    
    function handleSubmit() {
        // Reset errors before validating
        errors = {};
    
        // Validate the form
        const validationResult = validateForm({ name, email, subject, message });
        errors = validationResult.errors;
    
        // If there are validation errors, stop form submission
        if (!validationResult.isValid) return;
    
        // Handle form submission logic here
        console.log({ name, email, subject, message });
    
        // Set the success message and make it visible
        alertMessage = 'Message successfully sent!';
        alertVisible = true;
    
        // Hide the alert after 3 seconds
        setTimeout(() => {
            alertVisible = false;
        }, 3000);
    
        // Reset the form fields
        name = '';
        email = '';
        subject = '';
        message = '';
        errors = {};
    }
    </script>
    
    <style>
        .alert {
            background-color: #4CAF50;
            color: white;
            padding: 10px;
            border-radius: 5px;
            text-align: center;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1000;
            opacity: 1;
            transition: opacity 1s ease;
        }
    
        .alert.hidden {
            opacity: 0;
            visibility: hidden;
        }
    
        .error-field {
            border-color: red;
        }
    
        .valid-field {
            border-color: green;
        }
    
        .error-text {
            color: red;
            font-size: 0.875rem;
        }
    </style>
    
    <div class="min-h-screen flex flex-col items-center justify-start bg-white">
        <div class="w-full max-w-4xl p-8">
            <h1 class="text-5xl font-bold mb-4 text-center">Contact Us</h1>
            <hr class="border-t-2 border-green-700 mb-8" />
    
            {#if alertVisible}
                <div class="alert" class:hidden={!alertVisible}>{alertMessage}</div>
            {/if}
    
            <div class="flex flex-col md:flex-row">
                <!-- Contact Information Section -->
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
                        <p>Monday-Saturday: 9:00 am - 5:00 pm </p>
                    </div>
                </div>
    
                <!-- Form Section -->
                <div class="md:w-1/2 md:pl-8 flex flex-col items-center">
                    <form class="space-y-4 w-full" on:submit|preventDefault={handleSubmit}>
                        <div>
                            <label class="block text-gray-700">Your name</label>
                            <input type="text"
                                   class="w-full p-2 border rounded {errors.name ? 'error-field' : 'valid-field'}" 
                                   placeholder="Abc" 
                                   bind:value={name} 
                                   on:input={() => errors.name = validateForm({ name, email, subject, message }).errors.name} />
                            {#if errors.name}
                                <p class="error-text">{errors.name}</p>
                            {/if}
                        </div>
                        <div>
                            <label class="block text-gray-700">Email address</label>
                            <input type="email" 
                                   class="w-full p-2 border rounded {errors.email ? 'error-field' : 'valid-field'}" 
                                   placeholder="Abc@def.com" 
                                   bind:value={email} 
                                   on:input={() => errors.email = validateForm({ name, email, subject, message }).errors.email} />
                            {#if errors.email}
                                <p class="error-text">{errors.email}</p>
                            {/if}
                        </div>
                        <div>
                            <label class="block text-gray-700">Subject</label>
                            <input type="text" 
                                   class="w-full p-2 border border-gray-300 rounded" 
                                   placeholder="This is optional" 
                                   bind:value={subject} />
                        </div>
                        <div>
                            <label class="block text-gray-700">Message</label>
                            <textarea class="w-full p-2 border rounded {errors.message ? 'error-field' : 'valid-field'}" 
                                      placeholder="Hi! I'd like to ask about" 
                                      bind:value={message}
                                      on:input={() => errors.message = validateForm({ name, email, subject, message }).errors.message}></textarea>
                            {#if errors.message}
                                <p class="error-text">{errors.message}</p>
                            {/if}
                        </div>
                        <div>
                            <button type="submit" class="w-full p-2 text-white rounded" style="background-color: #426B1F;">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    