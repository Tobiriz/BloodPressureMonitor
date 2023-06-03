import { formatDate } from "@angular/common";

export default class Reading {
    private _systolic: number;
    private _diastolic: number;
    private _pulse: number;
    private _date: string;
    private _time: string;
    private _notes: string;

    constructor(systolic: number, diastolic: number, pulse: number, date: string, time: string, notes: string) {
        this._systolic = systolic;
        this._diastolic = diastolic;
        this._pulse = pulse;
        this._date = date;
        this._time = time;
        this._notes = notes;
    }

    get systolic(): number {
        return this._systolic;
    }

    get diastolic(): number {
        return this._diastolic;
    }

    get pulse(): number {
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
        const systolic = this._systolic;
        const diastolic = this._diastolic;

        if (systolic < 90 && diastolic < 60) {
            return Prognosis.Hypotension;
        } else if (systolic < 120 && diastolic < 80) {
            return Prognosis.Optimal;
        } else if (systolic < 130 && diastolic < 85) {
            return Prognosis.Normal;
        } else if (systolic < 140 && diastolic < 90) {
            return Prognosis.Elevated;
        } else if (systolic < 160 && diastolic < 100) {
            return Prognosis.HypertensionStage1;
        } else if (systolic < 180 && diastolic < 110) {
            return Prognosis.HypertensionStage2;
        } else {
            return Prognosis.HypertensiveCrisis;
        }
    }
}

export enum Prognosis {
    Hypotension = "Hypotension",
    Optimal = "Optimal",
    Normal = "Normal",
    Elevated = "Elevated",
    HypertensionStage1 = "Hypertension Stage 1",
    HypertensionStage2 = "Hypertension Stage 2",
    HypertensiveCrisis = "Hypertensive Crisis"
}