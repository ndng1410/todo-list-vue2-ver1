<template>
  <div class="card-box">
    <div class="card-box-wrapper">
      <el-input
        disabled
        :placeholder="taskName"
        type="text"
        v-model="input"
      ></el-input>
    </div>
    <div class="card-box-btn">
      <button @click="onDelete" class="btn-delete">
        <span class="material-symbols-outlined"> delete </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["taskName"],
  data() {
    return {
      input: "",
    };
  },
  methods: {
    onDelete() {
      this.$emit("remove-task");
    },
  },
};
</script>

<style></style>
