"use client"

import { useMemo } from 'react'
import QnAItems from "@/app/result/_component/print/(const)"
import { StoreStateProp } from "@/store"

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

export default function usePrintContents(data: StoreStateProp) {
  const personalInfo = useMemo<IPersonalInfo>(() => {
    return {
      gender: data.info.gender,
      age: data.info.age ?? 0,
      name: data.info.name,
      date: data.created_at?.split('T')[0].replace(/-/g, '.') ?? '-'
    }
  }, [data.info, data.created_at])

  const checkList = useMemo<ICheckList[]>(() => {
    return QnAItems.map((v) => {
      const current = data.report.find(d => d.id === v.index)
      return {
        ...v,
        value: current?.evals ?? undefined,
      }
    })
  }, [data.report])

  return {
    personalInfo,
    checkListItem: checkList,
  }
}
