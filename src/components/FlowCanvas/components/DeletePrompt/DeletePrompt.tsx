import React, { useContext } from "react";
import type { IEdge } from "../../../../types/edge";
import { Trash2 } from "lucide-react";
import { FlowContext } from "../../../../context/FlowContext";
type DeletePromptPorps = {
  selectedEdge: IEdge | null;
  setSelectedEdge: React.Dispatch<React.SetStateAction<IEdge | null>>;
  setPrompt: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function DeletePrompt({
  selectedEdge,
  setSelectedEdge,
  setPrompt,
}: DeletePromptPorps) {
  const { setEdges } = useContext(FlowContext);
  return (
    <div
      onClick={() => {
        setPrompt(false);
      }}
      className="bg-black/50 fixed inset-0 z-50 flex justify-center items-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-10/12 sm:w-7/12 md:w-5/12 lg:w-4/12 xl:w-3/12 bg-zinc-900 border border-zinc-800 rounded-xl p-3 space-y-3"
      >
        <h3 className="text-3xl text-red-700 font-semibold">Delete</h3>
        <hr className="my-2 border-zinc-800" />
        <p className="text-lg">Are you sure you want to delete this edge?</p>
        <hr className="my-2 border-zinc-800" />
        <div className="flex justify-center items-center gap-3">
          <button
            onClick={() => {
              setPrompt(false);
            }}
            className="bg-zinc-600 btn w-full"
          >
            cancel
          </button>
          <button
            onClick={() => {
              setEdges((prev: IEdge[]) =>
                prev.filter((edge) => edge.id !== selectedEdge?.id),
              );
              setSelectedEdge(null);
              setPrompt(false);
            }}
            className="bg-red-700 btn w-full"
          >
            <Trash2 className="w-5 h-5" />
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  );
}
