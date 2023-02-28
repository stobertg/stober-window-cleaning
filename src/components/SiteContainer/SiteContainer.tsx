import React from 'react'
import { styled } from '@theme'

const SiteWrap = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '0 0 100px'
})

interface SiteProps {
  children: React.ReactNode
}

export const SiteContainer = ({ children }:SiteProps) => {
  return(

    <SiteWrap>{ children }</SiteWrap>

  )
}