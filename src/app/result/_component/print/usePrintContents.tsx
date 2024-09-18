'use client'

import {ReactNode, useMemo} from 'react';

export interface ILabelValue<T> {
  index: string,
  label: ReactNode,
  value: T
}

export interface ISummaryTarget {
  index: string,
  label: string,
  name: string,
  age: number,
  gender: 'T'|'F'|string,
}

export interface IQna {
  index: string,
  no: string,
  q: ReactNode,
  value?: number,
  note: string,
  accent?: boolean
}

export interface IQnaLevel {
  casing: 'a' | 'a+b',
  count: number,
  level: number,
}

export default function usePrintContents() {
  const summaryTargetItem = useMemo<ISummaryTarget[]>(() => {
    return (
      [
        {
          index: '피해자',
          label: '피해자',
          name: '피길동', // TODO: variable
          age: 20, // TODO: variable
          gender: 'F', // TODO: variable
        },
        {
          index: '가해자',
          label: '가해자',
          name: '가길동', // TODO: variable
          age: 21, // TODO: variable
          gender: 'M', // TODO: variable
        },
      ]
    )
  }, [])
  const summaryCategoryItem = useMemo<ILabelValue<boolean>[]>(() => {
    return [
      {
        index: '살인 등 강력범죄',
        label: <>살인 등<br/>강력범죄</>,
        value: true, // TODO: variable
      },
      {
        index: '상해 폭행 등',
        label: <>상해<br/>폭행 등</>,
        value: false, // TODO: variable
      },
      {
        index: '성폭력',
        label: <>성폭력</>,
        value: false, // TODO: variable
      },
      {
        index: '가정 폭력',
        label: <>가정<br/>폭력</>,
        value: false, // TODO: variable
      },
      {
        index: '협박',
        label: <>협박</>,
        value: false, // TODO: variable
      },
      {
        index: '데이트 폭력',
        label: <>데이트<br/>폭력</>,
        value: false, // TODO: variable
      },
      {
        index: '스토킹',
        label: <>스토킹</>,
        value: false, // TODO: variable
      }
    ]
  }, [])

  const qnaItem = useMemo<IQna[]>(() => {
    return [
      {
        index: '1',
        no: '①',
        q: '가해자가 신체적 폭력 또는 성폭력을 행사한 적이 있나요?',
        value: 0, // TODO: variable
        note: '복부 4번 연속 구타당함', // TODO: variable
      },
      {
        index: '2',
        no: '②',
        q: '가해자가 피해자의 목을 조르거나 질식시킨 적이 있나요?',
        value: 1, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '3',
        no: '③',
        q: '가해자가 흉기(칼 등 포함)로 위협하거나 폭행한 적이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
        accent: true,
      },
      {
        index: '4',
        no: '④',
        q: '가해자가 피해자를 감금 또는 결박하거나 차로 납치한 적이 있나요?',
        value: 0, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '5',
        no: '⑤',
        q: '가해자가 피해자나 그 가족이 일상적으로 생활하는 장소(주거지·직장·학교 등) 또는 인적사항, 연락처를 알고 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '6',
        no: '⑥',
        q: '신고 이후, 가해자가 피해자나 그 가족에게 연락하거나 연락을 시도한 적이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '7',
        no: '⑦',
        q: '가해자가 피해자나 그 가족이 일상적으로 생활하는 장소(주거지·직장·학교 등) 또는 그 부근에 찾아온 적이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '8',
        no: '⑧',
        q: '가해자가 피해자나 그 가족에게 위해를 가하거나 살해하겠다고 위협한 적이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '9',
        no: '⑨',
        q: '가해자가 피해자나 그 가족에게 연락하거나 찾아오는 행위가 지속·반복되거나 이전보다 잦아지고 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '10',
        no: '⑩',
        q: '가해자가 피해자나 그 가족에 위해를 가하거나 살해하겠다고 위협하는 정도가 이전보다 심해지고 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
        accent: true,
      },
      {
        index: '11',
        no: '⑪',
        q: '피해자가 가해자의 행위로 입원 또는 2주 이상 치료, 정신과 진료 등을 받은 적이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '12',
        no: '⑫',
        q: '피해자가 가해자의 신고 보복에 대한 불안감 또는 공포심으로 인해 일상생활에 어려움을 겪고 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
        accent: true,
      },
      {
        index: '13',
        no: '⑬',
        q: '가해자의 범죄·수사 경력 있음',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '14',
        no: '⑭',
        q: '폭력성 범죄(방화,살인,상해,폭행,유기학대,체포감금,협박,강간,추행,절도,강도,스토킹 등) 경력 있음',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '15',
        no: '⑮',
        q: '보복성 범죄(특가법5조9/수사, 재판과 관련하여 보복의 목적으로 살인,상해,폭행,체포감금,협박) 경력 있음',
        value: 2, // TODO: variable
        note: '', // TODO: variable
        accent: true,
      },
      {
        index: '16',
        no: '⑯',
        q: '가해자-피해자 간 신고이력(112, 고소·고발 등) 있음(본 건 제외)',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '17',
        no: '⑰',
        q: <>이 사건 외 현재 수사 또는 재판 진행 중인 사건 있음<br/>(이 사건의 피해자와 무관한 사건도 포함)</>,
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '18',
        no: '⑱',
        q: '구속영장·유치장 유치 신청이 기각되거나 피해자 사건 관련 입감·복역 후 출소한 경우',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '19',
        no: '⑲',
        q: '가해자가 피해자와 전·현 배우자 또는 전·현 연인관계에 있거나 그러한 관계라고 주장하고 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '20',
        no: '⑳',
        q: '가해자가 피해자에게 자신 외의 연인 관계가 있다고 의심하고 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '21',
        no: '㉑',
        q: '가해자가 피해자와 다른 사람과의 만남 또는 연락을 차단하거나 피해자에게 과도한 집착을 보이나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '22',
        no: '㉒',
        q: '가해자가 피해자나 그 가족이 일상적으로 생활하는 장소(주거지·직장·학교 등)나 인적사항, 연락처를 알기 위해 피해',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '23',
        no: '㉓',
        q: '가해자에 대해 보호조치(임시조치, 긴급응급조치,잠정조치,피해자보호명령 등) 결정이 내려진 적이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '24',
        no: '㉔',
        q: '가해자가 보호조치를 위반한 적이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
        accent: true,
      },
      {
        index: '25',
        no: '㉕',
        q: '가해자가 평소에 술이나 약물로 인한 문제가 있거나 정신과 진료(우울증,조현병,자폐,불안장애, PTSD 등)를 받은 적이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '26',
        no: '㉖',
        q: '가해자가 최근 실직 등 금전적인 문제가 있거나, 피해자와 금전적인 문제로 갈등이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '27',
        no: '㉗',
        q: '가해자가 자살 또는 자해하겠다고 위협하거나 시도한 적이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
      {
        index: '28',
        no: '㉘',
        q: '가해자가 반려동물을 학대하겠다고 위협하거나 시도한 적이 있나요?',
        value: 2, // TODO: variable
        note: '', // TODO: variable
      },
    ]
  }, [])

  const qnaLevel = useMemo<IQnaLevel>(() => {
    let tmp = 0;
    let count = 0
    let isNormal = false;
    for (let i = 0; i < qnaItem.length; i++) {
      const { value = -1} = qnaItem[i]
      if (value > -1) {
        tmp += 1;
        count += (value === 0 ? 1 : 0)
      }
      if ((i === 2 || i===3 || i===9 || i===14 || i===17 || i===23) && value === 0)
        isNormal = true
    }

    const casing = tmp > 18 ? 'a+b' : 'a'

    const level = (() => {
      if(casing === 'a') {
        if(count >= 13) return 4;
        if(count >= 8) return 3;
        if(count >= 4 || isNormal) return 2;
        if(count >= 2) return 1;
        return 0
      }
      else {
        if(count >= 19) return 4;
        if(count >= 11) return 3;
        if(count >= 5 || isNormal) return 2;
        if(count >= 2) return 1;
        return 0
      }
    })()

    return {
      casing,
      count,
      level
    }
  }, [qnaItem])

  const opinion = useMemo<string>(() => {
    return '※ 예시) 스토킹 범죄 피해자 및 가해자와 면담 결과 Part A+B 합산 개수가 10개로 권고 등급은 ‘보통’이나 피해자에 대한 가해자의 협박 수위가 점점 높아지고 그 빈도 또한 증가하고 있어 한 단계 상향하여 ‘높음’등급으로 조정하여 판단하기로 함.' // TODO: variable
  }, [])

  return {
    summary: {
      targetItem: summaryTargetItem,
      categoryItem: summaryCategoryItem,
    },
    table: {
      qnaItem,
    },
    level: qnaLevel,
    opinion: opinion
  }
}