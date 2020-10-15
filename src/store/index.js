import Vue from 'vue'
import Vuex from 'vuex'
import contacts from "../assets/data";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
      contacts,
      currentContact : {},
      confirm : false
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
  },
  actions : {
    createNewContact(context,payload){
        context.commit("createNewContact",payload)
    },
    deleteContact(context,id){
        context.commit("deleteContact",id)
    }
  },
  getters : {
      getAllContacts: state => {
        return state.contacts
      },
      getContactId: state => {
          return state.contacts.length
      }
  }
})

export default store