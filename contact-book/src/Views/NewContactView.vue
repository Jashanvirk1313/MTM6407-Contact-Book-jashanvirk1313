<template>
    <div class="container">
      <h1>New Contact</h1>
      <form @submit.prevent="addContact" class="contact-form">
        <input v-model="firstName" placeholder="First Name" required />
        <input v-model="lastName" placeholder="Last Name" required />
        <input v-model="email" placeholder="Email" required />
        <button type="submit" class="btn">Add</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const firstName = ref('');
      const lastName = ref('');
      const email = ref('');
  
      const addContact = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        const newContact = { id: Date.now(), firstName: firstName.value, lastName: lastName.value, email: email.value };
        contacts.push(newContact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        window.location.href = '/';
      };
  
      return { firstName, lastName, email, addContact };
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
  .contact-form {
    display: flex;
    flex-direction: column;
  }
  .contact-form input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  .btn {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: #0056b3;
  }
  </style>
  