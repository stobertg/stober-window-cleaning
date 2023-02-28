import React from 'react'
import { styled } from '@theme'
import { Icon } from '@components'

// For the master container of the button
// This is needed for custom buttons, where a button needs to preserve alignment and other features

const ButtonWrap = styled('div', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  cursor: 'pointer',
  transition: '$s1',
  fontSize: '1rem',

  strong: { fontFamily: '$sansSerifBold' },

  // For the interaction when a button is clicked - provides a scale down until released
  // This is universal for all buttons to give the user feedback that they clicked the button

  '&:active': {
    transform: 'scale( 0.9 )'
  },

  variants: {
    removeStyling: {
      skeleton: {
        width: '100%',
        justifyContent: 'initial',
        alignitems: 'initial',
        '> div': { width: '100%' }
      }
    }
  }
})

// For the container of the button itself
// This extra container perhaps seems like it is not needed, but preserves the interactions where the button scale on click
// If the parent container wasn't there, then the hit state would observe the scale, potentially creating a bug

const Button = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  padding: '16px 20px',
  borderRadius: '$r1',
  color: '$textLink',
  transition: '$s1',
  userSelect: 'none',
  whiteSpace: 'nowrap',

  // For the default hover effect for the button
  // This is the hover effect when the variant is not present and is a stand-alone link
  // Meaning it doesn't look link a tradtional button

  '&:hover': { 
    background: '$defaultButtonHover'
  },

  // Here we auto mate the spacing for the contents within the button base
  // For example, this adds spacing between the icon on the left and the title on the right'
  // This also works in reverse where the title is on the left and an icon is on the right

  '> *:not(:last-child)': {
    marginRight: 8
  },

  // For the variants of the button
  // These can be three different types - either primary, outlined or only an icon

  variants: {
    circle: {
      l0: { maxWidth: 40, width: 40, maxHeight: 40, height: 40, padding: '0 !important', borderRadius: '50%', svg: { width: '90%' }},
      l1: { maxWidth: 44, width: 44, maxHeight: 44, height: 44, padding: '0 !important', borderRadius: '50%', svg: { width: '90%' } },
      l2: { maxWidth: 48, width: 48, maxHeight: 48, height: 48, padding: '0 !important', borderRadius: '50%', svg: { width: '90%' } }
    },

    variant: {

      skeleton: {
        padding: 0,
        justifyContent: 'inital',
        alignItems: 'initial',
        color: '$textPrimary'
      },

      // For the primary button of the container that is the main button used throughout the site
      // This contains the solid background color

      primary: {
        height: 60,
        minWidth: 200,
        background: '$buttonPrimary',
        color: '$white50',
      
        // For the hover effect of the primary button
        // This makes the button pure black and places a dropshadow

        '&:hover': {
          background: '$buttonHover',
        }
      },

      secondary: {
        height: 48,
        minWidth: 100,
        background: '$white50',
        color: '$buttonPrimary',
        border: '1px solid $buttonPrimary',

        '&:hover': {
          background: '$buttonSecondaryHover'
        }
      },

      danger: {
        height: 48,
        minWidth: 100,
        background: '$buttonDanger',
        color: '$white50',

        '&:hover': {
          background: '$buttonDangerHover'
        }
      },

      success: {
        
      },

      disabled: {
        height: 48,
        minWidth: 100,
        background: '$buttonDisabled',
        color: '$textDisabled',
        pointerEvents: 'none'
      },

      avatar: {
        padding: '8px 12px 8px 8px',
        color: 'inherit'
      },

      iconOnly: {
        height: 48,
        minHeight: 48,
        padding: 0,
        width: 48,
        borderRadius: '50%'
      },

      frosted: {
        backdropFilter: 'blur( 10px )',
        overflow: 'hidden',
        color: '$textPrimary',
        span: { zIndex: 1 },

        '&:before': {
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: '$white50',
          opacity: 0.6,
          zIndex: 0
        }
      }
    },

    // For the placement of the icons within the button to be on the left or right of the text
    // Most icons will be on the left of the text, but icons such as arrows for a button to act as a dropdown will be on the right

    iconPlacement: {
      right: { 
        flexDirection: 'row-reverse',
        '> *:not(:last-child)': { margin: '0 0 0 8px' },
        '*': { paddingRight: 0 }
      }
    },

    // For the size changes for the button
    // At the moment, the component only supports a small version of the button

    size: {
      l0: { 
        fontSize: '$s1', 
        height: '44px !important',
        width: '44px !important',
        maxWidth: '44px !important',
        padding: '0 !important',
        minWidth: 'auto !important',
      },
      
      l1: { 
        fontSize: '$s1', 
        height: '44px !important',
        minWidth: 'auto !important',
        padding: '0 16px'
      }
    }
  }
})

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
  removeStyling?: boolean
}

// ---------- This is the end of declarations ---------- //

export const ButtonBase = ({ 
    circle,
    variant, // Optional - For the visual display of the button
    title, // Optional - For the title of the button
    icon, // Optional - for the icon within the button
    iconPlacement, // Optional - for the placement of the icon to be on the right or left side of the button
    size, // Optional - to support the smaller version of the button
    children, // Optional - if a custom button is needed
    notBold,
    type,
    removeStyling
  }: ButtonProps ) => {

  return(

    <ButtonWrap removeStyling={ removeStyling ? 'skeleton' : undefined } style={{ pointerEvents: variant == 'disabled' ? 'none' : 'auto' }}>
      { title || icon ? (
        <Button {...{ variant, iconPlacement, size, type, circle }}>
          { icon ? ( <Icon {...{ icon }} size="l1" /> ) : null }
          { title ? ( 
            <>
              { notBold 
                ? ( <span>{ title }</span> ) 
                : ( <span><strong>{ title }</strong></span> ) 
              } 
            </>
          ) : null }
        </Button>

      ) : ( <Button {...{ variant, size }}>{ children }</Button> )}
    </ButtonWrap>

  )
}