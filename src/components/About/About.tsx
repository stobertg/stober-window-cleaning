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
    marginBottom: 32
  }
})

const AboutAttrs = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: '1fr',
  gridColumnGap: '12px',
  position: 'relative',
  width: '100%',
  textAlign: 'center',

  '@smallDesktop': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridTemplateRows: '2fr',
    gridRowGap: '32px'
  }
})

const Attr = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  textAlign: 'center',

  '> *:not(:last-child)': {
    marginBottom: 20
  },

  '@smallDesktop': {
    alignItems: 'center'
  }
})

const AttrImage = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: 180,
  height: 180,
  borderRadius: '50%',
  border: '4px solid $bgPrimary',

  img: {
    height: '50%',
    width: 'auto'
  },

  variants: {
    variant: {

      // For the strike-through for the rain component

      cancel: {
        '&:after': {
          content: '',
          position: 'absolute',
          width: 4,
          height: '100%',
          background: '$bgPrimary',
          transform: 'rotate( 45deg )'
        }
      }
    }
  }
})

const AttrTitle = styled('div', {
  position: 'relative',
  width: '70%'
})

interface AboutProps {
  items: {
    variant?: 'cancel'
    anniversary?: boolean
    href?: string
    title: string
    image?: string
  }[]
}

export const About = ({ items }:AboutProps) => {
  return(

    <AboutWrap id="about">
      <AboutContent>
        <AboutText>
          <h3><Heading bold size="l8" title="A little about us" /></h3>
          <Text fontSize="l3" color="darkBg">
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
                    <AttrImage><img src={ item.image } alt={ item.title } /></AttrImage>
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
                  <AttrImage variant={ item.variant }><img src={ item.image } alt={ item.title } /></AttrImage>
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