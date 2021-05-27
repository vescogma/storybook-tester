import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '../../src/components/Button'

export default {
  title: 'Elements/Button/Sizes',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Large = Template.bind({})
Large.args = {
  size: 'lg',
  label: 'Button'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'md',
  label: 'Button'
}

export const Small = Template.bind({})
Small.args = {
  size: 'sm',
  label: 'Button'
}
