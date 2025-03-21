import React from 'react';
import { SC } from '@/modules/admin/sidebar/sidebar.styles';

function Sidebar() {
  return (
    <SC.Container>
      <SC.Route>Vacancies</SC.Route>
      <SC.Route>Users</SC.Route>
      <SC.Route>Donations</SC.Route>
    </SC.Container>
  );
}

export default Sidebar;
