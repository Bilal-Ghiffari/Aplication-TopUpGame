import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Input from "../../components/atoms/Input";
import SideBar from "../../components/organisme/SideBar";
import { getMemberEditProfile } from "../../services/member";

export default function EditProfile() {
  const [user, setUser] = useState({
    nama: "",
    email: "",
    phoneNumber: "",
    avatar: "",
  });
  // state image
  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("tkn");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const userFromPayload = payload.player;
      console.log(userFromPayload);

      setUser(userFromPayload);
    }
  }, []);

  const setName = (event: any) => {
    setUser({
      ...user,
      nama: event.target.value,
    });
  };

  const setPhoneNumber = (event: any) => {
    setUser({
      ...user,
      phoneNumber: event.target.value,
    });
  };

  const ImageUpdate = (event: any) => {
    const img = event.target.files[0];
    setImagePreview(URL.createObjectURL(img));
    return setUser({
      ...user,
      avatar: img,
    });
  };

  const onSubmit = async () => {
    const data = new FormData();

    data.append("name", user.nama);
    data.append("phoneNumber", user.phoneNumber);
    data.append("image", user.avatar);

    const response = await getMemberEditProfile(data);

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success("Berhasil Edit Profile");
      // kita menghapus token dan mengupdate token beserta payload yg baru
      Cookies.remove("tkn");
      router.push("/sign-in");
    }
  };
  return (
    <>
      <SideBar activeMenu="settings" />
      <section className="edit-profile overflow-auto">
        <main className="main-wrapper">
          <div className="ps-lg-0">
            <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
            <div className="bg-card pt-30 ps-30 pe-30 pb-30">
              <form action="">
                <div className="photo d-flex">
                  <div className="image-upload">
                    <label htmlFor="avatar">
                      {imagePreview ? (
                        <img
                          src={imagePreview}
                          width={90}
                          height={90}
                          alt=""
                          className="upload-photo"
                        />
                      ) : (
                        <img
                          src={user.avatar}
                          width="90"
                          height="90"
                          alt=""
                          className="upload-photo"
                        />
                      )}
                    </label>
                    <input
                      id="avatar"
                      type="file"
                      name="avatar"
                      accept="image/png, image/jpeg"
                      onChange={ImageUpdate}
                    />
                  </div>
                </div>
                <div className="pt-30">
                  <Input
                    label="Full Name"
                    value={user.nama}
                    onChange={(event) => setName(event)}
                  />
                </div>
                <div className="pt-30">
                  <Input label="Email Address" disabled value={user.email} />
                </div>
                <div className="pt-30">
                  <Input
                    label="phone"
                    value={user.phoneNumber}
                    onChange={(event) => setPhoneNumber(event)}
                  />
                </div>
                <div className="button-group d-flex flex-column pt-50">
                  <button
                    type="button"
                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                    onClick={onSubmit}
                  >
                    Save My Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
