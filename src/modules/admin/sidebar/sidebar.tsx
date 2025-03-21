import React from 'react';
import { SC } from '@/modules/admin/sidebar/sidebar.styles';

function Sidebar() {
  return (
    <SC.Container>
      <SC.Route>Вакансії</SC.Route>
      <SC.Route>Користувачі</SC.Route>
      <SC.Route>Донати</SC.Route>
      <SC.Route>Вийти</SC.Route>
    </SC.Container>
  );
}

export default Sidebar;
