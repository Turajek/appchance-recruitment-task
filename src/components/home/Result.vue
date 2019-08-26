<template>
  <div class="result" v-if="weather != null">
    <div class="result-temperature">{{weather.main.temp.toFixed(0)}} &#176 C</div>
    <div class="result-info">
      <div class="result-info-item">
        <strong>Date:</strong>
        {{new Date().toLocaleDateString('pl')}}
      </div>
      <div class="result-info-item">
        <strong>Location:</strong>
        {{weather.name}}, {{weather.sys.country}}
      </div>
      <div class="result-info-item">
        <strong>Description:</strong>
        {{weather.weather[0].description}}
      </div>
    </div>
    <router-link to="/details">
      <div class="result-more">more</div>
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    weather() {
      return this.$store.getters.generalWeather;
    }
  }
};
</script>

<style lang="scss" scoped>
.result {
  //   color: $white;
  background: rgba($background, 0.4);
  margin-top: 20px;
  padding: 20px 40px 20px 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 415px) {
    justify-content: center;
  }

  &-temperature {
    font-size: 2rem;
    font-weight: bold;
    padding: 20px;
  }
  &-info {
    &-item {
      padding: 5px;
    }
  }
  &-more {
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>