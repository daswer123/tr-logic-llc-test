import Vue from 'vue'
import Vuex from 'vuex'
import contacts from "../assets/data";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      contacts,
      oldContactData : null
  },
  mutations: {
      createNewContact(state,payload){
        const data = {...payload, fields : {} , avatarUrl : "images/avatar1.svg"}
        return state.contacts.push(data)
      },

      deleteContact(state,id){
        const index = state.contacts.findIndex(elem => elem.id === id);
        return state.contacts = [
            ...state.contacts.slice(0,index),
            ...state.contacts.slice(index+1)
            ]
        },
        deleteField(state,payload){

            delete state.contacts[payload.contactId-1].fields[payload.fieldName];
            return state.contacts = [...state.contacts]
        },
        createNewField(state,payload){
            const {contactId, fieldName, fieldValue} = payload;

            if (state.contacts[contactId-1].fields[fieldName] != undefined){
                alert("Такое поле уже существует, если вы хотите отредактироать поле нажмите на соответсвующую кнопку")
                return 
            }

            return Vue.set(state.contacts[contactId-1].fields, fieldName, fieldValue)

        },
        changeField(state,payload){
            const {contactId, fieldName, newFieldValue} = payload;

            return Vue.set(state.contacts[contactId-1].fields, fieldName, newFieldValue)
        },
        setOldData(state,id){
            console.log(id)
            return state.oldContactData = state.contacts.find(elem => elem.id == id) 
        }
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
    },
    setOldData(context,id){
        context.commit("setOldData",id)
    }
  },
  getters : {
      getAllContacts: state => {
        return state.contacts
      },
      getCurrentContact: state => id => {
          return state.contacts.find(cont => cont.id == id);
      },
      getOldData : state => {
          return state.oldContactData
      }
  }
})

export default store