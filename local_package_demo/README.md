# my_node_module

# Release my node module

```
cd common && yarn install && npx tsc
cd common && yarn link
```

# Import my node module

```
// 以app1举例
cd app1/ // 进入app1目录下
yarn link shared_code // 链接发布的包
npx tsc // 编译
```
