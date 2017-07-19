import * as moment from 'moment';

export class Message {
    id: number;
    name: string;
    dateTime: string;
    text: string;
    color: string;
    constructor(id: number, name: string, text: string, color: string) {
        this.name = name;
        this.id = id;
        this.text = text;
        this.color = color;
        this.dateTime = moment().format('YYYY-MM-DD H:m:s');
    }
}
