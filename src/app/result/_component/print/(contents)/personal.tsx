import { Personal } from '../style'
import type { IPersonalInfo } from "../usePrintContents"

interface Props {
  info: IPersonalInfo
}

export default function PersonalSection({ info }:Props) {
  return (
    <Personal>
      <table className='table'>
        <thead>
          <tr>
            <th className='gender'>성별</th>
            <td className='gender'>{info.gender === 'M' ? '남성' : '여성'}</td>

            <th className='age'>나이</th>
            <td className='age'>만 {info.age}세</td>

            <th className='name'>이름</th>
            <td className='name'>{info.name}</td>

            <th className='date'>작성일자</th>
            <td className='date'>{info.date}</td>
          </tr>
        </thead>
      </table>
    </Personal>
  )
}
