import { useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  TableComponentAction,
  TableComponentDefault,
} from "src/components/TableComponent";
import { ModalInformationLittle } from "src/components/ModalInformationComponent";
import { useNavigate } from "react-router-dom";
import { Loading } from "src/components/Loader";
import { LoadingContext } from "src/context/LoadingContext";
import { TypeEduServices } from "src/services/TypeEduServices";

export function CategoryPage() {
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(LoadingContext);
  const location = useLocation();
  const [load, setLoad] = useState(true);
  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  const [typeEdus, setTypeEdus] = useState([]);
  const typeEduServices = new TypeEduServices();

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await typeEduServices.getAll();
    var temp = [];

    for (let i = 0; i < res.length; i++) {
      temp.push([
        res[i]._id,
        res[i].type_id,
        res[i].title,
        res[i].index,
        res[i].createdAt,
        res[i].updatedAt,
      ]);
    }

    setTypeEdus(temp);

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
    const res = await typeEduServices.delete(data[0]);
    fetch();

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Kategori pembelajaran berhasil dihapus`,
    });
  };

  const handleEdit = async (data) => {
    navigate("/kategori/edit?id=" + data[0]);
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
        <h1 className="text-lg font-bold my-3 mb-3">Kategori Edukasi</h1>
      </div>
      {load ? (
        ""
      ) : (
        <TableComponentAction
          header={[
            "_id",
            "Type ID",
            "title",
            "index",
            "createdAt",
            "updatedAt",
          ]}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          body={typeEdus}
        />
      )}
    </>
  );
}
