export const questions = [
    { id: 1, evals: null, content: "이번 사건과 관련된 기억들이 반복적으로 생각난다." },
    { id: 2, evals: null, content: "가해자의 모습이 자꾸 떠오른다." },
    { id: 3, evals: null, content: "예민하고 짜증이 많이 난다." },
    { id: 4, evals: null, content: "이번 사건과 관련된 악몽을 꾼다." },
    { id: 5, evals: null, content: "범죄피해 상황으로 돌아가 있는 것처럼 느낀 적이 있다." },
    { id: 6, evals: null, content: "긴장되어 있다." },
    { id: 7, evals: null, content: "피해 현장과 비슷한 장소에 가면 고통스럽다." },
    { id: 8, evals: null, content: "안절부절못하다." },
    { id: 9, evals: null, content: "주변에 누가 있는지 자꾸 확인한다." },
    { id: 10, evals: null, content: "피해 당시와 관련된 사람이나 장소 등을 피하려고 한다." },
    {
        id: 11,
        evals: null,
        content:
            "피해 당시를 떠오르게 하는 자극(사람, 장소, 물건, 소리, 냄새 등)을 접하면 불안, 분노, 공포 등의 감정변화가 있다.",
    },
    { id: 12, evals: null, content: "집중하는데 어려움이 있다." },
    { id: 13, evals: null, content: "작은 소리에도 깜짝깜짝 놀란다." },
    { id: 14, evals: null, content: "세상은 위험하다." },
    { id: 15, evals: null, content: "나의 미래는 희망이 없는 것 같다." },
    { id: 16, evals: null, content: "몸의 감각이 둔하게 느껴지고 멍하다." },
    { id: 17, evals: null, content: "혼자인 것 같다." },
    { id: 18, evals: null, content: "앞으로 어떻게 살아야 할지 모르겠다." },
    { id: 19, evals: null, content: "감정이 메마른 것 같다." },
    { id: 20, evals: null, content: "몸과 마음이 분리된 것 같은 기분이다." },
    { id: 21, evals: null, content: "갈 곳이 없다." },
    { id: 22, evals: null, content: "나를 둘러싼 것들이 비현실적으로 느껴진다." },
    { id: 23, evals: null, content: "주위사람들과 멀어지거나 단절된 느낌이다." },
]

export const genders = [
    { id: "M", value: "남성" },
    { id: "F", value: "여성" },
]

export const RESULT_GRADE = {
    LOW: {
        grade: "저위험군",
        opinion:
            "검사결과 이번 범죄피해로 인한 심리적 충격 정도가 다행히 매우 높지 않은 것으로 나타났습니다. 하지만 범죄피해로 인한 다양한 문제나 어려움이 나타날 수 있습니다. 상담을 원하시면 언제든지 범죄피해 상담 전문기관에 연계하여 도움을 드리겠습니다.",
    },
    TRAUMA: {
        grade: "트라우마군",
        opinion:
            "검사결과 이번 범죄피해로 인한 스트레스가 높은 것으로 나타났습니다. 귀하의 스트레스 반응을 경감시킬 수 있는 전문가의 상담이 상당히 필요할 것으로 보입니다.",
    },
    HIGH: {
        grade: "고위험군",
        opinion:
            "검사결과 이번 범죄피해로 인한 스트레스가 매우 심한 것으로 나타났습니다. 즉각적인 위기개입 상담이나 치료가 필요할 것으로 보입니다.",
    },
}
