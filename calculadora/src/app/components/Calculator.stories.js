import React from 'react';
import Calculadora from './Calculadora';
import './Calculator.module.css'; // Importa el módulo CSS si estás usando CSS modules

export default {
  title: 'Calculator/Calculadora',
  component: Calculadora,
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '600px', margin: 'auto' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Calculadora {...args} />;

export const DefaultCalculadora = Template.bind({});
DefaultCalculadora.args = {};
