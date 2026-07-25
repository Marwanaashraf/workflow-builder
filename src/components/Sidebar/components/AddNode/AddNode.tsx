import { useFormik } from "formik";
import FormField from "../../../utils/FormField/FormField";
import { FlowContext } from "../../../../context/FlowContext";
import { useContext } from "react";
import { X } from "lucide-react";

type AddNodeProps = {
  activeButton: string | null;
  setActiveButton: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function AddNode({
  activeButton,
  setActiveButton,
}: AddNodeProps) {
  const { addNode } = useContext(FlowContext);
  const submitForm = (values: any) => {
    console.log(values);
    const nodeData = {
      id: crypto.randomUUID(),
      type: activeButton,
      position: { x: values.x, y: values.y },
      data: {
        name: values.name || activeButton,
        notes: values.notes,
      },
    };
    addNode(nodeData);
    setActiveButton(null);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      type: activeButton,
      x: 0,
      y: 0,
      notes: "",
    },
    onSubmit: submitForm,
  });
  return (
    <div
      onClick={() => setActiveButton(null)}
      className="bg-black/50 fixed inset-0 z-50 flex justify-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-11/12 sm:w-9/12 md:w-7/12 lg:w-6/12 xl:w-5/12  bg-zinc-900 rounded-xl border border-zinc-700 relative"
      >
        <form onSubmit={formik.handleSubmit} className="p-5">
          <div className="my-3">
            <h2 className="text-3xl font-bold text-center text-primary">
              Add Node
            </h2>
          </div>
          <div className="my-3">
            <FormField
              label="Node Name"
              name="name"
              formik={formik}
              placeholder="task1"
              required
            />
          </div>
          <div className="my-3">
            <FormField
              label="Node Type"
              name="type"
              formik={formik}
              value={activeButton}
              readOnly={true}
            />
          </div>
          <div className="grid grid-cols-2 gap-3 my-3">
            <FormField
              label="Position X"
              name="x"
              formik={formik}
              placeholder="50"
            />
            <FormField
              label="Position Y"
              name="y"
              formik={formik}
              placeholder="100"
            />
          </div>
          <div className="my-3">
            <FormField
              label="Notes"
              name="notes"
              formik={formik}
              placeholder="Enter notes here..."
              textarea={true}
            />
          </div>
          <div>
            <button className="bg-primary w-full btn" type="submit">
              Add Node
            </button>
          </div>
        </form>
        <div
          onClick={() => {
            setActiveButton(null);
          }}
          className="absolute top-2 right-2"
        >
          <X className="w-6 h-6 text-zinc-400 hover:text-primary cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
