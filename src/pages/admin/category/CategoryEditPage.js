import { useContext, useEffect, useState } from "react";
import { InputComponentDefault } from "src/components/InputComponent";
import { UserContext } from "src/context/UserContext";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";
import { ButtonSubmit } from "src/components/ButtonComponent";
import { TypeEduServices } from "src/services/TypeEduServices";

export function CategoryEditPage(props) {
  const navigate = useNavigate();
  const typeEduServices = new TypeEduServices();

  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({
    type_id: "",
    title: "",
    index: 0,
  });

  const queryString = new URLSearchParams(window.location.search);

  useState(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await typeEduServices.getOne(queryString.get("id"));
    setData({
      type_id: res.type_id,
      title: res.title,
      index: res.index,
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
    const res = await typeEduServices.update(queryString.get("id"), data);

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Kategori pembelajaran berhasil diubah`,
    });
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    navigate("/kategori");
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
        <h1 className="text-xl font-semibold">Edit kategori edukasi</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1">
            <div className="left mr-5">
              <InputComponentDefault
                id="type_id"
                title="ID Kategori"
                type="text"
                onChange={handleChange}
                placeholder="Masukkan ID kategori"
                value={data.type_id}
                required={true}
              />

              <InputComponentDefault
                id="title"
                title="Nama Kategori"
                type="text"
                onChange={handleChange}
                placeholder="Masukkan nama kategori"
                value={data.title}
                required={true}
              />

              <InputComponentDefault
                id="index"
                title="Index Kategori"
                type="number"
                onChange={handleChange}
                placeholder="Masukkan index kategori"
                value={data.index}
                required={true}
              />
            </div>
          </div>
          <ButtonSubmit title="Ubah Kategori" />
        </form>
      </div>
    </>
  );
}
