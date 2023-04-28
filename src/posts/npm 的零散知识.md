---
title: npm 的零散知识
star: false
order: 4
category:
  - 学习
tag:
  - 代码
date: 2023-04-28
---
## 安装

在使用 `npm install` 安装模块时，可以使用 `-d` 或者 `--save-dev` 来将依赖项保存为开发环境依赖。

保存为开发依赖的模块不会被打包进生产环境代码中，只会在开发环境中使用。开发依赖通常包括如测试库、构建工具等开发相关的模块。

如果使用 `-S` 或者 `--save` 来安装模块，则会将依赖项保存为生产环境依赖，即会被打包进生产环境代码中。

## Uninstalling local packages

To remove a package from your node_modules directory, on the command line, use the `uninstall` command. Include the scope if the package is scoped.

This uninstalls a package, completely removing everything npm installed on its behalf.

It also removes the package from the dependencies, devDependencies, optionalDependencies, and peerDependencies objects in your package.json.

Further, if you have an npm-shrinkwrap.json or package-lock.json, npm will update those files as well.

### Unscoped package

npm uninstall <package_name>

### Scoped package

npm uninstall <@scope/package_name>

### Removing a local package without removing it from package.json

Using the `--no-save` will tell npm not to remove the package from your `package.json`, `npm-shrinkwrap.json`, or `package-lock.json` files.

### Example

npm uninstall --no-save lodash

`--save` or `-S` will tell npm to remove the package from your `package.json`, `npm-shrinkwrap.json`, and `package-lock.json` files. **This is the default**, but you may need to use this if you have for instance `save=false` in your `.npmrc` file.

### Confirming local package uninstallation

To confirm that `npm uninstall` worked correctly, check that the `node_modules` directory no longer contains a directory for the uninstalled package(s).

-   Unix system (such as OSX): `ls node_modules`
-   Windows systems: `dir node_modules`

## Uninstalling global packages

To uninstall an unscoped global package, on the command line, use the `uninstall` command with the `-g` flag. Include the scope if the package is scoped.

### Unspcoped package
npm uninstall -g <package_name>

### Scoped package

npm uninstall -g <@scope/package_name>

### Example

For example, to uninstall a package called `jshint`, run:

npm uninstall -g jshint