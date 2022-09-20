<template>
  <v-app id="app">
    <header>
      <v-app-bar app color="primary" class="lighten-1">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-toolbar-title class="hidden-sm-and-down"
          ><router-link to="/" style="text-decoration: none" class="black--text"
            >Ken_Cir Website</router-link
          ></v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-container class="text-right">
          <span class="mr-2">最終更新 2022年9月3日</span>
        </v-container>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" fixed temporary>
        <v-list nav dense>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/" style="text-decoration: none"
                  >Home</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/about" style="text-decoration: none"
                  >About</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/blogs" style="text-decoration: none"
                  >Blog</router-link
                ></v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                ><router-link to="/works" style="text-decoration: none"
                  >Work</router-link
                ></v-list-item-title
              >
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </header>

    <v-main>
      <router-view />
    </v-main>

    <footer>
      <v-footer padless class="mt-16">
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>Ken_Cir(幻想地底国)</strong>
        </v-col>
      </v-footer>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
  }),
};
</script>

<style>
@font-face {
  font-family: "Roboto-ThinItalic";
  src: url(@/assets/fonts/Roboto/Roboto-ThinItalic.ttf);
}

.v-application--wrap {
  min-height: -webkit-fill-available;
}

header {
  text-decoration: none;
}
</style>
