import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

// For the mast container of the history component - holding the histoy text of the company
// This is located directly above the contact form on the bottom of the page

const HistoryWrap = styled('div', {
  position: 'relative',
  width: '100%',

  // Here we automate the spacing of all of the content within the container
  // This spacies the worker grahics on top, the text in the middle and the worker graphics on the bottom

  '> *:not(:last-child)': {
    marginBottom: 100
  }
})

// For the container of the little workers on the top and bottom of the container
// This holds the retro graphics of the window cleaners, side-by-side

const LittleWorkers = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  overflow: 'hidden',

  // For the automated spacing on the right of each of the workers
  // We remove the spacing for the last worker in the row

  '> *:not(:last-child)': {
    marginRight: 50
  }
})

// For the container of each of the individual workers
// This is just used to set the width of the images, so each are more of a thumbnail

const LittleWorker = styled('div', {
  position: 'relative',
  minWidth: 32,
  width: 32
})

// For the contaier of the text, in the center of the container
// This contains the title on the top and the history text below - 2 paragraphs

const HistoryContent = styled('div', {
  position: 'relative',
  width: '100%',

  // For the automated spacing between the title and the paragraphs below

  '> *:not(:last-child)': {
    marginBottom: 32
  }
})

interface HistoryProps {

}

export const History = ({}:HistoryProps) => {
  return(

    <HistoryWrap>
      <LittleWorkers>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
      </LittleWorkers>
      
      <HistoryContent>
        <Heading bold size="l7" title="History" />
        <Text fontSize="l2">
          <p>
            The founder of Stober Window Cleaning, Lloyd Stober, was born and raised in Lima, Ohio. He moved to Clermont county in 
            1953, where he and his wife, Jo Ann, raised five children of which four boys were involved in the business. Working 
            diligently, he built a large costumer base, some of which we still service today. In 1954 the company started as a general 
            cleaning service, cleaning windows, wall washing, exterior house washing, floor cleaning and waxing, and general janitorial 
            services.
          </p>

          <p>
            As time went on, the company decided to specialize in residential and commercial window cleaning. Lloyd Stober retired 
            in 1985 and Chris and Dan Stober bought the company. Chris started working full-time in 1969 with over 40 years of 
            experience. Dan started full time in 1976 with over 35 years of experience. Ryan Stober began working full time in 2005 
            and will carry on the tradition as third generation.
          </p>
        </Text>
      </HistoryContent>

      <LittleWorkers>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
        <LittleWorker><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></LittleWorker>
      </LittleWorkers>
    </HistoryWrap>

  )
}