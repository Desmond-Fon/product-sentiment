import './App.css'
import { SideBar } from './components/SideBar'
import { Main } from './components/Main'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { useState, useEffect } from 'react'
import { Button } from "@chakra-ui/react";
import { MdProductionQuantityLimits } from "react-icons/md";

// import config from './config.json';

export interface Product {
  id: string,
  image: string;
  name: string;
  last_comment_date: Date;
}

interface DashboardData {
  positive: number;
  negative: number;
  products: Product[];
  top_words: string[];
}

function App() {
  const [resData, setResData] = useState<DashboardData>();
  const [show, setShow] = useState<boolean>(false)
  const [link, setLink] = useState("");
  const [err, setErr] = useState(false);
  const [linkErr, setLinkErr] = useState(false);

  useEffect(() => {
    fetch(link)
      .then(res => res.json() as Promise<DashboardData>)
      .then(data => {
        setResData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setResData]);

    const handleSubmit = () => {
      if (link.length < 1) {
        setErr(true);
      } else if (link.startsWith("http://") || link.startsWith("https://")) {
        setShow(true);
      } else {
        setLinkErr(true)
      }
    };
  
  return (
    <>
      {show ? (
        <div className="overflow-hidden lg:h-[100vh] font-poppins">
          <div className="hidden lg:grid grid-cols-10">
            <>
              <div className={`col-span-7 min-h-screen`}>
                {resData && (
                  <Main stats={[resData!.positive, resData!.negative]} />
                )}
              </div>
              <div className={`col-span-3 max-h-screen overflow-y-auto`}>
                {resData && <SideBar products={resData!.products} />}
              </div>
            </>
          </div>

          <div className="lg:hidden">
            <Nav />
            {resData && <Main stats={[resData!.positive, resData!.negative]} />}
            {resData && <SideBar products={resData!.products} />}
            <Footer />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center bg-primary h-[100vh]">
          <MdProductionQuantityLimits className="text-secondary w-8 h-8" />
          <p className="font-[700] lg:text-[19px] text-white cursor-pointer">
            Product Sentiment
          </p>{" "}
          <form className="flex justify-center lg:items-center items-start mx-[40px] flex-col gap-6 text-textAsh mt-[20px] w-[80%] lg:w-[50%]">
            <div className="pb-4 w-full text-black font-[700]">
              <label className="text-white">Please input DB link</label>
              <input
                type="text"
                placeholder="Database link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
              />
              {err && link === "" ? (
                <p className="pt-2 text-red-400 text-[12px]">
                  Input cannot be empty
                </p>
              ) : (
                ""
              )}
              {linkErr && (!link.startsWith("http://") ||
              !link.startsWith("https://")) ? (
                <p className="pt-2 text-red-400 text-[12px]">
                  Please enter a valid link
                </p>
              ) : (
                ""
              )}
            </div>
            {/* <div className="pb-4 w-full">
            <label>
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-[100%] border-[#808080] border-[1px] py-2 px-2 outline-0 rounded-[5px]"
            />
            {err && password === "" ? (
              <p className="pt-2 text-red text-[12px]">Please enter password</p>
            ) : (
              ""
            )}
          </div> */}
            <Button
              className={`w-full py-2 px-6 mt-2 md:mt-0 md:px-9 bg-red text-white rounded-md`}
              bg="#239463"
              onClick={handleSubmit}
              // isLoading={mutation.isPending}
            >
              SUBMIT
            </Button>
          </form>
        </div>
      )}
    </>
  );
}

export default App
