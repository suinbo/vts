import styled from "styled-components"

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

export const Description = styled.div`
    background: #fff;
    box-shadow: 0px 0px 66.2px -22px rgba(0, 0, 0, 0.13);

    border-radius: 26px;
    padding: 20px 30px;
    text-align: left;
`

export const ResultCompact = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 2px solid #d0d3db;

    > div {
        display: flex;
        justify-content: space-between;

        &:nth-child(1)::after {
            content: "";
            width: 2px;
            height: 30px;
            background-color: #d0d3db;
        }
    }
`

export const ResultSection = styled.div<{ $color?: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 56px;

    p {
        font-weight: 500;
        span {
            font-weight: 600;
            margin-right: 8px;
            color: ${props => props.$color};
            font-size: 20px;
        }
    }
`

export const Title = styled.div`
    font-weight: 500;

    span {
        font-weight: 600;
        margin-right: 8px;
    }
`

export const ResultOpinion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
    height: 100%;
    margin-top: 20px;

    p {
        font-size: 18px;
        padding: 8px;
    }
`
export const OpinionText = styled.div`
    overflow-y: scroll;
    height: 198px;
    margin: 8px;
    padding-right: 20px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        height: 20%;
        border-radius: 2px;
        background: #e4e4e4;
    }
`
