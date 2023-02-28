import React from 'react'
import { Heading } from './Heading'

const story = {
  title: 'typography/Heading',
  component: Heading,
  parameters: { layout: 'centered' },
  argTypes: {},
}

export default story

export const l0 = () => ( <Heading size="l1" bold title="This is the title" /> )
export const l1 = () => ( <Heading size="l1" bold title="This is the title" /> )
export const l2 = () => ( <Heading size="l2" bold title="This is the title" /> )
export const l3 = () => ( <Heading size="l3" bold title="This is the title" /> )
export const l4 = () => ( <Heading size="l4" bold title="This is the title" /> )
export const l5 = () => ( <Heading size="l5" bold title="This is the title" /> )
export const l6 = () => ( <Heading size="l6" bold title="This is the title" /> )
export const l7 = () => ( <Heading size="l7" bold title="This is the title" /> )
