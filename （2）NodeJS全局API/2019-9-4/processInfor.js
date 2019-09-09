/**
 * process.pid进程的id值，唯一标识
 * process.platform返回程序运行的操作平台
 * process.argv获取命令行参数;是一个数组，默认会有两个数组元素;告诉脚本做什么;命令行参数会自动加入数组
 * process.argv[0]表示的node的可执行文件所在路径
 * process.argv[1]表示当前执行脚本文件所在的路径
 * process.argv[2]表示传入的命令行参数
 * process.cwd()当前文件工作目录
 * process.exit(id)表示当前进程退出
 */
console.log(process.pid);
console.log(process.platform);
console.log(process.argv);
console.log(process.cwd());