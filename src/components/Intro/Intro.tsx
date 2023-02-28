import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

const IntroWrap = styled('div', {

})

const IntroContent = styled('div', {

})

const IntroHero = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%'
})

const IntroImage = styled('div', {

})

const IntroTitle = styled('div', {
  position: 'relative',
  width: '100%'
})

const IntroText = styled('div', {
  position: 'relative',
  
  '> div': {
    width: '80%',
    margin: '0 auto',
    p: { lineHeight: 1.75 }
  }
})

interface IntroProps {

}

export const Intro = ({}:IntroProps) => {
  return(

    <IntroWrap>
      <IntroContent>
        <IntroTitle>
          <Heading bold size="l7" title="Welcome to Stober Window Cleaning" />
          <Heading size="l3" title="Cleaning windows the right way since 1954" />
          <Heading title="513.734.2205" />
        </IntroTitle>

        <IntroHero>
          <IntroImage><img src="/heros/squee.png" alt="Stober Window Cleaning" /></IntroImage>
          <IntroText>
            <Text fontSize="l2">
              <p>
                For the past 60 years, Stober Window Cleaning has been the gold standard in the industry. Servicing Residential and 
                Commercial establishments, our 3,300 annual customers know the quality of our work. Locally owned and operated since 
                1954, we take pride in our history, reputation and the relationships we&apos;ve built with our customers.
              </p>
            </Text>
          </IntroText>
        </IntroHero>
      </IntroContent>
    </IntroWrap>

  )
}