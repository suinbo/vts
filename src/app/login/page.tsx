"use client"

import { Button, Input, SignupPopup } from "@/components/ui"
import { Suspense, useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { ApplyForm, ButtonForm, InputForm } from "./style"
import useStore, { defaultValue } from "@/store"
import { supabase } from "@/utils/superbase"
import { NavIcon } from "@/components/ui/icon"

const Login = () => {
    const router = useRouter()
    const { setState } = useStore()
    const [{ id, password }, setValue] = useState<{ id: string; password: string }>({ id: "", password: "" })
    const [isOpen, setIsOpen] = useState<boolean>(false)

    console.log(isOpen)

    const onSignIn = useCallback(async () => {
        const { error } = await supabase.auth.signInWithPassword({
            email: `${id}@atc.com`,
            password,
        })

        if (error) {
            // setErrorMessage(error.message)
        } else {
            router.push("/")
            setState(() => ({ ...defaultValue }))
        }
    }, [id, password])

    const onSignUp = useCallback(() => {}, [])

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
                <Button onClick={onSignIn} text="로그인" />
                <span>※ 아이디와 비밀번호는 담당자 (02-1234-5678) 에게 문의해주세요.</span>
            </ButtonForm>
            <ApplyForm>
                <span onClick={() => setIsOpen(true)}>계정 생성</span>
                <NavIcon style={{ width: 12, height: 12 }} onClick={() => setIsOpen(true)} />
            </ApplyForm>
            {isOpen && <SignupPopup title="계정 생성하기" onClose={() => setIsOpen(false)} onSave={onSignUp} />}
        </Suspense>
    )
}

export default Login
