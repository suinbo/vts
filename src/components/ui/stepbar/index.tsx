import { Bar, BarWrapper, Circle, Label, Step, StepWrapper, Wrapper } from "./style"

const StepBar = ({ step, setStep }: { step: number | null; setStep: (selectedId: number) => void }) => {
    return (
        <Wrapper>
            <BarWrapper>
                <Bar />
            </BarWrapper>
            <StepWrapper>
                <Step onClick={() => setStep(1)}>
                    <Circle $active={step == 1} $fill="#DCE1EE">
                        <span>1</span>
                    </Circle>
                    <Label>전혀 그렇지 않다</Label>
                </Step>
                <Step onClick={() => setStep(2)}>
                    <Circle $active={step == 2} $fill="#B2BDDC">
                        <span>2</span>
                    </Circle>
                    <Label>약간 그렇다</Label>
                </Step>
                <Step onClick={() => setStep(3)}>
                    <Circle $active={step == 3} $fill="#768CC2">
                        <span>3</span>
                    </Circle>
                    <Label>보통 이다</Label>
                </Step>
                <Step onClick={() => setStep(4)}>
                    <Circle $active={step == 4} $fill="#4C629B">
                        <span>4</span>
                    </Circle>
                    <Label>많이 그렇다</Label>
                </Step>
                <Step onClick={() => setStep(5)}>
                    <Circle $active={step == 5} $fill="#132D6F">
                        <span>5</span>
                    </Circle>
                    <Label>아주 많이 그렇다</Label>
                </Step>
            </StepWrapper>
        </Wrapper>
    )
}

export default StepBar
