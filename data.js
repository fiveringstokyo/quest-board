// ===== プロジェクト状況データ =====
// この中身はClaudeが作業するたびに書き換える。
// 君は index.html をブラウザで開いて、F5（更新）するだけ。
// state の意味: done=完了 / working=作業中 / waiting=君待ち / todo=未着手 / blocked=詰まってる
//
// ※このページは公開URLなので、パスワード・個人情報・機微な中身は載せない。

window.DASH = {
  updated: "2026-07-14",
  projects: [
    {
      id: "sengoku",
      name: "戦国ゲーム『緋川／過去帳』",
      emoji: "⚔️",
      genre: "創作 / ノベル+シミュレーションゲーム",
      color: "#a06be0",
      progress: 85,
      status: "active",
      headline: "コードはほぼ完成。あとは実機調整と素材づくり待ち（オーナー待ち）",
      party: [
        { emoji: "🗺", role: "マップ/戦闘担当", state: "done",    note: "巨城S6マップ＋賢くなった敵AI 完成" },
        { emoji: "🎭", role: "演出担当",        state: "done",    note: "カットイン/討ち取り/勝鬨/ピンチ演出 完成" },
        { emoji: "📜", role: "台本担当",        state: "done",    note: "全6話＋エンディング演出 完成" },
        { emoji: "🎮", role: "バランス調整担当", state: "waiting", note: "実機で遊んで難易度を詰める ← 最優先・君の番" },
        { emoji: "🔊", role: "効果音/素材担当",  state: "waiting", note: "効果音8つ＋墨書PNG 生成待ち" },
        { emoji: "🎨", role: "立ち絵/CG担当",    state: "waiting", note: "差し替えCG＋新キャラ籾の立ち絵 生成待ち（要pod）" },
        { emoji: "🎬", role: "特典映像担当",     state: "blocked", note: "種画像が行方不明＋pod起動（課金）が要る" }
      ],
      forYou: [
        "巨城S6を実際に遊んで「難しすぎ/緩すぎ」を見てほしい（最優先）",
        "効果音・CG・特典映像はpod起動＝課金が要る。やる時は合図ちょうだい"
      ]
    },
    {
      id: "survival",
      name: "サバイバル本『そのとき、どう動くか』",
      emoji: "📕",
      genre: "出版 / 防災・実用書",
      color: "#e0533d",
      progress: 85,
      status: "active",
      headline: "本文は完成・校正済み。出版直前。KDP登録がボトルネック",
      party: [
        { emoji: "🖊", role: "原稿担当",        state: "done",    note: "全48本・約15万字 完成" },
        { emoji: "🔍", role: "校正/監査担当",    state: "done",    note: "著作権・脚注・品質チェック 済み" },
        { emoji: "📖", role: "EPUB担当",         state: "working", note: "KDP入稿ファイルはできたが章内ナビが粗い→改善中" },
        { emoji: "📐", role: "記入シート整理担当", state: "waiting", note: "重複の整理は設計判断（雑にやると壊れる）" },
        { emoji: "👓", role: "医療監修担当",     state: "waiting", note: "救急ページの監修を発売前に取るか判断" },
        { emoji: "🎨", role: "表紙担当",         state: "todo",    note: "デザイン発注 未着手" },
        { emoji: "📤", role: "KDP出版担当",      state: "waiting", note: "出品パック完成済み。KDPアカウント作成が関門" },
        { emoji: "🌍", role: "英語版担当",       state: "todo",    note: "日本語確定後に英語ローカライズ" }
      ],
      forYou: [
        "KDPアカウント作成＋税務＋口座（1回・約1時間）だけが関門。ここ越えたら出版一直線",
        "救急ページの医療監修を取るかどうか決めてほしい"
      ]
    },
    {
      id: "bantou",
      name: "ビジネス分析（物販）／番頭システム",
      emoji: "📈",
      genre: "ビジネス / 物販の利益分析・自動化",
      color: "#e0a53d",
      progress: 60,
      status: "active",
      headline: "目標=年収500万（副業で月11〜12万手取り）。今 月約6.6万→あと月4〜5万を埋める",
      party: [
        { emoji: "🔎", role: "目利き班(仕入れ)",  state: "working", note: "ヤフオク巡回レシピ完成→毎朝の自動実行を実装待ち" },
        { emoji: "🏪", role: "店先班(出品)",       state: "working", note: "出品テンプレ完成→理想画像＆eBay登録承認待ち" },
        { emoji: "📒", role: "帳場班(帳簿/税務)",  state: "done",    note: "販売分析・古物台帳・会計取込 土台完成" },
        { emoji: "📊", role: "戦略担当",           state: "done",    note: "「甲冑 月2点で目標達成」の勝ち筋 確定" }
      ],
      forYou: [
        "⏰ 今日(7/14)の予定: eBayのオファー送信＋臨時休業の解除。「オファー送るよ」と言えば5分でやる",
        "理想画像3〜5枚 / 購入履歴スクショで古物台帳を補完（いつでも）",
        "eBay開発者登録の承認 → 出品下書きの自動化がオンになる"
      ]
    },
    {
      id: "yt",
      name: "YouTube要約ツール（/yt）",
      emoji: "📺",
      genre: "自動化ツール",
      color: "#3d7de0",
      progress: 100,
      status: "done",
      headline: "完成・運用中。URL貼るだけで日本語要約→Gmail下書き",
      party: [
        { emoji: "⚙", role: "取得担当", state: "done",    note: "字幕取得の仕組み完成" },
        { emoji: "📝", role: "要約担当", state: "done",    note: "テーマ別に束ねて要約" },
        { emoji: "📩", role: "配達担当", state: "waiting", note: "429で保留中の4本を、時間置いて再取得予定" }
      ],
      forYou: [
        "保留の4本、あとで『残り取って』って言ってくれたら取り直す"
      ]
    }
  ]
};
