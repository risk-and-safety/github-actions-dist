# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.5.2-dev.0](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.1...github-actions@1.5.2-dev.0) (2020-02-28)


### Bug Fixes

* **github-actions:** apply version bumping to dev ([cdd8580](https://github.com/risk-and-safety/kube-nodejs/commit/cdd85808e1ed45b6bb65ebc10bded7fdf94d3431))





## [1.5.1](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.5.0...github-actions@1.5.1) (2020-02-27)

**Note:** Version bump only for package github-actions





# [1.5.0](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.9...github-actions@1.5.0) (2020-02-27)


### Bug Fixes

* **github-runner:** allow leading slash on buildDir ([2211bc4](https://github.com/risk-and-safety/kube-nodejs/commit/2211bc411343a7f4690476071a5a764e696a0d30))


### Features

* **github-actions:** add deploy workflow for multiple apps ([01e22c7](https://github.com/risk-and-safety/kube-nodejs/commit/01e22c7476d0851577e1ff6a814e940be1284f8b))





## [1.4.9](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.8...github-actions@1.4.9) (2020-02-24)


### Bug Fixes

* **github-actions:** use full path for build dir in actions-release ([ee5fac7](https://github.com/risk-and-safety/kube-nodejs/commit/ee5fac7744af50053f2c5b0832ed5f1271fd8f65))





## [1.4.8](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.7...github-actions@1.4.8) (2020-02-24)

**Note:** Version bump only for package github-actions





## [1.4.7](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.6...github-actions@1.4.7) (2020-02-24)


### Bug Fixes

* **github-actions:** fix ssh config for actions.git in actions-release ([39e43f1](https://github.com/risk-and-safety/kube-nodejs/commit/39e43f18fa3f1f64934b9141c86cc58c6d2fa0c6))





## [1.4.6](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.5...github-actions@1.4.6) (2020-02-24)

**Note:** Version bump only for package github-actions





## [1.4.5](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.4...github-actions@1.4.5) (2020-02-24)

**Note:** Version bump only for package github-actions





## [1.4.4](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.3...github-actions@1.4.4) (2020-02-24)

**Note:** Version bump only for package github-actions





## [1.4.3](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.2...github-actions@1.4.3) (2020-02-24)


### Bug Fixes

* **github-actions:** fix validateRepo for git@ syntax ([97acc04](https://github.com/risk-and-safety/kube-nodejs/commit/97acc042f4a24475c79dc24d77a8ee215ea7e313))





## [1.4.2](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.1...github-actions@1.4.2) (2020-02-24)

**Note:** Version bump only for package github-actions





## [1.4.1](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.4.0...github-actions@1.4.1) (2020-02-24)

**Note:** Version bump only for package github-actions





# [1.4.0](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.3.0...github-actions@1.4.0) (2020-02-21)


### Features

* **github-actions:** add action for pushing compiled action to different git repo ([0146f8d](https://github.com/risk-and-safety/kube-nodejs/commit/0146f8d4ed58c45311b4371da6e9cbd99662a39c))





# [1.3.0](https://github.com/risk-and-safety/kube-nodejs/compare/github-actions@1.1.0...github-actions@1.3.0) (2020-02-19)


### Bug Fixes

* **github-actions:** add in missing dependencies for version ./dist/index.js bundle ([ec1ee12](https://github.com/risk-and-safety/kube-nodejs/commit/ec1ee12955edcdd4a68d058c76d3534615dd4437))
* **github-actions:** add missing ".context" to github object ([40808d5](https://github.com/risk-and-safety/kube-nodejs/commit/40808d59341687ef2a2493c8bf541f2658ece246))
* **github-actions:** bump version on merge ([afef243](https://github.com/risk-and-safety/kube-nodejs/commit/afef2437a40f54f7811c92289a6642d2976425fb))
* **github-actions:** fix setting git user.email ([fb604ea](https://github.com/risk-and-safety/kube-nodejs/commit/fb604eafd3e9d08ec534042a01a8a7f352e55d50))
* **github-actions:** fix setting git user.email locally during build ([59f3755](https://github.com/risk-and-safety/kube-nodejs/commit/59f3755adfe43e4b5de5d79964a91e0188307055))
* **github-actions:** fix setting git user.email locally during build ([d5b3a6c](https://github.com/risk-and-safety/kube-nodejs/commit/d5b3a6c6ff69ef62d07b60e9c9e0f6c690367e8e))
* **github-actions:** fix version bump params ([d178ba1](https://github.com/risk-and-safety/kube-nodejs/commit/d178ba15efb3af3526b023b12a4bcb47170a2a09))
* **github-actions:** run trueUpGitHistory if in GitHub Actions ([b0ab4a5](https://github.com/risk-and-safety/kube-nodejs/commit/b0ab4a54127a9c202646dc93fbf0510c74a734b5))
* **github-actions:** run trueUpGitHistory if in GitHub Actions ([e32bab7](https://github.com/risk-and-safety/kube-nodejs/commit/e32bab7fe18fd3568b71cd5f1ab7439aa1dafe57))
* **github-actions:** work around ncc bugs in compile.sh ([b5d97ca](https://github.com/risk-and-safety/kube-nodejs/commit/b5d97cabe976d0c8c4864a851c7b1bc6d1cd065e))


### Features

* **github-actions:** add npm script at root for releasing ([e2bec2a](https://github.com/risk-and-safety/kube-nodejs/commit/e2bec2a5298372b6953251f28a53ee4f50b1f994))
* **release:** add versioning for GitHub Actions ([2e7d868](https://github.com/risk-and-safety/kube-nodejs/commit/2e7d868c875c3f88fbbb31434b08a874d8052af3))





# [1.2.0](https://github.com/risk-and-safety/kube-nodejs/compare/@rss/github-actions@1.1.0...@rss/github-actions@1.2.0) (2020-02-13)


### Bug Fixes

* **github-actions:** add in missing dependencies for version ./dist/index.js bundle ([ec1ee12](https://github.com/risk-and-safety/kube-nodejs/commit/ec1ee12955edcdd4a68d058c76d3534615dd4437))
* **github-actions:** add missing ".context" to github object ([40808d5](https://github.com/risk-and-safety/kube-nodejs/commit/40808d59341687ef2a2493c8bf541f2658ece246))
* **github-actions:** fix setting git user.email ([fb604ea](https://github.com/risk-and-safety/kube-nodejs/commit/fb604eafd3e9d08ec534042a01a8a7f352e55d50))
* **github-actions:** fix setting git user.email locally during build ([59f3755](https://github.com/risk-and-safety/kube-nodejs/commit/59f3755adfe43e4b5de5d79964a91e0188307055))
* **github-actions:** fix setting git user.email locally during build ([d5b3a6c](https://github.com/risk-and-safety/kube-nodejs/commit/d5b3a6c6ff69ef62d07b60e9c9e0f6c690367e8e))
* **github-actions:** fix version bump params ([d178ba1](https://github.com/risk-and-safety/kube-nodejs/commit/d178ba15efb3af3526b023b12a4bcb47170a2a09))


### Features

* **github-actions:** add npm script at root for releasing ([b7b20d2](https://github.com/risk-and-safety/kube-nodejs/commit/b7b20d272c9eb2432e510c1ff42caf937bb894dd))
* **release:** add versioning for GitHub Actions ([2e7d868](https://github.com/risk-and-safety/kube-nodejs/commit/2e7d868c875c3f88fbbb31434b08a874d8052af3))






# 1.1.0 (2020-02-05)


### Bug Fixes

* **release:** add changelog to GitHub releases ([efdce10](https://github.com/risk-and-safety/kube-nodejs/commit/efdce10258697777d287b32179461fbffe7f67ed))


### Features

* **github-actions:** implement docker-build, s3-deploy, kubt-status, lambda-deploy ([dc20719](https://github.com/risk-and-safety/kube-nodejs/commit/dc20719703e9c9549af05634b31bc06f24d881b3))
