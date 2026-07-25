import { createContext, useState } from "react";
import type { INode } from "../types/node";
import type { IEdge } from "../types/edge";
import type { FormType } from "../types/form";

export const FlowContext = createContext<any>(null);

type Props = {
  children: React.ReactNode;
};

export const FlowProvider = ({ children }: Props) => {
  // open close details panel
  const [formType, setFormType] = useState<FormType | null>(null);
  const [nodes, setNodes] = useState<INode[]>(
    JSON.parse(localStorage.getItem("nodes")!) || [],
  );
  const [edges, setEdges] = useState<IEdge[]>(
    JSON.parse(localStorage.getItem("edges")!) || [],
  );
  const [selectedNode, setSelectedNode] = useState<INode | null>(null);

  const saveData = () => {
    localStorage.setItem("nodes", JSON.stringify(nodes));
    localStorage.setItem("edges", JSON.stringify(edges));
  };

  const addNode = (node: INode) => {
    setNodes((prevNodes) => [...prevNodes, node]);
  };

  const deleteNode = (id: string) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id));
  };

  const updateNode = (id: string, updatedNode: INode) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => (node.id === id ? updatedNode : node)),
    );
  };

  return (
    <FlowContext.Provider
      value={{
        nodes,
        setNodes,
        edges,
        setEdges,
        selectedNode,
        setSelectedNode,
        addNode,
        deleteNode,
        updateNode,
        saveData,
        formType,
        setFormType,
      }}
    >
      {children}
    </FlowContext.Provider>
  );
};
