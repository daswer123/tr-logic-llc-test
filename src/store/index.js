import Vue from 'vue'
import Vuex from 'vuex'
import contactData from "../assets/data";
import {default as undoRedo, scaffoldStore} from 'undo-redo-vuex'; // Подключаем специальный плагин для Undo

Vue.use(Vuex)

const store = new Vuex.Store(

    scaffoldStore({ // По документации оборачиваем его в эту обёртку
      state: {
            contacts : contactData,
            resetContact  : JSON.parse ( JSON.stringify ( contactData) ) // Делаем клон первоначальной даты
      },
      mutations: {
          createNewContact(state,payload){ // Когда мы создаём новый контакт мы дополнительно присваиваем пустые поля и аватарку
            const data = {...payload, fields : {} , avatarUrl : "images/avatar4.svg"} 
            return state.contacts.push(data)
          },

          deleteContact(state,id){ // Что бы не запутатся ищем индекс по id и затем режем массив
            const index = state.contacts.findIndex(elem => elem.id === id);
            return state.contacts = [
                ...state.contacts.slice(0,index),
                ...state.contacts.slice(index+1)
                ]
            },
            deleteField(state,payload){ // Тоже самое что и с удалением контакта
                const {contactId, fieldName} = payload;
                const index = state.contacts.findIndex(elem => elem.id == contactId);

                delete state.contacts[index].fields[fieldName];
                return state.contacts = [...state.contacts]
            },
            createNewField(state,payload){ // Находим нужный контакт и создаем новое поле, используя Vue set, обновляем store
                const {contactId, fieldName, fieldValue} = payload;
                const index = state.contacts.findIndex(elem => elem.id == contactId);

                return Vue.set(state.contacts[index].fields, fieldName, fieldValue)

            },
            changeField(state,payload){ // Аналогично с созданием поля
                const {contactId, fieldName, newFieldValue} = payload;
                const index = state.contacts.findIndex(elem => elem.id == contactId);

                return Vue.set(state.contacts[index].fields, fieldName, newFieldValue)
            },
            emptyState: state => { // Необходимы action для плагина Undo
                const temp = JSON.parse ( JSON.stringify ( state.resetContact) )
                state.contacts = [...state.resetContact]; 
                state.resetContact = [...temp]
              },
      },
      actions : {
        createNewContact(context,payload){
            context.commit("createNewContact",payload)
        },
        deleteContact(context,id){
            context.commit("deleteContact",id)
        },
        deleteField(context,payload){
            context.commit("deleteField",payload)
        },
        createNewField(context,payload){
            context.commit("createNewField",payload)
        },
        changeField(context,payload){
            context.commit("changeField",payload)
        }
      },
      getters : {
          getAllContacts: state => {
            return state.contacts
          },
          getCurrentContact: state => id => { // Получаем нужный контакт по id
              return state.contacts.find(cont => cont.id == id);
          },
          getContactId : state => {
              return state.contacts.length
          }
      },
      plugins : [
        undoRedo(),
      ]
    })
)

export default store