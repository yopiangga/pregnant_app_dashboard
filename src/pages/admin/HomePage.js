import { useContext, useEffect, useState } from "react";
import { CardHomeCount } from "src/components/CardComponent";
import { UserContext } from "src/context/UserContext";

export function HomePage() {
  const { user, setUser } = useContext(UserContext);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    // const resCertificate = await CountServices.getCertificateByParameter(
    //   "emailAuthor",
    //   user.email
    // );
    // const resEvent = await CountServices.getEventByParameter(
    //   "email",
    //   user.email
    // );
    // setCertificates(resCertificate);
    // setEvents(resEvent);
  };

  return (
    <>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-3">
        {/* <CardHomeCount title="Total Acara" value={events.length} /> */}
        {/* <CardHomeCount title="Total Sertifikat" value={certificates.length} /> */}
        {/* <CardHomeCount title="Total Peserta Acara" value={5} /> */}
      </div>
    </>
  );
}
