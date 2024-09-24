"use client"

import { Button, Input } from "@/components/ui"
import { Suspense, useCallback, useState } from "react"
import { useRouter } from "next/navigation"
import { ButtonForm, InputForm } from "./style"
import useStore, { defaultValue } from "@/store"
import { supabase } from "@/utils/superbase"
import { USERTYPE } from "@/resources/constant"

const Login = () => {
    const router = useRouter()
    const { state, setState } = useStore()
    const [{ id, password }, setValue] = useState<{ id: string; password: string }>({ id: "", password: "" })

    const onSignIn = useCallback(async () => {
        const { data } = await supabase.auth.signInWithPassword({
            email: `${id}@atc.com`,
            password,
        })

        if (data) {
            const { data: response } = await supabase.from("userinfo").select("is_admin").eq("id", data.user?.id)

            if (response?.length) {
                setState(() => ({
                    ...defaultValue,
                    logged_user: response[0]?.is_admin ? USERTYPE.POLICE : USERTYPE.CLIENT,
                }))
                router.push("/")
            }
        }
    }, [id, password, state])

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
        </Suspense>
    )
}

export default Login
