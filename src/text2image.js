const { string } = require('@gbbits/data-tool');
const { createCanvas, loadImage, registerFont } = require('canvas');
const path = require('path');

// 设置字体文件路径
const fontPath = path.resolve(__dirname, 'fonts', 'Roboto-Regular.ttf');

// 注册字体
registerFont(fontPath, { family: 'Roboto' });

async function text2image(title, content, time, backgroundImage) {
    // 加载自定义背景图片并获取宽高
  const background = await loadImage(backgroundImage);
  const width = background.width;
  const height = background.height;
  // 创建画布
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 绘制背景图片
  ctx.drawImage(background, 0, 0, width, height);

  // 设置标题文本样式
  ctx.font = 'bold 20px Roboto';
  ctx.fillStyle = '#ffffff'; // 设置标题文本颜色
  ctx.textAlign = 'center'; // 设置文本水平居中

  // 绘制标题
  ctx.fillText(string.trimString(title), canvas.width / 2, 40);

  // 设置内容文本样式
  ctx.font = '16px Roboto';
  ctx.fillStyle = '#ffffff'; // 设置内容文本颜色
  ctx.textAlign = 'left'; // 设置文本水平左对齐

  // 绘制内容并自动换行
  wrapText(ctx, content, 20, 80, canvas.width - 40, 20);

  // 设置时间文本样式
  ctx.font = '12px Roboto';
  ctx.fillStyle = '#ffffff'; // 设置时间文本颜色
  ctx.textAlign = 'right'; // 设置文本水平右对齐

  // 绘制时间
  ctx.fillText(time, canvas.width - 20, canvas.height - 20);

  return canvas.toBuffer();
}

// 自动换行函数
function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';
  var lines = [];

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      lines.push(line);
      line = words[n] + ' ';
    }
    else {
      line = testLine;
    }
  }
  lines.push(line);

  for (var i = 0; i < lines.length; i++) {
    context.fillText(lines[i], x, y);
    y += lineHeight;
  }
}


module.exports = text2image;
