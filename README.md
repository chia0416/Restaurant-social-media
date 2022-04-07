<h2> Restaurant-social-media</h2>

餐廳論壇
<br>
使用者：可以評論餐廳以及收藏喜愛的餐廳,並且可以查看最新的餐廳訊息及人氣前10的餐廳情報。也可以追蹤其他使用者，並且查看其他使用者給的餐廳評論。
<br>
管理者：可以新增餐廳及餐廳目錄，並且更改其他使用者的權限。

<h3>專案畫面</h3>

![image](https://github.com/chia0416/Restaurant-social-media/blob/master/public/shotcut.png)

<h3>Features - 產品功能</h3>

<ol>
<li>使用 Node.js + Express + MySQL 打造的餐廳論壇 </li>
<li>使用者可以點擊任一餐廳，查看更多餐廳資訊，如餐廳地址、電話與簡介並且追蹤  </li>
<li>使用者可以依照類別進行搜尋</li>
<li>使用者可閱覽最新的餐廳訊息及前十名的餐廳</li>
<li>使用者可以追蹤其他使用者、並查詢其他使用者的餐廳評論</li>
<li>管理者可新增餐廳及更改他人的管理權限</li>
<li>新增"使用者介面"、信箱"註冊及登入"功能</li>
</ol>

<h3>Installing - 專案安裝流程</h3>
<ol>
<li>確認是否已安裝Node.js</li>
<pre><code>在Terminal 輸入 node -v 指令</code></pre>

<li>如果沒出現版本符號，請先使用nvm 安裝Node.js</li>
<pre><code>請參考此網址 https://www.onejar99.com/nvm-install-for-windows/</code></pre>

<li>打開你的 terminal，Clone 此專案至本機電腦 </li>
<pre><code>https://github.com/chia0416/Restaurant-social-media.git </code></pre>

<li>開啟終端機(Terminal)，進入存放此專案的資料夾 </li>
<pre><code> cd restaurant_list </code></pre>

<li>安裝 npm 套件 </li>
<pre><code>在 Terminal 輸入 npm install 指令</code></pre>

<li>安裝 nodemon 套件 </li>
<pre><code>在 Terminal 輸入 npm install -g nodemon 指令</code></pre>

<li>啟動伺服器，執行 app.js 檔案 </li>
<pre><code>在 Terminal 輸入 nodemon app.js 或者 npm run dev 指令即可</code></pre>

<li>建立種子資料</li>
<pre><code>在 Terminal 輸入npm run seed 指令</code></pre>

<li>當 terminal 出現以下字樣，表示伺服器已啟動並成功連結 </li>
<pre><code> Express is running on http://localhost:3000 </code></pre>  
  
現在，你可開啟任一瀏覽器瀏覽器輸入 http://localhost:3000 開始囉！
<br>
<h3>測試用帳號</h3>
<br>
帳號：root＠example.com
<br>
密碼：12345678
  
<h3>套件</h3>

    
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "chai": "^4.2.0",
    "connect-flash": "^0.1.1",
    "dotenv": "^10.0.0",
    "express": "^4.17.1",
    "express-handlebars": "^5.3.2",
    "express-session": "^1.17.2",
    "faker": "^5.5.3",
    "imgur-node-api": "^0.1.0",
    "jsonwebtoken": "^8.5.1",
    "method-override": "^3.0.0",
    "mocha": "^8.2.0",
    "moment": "^2.29.1",
    "multer": "^1.4.3",
    "mysql2": "^2.2.5",
    "nodemon": "^2.0.12",
    "passport": "^0.4.1",
    "passport-jwt": "^4.0.0",
    "passport-local": "^1.0.0",
    "pg": "^8.7.1",
    "sequelize": "^6.3.5",
    "sequelize-cli": "^6.2.0",
    "sinon": "^9.2.0",
    "supertest": "^5.0.0"
  
