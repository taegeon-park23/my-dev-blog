// src/components/atoms/Button/Button.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';
import { ButtonProps } from './Button.types';
import { SearchIcon } from '@/assets/icons/SearchIcon';

export default {
  title: 'Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  className: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Button',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: 'Button',
  loading: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Button',
  icon: <SearchIcon />,
};

export const WithIconAndLoading = Template.bind({});
WithIconAndLoading.args = {
  children: 'Button',
  icon: 'user',
  loading: true,
};

export const WithIconAndLoadingAndDisabled = Template.bind({});
WithIconAndLoadingAndDisabled.args = {
  children: 'Button',
  icon: 'user',
  loading: true,
  disabled: true,
};

export const WithIconAndDisabled = Template.bind({});
WithIconAndDisabled.args = {
  children: 'Button',
  icon: 'user',
  disabled: true,
};

export const WithIconAndLoadingAndDisabledAndClassName = Template.bind({});
WithIconAndLoadingAndDisabledAndClassName.args = {
  children: 'Button',
  icon: 'user',
  loading: true,
  disabled: true,
  className: 'bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
};

export const WithIconAndDisabledAndClassName = Template.bind({});
