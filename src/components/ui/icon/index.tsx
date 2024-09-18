const NavIcon = ({
    style: { width, height },
    fill = "#132D6F",
    onClick,
}: {
    style: React.CSSProperties
    fill?: string
    onClick?: () => void
}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 11 7"
            fill={fill}
            onClick={onClick}>
            <path
                d="M10.7579 0.267679C10.6028 0.0962844 10.3925 -5.31105e-08 10.1732 -7.2281e-08C9.95392 -9.14514e-08 9.74361 0.0962843 9.58853 0.267679L5.49501 4.7932L1.40148 0.267678C1.24551 0.101141 1.03662 0.00898958 0.819789 0.0110726C0.602959 0.0131556 0.395543 0.109306 0.242215 0.278815C0.0888874 0.448324 0.00191633 0.677628 3.21115e-05 0.917341C-0.0018521 1.15705 0.0815022 1.38799 0.232142 1.56042L4.91034 6.73232C5.06542 6.90372 5.27572 7 5.49501 7C5.71429 7 5.9246 6.90372 6.07968 6.73232L10.7579 1.56042C10.9129 1.38898 11 1.15648 11 0.914052C11 0.671626 10.9129 0.439126 10.7579 0.267679Z"
                fill={fill}
            />
        </svg>
    )
}

const CheckIcon = ({ style: { width, height }, fill = "#132D6F" }: { style: React.CSSProperties; fill?: string }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 27 22" fill={fill}>
            <path
                d="M22.8031 0.701404C23.2696 0.246546 23.8905 -0.00491832 24.5347 7.29048e-05C25.1789 0.00506413 25.796 0.266121 26.2558 0.728157C26.7156 1.19019 26.9821 1.81707 26.9991 2.47651C27.0162 3.13595 26.7823 3.77637 26.347 4.26264L13.1316 21.187C12.9044 21.4376 12.6301 21.6388 12.3252 21.7784C12.0203 21.918 11.6911 21.9932 11.3572 21.9996C11.0232 22.0059 10.6915 21.9432 10.3818 21.8152C10.072 21.6873 9.79068 21.4967 9.55453 21.2548L0.790633 12.2805C0.546573 12.0476 0.350819 11.7668 0.215048 11.4548C0.0792775 11.1427 0.00627153 10.8059 0.000386591 10.4644C-0.00549835 10.1228 0.0558585 9.78355 0.180795 9.46681C0.305732 9.15007 0.491691 8.86234 0.727576 8.62079C0.963462 8.37924 1.24444 8.18882 1.55376 8.06088C1.86307 7.93294 2.19438 7.87011 2.52792 7.87614C2.86146 7.88217 3.1904 7.95693 3.49512 8.09596C3.79983 8.23499 4.07407 8.43544 4.30149 8.68536L11.2371 15.7841L22.7401 0.776022L22.8031 0.701404Z"
                fill={fill}
            />
        </svg>
    )
}

export { NavIcon, CheckIcon }
