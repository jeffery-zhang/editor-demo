const assets = {
  packages: [
    {
      package: "moment",
      version: "2.24.0",
      urls: ["https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js"],
      library: "moment",
    },
    {
      package: "lodash",
      library: "_",
      urls: ["https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js"],
    },
    {
      title: "fusion组件库",
      package: "@alifd/next",
      version: "1.26.4",
      urls: [
        "https://g.alicdn.com/code/lib/alifd__next/1.26.4/next.min.css",
        "https://g.alicdn.com/code/lib/alifd__next/1.26.4/next-with-locales.min.js",
      ],
      library: "Next",
    },
    {
      package: "@alilc/lowcode-materials",
      version: "latest",
      library: "AlilcLowcodeMaterials",
      urls: [
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/render/default/view.js",
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/render/default/view.css",
      ],
      editUrls: [
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/view.js",
        "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/view.css",
      ],
      advancedUrls: {
        default: [
          "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/render/default/view.js",
          "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/render/default/view.css",
        ],
      },
      advancedEditUrls: {},
    },
  ],
  components: [
    {
      exportName: "AlilcLowcodeMaterialsMeta",
      npm: {
        package: "@alilc/lowcode-materials",
        version: "latest",
      },
      url: "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/meta.js",
      urls: {
        default:
          "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/meta.js",
        design:
          "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/meta.design.js",
      },
      advancedUrls: {
        default: [
          "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/meta.js",
        ],
        design: [
          "https://alifd.alicdn.com/npm/@alilc/lowcode-materials@latest/build/lowcode/meta.design.js",
        ],
      },
    },
  ],
  sort: {
    groupList: ["自定义模板", "精选组件"],
    categoryList: ["布局容器", "基础元素", "通用", "图表", "其他"],
  },
};

export default assets;

export const lowcodeAssets = {
  packages: [
    {
      id: "LCC-6B91-AE87JJVTDSQF26LK508C3-9EOQFOCL-0",
      type: "lowcode",
      version: "0.1.0",
      schema: {
        componentName: "Component",
        condition: true,
        id: "node_k8bnubvz",
        loopArgs: ["item", "index"],
        title: "",
        css: ".text_k8e4nalo {\n  font-size: 14px;\n  color: #666;\n}\n\n.div_k8e4nalp {\n  padding: 12px;\n  background: #f2f2f2;\n  border: 1px solid #ddd;\n}",
        methods: {
          onClick: {
            source:
              'function onClick() {\n  this.setState({\n    hello: "The lowcode world is so magic"\n  });\n}',
            type: "JSFunction",
            value:
              'function onClick() {\n  this.setState({\n    hello: "The lowcode world is so magic"\n  });\n}',
          },
        },
        defaultProps: {
          titleText: "我是标题",
        },
        props: {
          style: {
            mock: {},
            type: "JSExpression",
            value: "this.props.style",
          },
          className: "component_k8e4naln",
          cls: {
            mock: {},
            type: "JSExpression",
            value: "this.props.className",
          },
          fieldId: "symbol_k8bnubw4",
        },
        lifeCycles: {
          componentDidUpdate: {
            source:
              "function componentDidUpdate() {\n  console.log('componentDidUpdate');\n}",
            type: "JSFunction",
            value:
              "function componentDidUpdate() {\n  console.log('componentDidUpdate');\n}",
          },
          componentWillUnmount: {
            source:
              "function componentWillUnmount() {\n  console.log('componentWillUnmount');\n}",
            type: "JSFunction",
            value:
              "function componentWillUnmount() {\n  console.log('componentWillUnmount');\n}",
          },
          componentDidCatch: {
            source:
              "function componentDidCatch() {\n  console.log('componentDidCatch');\n}",
            type: "JSFunction",
            value:
              "function componentDidCatch() {\n  console.log('componentDidCatch');\n}",
          },
          componentDidMount: {
            source:
              "function componentDidMount() {\n  console.log('componentDidMount');\n}",
            type: "JSFunction",
            value:
              "function componentDidMount() {\n  console.log('componentDidMount');\n}",
          },
        },
        propTypes: [
          {
            defaultValue: "我是标题",
            display: "inline",
            name: "titleText",
            __sid: "item_l9fexhbc",
            setterProps: {},
            type: "string",
            title: "标题内容",
            setter: "StringSetter",
          },
        ],
        state: {
          hello: {
            type: "JSExpression",
            value: '"world"',
          },
        },
        dataSource: {
          list: [],
          sync: true,
        },
        children: [
          {
            condition: true,
            children: [
              {
                condition: true,
                id: "node_ocl9cku8455",
                componentName: "NextText",
                title: "标题",
                props: {
                  strong: false,
                  code: false,
                  children: {
                    mock: "欢迎使用低代码组件",
                    type: "JSExpression",
                    value: "this.props.titleText",
                  },
                  underline: false,
                  style: {
                    marginTop: "60px",
                  },
                  type: "h4",
                  delete: false,
                  mark: false,
                },
              },
              {
                condition: true,
                id: "node_ocl9mio96k2",
                componentName: "NextText",
                title: "正文",
                props: {
                  strong: false,
                  code: false,
                  children:
                    "物料研发新模式。通过低代码的形式生产组件，极低上手门槛，提供丰富的原子组件用于组合，完善的调试预览和组件生命周期控制。生产的组件既可以在低代码引擎项目中使用，也可以出码后在普通源码项目中使用。",
                  underline: false,
                  style: {
                    marginTop: "12px",
                  },
                  type: "body1",
                  delete: false,
                  mark: false,
                },
              },
            ],
            id: "node_ocl9cku8453",
            componentName: "Box",
            title: "Box",
            props: {
              spacing: 0,
              justify: "center",
              style: {
                width: "",
              },
              align: "center",
              direction: "column",
            },
          },
          {
            condition: true,
            id: "node_oclcoi4jah2",
            componentName: "Calendar",
            title: "卡片型",
            props: {
              shape: "card",
            },
          },
        ],
      },
    },
    {
      id: "65378e1c1d6836d459a61501",
      type: "lowcode",
      version: "1.0.0",
      schema: {
        componentName: "Component",
        condition: true,
        id: "node_lo576f1w",
        loopArgs: ["item", "index"],
        title: "",
        state: {},
        props: {},
        lifeCycles: {
          componentDidMount: {
            source:
              "function componentDidMount() {\n  console.log('组件加载完成...');\n}",
            type: "JSFunction",
            value:
              "function componentDidMount() {\n  console.log('组件加载完成...');\n}",
          },
        },
        methods: {
          getName: {
            source:
              "function getName() {\n    console.log(this.props)\n    const name = this.props.name\n    return `${name}$$`\n  }",
            type: "JSFunction",
            value:
              "function getName() {\n    console.log(this.props)\n    const name = this.props.name\n    return `${name}$$`\n  }",
          },
          test: {
            source:
              "test() {\n    console.log('component button clicked...')\n  }",
            type: "JSFunction",
            value:
              "test() {\n    console.log('component button clicked...')\n  }",
          },
        },
        originCode:
          "\nclass Component {\n  // 你可以在这里编写函数，并且与组件的事件进行绑定，支持JSX语法\n  componentDidMount() {\n    console.log('组件加载完成...')\n  }\n\n  getName() {\n    console.log(this.props)\n    const name = this.props.name\n    return `${name}$$`\n  }\n\n  test() {\n    console.log('component button clicked...')\n  }\n}\n",
        children: [
          {
            componentName: "Button",
            id: "node_oclo5ep2q31",
            props: {
              prefix: "next-",
              type: "primary",
              size: "medium",
              htmlType: "button",
              component: "button",
              children: "按钮",
              iconSize: "xxs",
              loading: false,
              text: false,
              warning: false,
              disabled: false,
              __events: {
                eventDataList: [
                  {
                    type: "componentEvent",
                    name: "onClick",
                    relatedEventName: "test",
                  },
                ],
                eventList: [
                  {
                    name: "onClick",
                    description:
                      "点击按钮的回调\n@param {Object} e Event Object",
                    disabled: true,
                  },
                  {
                    name: "onMouseUp",
                    disabled: false,
                  },
                ],
              },
              onClick: {
                type: "JSFunction",
                value:
                  "function(){return this.test.apply(this,Array.prototype.slice.call(arguments).concat([])) }",
              },
            },
            hidden: false,
            title: "",
            isLocked: false,
            condition: true,
            conditionGroup: "",
          },
          {
            componentName: "NextText",
            id: "node_oclo5ep2va1",
            props: {
              type: "h5",
              children: "姓名: ",
              mark: false,
              code: false,
              delete: false,
              underline: false,
              strong: false,
              prefix: "",
              classname: "",
            },
            hidden: false,
            title: "",
            isLocked: false,
            condition: true,
            conditionGroup: "",
          },
          {
            componentName: "NextText",
            id: "node_oclo5ep2va2",
            props: {
              type: "inherit",
              children: {
                type: "JSExpression",
                value: "this.getName()",
                mock: "",
              },
              mark: false,
              code: false,
              delete: false,
              underline: false,
              strong: false,
              prefix: "",
              classname: "",
            },
            hidden: false,
            title: "",
            isLocked: false,
            condition: true,
            conditionGroup: "",
          },
        ],
      },
    },
  ],
  components: [
    {
      componentId: "LCC-6B91-AE87JJVTDSQF26LK508C3-9EOQFOCL-0",
      componentName: "LccLcofqh6f",
      icon: "",
      devMode: "lowcode",
      group: "自定义模板",
      category: "低代码组件",
      title: "LCC3",
      tags: "",
      configure: {
        advanced: {
          initials: [
            {
              initial: {
                type: "JSFunction",
                value:
                  "(node) => {\n                                    return `${node.componentName.charAt(0).toLowerCase() + node.componentName.substr(1)}_${Math.random()\n                                        .toString(36)\n                                        .substring(6)}`;\n                                }",
              },
              name: "fieldId",
            },
          ],
          callbacks: {},
        },
        component: {
          isContainer: false,
          rootSelector: "",
          isModal: false,
        },
        props: [
          {
            name: "titleText",
            type: "field",
            title: {
              label: "标题内容",
            },
            setter: {
              componentName: "MixedSetter",
              props: {
                setters: [
                  {
                    componentName: "StringSetter",
                    initialValue: "我是标题",
                    props: {},
                  },
                  "VariableSetter",
                ],
              },
            },
            extraProps: {
              display: "inline",
            },
          },
          {
            name: "fieldId",
            type: "field",
            title: "唯一标识",
            setter: {
              componentName: "StringSetter",
              props: {},
            },
            extraProps: {
              display: "block",
            },
          },
          {
            display: "accordion",
            name: "__style__",
            title: "样式设置",
            setter: "StyleSetter",
          },
        ],
      },
      reference: {
        destructuring: false,
        id: "LCC-6B91-AE87JJVTDSQF26LK508C3-9EOQFOCL-0",
        version: "0.1.0",
      },
      snippets: [
        {
          schema: {
            componentName: "LccLcofqh6f",
            props: {
              titleText: "我是标题",
            },
          },
          title: "LCC3",
        },
      ],
      docUrl: "",
    },
    {
      componentId: "65378e1c1d6836d459a61501",
      componentName: "CustomTemplate-lo44ipx2",
      devMode: "lowcode",
      group: "自定义模板",
      category: "低代码组件",
      title: "模板01",
      reference: {
        destructuring: false,
        id: "65378e1c1d6836d459a61501",
        version: "1.0.0",
      },
      configure: {
        props: [
          {
            defaultValue: "zhang",
            display: "inline",
            initialValue: "zhang",
            name: "name",
            title: {
              label: "姓名",
            },
            setter: {
              componentName: "StringSetter",
            },
          },
        ],
      },
      snippets: [
        {
          screenshot: "",
          title: "模板01",
          schema: {
            componentName: "CustomTemplate-lo44ipx2",
            props: {
              name: "zhang",
            },
          },
        },
      ],
    },
  ],
};
