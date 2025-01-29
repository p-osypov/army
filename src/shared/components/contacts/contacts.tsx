import { Label, Title } from '@/shared/assets/styles/layout';
import useTranslation from 'next-translate/useTranslation';
import { SC } from './contacts.styles';
import {
  contactsSliderSettings,
  cooperationArray,
  formArray,
} from './contacts.data';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

function Contacts() {
  const { t } = useTranslation('contacts');

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required(t('errors.fullName')),
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
              <Label>{t('contacts')}</Label>
              <Title.Span>{t('title')}</Title.Span>
              <SC.Subtitle>{t('text')}</SC.Subtitle>
            </SC.TitleBlock>
            <Formik
              initialValues={{
                fullName: '',
                email: '',
                phone: '+380',
                vacancy: '',
                message: '',
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <SC.Form>
                    {formArray.map((item) => (
                      <SC.Input key={item.id}>
                        {item.type === 'textarea' ? (
                          <Field
                            name={item.name}
                            as="textarea"
                            placeholder={item.placeholder}
                          />
                        ) : (
                          <Field
                            name={item.name}
                            type={item.type}
                            placeholder={item.placeholder}
                          />
                        )}
                        <ErrorMessage
                          name={item.name}
                          component="div"
                          className="form-error"
                        />
                      </SC.Input>
                    ))}
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
              <SC.FirstLogo src="/img/logo-103-OBR.png" />
              <SC.BrigadeName>{t('brigadeName')}</SC.BrigadeName>
              <SC.UnitName>{t('unitName')}</SC.UnitName>
            </SC.FirstLogoWrapper>
            <SC.SecondLogoWrapper>
              <SC.SecondLogo src="/img/logo-krila-do-pecla.png" />
            </SC.SecondLogoWrapper>
          </SC.LogosBlock>
        </SC.ContactsForm>
      </SC.Content>
    </SC.Section>
  );
}

export default Contacts;
