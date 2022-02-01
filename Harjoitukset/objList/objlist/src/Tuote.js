export default class Tuote {
    id = 0;
    nimi = '';
    hinta = 0;

    constructor (id, nimi, hinta) {
        this.id = id;
        this.nimi = nimi;
        this.hinta = hinta;
    }
}