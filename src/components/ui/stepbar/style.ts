import styled from "styled-components"

export const Wrapper = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
`

export const StepWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    z-index: 1;
`
export const BarWrapper = styled.div`
    position: relative;
    display: flex;
    top: 20px;
    width: 600px;
    left: 30px;
`

export const Step = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Circle = styled.div<{ $active?: boolean; $fill: string }>`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${({ $active, $fill }) => ($active ? $fill : "#fff")};
    color: ${({ $active, $fill }) => ($active ? "#fff" : $fill)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    border: 2px solid ${({ $fill }) => $fill};

    span {
        position: relative;
        top: -1px;
    }
`

export const Label = styled.span`
    margin-top: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #132d6f;
`

export const Bar = styled.div`
    width: 100%;
    height: 4px;
    background-color: #dce1ee;
    flex-shrink: 0;
`
