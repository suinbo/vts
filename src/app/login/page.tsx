"use client"

import { Button, Input } from "@/components/ui"
import { Suspense, useCallback, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import { ButtonForm, InputForm } from "./style"
import useStore, { defaultValue } from "@/store"
import { supabase } from "@/utils/superbase"
import { USERTYPE } from "@/resources/constant"
import { focusOnEmpty } from "@/utils/common"
import { useValidate } from "@/hooks/useValidate"
import { errorMessage } from "@/resources/data"

const Login = () => {
    const router = useRouter()
    const { state, setState } = useStore()
    const [errMessage, setErrMessage] = useState<string>("")

    const [{ id, password }, setValue] = useState<{ id: string; password: string }>({ id: "", password: "" })
    const { isInValid } = useValidate({ id, password })
    const refs = {
        id: useRef<HTMLInputElement>(null),
        password: useRef<HTMLInputElement>(null),
    }

    const onSignIn = useCallback(
        async (e?: React.KeyboardEvent<HTMLInputElement>) => {
            e?.preventDefault()
            focusOnEmpty(refs)

            if (isInValid) return

            const { data, error } = await supabase.auth.signInWithPassword({
                email: `${id}@atc.com`,
                password,
            })

            if (data.user) {
                const { data: response, error } = await supabase
                    .from("userinfo")
                    .select("is_admin, id")
                    .eq("id", data.user?.id)

                if (response?.length) {
                    router.push("/")
                    setState(() => ({
                        ...defaultValue,
                        logged_user: response[0]?.is_admin ? USERTYPE.POLICE : USERTYPE.CLIENT,
                        userId: response[0]?.id,
                    }))
                }

                if (error) setErrMessage(error.message)
            }

            if (error) setErrMessage(errorMessage[error.code as string])
        },
        [id, password, state, refs]
    )

    return (
        <Suspense>
            <InputForm>
                <span>아이디</span>
                <Input
                    refs={refs.id}
                    onChange={id => setValue(prev => ({ ...prev, id }))}
                    value={id}
                    placeholder="아이디를 입력하세요."
                />
            </InputForm>
            <InputForm>
                <span>비밀번호</span>
                <Input
                    refs={refs.password}
                    type="password"
                    onChange={password => setValue(prev => ({ ...prev, password }))}
                    value={password}
                    placeholder="비밀번호를 입력하세요."
                    onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                        e.key == "Enter" && onSignIn(e)
                    }}
                />
                {errMessage && <span className="error">※ {errMessage}</span>}
            </InputForm>
            <ButtonForm>
                <Button onClick={onSignIn} text="로그인" />

                <span>※ 아이디와 비밀번호는 담당자 (02-1234-5678) 에게 문의해주세요.</span>
            </ButtonForm>
        </Suspense>
    )
}

export default Login
