<template>
  <div id="blog">
    <h1 class="text-center pt-10">Blog</h1>
    <!---->
    <v-row class="pt-10">
      <v-col v-for="blog in blogs" v-bind:key="blog.id">
        <v-card class="mx-auto" width="300" height="230">
          <v-card-title class="pt-5">{{
            blog.title
          }}</v-card-title>

          <v-card-text
            v-html="blog.subtitle"
            class="text--primary"
          ></v-card-text>

          <v-card-actions>
            <router-link :to="{ name: 'article-detail', params: { id: blog.id } }">
            <v-btn color="orange" text :bottom="true" :absolute="true"
              >もっと見る</v-btn
            >
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <!---->

<!--
      <v-row>
      <v-col>
        <v-card class="mx-auto" width="300" height="330">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto" width="300" height="330">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="mx-auto" width="300" height="330">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Blog",
  data: () => ({
    blogs: [],
  }),
  mounted(){
    axios
      .get('api/blog/getall')
      .then(response => {
        (this.blogs = response.data)
      })
  },
};
</script>
