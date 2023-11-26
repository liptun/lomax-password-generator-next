"use client";
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { AppState, Symbol } from "@/state/AppState";
import { Select } from "./Select";
import styled from "styled-components";
import { Password } from "./Password";

const SelectWrapper = styled.div`
    display: flex;
    gap: 16px;
    padding: 16px;
`;
export const App = observer(() => {
    const [appState] = useState(() => new AppState());
    return (
        <>
            <SelectWrapper>
                <Select
                    label="Stage"
                    options={appState.stageOptions.map((value) => [value.toString(), value.toString()])}
                    value={appState.passwordParams.stage.toString()}
                    onChange={appState.onStageChangeHandle}
                />
                <Select
                    label="Lives"
                    options={appState.livesOptions.map((value) => [value.toString(), value.toString()])}
                    value={appState.passwordParams.lives.toString()}
                    onChange={appState.onLivesChangeHandle}
                />
                <Select
                    label="Continues"
                    options={appState.continuesOptions.map((value) => [value.toString(), value.toString()])}
                    value={appState.passwordParams.continues.toString()}
                    onChange={appState.onContinuesChangeHandle}
                />
            </SelectWrapper>
            <Password password={appState.password} />
        </>
    );
});
