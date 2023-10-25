import { FC } from "react";
import { Button } from "@alifd/next";

interface IProps {
  onSave: () => void;
  onReset: () => void;
}

export const SaveSchema: FC<IProps> = ({ onSave, onReset }) => {
  return (
    <div>
      <Button onClick={() => onReset?.()} style={{ marginRight: 8 }}>
        重置
      </Button>
      <Button type="primary" onClick={() => onSave?.()}>
        保存
      </Button>
    </div>
  );
};
