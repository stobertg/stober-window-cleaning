import React from 'react'
import Script from 'next/script'
import { styled } from '@theme'
import { Button, Heading, Text } from '@components'

// For the master container of the footer, located globally on the bottom of the page
// This contains the intro text on the top, Jobber form in the middle, and the smaller details on the bottom

const FooterWrap = styled('footer', {
  position: 'relative',
  width: '100%',
  marginTop: 100
})

// For the container of the all of the content within the master container
// This allows for the content to be positied hotizontally centered in the container

const FooterContent = styled('div', {
  position: 'relative',
  maxWidth: 1200,
  width: '90%',
  margin: '0 auto'
})

// For the container of the intro section on the top of the container
// This holds the title, intro text and the email and phone contact

const FooterIntro = styled('div', {
  position: 'relative',
  width: '100%',
  marginBottom: 50,
  textAlign: 'center',

  // Here we automate the spacing between all of the text blocks within the container

  '> *:not(:last-child)': {
    marginBottom: 12
  }
})

const JobbberHolder = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '100px 0',
  border: '1px solid $border',
  borderRadius: '$r3',

  '@tablet': {
    padding: '32px 0'
  }
})

const FooterDetails = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  marginTop: 32,

  '@tablet': {
    flexDirection: 'column',
    width: '80%',
    margin: '50px auto 0',
    textAlign: 'center',
    lineHeight: 1.3,

    '> *:not(:last-child)': {
      marginBottom: 20
    }
  }
})

// For the container of the window cleaner illustrations on the left of the bottom container
// This contains two of the men for illustrative purposes

const WindowCleaners = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  // This automates the spacing to the right of each of the illustrations
  // This doesn't apply to the last worker in the container

  '> *:not(:last-child)': {
    marginRight: 12
  }
})

// For the container of the individual illustration
// This just dictates the sizing of the illustrations

const WindowCleaner = styled('div', {
  width: 28
})





interface FooterProps {

}

export const Footer = ({}:FooterProps) => {
  return(

    <FooterWrap id="contact">
      <FooterContent>
        <FooterIntro>
          <Heading size="l7" title="Contact us today" />
          <Text alignment="center">
            Need an appointment or interested in a free quote? If so, fill out the form below and we&apos;ll get back to you
            asap. Otherwise, feel free to reach us by phone or email below!
          </Text>
          <a href="mailto:stoberwindowcleaning@gmail.com"><Heading size="l3" title="stoberwindowcleaning@gmail.com" /></a>
          <a href="tel:513-734-2205"><Heading size="l3" title="513.734.2205" /></a>
          <Heading size="l3" title="PO Box 263, Amelia, Ohio" />
        </FooterIntro>

        <Script 
          id="jobber-form"
          src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js" 
          // @ts-ignore
          clienthub_id="cebb237e-e5cb-4780-89fb-93c68ae53c15"
          form_url="https://clienthub.getjobber.com/client_hubs/cebb237e-e5cb-4780-89fb-93c68ae53c15/public/work_request/embedded_work_request_form"
        >
        </Script>
        <JobbberHolder><div id="cebb237e-e5cb-4780-89fb-93c68ae53c15"></div></JobbberHolder>

        <FooterDetails>
          <WindowCleaners>
            <WindowCleaner><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></WindowCleaner>
            <WindowCleaner><img src="/illustrations/dude.svg" alt="Stober Window Cleaning" /></WindowCleaner>
          </WindowCleaners>
          
          <div>&copy;&nbsp;{ (new Date().getFullYear()) } Stober Window Cleaning | Design and coded by <a href="https://www.tylerstober.com" target="_blank">Tyler Stober</a></div>
          
          <div>
            <Button 
              href="mailto:stoberwindowcleaning@gmail.com"
              variant="iconOnly" 
              icon="mail" 
            />

            <Button 
              href="https://www.facebook.com/people/Stober-Window-Cleaning/100054313579881/"
              variant="iconOnly" 
              icon="facebook" 
            />
          </div>
        </FooterDetails>
      </FooterContent>
    </FooterWrap>

  )
}