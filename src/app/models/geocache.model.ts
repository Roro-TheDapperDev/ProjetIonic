export class Geocache {
    id? : string;
    title: string;
    description: string;
    hint: string;
    answer: string;
    latitude: number;
    longitude: number;
    city: string;
    country: string;
    pictureLink: string;


    constructor() {
        this.title = '';
        this.description = '';
        this.hint = '';
        this.answer = '';
        this.latitude = 0;
        this.longitude = 0;
        this.city = '';
        this.country = '';
        this.pictureLink = '';
    }
}
