import React from 'react'
import { styled } from '@theme'

// For the master container of the page block component
// This holds all sections of content that make up a page

const BlockWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

// For all of the content within the master container
// This holds the widths of the content, which ahs three different sizes depending on the context

const BlockContent = styled('div', {
  position: 'relative',
  width: '100%',
  margin: '0 auto',

  // For the sizes supported for the container of the content

  variants: {
    width: {
      small: {},
      medium: { maxWidth: 1100, width: '90%' },
      large: {}
    },

    // For the spacing between each of the items within the master container
    // This is optional and not always needed

    blockItemSpacing: {
      l0: { '> *:not(:last-child)': { marginBottom: 12 }},
      l1: { '> *:not(:last-child)': { marginBottom: 32 }},
      l2: { '> *:not(:last-child)': { marginBottom: 50 }}
    }
  }
})

// -------------- Typescript declarations -------------- //

interface BlockProps {
  width?: 'small' | 'medium' | 'large'
  blockItemSpacing?: 'l0' | 'l1' | 'l2'
  children: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const PageBlock = ({ 
    width, // Optional - for the width of the content to not be 100% by default
    blockItemSpacing, // Optional - for the spcing between each of the items within the container
    children // Required - For the content within the container
  }:BlockProps) => {
  
  return(

    <BlockWrap>
      <BlockContent {...{ width, blockItemSpacing }}>
        { children }
      </BlockContent>
    </BlockWrap>

  )
}