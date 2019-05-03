import { action, observable } from 'mobx';
import { get } from 'lodash';
import axios from 'axios';

const baseUrl = 'http://192.168.1.211:4000';

class UserStore {
  @observable signedIn = false;

  @observable id;
  @observable username;
  @observable firstName;
  @observable lastName;
  @observable password;
  @observable token;

  @action.bound setUsername(user) {
    this.username = user;
  }

  @action.bound setPassword(password) {
    this.password = password;
  }

  @action.bound setFirstName(firstName) {
    this.firstName = firstName;
  }

  @action.bound setLastName(lastName) {
    this.lastName = lastName;
  }

  @action.bound async signIn() {
    const result = await axios.post(baseUrl + '/users/authenticate', {
      username: this.username,
      password: this.password,
    });
    if (result.status === 200 && result.data.success) {
      this.signedIn = true;
      this.token = result.data.data.token;
      this.id = result.data.data._id;
      return true;
    } else {
      this.signedIn = false;
      this.token = null;
      return false;
    }
  };

  @action.bound async signUp() {
    const result = await axios.post(baseUrl + '/users/register', {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
    });
    if (result.status === 200 && result.data.successc) {
      this.signedIn = true;
      this.token = result.data.data.token;
      this.id = result.data.data._id;
      return true;
    } else {
      this.signedIn = false;
      this.token = null;
      return false;
    }
  };

  @action.bound signOut() {
    this.id = null;
    this.username = null;
    this.signedIn = false;
  }
}

const userStore = new UserStore();
export default userStore;