<template>
    <form @submit.prevent="createNewContact" action="#" class="contacts--form">

        <button @click="switchForm" v-if="!isActive" type="button" class="contacts--add-new">
            <p>Добавить новый контакт</p>
        </button>

        <section v-else class="contacts--create-form">
            <label class="contacts--input-label">
                <input v-model="name" type="text" name="name" placeholder="Введите имя контакта" />
            </label>
            <label class="contacts--input-label">
                <input v-model="phone" type="text" name="phone" placeholder="Введите номер контакта" />
            </label>
            <div class="contacts--action-btn">
                <button @click="switchForm" type="button" class="action-btn--cancel"></button>
                <button type="submit" class="action-btn--submit"></button>
            </div>
        </section>
    </form>
</template>

<script>
export default {
    data : () => {
        return {
            isActive : false,
            name : "",
            phone : "",
        }
    },
    methods : {
        createNewContact(){
            if (!this.phone || !this.name){
                alert("Пожалуйста введите имя или номер контакта");
                return;
            }
            const id = this.$store.getters.getContactId + 1;
            this.$store.dispatch("createNewContact",{name : this.name, phone: this.phone, id})
        },
        switchForm(){
            this.isActive = !this.isActive
        }
    },
    
}
</script>

<style scoped>

    .contacts--form{
        display: flex;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-left: 20px;
    }

    .contacts--add-new{
        width: 230px;
        height: 35px;
        cursor: pointer;

        position: relative;

        padding-top: 0;
        padding-left: 30px;

        font-size: 14px;
        color: rgb(139, 139, 139);
        border: 0;
        background-color: inherit;
    }

    .contacts--add-new::before,
    .contacts--add-new::after{
        content: "";
        position: absolute;
        display: block;

        width: 25px;
        height: 2px;

        top: 22px;
        left:0;

        background-color: rgb(139, 139, 139);
        transform: rotate(90deg);
    }

    .contacts--add-new::before{
        transform: rotate(0);
    }

    .contacts--create-form{
        display: flex;
        width: 100%;
    }

    .contacts--input-label{
        margin-top: 25px;
        margin-right: 50px;
        color: rgb(139, 139, 139);
        font-size: 16px;
        text-align: center;
    }

    .contacts--input-label input{
        padding: 10px;
        border: 1px solid rgb(212, 210, 210)
    }

    .contacts--action-btn{
        margin-left: auto;
        margin-top: 27px;
        margin-right: 20px;
        
    }

    .contacts--action-btn button{
        border: 0;
        background-color: inherit;
        position: relative;
    }

    .action-btn--cancel{        
        width: 20px;
        height: 20px;

        margin-right: 40px;
    }

    .action-btn--submit{
        width: 20px;
        height: 20px;
    }

    .action-btn--cancel::before,
    .action-btn--cancel::after{
        content: "";
        position: absolute;

        width: 20px;
        height: 3px;

        left: 0;

        background-color: rgb(139, 139, 139);
        transform: rotate(45deg);
    }

    .action-btn--cancel::after{
        transform: rotate(-45deg);
    }

    .action-btn--submit::before,
    .action-btn--submit::after{
        content: "";
        position: absolute;

        width: 19px;
        height: 3px;

        top: 9px;
        left: 0;

        background-color: rgb(139, 139, 139);
        transform: rotate(-60deg);
    }

    .action-btn--submit::after{
        width: 12px;
        transform: rotate(50deg);

        left: -5px;
        top: 11px;
    }

</style>