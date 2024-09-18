import styled from "styled-components"

/** Radio */
export const RadioUl = styled.ul<{ $colCount: number }>`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(${props => props.$colCount}, 1fr);
    grid-template-rows: auto;
    align-items: stretch;
    gap: 14px;
`
