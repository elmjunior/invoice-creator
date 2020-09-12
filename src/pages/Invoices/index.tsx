import React from 'react';
import { Table } from 'reactstrap';
// import { Container } from './styles';

const Invoices: React.FC = () => {
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
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Invoices;
