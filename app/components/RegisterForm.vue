<script setup lang="ts">
const email = ref("");
const password = ref("");

const register = async () => {
  // const { data, error } = await client.auth.signUp({
  //   email: email.value,
  //   password: password.value,
  // });
  // console.log(data, error);
};
</script>

<template>
  <form
    class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md space-y-4"
  >
    <h2 class="text-2xl font-bold text-center mb-4">Register</h2>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1" for="email"
        >Email</label
      >
      <input
        id="email"
        type="email"
        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="you@example.com"
        v-model="email"
      />
    </div>
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1" for="password"
        >Password</label
      >
      <input
        id="password"
        type="password"
        class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="********"
        v-model="password"
      />
    </div>
    <button
      @click.prevent="register"
      type="submit"
      class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
    >
      Register
    </button>
  </form>
</template>
