import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { getInvoices } from '../../services/db';

const Invoices: React.FC = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  useEffect(() => {
    getInvoices().then((invoicesData) => {
      if (invoicesData) {
        setInvoices(invoicesData);
      }
    });
  }, []);
  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Details</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoiceItem, key) => (
          <tr key={key}>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Invoices;
