const originCode = `
class Page extends Component {
  componentDidMount() {
    console.log('页面加载完成...')
  }

  state = {
    title: '这是一个标题',
  }
}
`;

export const initSchema = {
  componentName: "Page",
  id: "ROOT_PAGE",
  props: {
    ref: "ROOT_PAGE",
    style: {
      height: "auto",
      "font-size": "16px",
    },
  },
  fileName: "/",
  hidden: false,
  condition: true,
  originCode,
};
