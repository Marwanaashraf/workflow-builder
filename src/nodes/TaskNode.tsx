import { Handle, Position } from "@xyflow/react";

export default function TaskNode({ data }: any) {
  return (
    <div className="node bg-task ">
      <Handle type="target" position={Position.Top} />

      <h3>{data.name}</h3>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
