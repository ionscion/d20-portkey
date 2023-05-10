import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

function Root() {
  return (
    <>
      <Layout>
        <Header />

        <Outlet />

        <Footer />
      </Layout>
    </>
  );
}

export default Root;
