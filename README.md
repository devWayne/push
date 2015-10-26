Push
============
> 基于Tmall的git分支策略开发的一个小工具

## 安装：

```
tnpm i -g @ali/push
```

## 目的：

减小模块发布时的重复劳动。
避免模块发布时由人为导致的失误。
使用方式：

## API

#### push 'commit message'

相当于：
```
//修改package.json里的版本号，升级一个小版本。
git checkout -b daily/x.y.z（升级后的版本）。
gulp
git add --a && git commit -m 'commit message'
git push origin daily/x.y.z
```

#### push -p 'commit message'

相当于：
```
//修改package.json里的版本号，升级一个小版本。
git checkout -b daily/x.y.z（升级后的版本）。
gulp
git add --a && git commit -m 'commit message'
git push origin daily/x.y.z
git tag publish/x.y.x
git push origin publish/x.y.x
```
