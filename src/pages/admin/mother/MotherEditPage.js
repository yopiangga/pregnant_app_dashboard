import { useContext, useEffect, useState } from "react";
import { InputComponentDefault } from "src/components/InputComponent";
import { UserContext } from "src/context/UserContext";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";
import { ButtonSubmit } from "src/components/ButtonComponent";
import { UserServices } from "src/services/UserServices";

export function MotherEditPage(props) {
  const navigate = useNavigate();
  const userServices = new UserServices();

  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({
    _id: "",
    kk: "",
    nik: "",
    type: "",
    fullName: "",
    email: "",
    rt: "",
    rw: "",
    village: "",
    district: "",
    city: "",
    status: "",
    phoneNumber: "",
    profilePhotoPath: "",
    createdAt: "",
    updatedAt: "",
  });

  const queryString = new URLSearchParams(window.location.search);

  useState(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await userServices.getMother(queryString.get("id"));
    setData({
      kk: res.kk,
      nik: res.nik,
      type: res.type,
      fullName: res.fullName,
      email: res.email,
      rt: res.address.rt,
      rw: res.address.rw,
      village: res.address.village,
      district: res.address.district,
      city: res.address.city,
      status: res.status,
      phoneNumber: res.phoneNumber,
      profilePhotoPath: res.profilePhotoPath,
    });
  }

  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const res = await userServices.updateMother(queryString.get("id"), {
      kk: data.kk,
      nik: data.nik,
      fullName: data.fullName,
      address: {
        rt: data.rt,
        rw: data.rw,
        village: data.village,
        district: data.district,
        city: data.city,
      },
      email: data.email,
      status: data.status,
      phoneNumber: data.phoneNumber,
      profilePhotoPath: data.profilePhotoPath,
    });

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Data ibu berhasil diubah`,
    });
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    navigate("/ibu");
  };

  return (
    <>
      <Loading loading={loading} />
      <ModalInformationLittle
        status={modalInformationLittle.status}
        title={modalInformationLittle.title}
        description={modalInformationLittle.description}
        handleClose={handleCloseModal}
      />
      <div className="w-11/12 p-12 bg-white mt-5 rounded-lg shadow-lg">
        <h1 className="text-xl font-semibold">Edit data ibu</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1">
            <div className="left mr-5">
              <InputComponentDefault
                id="kk"
                title="KK"
                type="text"
                onChange={handleChange}
                placeholder="Masukkan nomor KK"
                value={data.kk}
                required={true}
              />

              <InputComponentDefault
                id="nik"
                title="NIK"
                type="text"
                onChange={handleChange}
                placeholder="Masukkan NIK"
                value={data.nik}
                required={true}
              />

              <InputComponentDefault
                id="fullName"
                title="Nama Lengkap"
                type="text"
                onChange={handleChange}
                placeholder="Nama Lengkap"
                value={data.fullName}
                required={true}
              />
              <InputComponentDefault
                id="rt"
                title="RT"
                type="text"
                onChange={handleChange}
                placeholder="RT"
                value={data.rt}
                required={true}
              />
              <InputComponentDefault
                id="rw"
                title="RW"
                type="text"
                onChange={handleChange}
                placeholder="RW"
                value={data.rw}
                required={true}
              />
              <InputComponentDefault
                id="village"
                title="Desa / Kelurahan"
                type="text"
                onChange={handleChange}
                placeholder="Desa / Kelurahan"
                value={data.village}
                required={true}
              />
              <InputComponentDefault
                id="district"
                title="Kecamatan"
                type="text"
                onChange={handleChange}
                placeholder="Kecamatan"
                value={data.district}
                required={true}
              />
              <InputComponentDefault
                id="city"
                title="Kota / Kabupaten"
                type="text"
                onChange={handleChange}
                placeholder="Kota / kabupaten"
                value={data.city}
                required={true}
              />
              <InputComponentDefault
                id="email"
                title="Alamat Email"
                type="text"
                onChange={handleChange}
                placeholder="Masukkan alamat email"
                value={data.email}
                required={true}
              />
              <InputComponentDefault
                id="status"
                title="Status Ibu"
                type="text"
                onChange={handleChange}
                placeholder="Status Ibu"
                value={data.status}
                required={true}
              />
              <InputComponentDefault
                id="phoneNumber"
                title="Telepon"
                type="text"
                onChange={handleChange}
                placeholder="Masukkan nomor telepon"
                value={data.phoneNumber}
                required={true}
              />
              <InputComponentDefault
                id="profilePhotoPath"
                title="Photo Profile"
                type="text"
                onChange={handleChange}
                placeholder="URL Photo"
                value={data.profilePhotoPath}
                required={true}
              />
            </div>
          </div>
          <ButtonSubmit title="Ubah Data" />
        </form>
      </div>
    </>
  );
}
