import { LightningElement, track } from 'lwc';

export default class ExploreDecorator extends LightningElement {

    @track greeting="Learning Sessions";
    handleChange(event) {
        this.greeting=event.target.value;
        console.log(this.greeting);
    }

}