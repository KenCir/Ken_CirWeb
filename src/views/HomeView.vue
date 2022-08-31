<template>
  <div id="home">
    <v-container class="text-center">
      <h1 class="pt-10 pb-3">Ken_Cir Website</h1>
      <ul class="pt-6">
        <li class="mb-7">
          <h2>何者なのですか</h2>
          <p>Aboutページに簡単な自己紹介を載せています、見ていってくだされ</p>
        </li>
        <li class="mb-7">
          <h2>制作物</h2>
          <p>暇な時に作っています、更新頻度低め</p>
        </li>
        <li class="mb-7">
          <h2>お知らせ</h2>
          <p>blogとともに置いています</p>
        </li>
        <li>
          <h2>お問い合わせ</h2>
          <p>準備中なので少々お待ちくだされ</p>
        </li>
      </ul>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
#home h1 {
  font-family: "Roboto-ThinItalic";
}

#home ul {
  list-style: none;
}
</style>
