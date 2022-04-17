import { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
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
import { BreadCrumbDetailsItem } from "../../components/atoms/BreadCrumb";

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
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>details | paygames</title>
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
      <section style={{ backgroundColor: "#030306" }}>
        <Navbar />
        <section className="detail pt-lg-60 pb-50">
          <div className="container-xxl container-fluid">
            <div className="py-5">
              <BreadCrumbDetailsItem nameBreadcrumbActive={dataItem} />
            </div>
            <div className="detail-header pb-50">
              <h2 className="text-4xl fw-bold color-palette-5 text-start mb-10 d-flex justify-content-center">
                Top Up
              </h2>
              <p className="text-lg color-palette-2 mb-0 d-flex justify-content-center">
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
      </section>
    </>
  );
}
// getStaticPath untuk Saat mengekspor fungsi yang dipanggil getStaticPaths dari
//halaman yang menggunakan Rute Dinamis , Next.js akan secara statis melakukan
//pra-render semua jalur yang ditentukan oleh getStaticPaths.
export async function getStaticPaths() {
  const data = await getFeatureGame();
  const paths = data.map((item: PaymentTypes) => ({
    params: {
      id: item._id,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

interface StaticProps {
  params: {
    id: string;
  };
}

// getStaticProps untuk memunculkan data diClientSide
export async function getStaticProps({ params }: StaticProps) {
  const { id } = params;
  const data = await getDetailVoucher(id);
  return {
    props: {
      dataItem: data.detail,
      nominal: data.detail.nominals,
      payment: data.payment,
    },
  };
}

// kalo kita menggunakan getStaticPaths kita harus wajib menggunakan getStaticProps keduanya tersebut berjalan disisi server
