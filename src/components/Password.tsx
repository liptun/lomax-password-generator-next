import React from "react";
import { Circle, Cross, Square, Triangle } from "./Symbol";
import { SymbolWrapper } from "./Symbol";
import { Symbol } from "@/state/AppState";

type Props = {
    password: Symbol[];
};
export const Password = ({ password }: Props) => (
    <SymbolWrapper>
        {password.map((symbol, index) => (
            <React.Fragment key={index}>
                {symbol === Symbol.Triangle && <Triangle />}
                {symbol === Symbol.Circle && <Circle />}
                {symbol === Symbol.Square && <Square />}
                {symbol === Symbol.Cross && <Cross />}
            </React.Fragment>
        ))}
    </SymbolWrapper>
);
