<script setup>
import { ref } from 'vue';
import { useUserStore } from './stores/users';

const user_store = useUserStore()

const user_input = ref({
  name:'',
  email:''
})

const sort = ref(false)

const CreateUser = () => {
  if(!user_input.value.name || !user_input.value.email){
    return alert('Please enter both values')
  }

  user_store.create(user_input.value)

  user_input.value = {
    name:'',
    email:''
  }
}

const DeleteUser = id =>{
  user_store.delete(id)
  alert("User deleted" + id)
}

</script>

<template>

    <main>
      <h1>Team manager</h1>

      <form @submit.prevent="CreateUser">
        <input type="text" placeholder="e.g Yusuf Çelik" v-model="user_input.name" />
        <input type="text" placeholder="e.g yusuf@hotmail.com" v-model="user_input.email" />
        <input type="submit" value="Create user" />
      </form>

      <label>
        <span>Sort</span>
        <input type="checkbox" v-model="sort" />
      </label>

      <div class="users" v-if="!sort">
        <div v-for="user in user_store.users" class="user">
        <hr class="dashed" />
        <div>ID:{{user.id}}</div>
        <h3>{{user.name}}</h3>
        <p>{{user.email}}</p>
        <button  @click="DeleteUser(user.id)">Delete User</button>
        <hr class="dashed" />
        </div>
        
      </div>

      <div class="users" v-else>
        <div v-for="user in user_store.usersByName" class="user">
        <hr class="dashed" />
        <div>ID:{{user.id}}</div>
        <h3>{{user.name}}</h3>
        <p>{{user.email}}</p>
        <hr class="dashed" />
        </div>
      </div>
      
    </main>

</template>

<style>

</style>
