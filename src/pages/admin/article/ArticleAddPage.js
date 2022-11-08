import { useContext, useEffect, useState } from "react";
import {
  InputComponentDefault,
  InputComponentSelect,
} from "src/components/InputComponent";
import { UserContext } from "src/context/UserContext";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";
import { ButtonSubmit } from "src/components/ButtonComponent";
import { ArticleServices } from "src/services/ArticleServices";
import { TypeEduServices } from "src/services/TypeEduServices";

export function ArticleAddPage() {
  const navigate = useNavigate();

  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);

  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  const [data, setData] = useState({
    type: {
      type_id: "1",
      title: "Global",
      index: 0,
      createdAt: "",
      updatedAt: "",
    },
    title: "",
    description: "",
    user: "",
    url: "",
    thumbnail: "",
  });

  const [typeEdus, setTypeEdus] = useState([
    {
      type_id: "1",
      title: "Global",
      index: 0,
      createdAt: "",
      updatedAt: "",
    },
  ]);

  useState(() => {
    fetch();
  }, []);

  async function fetch() {
    const typeEduServices = new TypeEduServices();
    const res = await typeEduServices.getAll();

    setTypeEdus(res);
  }

  function handleChange(event) {
    setData({ ...data, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const articleServices = new ArticleServices();

    setLoading(true);
    const res = await articleServices.add({
      type: data.type,
      title: data.title,
      description: data.description,
      user: user,
      url: data.url,
      thumbnail: data.thumbnail,
    });

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Artikel baru berhasil ditambahkan`,
    });
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    navigate("/artikel");
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
        <h1 className="text-xl font-semibold">Tambah artikel edukasi</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1">
            <div className="left mr-5">
              <InputComponentDefault
                id="title"
                title="Judul Artikel"
                type="text"
                onChange={handleChange}
                placeholder="Beri judul artikel"
                value={data.title}
                required={true}
              />
              <InputComponentDefault
                id="description"
                title="Deskripsi Artikel"
                type="text"
                onChange={handleChange}
                placeholder="Berikan deskripsi artikel"
                value={data.description}
                required={true}
              />
              <InputComponentSelect
                id="type"
                title="Kategori"
                onChange={handleChange}
                value={data.type}
                data={typeEdus}
                required={true}
              />
              <InputComponentDefault
                id="url"
                title="URL Artikel"
                type="text"
                onChange={handleChange}
                placeholder="Sematkan URL sumber artikel"
                value={data.url}
                required={true}
              />
              <InputComponentDefault
                id="thumbnail"
                title="Thumbnail Artikel"
                type="text"
                onChange={handleChange}
                placeholder="Sematkan URL thumbnail artikel"
                value={data.thumbnail}
                required={true}
              />
            </div>
          </div>
          <ButtonSubmit title="Tambah Artikel" />
        </form>
      </div>
    </>
  );
}
