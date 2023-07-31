const LedgerTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Transaction Date
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Particulars
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Debit
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Credit
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                <p className="text-black dark:text-white">Jan 13,2023</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-sm"></p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-sm">0.00</p>
              </td>
              <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                <p className="text-sm">0.00</p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Opening Balance
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                0.00
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                0.00
              </th>
            </tr>
            <tr>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Total
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                0.00
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                0.00
              </th>
            </tr>
            <tr>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                
              </th>
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Closing Balance
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                0.00
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                0.00
              </th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default LedgerTable;
