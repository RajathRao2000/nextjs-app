import "@/styles/globals.css";
import { Provider, useSelector } from "react-redux";
import store from "@/store/store";
import Header from "@/components/UI/Header/Header";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <div className="border-2 flex justify-center items-center min-h-screen">
        <div className=" w-[60%] border-2 flex justify-center items-center gap-10 p-3">
          <Component {...pageProps} />
        </div>
      </div>
    </Provider>
  );
}
