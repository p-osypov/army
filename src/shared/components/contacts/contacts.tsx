import { Label, Title } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { SC } from './contacts.styles';
import {
  contactsSliderSettings,
  cooperationArray,
  initialValues,
} from './contacts.data';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';
import { vacanciesArray } from '@/shared/vacancies-card/vacancies.mock';

function Contacts() {
  const { t } = useTranslation('contacts');
  const { t: tV } = useTranslation('vacancies');

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .matches(
        /^[A-Za-zА-Яа-яЁёІіЇїЄєŁłĄąĆćĘęŃńÓóŚśŹźŻż\s]+$/,
        t('errors.invalidFullName'),
      )
      .required(t('errors.fullName')),
    email: Yup.string()
      .email(t('errors.invalidEmail'))
      .required(t('errors.email')),
    phone: Yup.string()
      .matches(/^\+380\d{9}$/, t('errors.phoneFormat'))
      .required(t('errors.phone')),
    vacancy: Yup.string().required(t('errors.vacancy')),
    message: Yup.string()
      .max(500, t('errors.messageTooLong'))
      .required(t('errors.message')),
  });

  const handleSubmit = (values: any) => {
    alert(t('successMessage'));
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
              {({ isSubmitting }) => (
                <Form>
                  <SC.Form>
                    <SC.InputWrapper>
                      <Field
                        name="fullName"
                        type="text"
                        placeholder={t('placeholders.fullName')}
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="form-error"
                      />
                    </SC.InputWrapper>

                    <SC.InputWrapper>
                      <Field
                        name="email"
                        type="email"
                        placeholder={t('placeholders.email')}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="form-error"
                      />
                    </SC.InputWrapper>

                    <SC.InputWrapper>
                      <Field
                        name="phone"
                        type="tel"
                        placeholder={t('placeholders.phone')}
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="form-error"
                      />
                    </SC.InputWrapper>

                    <SC.InputWrapper>
                      <Field as="select" name="vacancy">
                        <option value="">{t('placeholders.vacancy')}</option>
                        {vacanciesArray.map((vacancy) => (
                          <option key={vacancy.id} value={vacancy.id}>
                            {tV(vacancy.militaryRank)}
                          </option>
                        ))}
                      </Field>
                      <ErrorMessage
                        name="vacancy"
                        component="div"
                        className="form-error"
                      />
                    </SC.InputWrapper>

                    <SC.InputWrapper>
                      <Field
                        name="message"
                        as="textarea"
                        placeholder={t('placeholders.message')}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="form-error"
                      />
                    </SC.InputWrapper>
                  </SC.Form>
                  <SC.SendBtn type="submit" disabled={isSubmitting}>
                    {t('sendBtn')}
                  </SC.SendBtn>
                </Form>
              )}
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
