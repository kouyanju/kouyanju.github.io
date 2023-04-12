(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{571:function(t,a,s){t.exports=s.p+"assets/img/ssh-rsa.dc72d8cc.png"},605:function(t,a,s){"use strict";s.r(a);var i=s(31),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h2",{attrs:{id:"一、git常用命令"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#一、git常用命令"}},[t._v("#")]),t._v(" 一、git常用命令")]),t._v(" "),i("h4",{attrs:{id:"git-clone"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-clone"}},[t._v("#")]),t._v(" git clone")]),t._v(" "),i("p",[i("code",[t._v("git clone xxxx.git")]),t._v("从github或者gitlab拉取项目代码")]),t._v(" "),i("h4",{attrs:{id:"git-config"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-config"}},[t._v("#")]),t._v(" git config")]),t._v(" "),i("p",[i("code",[t._v("git config --global user.name")]),t._v(" 配置开发者的用户名username"),i("br"),t._v(" "),i("code",[t._v("git config --global user.email")]),t._v(" 配置开发者的用户名user@email")]),t._v(" "),i("h4",{attrs:{id:"git-branch"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-branch"}},[t._v("#")]),t._v(" git branch")]),t._v(" "),i("p",[t._v("创建、重命名、查看、删除项目分支，通过 Git 做项目开发时，一般都是在开发分支中进行，开发完成后合并分支到主干。"),i("br"),t._v(" "),i("code",[t._v("git branch daily/0.0.0")]),t._v("创建一个名为 daily/0.0.0 的日常开发分支，分支名只要不包括特殊字符即可。"),i("br"),t._v(" "),i("code",[t._v("git branch -m daily/0.0.0 daily/0.0.1")]),t._v(" 如果觉得之前的分支名不合适，可以为新建的分支重命名，重命名分支名为 daily/0.0.1"),i("br"),t._v(" "),i("code",[t._v("git branch")]),t._v("通过不带参数的branch命令可以查看当前项目分支列表"),i("br"),t._v(" "),i("code",[t._v("git branch -d daily/0.0.1")]),t._v("如果分支已经完成使命则可以通过 -d 参数将分支删除，这里为了继续下一步操作，暂不执行删除操作")]),t._v(" "),i("h4",{attrs:{id:"git-checkout-切换分支"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout-切换分支"}},[t._v("#")]),t._v(" git checkout 切换分支")]),t._v(" "),i("p",[i("code",[t._v("git checkout daily/0.0.1")]),t._v(" 切换到 daily/0.0.1 分支，后续的操作将在这个分支上进行")]),t._v(" "),i("h4",{attrs:{id:"git-status-查看文件变动状态"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-status-查看文件变动状态"}},[t._v("#")]),t._v(" git status 查看文件变动状态")]),t._v(" "),i("h4",{attrs:{id:"git-add-将本地开发环境代码添加到工作区"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-add-将本地开发环境代码添加到工作区"}},[t._v("#")]),t._v(" git add .  将本地开发环境代码添加到工作区")]),t._v(" "),i("h4",{attrs:{id:"git-commit-提交文件变动到版本库"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-commit-提交文件变动到版本库"}},[t._v("#")]),t._v(" git commit 提交文件变动到版本库")]),t._v(" "),i("p",[i("code",[t._v('git commit -m "这里写提交的原因"')]),t._v(" 将工作区代码提交")]),t._v(" "),i("h4",{attrs:{id:"git-push-将本地的代码改动推送到服务器"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-push-将本地的代码改动推送到服务器"}},[t._v("#")]),t._v(" git push 将本地的代码改动推送到服务器")]),t._v(" "),i("p",[i("code",[t._v("git push origin daily/0.0.1")]),t._v("origin 指代的是当前的git服务器地址，这行命令的意思是把 daily/0.0.1 分支推送到服务器")]),t._v(" "),i("h4",{attrs:{id:"git-pull-将服务器上的最新代码拉取到本地"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-pull-将服务器上的最新代码拉取到本地"}},[t._v("#")]),t._v(" git pull 将服务器上的最新代码拉取到本地")]),t._v(" "),i("p",[i("code",[t._v("git pull origin daily/0.0.1")]),t._v("拉取远程daily/0.0.1分支的内容"),i("br"),t._v("\n如果其它项目成员对项目做了改动并推送到服务器，我们需要将最新的改动更新到本地，这里我们来模拟一下这种情况。")]),t._v(" "),i("p",[t._v("进入Github网站的项目首页，再进入 daily/0.0.1 分支，在线对 README.md 文件做一些修改并保存，然后在命令中执行以上命令，它将把刚才在线修改的部分拉取到本地，用编辑器打开 README.md ，你会发现文件已经跟线上的内容同步了。\n如果线上代码做了变动，而你本地的代码也有变动，拉取的代码就有可能会跟你本地的改动冲突，一般情况下 Git 会自动处理这种冲突合并，但如果改动的是同一行，那就需要手动来合并代码，编辑文件，保存最新的改动，再通过 git add . 和 git commit -m 'xxx' 来提交合并。")]),t._v(" "),i("h4",{attrs:{id:"git-log-查看版本提交记录"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-log-查看版本提交记录"}},[t._v("#")]),t._v(" git log 查看版本提交记录")]),t._v(" "),i("p",[i("code",[t._v("git log")]),t._v("通过该命令，我们可以查看整个项目的版本提交记录，它里面包含了提交人、日期、提交原因等信息")]),t._v(" "),i("h4",{attrs:{id:"gitignore-设置哪些内容不需要推送到服务器-这是一个配置文件"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#gitignore-设置哪些内容不需要推送到服务器-这是一个配置文件"}},[t._v("#")]),t._v(" .gitignore 设置哪些内容不需要推送到服务器，这是一个配置文件")]),t._v(" "),i("p",[i("code",[t._v("touch .gitignore")]),i("br"),t._v("\n.gitignore 不是 Git 命令，而在项目中的一个文件，通过设置 .gitignore 的内容告诉 Git 哪些文件应该被忽略不需要推送到服务器，通过以上命令可以创建一个 .gitignore 文件，并在编辑器中打开文件，每一行代表一个要忽略的文件或目录，如："),i("br")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("demo.html\nbuild/\n")])])]),i("p",[t._v("以上内容的意思是 Git 将忽略 demo.html 文件 和 build/ 目录，这些内容不会被推送到服务器上")]),t._v(" "),i("h2",{attrs:{id:"二、绑定ssh-key"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#二、绑定ssh-key"}},[t._v("#")]),t._v(" 二、绑定SSH key")]),t._v(" "),i("p",[t._v("ssh key是一种github提供的通信方式，使用ssh key 可以部署入密码就访问github")]),t._v(" "),i("p",[t._v("检查ssh key是否存在")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("ls -al ~/.ssh\n\n# lists the files in your .ssh directory, if thy exist.\n")])])]),i("p",[t._v("生成shh key")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v('ssh-keygen -t rsa -C "your_email@example.com"\n\n# generating public/private rsa key.\n# 一直按enter\n')])])]),i("p",[t._v("然后找到.ssh/id_rsa.pub文件查看内容")]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("cd ~/.ssh\ncat id_rsa.pub\n")])])]),i("p",[t._v("从ssh-rsa 开始复制，复制到最后，一定要复制全了")]),t._v(" "),i("p",[i("img",{attrs:{src:s(571),alt:"ssh-rsa.png"}})]),t._v(" "),i("p",[t._v("然后打开github 右上角头像--》Settings--》SSH and GPG keys--》(起一个辨识度高的名字，然后把刚才复制的key粘贴进去)New SSH key")]),t._v(" "),i("vssue",{attrs:{options:{locale:"zh"}}})],1)}),[],!1,null,null,null);a.default=e.exports}}]);