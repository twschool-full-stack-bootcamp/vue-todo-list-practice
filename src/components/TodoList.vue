<template>
  <a-list
    itemLayout="horizontal"
    :dataSource="tasks"
  >
   <a-list-item slot="renderItem" slot-scope="item, index">
     <TodoItem 
      :index="index"
      :task="item"
      @updateTask="updateTask"
     />
   </a-list-item>
  </a-list>
</template>

<script>
import TodoItem from './TodoItem';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TodoList',
  mounted() {
    this.fetchAllTask();
  },
  computed: mapState([
    'tasks',
  ]),
  components: {
    TodoItem,
  },
  methods: {
    ...mapActions([
      'fetchAllTask',
    ]),
    updateTask(param) {
      this.$store.commit('updateTask', param);
    },
  }
}
</script>

<style scoped>
  .todolist_container{
    height: 100%;
    overflow: scroll;
  }
</style>
