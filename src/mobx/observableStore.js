import { action, observable } from 'mobx';

class ObservableStore {
  @observable property = '';
  @observable welcomeMessage = 'Welcome to this app';

  @action setProperty(newProperty) {
    console.log(newProperty);
    this.property = newProperty;
  }
}

const observableStore = new ObservableStore();
export default observableStore;