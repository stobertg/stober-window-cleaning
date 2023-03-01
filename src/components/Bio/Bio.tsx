import React from 'react'
import { styled } from '@theme'
import { Heading, Text } from '@components'

// For the master container of the Bio list, that displays all of the employees
// This contains the image on the left and the bio on the right

const BioList = styled('div', {
  position: 'relative',
  width: '100%',

  // Here we automate the spacing between the bios that are contained within the list
  
  '> *:not(:last-child)': {
    marginBottom: 12
  }
})

// For the container for each of the individual bios - share the same styling
// This contains the image on the left and the text on the right

const BioWrap = styled('div', {
  position: 'relative',
  width: '100%',
  border: '1px solid $border',
  borderRadius: '$r3'
})

// For the cotainer of all of the content wihtin the master container
// This allows for all of the content to be in the center of the container, respecting spacing set by the parent

const BioContent = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  padding: 16,

  // Here we change the content from row to column on tablet breakpoints

  '@tablet': {
    flexDirection: 'column',
    '> *:not(:last-child)': { marginBottom: 32 }
  }
})

// For the container of the headeshot image on the left of the container
// Here we set the border radius and to position the image in the center of the container

const BioImage = styled('figure', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  minWidth: 300,
  width: 300,
  height: 300,
  overflow: 'hidden',
  borderRadius: '$r2',
  boxShadow: '0 2px 20px rgba( 0, 0, 0, 0.1 )',

  // For the width and height declaration of the image within the container
  // We set this image to be like a background position cover
  
  img: {
    position: 'absolute',
    height: '100%',
    width: 'auto',
    objectFit: 'cover'
  },

  // On tablet breakpoints, we change the width of the image to be full width of the parent container
  // This will take it from min width 300 to full width

  '@tablet': {
    minWidth: '100%',
    width: '100%',

    // Here we set the image to inherit the parent's width and change the image to always show the face

    img: {
      width: '100%',
      objectPosition: '0px -30px'
    }
  }
})

// For the container of the text on the right of the container
// This takes the biography of each individual 

const BioText = styled('div', {
  position: 'relative',
  
  // This is to set the content in the center of the container by default
  // Allows for spacing between the image and the right border

  '> div': {
    position: 'relative',
    width: '88%',
    margin: '0 auto',
    '> *:not(:last-child)': { marginBottom: 16 },
    '@tablet': { width: '95%' }
  }
})

// -------------- Typescript declarations -------------- //

interface BioProps {
  title: string
  people: {
    image: string
    name: string
    bio: React.ReactNode
  }[]
}

// ---------- This is the end of declarations ---------- //

export const Bio = ({ title, people }:BioProps) => {
  return(
    
    <BioList>
      { people.map(( person, i ) => (

        <BioWrap key={`person${ i }`}>
          <BioContent>
            <BioImage><img src={ person.image } alt={ person.name } /></BioImage>
            <BioText>
              <div>
                <Heading heavy size="l5" title={ person.name } />
                <Text fontSize="l2">{ person.bio }</Text>
              </div>
            </BioText>
          </BioContent>
        </BioWrap>

      ))}
    </BioList>

  )
}