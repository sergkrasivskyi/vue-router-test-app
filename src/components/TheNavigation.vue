<template>  
    <div id="nav">
      <router-link to="/">Travel App logo</router-link>
      <router-link v-for="destination in destinations" 
      :key="destination.id"
      :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug }}">
        {{destination.name}}
      </router-link>
    </div>
</template>
<script>
import sourseData from '@/data.json'
export default {
  data() {
    return {
      destinations: sourseData.destinations
    }
  }
}
</script>
<style lang="css">
/* Ми можемо зробити свій стиль активному посиланню */
/* для цього у роутерів потрібно надати відровідного значення властивості  */
/* linkActiveClass: 'active-link' - може бути довільне значення , це і буде
  ім'ям класу для стилізації*/
/* #nav .active-link {
    color: tomato;
    border-bottom: 2px solid tomato;
} */
</style>