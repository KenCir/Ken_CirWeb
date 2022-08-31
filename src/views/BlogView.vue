<template>
  <v-card flat class="text-center">
    <v-card-text>
      <h1 class="pt-5">{{ blogs.title }}</h1>
      <h3 class="pt-15" v-html="blogs.content"></h3>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios';

export default {
  name: "ArticleDetail",

  data: () => ({
    blogs: {},
  }),

  mounted(){
    axios
      .get(`api/blog/get/${this.$route.params.id}`)
      .then(response => {
        console.log(response.data.title);
        this.blogs = response.data
      })
  },
};
</script>