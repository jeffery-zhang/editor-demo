import {
  IPublicModelPluginContext,
  IPublicTypePlugin,
} from "@alilc/lowcode-types";

import { SaveSchema } from "./save-schema.components";

export const SaveSchemaPlugin: IPublicTypePlugin = (
  ctx: IPublicModelPluginContext,
  options: any
) => ({
  async init() {
    const { skeleton } = ctx;

    skeleton.add({
      area: "topArea",
      type: "Widget",
      name: "SaveSchema",
      content: SaveSchema,
      props: {
        align: "right",
      },
      contentProps: {
        onSave: () => options.onSave(),
        onReset: () => options.onReset(),
      },
    });
  },
});

SaveSchemaPlugin.pluginName = "SaveSchema";
SaveSchemaPlugin.meta = {
  preferenceDeclaration: {
    title: "属性",
    properties: [
      {
        key: "onSave",
        type: "function",
        description: "点击保存回调",
      },
      {
        key: "onReset",
        type: "function",
        description: "点击重置回调",
      },
    ],
  },
};
