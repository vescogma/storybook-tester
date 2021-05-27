import React from 'react'
import { Story, Meta } from '@storybook/react'
import { FavoriteBorder } from '@material-ui/icons'

import { Button, ButtonProps } from '../../src/components/Button'

export default {
  title: 'Elements/Button',
  component: Button
} as Meta

const Template: Story<ButtonProps> = args => <Button {...args} />

export const Base = Template.bind({})
Base.args = {
  label: 'Button'
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Button',
  loading: true
}

export const Icon = Template.bind({})
Icon.args = {
  label: 'Button',
  icon: <FavoriteBorder style={{ fontSize: 'inherit' }} />
}

export const Custom = Template.bind({})
Custom.args = {
  custom: <span className="text-brand-primary text-xl m-0">CUSTOM</span>
}
