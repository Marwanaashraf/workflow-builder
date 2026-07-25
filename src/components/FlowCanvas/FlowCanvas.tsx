import { addEdge, Background, ReactFlow, type Node } from "@xyflow/react";
import { FlowContext } from "../../context/FlowContext";
import { useContext,  useState } from "react";
import StartNode from "../../nodes/StartNode";
import TaskNode from "../../nodes/TaskNode";
import EndNode from "../../nodes/EndNode";
import type { IEdge } from "../../types/edge";
import { applyNodeChanges } from "@xyflow/react";
import { FormType } from "../../types/form";
import DeletePrompt from "./components/DeletePrompt/DeletePrompt";
export default function FlowCanvas() {
  const [isPrompt, setPrompt] = useState<boolean>(false);
  const { nodes, edges, setSelectedNode, setEdges, setNodes, setFormType } =
    useContext(FlowContext)!;

  const nodesTypes = {
    start: StartNode,
    task: TaskNode,
    end: EndNode,
  };
  const [selectedEdge, setSelectedEdge] = useState<IEdge | null>(null);

  return (
    <>
      <div style={{ width: "100vw", height: "100vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodesTypes}
          fitView
          onNodeClick={(_: React.MouseEvent, node) => {
            setSelectedNode(node);
            setFormType(FormType.UPDATE);
          }}
          onEdgeClick={(_: React.MouseEvent, edge) => {
            setSelectedEdge(edge);
            setPrompt(true);
          }}
          onConnect={(connection) => {
            setEdges((prev: IEdge[]) => addEdge(connection, prev));
          }}
          onNodesChange={(changes) => {
            setNodes((prev: Node[]) => applyNodeChanges(changes, prev));
          }}
        >
          <Background />
        </ReactFlow>
      </div>
      {isPrompt && (
        <DeletePrompt
          selectedEdge={selectedEdge}
          setPrompt={setPrompt}
          setSelectedEdge={setSelectedEdge}
        />
      )}
    </>
  );
}
