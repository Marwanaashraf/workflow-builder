import { Handle, Position } from "@xyflow/react";

export default function StartNode({ data }: any) {
  return (
    <div className="node bg-start ">
      <Handle type="target" position={Position.Top} />

      <h3>{data.name}</h3>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
