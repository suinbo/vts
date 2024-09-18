import styled from "styled-components"

/** Side List */
export const SideListWrapper = styled.div`
    background-color: #f8f8fa;
    box-shadow: 0px 4px 60.5px -23px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 0;
    left: 0;
    width: 648px;
    height: 100%;
    padding: 30px;
    display: grid;
    grid-template-rows: 1fr 1fr 20fr;
`

export const SideListButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    width: 30px;
    height: 30px;
    background-color: #ebeef4;
    margin-left: auto;
    cursor: pointer;

    svg {
        transform: rotate(90deg);
    }
`

export const SideListTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
`
export const SideListContent = styled.div`
    display: flex;
    flex-direction: column;

    .description {
        font-size: 14px;
        margin: 20px 0 16px 0;
    }
`
export const SideListItems = styled.div`
    background-color: #fff;
    border-radius: 20px;
    padding: 30px;
    height: 100%;
`
export const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    border-bottom: 1px solid #d0d0d0;
    padding: 0 36px 16px 34px;
    font-weight: 500;
    font-size: 15px;
`
export const Item = styled.div`
    display: grid;
    flex-direction: column;
    padding: 0 20px 0 18px;
    gap: 24px;
    overflow-y: scroll;
    height: 390px;
    margin-top: 24px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        height: 20%;
        border-radius: 2px;
        background: #e4e4e4;
    }

    .item-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        align-items: center;
        padding: 16px;
        border-radius: 16px;
        border: 2px solid #e0e6f3;
        background: #fff;
        font-size: 14px;
        cursor: pointer;

        &:hover {
            background-color: #f2f5fb;
        }

        > div:first-child {
            display: flex;
            flex-direction: column;
            gap: 3px;

            > span:first-child {
                font-weight: 500;
            }

            > span:nth-child(2) {
                color: #a5adc3;
                font-size: 13px;
            }
        }
    }
`
