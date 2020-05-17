import { LightningElement, api, track } from 'lwc';

export default class TaxCalculatorChild extends LightningElement {
    @track taxableAmount;
    
    @api calculate(taxAmount, taxPercent) {
        console.log('------------');
        this.taxableAmount = (parseInt(taxAmount) * parseInt(taxPercent))/100;
    }

    
}