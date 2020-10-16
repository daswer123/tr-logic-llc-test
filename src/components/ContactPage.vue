<template>
  <section class="contact">
    <div class="contact--top">
      <img
        :src="`/${currentContact.avatarUrl}`"
        alt="User Avatar"
        class="contact--avatar"
      />
      <h2>{{ currentContact.name }}</h2>
      <p>{{ currentContact.phone }}</p>
      <button @click="backToContacts" type="button" class="contact--prev">
        Prev
      </button>
      <button type="button" @click="undo" class="contact--undo">Redo</button>
    </div>
    <div class="contact--bottom">
      <ul>
        <ContactPageField
          v-for="(field, index) in currentContact.fields"
          :key="index + field + (Math.random() + 1 *100)"
          :fieldName="index"
          :fieldValue="field"
          :contactId="`${currentContact.id}`"
        />
      </ul>
      <ContactAddNewField :contactId="`${currentContact.id}`" />
    </div>
  </section>
</template>

<script>
import ContactPageField from "./ContactPageField";
import ContactAddNewField from "./ContactAddNewField";
import { mapActions } from "vuex";

export default {
  computed: {
    currentContact() {
      const id = this.$route.params.id;
      return this.$store.getters.getCurrentContact(id);
    }
  },
  methods: {
    backToContacts() {
      this.$router.push("/");
    },
    ...mapActions(["undo"])
  },
  components: {
    ContactPageField,
    ContactAddNewField
  }
};
</script>

<style scoped>
.contact {
  display: flex;
  position: relative;
  flex-direction: column;
  width: 500px;
  padding: 20px;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.contact--top {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.contact--top h2 {
  margin-bottom: 0;
  font-size: 28px;
}

.contact--top p {
  color: rgb(150, 149, 149);
  font-size: 14px;
}

.contact--prev {
  border: 0;
  font-size: 0;
  background-color: inherit;
  position: absolute;

  width: 30px;
  height: 30px;

  left: 20px;
  top: 20px;

  background: url("/images/left-arrow.svg");
}

.contact--undo {
  border: 0;
  font-size: 0;
  background-color: inherit;
  position: absolute;

  width: 30px;
  height: 30px;

  right: 20px;
  top: 20px;

  background: url("/images/undo.svg");
  background-repeat: no-repeat;
}

.contact img {
  height: 300px;
}
</style>
