import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import jwtEncode from "jwt-encode";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import {
  NominalsTypes,
  PaymentTypes,
  BankTypes,
} from "../../../services/data-types";
import NominalItem from "./NominalItem";
import PaymentItem from "./PaymentItem";

interface TopUpFormProps {
  nominals: NominalsTypes[];
  payments: PaymentTypes[];
}

export default function TopUpForm({ nominals, payments }: TopUpFormProps) {
  const [verifyID, setVerifyID] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [nominalItem, setNominalItem] = useState({});
  const [paymentItem, setPaymentItem] = useState({});
  const router = useRouter();

  const onNominalItemChange = (data: NominalsTypes) => {
    setNominalItem(data);
  };

  const onPaymentsItemChange = (payment: PaymentTypes, bank: BankTypes) => {
    const data = {
      payment,
      bank,
    };
    setPaymentItem(data);
  };

  useEffect(() => {
    const dataFromLocal = localStorage.getItem("data-item");
    const EncodeItem = jwtEncode(dataFromLocal, "secret");
    const itemBase64 = btoa(EncodeItem);

    Cookies.set("checkItem", itemBase64);
  }, []);

  const payment = Object.keys(paymentItem);
  const nominal = Object.keys(nominalItem);

  const onSubmit = () => {
    if (
      payment.length === 0 ||
      nominal.length === 0 ||
      verifyID === "" ||
      bankAccountName === ""
    ) {
      toast.error("silahkan isi semua data!!!");
    } else {
      const dataTopUp = {
        verifyID,
        bankAccountName,
        nominalItem,
        paymentItem,
      };
      router.push("/checkout");
      localStorage.setItem("top-up", JSON.stringify(dataTopUp));
    }
  };

  useEffect(() => {
    router.prefetch("/checkout");
  }, []);

  return (
    <form action="/checkout" method="POST">
      <div className="pt-md-50 pt-30">
        <div className="">
          <label
            htmlFor="ID"
            className="form-label text-lg fw-medium color-palette-5 mb-10"
          >
            Verifikasi ID pemain
          </label>
          <input
            type="text"
            className="form-control rounded-pill text-lg"
            id="ID"
            name="ID"
            aria-describedby="verifyID"
            placeholder="Enter your ID"
            value={verifyID}
            onChange={(event) => setVerifyID(event.target.value)}
          />
        </div>
      </div>
      <div className="pt-md-50 pb-md-50 pt-30 pb-20">
        <p className="text-lg fw-medium color-palette-5 mb-md-10 mb-0">
          Nominal Top Up
        </p>
        <div className="row justify-content-between">
          {nominals.map((nominal) => (
            <NominalItem
              onChange={() => onNominalItemChange(nominal)}
              key={nominal._id}
              _id={nominal._id}
              coinQuantity={nominal.coinQuantity}
              coinName={nominal.coinName}
              price={nominal.price}
            />
          ))}
          <div className="col-lg-4 col-sm-6"></div>
        </div>
      </div>
      <div className="pb-md-50 pb-20">
        <p className="text-lg fw-medium color-palette-5 mb-md-10 mb-0">
          Payment Method
        </p>
        <fieldset id="paymentMethod">
          <div className="row justify-content-between">
            {payments.map((payment) =>
              payment.banks.map((bank) => (
                <PaymentItem
                  onChange={() => onPaymentsItemChange(payment, bank)}
                  key={bank._id}
                  bankId={bank._id}
                  bankName={bank.bankName}
                  type={payment.type}
                />
              ))
            )}
            <div className="col-lg-4 col-sm-6"></div>
          </div>
        </fieldset>
      </div>
      <div className="pb-50">
        <label
          htmlFor="bankAccount"
          className="form-label text-lg fw-medium color-palette-5 mb-10"
        >
          Bank Account Name
        </label>
        <input
          type="text"
          className="form-control rounded-pill text-lg"
          id="bankAccount"
          name="bankAccount"
          aria-describedby="bankAccount"
          placeholder="Enter your Bank Account Name"
          value={bankAccountName}
          onChange={(event) => setBankAccountName(event.target.value)}
        />
      </div>
      <div className="">
        <button type="button" className="btn-readStory" onClick={onSubmit}>
          Continue
        </button>
      </div>
    </form>
  );
}
