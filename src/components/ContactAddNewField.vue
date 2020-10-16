<template>
    <form @submit.prevent="createNewContact" action="#" class="contacts--form">

        <button @click="switchForm" v-if="!isActive" type="button" class="contacts--add-new">
            <p>Добавить новое поле</p>
        </button>

        <section v-else class="contacts--create-form">
            <label class="contacts--input-label">
                <input v-model="fieldName" type="text" name="fieldName" placeholder="Введите название поля" />
            </label>
            <label class="contacts--input-label">
                <input v-model="fieldValue" type="text" name="fieldValue" placeholder="Введите его значение" />
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
            fieldName : "",
            fieldValue : "",
        }
    },
    props  : {
        contactId : String
    },
    methods : {
        createNewContact(){
            if (!this.fieldName || !this.fieldValue){
                alert("Пожалуйста имя поля или его значение");
                return;
            }

            this.$store.dispatch("createNewField",{contactId: this.contactId, fieldName : this.fieldName, fieldValue: this.fieldValue})
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
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .contacts--create-form{
        width: 100%;
    }

    .contacts--add-new{
        width: 230px;
        height: 35px;
        cursor: pointer;

        position: relative;

        margin-left: 40px;
        padding-top: 0;
        padding-left: 20px;

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
        margin-left: 40px;
    }

    .contacts--input-label{
        margin-right: 10px;
        color: rgb(139, 139, 139);
        font-size: 16px;
        text-align: center;
    }

    .contacts--input-label input{
        width: 150px;
        padding: 5px;
        padding-top:10px;
        padding-bottom: 10px;
        border: 1px solid rgb(212, 210, 210)
    }

    .contacts--action-btn{
        margin-left: auto;
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

        margin-right: 30px;
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