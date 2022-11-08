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
import { UserServices } from "src/services/UserServices";

export function MotherPage() {
  const navigate = useNavigate();
  const { loading, setLoading } = useContext(LoadingContext);
  const location = useLocation();
  const [load, setLoad] = useState(true);
  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  const [mothers, setMothers] = useState([]);
  const userServices = new UserServices();

  useEffect(() => {
    fetch();
  }, []);

  async function fetch() {
    const res = await userServices.getMothers();
    var temp = [];

    for (let i = 0; i < res.length; i++) {
      temp.push([
        res[i]._id,
        res[i].kk,
        res[i].nik,
        res[i].fullName,
        res[i].email,
        res[i].address.rt,
        res[i].address.rw,
        res[i].address.village,
        res[i].address.district,
        res[i].address.city,
        `${res[i].status == 1 ? "Belum Menikah" : "Menikah"}`,
        res[i].phoneNumber,
        res[i].profilePhotoPath,
        res[i].createdAt,
        res[i].updatedAt,
      ]);
    }

    setMothers(temp);

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
    const res = await userServices.delete(data[0]);
    fetch();

    setLoading(false);

    setModalInformationLittle({
      status: true,
      description: `Data Ibu berhasil dihapus`,
    });
  };

  const handleEdit = async (data) => {
    navigate("/ibu/edit?id=" + data[0]);
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
        <h1 className="text-lg font-bold my-3 mb-3">Semua Data Ibu</h1>
      </div>
      {load ? (
        ""
      ) : (
        <TableComponentAction
          header={[
            "ID",
            "KK",
            "NIK",
            "Nama Lengkap",
            "Email",
            "RT",
            "RW",
            "Desa",
            "Kecamatan",
            "Kota",
            "Status",
            "Telepon",
            "Photo Profile",
            "createdAt",
            "updatedAt",
          ]}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          body={mothers}
        />
      )}
    </>
  );
}
