<template>
  <div class="home">
    <Intro />
    <Search />
    <Result />
  </div>
</template>

<script>
import Search from "@/components/home/Search.vue";
import Result from "@/components/home/Result.vue";
import Intro from "@/components/home/Intro.vue";
export default {
  name: "home",
  components: {
    Search,
    Result,
    Intro
  }
};
</script>
