import styled from "styled-components"

export const Body = styled.div`
    padding: 16px;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    height: 100%;
    align-items: center;
    text-align: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    width: 1160px;
    text-align: center;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;

    button {
        width: 20%;

        .button-name {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;
        }

        svg {
            transform: rotate(-90deg);
        }
    }
`
export const DefaultNav = styled.div<{ type: string }>`
    padding: 16px;
    svg {
        cursor: pointer;
        transform: ${props => (props.type == "next" ? "rotate(-90deg)" : "rotate(90deg)")};
    }
`
