import React from 'react'
import Link from 'next/link'
import { ButtonBase } from './ButtonBase'

/* 
  *** ReadMe ***

  The button component is amied to solve all instances of a button, not only in the traditional sense.
  Meaning that it supports external links, internal page links, onclick events, or a static button that has no click event attached.
  When meaning static, an example could be a fully clickable card - this could include a visual button meant for afforance,
  while the whole button is clickable, wether that takes the user to a blog post, or opens a dialog window, or an external link.

  This button component is also meant to be scalable (customizable), where various components might be needed to be combined,
  that are unknown or not addressed within here. This is the fallback method. Take for exmaple an avatar accompanied by a user name.
  This situation wouldn't be addressed here but the button component will solve for it, wether that avatar button takes the user to
  an external website, internal page, or an onclick event. All is needed is to import this component into said compnent and use it within there.
  Why this is important is because it automates a few features, such as a background color, and support on click events, without having 
  to write code again.

  The button by default comes bare-bones, meaning there is no visual rendering of a traditional button. This is added once a variant
  is attached to a button. You can view the current varients within the proptypes below.

  Click events supported: 
  • External links - <a href="" target="_blank"></a>
  • Internal links - <Link href=""></Link> ( Following NextJS convention )
  • onClick events - <button onClick={ () => fuunction() }></button>
  • Fallback is a static button, visually representing one, with no click event

  *** End ReadMe ***
*/

// -------------- Typescript declarations -------------- //

interface ButtonProps {
  circle?: 'l0' | 'l1' | 'l2'
  variant?: 'skeleton' | 'primary' | 'secondary' | 'disabled' | 'danger' | 'success' | 'avatar' | 'iconOnly' | 'frosted'
  size?: 'l0' | 'l1'
  title?: any
  icon?: any
  iconPlacement?: 'right'
  children?: React.ReactNode
  notBold?: boolean
  type?: 'submit'
  href?: string
  target?: '_blank'
  pageLink?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  removeStyling?: boolean
}

// ---------- This is the end of declarations ---------- //

export const Button = ({
    notBold, // Supporting if the text in the button is bold
    variant, // Supporting the different visual treatments of the button
    title, // Support for the title of a button, only not used if icon only
    icon, // Supporting the icons with the button - can either be on the right of the left of the text
    iconPlacement, // Supporting the icon placement to be on the left or right side of the container
    size, // Supporting the small version of the button
    pageLink, // Supprting Next/Link to tak the user to another page within the site - wraps in <Link> tag
    href, // Supporting links that take users to an external website - wraps in <a> tag
    target, // Supporting the href link to be opened in a new tab/window ( _blank )
    onClick, // Supporting standalone button clicks that provide an interaction on the current page - wraps in <button> tag
    type, // This is to support Form submits, Text, Number Inputs, ect
    circle,
    removeStyling,
    children // For customization of a button as fallabck for compnents needed to be witin a button (ie a whole card is a button)
  }: ButtonProps ) => {
  
  return(

    <>
      { pageLink ? (

        <Link href={ pageLink }>
          <a><ButtonBase {...{ removeStyling, variant, size, title, icon, iconPlacement, children, notBold, circle }} /></a>
        </Link>

      ) : href ? (

        // Here we are adding support that should only be used as a link to an external site
        // This is because below, we follow Next JS page links that will take users to an internal link
        // An example of using the href tag is to take the user to a twitter profile that was called out in a blog post
        
        <a href={ href } target="_blank" rel="noreferrer">
          <ButtonBase {...{ removeStyling, variant, size, title, icon, iconPlacement, children, notBold, circle }} />
        </a>

      ) : onClick ? (

        // Here we add support for an onClick event, where the action stays on the current page
        // This should be used for anyting that adds to the user experience, without leaving the page
        // An example of this would be clicking on a button that opens up a dialog window with futher actions

        <button onClick={ onClick }>
          <ButtonBase {...{ removeStyling, variant, size, title, icon, type, iconPlacement, children, notBold, circle }} />
        </button>

        // Here we add support for Form submit buttons

      ) : type == "submit" ? (
        
        <button type="submit">
          <ButtonBase {...{ removeStyling, variant, size, title, icon, type, iconPlacement, children, notBold, circle }} />
        </button>

      ) : (

        // Here we support the fallback of a button, if no click event is needed for said button
        // This will provide a static button, where the hover and active states will be respected, as the other intances
        // And technically "clicking" on this button will observe the parent action, meaning this should only be used if there is a click event
        // An example of the this is using a button within a card to show the affordance that the clicking on the card has an action
        // In all instances, this button without a click event will be encompassed with a parent container that is a button

        <ButtonBase {...{ removeStyling, variant, size, title, icon, iconPlacement, children, notBold, circle }} />

      )}
    </>

  )
}
