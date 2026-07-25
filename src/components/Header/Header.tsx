import { Save } from "lucide-react";

import { useContext } from "react";
import { FlowContext } from "../../context/FlowContext";
import { toast } from "react-toastify";
import { FormType } from "../../types/form";

export default function Header() {
  const { saveData, setFormType } = useContext(FlowContext)!;
  return (
    <nav className="bg-zinc-900 fixed top-0 left-0 right-0 z-40 px-8 py-5 border-b border-primary/30">
      <div className="w-full h-full flex justify-between">
        {/* logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Workflow <span className="text-primary">Builder</span>
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {/* add button */}
          <div
            onClick={() => {
              setFormType(FormType.Add);
            }}
          >
            <button className="btn bg-blue-600">Add Node</button>
          </div>

          {/* save button */}
          <div
            onClick={() => {
              saveData();
              toast.success("Workflow saved successfully!");
            }}
          >
            <button className={`bg-primary btn`}>
              <Save className="w-5 h-5" />
              <span>Save</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
