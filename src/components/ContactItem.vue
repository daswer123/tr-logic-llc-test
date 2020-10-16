<template>
  <li class="contacts--item">
    <router-link :to="{ path: `/contact/${data.id}` }">
      <img class="contacts--img" alt="Contact avatar" :src="data.avatarUrl" />
      <h2 class="contacts--name">{{ data.name }}</h2>
      <p class="contacts--number">{{ data.phone }}</p>
      <button
        @click.prevent="deleteContact(data.id)"
        type="button"
        class="contacts--delete"
      >
        Delete
      </button>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    deleteContact(id) {
      if (confirm("Вы действительно хотите удалить пользователя из своих контактов"))
      {
        this.$store.dispatch("deleteContact", id);
      }
    }
  }
};
</script>

<style scoped>
.contacts--item a {
  width: 800px;
  display: flex;
  text-decoration: none;
  color: black;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  padding: 10px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}

.contacts--item:last-child a {
  border: 0;
}

.contacts--img {
  width: 60px;
  height: 60px;

  background-color: inherit;
  border-radius: 50%;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
}

.contacts--name {
  width: 200px;
}

.contacts--number {
  margin-top: 18px;
  font-size: 16px;
}

.contacts--delete {
  font-size: 0;
  position: relative;
  cursor: pointer;

  width: 20px;
  height: 20px;

  margin-right: 20px;

  border: 0;
  background-color: inherit;
}

.contacts--delete::before,
.contacts--delete::after {
  content: "";
  position: absolute;

  width: 20px;
  height: 3px;

  background-color: rgb(139, 139, 139);
  transform: rotate(45deg);
}

.contacts--delete::after {
  transform: rotate(-45deg);
}
</style>
