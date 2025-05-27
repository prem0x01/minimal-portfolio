<script>
  let username = '';
  let password = '';
  let error = '';

  async function login() {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (res.ok) {
      window.location.href = '/admin';
    } else {
      error = 'Invalid credentials';
    }
  }
</script>

<h1>Login</h1>
<form on:submit|preventDefault={login}>
  <input bind:value={username} placeholder="Username" required />
  <input bind:value={password} type="password" placeholder="Password" required />
  {#if error}
    <p style="color: red">{error}</p>
  {/if}
  <button type="submit">Login</button>
</form>
