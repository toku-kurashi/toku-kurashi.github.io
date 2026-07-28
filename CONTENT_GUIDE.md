# トクするくらし 運用ガイド（自動記事生成用）

このリポジトリは静的サイト（プレーンHTML、Jekyllなし、GitHub Pagesでmainブランチ直下を公開）。
このファイルは、週次の自動記事生成タスクが毎回参照する運用ルール。

## サイトの方針
- ジャンル：VOD（動画配信）無料体験系、クラウドソーシング/在宅ワーク系
- 記事は客観的な情報・比較記事のみ。**実体験してない一人称の体験談は書かない**（景品表示法の優良誤認表示リスク＋ASP規約違反リスクのため）
- アフィリエイトリンクには必ず `.cta` ボックス＋`.pr`（PR表記）を付ける
- 本文の文字数目安：1,500〜2,000字程度（見出し・比較表を除く本文部分）

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

### WOWOWオンデマンド（VOD）
```html
<div class="cta">
<span class="pr">PR</span>
<a href="https://px.a8.net/svt/ejp?a8mat=4B8ACW+EUNA0I+5DFW+5Z6WX" rel="nofollow"><img border="0" width="100" height="60" alt="" src="https://www29.a8.net/svt/bgt?aid=260727152898&wid=001&eno=01&mid=s0000002507001004000&mc=1"></a><img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4B8ACW+EUNA0I+5DFW+5Z6WX" alt="">
</div>
```

## 記事のHTMLテンプレート
`articles/` 配下の既存ファイル（例：`vod-free-trial-comparison.html`）をコピーして構造を踏襲すること。
- `<link rel="stylesheet" href="../style.css">`
- 直後に必ずアクセス解析タグを入れる：`<script data-goatcounter="https://toku-kurashi.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>`
- 見出し`h1`→更新日`<p class="date">`→本文→比較表（該当する場合）→`.cta`→`<div class="disclosure">`定型免責文→`<a class="back" href="../index.html">`

## 実行手順（このガイドを参照するタスクが毎回行うこと）
1. `TOPICS.md` を読み、`未使用`の中から1つ選ぶ（ジャンルはVOD/クラウドソーシング両方から順番に）
2. `articles/<slug>.html` を新規作成し、客観的な情報記事を書く（該当するアフィリエイトリンクを1〜2個、上記から選んで`.cta`で挿入）
3. `index.html` の `<main>` 内、一覧の一番上に新しい記事カードを追加（既存カードは残す）
4. `sitemap.xml` に新しい記事の `<url><loc>...</loc></url>` を追加
5. `TOPICS.md` のその項目を `使用済み（YYYY-MM-DD）` に変更
6. git add -A → commit（日本語で簡潔なメッセージ）→ push
