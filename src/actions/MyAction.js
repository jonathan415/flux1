import dispatcher from '../dispatcher.js';

class MyAction {

    changeName(newName) {
        dispatcher.dispatch({
            type: 'change_my_name',
            name: newName
        });
    }

    changeAge(newAge) {
        dispatcher.dispatch({
            type: 'change_my_age',
            age: newAge,
        });
    }

    changeGender(newAge) {
        dispatcher.dispatch({
            type: 'change_my_age',
            age: newAge,
        });
    }

    changeAgeAndGender(newAge, newGender) {
        dispatcher.dispatch({
            type: 'change_my_age',
            age: newAge,
            gender: newGender
        });
    }

}

const yAction = new MyAction();
export default yAction;
