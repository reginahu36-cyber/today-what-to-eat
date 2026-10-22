# 今天吃什麼 v0.2（免登入 MVP）

## 目前功能
- 不限定午餐：可收藏早餐、午餐、下午茶、晚餐與宵夜店家
- 新增、編輯、移除餐廳
- 記錄餐點類型、價格、餐點、地址與備註
- 依「想吃／吃過」及類型篩選
- 依 NT$100–150 預算篩選
- 隨機挑選尚未標記吃過、且優先符合預算的收藏店家
- 記錄吃過的餐廳
- 點地址開啟 Google Maps
- 「找現在有開的店」會在 Google Maps 搜尋附近目前營業中的餐廳
- 免登入；收藏資料存在此瀏覽器的 localStorage

## 關於「現在有開」
此版本透過 Google Maps 開啟「restaurants open now near me」搜尋，由 Google Maps 依當下時間、地點及其營業資訊顯示結果。搜尋結果及營業資訊由 Google Maps 提供，可能因店家資料更新延遲而有誤，出發前建議再確認。

目前尚未把 Google Places API 直接嵌入 APP，因此「現在有開」的即時搜尋會在 Google Maps 開啟，而不是在 APP 內顯示結果。若要把即時營業狀態、評分、距離直接顯示在 APP 內，需要設定 Google Maps Platform Places API 與 API key，並設定配額及帳單限制。

## Android 手機使用
1. 解壓縮 ZIP。
2. 將檔案部署到 HTTPS 靜態網站（例如 Firebase Hosting、Netlify 或 GitHub Pages）。
3. 用 Android Chrome 開啟 HTTPS 網址。
4. 從 Chrome 選單選「新增至主畫面」或「安裝應用程式」。
5. 之後從主畫面開啟。

## 資料保存提醒
此版本免登入，資料存在目前瀏覽器。不同裝置、不同瀏覽器不會自動同步；清除網站資料也可能刪除收藏。請定期備份重要名單。

## 檔案
- `index.html`：介面與功能
- `manifest.json`：PWA 安裝資訊
- `sw.js`：基本離線快取
