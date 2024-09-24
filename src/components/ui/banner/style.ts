import styled from "styled-components"
import { BannerColorProp } from "."

export const StyledBanner = styled.span<{ $color: BannerColorProp }>`
    background: ${props => props.$color.bgColor};
    color: ${props => props.$color.fColor};
    padding: 3px 18px;
    font-size: 15px;
    border-radius: 60px;
    font-weight: 500;
    cursor: ${props => (!!props.onClick ? "pointer" : "default")};
    border: 2px solid ${props => props.$color.bdColor ?? "transparent"};
    //width: 130px;
    text-align: center;
`
