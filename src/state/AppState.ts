import { observable, makeObservable, action } from "mobx";
import { ChangeEventHandler } from "react";

export class AppState {
    @observable public stage = 1;
    public lives = 31;
    public continues = 3;
    public stageOptions: string[];
    public livesOptions: string[];
    public continuesOptions: string[];

    constructor() {
        makeObservable(this);
        this.stageOptions = Array.from({ length: 22 }, (_, i) => (i + 1).toString());
        this.livesOptions = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
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
}
