import styled from "styled-components";

export const SvgBase = styled.svg`
    width: 64px;
    height: 64px;
`;

export const SymbolWrapper = styled.div`
    display: flex;
    gap: 8px;
    padding: 8px;
`;

export const Cross = () => (
    <SvgBase width="642" height="642" viewBox="0 0 642 642" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="321" cy="321" r="321" fill="#333333" />
        <line x1="157.142" y1="156.858" x2="482.954" y2="482.67" stroke="#9BADE4" strokeWidth="40" />
        <line x1="160.858" y1="482.67" x2="486.67" y2="156.858" stroke="#9BADE4" strokeWidth="40" />
    </SvgBase>
);

export const Circle = () => (
    <SvgBase width="642" height="642" viewBox="0 0 642 642" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="321" cy="321" r="321" fill="#333333" />
        <circle cx="321" cy="321" r="188" stroke="#F06E6C" strokeWidth="40" />
    </SvgBase>
);

export const Triangle = () => (
    <SvgBase width="642" height="642" viewBox="0 0 642 642" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="321" cy="321" r="321" fill="#333333" />
        <path d="M126.508 449.25L317 119.942L507.492 449.25H126.508Z" stroke="#38DEC8" strokeWidth="40" />
    </SvgBase>
);

export const Square = () => (
    <SvgBase width="642" height="642" viewBox="0 0 642 642" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="321" cy="321" r="321" fill="#333333" />
        <rect x="159" y="158" width="325" height="325" stroke="#D591BD" strokeWidth="40" />
    </SvgBase>
);
