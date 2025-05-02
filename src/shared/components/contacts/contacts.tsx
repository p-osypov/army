import { Label, Title } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { SC } from './contacts.styles';
import {
  contactsSliderSettings,
  cooperationArray,
  initialValues,
} from './contacts.data';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { vacanciesArray } from '@/shared/vacancies-card/vacancies.mock';
import Input, { SelectOptions } from '@/shared/components/input/input';
import { useMemo, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

function Contacts() {
  const { t } = useTranslation('contacts');
  const { t: tV } = useTranslation('vacancies');
  const [error, setError] = useState<string>('');
  const router = useRouter();
  const selectedOptions: SelectOptions = useMemo(() => {
    const options = vacanciesArray.map((v) => ({
      id: v.id,
      value: tV(v.militaryRank),
      text: tV(v.militaryRank),
    }));

    return [
      {
        id: 'placeholder',
        value: '',
        text: t('placeholders.vacancy'),
        hidden: true,
      },
      ...options,
    ];
  }, [t, tV]);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(
        /^[A-Za-zА-Яа-яЁёІіЇїЄєŁłĄąĆćĘęŃńÓóŚśŹźŻż\s]+$/,
        t('errors.invalidFullName'),
      )
      .required(t('errors.fullName')),
    email: Yup.string().email(t('errors.invalidEmail')),
    phone: Yup.string()
      .matches(/^\+380\d{9}$/, t('errors.phoneFormat'))
      .required(t('errors.phone')),
    vacancy: Yup.string()
      .notOneOf([''], t('errors.vacancy'))
      .required(t('errors.vacancy')),
    message: Yup.string().max(500, t('errors.messageTooLong')),
  });

  const handleSubmit = async (values: any) => {
    try {
      await axios.post('/api/send-email', values);
      void router.push('/vacancies/applied');
    } catch (e: any) {
      console.warn(e);
      setError(e.message);
    }
  };

  return (
    <SC.Section>
      <SC.Content>
        <SC.RightCloudImage src="/img/cloud.png" />
        <SC.Slider {...contactsSliderSettings}>
          {cooperationArray.map((item) => (
            <SC.Cooperation key={item.id}>
              <SC.CooperationImage src={item.src} />
            </SC.Cooperation>
          ))}
        </SC.Slider>

        <SC.ContactsForm>
          <SC.FormBlock>
            <SC.TitleBlock>
              <Label>{t('label')}</Label>
              <Title.Span>{t('title')}</Title.Span>
              <SC.Subtitle>{t('text')}</SC.Subtitle>
            </SC.TitleBlock>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => {
                return (
                  <Form>
                    <SC.Form>
                      <Input
                        name="fullName"
                        type="text"
                        placeholder={t('placeholders.fullName')}
                        required
                      />
                      <Input
                        name="email"
                        type="email"
                        placeholder={t('placeholders.email')}
                      />

                      <Input
                        name="phone"
                        type="tel"
                        required
                        placeholder={'+38 (012) 345 6789'}
                      />

                      <Input
                        name="vacancy"
                        type="select"
                        placeholder={t('placeholders.vacancy')}
                        selectOptions={selectedOptions}
                        required
                      />

                      <Input
                        name="message"
                        type="textarea"
                        placeholder={t('placeholders.message')}
                      />
                    </SC.Form>

                    <SC.SendBtn type="submit" disabled={isSubmitting}>
                      {t(isSubmitting ? 'isSubmitting' : 'sendBtn')}
                    </SC.SendBtn>
                    {error && <SC.ErrorText>{error}</SC.ErrorText>}
                  </Form>
                );
              }}
            </Formik>
          </SC.FormBlock>
          <SC.LogosBlock>
            <SC.FirstLogoWrapper>
              <SC.Logo src="/img/logo-103-OBR.png" />
              <SC.BrigadeName>{t('brigadeName')}</SC.BrigadeName>
              <SC.UnitName>{t('unitName')}</SC.UnitName>
            </SC.FirstLogoWrapper>
            <SC.SecondLogoWrapper>
              <SC.Logo src="/img/logo-krila-do-pecla.png" />
            </SC.SecondLogoWrapper>
          </SC.LogosBlock>
        </SC.ContactsForm>
      </SC.Content>
    </SC.Section>
  );
}

export default Contacts;
