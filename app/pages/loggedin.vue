<script setup lang="ts">
import { signOut } from "firebase/auth";
const user = useCurrentUser();
const auth = useFirebaseAuth();

const showDebugData = ref(false);

const doLogout = async () => {
  await signOut(auth!);
  navigateTo("/");
};

watchEffect(() => {
  if (showDebugData.value) {
    console.log("User data:", user.value);
    alert("Debug data is shown in the console.");
  }
});

definePageMeta({
  middleware: "auth",
});
</script>
<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-50"
  >
    <div
      class="bg-white shadow-md rounded-lg p-8 flex flex-col items-center w-full max-w-sm"
    >
      <img
        :src="user?.photoURL!"
        alt="User Photo"
        class="w-24 h-24 rounded-full mb-4 shadow"
        @click="showDebugData = !showDebugData"
      />
      <div class="text-xl font-semibold mb-2">
        Howdy, {{ user?.displayName?.split(" ")[0] || "User" }}
      </div>
      <div class="text-gray-500 mb-6">
        {{ user?.email }}
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition"
        @click="doLogout"
      >
        Logout
      </button>
    </div>
  </div>
</template>
