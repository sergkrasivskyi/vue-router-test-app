<template>
  <section v-if="destination" class="destination">
    <h1>{{destination.name}}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name">
      <p>{{destination.description}}</p>
    </div>
  </section>
</template>
<script>
import sourseData from '@/data.json'
export default {
  // 2. приймаємо пропс
  props: {
    id: {type: Number, required: true}
  },
  data() {
    return {
      // прибрали з computed і встановили destination значення для ініціалізаціїї - null
      destination: null
    }
  },
  methods: {
  // виносимо у окремий метод початкове визначення властивості destination, це буде асинхронний метод
    async initData() {
        const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
        this.destination = await response.json()
    }
  },
  computed: {
    // 1. без пропсу, ми використовували $route
    // destinationId() {
    //   return parseInt(this.$route.params.id)
    // },
    // 2. з пропсом id ми можемо використовувати computed destination у такий спосіб:
    // destination() {
    //   return sourseData.destinations.find(destination => destination.id === parseInt(this.id))
    // }


    // у подальшому це вже буде властивість ,яка визначається за допомогою асинхронного запросу
    // і вже не буде computed-властивістю
    // destination() {
    //   return sourseData.destinations.find(destination => destination.id === this.destinationId)
    // }
  },
  // 1. робимо асинхронний запит на API
  // async created() {
  //   const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
  //   this.destination = await response.json()
    // робимо вотчер - якщо змінились params, то ще раз робимо ajax запрос на API
    // this.$watch(
    //   () => this.$route.params,
    //   async () => {
    //     const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}`)
    //     this.destination = await response.json()
    //   }
    // )
  // }
  // 2. За домогою рефакторингу - метода initData та того ж вотчера
  // async created() {
  //   this.initData()
  //   this.$watch(() => this.$route.params, this.initData)
  // }
  // 3. Можна зробити без вотчера
  async created() {
    this.initData()
    // далі переходимо у App.vue і додаємо :key атрибут до router-view (! увага, тут саме view, не link)
    // зі значенням - :key="$route.path"
    // це працює гарно, так само як і з $watch
  }

}
</script>