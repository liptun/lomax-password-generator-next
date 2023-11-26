"use client";
import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { AppState } from "@/state/AppState";
import { Select } from "./Select";
import styled, { createGlobalStyle } from "styled-components";
import { Password } from "./Password";
import { ResetCss } from "./ResetCss";

const AppWrapper = styled.div`
    background: #999;
    @media (min-width: 1200px) {
        width: 600px;
        margin: auto;
        margin-top: 100px;
        border-radius: 16px;
    }
`;

const TitleWrapper = styled.div`
    padding: 16px;
    h1 {
        font-size: 3em;
    }
    h2 {
        font-size: 1.6em;
    }
`;

const SelectWrapper = styled.div`
    display: flex;
    gap: 16px;
    padding: 16px;
`;

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 16px;
    }

    body {
        background: #333;
        font-family: sans-serif;
    }

    * {
        box-sizing: border-box;
    }
`;

export const App = observer(() => {
    const [appState] = useState(() => new AppState());
    return (
        <AppWrapper>
            <ResetCss />
            <GlobalStyles />
            <TitleWrapper>
                <h1>Lomax</h1>
                <h2>password generator</h2>
            </TitleWrapper>
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
        </AppWrapper>
    );
});
