<script setup lang="ts">
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const auth = useFirebaseAuth();
const provider = new GoogleAuthProvider();

const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth!, provider);
    navigateTo("/loggedin");
  } catch (error) {
    console.error("Error during Google login:", error);
    alert("An error occurred during Google login. Please try again later.");
    return;
  }
};
</script>
<template>
  <form
    class="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md space-y-4"
  >
    <h2 class="text-2xl font-bold text-center mb-4">Login</h2>
    <button
      @click.prevent="googleLogin"
      class="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
    >
      Login with Google
    </button>
  </form>
</template>
