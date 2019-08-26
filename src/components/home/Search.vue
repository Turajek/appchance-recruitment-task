<template>
  <div class="search">
    <input class="search-input" v-model="city" v-on:keyup.enter="search" />
    <button class="search-button" @click="search">Check</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: ""
    };
  },
  methods: {
    search() {
      this.$store.dispatch("fetchGeneralWeather", this.city);
    },
    getLocalization() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.$store.dispatch("fetchGeneralWeatherByCoords", position.coords);
        });
      }
    }
  },
  created() {
    this.getLocalization();
  }
};
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 520px) {
    justify-content: center;
  }
  &-input {
    background: rgba(grey, 0.5);
    display: block;
    border-radius: 0.25rem;
    border: 1px solid #efefef;
    height: 40px;
    width: 300px;
    padding: 0 10px;
    max-width: 95vw;
    color: inherit;
    font-size: 1.2rem;

    &:focus {
      outline: none;
    }
  }
  &-button {
    display: flex;
    border: 1px solid transparent;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    border-radius: 0.25rem;
    background: rgba(#efefef, 0.5);
    color: inherit;
    font-size: 1.2rem;
    @media (max-width: 520px) {
      margin-top: 20px;
    }
    &:disabled {
      cursor: not-allowed;
      filter: grayscale(0.5);
    }
  }
}
</style>