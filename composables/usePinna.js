import { defineStore } from 'pinia';

export const useAdminStore = defineStore({
  id: 'admin-store',
  state: () => {
    return {
      isAdmin: false,
      activeUser: '',
      adminData: {},
      userCred: {uid: '', token: ''}
    };
  },
  actions: {
    SetActiveUser(id, set) {
      if (set) {
        this.activeUser = id;
        localStorage.setItem('activeAdmin', id)
      } else {
        this.activeUser = '';
      }
    },

    SetAdminData(data) {
      this.adminData = data
    },
    SetUserCred(uid, token) {
      this.userCred = {uid: uid, token: token}
      
    },
    SetAdmin(data){
      this.isAdmin = data
    },
    
  },
  getters: {
    // filtersList: state => state.filtersList,
  },
});
