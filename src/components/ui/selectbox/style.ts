import styled from "styled-components"

/** Selectbox */
export const SelectboxOpener = styled.div<{ $active: boolean; focus?: boolean; $hasInner: boolean }>`
    cursor: pointer;
    display: grid;
    grid-template-columns: 15fr 1fr;
    align-items: center;
    gap: 20px;
    border-bottom: ${props => (props.$hasInner ? "none" : props.focus ? "1px solid #132d6f" : "1px solid #D0D3DB")};

    > div {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-bottom: 6px;
    }

    svg {
        transform: ${props => (props.$active ? "rotate(180deg)" : "rotate(0)")};
    }
`
export const SelectboxItem = styled.div`
    z-index: 2;
    position: fixed;
    width: 100%;
    border: none;
    border-radius: 18px;
    padding: 16px 20px;
    background-color: #fff;
    box-shadow: 0 0 24px 2px rgba(223, 223, 223, 0.3);
`
export const SelectboxItemUl = styled.ul<{ style?: React.CSSProperties }>`
    overflow-y: scroll;
    height: ${props => props.style?.height}px;

    > li {
        padding: 4px;
        text-align: left;
        cursor: pointer;
    }

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        height: 20%;
        border-radius: 2px;
        background: #e4e4e4;
    }
`
