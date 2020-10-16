import Vue from 'vue'
import Vuex from 'vuex'
import contactData from "../assets/data";
import {default as undoRedo, scaffoldStore} from 'undo-redo-vuex';

Vue.use(Vuex)

const store = new Vuex.Store(

    scaffoldStore({
      state: {
            contacts : contactData,
            resetContact  : JSON.parse ( JSON.stringify ( contactData) )
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
                const {contactId, fieldName} = payload;
                const index = state.contacts.findIndex(elem => elem.id == contactId);

                delete state.contacts[index].fields[fieldName];
                return state.contacts = [...state.contacts]
            },
            createNewField(state,payload){
                const {contactId, fieldName, fieldValue} = payload;
                const index = state.contacts.findIndex(elem => elem.id == contactId);

                return Vue.set(state.contacts[index].fields, fieldName, fieldValue)

            },
            changeField(state,payload){
                const {contactId, fieldName, newFieldValue} = payload;
                const index = state.contacts.findIndex(elem => elem.id == contactId);

                return Vue.set(state.contacts[index].fields, fieldName, newFieldValue)
            },
            emptyState: state => {
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
          getCurrentContact: state => id => {
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