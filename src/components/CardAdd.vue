<template>
  <div id="todo-list">
    <form @submit.prevent="addNewTask">
      <div class="card-box">
        <div class="card-box-wrapper">
          <span class="card-box-title">Task</span>
          <el-input
            type="text"
            v-model="input"
            placeholder="Text something!"
            id="new-task"
          />
        </div>
        <div class="card-box-btn">
          <button>
            <span class="material-symbols-outlined"> add </span>
          </button>
        </div>
      </div>
    </form>
    <card-task
      v-for="(task, index) in tasks"
      v-bind:key="task.id"
      v-bind:taskName="task.taskName"
      @remove-task="removeTask(index)"
    >
    </card-task>

  </div>
</template>

<script>
import CardTask from "./CardTask.vue";
import { mapActions } from "vuex";
// import store from "../assets/store/store.js";

export default {
  name: "task-itemlist",
  components: {
    'card-task': CardTask,
  },
  data() {
    return {
      input: "",
      tasks: [
        // { id: 1, taskName: "job1" },
        // { id: 2, taskName: "job2" },
        // { id: 3, taskName: "job3" },
      ],
      nextTodoId: 0,
    };
  },
  methods: {
    addNewTask() {
      if (this.input.trim(" ") == "") {
        console.log("error");
      } else {
        this.tasks.push({
          id: this.nextTodoId++,
          taskName: this.input,
        });
        // store.commit("setTask", this.tasks);
        this.input = "";
      }
    },
    ...mapActions({
      setTask: "setTask",
    }),
    removeTask(target) {
      this.tasks.splice(target, 1);
      console.log(target);
    },
  },
};
</script>

<style></style>
