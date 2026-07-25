import { Plus } from "lucide-react";
import Button from "../utils/Button/Button";
import { useState } from "react";
import AddNode from "./components/AddNode/AddNode";
import { NodeType } from "../../types/node";

export default function Sidebar() {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const buttons = [
    {
      label: "Add Start Node",
      className: "bg-start w-full",
      type: NodeType.START,
    },
    {
      label: "Add Task Node",
      className: "bg-task w-full",
      type: NodeType.TASK,
    },
    { label: "Add End Node", className: "bg-end w-full", type: NodeType.END },
  ];

  return (
    <>
      <section className="bg-zinc-900 fixed top-0 left-0 bottom-0 right-[60%] sm:right-[60%] md:right-[70%] lg:right-[80%] z-30">
        <div className="my-28 container">
          <h1 className="text-2xl font-semibold text-primary">Add Nodes</h1>
          <div className="mt-5 flex flex-col gap-3">
            {buttons.map((ele, i) => {
              return (
                <div
                  className=""
                  onClick={() => {
                    setActiveButton(ele.type);
                  }}
                  key={i}
                >
                  <Button
                    label={ele.label}
                    icon={<Plus className="w-5 h-5" />}
                    className={ele.className}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {activeButton && (
        <AddNode
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      )}
    </>
  );
}
