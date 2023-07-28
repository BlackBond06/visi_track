import { Button, Input, Text } from "@chakra-ui/react";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { auth, firestore } from "../../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";

const StaffReg = () => {
  const [user] = useAuthState(auth);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [staffProfile, setstaffProfile] = useState(
    {
      name:"",
      password:"",
      rank:""
    }
  );

  const onstaffProfileChange = (event) => {
    setstaffProfile(prev =>({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleAddstaffProfileToDB = async () => {

    if(error) setError("");
    
    setLoading(true);
    try {
      
      const staffProfilesDocRef = doc(firestore, "staffProfiles", staffProfile.name);
      
  
      const staffProfileDoc = await getDoc(staffProfilesDocRef);
  
      if (staffProfileDoc.exists()) {
        throw new Error(`Sorry ${staffProfileDoc.id} has already been added!`);
      }
  
      await setDoc(staffProfilesDocRef, {
        creatorId:user?.uid,
        createdAt: serverTimestamp(),
        numberOfCheckedInVisitors: 0,
        rank: staffProfile.rank,
        password: staffProfile.password
      })

    } catch (error) {
      console.log("handleAddStaffProfileToDB Error", error);
      setError(error.message);
    }  
    setLoading(false);
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    handleAddstaffProfileToDB();
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        name="name"
        placeholder="Enter your name"
        type="text"
        mb={2}
        onChange={onstaffProfileChange}
        fontSize="10pt"
        _placeholder={{ color: "brand.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
      />
      <Input
            required
            mb={2}
            name="password"
            placeholder="password"
            type="password"
            onChange={onstaffProfileChange}
            fontSize="10pt"
            _placeholder={{ color: "brand.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            bg="gray.50"
          />
          <Input
            required
            name="rank"
            placeholder="Your rank"
            type="text"
            onChange={onstaffProfileChange}
            fontSize="10pt"
            _placeholder={{ color: "brand.500" }}
            _hover={{
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            _focus={{
              outline: "none",
              bg: "white",
              border: "1px solid",
              borderColor: "blue.500",
            }}
            bg="gray.50"
          />
      <Text textAlign="center" color="red" fontSize="10pt" mt={1}>
        {error}
        {/* {error || FIREBASE_ERRORS[userError?.message]} */}
      </Text>
      <Button
        width="100%"
        height="36px"
        type="submit"
        mt={2}
        mb={2}
        isLoading={loading}
      >
        Submit
      </Button>
      {/* <Flex fontSize="9pt" justify="center">
            <Text mr={1}>Already have an account?</Text>
            <Text
              color="electric.200"
              fontWeight={700}
              cursor="pointer"
              onClick={() =>
                setAuthModalState((prev) => ({
                  ...prev,
                  view: "login",
                }))
              }
            >
              LOG IN
            </Text>
          </Flex> */}
    </form>
  );
};

export default StaffReg;
