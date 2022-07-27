<template>
  <v-card flat class="text-center">
    <v-card-text>

      <h1 class="pt-5">{{ blogs.title }}</h1>

      <h3 class="pt-15" v-html="htmlText(blogs.content)"></h3>
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
      .get('http://localhost:3000/blog/getall')
      .then(response => {
        console.log(response.data[0])
        (this.blogs = response.data[this.$route.params.id - 1])
      })
  },

  methods: {
    htmlText(msg) {
      return msg.replace(/\r?\n/g, "<br>");
    },
  },
};
</script>