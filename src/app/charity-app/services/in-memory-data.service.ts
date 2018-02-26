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
                name: 'Baby', 
                description:"A new born baby needs", 
                amount:3000.0,
                amountReceived: 2500,
                contact: 'pavani.kalidindi@gmail.com',
                imageurl: 'cause-hunger.jpg'
            },
            {   
                name: 'Education', 
                description:"A 5th grade kid needs to pay his school fees every month", 
                amount:2500,
                amountReceived: 0,
                contact: '+919666611411',
                imageurl: 'cause-education.jpg'
            }
        ];
        return {needs};
    }
}