import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const AboutWrap = styled('div', {
  position: 'relative',
  width: '100%',
  '*': { color: '$white50' }
})

const AboutContent = styled('div', {
  position: 'relative',
  width: '100%',
  

  '> *:not(:last-child)': {
    marginBottom: 80
  }
})

const AboutText = styled('div', {

  '> *:not(:last-child)': {
    marginBottom: 20
  }
})

const AboutAttrs = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: '1fr',
  gridColumnGap: '12px',
  gridRowGap: '0px',
  position: 'relative',
  width: '100%'
})

const Attr = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  textAlign: 'center',

  '> *:not(:last-child)': {
    marginBottom: 20
  }
})

const AttrImage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 180,
  height: 180,
  borderRadius: '50%',
  border: '2px solid $bgPrimary',

  img: {
    height: '50%',
    width: 'auto'
  }
})

const AttrTitle = styled('div', {
  position: 'relative',
  width: '70%'
})

interface AboutProps {
  items: {
    anniversary?: boolean
    href?: string
    title: string
  }[]
}

export const About = ({ items }:AboutProps) => {
  return(

    <AboutWrap>
      <AboutContent>
        <AboutText>
          <h3><Heading bold size="l7" title="A little about us" /></h3>
          <Text fontSize="l3">
            <p>
              We perform Residential and Commercial window cleaning in Eastern Cincinnati and surrounding counties North of the river. 
              We specialize in windows, gutters, light fixtures, mirrors and chandeliers, as well as treating the inside of your home 
              like our own. Between all of our employees we have over 80 years of experience. Having been in business since 1954, we 
              have a proven reputation of giving our customers superior service.
            </p>
          </Text>
        </AboutText>

        <AboutAttrs>
          { items.map(( item, i ) => (

            <>
              { item.href ? (
                
                <a href={ item.href } target="_blank" rel="noreferrer">
                  <Attr key={`item-${ i }`}>
                    <AttrImage><img src="/icons/bbb.svg" alt={ item.title } /></AttrImage>
                    <AttrTitle><h2><Heading size="l3" title={ item.title } /></h2></AttrTitle>
                  </Attr>
                </a>
              
              ) : item.anniversary ? (

                <Attr key={`item-${ i }`}>
                  <AttrImage>
                    <Heading bold size="l10" title={ (new Date().getFullYear()) - 1954 } />
                    <Heading size="l4" title="Years" />
                  </AttrImage>
                  <AttrTitle><h2><Heading size="l3" title={ item.title } /></h2></AttrTitle>
                </Attr>
              
              ) : (

                <Attr key={`item-${ i }`}>
                  <AttrImage><img src="/icons/bbb.svg" alt={ item.title } /></AttrImage>
                  <AttrTitle><h2><Heading size="l3" title={ item.title } /></h2></AttrTitle>
                </Attr>

              )}
            </>
          ))}
        </AboutAttrs>
      </AboutContent>
    </AboutWrap>

  )
}