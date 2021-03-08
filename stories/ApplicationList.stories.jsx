import React from 'react';

import ApplicationList from '../components/dashboard/applicationList';

export default {
  title: 'Dashboard/ApplicationList',
  component: ApplicationList
};

const Template = (args) => <ApplicationList {...args} />;

export const Default = Template.bind({});
Default.args = {
  applications: ['Tall Poppy', 'Bitly']
};

