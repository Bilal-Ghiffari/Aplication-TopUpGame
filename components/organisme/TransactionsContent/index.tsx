import React, { useCallback, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { toast } from "react-toastify";
import { HistoryTransactionTypes } from "../../../services/data-types";
import { getMemberTransactions } from "../../../services/member";
import Loading from "../../atoms/Loading/Loading";
import {
  SkeletonTableTransaction,
  SkeletonTransactionsPrice,
} from "../../atoms/Loading/Skeleton";
import ButtonTab from "./ButtonTab";
import TableRow from "./TableRow";

export default function TransactionsContent() {
  const [total, setTotal] = useState(0);
  const [historyTransactions, setHistoryTransactions] = useState([]);
  const [tab, setTab] = useState("all");
  const [isLoading, setIsLoading] = useState(false);

  const TransactionContentApi = useCallback(async (value) => {
    const response = await getMemberTransactions(value);
    if (response.error) {
      toast.error(response.message);
    } else {
      setTotal(response.data.total);
      setHistoryTransactions(response.data.history);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!false);
    }, 1500);
    TransactionContentApi("all");
  }, []);

  // filtering untuk status
  const onTabClick = (value: any) => {
    setTab(value);
    TransactionContentApi(value);
  };

  const IMG = process.env.NEXT_PUBLIC_IMG;

  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          My Transactions
        </h2>
        <div className="mb-30">
          <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
          {isLoading === false ? (
            <SkeletonTransactionsPrice />
          ) : (
            <h3 className="text-5xl fw-medium color-palette-1">
              <NumberFormat
                value={total}
                prefix="Rp. "
                decimalSeparator=","
                thousandSeparator="."
                displayType="text"
              />
            </h3>
          )}
        </div>
        <div className="row mt-30 mb-20">
          <div className="col-lg-12 col-12 main-content">
            <div id="list_status_title">
              <ButtonTab
                onClickTab={() => onTabClick("all")}
                title="All Trx"
                active={tab === "all"}
              />
              <ButtonTab
                onClickTab={() => onTabClick("success")}
                title="Success"
                active={tab === "success"}
              />
              <ButtonTab
                onClickTab={() => onTabClick("pending")}
                title="Pending"
                active={tab === "pending"}
              />
              <ButtonTab
                onClickTab={() => onTabClick("failed")}
                title="Failed"
                active={tab === "failed"}
              />
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody id="list_status_item">
                {isLoading === false ? (
                  <SkeletonTableTransaction />
                ) : (
                  historyTransactions.map(
                    (transaction: HistoryTransactionTypes) => (
                      <TableRow
                        id={transaction._id}
                        key={transaction._id}
                        img={`${IMG}/${transaction.historyVoucherTopup.thumbnail}`}
                        title={transaction.historyVoucherTopup.gameName}
                        category={transaction.category.name}
                        item={`${transaction.historyVoucherTopup.coinQuantity} ${transaction.historyVoucherTopup.coinName}`}
                        price={transaction.value}
                        status={transaction.status}
                      />
                    )
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
