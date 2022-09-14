<template>
  <div id="blog">
    <h1 class="text-center pt-10">Blog</h1>
    <v-row class="pt-10">
      <v-col v-for="blog in blogs" v-bind:key="blog.id">
        <v-card class="mx-auto" width="300" height="200">
          <v-card-title class="pt-5">{{
            blog.title
          }}</v-card-title>
          <v-card-text>{{
            blog.create_time
          }}に投稿</v-card-text>
          <v-card-text
            v-html="blog.subtitle"
            class="text--primary"
          ></v-card-text>

          <v-card-actions>
            <router-link :to="{ name: 'blog-view', params: { id: blog.id } }">
            <v-btn color="green" text :bottom="true" :absolute="true">続きを読む</v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
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
