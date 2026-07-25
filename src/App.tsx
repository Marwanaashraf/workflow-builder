import { useContext } from "react";
import DetailsPanel from "./components/DetailsPanel/DetailsPanel";
import FlowCanvas from "./components/FlowCanvas/FlowCanvas";
import Header from "./components/Header/Header";

import { ToastContainer } from "react-toastify";
import { FlowContext } from "./context/FlowContext";
export default function App() {
  const { formType } = useContext(FlowContext);
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <Header />
      <FlowCanvas />
      {formType && <DetailsPanel />}
    </>
  );
}
