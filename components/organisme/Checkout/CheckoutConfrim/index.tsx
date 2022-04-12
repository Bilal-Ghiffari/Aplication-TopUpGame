import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { setCheckout } from "../../../../services/player";

interface CheckoutConfirmationTypes {
  bankAccountName: string;
}

export default function CheckoutConfirmation() {
  const [checkBox, setCheckBox] = useState(false);
  const router = useRouter();
  const [
    dataTopUpCheckout,
    setDataTopUpCheckout,
  ] = useState<CheckoutConfirmationTypes>();

  useEffect(() => {
    const dataTopUpLocal = localStorage.getItem("top-up");
    // tanda seru dibalekang karakter memastikan dia itu mempunyai data
    const dataTopUpCheckout = JSON.parse(dataTopUpLocal!);

    setDataTopUpCheckout(dataTopUpCheckout);
  }, []);

  function handleCanclePayment() {
    localStorage.removeItem("top-up");
    localStorage.removeItem("data-item");
    router.push("/");
  }

  const onSubmit = async () => {
    const dataItemLocal = localStorage.getItem("data-item");
    const dataTopupLocal = localStorage.getItem("top-up");

    const dataItem = JSON.parse(dataItemLocal!);
    const dataTopUp = JSON.parse(dataTopupLocal!);
    const data = {
      voucher: dataItem._id,
      nominal: dataTopUp.nominalItem._id,
      payment: dataTopUp.paymentItem.payment._id,
      bank: dataTopUp.paymentItem.bank._id,
      name: dataTopUp.bankAccountName,
      accountUser: dataTopUp.verifyID,
    };

    if (!checkBox) {
      // ketika checkbox brlum di click jangan kirim api
      toast.error("pastikan anda telah melakukan pembayaran");
    } else {
      // ketika checkbox sudah di click kirim api beserta response nya
      const response = await setCheckout(data);
      if (response.error) {
        toast.error(response.message);
      } else {
        toast.success("Berhasil Checkout");
        localStorage.removeItem("top-up");
        localStorage.removeItem("data-item");
        router.push("/complete-checkout");
      }
    }
  };
  return (
    <>
      <label className="checkbox-label text-lg color-palette-1">
        I have transferred the money
        <input
          type="checkbox"
          checked={checkBox}
          onChange={() => setCheckBox(!checkBox)}
        />
        <span className="checkmark"></span>
      </label>

      <div className="d-md-block d-flex flex-column w-100 pt-50">
        <button
          className="btn btn-confirm-payment rounded-pill fw-medium text-white border-0 text-lg"
          type="button"
          onClick={onSubmit}
        >
          Confirm Payment
        </button>
      </div>

      <a
        type="button"
        className="modal-button fw-semibold fs-6"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Cancle payment
      </a>

      <div
        className="modal fade"
        id="exampleModal"
        // tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Haii {dataTopUpCheckout?.bankAccountName}
              </h5>
            </div>
            <div className="modal-body">
              Apakah anda yakin ingin membatalkan pembayaran
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                batal
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={handleCanclePayment}
              >
                continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
