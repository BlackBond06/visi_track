import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { visitorState } from "../atoms/visitorsAtom";
import { auth, firestore } from "../firebase/clientApp";

import { collection, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export const useStaffStateValue = () => {
  const [user] = useAuthState(auth);

 
  const [staffStateValue, setStaffStateValue] = useRecoilState(visitorState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


 
  useEffect(()=>{
    if(!user) return;

    const getMySnippets = async () => {
      setLoading(false);
      try {
        const snippetDocs = await getDocs(
          collection(firestore, `users/${user?.uid}/visitorSnippets`)
        );
        const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data() }));
        setStaffStateValue(prev =>({
          ...prev,
          mySnippets:snippets
        }))
  
       
      } catch (error) {}
      setLoading(false);
    };



    getMySnippets();
  }, [setStaffStateValue, user]);


  return {
    staffStateValue,
    loading,
  };
};
