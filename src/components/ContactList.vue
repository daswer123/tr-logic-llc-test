<template>
  <section class="contacts">
    <h1 class="contacts--title">Список контактов</h1>
    <ul v-if="getAllContacts.length" class="contacts--list">
      <ContactItem
        v-bind:data="contact"
        v-for="contact in getAllContacts"
        v-bind:key="contact.id"
      />
    </ul>
    <h2 class="empty-contact-list" v-else>
      К сожалению в вашем списке нет контактов
    </h2>
    <ContactAddNew />
  </section>
</template>

<script>
import ContactItem from "./ContactItem";
import ContactAddNew from "./ContactAddNew";

export default {
  computed: { // Получаем из стора все контакты и обрабатываем их
    getAllContacts() {
      return this.$store.getters.getAllContacts;
    }
  },
  components: {
    ContactItem,
    ContactAddNew
  }
};
</script>

<style scoped>
.contacts {
  width: 900px;
  padding: 20px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.contacts--title {
  font-size: 35px;
}

.contacts h1 {
  text-align: center;
  margin-bottom: 50px;
}

.contacts--list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.empty-contact-list {
  text-align: center;

  color: rgb(139, 139, 139);
}

@media (max-width: 950px) {
  .contacts {
    width: 500px;
  }
}

@media (max-width: 600px) {
  .contacts {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
}
</style>
