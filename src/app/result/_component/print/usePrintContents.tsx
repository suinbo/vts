"use client"

import { useMemo } from 'react'
import QnAItems from "@/app/result/_component/print/(const)"

export interface IPersonalInfo {
  gender: 'M' | 'F' | string;
  age: number;
  name: string;
  date: string;
}

export interface ICheckList {
  index: number
  label: string
  value?: number
  long?: boolean
}

export default function usePrintContents() {
  const personalInfo = useMemo<IPersonalInfo>(() => {
    return {
      gender: 'M',
      age: 21,
      name: '홍글동',
      date: '2024.09.11'
    }
  }, [])

  const checkList = useMemo<ICheckList[]>(() => {
    const check: number[] = []

    return QnAItems.map((v, i) => ({
      ...v,
      value: check?.[i],
    }))
  }, [])

  return {
    personalInfo,
    checkListItem: checkList,
  }
}
