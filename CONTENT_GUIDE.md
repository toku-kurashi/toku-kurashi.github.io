# トクするくらし 運用ガイド（自動記事生成用）

このリポジトリは静的サイト（プレーンHTML、Jekyllなし、GitHub Pagesでmainブランチ直下を公開）。
このファイルは、週次の自動記事生成タスクが毎回参照する運用ルール。

## サイトの方針
- ジャンル：VOD（動画配信）無料体験系、クラウドソーシング/在宅ワーク系
- 記事は客観的な情報・比較記事のみ。**実体験してない一人称の体験談は書かない**（景品表示法の優良誤認表示リスク＋ASP規約違反リスクのため）
- アフィリエイトリンクには必ず `.cta` ボックス＋`.pr`（PR表記）を付ける
- 本文の文字数目安：**2,000〜3,000字程度**（2026-08-03改訂、旧基準1,500〜2,000字は薄すぎると判断し引き上げ）。文字数そのものよりも網羅性（比較表・メリデメ・選び方・FAQ等）を優先すること。目安として「選び方のポイント」セクションと「よくある質問」セクション（2〜3問）を必ず含める

## 使えるアフィリエイトリンク（この中から関連するものを記事に使う。新しいリンクが増えたら追記する）

### ABEMAプレミアム（VOD）
```html
<div class="cta">
<span class="pr">PR</span>
<a href="https://px.a8.net/svt/ejp?a8mat=4B8ACW+EWFKTU+4EKC+60WN6" rel="nofollow">すべての作品が見放題【ABEMA】</a><img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4B8ACW+EWFKTU+4EKC+60WN6" alt="">
</div>
```

### クラウディア（クラウドソーシング）
```html
<div class="cta">
<span class="pr">PR</span>
<a href="https://px.a8.net/svt/ejp?a8mat=4B8ACW+FEAKZ6+4F8I+C0IZL" rel="nofollow"><img border="0" width="234" height="60" alt="クラウドソーシングなら！Craudia" src="https://www20.a8.net/svt/bgt?aid=260727152931&wid=001&eno=01&mid=s00000020637002018000&mc=1"></a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B8ACW+FEAKZ6+4F8I+C0IZL" alt="">
</div>
```

### フジ子さん（オンラインアシスタント／クラウドソーシング隣接）
```html
<div class="cta">
<span class="pr">PR</span>
<a href="https://px.a8.net/svt/ejp?a8mat=4B8ACW+FG2VSI+3TWG+60WN6" rel="nofollow">オンラインアシスタント【フジ子さん】</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B8ACW+FG2VSI+3TWG+60WN6" alt="">
</div>
```

### クラウドワークス テック（フリーランス向けエージェント／クラウドソーシング隣接）
```html
<div class="cta">
<span class="pr">PR</span>
<a href="https://px.a8.net/svt/ejp?a8mat=4B8ACX+BB99U+2OM2+ZQ80I" rel="nofollow">クラウドワークス テック</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4B8ACX+BB99U+2OM2+ZQ80I" alt="">
</div>
```

### WOWOWオンデマンド（VOD）
```html
<div class="cta">
<span class="pr">PR</span>
<a href="https://px.a8.net/svt/ejp?a8mat=4B8ACW+EUNA0I+5DFW+5Z6WX" rel="nofollow"><img border="0" width="100" height="60" alt="" src="https://www29.a8.net/svt/bgt?aid=260727152898&wid=001&eno=01&mid=s0000002507001004000&mc=1"></a><img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4B8ACW+EUNA0I+5DFW+5Z6WX" alt="">
</div>
```


### 楽天トラベル（旅行予約／楽天アフィリエイト経由・2026-08-24追加）
※提携先は「楽天トラベル」。VOD・在宅ワーク記事とはテーマが合わないので、**旅行系の記事を書いたときだけ使う**。
※★元コードのバナー画像は `http://` だった。当サイトはHTTPSなので**`https://` に直して使う**（混在コンテンツでブロックされるため）。
```html
<a href="https://rpx.a8.net/svt/ejp?a8mat=4B8ACW+B0IPO2+2HOM+6I9N5&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0eb4779e.5d30c5ba.0eb4779f.b871e4e3%2Fa26072738906_4B8ACW_B0IPO2_2HOM_6I9N5%3Fpc%3Dhttp%253A%252F%252Ftravel.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Ftravel.rakuten.co.jp%252F" rel="nofollow"><img src="https://hbb.afl.rakuten.co.jp/hsb/0ea7f9a4.79280dcb.0ea7f99d.1ac92fca/153145/" border="0"></a><img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4B8ACW+B0IPO2+2HOM+6I9N5" alt="">
```

### 楽天市場（総合通販／楽天アフィリエイト経由・2026-08-25追加）
※提携先は「楽天市場」。バナーは総合通販なので、**物販の話題（在宅ワークの機材・生活用品など）に自然に絡む記事でだけ使う**。VOD比較記事に脈絡なく置かない。
※★元コードのバナー画像も `http://` だった。**`https://` に直して使う**（混在コンテンツでブロックされるため）。
```html
<a href="https://rpx.a8.net/svt/ejp?a8mat=4B8ACW+B0IPO2+2HOM+656YP&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0ea62065.34400275.0ea62066.204f04c0%2Fa26072738906_4B8ACW_B0IPO2_2HOM_656YP%3Fpc%3Dhttp%253A%252F%252Fwww.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Fm.rakuten.co.jp%252F" rel="nofollow"><img src="https://hbb.afl.rakuten.co.jp/hsb/0ec09ba3.bc2429d5.0eb4bbaa.95151395/" border="0"></a><img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=4B8ACW+B0IPO2+2HOM+656YP" alt="">
```

### ExpressVPN（VPNサービス・2026-08-24追加／2026-08-25に記事実装）
※★訴求の切り口は**公衆Wi-Fiでの通信の安全性**に限定する。「VPNで地域制限を回避して海外の配信を見る」という書き方は各VODの利用規約違反を勧める形になるので**書かない**。
```html
<a href="https://px.a8.net/svt/ejp?a8mat=4B8ACW+EDDPGY+5JSS+5YRHE" rel="nofollow">ExpressVPN</a><img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4B8ACW+EDDPGY+5JSS+5YRHE" alt="">
```
※実装済み：`articles/public-wifi-security-vpn-basics.html`（専用記事）と `articles/vod-video-quality-download-offline.html`（外出先で見るときの節）。

## 記事のHTMLテンプレート
`articles/` 配下の既存ファイル（例：`vod-free-trial-comparison.html`）をコピーして構造を踏襲すること。
- `<link rel="stylesheet" href="../style.css">`
- 直後に必ずアクセス解析タグを入れる：`<script data-goatcounter="https://toku-kurashi.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>`
- 見出し`h1`→更新日`<p class="date">`→**サムネイル画像（あれば）**`<img src="../images/<slug>.png" alt="..." class="article-thumb">`→本文→比較表（該当する場合）→`.cta`→`<div class="disclosure">`定型免責文→`<a class="back" href="../index.html">`

### サムネイル画像について（2026-08-06〜運用開始）
- 画像はユーザーがGemini等で生成し、Discord添付で送ってもらう（このPCではCodex CLI未インストールのため）。
- 保存先：`images/<記事slug>.png`（例：`images/online-assistant-fit-business-type.png`）。
- 記事側：`<img src="../images/<slug>.png" alt="内容を表す説明" class="article-thumb">`をh1直後・日付直後に挿入。
- スタイル：`style.css`の`.article-thumb`クラス（幅100%・角丸・自動高さ）を使う。
- 画風の指針：暖色系（オレンジ/クリーム）のフラットデザインイラスト、テキスト・ロゴなし、16:9、清潔感のあるビジネス系。サイトのfaviconと同系色でトーンを揃える。

## 実行手順（このガイドを参照するタスクが毎回行うこと）
1. `TOPICS.md` を読み、`未使用`の中から1つ選ぶ（ジャンルはVOD/クラウドソーシング両方から順番に）
2. `articles/<slug>.html` を新規作成し、客観的な情報記事を書く（該当するアフィリエイトリンクを1〜2個、上記から選んで`.cta`で挿入）
3. `index.html` の `<main>` 内、一覧の一番上に新しい記事カードを追加（既存カードは残す）。`<div class="card">` タグに `data-tag="tag-vod"` または `data-tag="tag-work"` を付ける（ヘッダーのフィルターメニューが参照する）。カードの一番最初の子要素として `<span class="card-icon">📺</span>`（VOD系）または `<span class="card-icon">💼</span>`（お仕事系）を入れる。その直後の `<span class="date">` の直後にジャンルタグを付ける：VOD系記事は `<span class="tag tag-vod">VOD</span>`、クラウドソーシング系記事は `<span class="tag tag-work">お仕事</span>`
   例：
   ```html
   <div class="card" data-tag="tag-vod">
     <span class="card-icon">📺</span>
     <span class="date">2026-08-05</span><span class="tag tag-vod">VOD</span>
     <h2><a href="articles/xxx.html">記事タイトル</a></h2>
     <p>要約文</p>
   </div>
   ```
4. `sitemap.xml` に新しい記事の `<url><loc>...</loc></url>` を追加
5. `TOPICS.md` のその項目を `使用済み（YYYY-MM-DD）` に変更
6. git add -A → commit（日本語で簡潔なメッセージ）→ push
