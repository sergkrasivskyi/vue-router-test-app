<template>
  <TheNavigation/>

  <div class="container">
    <!-- якщо використовувати :key="$route.path то компонент заново рендеритсься
    та дестроїться при зміни значення :key="$route.path -->
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
  import TheNavigation from '@/components/TheNavigation.vue';
  
  export default {
    components: {
      TheNavigation
    },
  };
</script>
