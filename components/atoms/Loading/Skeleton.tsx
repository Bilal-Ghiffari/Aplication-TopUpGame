import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function SkeletonLoadingCategory() {
  return (
    <>
      {Array(3)
        .fill(3)
        .map((_, index) => (
          <SkeletonTheme
            highlightColor="#e3e3e3"
            baseColor="#c1c1c1"
            key={index}
          >
            <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
              <div className="categories-card">
                <div className="d-flex align-items-center mb-24">
                  <Skeleton width={60} height={60} circle={true} />
                  <Skeleton
                    width={70}
                    className="mb-0 ms-12"
                    borderRadius="6px"
                  />
                </div>
                <div>
                  <p className="mb-1">
                    <Skeleton width="50%" borderRadius="6px" />
                  </p>
                  <p className="mb-0">
                    <Skeleton borderRadius="6px" />
                  </p>
                </div>
              </div>
            </div>
          </SkeletonTheme>
        ))}
    </>
  );
}

export function SkeletonTransactions() {
  return (
    <>
      {Array(2)
        .fill(2)
        .map((_, index) => (
          <SkeletonTheme
            highlightColor="#e3e3e3"
            baseColor="#c1c1c1"
            key={index}
          >
            <tr className="align-middle">
              <th scope="row">
                <Skeleton
                  width={80}
                  height={60}
                  borderRadius="1rem"
                  className="float-start me-3 mb-lg-0 mb-3"
                />
                <div className="game-title-header">
                  <Skeleton
                    className="game-title text-start"
                    borderRadius="6px"
                  />
                  <Skeleton
                    className="text-start px-3"
                    width={"20%"}
                    borderRadius="6px"
                  />
                </div>
              </th>
              <td>
                <Skeleton className="px-3" width={"50%"} borderRadius="6px" />
              </td>
              <td>
                <Skeleton
                  className="text-start px-3"
                  width={"50%"}
                  borderRadius="6px"
                />
              </td>
              <td>
                <div>
                  <Skeleton
                    className="text-start m-0 position-relative px-3"
                    width={"50%"}
                    borderRadius="6px"
                  />
                </div>
              </td>
            </tr>
          </SkeletonTheme>
        ))}
    </>
  );
}

export function SkeletonTransactionsPrice() {
  return (
    <SkeletonTheme highlightColor="#e3e3e3" baseColor="#c1c1c1">
      <Skeleton width={"30%"} height={20} borderRadius="1rem" />
      <Skeleton width={"20%"} height={20} borderRadius="1rem" />
    </SkeletonTheme>
  );
}

export function SkeletonTableTransaction() {
  return (
    <>
      {Array(3)
        .fill(3)
        .map((_, index) => (
          <SkeletonTheme
            highlightColor="#e3e3e3"
            baseColor="#c1c1c1"
            key={index}
          >
            <tr data-category="pending" className="align-middle">
              <th scope="row">
                <Skeleton
                  className="float-start me-3 mb-lg-0 mb-3"
                  width={80}
                  height={60}
                  borderRadius="1rem"
                />
                <div className="game-title-header">
                  <p className="game-title text-start m-0">
                    <Skeleton borderRadius="6px" />
                  </p>

                  <p className="text-start m-0">
                    <Skeleton width={"20%"} borderRadius="6px" />
                  </p>
                </div>
              </th>
              <td>
                <p className="m-0">
                  <Skeleton width={"60%"} borderRadius="6px" />
                </p>
              </td>
              <td>
                <p className="m-0">
                  <Skeleton width={"60%"} borderRadius="6px" />
                </p>
              </td>
              <td>
                <div>
                  <p className="text-start m-0 position-relative">
                    <Skeleton width={"60%"} borderRadius="6px" />
                  </p>
                </div>
              </td>
              <td>
                <Skeleton width={"60%"} height={35} borderRadius="1rem" />
              </td>
            </tr>
          </SkeletonTheme>
        ))}
    </>
  );
}

export function SkeletonFeaturedGame() {
  return (
    <>
      {Array(5)
        .fill(5)
        .map((_, index) => (
          <SkeletonTheme
            highlightColor="#1f1f3d"
            baseColor="#0c0c18"
            key={index}
          >
            <div className="position-relative">
              <div className="">
                <Skeleton width={205} height={270} borderRadius="2rem" />
              </div>
            </div>
          </SkeletonTheme>
        ))}
    </>
  );
}
