import React from 'react';
import Display from './Display';

export default {
  title: 'Calculator/Display',
  component: Display,
};

const Template = (args) => <Display {...args} />;

export const DefaultDisplay = Template.bind({});
DefaultDisplay.args = {
  value: '123456789',
  operation: '12+34+56+78+9',
};
