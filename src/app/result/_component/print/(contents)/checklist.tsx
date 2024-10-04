import { ICheckList } from "../usePrintContents"
import { Checklist } from "../style"

interface CheckProps {
    items: ICheckList[]
}

export default function ChecklistSection({ items }: CheckProps) {
    return (
        <Checklist>
            <table>
                <thead>
                    <tr>
                        <th className="list">문&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;항</th>
                        <th className="check">
                            전혀
                            <br />
                            그렇지
                            <br />
                            않다
                        </th>
                        <th className="check">
                            약간
                            <br />
                            그렇다
                        </th>
                        <th className="check">
                            보통
                            <br />
                            이다
                        </th>
                        <th className="check">
                            많이
                            <br />
                            그렇다
                        </th>
                        <th className="check">
                            아주
                            <br />
                            많이
                            <br />
                            그렇다
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(v => (
                        <tr key={v.index}>
                            <td className={`list${v.long ? " long" : ""}`}>
                                <p>{v.label}</p>
                            </td>
                            <td>{v?.value === 1 ? "✔" : <>&nbsp;</>}</td>
                            <td>{v?.value === 2 ? "✔" : <>&nbsp;</>}</td>
                            <td>{v?.value === 3 ? "✔" : <>&nbsp;</>}</td>
                            <td>{v?.value === 4 ? "✔" : <>&nbsp;</>}</td>
                            <td>{v?.value === 5 ? "✔" : <>&nbsp;</>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Checklist>
    )
}
