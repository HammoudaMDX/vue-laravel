<template>
  <div id="app" class="container">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
.vue-color {
  background: #41b883 !important;
}
.container {
  margin-top: 60px;
}

.submit-button {
  margin-top: 24px !important;
  float: right;
}

.data {
  margin-top: 15px;
}

thead tr th {
  background: #e0e0e0 !important;
}

.ui.inverted.dimmer {
  background-color: rgba(255, 255, 255, 0) !important;
}
</style>

