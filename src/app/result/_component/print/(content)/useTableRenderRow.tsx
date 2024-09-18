import { Fragment, useCallback } from "react"
import { IQna } from "../usePrintContents"

export default function useTableRenderRow(qnaItem: IQna[]) {
    return useCallback(
        (i: number, tr?: boolean) => {
            const { index, no, q, value, note, accent } = qnaItem[i - 1]

            return tr ? (
                <tr className={accent ? "accent" : undefined} key={index}>
                    <td className="number list">{no}</td>
                    <td className="title list">{q}</td>
                    <td className="check yes">{value === 0 && "✔"}</td>
                    <td className="check">{value === 1 && "✔"}</td>
                    <td className="check">{value === 2 && "✔"}</td>
                    <td className="note">{note}</td>
                </tr>
            ) : (
                <Fragment key={index}>
                    <td className="number list">{no}</td>
                    <td className="title list">{q}</td>
                    <td className="check yes">{value === 0 && "✔"}</td>
                    <td className="check">{value === 1 && "✔"}</td>
                    <td className="check">{value === 2 && "✔"}</td>
                    <td className="note">{note}</td>
                </Fragment>
            )
        },
        [qnaItem]
    )
}
