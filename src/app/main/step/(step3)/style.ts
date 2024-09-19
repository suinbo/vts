import styled from "styled-components"

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    width: 1160px;
`
export const Nav = styled.div<{ type: string }>`
    svg {
        transform: ${props => (props.type == "next" ? "rotate(-90deg)" : "rotate(90deg)")};
    }
`

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    .step-title {
        font-size: 32px;
        font-weight: 500;

        span {
            font-weight: 600;
            margin-right: 20px;
            color: #132d6f;
        }
    }

    .button-name {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        svg {
            transform: rotate(-90deg);
        }
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    cursor: pointer;
    gap: 18px;

    > span {
        color: #132d6f;
        padding: 1px;
        border-bottom: 1px solid #132d6f;
    }

    svg {
        transform: rotate(-90deg);
    }
`
