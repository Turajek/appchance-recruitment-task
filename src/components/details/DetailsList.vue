<template>
  <div class="detailsList">
    <div class="detailsList-headers">
      <div class="detailsList-headers-item">Hour</div>
      <div class="detailsList-headers-item">Temperature</div>
      <div class="detailsList-headers-item">Description</div>
    </div>
    <DetailsItem v-for="(item,key) in list" :item="item" :key="key" />
  </div>
</template>

<script>
import DetailsItem from "@/components/details/DetailsItem.vue";
export default {
  components: {
    DetailsItem
  },
  props: {
    list: {
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.detailsList {
  @media (max-width: 400px) {
    font-size: 0.9rem;
  }
  &-headers {
    display: flex;
    &-item {
      flex: 1;
      min-width: 90px;

      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }
  }
}
</style>