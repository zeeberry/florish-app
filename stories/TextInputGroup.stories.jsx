import React from 'react';

import TextInputGroup from '../components/shared/textInputGroup';

export default {
  title: 'Form/TextInputGroup',
  component: TextInputGroup
};

const Template = (args) => <TextInputGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'company',
  label: 'Company'
};

