import { useEffect, useRef, useState } from "react"
import { SelectboxOpener, SelectboxItem, SelectboxItemUl } from "./style"
import useClickOutside from "@/hooks/useClickOutside"
import { NavIcon } from "../icon"

export type SelectboxItem = {
    id: string
    name: string
}

export default function Selectbox({
    items = [],
    selectedId,
    innerElement,
    onSelect,
    style,
    isFocused,
}: {
    items: SelectboxItem[]
    selectedId?: string
    innerElement?: React.ReactNode
    onSelect: (selectedItem: SelectboxItem) => void
    style?: React.CSSProperties
    isFocused?: boolean
}) {
    const selectBoxRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState<boolean>(false)
    const [, setSelectedItem] = useState<SelectboxItem>()
    const [{ top, width }, setPosition] = useState<{ top: number; width: number }>({ top: 0, width: 0 })

    useClickOutside(selectBoxRef, () => {
        setActive(false)
    })

    const controlPosition = () => {
        if (selectBoxRef.current) {
            const { top, width, height } = selectBoxRef.current.getBoundingClientRect()
            const parentRect = selectBoxRef.current.offsetParent?.getBoundingClientRect()
            setPosition({ top: top - (parentRect?.top || 0) + height + 10, width })
        }
    }

    // 최상단 부모 노드 찾기
    const findScrollParent = (node: HTMLElement | null) => {
        if (!node) return null
        if (node.scrollHeight > node.clientHeight) {
            return node
        }
        return findScrollParent(node.parentElement)
    }

    useEffect(() => {
        controlPosition()

        const scrollParent = findScrollParent(selectBoxRef.current)

        if (scrollParent) {
            scrollParent.addEventListener("scroll", controlPosition)

            return () => {
                scrollParent.removeEventListener("scroll", controlPosition)
            }
        }
    }, [])

    const SelectboxList = () => (
        <SelectboxItem style={{ top, width }}>
            <SelectboxItemUl style={style}>
                {items.map(item => (
                    <li
                        id={item.id}
                        key={item.id}
                        onClick={() => {
                            setSelectedItem(item)
                            onSelect(item)
                            setActive(false)
                        }}>
                        {item.name}
                    </li>
                ))}
            </SelectboxItemUl>
        </SelectboxItem>
    )

    return (
        <div>
            <SelectboxOpener
                $hasInner={!!innerElement}
                $active={active}
                ref={selectBoxRef}
                focus={isFocused && !active}
                onClick={() => setActive(!active)}>
                {innerElement ?? <div>{selectedId ? items.find(item => item.id == selectedId)?.name : "-"}</div>}
                <NavIcon style={{ width: 10, height: 10 }} />
            </SelectboxOpener>
            {active && <SelectboxList />}
        </div>
    )
}
