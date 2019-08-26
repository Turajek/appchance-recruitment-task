<template>
  <div class="preview">
    <div class="preview-item">
      <strong>Date:</strong>
      {{new Date().toLocaleDateString('pl')}}
    </div>
    <div class="preview-item">
      <strong>Location</strong>
      {{city.name}},{{city.country}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      default: () => {}
    }
  }
};
</script>

<style lang="scss" scoped>
.preview {
  background: rgba($background, 0.4);
  padding: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 30px;
}
</style>