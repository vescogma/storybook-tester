import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '../../src/components/Button'

export default {
  title: 'Elements/Button/Variants/Secondary',
  component: Button
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Variant = Template.bind({})
Variant.args = {
  variant: 'secondary',
  label: 'Button'
}

export const Active = Template.bind({})
Active.args = {
  variant: 'secondary',
  label: 'Button',
  active: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'secondary',
  label: 'Button',
  disabled: true
}
