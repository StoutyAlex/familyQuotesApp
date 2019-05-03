import { action, observable } from 'mobx';
import { get } from 'lodash';
import axios from 'axios';

const baseUrl = 'http://192.168.1.211:4000';

class SessionStore {
  @observable userId;
  @observable username;
  @observable firstName;
  @observable lastName;
  @observable token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Y2NjYTZiODZjYzA4ZDQyNDQ5MzQ3ZGIiLCJpYXQiOjE1NTY5MjEyMzl9.vtsI1wAzuwUw4NNMOSMj-Kl-390TrYLdDfL-gPPxwMo';
  @observable families;
  @observable quotes;

  @action async getFamilyQuotes(familyId) {
    const results = await axios.get(baseUrl + '', {

    });
    if (results.status === 200) {

    }
  }

  @action async getQuotes() {
    const results = await axios.get(baseUrl + '', {}, {
      headers: { 'Authorization': "bearer " + this.token }
    });
    if (results.status === 200) {
      console.log(JSON.stringify(results));
    }
  }

  updateStore(userStore) {
    // this.token = userStore.token;
    this.username = userStore.username;
    this.userId = userStore.id;

    // get all families the user is apart of
  }
}

const sessionStore = new SessionStore();
export default sessionStore;