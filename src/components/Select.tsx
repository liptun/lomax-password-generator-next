import { ChangeEvent } from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

type Props = {
    options: Array<[value: string, label: string]>;
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
    label?: string;
};

export const Select = ({ options, onChange, value, label }: Props) => (
    <Wrapper>
        {label && <p>{label}</p>}
        <select onChange={onChange} value={value}>
            {options.map(([value, label]) => {
                return (
                    <option key={value} value={value}>
                        {label}
                    </option>
                );
            })}
        </select>
    </Wrapper>
);
