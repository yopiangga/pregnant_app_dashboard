import { useContext, useEffect, useState } from "react";
import { InputComponentDefault } from "src/components/InputComponent";
import { UserContext } from "src/context/UserContext";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";
import { ButtonSubmit } from "src/components/ButtonComponent";
import { TypeEduServices } from "src/services/TypeEduServices";

export function CategoryAddPage() {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);

  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  const [data, setData] = useState({
    type_id: "",
    title: "",
    index: 0,
  });

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const typeEdu = new TypeEduServices();

    setLoading(true);
    const res = await typeEdu.add(data);

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Kategori pembelajaran berhasil dibuat`,
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
        <h1 className="text-xl font-semibold">Tambah kategori edukasi</h1>
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
          <ButtonSubmit title="Tambah Kategori" />
        </form>
      </div>
    </>
  );
}
