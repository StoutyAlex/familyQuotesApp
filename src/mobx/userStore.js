import { action, observable } from 'mobx';
import axios from 'axios';

const baseUrl = 'http://192.168.1.211:4000';

class UserStore {
  @observable signedIn = false;

  @observable id;
  @observable username;
  @observable firstName;
  @observable lastName;

  @action.bound setUsername(user) {
    console.log('setting username');
    console.log(user);
    this.username = user;
  }

  @action.bound setPassword(password) {
    console.log('setting password');
    console.log(password);
    this.password = password;
  }

  @action.bound setFirstName(firstName) {
    console.log('firstName');
    console.log(firstName);
    this.firstName = firstName;
  }

  @action.bound setLastName(lastName) {
    console.log('lastName');
    console.log(lastName);
    this.lastName = lastName;
  }

  @action.bound async signIn() {
    const result = await axios.post(baseUrl + '/users/authenticate', {
      username: this.username,
      password: this.password,
    });
    console.log(JSON.stringify(result.data));
  };

  @action.bound async signUp() {
    const result = await axios.post(baseUrl + '/users/register', {
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
    });
    if (result.status === 200) {
      await this.signIn();
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