import { LightningElement } from 'lwc';
import FacebookIcon from '@salesforce/resourceUrl/FacebookIcon';
import LinkedinkIcon from '@salesforce/resourceUrl/LinkedinIcon';
import BankIcon from '@salesforce/resourceUrl/BankIcon';


export default class footer extends LightningElement {
    FacebookIconUrl = FacebookIcon;
    LinkedinkIconUrl = LinkedinkIcon;
    BankIconUrl=BankIcon ; 

}