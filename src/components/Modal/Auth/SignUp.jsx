import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { authModalState } from "../../../atoms/authModalAtom";
import { useSetRecoilState } from "recoil";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth"
import { auth } from "../../../firebase/clientApp";
import {FIREBASE_ERRORS} from "../../../firebase/errors";

const SignUp = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    userError,
  ] = useCreateUserWithEmailAndPassword(auth);




  const onSubmit = (event) => {
    event.preventDefault();
    if(error) setError("");
    console.log();
    if(signUpForm.password !== signUpForm.confirmPassword){
      // Set error
      setError("Passwords do not match!");
      return;
    }


    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };
  const onChange = (event) => {
    // update form state
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        onChange={onChange}
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
        onChange={onChange}
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
        name="confirmPassword"
        placeholder="Confirm Password"
        type="password"
        onChange={onChange}
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
     <Text textAlign="center" color="red" fontSize="10pt" mt={1}>{error || FIREBASE_ERRORS[userError?.message]}</Text>
      <Button width="100%" height="36px" type="submit" mt={2} mb={2} isLoading={loading}>
        Sign Up
      </Button>
      <Flex fontSize="9pt" justify="center">
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
      </Flex>
    </form>
  );
};

export default SignUp;
