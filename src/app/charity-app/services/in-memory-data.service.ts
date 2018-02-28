import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const needs = [
            { 
                name: 'Education', 
                description:"Cause for a kids education", 
                amount:5000,
                amountReceived:200,
                contact: '+919000678051',
                imageurl: 'cause-education.jpg'
            },
            {   
                name: 'Education', 
                description:"A 5th grade kid needs to pay his school fees every month", 
                amount:2500,
                amountReceived: 0,
                contact: '+919666611411',
                imageurl: 'cause-education.jpg'
            },
            {   
                name: 'Essentials', 
                description:"Rama rao can sustain the winter better if he had more winter clothes", 
                amount:6000,
                amountReceived: 0,
                contact: '+919666611411',
                imageurl: 'cause-essentials-clothes.jpg'
            },
            {   
                name: 'Senior', 
                description:"Bhaskaran ji is nearing 70 and is single. A duty of any child is to not let their parents down. We can all be his children", 
                amount:1000,
                amountReceived: 0,
                contact: '+919666611411',
                imageurl: 'cause-seniors.jpg'
            },
            {   
                name: 'Technology', 
                description:"Our website is hosted in AWS that we have to pay for maintenance. This donation will help our website keep functioning.", 
                amount:6000,
                amountReceived: 0,
                contact: '+919666611411',
                imageurl: 'cause-rights.jpg'
            }
        ];
        return {needs};
    }
}