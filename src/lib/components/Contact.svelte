<script>
  let name = '';
  let email = '';
  let message = '';
  let showPopup = false;

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form)
      });

      if (response.ok) {
        showPopup = true;
        // Clear form fields
        name = '';
        email = '';
        message = '';

        setTimeout(() => {
          showPopup = false;
        }, 15000);
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Network error. Please check your connection and try again.');
    }
  }
</script>

{#if showPopup}
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl relative max-w-md w-full m-4">
      <button 
        on:click={() => showPopup = false}
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        ✕
      </button>
      <div class="text-center">
        <img 
          src="/assets/dance.gif" 
          alt="Success"
          class="w-24 h-24 mx-auto mb-4"
        />
        <h3 class="text-xl font-bold text-black dark:text-white mb-2">Message Sent!</h3>
        <p class="text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
      </div>
    </div>
  </div>
{/if}

<section id="contact" class="relative min-h-screen py-20 px-6 bg-white dark:bg-black text-black dark:text-white transition-colors duration-500 overflow-hidden">
  <!-- Grid Background -->
  <div class="absolute inset-0 grid grid-cols-12 gap-2 opacity-10 pointer-events-none z-0">
    {#each Array(12) as _, i}
      <div class="h-full border-r border-current"></div>
    {/each}
  </div>

  <!-- Contact Content -->
  <div class="relative z-10 max-w-3xl mx-auto text-center">
    <h2 class="text-4xl md:text-5xl font-bold mb-4">Let's Talk</h2>
    <p class="text-gray-600 dark:text-gray-400 mb-10">Got a question, opportunity or just want to say hi? Drop a message below!</p>

    <form
      action="https://formsubmit.co/mankars130@gmail.com"
      method="POST"
      on:submit={handleSubmit}
      class="space-y-6 text-middle"
    >
      <label for="name" class="block font-semibold mb-1">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        bind:value={name}
        required
        class="w-full p-3 rounded border border-black dark:border-white bg-white dark:bg-gray-900 text-black dark:text-white"
      />

      <label for="email" class="block font-semibold mb-1">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        bind:value={email}
        required
        class="w-full p-3 rounded border border-black dark:border-white bg-white dark:bg-gray-900 text-black dark:text-white"
      />

      <label for="message" class="block font-semibold mb-1">Message</label>
      <textarea
        id="message"
        name="message"
        bind:value={message}
        required
        rows="5"
        class="w-full p-3 rounded border border-black dark:border-white bg-white dark:bg-gray-900 text-black dark:text-white"
      ></textarea>

      <button
        type="submit"
        class="bg-black text-white px-6 py-3 rounded hover:bg-gray-700  transition"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
