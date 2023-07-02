import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../../../firebase/clientApp";
import { visitorAtomState } from "../../../../atoms/visitorsAtom";
import StaffNotFound from "../../../Staff/NotFound";
import Header from "../../../Staff/Header";

const StaffPage = () => {
  const [data, setData] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    async function getServerSideProps() {
      try {
        const vistorDocRef = doc(firestore, "visitorDetails", userId);

        const visitorDoc = await getDoc(vistorDocRef);

        return setData({
          data: {
            visitorData: visitorDoc.exists()
              ? JSON.parse(
                  JSON.stringify({ id: visitorDoc.id, ...visitorDoc.data() })
                )
              : "",
          },
        });
      } catch (error) {
        console.log("getServerSide error:", error);
      }
    }

    getServerSideProps();
  }, [userId]);
  if (!data?.data.visitorData) {
    return <StaffNotFound />;
  } else {
    return (
      <Header staffDetails={visitorAtomState} data={data}/>
    )
  }
};

export default StaffPage;
