import { useEffect, FC, useState } from "react";
import { plugins, common, config, project } from "@alilc/lowcode-engine";
import { createFetchHandler } from "@alilc/lowcode-datasource-fetch-handler";

import { registerPlugins } from "@/plugins/registerPlugins";
import { getSchemaFromLocalStorage } from "@/services/schema";

export default function HomePage() {
  return <EditorView />;
}

export const EditorView: FC = () => {
  const [editorInited, setEditorInited] = useState<boolean>(false);

  // 异步初始化组件
  const initEditor = async () => {
    if (!editorInited) {
      await registerPlugins();
      config.setConfig({
        locale: "zh-CN",
        enableCondition: true,
        enableCanvasLock: true,
        supportVariableGlobally: true,
        requestHandlersMap: {
          fetch: createFetchHandler(),
        },
      });
      try {
        // init方法不传参ts会报错, 但传参会导致pluginPreference.get方法报错, 故关闭ts提示
        // @ts-ignore
        await plugins.init();
        setEditorInited(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  const getProjectSchema = () => {
    const schema = getSchemaFromLocalStorage("默认场景");
    project.importSchema(schema!);
  };

  useEffect(() => {
    initEditor();
    getProjectSchema();
  }, []);

  if (!editorInited) {
    return <div>loading...</div>;
  }
  const Workbench = common.skeletonCabin.Workbench;
  return <Workbench />;
};
