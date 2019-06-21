<template>
  <a-row
    @dblclick.native="changeEditStatus"
    type="flex"
    justify="space-between"
    class="TodoItem_container"
   >
    <a-col :span="22">
        <span 
          :class="{'TodoItem_container-done': task.status === 'Done'}"
          :style="{ display: editable ? 'none' : 'block' }"
        >
          {{ index + 1 }}. {{ task.content }}
        </span>
        <a-input
            :style="{ display: editable ? 'block': 'none' }"
            v-model="content"
            @keyup.enter="updateTaskContent"
        />
    </a-col>
    <a-col :span="2">
      <a-checkbox :checked="task.status === 'Done'" @change="onChange" />
    </a-col>
  </a-row>
</template>

<script>
import { DONE, UNDO } from '../constant';

export default {
  name: 'TodoItem',
  props: {
    index: {
        type: Number,
        required: true
    }, 
    task: {
        type: Object,
        required: true
    },
  },
  data() {
      return {
         editable: false, 
         content: this.task.content,
      }
  },
  methods: {
    onChange(event) {
        this.$emit('updateTask', { ...this.task, status: event.target.checked ? DONE: UNDO });
    },
    updateTaskContent() {
        this.$emit('updateTask', { ...this.task, content: this.content });
        this.editable = false;
    },
    changeEditStatus() {
        if(!this.editable) {
          this.editable = true;
        }
    },
  }
}
</script>

<style scoped>
  .TodoItem_container {
      cursor: pointer;
      height: 100%;
      width: 100%;
  }

  .TodoItem_container:hover {
    background-color: green;
    opacity: 0.5;
  }

  .TodoItem_container-done {
      text-decoration: line-through;
  }
</style>
