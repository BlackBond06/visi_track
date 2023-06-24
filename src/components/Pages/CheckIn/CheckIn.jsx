import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import {
  doc,
  runTransaction,
  serverTimestamp
} from "firebase/firestore";
import { motion } from "framer-motion";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSetRecoilState } from "recoil";
import { io } from "socket.io-client";
import { authModalState } from "../../../atoms/authModalAtom";
import { auth, firestore } from "../../../firebase/clientApp";
import CheckinModal from "../../Modal/CheckinModal";

const routeVariants = {
  initial: {
    y: "100vh",
  },
  final: {
    y: "0vh",
    transition: {
      type: "spring",
      mass: "0.4",
    },
  },
};

const CheckIn = () => {
  const [user] = useAuthState(auth);
  const setAuthModalState = useSetRecoilState(authModalState);
  const [error, setError] = useState("");
  const [socket, setSocket] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(new Date());
  const [checkIn, setCheckIn] = useState({
    name: "",
    contact: "",
    purpose: "",
    whomToSee: "",
  });

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  // calculate visitor checkin time
  const getCheckInTime = () => {
    TimeAgo.addLocale(en);

    const timeAgo = new TimeAgo("en-US");
    const inSeconds = new Date(time).getTime();
    const minutesAgo = timeAgo.format(inSeconds - 60 * 1000);

    return minutesAgo;
  };

  const checkInTime = getCheckInTime();

  const onChangeTime = (e) => {
    setTime(e.target.value);
  };

  const onChange = (event) => {
    setCheckIn((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  // Upload visitor checkin details to firestore
  const setCheckinDetails = async () => {
    if (error) setError("");

    setLoading(true);

    try {
      const visitorDocRef = doc(firestore, "visitorDetails", checkIn.name);

      await runTransaction(firestore, async (transaction) => {
        // check that visitor name is not already in the db
        const visitorDoc = await transaction.get(visitorDocRef);

        if (visitorDoc.exists()) {
          throw new Error(`Sorry ${checkIn.name} has already checked in!`);
        }

        //create visitor details
        transaction.set(visitorDocRef, {
          creatorId: user?.uid,
          createdAt: serverTimestamp(),
          name: checkIn.name,
          contact: checkIn.contact,
          purpose: checkIn.purpose,
          whomToSee: checkIn.whomToSee,
          numberOfVisitors: 1,
        });

        //create visitorSnippets on user
        transaction.set(
          doc(
            firestore,
            `users/${user?.uid}/visitorSnippets`,
            checkIn.whomToSee
          ),
          {
            visitorId: checkIn.whomToSee,
            isModerator: true,
          }
        );
      });

      socket?.emit("sendNotification", {
        senderName: user?.displayName || user?.email.split("@")[0],
        receiverName: checkIn.whomToSee,
        checkInTime: checkInTime,
      });

      let clearInputFields = {
        name: "",
        contact: "",
        purpose: "",
        whomToSee: "",
      };
      setCheckIn(clearInputFields);

      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 3000);
    } catch (error) {
      console.log("setCheckinDetails error:", error);
      setError(error.message);
    }

    setLoading(false);
  };

  // submit visitor name and whomToSee to notification
  const onSubmit = (event) => {
    event.preventDefault();
    if (!user) setAuthModalState({ open: "true", view: "login" });
    else {
      setCheckinDetails();
    }
  };

  return (
    <motion.div variants={routeVariants} initial="initial" animate="final">
      <Flex
        align="center"
        width="100%"
        justify="center"
        height={{ base: "unset", lg: "100vh" }}
      >
        {isOpen && <CheckinModal isOpen={isOpen} />}
        <Flex
          border-radius="5px"
          width="100%"
          maxWidth="850px"
          padding="20px"
          direction={{ base: "column", lg: "unset" }}
          mt="50px"
        >
          <Flex
            flex="50%"
            padding="80px 20px"
            backgroundImage="url(Assets/checkin.webp)"
            backgroundSize="cover"
            backgroundRepeat="no-repeat"
            backgroundPosition="center"
          >
            <Box></Box>
          </Flex>
          <Flex
            flex="50%"
            padding="80px 20px"
            align="center"
            justify="center"
            direction="column"
            wrap="wrap"
            shadow=" 0px 1px 10px rgba(0,0,0,0.35)"
          >
            <form onSubmit={onSubmit}>
              <Heading>Check In</Heading>
              <Input
                required
                name="name"
                value={checkIn.name}
                placeholder="Name of Visitor"
                type="text"
                m={2}
                _placeholder={{ color: "#ccc" }}
                _hover={{
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                  _placeholder: { color: "electric.200" },
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                }}
                border="none"
                outline="none"
                borderBottom="1px solid #ccc"
                borderRadius="unset"
                onChange={onChange}
              />
              <Input
                name="contact"
                value={checkIn.contact}
                type="text"
                placeholder="Contact"
                border="none"
                outline="none"
                borderBottom="1px solid #ccc"
                borderRadius="unset"
                required
                m={2}
                _placeholder={{ color: "#ccc" }}
                _hover={{
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                  _placeholder: { color: "electric.200" },
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                }}
                onChange={onChange}
              />
              <Input
                name="purpose"
                value={checkIn.purpose}
                type="text"
                placeholder="Purpose of Visit"
                border="none"
                outline="none"
                borderBottom="1px solid #ccc"
                borderRadius="unset"
                required
                m={2}
                _placeholder={{ color: "#ccc" }}
                _hover={{
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                  _placeholder: { color: "electric.200" },
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                }}
                onChange={onChange}
              />
              <Input
                name="whomToSee"
                type="text"
                value={checkIn.whomToSee}
                placeholder="Whom to see"
                border="none"
                outline="none"
                borderBottom="1px solid #ccc"
                borderRadius="unset"
                required
                m={2}
                _placeholder={{ color: "#ccc" }}
                _hover={{
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                  _placeholder: { color: "electric.200" },
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                }}
                onChange={onChange}
              />
              <Input
                name="time"
                type="datetime-local"
                value={time}
                border="none"
                outline="none"
                borderBottom="1px solid #ccc"
                borderRadius="unset"
                min="2018-06-07T00:00"
                max={new Date()}
                required
                m={2}
                _placeholder={{ color: "#ccc" }}
                _hover={{
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                  _placeholder: { color: "electric.200" },
                }}
                _focus={{
                  outline: "none",
                  bg: "white",
                  border: "1px solid",
                  borderColor: "electric.200",
                }}
                onChange={onChangeTime}
              />

              <Button
                mt={2}
                padding="10px 40px"
                type="submit"
                isLoading={loading}
              >
                Submit
              </Button>
            </form>
            <Text fontSize="9pt" p={1} color="red">
              {error}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export default CheckIn;
