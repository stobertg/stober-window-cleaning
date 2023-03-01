import React from 'react'
import { styled } from '@theme'
import { Heading, Button } from '@components'

const ServiceWrap = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'realtive',
  width: '100%',

  '> *:not(:last-child)': {
    marginBottom: 80
  }
})

const ServicesList = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: '1fr',
  gridColumnGap: '12px',
  position: 'relative',
  width: '100%',

  '@tablet': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridRowGap: '50px',
  },

  '@mobile': {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridRowGap: '32px'
  }
})

const Service = styled('div', {
  position: 'relative',
  width: '100%',
  textAlign: 'center'
})

const ServiceImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: 220,
  background: '$bgPrimary',
  borderRadius: '$r1',

  img: {
    width: '65%'
  }
})

const ServiceTitle = styled('div', {
  position: 'relative',
  width: '100%',
  marginTop: 16,
  paddingTop: 16,
  borderTop: '1px solid $border'
})

interface ServiceProps {
  services: {
    image: string
    title: string
  }[]
}

export const Services = ({ services }:ServiceProps) => {
  return(

    <ServiceWrap id="services">
      <Heading size="l7" title="What We Do" />

      <ServicesList>
        { services.map(( service, i ) => (

          <Service key={`service${ i }`}>
            <ServiceImage><img src={ service.image } alt={ service.title } /></ServiceImage>
            <ServiceTitle><Heading size="l3" title={ service.title } /></ServiceTitle>
          </Service>

        ))}
      </ServicesList>
      
      <Button variant="primary" title="Contact us Today" />
    </ServiceWrap>

  )
}