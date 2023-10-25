import { FC } from "react";
import { Button } from "@alifd/next";

interface IProps {
  onPreview: () => void;
}

export const Preview: FC<IProps> = ({ onPreview }) => {
  return (
    <Button type="primary" onClick={() => onPreview?.()}>
      预览
    </Button>
  );
};
