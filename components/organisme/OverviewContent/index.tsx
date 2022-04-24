import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { toast } from "react-toastify";
import {
  HistoryTransactionTypes,
  TopUpCategoryTypes,
} from "../../../services/data-types";
import { getMemberOverview } from "../../../services/member";
import SideBar from "../SideBar";
import Category from "./Category";
import TableRow from "./TableRow";
import {
  SkeletonLoadingCategory,
  SkeletonTransactions,
} from "../../atoms/Loading/Skeleton";

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [history, setHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getMemberOverviewApi = useCallback(async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      setCount(response.data.count);
      setHistory(response.data.history);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!false);
    }, 2000);
    getMemberOverviewApi();
  }, []);

  const IMG = process.env.NEXT_PUBLIC_IMG;
  return (
    <>
      <Head>
        <title>overview | paygames</title>
        <meta
          name="description"
          content="menyediakan cara untuk membantu player juara dengan TopUp dikami dengan mudah dan cepat"
        />
        <meta property="og:title" content="paygames" />
        <meta
          property="og:description"
          content="menyediakan cara untuk membantu player juara dengan TopUp dikami dengan mudah dan cepat"
        />
        <link rel="icon" href="/icon/logo.png" />
      </Head>
      <SideBar activeMenu="overview" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                {isLoading === false ? (
                  <SkeletonLoadingCategory />
                ) : (
                  count.map((item: TopUpCategoryTypes) => (
                    <Category
                      key={item._id}
                      icon="ic-desktop"
                      nominal={item.value}
                    >
                      Game
                      <br /> {item.name}
                    </Category>
                  ))
                )}
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
                    <th className="text-start" scope="col">
                      Game
                    </th>
                    <th scope="col" className="px-3">
                      Item
                    </th>
                    <th scope="col" className="px-3">
                      Price
                    </th>
                    <th scope="col" className="px-3">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading === false ? (
                    <SkeletonTransactions />
                  ) : (
                    history.map((item: HistoryTransactionTypes) => (
                      <TableRow
                        key={item._id}
                        img={`${IMG}/${item.historyVoucherTopup.thumbnail}`}
                        title={item.historyVoucherTopup.gameName}
                        category={item.category.name}
                        item={`${item.historyVoucherTopup.coinQuantity} ${item.historyVoucherTopup.coinName}`}
                        price={item.value}
                        status={item.status}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
