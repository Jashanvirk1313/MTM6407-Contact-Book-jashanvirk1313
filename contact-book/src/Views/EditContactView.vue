<template>
    <div class="container">
      <h1>Edit Contact</h1>
      <form @submit.prevent="updateContact" class="contact-form">
        <input v-model="firstName" placeholder="First Name" required />
        <input v-model="lastName" placeholder="Last Name" required />
        <input v-model="email" placeholder="Email" required />
        <button type="submit" class="btn">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    setup() {
      const route = useRoute();
      const firstName = ref('');
      const lastName = ref('');
      const email = ref('');
  
      onMounted(() => {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        const contact = contacts.find(c => c.id == route.params.id);
        if (contact) {
          firstName.value = contact.firstName;
          lastName.value = contact.lastName;
          email.value = contact.email;
        }
      });
  
      const updateContact = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
        const index = contacts.findIndex(c => c.id == route.params.id);
        if (index !== -1) {
          contacts[index] = { ...contacts[index], firstName: firstName.value, lastName: lastName.value, email: email.value };
          localStorage.setItem('contacts', JSON.stringify(contacts));
          window.location.href = '/';
        }
      };
  
      return { firstName, lastName, email, updateContact };
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
  