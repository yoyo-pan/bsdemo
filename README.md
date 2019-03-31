# bsdemo

Business Weekly demo project

### app

React + Material ui

### pureapp

jquery + bootstrap

### 個人心得比較

##### pureapp

- 好處:
  - js: jquery 其他 RD 可能有學過
  - css: bootstrap 其他 RD 可能有學過
- 壞處:
  - js: 框架簡陋，導致所以 DOM 操作都要自己下 Selector 跟 Event Listener，程式維護困難，且有效能疑慮(re-render 每次都是整個 DOM 刷新)。 例如列表清單需要針對 RWD breakpoints 有不同的排版與收納邏輯(更多按鈕)，必須自己監聽 resize event。模組耦合度高，想切割 html 與 js 卻又要綁 resize 或其他 event 彼此呼叫來呼叫去。
  - css: 傳統 css 問題，class 全域污染，想避開就要很長的 class name，@media query 內每個 class 都要重寫一遍。

##### app

- 好處:
  - js: React lifecycle 解決 re-render 效能問題，jsx 語法有效模組化，在模組(e.g. input, button)全站皆共用樣式與邏輯的情境下，開發與維護方便
  - css: styled component 概念，每個模組的 css 都有 bundle 後的 suffix 區隔，Theme Provider 讓 design 設計的變數可以直接套用 (e.g. zeplin 中 header 的顏色是 background-color: var(--blood); 我在 theme 中也定義了 blood，完全同步)
- 壞處:
  - js: React 沒有寫過的話需要學習基本概念
  - css: scss 語法沒有寫過的話需要學習基本概念
