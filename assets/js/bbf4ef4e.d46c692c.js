"use strict";(self.webpackChunkweb_test=self.webpackChunkweb_test||[]).push([[357],{5358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>u,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(5893),a=t(1151),o=t(4866),l=t(5162);const s={sidebar_position:7},u="Tablar",c={id:"tutorial-basics/tabs",title:"Tablar",description:"",source:"@site/docs/tutorial-basics/tabs.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/tabs",permalink:"/web-test/docs/tutorial-basics/tabs",draft:!1,unlisted:!1,editUrl:"https://github.com/koltigin/web-test/tree/main/docs/tutorial-basics/tabs.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Tebrikler!",permalink:"/web-test/docs/tutorial-basics/congratulations"},next:{title:"toggles",permalink:"/web-test/docs/tutorial-basics/toggles"}},i={},d=[];function f(e){const n={code:"code",h1:"h1",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"tablar",children:"Tablar"}),"\n","\n","\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{value:"Polygon",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 137\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(l.Z,{value:"BSC",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 56\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(l.Z,{value:"Ethereum",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 1\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(l.Z,{value:"Arbitrum",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 42161\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(l.Z,{value:"Optimism",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 10\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(l.Z,{value:"Avalanche",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 43114\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})}),(0,r.jsx)(l.Z,{value:"Fantom",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"rm /root/.forta/config.yml\nsudo tee /root/.forta/config.yml > /dev/null <<EOF\nchainId: 250\n\nscan:\n  jsonRpc:\n    url: ALCHEMY_LINK\n\ntrace:\n  enabled: false\nEOF\n"})})})]})]})}function b(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var r=t(512);const a={tabItem:"tabItem_Ymn6"};var o=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>E});var r=t(7294),a=t(512),o=t(2466),l=t(6550),s=t(469),u=t(1980),c=t(7392),i=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=f(e),[l,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=h({queryString:t,groupId:a}),[m,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,i.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),v=(()=>{const e=c??m;return b({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),p(e)}),[d,p,o]),tabValues:o}}var p=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),i=e=>{const n=e.currentTarget,t=u.indexOf(n),a=s[t].value;a!==r&&(c(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":i(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:i,...o,className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(j,{...e,...n})]})}function E(e){const n=(0,p.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>l});var r=t(7294);const a={},o=r.createContext(a);function l(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);