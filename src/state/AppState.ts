import { action, computed, makeObservable, observable } from "mobx";
import { ChangeEventHandler } from "react";
import { Continues, Lives, LomaxPassword, Stage, continuesSchema, livesSchema, stageSchema } from "./LomaxPassword";
import { ZodSchema } from "zod";

export enum Symbol {
    Triangle = 0,
    Circle = 1,
    Square = 2,
    Cross = 3,
}

export class AppState {
    @observable public stage: Stage = 1;
    @observable public lives: Lives = 31;
    @observable public continues: Continues = 3;
    public stageOptions: string[];
    public livesOptions: string[];
    public continuesOptions: string[];
    @observable private passwordGenerator: LomaxPassword;

    constructor() {
        makeObservable(this);
        this.stageOptions = Array.from({ length: 22 }, (_, i) => (i + 1).toString());
        this.livesOptions = Array.from({ length: 32 }, (_, i) => i.toString());
        this.continuesOptions = Array.from({ length: 4 }, (_, i) => i.toString());
        this.passwordGenerator = new LomaxPassword(this.stage, this.lives, this.continues);
    }

    private getValidatedValue<T>(inputValue: string, schemaValidator: ZodSchema<T>, fallbackValue: T): T {
        try {
            return schemaValidator.parse(parseInt(inputValue));
        } catch {
            return fallbackValue;
        }
    }

    @action public onStageChangeHandle: ChangeEventHandler<HTMLSelectElement> = (e) => {
        this.stage = this.getValidatedValue(e.currentTarget.value, stageSchema, 1);
    };

    @action public onLivesChangeHandle: ChangeEventHandler<HTMLSelectElement> = (e) => {
        this.lives = this.getValidatedValue(e.currentTarget.value, livesSchema, 31);
    };

    @action public onContinuesChangeHandle: ChangeEventHandler<HTMLSelectElement> = (e) => {
        this.continues = this.getValidatedValue(e.currentTarget.value, continuesSchema, 3);
    };

    @computed public get password(): number[] {
        return this.passwordGenerator.password(this.stage, this.lives, this.continues)
    }
}
