import { LightningElement, track } from 'lwc';



export default class ExploreGetterSetter extends LightningElement {
    @track finalMessage;
    welcomeMessage = 'Welcome';
    get message() {
        return this.welcomeMessage;
    }
    set message(value) {
        this.finalMessage = value.toUpperCase();
    }
    handleChange(event) {
        this.message = event.target.value;
    }

}