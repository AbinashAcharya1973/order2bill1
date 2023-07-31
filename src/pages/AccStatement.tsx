import Breadcrumb from '../components/Breadcrumb';
import LedgerTable from '../components/LedgerTable';

const AccStatement = () => {
  return (
    <>
      <Breadcrumb pageName="Account Statement" />

      <div className="flex flex-col gap-10">
        
        <LedgerTable />
      </div>
    </>
  );
};

export default AccStatement;
