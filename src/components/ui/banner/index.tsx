import { StyledBanner } from "./style"

const Banner = ({
    text,
    $color,
    onClick,
}: {
    text: string
    onClick?: () => void
    $color: { bgColor: string; fColor: string; bdColor?: string }
}) => {
    return (
        <StyledBanner $color={$color} onClick={onClick}>
            {text}
        </StyledBanner>
    )
}

export default Banner
