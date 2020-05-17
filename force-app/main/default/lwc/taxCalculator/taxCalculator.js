import { LightningElement, track } from 'lwc';

export default class TaxCalculator extends LightningElement {
    @track taxAmount;
    @track taxPercent;

    handleChange(event){
        const field = event.target.name;
        console.log(1);
        if(field === 'taxAmt') {
            this.taxAmount = event.target.value;
        }
        console.log(2);
        if(field === 'taxPrct') {
            this.taxPercent = event.target.value;
        }
        console.log(3);
        if(this.taxAmount !== undefined && this.taxPercent !== undefined) {
            this.template.querySelector('c-tax-calculator-child').calculate(this.taxAmount, this.taxPercent);
        }
        
    }
}