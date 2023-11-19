import { computed, makeObservable } from "mobx";

export class LomaxPassword {
    private stageTable = [
        { Stage: 1, B1: 0, B2: 0, B3: 0, B4: 1 },
        { Stage: 2, B1: 1, B2: 0, B3: -1, B4: 1 },
        { Stage: 3, B1: 2, B2: 0, B3: 2, B4: 1 },
        { Stage: 4, B1: 3, B2: 0, B3: 3, B4: 1 },
        { Stage: 5, B1: 0, B2: 1, B3: 0, B4: 1 },
        { Stage: 6, B1: 1, B2: 1, B3: -1, B4: 1 },
        { Stage: 7, B1: 2, B2: 1, B3: 2, B4: 1 },
        { Stage: 8, B1: 3, B2: 1, B3: 3, B4: 1 },
        { Stage: 9, B1: 0, B2: 2, B3: 0, B4: 1 },
        { Stage: 10, B1: 1, B2: 2, B3: -1, B4: 1 },
        { Stage: 11, B1: 2, B2: 2, B3: 2, B4: 1 },
        { Stage: 12, B1: 3, B2: 2, B3: 3, B4: 1 },
        { Stage: 13, B1: 0, B2: 3, B3: 0, B4: 1 },
        { Stage: 14, B1: 1, B2: 3, B3: -1, B4: 1 },
        { Stage: 15, B1: 2, B2: 3, B3: 2, B4: 1 },
        { Stage: 16, B1: 3, B2: 3, B3: 3, B4: 1 },
        { Stage: 17, B1: 0, B2: 0, B3: -1, B4: 0 },
        { Stage: 18, B1: 1, B2: 0, B3: 0, B4: 0 },
        { Stage: 19, B1: 2, B2: 0, B3: 3, B4: 0 },
        { Stage: 20, B1: 3, B2: 0, B3: 2, B4: 0 },
        { Stage: 21, B1: 0, B2: 1, B3: -1, B4: 0 },
        { Stage: 22, B1: 1, B2: 1, B3: 0, B4: 0 },
    ];
    private livesTable = [
        { Lives: 0, L1: 0, L2: 3, L3: 1, L4: 0, L5: 2 },
        { Lives: 1, L1: 0, L2: 3, L3: 1, L4: 2, L5: 0 },
        { Lives: 2, L1: 1, L2: 2, L3: 1, L4: 0, L5: 2 },
        { Lives: 3, L1: 1, L2: 2, L3: 1, L4: 2, L5: 0 },
        { Lives: 4, L1: 2, L2: 1, L3: 1, L4: 0, L5: 2 },
        { Lives: 5, L1: 2, L2: 1, L3: 1, L4: 2, L5: 0 },
        { Lives: 6, L1: 3, L2: 0, L3: 1, L4: 0, L5: 2 },
        { Lives: 7, L1: 3, L2: 0, L3: 1, L4: 2, L5: 0 },
        { Lives: 8, L1: 0, L2: 3, L3: 0, L4: 0, L5: 3 },
        { Lives: 9, L1: 0, L2: 3, L3: 0, L4: 2, L5: 1 },
        { Lives: 10, L1: 1, L2: 2, L3: 0, L4: 0, L5: 3 },
        { Lives: 11, L1: 1, L2: 2, L3: 0, L4: 2, L5: 1 },
        { Lives: 12, L1: 2, L2: 1, L3: 0, L4: 0, L5: 3 },
        { Lives: 13, L1: 2, L2: 1, L3: 0, L4: 2, L5: 1 },
        { Lives: 14, L1: 3, L2: 0, L3: 0, L4: 0, L5: 3 },
        { Lives: 15, L1: 3, L2: 0, L3: 0, L4: 2, L5: 1 },
        { Lives: 16, L1: 0, L2: 3, L3: 3, L4: 0, L5: 0 },
        { Lives: 17, L1: 0, L2: 3, L3: 3, L4: 2, L5: 2 },
        { Lives: 18, L1: 1, L2: 2, L3: 3, L4: 0, L5: 0 },
        { Lives: 19, L1: 1, L2: 2, L3: 3, L4: 2, L5: 2 },
        { Lives: 20, L1: 2, L2: 1, L3: 3, L4: 0, L5: 0 },
        { Lives: 21, L1: 2, L2: 1, L3: 3, L4: 2, L5: 2 },
        { Lives: 22, L1: 3, L2: 0, L3: 3, L4: 0, L5: 0 },
        { Lives: 23, L1: 3, L2: 0, L3: 3, L4: 2, L5: 2 },
        { Lives: 24, L1: 0, L2: 3, L3: 2, L4: 0, L5: 1 },
        { Lives: 25, L1: 0, L2: 3, L3: 2, L4: 2, L5: 3 },
        { Lives: 26, L1: 1, L2: 2, L3: 2, L4: 0, L5: 1 },
        { Lives: 27, L1: 1, L2: 2, L3: 2, L4: 2, L5: 3 },
        { Lives: 28, L1: 2, L2: 1, L3: 2, L4: 0, L5: 1 },
        { Lives: 29, L1: 2, L2: 1, L3: 2, L4: 2, L5: 3 },
        { Lives: 30, L1: 3, L2: 0, L3: 2, L4: 0, L5: 1 },
        { Lives: 31, L1: 3, L2: 0, L3: 2, L4: 2, L5: 3 },
    ];

    private continuesTable = [
        { Continues: 0, Reverse: 3 },
        { Continues: 1, Reverse: 2 },
        { Continues: 2, Reverse: 1 },
        { Continues: 3, Reverse: 0 },
    ];

    constructor(
        private stage: number,
        private lives: number,
        private continues: number
    ) {
        makeObservable(this);
    }

    @computed private get b1() {
        return this.stageTable.find((row) => row.Stage === this.stage)?.B1 ?? 0;
    }
    @computed private get b2() {
        return this.stageTable.find((row) => row.Stage === this.stage)?.B2 ?? 0;
    }
    @computed private get b3() {
        return this.stageTable.find((row) => row.Stage === this.stage)?.B3 ?? 0;
    }
    @computed private get b4() {
        return this.stageTable.find((row) => row.Stage === this.stage)?.B4 ?? 0;
    }

    @computed private get l1() {
        return this.livesTable.find((row) => row.Lives === this.lives)?.L1 ?? 0;
    }
    @computed private get l2() {
        return this.livesTable.find((row) => row.Lives === this.lives)?.L2 ?? 0;
    }
    @computed private get l3() {
        return this.livesTable.find((row) => row.Lives === this.lives)?.L3 ?? 0;
    }
    @computed private get l4() {
        return this.livesTable.find((row) => row.Lives === this.lives)?.L4 ?? 0;
    }
    @computed private get l5() {
        return this.livesTable.find((row) => row.Lives === this.lives)?.L5 ?? 0;
    }

    @computed private get reverse() {
        return this.continuesTable.find((row) => row.Continues === this.continues)?.Reverse ?? 0;
    }

    private conditionalAddOrSubtract = (a: number, b: number) => (a + b <= 3 ? a + b : Math.abs(a - b));

    @computed public get password(): number[] {
        return [this.pos1, this.pos2, this.pos3, this.pos4, this.pos5, this.pos6, this.pos7, this.pos8];
    }

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
}
