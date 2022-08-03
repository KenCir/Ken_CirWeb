<template>
  <div id="post-blog">
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="title" label="タイトル" filled></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field v-model="subtitle" label="サブタイトル" filled></v-text-field>
          </v-col>
        </v-row>

        <v-col col="12">
          <v-textarea color="teal" rows="10" v-model="input" @input="compileMarkdown()">
            <template v-slot:label>本文</template>
          </v-textarea>
        </v-col>

        <v-card-actions class="justify-center">
          <v-btn class="white--text" color="deep-purple accent-4" @click="submit()">
            サブミット
          </v-btn>
        </v-card-actions>

        <div v-html="renderHTML"></div>
      </v-container>
    </v-form>
  </div>
</template>

<script>
import markdownIt from "markdown-it";
import hljs from "highlight.js";
import sanitizer from "markdown-it-sanitizer";
import emoji from "markdown-it-emoji";
import katex from "@iktakahiro/markdown-it-katex";
import checkbox from "markdown-it-checkbox";
import sub from "markdown-it-sub";
import container from "markdown-it-container";
import ins from "markdown-it-ins";
import mark from "markdown-it-mark";
import footnote from "markdown-it-footnote";
import deflist from "markdown-it-deflist";
import abbr from "markdown-it-abbr";
import axios from 'axios';

export default {
  name: "PostBlog",
  data() {
    let md = new markdownIt({
      highlight: function (code, lang) {
        return hljs.highlightAuto(code, [lang]).value;
      },
      html: true,
      linkify: true,
      breaks: true,
      typographer: true,
    })
      .use(katex, { throwOnError: false, errorColor: " #cc0000" })
      .use(emoji)
      .use(checkbox)
      .use(sanitizer)
      .use(sub)
      .use(ins)
      .use(mark)
      .use(footnote)
      .use(deflist)
      .use(abbr)
      .use(container, "info")
      .use(container, "success")
      .use(container, "warning")
      .use(container, "danger");

    return {
      markdownIt: md,
      sourceText: String,
      renderHTML: "",
      input: "",
      title: "",
      subtitle: ""
    };
  },
  methods: {
    compileMarkdown: function () {
      this.renderHTML = this.markdownIt.render(this.input);
    },
    submit: function () {
      axios
      .post('api/blog/submit', {
        title: this.title,
        subtitle: this.subtitle,
        content: this.renderHTML
      })
      .then(response => {
        console.log(response.data);
        alert('送信しました');
      });
    }
  },
};
</script>

<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.6/styles/xcode.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css";

.success {
  margin: 10px 0;
  padding: 10px 10px;
  border-radius: 5px;
  color: #3a6f3a;
  background-color: #daedd2;
}

.info {
  margin: 10px 0;
  padding: 10px 10px;
  border-radius: 5px;
  color: #2b6584;
  background-color: #d3eaf6;
}

.warning {
  margin: 10px 0;
  padding: 10px 10px;
  border-radius: 5px;
  color: #af9c75;
  background-color: #fcf7df;
}

.danger {
  margin: 10px 0;
  padding: 10px 10px;
  border-radius: 5px;
  color: #9f3b3a;
  background-color: #f0d9d9;
}
</style>
