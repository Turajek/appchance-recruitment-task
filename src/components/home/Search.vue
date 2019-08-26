<template>
  <div class="search">
    <input class="search-input" ref="autocomplete" v-model="city" />
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
    }
  },
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.autocomplete,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", () => {
      let place = this.autocomplete.getPlace();
      let coords = {
        latitude: place.geometry.location.lat(),
        longitude: place.geometry.location.lng()
      };
      this.$store.dispatch("fetchGeneralWeatherByCoords", coords);
    });
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
    cursor: pointer;
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