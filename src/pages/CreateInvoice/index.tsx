import React, { useEffect, useState } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { Form, Col, Row } from 'reactstrap';
import SimpleInput from '../../components/organisms/SimpleInput';
import ButtonSubmit from '../../components/organisms/ButtonSubmit';
import { getInvoices, saveInvoice, getSettings } from '../../services/db';
import { useHistory, Link } from 'react-router-dom';

const CreateInvoice: React.FC = () => {
  const [complete, setComplete] = useState(false);
  const methods = useForm();
  const history = useHistory();
  const onSubmit: SubmitHandler<Invoice> = async (values) => {
    // tslint:disable-next-line: variable-name
    const { number } = await saveInvoice(values);
    history.push(`/invoices/${number}`);
  };

  useEffect(() => {
    getSettings().then((settings) => {
      if (settings?.company) {
        setComplete(true);
        methods.register({
          name: 'number',
        });
        methods.register({
          name: 'created_at',
        });
        getInvoices().then((invoicesData) => {
          methods.setValue(
            'number',
            invoicesData?.length ? invoicesData.length + 1 : 1,
          );
          const date = new Date();

          methods.setValue('created_at', date.toISOString());
        });
      }
    });
  }, []);

  if (!complete) {
    return (
      <div>
        Please, fill your settings <br />
        <br />
        <Link to="/settings">Click here</Link>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <Row>
          <Col {...{ md: '12', lg: '12' }} className="mb-4">
            <SimpleInput required field="title" label="title" />
          </Col>
          <Col {...{ md: '12', lg: '12' }} className="mb-4">
            <SimpleInput required field="description" label="description" />
          </Col>
          <Col {...{ md: '6', lg: '6' }} className="mb-4">
            <SimpleInput
              required
              field="quantity"
              label="quantity"
              type="number"
            />
          </Col>
          <Col {...{ md: '6', lg: '6' }} className="mb-4">
            <SimpleInput required field="price" label="price" type="number" />
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

export default CreateInvoice;
