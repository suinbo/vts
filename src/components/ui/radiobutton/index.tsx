import { useState } from "react"
import { RadioUl } from "./style"
import Button from "../button"

const RadioButton = ({
    items,
    name,
    selectedId,
    onChange,
    $colCount,
}: {
    items: { id: string; value: string }[]
    name: string
    selectedId: string
    onChange: (selectedId: string) => void
    $colCount: number
}) => {
    const [selectedItemId, setSelectedItemId] = useState<string>(selectedId)

    const onClick = (id: string) => {
        setSelectedItemId(id)
        onChange(id)
    }

    return (
        <RadioUl $colCount={$colCount}>
            {items.map(item => (
                <Button
                    key={item.id}
                    onClick={() => onClick(item.id)}
                    $isClicked={item.id == selectedItemId}
                    theme={item.id == selectedItemId ? "primary" : "secondary"}
                    text={
                        <label htmlFor={item.id}>
                            <input
                                type="radio"
                                id={item.id}
                                name={name}
                                value={item.value}
                                onChange={e => onClick(e.target.value)}
                                checked={item.id == selectedItemId}
                            />
                            {item.value}
                        </label>
                    }></Button>
            ))}
        </RadioUl>
    )
}

export default RadioButton
