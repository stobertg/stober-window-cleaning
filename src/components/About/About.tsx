import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const AboutWrap = styled('div', {
  position: 'relative',
  width: '100%'
})

const AboutContent = styled('div', {
  position: 'relative',
  width: '100%',

  '> *:not(:last-child)': {
    marginBottom: 32
  }
})

const AboutAttrs = styled('div', {

})

const Attr = styled('div', {
  position: 'relative',
  width: 200,
  height: 200,
  borderRadius: '50%',
})

const AttrTitle = styled('div', {

})

interface AboutProps {
  items: {
    title: string
  }[]
}

export const About = ({ items }:AboutProps) => {
  return(

    <AboutWrap>
      <AboutContent>
        <h3><Heading size="l7" title="A little about us" /></h3>
        <Text fontSize="l1">
          <p>
            We perform Residential and Commercial window cleaning in Eastern Cincinnati and surrounding counties North of the river. 
            We specialize in windows, gutters, light fixtures, mirrors and chandeliers, as well as treating the inside of your home 
            like our own. Between all of our employees we have over 80 years of experience. Having been in business since 1954, we 
            have a proven reputation of giving our customers superior service.
          </p>
        </Text>

        <AboutAttrs>
          { items.map(( item, i ) => (
            <Attr key={`item-${ i }`}>
              <AttrTitle><Heading size="l4" title={ item.title } /></AttrTitle>
            </Attr>
          ))}
        </AboutAttrs>
      </AboutContent>
    </AboutWrap>

  )
}