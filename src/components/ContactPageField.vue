<template>
  <li class="contact--field">
    <div class="field--info">
      <h3>{{ fieldName }} :</h3>

      <p v-if="!isEditMode">{{ fieldValue }}</p>
      <input
        v-else
        v-model="newFieldValue"
        type="text"
        name="editValue"
        class="edit--input"
        :placeholder="fieldValue"
        autofocus
      />
    </div>
    <div v-if="!isEditMode" class="field--buttons">
      <button @click="switchEditMode" type="button" class="field--edit">
        Edit
      </button>
      <button @click="deleteField" type="button" class="field--delete">
        Delete
      </button>
    </div>

    <div v-else class="edit--buttons">
      <button
        @click="swithEditModeInner"
        type="button"
        class="edit-btn--cancel"
      ></button>
      <button
        @click="changeField"
        type="button"
        class="edit-btn--submit"
      ></button>
    </div>
  </li>
</template>

<script>
export default {
  data: () => {
    return {
      isEditMode: false,
      newFieldValue: ""
    };
  },
  props: {
    fieldName: String,
    fieldValue: String,
    contactId: String
  },
  methods: {
    deleteField() { //Удаляем форму с подтверждением
      if (confirm("Вы действительно хотите удалить это поле")) {
        this.$store.dispatch("deleteField", {
          fieldName: this.fieldName,
          contactId: this.contactId
        });
      }
    },
    changeField() { // Изменяем форму, предворительно проверяя на присутствие данных
      if (!this.newFieldValue) {
        alert("Пожалуйтса введите хоть что-то");
        return;
      }

      this.$store.dispatch("changeField", {
        fieldName: this.fieldName,
        newFieldValue: this.newFieldValue,
        contactId: this.contactId
      });
    },
    switchEditMode() {
      this.isEditMode = !this.isEditMode;
    },
    swithEditModeInner() {  // Отдельное переключение формы для режима редактирования, сделанно по ТЗ
      if (confirm("Вы действительно хотите выйти из режима редактирования")) {
        this.isEditMode = !this.isEditMode;
      }
    }
  }
};
</script>

<style scoped>
.contact--field {
  display: flex;
  padding-left: 10px;
}

.contact--field h3 {
  font-size: 20px;
  margin-right: 20px;
}

.contact--field p {
  margin-top: 22px;
  font-size: 18px;
}

.contact--field:hover {
  transition: 0.4s;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}

.field--info {
  display: flex;
}

.field--buttons {
  display: none;
  margin-left: auto;
  margin-top: 20px;
  margin-right: 15px;
}

.contact--field:hover .field--buttons {
  display: block;
}

.field--buttons button {
  border: 0;
  font-size: 0;
  background-color: inherit;
  position: relative;
}

.field--edit {
  cursor: pointer;
  width: 20px;
  height: 20px;
  background-image: url("../../public/images/edit.svg");

  margin-right: 25px;
}

.field--edit:hover,
.field--edit:active,
.field--edit:focus {
  transition: 0.4s;
  transform: scale(1.2);
}

.field--delete {
  cursor: pointer;

  width: 20px;
  height: 20px;

  margin-right: 10px;
}

.field--delete:hover,
.field--delete:active,
.field--delete:focus {
  transition: 0.4s;
  transform: rotate(180deg);
}

.field--delete::before,
.field--delete::after {
  content: "";
  position: absolute;

  left: 0;

  width: 20px;
  height: 3px;

  background-color: rgb(139, 139, 139);
  transform: rotate(45deg);
}

.field--delete::after {
  transform: rotate(-45deg);
}

.edit--input {
  width: 150px;
  height: 30px;
  border: 0;

  margin-top: 15px;
}

.edit--buttons {
  margin-left: auto;
  margin-right: 20px;

  margin-top: 20px;
}

.edit--buttons button {
  border: 0;
  cursor: pointer;
  user-select: none;
  background-color: inherit;
  position: relative;
}

.edit-btn--cancel {
  width: 20px;
  height: 20px;

  margin-right: 30px;
}

.edit-btn--cancel:hover,
.edit-btn--cancel:active,
.edit-btn--cancel:focus {
  transition: 0.4s;
  transform: rotate(180deg);
}

.edit-btn--submit {
  width: 20px;
  height: 20px;
}

.edit-btn--submit:hover,
.edit-btn--submit:active,
.edit-btn--submit:focus {
  transition: 0.4s;
  transform: scale(1.2);
}

.edit-btn--cancel::before,
.edit-btn--cancel::after {
  content: "";
  position: absolute;

  width: 20px;
  height: 3px;

  left: 0;

  background-color: rgb(139, 139, 139);
  transform: rotate(45deg);
}

.edit-btn--cancel::after {
  transform: rotate(-45deg);
}

.edit-btn--submit::before,
.edit-btn--submit::after {
  content: "";
  position: absolute;

  width: 19px;
  height: 3px;

  top: 9px;
  left: 0;

  background-color: rgb(139, 139, 139);
  transform: rotate(-60deg);
}

.edit-btn--submit::after {
  width: 12px;
  transform: rotate(50deg);

  left: -5px;
  top: 11px;
}

@media (max-width: 550px) {
  .contact--field {
    flex-direction: column;
    justify-content: center;
  }
  .field--info {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  .field--info h3 {
    margin-bottom: 0;
    margin-right: 0;

    margin-top: 0px;
    padding-top: 10px;
  }

  .field--info p {
    padding: 0;
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .field--buttons {
    margin: 0 auto;
    margin-top: 0;

    margin-bottom: 20px;
  }

  .edit--buttons {
    margin: 0 auto;
    margin-top: 20px;

    margin-bottom: 20px;
  }
}
</style>
