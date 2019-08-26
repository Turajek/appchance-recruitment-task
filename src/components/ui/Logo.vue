<template>
  <div class="logo">
    <div class="logo-img">
      <img src="@/assets/images/logo.svg" />
    </div>
    <div class="logo-text">AirApp</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-family: "Lato";
  &-text {
    font-weight: bold;
    padding-left: 10px;
  }
}
</style>