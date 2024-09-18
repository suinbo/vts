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

    .result-save {
    }
`

export const ReportContent = styled.div`
    width: 100%;
    height: 460px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5fr;
    gap: 20px;
`

export const Row = styled.div<{ $color?: string }>`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 60px;
    text-align: center;
    border-bottom: 1px solid #d0d3db;
    align-items: center;
    padding: 0 20px;

    .row-title {
        text-align: left;
        font-weight: 500;
    }

    .total-score {
        font-size: 20px;
        font-weight: 600;
        color: ${({ $color }) => $color};
    }

    &:first-child {
        padding-bottom: 14px;
        font-weight: 500;
    }

    &:nth-child(4),
    &:nth-child(5) {
        grid-template-columns: 1fr 5fr;
    }
`
