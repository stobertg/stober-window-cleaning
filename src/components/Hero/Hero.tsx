import React from 'react'
import { styled } from '@theme'

// For the master container of the hero section
// This lives on top of the page, directly below the site header, contianing the image of grandpa

const HeroWrap = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100vw',
  height: '95vh',
  maxHeight: 900,
  overflow: 'hidden',

  // For the white slant on the bottom of the container
  // This stretches the full width of the screen

  '&:after': {
    content: '',
    position: 'absolute',
    bottom: -280,
    width: '110%',
    height: 400,
    background: '$bgPrimary',
    transform: 'rotate( 8deg )',
    zIndex: 1
  }
})

// For the contianer of the background image and the text
// This is the picture of grandpa - container needed for the quote section on the bottom left

const HeroImage = styled('figure', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  height: '100%',

  // For the sizing of the image, to sit in the center of the parent container
  // This sets the min width and for the image to always take up the full height of the container

  img: {
    display: 'flex',
    position: 'absolute',
    width: 'auto',
    minWidth: '100vw',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0
  }
})

// For the container of the text
// This positions the quote on the bottom left of the container

const HeroText = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  position: 'relative',
  maxWidth: 1200,
  width: '90%',
  height: '90%',
  margin: '0 auto',
  zIndex: 20
})

// -------------- Typescript declarations -------------- //

interface HeroProps {
  image: string
  imageAlt: string
  quote: React.ReactNode
}

// ---------- This is the end of declarations ---------- //

export const Hero = ({
    image, // Requited - for the background image
    imageAlt, // Required - for the description of the background image
    quote // Required - for the quote from grandpa
  }:HeroProps) => {
  
  return(

    <HeroWrap>
      <HeroImage>
        <img src={ image } alt={ imageAlt } />
        <HeroText><figcaption>{ quote }</figcaption></HeroText>
      </HeroImage>
    </HeroWrap>

  )
}