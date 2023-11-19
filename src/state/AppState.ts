import { action, computed, makeAutoObservable } from "mobx";
import { ChangeEventHandler } from "react";
import { LomaxPassword } from "./LomaxPassword";

export enum Symbol {
    Triangle = 0,
    Circle = 1,
    Square = 2,
    Cross = 3,
}

export class AppState {
    public stage = 1;
    public lives = 31;
    public continues = 3;
    public stageOptions: string[];
    public livesOptions: string[];
    public continuesOptions: string[];

    constructor() {
        makeAutoObservable(this);
        this.stageOptions = Array.from({ length: 22 }, (_, i) => (i + 1).toString());
        this.livesOptions = Array.from({ length: 32 }, (_, i) => (i).toString());
        this.continuesOptions = Array.from({ length: 4 }, (_, i) => i.toString());
    }

    @action public onStageChangeHandle: ChangeEventHandler<HTMLSelectElement> = (e) => {
        this.stage = parseInt(e.currentTarget.value);
    };

    @action public onLivesChangeHandle: ChangeEventHandler<HTMLSelectElement> = (e) => {
        this.lives = parseInt(e.currentTarget.value);
    };

    @action public onContinuesChangeHandle: ChangeEventHandler<HTMLSelectElement> = (e) => {
        this.continues = parseInt(e.currentTarget.value);
    };

    @computed public get password(): number[] {
        return new LomaxPassword(this.stage, this.lives, this.continues).password;
    }
}
