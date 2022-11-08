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
import { TypeEduServices } from "src/services/TypeEduServices";
import { VideoServices } from "src/services/VideoServices";

export function VideoEditPage(props) {
  const navigate = useNavigate();
  const videoServices = new VideoServices();
  const typeEduServices = new TypeEduServices();

  const { loading, setLoading } = useContext(LoadingContext);
  const { user, setUser } = useContext(UserContext);
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

  const queryString = new URLSearchParams(window.location.search);

  useState(() => {
    fetch();
  }, []);

  async function fetch() {
    const resVideo = await videoServices.getOne(queryString.get("id"));
    const resTypes = await typeEduServices.getAll();

    setData(resVideo);
    setTypeEdus(resTypes);
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
    const res = await videoServices.update(queryString.get("id"), {
      type: data.type,
      title: data.title,
      description: data.description,
      url: data.url,
    });

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Video pembelajaran berhasil diubah`,
    });
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    navigate("/video");
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
        <h1 className="text-xl font-semibold">Edit video edukasi</h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1">
            <div className="left mr-5">
              <InputComponentDefault
                id="title"
                title="Judul Video"
                type="text"
                onChange={handleChange}
                placeholder="Beri judul video"
                value={data.title}
                required={true}
              />
              <InputComponentDefault
                id="description"
                title="Deskripsi Video"
                type="text"
                onChange={handleChange}
                placeholder="Berikan deskripsi video"
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
                title="URL Video"
                type="text"
                onChange={handleChange}
                placeholder="Sematkan URL sumber video"
                value={data.url}
                required={true}
              />
            </div>
          </div>
          <ButtonSubmit title="Ubah Video" />
        </form>
      </div>
    </>
  );
}
