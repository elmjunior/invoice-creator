import React, { useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Form, Col, Row } from 'reactstrap';
import SimpleInput from '../../components/organisms/SimpleInput';
import ButtonSubmit from '../../components/organisms/ButtonSubmit';
import { asyncLocalStorage, LOCAL_STORAGE_TYPES } from '../../services/db';

const layoutProps = {
  md: '4',
  sm: '12',
  xs: '4',
};

const Settings: React.FC = () => {
  const methods = useForm();

  const onSubmit: SubmitHandler<SettingsInput> = (values) => {
    asyncLocalStorage.setItem(
      LOCAL_STORAGE_TYPES.settings,
      JSON.stringify(values),
    );
  };
  useEffect(() => {
    asyncLocalStorage
      .getItem(LOCAL_STORAGE_TYPES.settings)
      .then((companyString) => {
        if (companyString) {
          const company = JSON.parse(companyString);
          for (const [idx, value] of Object.entries(company)) {
            methods.setValue(idx, value);
          }
        }
      });
  }, [methods]);
  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Row>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="company" label="company" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="name" label="your name" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="cpf" label="CPF" type="number" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="street" label="street" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="number" label="number" type="number" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="complement" label="complement" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="city" label="city" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="state" label="state" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="country" label="country" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="zipcode" label="zipcode" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="phone" label="phone" />
          </Col>
          <Col {...layoutProps} className="mb-4">
            <SimpleInput required field="email" label="email" type="email" />
          </Col>
        </Row>
        <Row>
          <Col>
            <ButtonSubmit>Save</ButtonSubmit>
          </Col>
        </Row>
      </Form>
    </FormProvider>
  );
};

export default Settings;
