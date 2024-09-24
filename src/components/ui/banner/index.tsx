import { StyledBanner } from "./style"

export type BannerColorProp = { bgColor?: string; fColor: string; bdColor?: string }

const Banner = ({ text, $color, onClick }: { text: string; onClick?: () => void; $color: BannerColorProp }) => {
    return (
        <StyledBanner $color={$color} onClick={onClick}>
            {text}
        </StyledBanner>
    )
}

export default Banner
