import { LightningElement, track, api } from 'lwc';

export default class SelectMusic extends LightningElement {
    @track searchmusic;
    @api msg
    onChange(event) {
        this.msg = event.searchmusic;
    }
     @api handleNext() {
         console.log('inside handle next');
        this.dispatchEvent(new CustomEvent('searchartist', {detail : {msg : this.searchmusic}}));
    }

    newMethod() {
        return 'searchartist';
    }
}