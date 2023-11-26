import { computed, makeAutoObservable } from "mobx";
import { Continues, Lives, Stage, continuesSchema, livesSchema, stageSchema } from "./LomaxPassword";
import { ZodSchema } from "zod";

export class PasswordParamsModel {
    constructor(
        private stageInternal: Stage,
        private livesInternal: Lives,
        private continuesInternal: Continues
    ) {
        makeAutoObservable(this);
    }

    @computed public get stage(): Stage {
        return this.stageInternal;
    }

    @computed public get lives(): Lives {
        return this.livesInternal;
    }

    @computed public get continues(): Continues {
        return this.continuesInternal;
    }

    private getValidatedValue<T>(inputValue: string, schemaValidator: ZodSchema<T>, fallbackValue: T): T {
        try {
            return schemaValidator.parse(parseInt(inputValue));
        } catch {
            return fallbackValue;
        }
    }

    public set stage(newValue: string) {
        this.stageInternal = this.getValidatedValue(newValue, stageSchema, 1);
    }

    public set lives(newValue: string) {
        this.livesInternal = this.getValidatedValue(newValue, livesSchema, 31);
    }

    public set continues(newValue: string) {
        this.continuesInternal = this.getValidatedValue(newValue, continuesSchema, 1);
    }
}
