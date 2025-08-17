<script setup lang="ts">
  const { data } = await useFetch('/api/hello')
</script>

<template>
  <main class="container thecard">
    <h1>ed</h1>
    <pre>{{ data }}</pre>
  </main>
  <div class="thecard">
    <h1>ed</h1>
  </div>
</template>

<style>
.thecard{
    margin: 50px;
    padding: 50px;
    border-radius: 10px;
    background-color: white;
    border: 3px solid rgb(243, 185, 243);
    display: flex;
    flex-direction: column;
    position: relative;
    height: 100%;
    width: 800px;
}

.thecard:before{
    content: "";
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(243, 185, 243, .5);
    border-radius: 10px;
    transform-origin: center;
    transition: transform .3s ease;
    z-index: -1;
}

.thecard:hover:before {
  transform: scale(1.1) rotate(5deg);
}

</style>
