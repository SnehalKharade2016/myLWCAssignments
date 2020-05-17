import { LightningElement } from 'lwc';

export default class ExploreFolderStructure extends LightningElement {
    greeting = 'Hello World!';
    handleChange(event) {
        this.greeting = event.target.value;
        console.log(this.greeting);
    }

    sum=100;
    addItems(event) {
        this.sum = this.sum+event.target.value;
        console.log(this.sum);
    }
}