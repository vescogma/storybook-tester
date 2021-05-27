import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '../../src/components/Button'

export default {
  title: 'Elements/Button/Variants/Tertiary',
  component: Button
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Variant = Template.bind({})
Variant.args = {
  variant: 'tertiary',
  label: 'Button'
}

export const Active = Template.bind({})
Active.args = {
  variant: 'tertiary',
  label: 'Button',
  active: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'tertiary',
  label: 'Button',
  disabled: true
}
