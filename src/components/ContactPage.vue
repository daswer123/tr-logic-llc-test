<template>
    <section class="contact">
        <div class="contact--top">
            <img :src="`/${currentContact.avatarUrl}`" alt="User Avatar" class="contact--avatar"/>
            <h2>{{currentContact.name}}</h2>
            <p>{{currentContact.phone}}</p>
        </div>
        <div class="contact--bottom">
            <ul>
                <ContactPageField 
                v-for="(field, index) in currentContact.fields"
                :key="index + field"
                :fieldName="index"
                :fieldValue="field"
                :contactId="`${currentContact.id}`" />
            </ul>
            <ContactAddNewField :contactId="`${currentContact.id}`"/>
        </div>
    </section>
</template>

<script>
import ContactPageField from "./ContactPageFields";
import ContactAddNewField from "./ContactAddNewField";

export default({
    computed : {
        currentContact(){
            const id = this.$route.params.id;
            const newData = this.$store.getters.getCurrentContact(id);
            
            console.log(newData)

            console.log(this.$store.getters.getOldData)
            
            return newData;
        }
    },
    components : {
        ContactPageField,
        ContactAddNewField
    }
})
</script>

<style scoped>

.contact{
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 20px;
    box-shadow: 0 0 10px 2px rgba(0,0,0, 0.2);
    border-radius: 5px;

}

.contact--top{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
}

.contact--top h2{
    margin-bottom: 0;
    font-size: 28px;
}

.contact--top p{
    color: rgb(150, 149, 149);
    font-size: 14px;
}

.contact img{
    
    height: 300px;

}


</style>