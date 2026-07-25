import { Handle, Position } from "@xyflow/react";

export default function EndNode({ data }: any) {
  return (
    <div className="node bg-end ">
      <Handle type="target" position={Position.Top} />

      <h3>{data.name}</h3>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
