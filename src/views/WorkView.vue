<template>
  <div id="about">
    <v-container class="text-center">
      <h1 class="pa-10">制作物一覧</h1>
      <v-row class="pt-1">
        <v-col>
          <h2>おうち鯖</h2>
          <div class="pt-1">
            <h4>・専属DiscordBotの開発</h4>
            <h4>・PocketMine-MPプラグインの開発</h4>
            <p class="mt-2">現在経済サーバー準備中です、ご参加お待ちしております</p>
            <v-btn text href="https://github.com/OutiServer" target="_blank">
              <v-icon left color="#211F1F">mdi-github</v-icon>
              <span>Github</span>
            </v-btn>
            <v-btn text href="https://discord.gg/x2HGnUnFsg" target="_blank">
              <v-icon left color="#211F1F">icon-discord</v-icon>
              <span>Discord</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Work",
};
</script>

<style scoped>
@import "@/assets/discord-icon/style.css";
</style>
