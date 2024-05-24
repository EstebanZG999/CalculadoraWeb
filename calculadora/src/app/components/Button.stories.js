import React from 'react';
import Button from './Button';

export default {
  title: 'Calculator/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const NumberButton = Template.bind({});
NumberButton.args = {
  label: '5',
  onClick: () => alert('Number 5 clicked'),
};

export const OperatorButton = Template.bind({});
OperatorButton.args = {
  label: '+',
  onClick: () => alert('Operator + clicked'),
};

export const ClearButton = Template.bind({});
ClearButton.args = {
  label: 'C',
  onClick: () => alert('Clear clicked'),
};
