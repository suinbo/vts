import { USERTYPE } from "./constant"

export const userTypes = [
    { id: USERTYPE.POLICE, value: "경찰관" },
    { id: USERTYPE.CLIENT, value: "내담자" },
]

export const questions = [
    { id: 1, evals: null, content: "1이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 2, evals: null, content: "2이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 3, evals: null, content: "3이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 4, evals: null, content: "4이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 5, evals: null, content: "5이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 6, evals: null, content: "6이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 7, evals: null, content: "7이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 8, evals: null, content: "8이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 9, evals: null, content: "9이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 10, evals: null, content: "10이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 11, evals: null, content: "11이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 12, evals: null, content: "12이번 사건과 관련된 기억들이 반복적으로 생각난다." },
]

export const genders = [
    { id: "M", value: "남성" },
    { id: "F", value: "여성" },
]

export const grades = [
    { id: "N", name: "없음", color: "#65CEE5" },
    { id: "L", name: "낮음", color: "#B1D649" },
    { id: "G", name: "보통", color: "#FFCC16" },
    { id: "H", name: "높음", color: "#EE671F" },
    { id: "EH", name: "매우 높음", color: "#CA1616" },
]
