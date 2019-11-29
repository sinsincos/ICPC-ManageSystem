## 3 训练

### 3.1 题单

#### 3.1.1 前端js逻辑

- 展示所有题单 (allProblemTable.php)
- 新建题单按钮触发事件 (newProblemTable.html)
	- 表单检查
		- 正确：提交，调用jump(allProblemTable.html, index)
		- 错误：提示错误信息
- 查看题单详情按钮触发事件
	- 展示题单详细信息  调用jump(problemTable.html, index)
	- 详细资料按钮
		- 展示当前题单的相关资料
- 题单编辑按钮触发事件
	- 检查权限 (checkRoot.php) check()
		- 拥有权限，填充已有内容，调用jump(newProblemTable.html, index) (getProblemTable.php)
		- 无权限，询问是否申请权限
- 删除题单按钮触发事件
	- 检查权限 (checkRoot.php)
		- 拥有权限，删除成功
		- 无权限，询问是否申请权限
#### 3.1.2 后端接口
- allProblemTable.php
	- 传入：NULL
	- 返回：
		- ProblemTable(题单标题，简介，创建人)
- checkRoot.php
	- 传入：
		- rootTable   (权限类型)
	- 返回
		- state：0 / 1 (有权限/无权限)
### 3.2 比赛

#### 3.2.1 前端js逻辑

- 展示当前所有比赛 (allContests.php)
- 新建比赛按钮触发事件 (newContests.html)
	- 表单检查
		- 正确：提交，调用jump(allContests.html, index)
		- 错误：提示错误信息
- 查看比赛详情按钮触发事件
	- 展示比赛详细信息  调用jump(ContestsTable.html, index)
	- 比赛结果按钮触发事件
		- 调用jump(constResult.html,index)
	- 题单详细信息
		- 调用jump(problemTable.html,index)
- 比赛编辑按钮触发事件
	- 检查权限 (checkRoot.php) check()
		- 拥有权限，填充已有内容，调用jump(allContests.html, index) 
		- 无权限，询问是否申请权限
- 删除比赛按钮触发事件
	- 检查权限 (checkRoot.php)
		- 拥有权限，删除成功
		- 无权限，询问是否申请权限
#### 3.2.2 后端接口
- allContests.php
	- 传入：NULL
	- 返回：
		- ContestsTable(题单标题，简介，创建人)
- checkRoot.php
	- 传入：
		- rootTable   (权限类型)
	- 返回
		- state：0 / 1 (有权限/无权限)

### 3.3 比赛

#### 3.3.1 前端js逻辑

- 展示题库中所有题目 (allProblems.php)
- 添加题目按钮触发事件 (newProblems.html)
	- 表单检查
		- 正确：提交，调用jump(allProblems.html, index)
		- 错误：提示错误信息
- 比赛编辑按钮触发事件
	- 检查权限 (checkRoot.php) check()
		- 拥有权限，填充已有内容，调用jump(allProblems.html, index) 
		- 无权限，询问是否申请权限
- 删除题目按钮触发事件
	- 检查权限 (checkRoot.php)
		- 拥有权限，删除成功
		- 无权限，询问是否申请权限
#### 3.3.2 后端接口
- allProblems.php
	- 传入：NULL
	- 返回：
		- ContestsTable(题单标题，简介，创建人)
- checkRoot.php
	- 传入：
		- rootTable   (权限类型)
	- 返回
		- state：0 / 1 (有权限/无权限)