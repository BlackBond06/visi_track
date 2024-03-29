import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestore } from "../../../../firebase/clientApp";
import { visitorAtomState } from "../../../../atoms/visitorsAtom";
import StaffNotFound from "../../../Staff/NotFound";
import Header from "../../../Staff/Header";

const StaffPage = ({socket}) => {
  
  const [data, setData] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    async function getServerSideProps() {
      try {
        const vistorDocRef = doc(firestore, "staffProfiles", userId);

        const visitorDoc = await getDoc(vistorDocRef);

        return setData({
          data: {
            visitorAtomState: visitorDoc.exists()
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

  
  if (data === null) {
    return <div>loading...</div>
  }else if (!data?.data.visitorAtomState){
    return (<StaffNotFound />)
  }
   else {
    return (
      <Header visitorAtomState={data} socket={socket}/>
    )
  }
};


export default StaffPage;
