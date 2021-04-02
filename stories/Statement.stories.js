import React from 'react';

import Statement from '../components/shared/statement';

export default {
  title: 'Form/Statement',
  component: Statement
};

const Template = (args) => <Statement {...args} />;

export const Default = Template.bind({});
Default.args = {
  overline: 'A great question',
  title: 'This is a question',
  buttonText: 'Next'
};

