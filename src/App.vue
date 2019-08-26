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
  min-height: 100vh;
  &-wrap {
    position: fixed;
    padding: 20px;
    width: 500px;
    max-width: 95vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
