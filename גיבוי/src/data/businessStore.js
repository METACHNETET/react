import { makeObservable, observable, action } from 'mobx';

class businessStore {
    BD = {};

    constructor() {
        makeObservable(this, {
            BD: observable,
            setBD: action
        })
    }

    setBD = (data) => {
        this.BD = data;
    }
     setIsLogin = (data) => {
        this.isLogin = data;
      }
    
}

export default new businessStore();