import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '../../src/components/Button'

export default {
  title: 'Elements/Button/Variants/Naked',
  component: Button
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Variant = Template.bind({})
Variant.args = {
  variant: 'naked',
  label: 'Button'
}

export const Active = Template.bind({})
Active.args = {
  variant: 'naked',
  label: 'Button',
  active: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'naked',
  label: 'Button',
  disabled: true
}
