<template>
    <div class="container">
      <h1>Contact Book</h1>
      <input v-model="searchQuery" placeholder="Search contacts..." class="search-input" />
      <ul class="contact-list">
        <li v-for="contact in filteredContacts" :key="contact.id">
          <router-link :to="'/contact/' + contact.id" class="contact-link">{{ contact.lastName }}, {{ contact.firstName }}</router-link>
        </li>
      </ul>
      <router-link to="/new" class="btn">Add New Contact</router-link>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const searchQuery = ref('');
      const contacts = ref(JSON.parse(localStorage.getItem('contacts') || '[]'));
  
      const filteredContacts = computed(() => {
        return contacts.value.filter(contact =>
          contact.firstName.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
          contact.lastName.toLowerCase().includes(searchQuery.value.toLowerCase())
        ).sort((a, b) => a.lastName.localeCompare(b.lastName));
      });
  
      return { searchQuery, filteredContacts };
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
  .search-input {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .contact-list {
    list-style: none;
    padding: 0;
  }
  .contact-link {
    display: block;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    text-decoration: none;
    color: #333;
    background-color: #f9f9f9;
  }
  .btn {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    text-align: center;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  