import "./App.css";
import { SideBar } from "./components/SideBar";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { useState, useEffect } from "react";
// import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
// import { MdProductionQuantityLimits } from "react-icons/md";

import config from "./config.json";

export interface Product {
  id: string;
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
  // const [show, setShow] = useState<boolean>(false);
  // const [link, setLink] = useState<File | null>(null);
  // const [err, setErr] = useState(false);

  useEffect(() => {
    fetch(config.server_url + "/dashboard")
      .then((res) => res.json() as Promise<DashboardData>)
      .then((data) => {
        setResData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setResData]);

  // const handleSubmit = () => {
  //   if (!link && link === null) {
  //     setErr(true);
  //   } else {
  //     setShow(true);
  //   }
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const firstFile = e.target?.files?.item(0);
  //   if (firstFile) {
  //     setLink(firstFile);
  //   } else {
  //     setErr(true)
  //     setLink(null);
  //   }
  // };

  return (
    // <>
    //   {show ? (
    //     <div className="overflow-hidden lg:h-[100vh] font-poppins">
    //       <div className="hidden lg:grid grid-cols-10">
    //         <>
    //           <div className={`col-span-7 min-h-screen`}>
    //             {resData && (
    //               <Main stats={[resData!.positive, resData!.negative]} />
    //             )}
    //           </div>
    //           <div className={`col-span-3 max-h-screen overflow-y-auto`}>
    //             {resData && <SideBar products={resData!.products} />}
    //           </div>
    //         </>
    //       </div>

    //       <div className="lg:hidden">
    //         <Nav />
    //         {resData && <Main stats={[resData!.positive, resData!.negative]} />}
    //         {resData && <SideBar products={resData!.products} />}
    //         <Footer />
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="flex flex-col justify-center items-center bg-primary h-[100vh]">
    //       <MdProductionQuantityLimits className="text-secondary w-8 h-8" />
    //       <p className="font-[700] lg:text-[19px] text-white cursor-pointer">
    //         Product Sentiment
    //       </p>{" "}
    //       <form className="flex justify-center lg:items-center items-start mx-[40px] flex-col gap-6 text-textAsh mt-[20px] w-[80%] lg:w-[50%]">
    //         <div className="pb-4 w-full text-black font-[700]">
    //           <FormControl>
    //             <FormLabel fontWeight={"700"} fontSize={"16px"} color='white'>
    //               Enter JSON FIle
    //             </FormLabel>
    //             <Input
    //               size="md"
    //               type={"file"}
    //               bg={"white"}
    //               onChange={handleFileChange}
    //               fontWeight={"400"}
    //               rounded={"xl"}
    //               fontSize={"15px"}
    //               outline={"none"}
    //               border={"none"}
    //               accept=".json"
    //             />
    //             {err && link === null ? <p className='text-red-400'>Please enter a json file</p> : ""}
    //           </FormControl>
    //         </div>
    //         <Button
    //           className={`w-full py-2 px-6 mt-2 md:mt-0 md:px-9 bg-red text-white rounded-md`}
    //           bg="#239463"
    //           onClick={handleSubmit}
    //         >
    //           SUBMIT
    //         </Button>
    //       </form>
    //     </div>
    //   )}
    // </>

        <div className='overflow-hidden lg:h-[100vh] font-poppins'>
      <div className="hidden lg:grid grid-cols-10">
        <div className={`col-span-7 min-h-screen`}>
          {resData &&
            <Main stats={[resData!.positive, resData!.negative]} />}
        </div>
        <div className={`col-span-3 max-h-screen overflow-y-auto`}>
          {resData &&
            <SideBar products={resData!.products} />}
        </div>
      </div>

      <div className='lg:hidden'>
        <Nav />
        {resData &&
          <Main stats={[resData!.positive, resData!.negative]} />}
        {resData &&
          <SideBar products={resData!.products} />}
        <Footer />
      </div>
    </div>
  );
}

export default App;
