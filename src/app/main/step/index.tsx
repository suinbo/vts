import { Layout } from "@/components/layout"
import useStore from "@/store"
import Intro from "../intro"
import { Info } from "./(step1)"
import { Assessment, Privacy } from "./(step2)"
import { Body } from "./style"
import { Report } from "./(step3)"

const Step = () => {
    const {
        state: { page },
    } = useStore()

    const view: { [key: number]: React.ReactNode } = {
        10: <Intro />,
        11: <Privacy />,
        12: <Info />,
        21: <Assessment />,
        31: <Report />,
    }

    return (
        <Layout>
            <Body>{view[page]}</Body>
        </Layout>
    )
}

export default Step
