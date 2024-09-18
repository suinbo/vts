import { forwardRef, TextareaHTMLAttributes } from "react"
import { StyledTextArea, StyledTextAreaWrapper } from "./style"

const Textarea = forwardRef<
    HTMLTextAreaElement,
    { placeholder: string; disabled?: boolean; onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void }
>(({ placeholder, disabled = false, onChange }, ref) => {
    return (
        <StyledTextAreaWrapper height={140}>
            <StyledTextArea ref={ref} placeholder={placeholder} disabled={disabled} onChange={onChange} />
        </StyledTextAreaWrapper>
    )
})
export default Textarea

Textarea.displayName = "Textarea"
