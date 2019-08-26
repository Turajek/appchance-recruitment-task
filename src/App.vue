<template>
  <div id="app" class="app">
    <div class="app-wrap">
      <Logo />
      <router-view />
    </div>
  </div>
</template>
<script>
import Logo from "@/components/ui/Logo.vue";
export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss">
@import "./assets/styles/main.scss";
.app {
  background-image: url("~@/assets/images/bg.jpg");
  background-size: cover;

  &-wrap {
    min-height: 100vh;
    overflow-y: auto;
    padding: 20px;
    width: 500px;
    max-width: 95vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
