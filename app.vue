<script setup lang="ts">
import { ref } from 'vue';
const showContents = ref(false);
</script>
<template>
  <NuxtLayout>
    <v-app>
      <v-sheet class="pa-4 text-center mx-auto">
        <v-btn color="primary" @click="showContents = !showContents">
          <template v-if="!showContents"> Open Content </template>
          <template v-if="showContents"> Close Content </template>
        </v-btn>
      </v-sheet>
      <v-sheet v-if="showContents" class="pa-4 text-center mx-auto"> コンテンツです。 </v-sheet>
      <NuxtPage />
    </v-app>
  </NuxtLayout>
</template>
