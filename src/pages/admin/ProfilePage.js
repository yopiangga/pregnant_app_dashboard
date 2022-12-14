import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "src/context/UserContext";
import { AuthServices } from "src/services/AuthServices";

export function ProfilePage() {
  const { user, setUser } = useContext(UserContext);

  async function handleLogout() {
    const res = await AuthServices.logout();
  }

  return (
    <>
      <section className="relative mt-5 bg-blueGray-200">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center"></div>
                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                  <div className="py-6 px-3 mt-32 sm:mt-0">
                    <Link
                      to="/edit-profile"
                      className="bg-indigo-500 active:bg-indigo-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Edit Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bg-white active:bg-indigo-600 uppercase text-dark font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Log Out
                    </button>
                  </div>
                </div>
                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                  <div className="flex justify-start py-4 lg:pt-4 pt-8">
                    <h4>Role : {user?.role == 1 ? "Organisasi" : "User"}</h4>
                  </div>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="w-full px-4 flex justify-center mb-8">
                  <div className="relative w-96 flex justify-center">
                    <img
                      alt="photo-profile"
                      src={user?.photoPath}
                      className="shadow-xl rounded-lg align-middle border-none max-h-54"
                    />
                  </div>
                </div>
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                  {user?.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  {user?.address}
                </div>
                <div className="mb-2 text-blueGray-600 mt-7">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  {user?.email}
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  {user?.metaId}
                </div>
              </div>
              <div className="my-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      {/* {user?.konveksi.deskripsi} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
