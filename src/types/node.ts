

export const NodeType = {
  START: "start",
  TASK: "task",
  END: "end",
} as const;
export type NodeType = (typeof NodeType)[keyof typeof NodeType];
export interface INodeData {
  name: string;
  notes: string;
}
export interface INode {
  id: string;
  type: NodeType;
  position: { x: number; y: number };
  data: INodeData;
}

