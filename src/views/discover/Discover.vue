<template>
  <div id="app"></div>
  <h1>TEST</h1>
  <div v-for="sport in sports" v-bind:key="sport.id">
    <h1>{{ sport.name }}</h1>
    <h3>#{{ sport.primary_color }}</h3>
    <h3>#{{ sport.secondary_color }}</h3>
  </div>

</template>
<style lang="css" src="./discover.css"></style>
<script src="./discover.js"></script>