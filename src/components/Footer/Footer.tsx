import React from 'react'
import Script from 'next/script'
import { styled } from '@theme'
import { Button, Icon } from '@components'

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
          <div>&copy;&nbsp;{ (new Date().getFullYear()) } Stober Window Cleaning</div>
          <div>
            <Button 
              href="mailto:stoberwindowcleaning@gmail.com"
              variant="iconOnly" 
              icon="mail" 
            />
            <Button variant="iconOnly" icon="facebook" />
          </div>
        </FooterDetails>
      </FooterContent>
    </FooterWrap>

  )
}