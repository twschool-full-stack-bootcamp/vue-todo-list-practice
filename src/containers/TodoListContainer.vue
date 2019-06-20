<template>
    <div class="container">
        <AddTaskInput />
        <FilterTabs @switchFilterStatus="switchFilterStatus" />
        <TodoList />
    </div>
</template>

<script>
import TodoList from '../components/TodoList';
import AddTaskInput from '../components/AddTaskInput';
import FilterTabs from '../components/FilterTabs';

export default {
  components: {
    TodoList,
    AddTaskInput,
    FilterTabs,
  },
  methods: {
    switchFilterStatus(status) {
      this.filterStatus = status;
    },
  }
}
</script>
<style scoped>
    .container {
        margin-top: 60px;
        margin-left: 100px;
        margin-right: 100px;
        text-align: left;
    }
</style>
