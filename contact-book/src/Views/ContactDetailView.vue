<template>
    <div class="container">
      <h1>{{ contact.firstName }} {{ contact.lastName }}</h1>
      <p>{{ contact.email }}</p>
      <router-link :to="'/edit/' + contact.id" class="btn">Edit</router-link>
      <button @click="deleteContact" class="btn delete-btn">Delete</button>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const contact = ref(null);
  
      onMounted(() => {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contact.value = contacts.find(c => c.id == route.params.id);
      });
  
      const deleteContact = () => {
        let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        contacts = contacts.filter(c => c.id != route.params.id);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        window.location.href = '/';
      };
  
      return { contact, deleteContact };
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  h1 {
    text-align: center;
  }
  p {
    text-align: center;
  }
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    margin: 10px 5px;
    text-decoration: none;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  .delete-btn {
    background-color: #dc3545;
  }
  .delete-btn:hover {
    background-color: #c82333;
  }
  </style>
  