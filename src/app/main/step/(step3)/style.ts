import styled from "styled-components"

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 22px;
    width: 1160px;
`
export const Nav = styled.div<{ type: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;

    .list {
        color: #132d6f;
        font-size: 14px;
        font-weight: 500;
    }

    svg {
        cursor: pointer;
        transform: rotate(90deg);
    }
`

export const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

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

export const ButtonWrapper = styled.div<{ $isOpposed?: boolean }>`
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
        position: relative;
        top: 1px;
        transform: ${({ $isOpposed }) => ($isOpposed ? "rotate(90deg)" : "rotate(-90deg)")};
    }
`

/** 알림 화면 */
export const PrivacyForm = styled.div`
    width: 100%;
    height: 460px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6fr 1fr;
    gap: 20px;
`

export const NoticeContent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    background: #fff;
    box-shadow: 0px 0px 66.2px -22px rgba(0, 0, 0, 0.13);
    border-radius: 40px;
    padding: 40px 50px;

    p {
        font-size: 36px;

        span {
            font-weight: 500;
            color: #132d6f;
        }
    }
`
