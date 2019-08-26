<template>
  <div class="details">
    <CityPreview v-if="weather" :city="weather.city" />
    <DetailsList v-if="weather" :list="weather.list" />
  </div>
</template>

<script>
import CityPreview from "@/components/details/CityPreview.vue";
import DetailsList from "@/components/details/DetailsList.vue";
export default {
  name: "weather-details",
  computed: {
    weather() {
      return this.$store.getters.hourlyWeather;
    }
  },
  components: {
    CityPreview,
    DetailsList
  },
  created() {
    this.$store.dispatch("fetchHourlyWeather", this.$route.params.id);
  }
};
</script>
