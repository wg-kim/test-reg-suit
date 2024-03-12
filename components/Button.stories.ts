
import type { Meta, StoryObj } from '@storybook/vue3'
import Button from './Button.vue'

type Story = StoryObj<typeof Button>

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text'
      }
    },
    height: {
      control: {
        type: 'number'
      }
    },
    elevation: {
      control: {
        type: 'number'
      }
    },
    variant: {
      control: {
        type: 'select'
      },
      options: ['plain', 'outlined', 'tonal', 'text', undefined]
    },
    color: {
      control: {
        type: 'select'
      },
      options: ['primary', 'success', 'error', 'info']
    },
    href: {
      control: {
        type: 'text'
      }
    },
    onClick: { action: 'click' }
  },
  render: args => ({
    components: { Button },
    setup () {
      return { args }
    },
    template: '<Button v-bind="args" />'
  })
}

export const Default: Story = {
  args: {
    label: 'Button',
    variant: undefined,
    color: 'primary',
    flat: false,
    rounded: false,
    disabled: false,
    loading: true,
    exact: false,
    elevation: 1000,
    height: 1000
  }
}

export default meta

