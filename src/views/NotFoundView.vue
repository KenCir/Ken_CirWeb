<template>
  <div id="home">
    <v-container class="text-center">
      <h1 class="purple--text text--accent-2 pt-16">404 Not Found</h1>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    // もう少しいい感じにしたいね
    console.log('\u001b[31m こ こ に は な に も な い');
    console.log('\u001b[31m は や く か え る の だ');
  },
};
</script>
