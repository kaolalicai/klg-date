# klg-date
date util

## QuickStart

安装

```bash
npm i klg-date
```

引入

```js
import {DateUtil} from 'klg-date'
```


获取凌晨时间

```js
DateUtil.getDayStart()  // Date 对象
```

获取2天前的凌晨时间

```js
DateUtil.getDayStart(null， -2)
```

获取指定日期2天前的凌晨时间

```js
DateUtil.getDayStart(new Date('2018/6/15')， -2) // 2018/6/13 00:00
```

其他用法见测试文件

### Test

```bash
$ npm i
$ npm test
```

