import Breadcrumb from '../components/Breadcrumb';
import DownlineTable from '../components/DownlineTable';


const Downline = () => {
  return (
    <>
      <Breadcrumb pageName="Downline Memebers" />

      <div className="flex flex-col gap-10">
        <DownlineTable />
        
      </div>
    </>
  );
};

export default Downline;
