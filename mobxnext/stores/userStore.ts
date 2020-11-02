import { action, observable } from 'mobx'

interface IUser {
  email?: string
  password?: string
  userId?: string
}

class userStore {
  rootStore: unknown
  constructor(rootStore){
    this.rootStore = rootStore
  }

  @observable users: IUser[] = []

  @action 
 public async getUser(){
    const res = await fetch('http://[::1]:3000/users/');
    const users = await res.json();
    this.users= users
  }
  @action 
 public async addUser (){
  const res = await fetch('http://[::1]:3000/users/');
  const users = await res.json();
  this.getUser();
  }
}
export default userStore

