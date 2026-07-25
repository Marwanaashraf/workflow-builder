import {
  addEdge,
  Background,
  ReactFlow,
  type Edge,
  type Node,
} from "@xyflow/react";
import { FlowContext } from "../../context/FlowContext";
import { useContext, useEffect, useState } from "react";
import StartNode from "../../nodes/StartNode";
import TaskNode from "../../nodes/TaskNode";
import EndNode from "../../nodes/EndNode";
import type { IEdge } from "../../types/edge";
import { applyNodeChanges } from "@xyflow/react";
import { FormType } from "../../types/form";
export default function FlowCanvas() {
  const { nodes, edges, setSelectedNode, setEdges, setNodes, setFormType } =
    useContext(FlowContext)!;
  const nodesTypes = {
    start: StartNode,
    task: TaskNode,
    end: EndNode,
  };
  const [selectedEdge, setSelectedEdge] = useState<Edge | null>(null);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Delete" && selectedEdge) {
        setEdges((prev: IEdge[]) =>
          prev.filter((edge) => edge.id !== selectedEdge.id),
        );
        setSelectedEdge(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedEdge]);
  return (
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
  );
}
