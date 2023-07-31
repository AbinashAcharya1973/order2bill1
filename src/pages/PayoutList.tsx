import Breadcrumb from '../components/Breadcrumb';
import PayoutSummaryTable from '../components/PayoutSummaryTable';


const PayoutList = () => {
  return (
    <>
      <Breadcrumb pageName="Payout List" />

      <div className="flex flex-col gap-10">                
        <PayoutSummaryTable />
      </div>
    </>
  );
};

export default PayoutList;
