import { material, project, config } from "@alilc/lowcode-engine";
import { filterPackages } from "@alilc/lowcode-plugin-inject";
import {
  IPublicTypeProjectSchema,
  IPublicEnumTransformStage,
} from "@alilc/lowcode-types";

import { initSchema } from "@/assets/initSchema";

// 根据引擎注入的组件列表生成页面schema
export const generateInitSchema = (): IPublicTypeProjectSchema => {
  return {
    componentsTree: [initSchema as any],
    componentsMap: material.componentsMap as any,
    version: "1.0.0",
    i18n: {
      "zh-CN": {
        "i18n-hello": "你好",
      },
      "en-US": {
        "i18n-hello": "Hello",
      },
    },
  };
};

// 从本地获取页面schema
export const getSchemaFromLocalStorage = (scenarioName: string) => {
  const schema = window.localStorage.getItem(`${scenarioName}:schema`);
  console.log("getSchemaFromLocalStorage: ", scenarioName);
  if (!schema) return generateInitSchema();
  return JSON.parse(schema as any);
};

// 项目api获取schema
export const getSchemaFromProject = (): any => {
  return project.exportSchema(IPublicEnumTransformStage.Save);
};

// 保存schema到本地
export const setSchemaToLocalStorage = () => {
  const scenarioName = config.get("scenarioName");
  const schema = getSchemaFromProject();
  window.localStorage.setItem(`${scenarioName}:schema`, JSON.stringify(schema));
  alert("本地保存成功");
};

// 从本地获取packages
export const getPackagesFromLocalStorage = (scenarioName: string) => {
  const packages = window.localStorage.getItem(`${scenarioName}:packages`);
  if (!packages) return {};
  return JSON.parse(packages as any);
};

// 获取项目中assets的packages
export const getAssetsPackages = async () => {
  return await filterPackages(material.getAssets()?.packages);
};

// 保存packages到本地
export const setPackagesToLocalStorage = async () => {
  const scenarioName = config.get("scenarioName");
  const packages = await getAssetsPackages();
  window.localStorage.setItem(
    `${scenarioName}:packages`,
    JSON.stringify(packages)
  );
};

// 重置页面
export const resetSchema = async () => {
  const defaultSchema = generateInitSchema();

  project.importSchema(defaultSchema as any);
  project.simulatorHost?.rerender();

  alert("成功重置页面schema");
};
