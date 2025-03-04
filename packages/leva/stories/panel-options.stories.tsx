import React from 'react'
import Reset from './components/decorator-reset'
import { Story, Meta } from '@storybook/react'

import { Leva, folder, useControls } from '../src'

export default {
  title: 'Misc/Panel options',
  decorators: [Reset],
} as Meta

const Template: Story<any> = (args) => {
  const values = useControls({
    number: 3,
    color: 'lightblue',
    folder: folder({
      select: { value: 'something', options: ['else'] },
    }),
  })

  return (
    <div>
      <Leva {...args} />
      <pre>{JSON.stringify(values, null, '  ')}</pre>
    </div>
  )
}

export const OneLineLabels = Template.bind({})
OneLineLabels.args = { oneLineLabels: true }

export const HideTitleBar = Template.bind({})
HideTitleBar.args = { hideTitleBar: true }

export const NotDetached = Template.bind({})
NotDetached.args = { detached: false }
