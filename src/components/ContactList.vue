<template>
    <section class="contacts">
        <h1 class="contacts--title">Список контактов</h1>
        <ul v-if="getAllContacts.length" class="contacts--list" >
            <ContactItem
             v-bind:data="contact"
             v-for="contact in getAllContacts"
             v-bind:key="contact.id" />
        </ul>
        <h2 class="empty-contact-list" v-else>К сожалению в вашем списке нет контактов</h2>
        <ContactAddNew />
    </section>
</template>

<script>
import ContactItem from "./ContactItem";
import ContactAddNew from "./ContactAddNew";

export default {
    computed : {
        getAllContacts() {
            return this.$store.getters.getAllContacts
        }
    },
    components : {
        ContactItem,
        ContactAddNew
    }
}

</script>

<style scoped>
    .contacts{
        padding: 20px;
        box-shadow: 0 0 10px 2px rgba(0,0,0, 0.2);
        border-radius: 5px;
    }

    .contacts--title{
        font-size: 35px;
    }

    .contacts h1{
        text-align: center;
        margin-bottom: 50px;
    }

    .contacts--list{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .empty-contact-list{
        width: 800px;
        text-align: center;

        color: rgb(139, 139, 139);
    }

</style>