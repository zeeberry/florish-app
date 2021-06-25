import React from 'react';

import ShortText from '../components/shared/shortText';

export default {
  title: 'Form/ShortText',
  component: ShortText
};

const Template = (args) => <ShortText {...args} />;

export const Name = Template.bind({});
Name.args = {
  overline: `Hello there 👋`,
  title: `What's your name?`,
  buttonText: 'Next',
  name: 'name',
  label: 'Name'
};

