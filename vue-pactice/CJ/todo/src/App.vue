<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <form @submit.prevent="addTodo()">
      <div class="form-group">
        <label for="todo">Email address</label>
        <input
          v-model="newTodo"
          type="text"
          class="form-control"
          id="todo"
          aria-describedby="newTodoHelp"
        />
        <small id="emailHelp" class="form-text text-muted">Enter a new todo.</small>
      </div>
      <button type="submit" class="btn btn-primary">Add Todo</button>
    </form>
    <h3 class="bg-info">todoList</h3>
    <ul class="list-group mr-3">
      <li class="list-group-item" v-for="(todo, index) in todoList" :key="index">
        <button type="button" class="btn btn-primary" v-if="!todo.done" @click="markDone(todo)">done</button>
        <span :class="{
          isDone:todo.done,
          isBlock:true
        }">
          {{todo.title}}
          <span
            v-if="todo.done"
            class="d-inline-block p-1 bg-success float-right"
          >finished</span>
          <span v-else class="d-inline-block p-1 bg-danger float-right">unfinish</span>
        </span>
        <button type="button" class="float-right btn btn-danger" @click="remove(index)">remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newTodo: "",
      todoList: [],
    };
  },
  watch: {
    todoList: {
      //! 这里一定要写成    handler     ！！！！！不要写错了
      handler:function() {
        localStorage.todos = JSON.stringify(this.todoList);
      },
      deep: true,
    },
  },
  mounted(){
    // 如果本地有存储则设置本地的
    if(localStorage.todos){
      this.todoList=localStorage.todos
    }
  },
  methods: {
    addTodo() {
      // console.log("%cform submit", "font-size:2rem;color:purple;");
      if (this.newTodo) {
        this.todoList.push({
          title: this.newTodo.trim(),
          done: false,
        });
        this.newTodo = "";
      }
      // console.log("%c" + this.todoList, "font-size:2rem;color:purple;");
    },
    markDone(todo) {
      todo.done = true;
    },
    remove(index) {
      this.todoList.splice(index, 1);
    },
  },
};
</script>

<style>
.isDone {
  text-decoration: line-through;
}
.isBlock {
  display: inline-block;
  width: 70%;
  padding-left: 10%;
  font-size: 1.1rem;
}
</style>
