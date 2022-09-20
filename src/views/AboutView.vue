<template>
  <div id="about">
    <v-container class="text-center">
      <h1 class="pa-10">About Me</h1>
      <h3 class="mt-5">Name: Ken_Cir(けんちる)</h3>
      <h3 class="mt-16">
        趣味: プログラミング・イラスト・東方・STG・音ゲー・Vtuberなど
      </h3>
      <h4 class="mt-16">
        プログラミングを趣味としている謎の人です<br />色んなものを気まぐれで作っています<br />PocketMine-MP
        Plugin Developer<br />DiscordBot Developer
      </h4>
      <v-row class="mt-5">
        <v-col>
          <v-btn text href="https://github.com/KenCir" target="_blank">
            <v-icon left color="#211F1F">mdi-github</v-icon>
            <span>Github</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn text href="https://Twitter.com/Ken_Cir" target="_blank">
            <v-icon left color="#1DA1F2">mdi-twitter</v-icon>
            <span>Twitter</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-icon left color="#1DA1F2">icon-discord</v-icon>
          <span>Ken_Cir#0514</span>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
@import "@/assets/discord-icon/style.css";
</style>
