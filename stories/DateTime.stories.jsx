import React from 'react';

import DateTime from '../components/shared/dateTime';

export default {
  title: 'Form/DateTime',
  component: DateTime
};

const Template = (args) => <DateTime {...args} />;

export const Default = Template.bind({});
Default.args = {
  overline: 'A great question',
  title: 'This is a question',
  buttonText: 'Next',
  name: 'defaultDateTime'
};

