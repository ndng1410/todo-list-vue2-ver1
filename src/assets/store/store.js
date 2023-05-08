// import { createStore } from 'vuex'

// // Create a new store instance.
// export default createStore({
//   state: {
//     tasks: null,
//   },
//   mutations: {
//     setTask(state, data) {
//         state.tasks = data

//     }
//   }
// })

import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, taskName: "job1" },
        { id: 2, taskName: "job2" },
        { id: 3, taskName: "job3" },
    ],
  },
  getters: {
    getTaskItem(state) {
      return state.tasks;
    }
  },
  mutations: {
    setTaskName(state, newTaskName) {
      state.taskName = newTaskName;
    },
    setTaskId(state, newTaskId) {
      state.id = newTaskId;
    },
    addTask(state, newTask) {
      state.tasks = newTask;
    }
  },
  actions: {
    handleSetTaskName(context, newTaskName) {
      context.commit('setTaskName', newTaskName);
    },
    handleSetTaskId(context, newTaskId) {
      context.commit('setTaskId', newTaskId);
    }
  },
});
