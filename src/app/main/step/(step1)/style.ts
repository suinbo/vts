import styled from "styled-components"

export const Title = styled.div`
    font-size: 32px;
    font-weight: 500;

    span {
        font-weight: 600;
        margin-right: 20px;
        color: #132d6f;
    }
`

export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
    border-bottom: 2px solid #d1d8e4;
`

export const NameForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 70px;
    align-items: center;
`

export const GenderForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 70px;
    align-items: center;

    .button-form {
        display: flex;
        gap: 20px;
        width: 50%;
    }
`

export const AgeForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 70px;
    align-items: center;

    .age-form {
        width: 50%;
        display: flex;
        justify-content: space-between;

        > div {
            display: flex;
            gap: 15px;
        }
    }
`

/** 결과 확인 */
export const ResultForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const ResultWrapper = styled.div``

export const ResultItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 70px;
    align-items: center;

    > div {
        display: flex;
        gap: 16px;

        &:last-child {
            font-size: 18px;
        }
    }

    .title {
        display: flex;
        align-items: center;
        font-size: 20px;
        font-weight: 600;

        > span {
            font-size: 28px;
            color: #132d6f;
        }
    }

    .group {
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: 20px;
    }
`

export const ResultBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
