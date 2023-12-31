import { makeAutoObservable } from 'mobx';

export default class DateStore {
    constructor() {
        this._date = new Date();
        makeAutoObservable(this);
    }

    setDate(date) {
        this._date = date
    }


    get date() {
        return this._date;
    }
}