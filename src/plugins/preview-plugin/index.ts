import {
  IPublicModelPluginContext,
  IPublicTypePlugin,
} from "@alilc/lowcode-types";

import { Preview } from "./preview.component";

export const PreviewPlugin: IPublicTypePlugin = (
  ctx: IPublicModelPluginContext,
  options: any
) => {
  return {
    async init() {
      const { skeleton } = ctx;

      skeleton.add({
        area: "topArea",
        type: "Dock",
        name: "preview",
        content: Preview,
        props: {
          align: "right",
        },
        contentProps: {
          onPreview: () => options.onPreview(),
        },
      });
    },
  };
};

PreviewPlugin.pluginName = "Preview";
PreviewPlugin.meta = {
  preferenceDeclaration: {
    title: "属性",
    properties: [
      {
        key: "onPreview",
        type: "function",
        description: "点击预览回调",
      },
    ],
  },
};
