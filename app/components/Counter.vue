<script setup lang="ts">
import { useFirestore, useDocument } from "vuefire";
import { doc, updateDoc, increment } from "firebase/firestore";

// Get Firestore instance
const fireStore = useFirestore();

// Reference to the 'clicks' document in the 'db' collection
const clicksDocRef = doc(fireStore, "db", "clicks");

// Use the document
const clicks = useDocument(clicksDocRef);

// Function to increment the counter in Firebase
const incrementCounter = async () => {
  try {
    await updateDoc(clicksDocRef, {
      value: increment(1),
    });
  } catch (error) {
    console.error("Error incrementing counter:", error);
    alert("Error incrementing counter. Please try again.");
  }
};
</script>

<template>
  <div class="counter-container p-4 bg-stone-800 rounded-lg shadow-lg">
    <div class="text-2xl text-center text-blue-400 mb-3">
      Contagem de clicks: {{ clicks?.value || 0 }}
    </div>
    <div class="flex gap-2 justify-center">
      <button
        @click="incrementCounter"
        class="transition-all px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded hover:scale-105 active:scale-95 active:bg-green-800"
      >
        Clique aqui para aumentar
      </button>
    </div>
  </div>
</template>
