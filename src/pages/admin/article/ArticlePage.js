import { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";
import { ArticleServices } from "src/services/ArticleServices";
import { CardComponentDefault } from "src/components/CardComponent";

export function ArticlePage() {
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(LoadingContext);
  const location = useLocation();
  const [load, setLoad] = useState(true);
  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  const [articles, setArticles] = useState([]);
  const articleServices = new ArticleServices();

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await articleServices.getAll();
    setArticles(res);

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
    const res = await articleServices.delete(data._id);
    fetch();

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Artikel pembelajaran berhasil dihapus`,
    });
  };

  const handleEdit = async (data) => {
    navigate("/artikel/edit?id=" + data._id);
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
        <h1 className="text-lg font-bold my-3">Artikel Edukasi</h1>
      </div>
      {load ? (
        ""
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {articles.map((el, idx) => {
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
