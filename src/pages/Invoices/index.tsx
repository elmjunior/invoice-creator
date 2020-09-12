import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { getInvoices } from '../../services/db';
import { Link } from 'react-router-dom';

function formatDate(date: string) {
  const formatted = date.split('T')[0].split('-');
  return `${formatted[1]}/${formatted[2]}/${formatted[0]}`;
}
const calcTotal = ({ price, quantity }: Invoice) =>
  (price * quantity).toFixed();

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

          <th>Details</th>
          <th>Amount</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoiceItem, key) => (
          <tr key={key}>
            <th scope="row">{invoiceItem.number}</th>

            <td>
              <Link to={`/invoices/${invoiceItem.number}`}>
                {invoiceItem.title}
              </Link>
            </td>
            <td>{calcTotal(invoiceItem)}</td>
            <td>{formatDate(invoiceItem.created_at)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Invoices;
