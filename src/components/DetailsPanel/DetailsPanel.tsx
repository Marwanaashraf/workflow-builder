import { useContext } from "react";
import { useFormik } from "formik";
import { Trash2, X } from "lucide-react";
import { FlowContext } from "../../context/FlowContext";
import FormField from "../utils/FormField/FormField";
import { FormType } from "../../types/form";
import { NodeType } from "../../types/node";
interface FormikTypes {
  name: string;
  type: string;
  x: number;
  y: number;
  notes: string;
}
export default function DetailsPanel() {
  const {
    selectedNode,
    setSelectedNode,
    updateNode,
    deleteNode,
    addNode,
    formType,
    setFormType,
  } = useContext(FlowContext)!;
  const isAddMode = formType === FormType.Add;
  const closePanel = () => {
    setFormType(null);
    setSelectedNode(null);
  };

  const updateSelectedNode = (values: FormikTypes) => {
    if (!selectedNode) return;

    updateNode(selectedNode.id, {
      ...selectedNode,
      type: values.type,
      position: {
        x: Number(values.x),
        y: Number(values.y),
      },
      data: {
        ...selectedNode.data,
        name: values.name,
        notes: values.notes,
      },
    });
    closePanel();
  };

  const insertNode = (values: FormikTypes) => {
    const nodeData = {
      id: crypto.randomUUID(),
      type: values.type,
      position: { x: Number(values.x), y: Number(values.y) },
      data: {
        name: values.name,
        notes: values.notes,
      },
    };
    addNode(nodeData);
    formik.resetForm();
    closePanel();
  };

  const deleteSelectedNode = () => {
    if (!selectedNode) return;

    deleteNode(selectedNode.id);
    closePanel();
  };
  const initialValues: FormikTypes = {
    name: selectedNode?.data.name ?? "",
    type: selectedNode?.type ?? NodeType.START,
    x: selectedNode?.position.x ?? 0,
    y: selectedNode?.position.y ?? 0,
    notes: selectedNode?.data.notes ?? "",
  };
  const formik = useFormik<FormikTypes>({
    enableReinitialize: true,
    initialValues,
    onSubmit: isAddMode ? insertNode : updateSelectedNode,
  });

  return (
    <section
      className="fixed inset-0 z-50 bg-black/40"
      onClick={() => {
        closePanel();
      }}
    >
      <div className="relative w-full h-full">
        <button
          type="button"
          onClick={() => {
            closePanel();
          }}
          className="absolute top-2 right-2 z-10"
        >
          <X className="w-6 h-6 text-zinc-400 hover:text-primary cursor-pointer" />
        </button>

        <div
          onClick={(e) => e.stopPropagation()}
          className="
            absolute top-0 bottom-0
            right-0
            left-[20%] sm:left-[30%] md:left-[40%]
            lg:left-[50%] xl:left-[60%]
            bg-zinc-900 p-5
          "
        >
          <form onSubmit={formik.handleSubmit}>
            <h2 className="my-6 text-3xl font-bold text-primary">
              {isAddMode ? "Add Node" : "Node Details"}
            </h2>

            <div className="space-y-4">
              <FormField
                label="Node Name"
                name="name"
                formik={formik}
                placeholder="Task 1"
              />
              <div>
                <label htmlFor="type">Node Type</label>
                <select
                  className="form-input w-full h-10 pr-10 "
                  name="type"
                  id="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Choose Node Type
                  </option>
                  <option value={NodeType.START}>Start</option>
                  <option value={NodeType.TASK}>Task</option>
                  <option value={NodeType.END}>End</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
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

              <FormField
                label="Notes"
                name="notes"
                formik={formik}
                textarea
                placeholder="Enter notes here..."
              />
            </div>
            {isAddMode ? (
              <button className="bg-primary w-full btn" type="submit">
                Add Node
              </button>
            ) : (
              <div className="flex gap-2 mt-6">
                <button type="submit" className="w-full btn bg-primary">
                  Update Node
                </button>

                <button
                  type="button"
                  onClick={deleteSelectedNode}
                  className="w-full btn bg-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                  <span>Delete Node</span>
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
