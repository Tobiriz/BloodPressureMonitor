import { formatDate } from "@angular/common";

export default class Reading {
    private _systolic: string;
    private _diastolic: string;
    private _pulse: string;
    private _date: string;
    private _time: string;
    private _notes: string;

    constructor(systolic: string, diastolic: string, pulse: string, date: string, time: string, notes: string) {
        this._systolic = systolic;
        this._diastolic = diastolic;
        this._pulse = pulse;
        this._date = formatDate(date, 'yyyy.MM.dd', 'en-US');
        this._time = time;
        this._notes = notes;
    }

    get systolic(): string {
        return this._systolic;
    }

    get diastolic(): string {
        return this._diastolic;
    }

    get pulse(): string {
        return this._pulse;
    }

    get date(): string {
        return this._date;
    }

    get time(): string {
        return this._time;
    }

    get notes(): string {
        return this._notes;
    }

    get prognosis(): Prognosis {
        const systolic = parseInt(this._systolic);
        const diastolic = parseInt(this._diastolic);

        if (systolic < 120 && diastolic < 80) {
            return Prognosis.Normal;
        } else if (systolic >= 120 && systolic <= 129 && diastolic < 80) {
            return Prognosis.Elevated;
        } else if (systolic >= 130 && systolic <= 139 || diastolic >= 80 && diastolic <= 89) {
            return Prognosis.HypertensionStage1;
        } else if (systolic >= 140 && systolic <= 180 || diastolic >= 90 && diastolic <= 120) {
            return Prognosis.HypertensionStage2;
        } else {
            return Prognosis.HypertensiveCrisis;
        }
    }
}

export enum Prognosis {
    Normal,
    Elevated,
    HypertensionStage1,
    HypertensionStage2,
    HypertensiveCrisis
}