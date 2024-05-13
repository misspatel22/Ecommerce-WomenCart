import React, { Fragment, useContext, useState } from "react";
import {OrderContext} from "./index";
import { searchOrder } from "./Actions";

const SearchFilter = (props) => {

  const { dispatch } = useContext(OrderContext);
  const [search , setSearch] = useState("");
  const [productArray] = useState([]);

  const searchHandle = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    searchOrder(searchValue, dispatch);
  }

  return (
    <Fragment>
      <div className="rounded-full flex items-center justify-between overflow-hidden">
        <span style={{ background: "#303031" }} className="py-2 px-3">
          <svg
            className="rounded-l-full w-6 h-6 text-gray-100 cursor-pointer"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <input
          value={search}
          onChange={searchHandle}
          placeholder="Transaction id..."
          className="py-2 px-2 focus:outline-none rounded-r-full w-full"
          type="text"
        />
      </div>
      {productArray.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </Fragment>
  );
};

export default SearchFilter;
