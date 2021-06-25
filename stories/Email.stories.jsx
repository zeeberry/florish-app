import React from 'react';

import Email from '../components/shared/email';

export default {
  title: 'Form/Email',
  component: Email
};

const Template = (args) => <Email {...args} />;

export const Default = Template.bind({});
Default.args = {
  overline: [`Nice to meet you, Sally`, `Let's create an account for you, first.`],
  title: 'This is a question',
  label: 'Email',
  title: `What's your email?`,
  buttonText: 'Create Account',
  name: 'email'
};

