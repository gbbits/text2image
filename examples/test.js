const fs = require('fs');
const text2image = require('../src/text2image');

async function testText2image() {
  // 提供必要的参数
  const title = 'Breaking News';
  const content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  const time = '2024-03-12 10:30';

  // 自定义背景图片路径
  const backgroundImage = './background.jpg';

  // 生成快讯图片
  const imageData = await text2image(title, content, time, backgroundImage);

  // 将生成的图片数据保存到文件
  fs.writeFileSync('./news-image.jpg', imageData);

  console.log('快讯图片生成成功！已保存为 news-image.jpg');
}

// 运行测试
testText2image();
