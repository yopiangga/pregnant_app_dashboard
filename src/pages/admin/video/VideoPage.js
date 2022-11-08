import { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";
import { VideoServices } from "src/services/VideoServices";
import { CardComponentDefault } from "src/components/CardComponent";

export function VideoPage() {
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(LoadingContext);
  const location = useLocation();
  const [load, setLoad] = useState(true);
  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  const [videos, setVideos] = useState([]);
  const videoServices = new VideoServices();

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await videoServices.getAll();
    const temp = [];

    for (let i = 0; i < res.length; i++) {
      var id = res[i].url.match(
        /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
      );
      id = id[1];

      temp.push({
        ...res[i],
        thumbnail: `https://i.ytimg.com/vi/${id}/mqdefault.jpg`,
      });
    }

    setVideos(temp);

    setLoad(false);
  }

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
  };

  const handleDelete = async (data) => {
    setLoading(true);
    const res = await videoServices.delete(data._id);
    fetch();

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Video pembelajaran berhasil dihapus`,
    });
  };

  const handleEdit = async (data) => {
    navigate("/video/edit?id=" + data._id);
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
      <div className="flex flex-row justify-between items-center my-5">
        <h1 className="text-lg font-bold my-3">Video Edukasi</h1>
      </div>
      {load ? (
        ""
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {videos.map((el, idx) => {
            return (
              <CardComponentDefault
                key={idx}
                data={el}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
