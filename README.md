# text2image

`text2image` 是一个用于生成快讯图片的 npm 包。它允许用户根据自定义的标题、内容、时间以及背景图片，快速生成漂亮的快讯图片，适用于新闻、公告等场景。

## 安装

你可以通过 npm 安装 `text2image` 包：

```bash
npm install @gbbits/text2image
```

## 使用方法

```javascript
const generateNewsImage = require('@gbbits/text2image');

async function generateNews() {
  const title = 'Breaking News';
  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const time = '2024-03-12 10:30';
  const backgroundImage = 'background.jpg'; // 替换为你的背景图片路径

  const imageData = await generateNewsImage(title, content, time, backgroundImage);
  // 处理生成的 imageData
}

generateNews();
```

## 参数

- `title`: 快讯标题
- `content`: 快讯内容
- `time`: 快讯时间
- `backgroundImage`: 自定义背景图片路径

## 示例

你可以查看 `examples` 目录下的示例代码，了解如何在不同环境中使用 `text2image`。

## 注意事项

- 请确保提供的背景图片路径正确，否则可能导致生成的图片不符合预期。

## 贡献

如果你发现了 bug 或有任何改进意见，欢迎提交 issue 或 PR。

## 许可证

MIT License
