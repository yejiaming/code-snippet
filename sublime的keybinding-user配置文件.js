[
	/*-----------------通用--------------------------*/
	// 设置打开命令面板的快捷键
	/**
	 * 在该命令模式下作用如下：(命令都支持模糊匹配)
	 * 1、快速修改当前文件的类型
	 * 输入：set syntax：html
	 * 2、可以快速打开或关闭左侧的Minimap
	 * 输入：minimap
	 * 3、安装包，pkginstall
	 * 4、删除包，pkgremove
	 * 5、
	 */
	{
		"keys": ["super+shift+p"],
		"command": "show_overlay",
		"args": {
			"overlay": "command_palette"
		}
	},
	// 打开控制台
	// 快捷键：ctrl+`
	// 设置打开侧边目录导航栏的快捷键
	{
		"keys": ["super+`"],
		"command": "toggle_side_bar"
	},
	// 高级创建文件的用法
	{
		"keys": ["super+alt+n"],
		"command": "advanced_new_file_new"
	},
	/*-----------------------编辑----------------------*/
	// 设置向下换行
	{
		"keys": ["super+shift+enter"],
		"command": "run_macro_file",
		"args": {
			"file": "res://Packages/Default/Add Line.sublime-macro"
		}
	},
	// 设置向上换行
	{
		"keys": ["super+alt+enter"],
		"command": "run_macro_file",
		"args": {
			"file": "res://Packages/Default/Add Line Before.sublime-macro"
		}
	},
	// 自动补全，代码提示
	{
		"keys": ["alt+/"],
		"command": "auto_complete"
	},
	// 删除一行
	{
		"keys": ["super+backspace"],
		"command": "run_macro_file",
		"args": {
			"file": "res://Packages/Default/Delete Line.sublime-macro"
		}
	},
	// 删除到行首，注意和删除一行的区别
	{
		"keys": ["super+shift+backspace"],
		"command": "run_macro_file",
		"args": {
			"file": "res://Packages/Default/Delete to Hard BOL.sublime-macro"
		}
	},
	// 恢复撤销
	{
		"keys": ["super+shift+z"],
		"command": "redo_or_repeat"
	},
	// 回车跳过括号，相当于右移
	// {
	// 	"keys": ["enter"],
	// 	"command": "move",
	// 	"args": {
	// 		"by": "characters",
	// 		"forward": true
	// 	},
	// 	"context": [{
	// 		"key": "following_text",
	// 		"operator": "regex_contains",
	// 		"operand": "^[)\\]\\>\\'\\\"\\ %>\\}\\;\\,]",
	// 		"match_all": true
	// 	}, {
	// 		"key": "preceding_text",
	// 		"operator": "not_regex_match",
	// 		"operand": "^.*\\{$",
	// 		"match_all": true
	// 	}, {
	// 		"key": "auto_complete_visible",
	// 		"operator": "equal",
	// 		"operand": false
	// 	}]
	// },
	// 删除一个英文单词
	// 快捷键：alt+backspace

	/*-------------------------查找&替换-----------------------*/
	// 设置替换内容
	{
		"keys": ["super+r"],
		"command": "show_panel",
		"args": {
			"panel": "replace",
			"reverse": false
		}
	},
	// 全局替换内容
	{
		"keys": ["super+shift+r"],
		"command": "show_panel",
		"args": {
			"panel": "find_in_files"
		}
	},

	/*-----------------------窗口---------------------*/
	// 创建一个新窗口
	{
		"keys": ["super+shift+n"],
		"command": "new_window"
	},
	// 在当前窗口创建一个新标签
	{
		"keys": ["super+n"],
		"command": "new_file"
	},
	// 打开最近关闭的文件
	{
		"keys": ["super+shift+t"],
		"command": "reopen_last_file"
	},
	// 打开文件或文件夹
	{
		"keys": ["super+o"],
		"command": "prompt_open"
	},

	/*----------------------格式化------------------------*/
	// JS格式化代码
	{
		"keys": ["super+alt+l"],
		"command": "js_format",
		"context": [{
			"key": "selector",
			"operator": "equal",
			"operand": "source.js,source.json"
		}]
	},
	// CSS格式化代码
	{
		"keys": ["super+ctrl+l"],
		"command": "css_format",
		"args": {
			"action": "expand"
		}
	},
	// html格式化代码
	{
		"keys": ["super+shift+l"],
		"command": "htmlprettify"
	},
	// css排序格式化
	{
		"keys": ["super+shift+c"],
		"command": "css_comb"
	},
	// less格式化成css
	{
		"keys": ["alt+shift+l"],
		"command": "less_to_css"
	},
	// vue文件格式化
	// 快捷键：super+shift+o

	/*-----------------选择----------------------*/
	// 合并选区为一行
	{
		"keys": ["super+j"],
		"command": "join_lines"
	},
	// 快速选择同缩进的内容
	{
		"keys": ["super+shift+j"],
		"command": "expand_selection",
		"args": {
			"to": "indentation"
		}
	},
	// 在起始括号和结尾括号间切换光标位置
	{
		"keys": ["super+m"],
		"command": "move_to",
		"args": {
			"to": "brackets"
		}
	},
	// 快速选择括号间的内容
	{
		"keys": ["ctrl+shift+m"],
		"command": "expand_selection",
		"args": {
			"to": "brackets"
		}
	},
	// 快速选择光标所在大括号中的内容
	{
		"keys": ["super+shift+space"],
		"command": "expand_selection",
		"args": {
			"to": "scope"
		}
	},
	// 快速选中当前光标的单词&选词(按住-继续选择下个相同的字符串)
	{
		"keys": ["ctrl+g"],
		"command": "find_under_expand"
	},
	// 一次选中所有的
	{
		"keys": ["ctrl+super+g"],
		"command": "find_all_under"
	},
	// 快速切换项目
	{
		"keys": ["super+ctrl+p"],
		"command": "prompt_select_workspace"
	},
	// 删除某个项目
	// 在：~/Library/Application Support/Sublime Text 3/Local/Session.sublime_session下删除recent
	// 折叠代码
	{
		"keys": ["super+shift+-"],
		"command": "fold"
	},
	// 展开代码
	{
		"keys": ["super+shift+="],
		"command": "unfold"
	},
	// 与上行互换
	{
		"keys": ["alt+shift+up"],
		"command": "swap_line_up"
	},
	// 与下行互换
	{
		"keys": ["alt+shift+down"],
		"command": "swap_line_down"
	},
	// 向下复制一行
	{
		"keys": ["super+d"],
		"command": "duplicate_line"
	},
	/*----------------------跳转------------------------------*/
	//跳转到指定文件，输入文件名后可以：
	//  @ 符号跳转        输入@symbol跳转到symbol符号所在的位置
	//  # 关键字跳转      输入#keyword跳转到keyword所在的位置
	//  : 行号跳转        输入:12跳转到文件的第12行。
	{
		"keys": ["super+p"],
		"command": "show_overlay",
		"args": {
			"overlay": "goto",
			"show_files": true
		}
	},
	// 快速打开terminal，如果要配置成打开iTerm2可以在配置文件里面设置
	{
		"keys": ["super+t"],
		"command": "open_terminal"
	},

]