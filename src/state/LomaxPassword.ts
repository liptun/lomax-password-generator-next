import { computed, makeObservable } from "mobx";
import { z } from "zod";
import { PasswordParamsModel } from "./PasswordParamsModel";

export const stageSchema = z.union([
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
    z.literal(16),
    z.literal(17),
    z.literal(18),
    z.literal(19),
    z.literal(20),
    z.literal(21),
    z.literal(22),
]);

export const livesSchema = z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
    z.literal(5),
    z.literal(6),
    z.literal(7),
    z.literal(8),
    z.literal(9),
    z.literal(10),
    z.literal(11),
    z.literal(12),
    z.literal(13),
    z.literal(14),
    z.literal(15),
    z.literal(16),
    z.literal(17),
    z.literal(18),
    z.literal(19),
    z.literal(20),
    z.literal(21),
    z.literal(22),
    z.literal(23),
    z.literal(24),
    z.literal(25),
    z.literal(26),
    z.literal(27),
    z.literal(28),
    z.literal(29),
    z.literal(30),
    z.literal(31),
]);

export const continuesSchema = z.union([
    z.literal(0),
    z.literal(1),
    z.literal(2),
    z.literal(3),
]);

export type Stage = z.infer<typeof stageSchema>
export type Lives = z.infer<typeof livesSchema>
export type Continues = z.infer<typeof continuesSchema>

const stageDataItemSchema = z.object({
    B1: z.number(),
    B2: z.number(),
    B3: z.number(),
    B4: z.number(),
});

const livesDataItemSchema = z.object({
    L1: z.number(),
    L2: z.number(),
    L3: z.number(),
    L4: z.number(),
    L5: z.number(),
});

type StageDataItem = z.infer<typeof stageDataItemSchema>
type LivesDataItem = z.infer<typeof livesDataItemSchema>

type StageData = Record<Stage, StageDataItem>
type LivesData = Record<Lives, LivesDataItem>
type ContinuesData = Record<Continues, number>

export class LomaxPassword {
    private stageData: StageData = {
        1 : { B1: 0, B2: 0, B3: 0,  B4: 1 },
        2 : { B1: 1, B2: 0, B3: -1, B4: 1 },
        3 : { B1: 2, B2: 0, B3: 2,  B4: 1 },
        4 : { B1: 3, B2: 0, B3: 3,  B4: 1 },
        5 : { B1: 0, B2: 1, B3: 0,  B4: 1 },
        6 : { B1: 1, B2: 1, B3: -1, B4: 1 },
        7 : { B1: 2, B2: 1, B3: 2,  B4: 1 },
        8 : { B1: 3, B2: 1, B3: 3,  B4: 1 },
        9 : { B1: 0, B2: 2, B3: 0,  B4: 1 },
        10: { B1: 1, B2: 2, B3: -1, B4: 1 },
        11: { B1: 2, B2: 2, B3: 2,  B4: 1 },
        12: { B1: 3, B2: 2, B3: 3,  B4: 1 },
        13: { B1: 0, B2: 3, B3: 0,  B4: 1 },
        14: { B1: 1, B2: 3, B3: -1, B4: 1 },
        15: { B1: 2, B2: 3, B3: 2,  B4: 1 },
        16: { B1: 3, B2: 3, B3: 3,  B4: 1 },
        17: { B1: 0, B2: 0, B3: -1, B4: 0 },
        18: { B1: 1, B2: 0, B3: 0,  B4: 0 },
        19: { B1: 2, B2: 0, B3: 3,  B4: 0 },
        20: { B1: 3, B2: 0, B3: 2,  B4: 0 },
        21: { B1: 0, B2: 1, B3: -1, B4: 0 },
        22: { B1: 1, B2: 1, B3: 0,  B4: 0 },
    };
    private livesData: LivesData = {
        0 : { L1: 0, L2: 3, L3: 1, L4: 0, L5: 2 },
        1 : { L1: 0, L2: 3, L3: 1, L4: 2, L5: 0 },
        2 : { L1: 1, L2: 2, L3: 1, L4: 0, L5: 2 },
        3 : { L1: 1, L2: 2, L3: 1, L4: 2, L5: 0 },
        4 : { L1: 2, L2: 1, L3: 1, L4: 0, L5: 2 },
        5 : { L1: 2, L2: 1, L3: 1, L4: 2, L5: 0 },
        6 : { L1: 3, L2: 0, L3: 1, L4: 0, L5: 2 },
        7 : { L1: 3, L2: 0, L3: 1, L4: 2, L5: 0 },
        8 : { L1: 0, L2: 3, L3: 0, L4: 0, L5: 3 },
        9 : { L1: 0, L2: 3, L3: 0, L4: 2, L5: 1 },
        10: { L1: 1, L2: 2, L3: 0, L4: 0, L5: 3 },
        11: { L1: 1, L2: 2, L3: 0, L4: 2, L5: 1 },
        12: { L1: 2, L2: 1, L3: 0, L4: 0, L5: 3 },
        13: { L1: 2, L2: 1, L3: 0, L4: 2, L5: 1 },
        14: { L1: 3, L2: 0, L3: 0, L4: 0, L5: 3 },
        15: { L1: 3, L2: 0, L3: 0, L4: 2, L5: 1 },
        16: { L1: 0, L2: 3, L3: 3, L4: 0, L5: 0 },
        17: { L1: 0, L2: 3, L3: 3, L4: 2, L5: 2 },
        18: { L1: 1, L2: 2, L3: 3, L4: 0, L5: 0 },
        19: { L1: 1, L2: 2, L3: 3, L4: 2, L5: 2 },
        20: { L1: 2, L2: 1, L3: 3, L4: 0, L5: 0 },
        21: { L1: 2, L2: 1, L3: 3, L4: 2, L5: 2 },
        22: { L1: 3, L2: 0, L3: 3, L4: 0, L5: 0 },
        23: { L1: 3, L2: 0, L3: 3, L4: 2, L5: 2 },
        24: { L1: 0, L2: 3, L3: 2, L4: 0, L5: 1 },
        25: { L1: 0, L2: 3, L3: 2, L4: 2, L5: 3 },
        26: { L1: 1, L2: 2, L3: 2, L4: 0, L5: 1 },
        27: { L1: 1, L2: 2, L3: 2, L4: 2, L5: 3 },
        28: { L1: 2, L2: 1, L3: 2, L4: 0, L5: 1 },
        29: { L1: 2, L2: 1, L3: 2, L4: 2, L5: 3 },
        30: { L1: 3, L2: 0, L3: 2, L4: 0, L5: 1 },
        31: { L1: 3, L2: 0, L3: 2, L4: 2, L5: 3 },
    };

    private continuesData: ContinuesData = {
        0: 3,
        1: 2,
        2: 1,
        3: 0,
    };

    constructor(
        private readonly passwordParams: PasswordParamsModel
    ) {
        makeObservable(this);
    }

    @computed get stage() {
        return this.passwordParams.stage;
    }
    @computed get lives() {
        return this.passwordParams.lives;
    }
    @computed get continues() {
        return this.passwordParams.continues;
    }

    @computed private get b1() {
        return this.stageData[this.stage].B1;
    }
    @computed private get b2() {
        return this.stageData[this.stage].B2;
    }
    @computed private get b3() {
        return this.stageData[this.stage].B3;
    }
    @computed private get b4() {
        return this.stageData[this.stage].B4;
    }

    @computed private get l1() {
        return this.livesData[this.lives].L1
    }
    @computed private get l2() {
        return this.livesData[this.lives].L2
    }
    @computed private get l3() {
        return this.livesData[this.lives].L3
    }
    @computed private get l4() {
        return this.livesData[this.lives].L4
    }
    @computed private get l5() {
        return this.livesData[this.lives].L5
    }

    @computed private get reverse() {
        return this.continuesData[this.continues]
    }

    private conditionalAddOrSubtract = (a: number, b: number) => (a + b <= 3 ? a + b : Math.abs(a - b));

    @computed private get pos1(): number {
        return this.conditionalAddOrSubtract(this.b3, this.l5);
    }

    @computed private get pos2(): number {
        return this.conditionalAddOrSubtract(this.conditionalAddOrSubtract(this.reverse, this.b2), this.l1);
    }

    @computed private get pos3(): number {
        return this.b1;
    }

    @computed private get pos4(): number {
        return this.b2;
    }

    @computed private get pos5(): number {
        return this.b4 + this.l4;
    }

    @computed private get pos6(): number {
        return this.l2;
    }

    @computed private get pos7(): number {
        return this.l3;
    }

    @computed private get pos8(): number {
        return this.continues;
    }

    @computed public get password(): number[] {
        return [this.pos1, this.pos2, this.pos3, this.pos4, this.pos5, this.pos6, this.pos7, this.pos8];
    }
}
