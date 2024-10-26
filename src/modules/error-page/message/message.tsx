import React from 'react';
import { SC } from '@/modules/error-page/message/message.styles';
import useTranslation from 'next-translate/useTranslation';

function Message() {
  const { t } = useTranslation('common');
  return (
    <SC.Container>
      <SC.MainText>404</SC.MainText>
      <SC.Title>Not Found</SC.Title>
      <SC.LinkButton href="/">{t('returnToHomePage')}</SC.LinkButton>
    </SC.Container>
  );
}

export default Message;
