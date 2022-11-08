import { Link } from "react-router-dom";
import certificatePreview from "src/assets/images/certificate-preview.png";
import { Btn1Active, Btn2Active, Btn3Active } from "./ButtonComponent";

export function CardComponentDefault({ data, handleEdit, handleDelete }) {
  return (
    <div className="relative max-w-md mx-auto xl:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-8">
      <div className="card">
        <div className="card-header mx-4 -mt-6">
          <img
            className="w-auto rounded-lg shadow-lg"
            src={data.thumbnail}
            alt="event-image"
          />
        </div>
        <div className="card-body p-4">
          <a href={`${data.url}`} target="_blank">
            <h4 className="font-semibold mb-1 hover:text-indigo-600">
              {data.title}
            </h4>
          </a>
          <p className="opcacity-60 mb-4">{data.description}</p>
          <div className="flex items-center gap-1 justify-end">
            <Btn1Active
              title="Delete"
              onTap={() => {
                handleDelete(data);
              }}
              bg="red-500"
              text="white"
            />
            <Btn1Active
              title="Edit"
              onTap={() => {
                handleEdit(data);
              }}
              bg="indigo-500"
              text="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardHomeCount({ title, value }) {
  return (
    <div>
      <a className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-3">
          {title}
        </p>
        <h4 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
          {value}
        </h4>
      </a>
    </div>
  );
}
