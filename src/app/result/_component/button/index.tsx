"use client"

import { useCallback } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 8px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  outline: none;
`

export default function PrintButton() {
  const handlePrint = useCallback(() => {
    window.open('/result', '_blank', 'width=811,height=1123')
  }, [])

  return (
    <>
      <Button onClick={handlePrint}>click me</Button>
    </>
  )
}
