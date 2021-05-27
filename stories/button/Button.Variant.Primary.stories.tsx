import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '../../src/components/Button'

export default {
  title: 'Elements/Button/Variants/Primary',
  component: Button
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Variant = Template.bind({})
Variant.args = {
  variant: 'primary',
  label: 'Button'
}

export const Active = Template.bind({})
Active.args = {
  variant: 'primary',
  label: 'Button',
  active: true
}

export const Disabled = Template.bind({})
Disabled.args = {
  variant: 'primary',
  label: 'Button',
  disabled: true
}
