import { history } from "umi";
import { plugins, material, project } from "@alilc/lowcode-engine";
import InjectPlugin from "@alilc/lowcode-plugin-inject";
import ComponentPanelPlugin from "@alilc/lowcode-plugin-components-pane";
import SchemaPlugin from "@alilc/lowcode-plugin-schema";
import UndoRedoPlugin from "@alilc/lowcode-plugin-undo-redo";
import ZhEnPlugin from "@alilc/lowcode-plugin-zh-en";
// import SetRefPropPlugin from '@alilc/lowcode-plugin-set-ref-prop'
import SimulatorResizerPlugin from "@alilc/lowcode-plugin-simulator-select";
import DataSourcePanePlugin from "@alilc/lowcode-plugin-datasource-pane";
import CodeEditorPlugin from "@alilc/lowcode-plugin-code-editor";
import { injectAssets } from "@alilc/lowcode-plugin-inject";

import { EditorInitPlugin } from "./plugin-editor-init";
import { DefaultSettersRegistryPlugin } from "./default-setter-registry";
import { SaveSchemaPlugin } from "./save-schema-plugin";
import { PreviewPlugin } from "./preview-plugin";
import {
  setSchemaToLocalStorage,
  setPackagesToLocalStorage,
  resetSchema,
} from "@/services/schema";
import assets from "@/schemas/assets";

export async function registerPlugins() {
  await plugins.register(InjectPlugin);

  await plugins.register(EditorInitPlugin as any);

  // 注册官方setters插件和事件, 变量绑定面板
  await plugins.register(DefaultSettersRegistryPlugin);

  // 注册物料面板
  await plugins.register(ComponentPanelPlugin);

  // 注册Schema展示面板
  await plugins.register(SchemaPlugin as any, { isProjectSchema: true });

  // 注册前进/回退
  await plugins.register(UndoRedoPlugin as any);

  // 注册中英文切换
  await plugins.register(ZhEnPlugin as any);

  // 注册设置面板高级设置中set ref id功能
  // await plugins.register(SetRefPropPlugin)

  // 注册屏幕适配组件
  await plugins.register(SimulatorResizerPlugin as any);

  // 注册数据源面板
  await plugins.register(DataSourcePanePlugin as any, {
    // 配置数据源可选类型
    dataSourceTypes: [
      {
        type: "fetch",
      },
    ],
  });

  // 注册组件源码编辑面板
  await plugins.register(CodeEditorPlugin as any);

  // 注册自定义保存Schema插件
  await plugins.register(SaveSchemaPlugin, {
    onSave: () => {
      setSchemaToLocalStorage();
      setPackagesToLocalStorage();
    },
    onReset: () => resetSchema(),
  });

  // 注册自定义预览插件
  await plugins.register(PreviewPlugin, {
    onPreview: () => {
      setSchemaToLocalStorage();
      setPackagesToLocalStorage();
      window.open("http://localhost:8000/preview", "_blank");
    },
  });
}
