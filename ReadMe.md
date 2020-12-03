# Cypress 回归测试样板仓

## 如何生成

1. 在package.json的scripts添加

```json
{
  "test": "NODE_ENV=test cypress run",
  "lint": "f2elint fix -i src",
  "cypress": "NODE_ENV=test cypress open -P ."
}
```

2. 执行`yarn cypress`让cypress初始化仓，然后关掉cypress
3. 然后执行如下

```bash
mv cypress/integration/examples cypress/ # 移出来默认的示例文件
yarn add -D @cypress/code-coverage @istanbuljs/nyc-config-typescript babel-plugin-istanbul # 添加测试覆盖率能力（需要对应前端项目配置babel）（可选，此仓未装）
yarn add -D cypress-plugin-snapshots # 添加快照测试
yarn add -D cypress-xpath # 添加xpath能力
```

4. 添加tsconfig.json
5. 修改cypress.json
6. 修改cypress/support/index.js
7. 修改cypress/plugins/index.js
8. 添加eslint（可选）

```bash
npm install f2elint -g
f2elint init
yarn add -D eslint-config-ali
yarn add -D eslint-plugin-cypress
```

- 修改.eslintrc.js
