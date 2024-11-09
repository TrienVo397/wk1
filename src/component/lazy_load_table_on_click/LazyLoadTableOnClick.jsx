import React, {Suspense} from "react";
import useLazyLoadEventHandler from "./LazyLoadUserTableEventHandler";
import { getMaxPage } from "./child_component/LazyUserGridApiCall";

const LazyUserGrid = React.lazy(() => import("./child_component/LazyUserGrid"));

const LazyLoadTable = () => {
  const {page, userPerPage, loadMoreUsers } = useLazyLoadEventHandler();

  const maxPage = getMaxPage(userPerPage);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyUserGrid page={page} pageSize={userPerPage}></LazyUserGrid>
      </Suspense>

      {page < maxPage - 1 && (
        <button
          className="w-full mx-auto
                                bg-blue-500 hover:bg-blue-50
                                text-white font-bold
                                py-2 px-4 rounded"
          onClick={loadMoreUsers}
        >
          Load More
        </button>
      )}
    </div>
  );
};
export default LazyLoadTable;
