import { action, computed, makeObservable, observable } from "mobx";
import { ChangeEventHandler } from "react";
import {  LomaxPassword } from "./LomaxPassword";
import { PasswordParamsModel } from "./PasswordParamsModel";

export enum Symbol {
    Triangle = 0,
    Circle = 1,
    Square = 2,
    Cross = 3,
}

export class AppState {
    public stageOptions: string[];
    public livesOptions: string[];
    public continuesOptions: string[];
    @observable private passwordGenerator: LomaxPassword;
    @observable public passwordParams: PasswordParamsModel;

    constructor() {
        makeObservable(this);
        this.stageOptions = Array.from({ length: 22 }, (_, i) => (i + 1).toString());
        this.livesOptions = Array.from({ length: 32 }, (_, i) => i.toString());
        this.continuesOptions = Array.from({ length: 4 }, (_, i) => i.toString());
        this.passwordParams = new PasswordParamsModel(1, 31, 3);
        this.passwordGenerator = new LomaxPassword(this.passwordParams);
    }

    @action public onStageChangeHandle: ChangeEventHandler<HTMLSelectElement> = (e) => {
        this.passwordParams.stage = e.currentTarget.value;
    };

    @action public onLivesChangeHandle: ChangeEventHandler<HTMLSelectElement> = (e) => {
        this.passwordParams.lives = e.currentTarget.value;
    };

    @action public onContinuesChangeHandle: ChangeEventHandler<HTMLSelectElement> = (e) => {
        this.passwordParams.continues = e.currentTarget.value;
    };

    @computed public get password(): number[] {
        return this.passwordGenerator.password;
    }
}
