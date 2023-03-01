import React from 'react'
import Script from 'next/script'
import { styled } from '@theme'
import { Button, Heading, Text } from '@components'

const FooterWrap = styled('footer', {
  position: 'relative',
  width: '100%'
})

const FooterContent = styled('div', {
  position: 'relative',
  maxWidth: 1200,
  width: '90%',
  margin: '0 auto'
})

const FooterIntro = styled('div', {
  position: 'relative',
  width: '100%',
  marginBottom: 50,
  textAlign: 'center',

  '> *:not(:last-child)': {
    marginBottom: 12
  }
})

const WindowCleaners = styled('div', {
  display: 'flex',
  flexDirection: 'row',

  '> *:not(:last-child)': {
    marginRight: 12
  }
})

const WindowCleaner = styled('div', {
  width: 28
})

const JobbberHolder = styled('div', {
  position: 'relative',
  width: '100%',
  padding: '100px 0',
  border: '1px solid $border',
  borderRadius: '$r3'
})

const FooterDetails = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',
  width: '100%',
  marginTop: 32
})

interface FooterProps {

}

export const Footer = ({}:FooterProps) => {
  return(

    <FooterWrap>
      <FooterContent>
        <FooterIntro>
          <Heading size="l7" title="Contact us today" />
          <Text alignment="center">
            Need an appointment or interested in a free quote? If so, fill out the form below and we&apos;ll get back to you
            asap. Otherwise, feel free to reach us by phone or email below!
          </Text>
          <a href="mailto:stoberwindowcleaning@gmail.com"><Heading size="l3" title="stoberwindowcleaning@gmail.com" /></a>
          <a href="tel:513-734-2205"><Heading size="l3" title="513.734.2205" /></a>
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