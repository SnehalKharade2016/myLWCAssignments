import { LightningElement, track } from 'lwc';

export default class SelectArtist extends LightningElement {
    @track msg;
    handleClick(event) {
        this.msg = event.target.msg;
        console.log(this.msg);
        console.log(event.detail.msg);
        
    }
}