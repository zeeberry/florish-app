import React from 'react';

import ApplicationListItem from '../components/dashboard/applicationListItem';

export default {
  title: 'Dashboard/ApplicationListItem',
  component: ApplicationListItem,
};

const Template = (args) => <ApplicationListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Bitly',
  selected: false,
};

export const Selected = Template.bind({});
Selected.args = {
  label: 'Bitly',
  selected: true,
};
