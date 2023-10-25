import { FC, memo, useEffect, useState } from "react";
import { useSearchParams } from "umi";
import ReactRenderer from "@alilc/lowcode-react-renderer";
import { createFetchHandler } from "@alilc/lowcode-datasource-fetch-handler";

import { parseAssets } from "@/assets/parseAssets";
import assets, { lowcodeAssets } from "@/assets/assets";
import {
  getPackagesFromLocalStorage,
  getSchemaFromLocalStorage,
} from "@/services/schema";

export default function PreviewPage() {
  return <Viewer />;
}

export const Viewer: FC = memo(() => {
  const [data, setData] = useState<{
    components: any;
    schema: any;
    messages: any;
  }>({
    components: null,
    schema: null,
    messages: null,
  });
  const [query] = useSearchParams();
  const lang = query.get("lang") || "zh-CN";

  async function init() {
    const projectSchema = getSchemaFromLocalStorage("默认场景");
    const packages = getPackagesFromLocalStorage("默认场景");
    const { componentsMap, componentsTree, i18n } = projectSchema;
    const schema = componentsTree[0] || null;
    const map: any = {};

    // 获取低代码模板列表
    /* eslint-disable-next-line */
    const fullAssets = {
      ...assets,
      packages: [...assets.packages, ...lowcodeAssets.packages],
      components: [...assets.components, ...lowcodeAssets.components],
    };

    const { components: assetsComponents } = {
      components: fullAssets.components,
    };

    componentsMap.forEach((component: any) => {
      map[component.componentName] = component;
    });

    const { components } = await parseAssets(assetsComponents, packages);

    setData({
      schema,
      components,
      messages: i18n,
    });
  }

  const { schema, components, messages } = data;

  useEffect(() => {
    init();
  }, []);

  if (!schema || !components) {
    return null;
  }

  return (
    <ReactRenderer
      id="lc_viewer"
      components={components}
      schema={schema}
      locale={lang}
      appHelper={{
        requestHandlersMap: {
          fetch: createFetchHandler(),
        },
      }}
      messages={messages}
    />
  );
});

Viewer.displayName = "ViewerComponent";
