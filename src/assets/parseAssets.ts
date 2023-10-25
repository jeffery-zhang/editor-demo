import { createElement, Component } from "react";
import ReactRenderer from "@alilc/lowcode-react-renderer";
import { buildComponents, AssetLoader } from "@alilc/lowcode-utils";
import { injectComponents } from "@alilc/lowcode-plugin-inject";
import { IPublicTypeComponentSchema } from "@alilc/lowcode-types";

// 根据package中的低代码组件描述生成react组件
export function generateLowCodeComponent(
  schema: IPublicTypeComponentSchema,
  components: any
) {
  return class LowcodeComp extends Component {
    render(): React.ReactNode {
      return createElement(ReactRenderer, {
        ...this.props,
        schema,
        components,
        designMode: "preview",
      });
    }
  };
}

export async function parseAssets(assetsComponents: any, packages: any[]) {
  const libraryAsset: string[] = [];
  const libraryMap: any = {};
  const packagesMap: any = {};
  packages.forEach((pkg: any) => {
    const { package: _package, library, urls, renderUrls, id } = pkg;
    if (_package) {
      libraryMap[id || _package] = library;
    }
    packagesMap[id || _package] = pkg;
    if (renderUrls) {
      libraryAsset.push(renderUrls);
    } else if (urls) {
      libraryAsset.push(urls);
    }
  });

  const assetLoader = new AssetLoader();
  await assetLoader.load(libraryAsset);

  let newComponents = assetsComponents.filter(
    (comp: any) => comp.componentName !== "page"
  );
  if (assetsComponents && assetsComponents.length) {
    const componentDescriptions: any[] = [];
    const remoteComponentDescriptions: any[] = [];
    assetsComponents.forEach((component: any) => {
      if (!component) {
        return;
      }
      if (component.exportName && component.url) {
        remoteComponentDescriptions.push(component);
      } else {
        componentDescriptions.push(component);
      }
    });
    newComponents = [...componentDescriptions];

    // 如果有远程组件描述协议，则自动加载并补充到资产包中，同时出发 designer.incrementalAssetsReady 通知组件面板更新数据
    if (remoteComponentDescriptions && remoteComponentDescriptions.length) {
      await Promise.all(
        remoteComponentDescriptions.map(async (component: any) => {
          const { exportName, url, npm } = component;
          await new AssetLoader().load(url);
          function setAssetsComponent(component: any, extraNpmInfo: any = {}) {
            const components = component.components;
            if (Array.isArray(components)) {
              components.forEach((d) => {
                newComponents = newComponents.concat(
                  {
                    npm: {
                      ...npm,
                      ...extraNpmInfo,
                    },
                    ...d,
                  } || []
                );
              });
              return;
            }
            newComponents = newComponents.concat(
              {
                npm: {
                  ...npm,
                  ...extraNpmInfo,
                },
                ...component.components,
              } || []
            );
          }
          function setArrayAssets(
            value: any[],
            preExportName = "",
            preSubName = ""
          ) {
            value.forEach((d: any, i: number) => {
              const exportName = [preExportName, i.toString()]
                .filter((d) => !!d)
                .join(".");
              const subName = [preSubName, i.toString()]
                .filter((d) => !!d)
                .join(".");
              Array.isArray(d)
                ? setArrayAssets(d, exportName, subName)
                : setAssetsComponent(d, {
                    exportName,
                    subName,
                  });
            });
          }
          if (window[exportName]) {
            if (Array.isArray(window[exportName])) {
              setArrayAssets(window[exportName] as any);
            } else {
              setAssetsComponent(window[exportName] as any);
            }
          }
          return window[exportName];
        })
      );
    }
  }
  const lowcodeComponentsArray: any[] = [];
  const proCodeComponentsMap = newComponents.reduce((acc: any, cur: any) => {
    if (
      (cur.devMode || "").toLowerCase() === "lowcode" &&
      cur.componentName !== "Page"
    ) {
      console.log(cur);
      lowcodeComponentsArray.push(cur);
    } else {
      acc[cur.componentName] = {
        ...(cur.reference || cur.npm),
        componentName: cur.componentName,
      };
    }
    return acc;
  }, {});

  function genLowCodeComponentsMap(components: any) {
    const lowcodeComponentsMap: any = {};
    lowcodeComponentsArray.forEach((lowcode) => {
      const id = lowcode.reference?.id;
      const schema = packagesMap[id]?.schema;
      const comp = generateLowCodeComponent(schema, {
        ...components,
        ...lowcodeComponentsMap,
      });
      lowcodeComponentsMap[lowcode.componentName] = comp;
    });
    return lowcodeComponentsMap;
  }

  const components = await injectComponents(
    // @ts-ignore
    buildComponents(libraryMap, proCodeComponentsMap)
  );

  const lowCodeComponents = genLowCodeComponentsMap(components);

  console.log("parsed components", { ...components, ...lowCodeComponents });

  return {
    components: { ...components, ...lowCodeComponents },
  };
}
