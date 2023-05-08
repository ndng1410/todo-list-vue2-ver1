<template>
  <div id="app">
    <div class="header">
      <h1>To do List</h1>
    </div>
    <card-add></card-add>
    <input v-model="taskName" />
    <button @click="setTaskName">thay doi task</button>
    <h1>{{ getTaskName }}</h1>
    <h2>{{ getTaskid }}</h2>
    <button @click="gettasklist">123124</button>
  </div>
</template>

<script>
import './assets/style/global.css';
import CardAddVue from './components/CardAdd.vue';

export default {
  name: 'App',
  components: {
    'card-add': CardAddVue,
  },
  data() {
    return {
      taskName: '',
    }
  },
  computed: {
    getTaskName() {
      return this.$store.state.taskName;
    },
    getTaskid() {
      return this.$store.state.id;
    }
  },
  methods: {
    setTaskName() {
      this.$store.dispatch('handleSetTaskName', this.taskName)
    },
    gettasklist() {
      console.log(this.$store.getters.gettasklist)
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
