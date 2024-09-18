"use client"

import { Button, Input } from "@/components/ui"
import { Suspense, useState } from "react"
import { useRouter } from "next/navigation"
import { ButtonForm, InputForm } from "./style"
import useStore from "@/store"

const Login = () => {
    const router = useRouter()
    const { setState } = useStore()
    const [{ id, password }, setValue] = useState<{ id: string; password: string }>({ id: "", password: "" })

    return (
        <Suspense>
            <InputForm>
                <span>아이디</span>
                <Input
                    onChange={id => setValue(prev => ({ ...prev, id }))}
                    value={id}
                    placeholder="아이디를 입력하세요."
                />
            </InputForm>
            <InputForm>
                <span>비밀번호</span>
                <Input
                    type="password"
                    onChange={password => setValue(prev => ({ ...prev, password }))}
                    value={password}
                    placeholder="비밀번호를 입력하세요."
                />
            </InputForm>
            <ButtonForm>
                <Button onClick={() => router.push("/")} text="로그인" />
                <span>※ 아이디와 비밀번호는 담당자 (02-1234-5678) 에게 문의해주세요.</span>
            </ButtonForm>
        </Suspense>
    )
}

export default Login
