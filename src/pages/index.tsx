import type { NextPage } from "next";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SocketProvider from "../components/SocketContext";
import CustomizeChar from "../components/CustomizeChar";
import GameScreen from "../components/GameScreen";

const Home: NextPage = () => {
  const [isCustomized, setIsCustomized] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [colour, setColour] = useState<string>("");

  const router = useRouter();

  useEffect(() => {
    // Retrieve query parameters from URL
    const { name, color } = router.query;

    if (typeof name === "string" && typeof color === "string") {
      setName(name);
      setColour(color);
      setIsCustomized(true);
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>urSpace Welcomes u</title>
        <meta
          name="description"
          content="Multiplayer Coin Game, Invite Your Friends!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {!isCustomized ? (
          <CustomizeChar
            name={name}
            color={colour}
            setIsCustomized={setIsCustomized}
            setName={setName}
            setColour={setColour}
          />
        ) : (
          <SocketProvider name={name} colour={colour}>
            <GameScreen
              isCustomized={isCustomized}
              setIsCustomized={setIsCustomized}
            />
          </SocketProvider>
        )}
      </main>
    </>
  );
};

export default Home;
