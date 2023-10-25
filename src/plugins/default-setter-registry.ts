// @ts-ignore
import AliLowCodeEngineExt from "@alilc/lowcode-engine-ext";
import {
  IPublicModelPluginContext,
  IPublicTypePlugin,
} from "@alilc/lowcode-types";

export const DefaultSettersRegistryPlugin: IPublicTypePlugin = (
  ctx: IPublicModelPluginContext
) => {
  return {
    async init() {
      const { setterMap, pluginMap } = AliLowCodeEngineExt;
      const { setters, skeleton } = ctx;
      // 注册setterMap
      setters.registerSetter(setterMap);
      // 注册事件绑定面板
      skeleton.add({
        area: "centerArea",
        type: "Widget",
        content: pluginMap.EventBindDialog,
        name: "eventBindDialog",
        props: {},
      });
      // 注册变量绑定面板
      skeleton.add({
        area: "centerArea",
        type: "Widget",
        content: pluginMap.VariableBindDialog,
        name: "variableBindDialog",
        props: {},
      });
    },
  };
};

DefaultSettersRegistryPlugin.pluginName = "DefaultSettersRegistryPlugin";
