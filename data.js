// ===== プロジェクト状況データ =====
// この中身はClaudeが作業するたびに書き換える。君は F5（更新）するだけ。
// state: done=完了 / working=作業中 / waiting=君待ち / todo=未着手 / blocked=詰まり
// ※公開URLなので、パスワード・個人情報・機微な中身は載せない。

window.DASH = {
  updated: "2026-07-20",

  // --- プロジェクト各課 ---
  projects: [
    {
      id: "sengoku", name: "戦国ゲーム『緋川／過去帳』", short: "戦国課",
      emoji: "⚔️", genre: "創作 / ノベル+シミュレーションゲーム",
      color: "#a06be0", progress: 88, status: "active",
      headline: "コード完成。S6巨城を縄張り式に大改修（7/15）。あとは実機調整と素材待ち",
      party: [
        { emoji: "🗺", role: "マップ/戦闘担当", state: "done",    note: "S6巨城 縄張り式に大改修・テスト44項目OK（7/15完成）" },
        { emoji: "🎭", role: "演出担当",        state: "done",    note: "カットイン/討ち取り/勝鬨 完成" },
        { emoji: "📜", role: "台本担当",        state: "done",    note: "全6話＋エンディング 完成" },
        { emoji: "🎮", role: "バランス調整担当", state: "waiting", note: "実機で難易度を詰める ← 最優先" },
        { emoji: "🔊", role: "効果音/素材担当",  state: "waiting", note: "SE素材8つ＋墨書PNG 生成待ち" },
        { emoji: "🎨", role: "立ち絵/CG担当",    state: "waiting", note: "差替CG3枚＋籾立ち絵3段階 生成待ち" },
        { emoji: "🎬", role: "特典映像担当",     state: "blocked", note: "種画像の所在確認→pod起動(課金)で確認要" }
      ],
      forYou: [
        "S6巨城の実機バランステスト（最優先）。難しすぎたら敵を減らすだけで調整できる",
        "効果音・CG・特典映像は pod起動＝課金 が要る。やる時は合図を"
      ]
    },
    {
      id: "survival", name: "サバイバル本『そのとき、どう動くか』", short: "出版課",
      emoji: "📕", genre: "出版 / 防災・実用書",
      color: "#e0533d", progress: 85, status: "active",
      headline: "本文は完成・校正済み。出版直前。KDP登録が関門",
      party: [
        { emoji: "🖊", role: "原稿担当",       state: "done",    note: "全48本・約15万字 完成" },
        { emoji: "🔍", role: "校正/監査担当",   state: "done",    note: "著作権・脚注・品質 チェック済み" },
        { emoji: "📖", role: "EPUB担当",        state: "working", note: "入稿ファイルできたが章内ナビ改善中" },
        { emoji: "📐", role: "記入シート整理",   state: "waiting", note: "重複整理は設計判断（雑にやると壊れる）" },
        { emoji: "👓", role: "医療監修担当",     state: "waiting", note: "救急ページの監修を取るか判断" },
        { emoji: "🎨", role: "表紙担当",         state: "todo",    note: "デザイン発注 未着手" },
        { emoji: "📤", role: "KDP出版担当",      state: "waiting", note: "出品パック完成。アカウント作成が関門" },
        { emoji: "🌍", role: "英語版担当",       state: "todo",    note: "日本語確定後にローカライズ" }
      ],
      forYou: [
        "KDPアカウント作成＋税務＋口座（1回・約1時間）が関門。越えたら出版一直線",
        "救急ページの医療監修を取るか決めてほしい"
      ]
    },
    {
      id: "bantou", name: "ビジネス分析（物販）／番頭システム", short: "物販課",
      emoji: "📈", genre: "ビジネス / 物販の利益分析・自動化",
      color: "#e0a53d", progress: 60, status: "active",
      headline: "目標=年収500万。今 月約6.6万→あと月4〜5万を埋める",
      party: [
        { emoji: "🔎", role: "目利き班(仕入れ)",  state: "working", note: "巡回レシピ完成→毎朝の自動実行を実装待ち" },
        { emoji: "🏪", role: "店先班(出品)",       state: "working", note: "出品テンプレ完成→画像＆eBay登録待ち" },
        { emoji: "📒", role: "帳場班(帳簿/税務)",  state: "done",    note: "販売分析・古物台帳・会計取込 完成" },
        { emoji: "📊", role: "戦略担当",           state: "done",    note: "「甲冑 月2点で目標達成」確定" }
      ],
      forYou: [
        "🔴 最優先：eBayでオファー送信（甲冑$1,396・春画$251）→ 5分で終わる。6日寝てる",
        "甲冑を28点版に更新→eBay現行出品236859180620を開いて写真/スペックをコピペ",
        "理想画像3〜5枚 / 購入履歴スクショで台帳補完 / eBay開発者登録の承認（任意・いつでも）"
      ]
    },
    {
      id: "yt", name: "YouTube要約ツール（/yt）", short: "ツール課",
      emoji: "📺", genre: "自動化ツール",
      color: "#3d7de0", progress: 100, status: "done",
      headline: "完成・運用中。URL貼るだけで日本語要約→Gmail下書き",
      party: [
        { emoji: "⚙", role: "取得担当", state: "done",    note: "字幕取得の仕組み完成" },
        { emoji: "📝", role: "要約担当", state: "done",    note: "テーマ別に束ねて要約" },
        { emoji: "📩", role: "配達担当", state: "waiting", note: "429で保留の4本を時間置いて再取得" }
      ],
      forYou: ["保留の4本、あとで『残り取って』で取り直す"]
    }
  ],

  // --- 横断の支援課（プロジェクト横断で手伝う課。進捗バーは無し）---
  support: [
    {
      id: "legal", name: "法務課", short: "法務", emoji: "⚖️", color: "#6bb0e0",
      role: "著作権・各サイトの利用規約・表現のリスクを見張る係。",
      can: ["本や商品説明の著作権チェック", "eBay/メルカリ等の規約違反チェック", "免責文・注意書きの下書き", "契約・許諾まわりの相談"],
      forYou: []
    },
    {
      id: "clerical", name: "事務課", short: "事務", emoji: "🗃", color: "#8ea0b8",
      role: "こまごました事務処理を片づける係。",
      can: ["ファイル整理・名前づけ", "メール下書き", "表・リスト・集計づくり", "データの転記・まとめ"],
      forYou: []
    }
  ]
};
