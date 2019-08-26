<template>
  <div class="detailsItem">
    <div
      class="detailsItem-tile"
    >{{new Date(item.dt_txt).toLocaleTimeString('pl', {hour: '2-digit', minute:'2-digit'})}}</div>
    <div class="detailsItem-tile">{{item.main.temp.toFixed(0)}} &#176 C</div>
    <div class="detailsItem-tile">{{item.weather[0].description}}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.detailsItem {
  display: flex;
  &-tile {
    background: rgba($background, 0.5);
    height: 50px;
    flex: 1;
    min-width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin: 3px;
  }
}
</style>