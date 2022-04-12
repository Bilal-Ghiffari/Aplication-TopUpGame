import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/router";

import { getGameCategory } from "../services/player";
import { setSignUp } from "../services/auth";
import { FavoriteGame } from "../services/data-types";

export default function SignUpPhoto() {
  // state section
  const [categories, setCategories] = useState([]);
  const [favorite, setFavorite] = useState("");
  const [image, setImage] = useState<any>("");
  // bug image tidak boleh di kasish default null harus "/"
  const [imagePreview, setImagePreview] = useState<any>(null);
  const [localForm, setLocalForm] = useState({
    name: "",
    email: "",
  });

  const router = useRouter();

  const getGameCategoryApi = useCallback(async () => {
    const data = await getGameCategory();

    setCategories(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getGameCategoryApi();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem("user-form");
    setLocalForm(JSON.parse(getLocalForm!));
  }, []);

  const onSubmit = async () => {
    const getlocalForm = localStorage.getItem("user-form");
    const form = JSON.parse(getlocalForm!);
    // memastikan getLocalform data nya selalu ada kita kasih tanda seru diakhir variable!
    const data = new FormData();

    data.append("image", image);
    data.append("email", form.email);
    data.append("name", form.name);
    data.append("password", form.password);
    data.append("phoneNumber", form.telephone);
    data.append("username", form.name);
    data.append("role", "user");
    data.append("status", "Y");
    data.append("favorite", favorite);

    const result = await setSignUp(data);
    if (result.error) {
      toast.error(result.message);
    } else {
      // not error
      toast.success("Register Berhasil");
      router.replace("/sign-up-success");
      localStorage.removeItem("user-form");
    }
  };

  return (
    <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="ImageProfile"
                        className="upload-photo"
                      />
                    ) : (
                      <Image
                        src="/icon/upload.svg"
                        width={120}
                        height={120}
                        alt=""
                      />
                    )}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      const img = event.target.files![0];
                      setImagePreview(URL.createObjectURL(img));
                      return setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">
                {localForm.name}
              </h2>
              <p className="text-lg text-center color-palette-1 m-0">
                {localForm.email}
              </p>
              <div className="pt-50 pb-50">
                <label
                  htmlFor="category"
                  className="form-label text-lg fw-medium color-palette-1 mb-10"
                >
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(event) => setFavorite(event.target.value)}
                >
                  {categories.map((category: FavoriteGame) => (
                    <option key={category._id} value={category._id} selected>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                type="button"
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                onClick={onSubmit}
              >
                Create My Account
              </button>
              <a
                className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                href="#"
                role="button"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      tkn: string;
      userForm: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { tkn, userForm } = req.cookies;

  if (tkn) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (!userForm) {
    return {
      redirect: {
        destination: "/validationPhoto",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}
