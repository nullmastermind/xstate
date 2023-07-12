(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{648:function(e,t,r){"use strict";r.r(t);var _=r(45),v=Object(_.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[e._v("#")]),e._v(" 概念")]),e._v(" "),r("p",[e._v("XState 是一个库，用于创建、解释和执行有限状态机和状态图，以及管理这些状态机与演员（Actor）调用。以下的计算机科学概念，对于了解如何充分使用 XState 非常重要，并且通常适用于你当前和未来的所有软件项目。")]),e._v(" "),r("h2",{attrs:{id:"有限状态机"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有限状态机"}},[e._v("#")]),e._v(" 有限状态机")]),e._v(" "),r("p",[e._v("有限状态机是一种数学计算模型，它描述了在任何给定时间只能处于一种状态的系统的行为。例如，假设你可以由具有有限数量 (2) 个状态的状态机表示："),r("code",[e._v("睡觉")]),e._v(" 或 "),r("code",[e._v("清醒")]),e._v("。 在任何给定的时间，你要么 "),r("code",[e._v("睡觉")]),e._v("，要么 "),r("code",[e._v("清醒")]),e._v("。 你也不可能同时 "),r("code",[e._v("睡觉")]),e._v(" 和 "),r("code",[e._v("清醒")]),e._v("，你也不可能同时不 "),r("code",[e._v("睡觉")]),e._v(" 和不 "),r("code",[e._v("清醒")]),e._v("。")]),e._v(" "),r("p",[e._v("形式上，有限状态机有五个部分：")]),e._v(" "),r("ul",[r("li",[e._v("有限的 "),r("strong",[e._v("状态")]),e._v(" 数")]),e._v(" "),r("li",[e._v("有限的 "),r("strong",[e._v("事件")]),e._v(" 数")]),e._v(" "),r("li",[e._v("一个 "),r("strong",[e._v("初始状态")])]),e._v(" "),r("li",[e._v("在给定当前状态和事件的情况下，确定下一个状态的 "),r("strong",[e._v("转换函数")])]),e._v(" "),r("li",[e._v("一组（可能是空的）"),r("strong",[e._v("最终状态")])])]),e._v(" "),r("p",[r("strong",[e._v("状态")]),e._v(" 是指，由状态机建模的系统中某种有限的、"),r("em",[e._v("定性")]),e._v(" 的“模式”或“状态”，并不描述与该系统相关的所有（可能是无限的）数据。例如，水可以处于以下 4 种状态中的一种："),r("code",[e._v("冰")]),e._v("、"),r("code",[e._v("液体")]),e._v("、"),r("code",[e._v("气体")]),e._v("或"),r("code",[e._v("等离子体")]),e._v("。然而，水的温度可以变化，所以其测量值是 "),r("em",[e._v("定量的")]),e._v(" 和无限的。")]),e._v(" "),r("p",[e._v("更多资源：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Finite-state_machine",target:"_blank",rel:"noopener noreferrer"}},[e._v("有限状态机"),r("OutboundLink")],1),e._v(" article on Wikipedia")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.freecodecamp.org/news/state-machines-basics-of-computer-science-d42855debc66/",target:"_blank",rel:"noopener noreferrer"}},[e._v("理解状态机"),r("OutboundLink")],1),e._v(" by Mark Shead")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.youtube.com/watch?v=4rNYAvsSkwk",target:"_blank",rel:"noopener noreferrer"}},[e._v("▶️ A-Level Comp Sci: 有限状态机"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"状态图"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#状态图"}},[e._v("#")]),e._v(" 状态图")]),e._v(" "),r("p",[e._v("状态图是一种用于对有状态的交互式系统进行建模的表达。计算机科学家 David Harel 在他 1987 年的论文 "),r("a",{attrs:{href:"https://www.sciencedirect.com/science/article/pii/0167642387900359/pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("状态图: 一个复杂系统的可视化表达"),r("OutboundLink")],1),e._v(" 中提出了这种表达作为状态机的扩展。一些扩展包括：")]),e._v(" "),r("ul",[r("li",[e._v("守卫（Guard）转换")]),e._v(" "),r("li",[e._v("动作（Action）（进入、退出、转换）")]),e._v(" "),r("li",[e._v("扩展状态（上下文）")]),e._v(" "),r("li",[e._v("并行状态")]),e._v(" "),r("li",[e._v("分层（嵌套）状态")]),e._v(" "),r("li",[e._v("历史")])]),e._v(" "),r("p",[e._v("更多资源：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.sciencedirect.com/science/article/pii/0167642387900359/pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("状态图 - 一个复杂系统的可视化表现"),r("OutboundLink")],1),e._v(" by David Harel")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://statecharts.github.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("状态图的世界"),r("OutboundLink")],1),e._v(" by Erik Mogensen")])]),e._v(" "),r("h2",{attrs:{id:"演员-actor-模型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#演员-actor-模型"}},[e._v("#")]),e._v(" 演员（Actor）模型")]),e._v(" "),r("p",[e._v("演员模型是另一个非常古老的数学模型，它与状态机配合得很好。 它指出，一切都是一个“演员”，可以做三件事：")]),e._v(" "),r("ul",[r("li",[r("strong",[e._v("接收")]),e._v(" 消息")]),e._v(" "),r("li",[r("strong",[e._v("发送")]),e._v(" 消息到其他 Actor")]),e._v(" "),r("li",[e._v("用它收到的消息做一些事情( "),r("strong",[e._v("行为")]),e._v(")，比如：\n"),r("ul",[r("li",[e._v("改变它的本地状态")]),e._v(" "),r("li",[e._v("发送消息到其他演员")]),e._v(" "),r("li",[r("em",[e._v("产生")]),e._v(" 新的演员")])])])]),e._v(" "),r("p",[e._v("演员的行为可以通过状态机（或状态图）来描述。")]),e._v(" "),r("p",[e._v("更多资源：")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Actor_model",target:"_blank",rel:"noopener noreferrer"}},[e._v("演员模型"),r("OutboundLink")],1),e._v(" article on Wikipedia")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.brianstorti.com/the-actor-model/",target:"_blank",rel:"noopener noreferrer"}},[e._v("10 分钟演员模型"),r("OutboundLink")],1),e._v(" by Brian Storti")])])])}),[],!1,null,null,null);t.default=v.exports}}]);