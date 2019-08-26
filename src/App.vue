<template>
  <div id="app" class="app">
    <div class="app-wrap">
      <Logo />
      <transition name="fade" mode="out-in">
        <router-view key="2" />
      </transition>
    </div>
    <Loader v-if="isLoading" />
    <notifications group="foo" />
  </div>
</template>
<script>
import Logo from "@/components/ui/Logo.vue";
import Loader from "@/components/ui/Loader.vue";
export default {
  components: {
    Logo,
    Loader
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  methods: {
    getLocalization() {
      this.$store.commit("SET_LOADER", true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.$store.dispatch("fetchGeneralWeatherByCoords", position.coords);
        });
      }
      this.$store.commit("SET_LOADER", false);
    }
  },
  created() {
    this.getLocalization();
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
