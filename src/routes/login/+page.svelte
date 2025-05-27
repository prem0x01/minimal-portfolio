<script>
  let username = '';
  let password = '';
  let error = '';

  async function handleLogin() {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      window.location.href = '/admin';
    } else {
      const data = await res.json();
      error = data.message;
    }
  }
</script>

<h1>Admin Login</h1>
<form on:submit|preventDefault={handleLogin}>
  <input type="text" placeholder="Username" bind:value={username} required />
  <input type="password" placeholder="Password" bind:value={password} required />
  <button>Login</button>
  {#if error}
    <p style="color:red">{error}</p>
  {/if}
</form>
