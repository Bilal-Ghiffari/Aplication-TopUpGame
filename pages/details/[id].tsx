import { useEffect } from "react";
import Footer from "../../components/organisme/Footer";
import Navbar from "../../components/organisme/Navbar";
import TopUpForm from "../../components/organisme/TopUpForm";
import TopUpItem from "../../components/organisme/TopUpForm/TopUpItem";
import {
  GameItemTypes,
  NominalsTypes,
  PaymentTypes,
} from "../../services/data-types";
import { getDetailVoucher, getFeatureGame } from "../../services/player";

interface DataDetailsProps {
  dataItem: GameItemTypes;
  nominal: NominalsTypes[];
  payment: PaymentTypes[];
}

export default function Detail({
  dataItem,
  nominal,
  payment,
}: DataDetailsProps) {
  // ketika ingin memakai routing dinamis di nextjs maka harus menggunkan [id] dinama file

  useEffect(() => {
    localStorage.setItem("data-item", JSON.stringify(dataItem));
  }, []);
  return (
    <>
      <Navbar />
      <section className="detail pt-lg-60 pb-50">
        <div className="container-xxl container-fluid">
          <div className="detail-header pb-50">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10">
              Top Up
            </h2>
            <p className="text-lg color-palette-1 mb-0">
              Perkuat akun dan jadilah pemenang
            </p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
              <TopUpItem detail={dataItem} type="mobile" />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
              <TopUpItem detail={dataItem} type="desktop" />
              <hr />
              <TopUpForm nominals={nominal} payments={payment} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
// getStaticPath untuk Saat mengekspor fungsi yang dipanggil getStaticPaths dari
//halaman yang menggunakan Rute Dinamis , Next.js akan secara statis melakukan
//pra-render semua jalur yang ditentukan oleh getStaticPaths.
export async function getStaticPaths() {
  const data = await getFeatureGame();
  const paths = data.map((item) => ({
    params: {
      id: item._id,
    },
  }));
  console.log("paths", paths);
  return {
    paths,
    fallback: false,
  };
}

// getStaticProps untuk memunculkan data diClientSide
export async function getStaticProps({ params }) {
  const { id } = params;
  const data = await getDetailVoucher(id);
  console.log("data", id);
  return {
    props: {
      dataItem: data.detail,
      nominal: data.detail.nominals,
      payment: data.payment,
    },
  };
}

// kalo kita menggunakan getStaticPaths kita harus wajib menggunakan getStaticProps keduanya tersebut berjalan disisi server
