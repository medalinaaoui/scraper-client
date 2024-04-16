"use client";
import { store } from "./store";
import { Provider } from "react-redux";
import useRefreshAccessToken from "@/lib/useRefreshAccessToken";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

type Props = {
  children: React.ReactNode;
};
const StoreProvider = ({ children }: Props) => {
  const access_token = store.getState().user.access_token;

  const refresh = useRefreshAccessToken();
  const verifyRefreshToken = async () => {
    try {
      const req = await refresh();
      console.log(
        "🚀 ~ file: StoreProvider.tsx:11 ~ verifyRefreshToken ~ req:",
        req
      );
    } catch (error) {
      console.log(
        "🚀 ~ file: StoreProvider.tsx:16 ~ verifyRefreshToken ~ error:",
        error
      );
    }
  };

  useEffect(() => {
    !access_token
      ? verifyRefreshToken()
      : console.log("deja kayn access token");
  }, []);
  return <Provider store={store}>{children}</Provider>;
};
export default StoreProvider;
