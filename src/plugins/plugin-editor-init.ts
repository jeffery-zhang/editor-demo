import {
  IPublicTypePlugin,
  IPublicModelPluginContext,
  IPublicTypeTransformedComponentMetadata,
} from "@alilc/lowcode-types";
import { injectAssets } from "@alilc/lowcode-plugin-inject";

import assets, { lowcodeAssets } from "@/assets/assets";

export const EditorInitPlugin: IPublicTypePlugin = (
  ctx: IPublicModelPluginContext
) => {
  return {
    async init() {
      const { material, project, config, common } = ctx;
      const scenarioName = `默认场景`;
      const scenarioDisplayName = scenarioName;
      const scenarioInfo = scenarioName;

      config.set("scenarioName", scenarioName);
      config.set("scenarioDisplayName", scenarioDisplayName);
      config.set("scenarioInfo", scenarioInfo);

      // 合并基本资产包和低代码模板描述
      material.setAssets(
        await injectAssets({
          ...assets,
          packages: [...assets.packages, ...lowcodeAssets.packages],
          components: [...assets.components, ...lowcodeAssets.components],
        })
      );
    },
  };
};

EditorInitPlugin.pluginName = "EditorInitPlugin";
EditorInitPlugin.meta = {
  preferenceDeclaration: {
    title: "保存插件配置",
    properties: [
      {
        key: "scenarioName",
        type: "string",
        description: "用于存储schema的key",
      },
      {
        key: "displayName",
        type: "string",
        description: "用于显示的场景名",
      },
      {
        key: "info",
        type: "object",
        description: "用于扩展信息",
      },
    ],
  },
};
