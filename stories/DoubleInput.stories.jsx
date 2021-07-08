import React from 'react';

import DoubleInput from '../components/shared/doubleInput';

export default {
  title: 'Onboarding/DoubleTextInput',
  component: DoubleInput
};

const Template = (args) => <DoubleInput {...args} />;

export const Application = Template.bind({});
Application.args = {
  overline: ['Sweet, your account has been created successfully.','Now, let’s get some information about your upcoming interview.'],
  title: 'What role and company are you applying for?',
  buttonText: 'Next',
  inputs: [{
      label: 'Company',
      name: 'company'
    },
    {
      label: 'Role',
      name: 'role'
    }]
};

