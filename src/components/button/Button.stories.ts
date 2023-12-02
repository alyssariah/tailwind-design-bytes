import { Button } from './Button';
import { FaTrash, FaPaperPlane } from 'react-icons/fa';
import { Meta, StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Elevation: Story = {
  args: {
    label: 'Button',
    boxShadow: 2,
  },
};

export const Outlined: Story = {
  args: {
    label: 'Button',
    configuration: 'outlined',
  },
};

export const Round: Story = {
  args: {
    label: 'Button',
    shape: 'round',
  },
};

export const StartIcon: Story = {
  args: {
    StartIcon: FaTrash,
    label: 'Delete',
  },
};

export const EndIcon: Story = {
  args: {
    EndIcon: FaPaperPlane,
    label: 'Send',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    label: 'Button',
    size: 'medium',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
};
