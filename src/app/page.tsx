import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Title from "./components/Title";
import Product from "./components/Product";

export default function Home() {
  return (
    <>
      <Header />
      <Title />
      <Main children={<Product />}/>
      <Footer />
    </> 
  );
}
