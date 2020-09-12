import React, { useMemo } from 'react';
import InternalRoutes from '../../components/organisms/InternalRoutes';
import { Row, Col, Container } from 'reactstrap';
import Sidebar from '../../components/organisms/Sidebar';
import Invoices from '../Invoices';
import { useLocation } from 'react-router-dom';

interface AuthProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  routes: any;
}

const Home: React.FC<AuthProps> = ({ routes }) => {
  const location = useLocation();
  const isInternalRoute = useMemo(() => {
    return !!location?.pathname?.split('/')[1];
  }, [location]);
  return (
    <Container>
      <Row>
        <Col {...{ md: '2', lg: 2 }} className="p-3">
          <Sidebar />
        </Col>
        <Col className="p-3">
          {!isInternalRoute && <Invoices />}
          <InternalRoutes routes={routes} />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
