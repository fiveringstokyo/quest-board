// ===== プロジェクト状況データ =====
// この中身はClaudeが作業するたびに書き換える。
// 君は index.html をブラウザで開いて、F5（更新）するだけ。
// state の意味: done=完了 / working=作業中 / waiting=待ち / todo=未着手 / blocked=詰まってる

window.DASH = {
  updated: "2026-07-14",
  projects: [
    {
      id: "survival",
      name: "サバイバル本『そのとき、どう動くか』",
      emoji: "📕",
      genre: "出版 / 防災",
      color: "#e0533d",
      progress: 80,
      status: "active",
      headline: "今の主戦場。あと一息で出版までいける",
      party: [
        { emoji: "🖊", role: "原稿担当",       state: "done",    note: "本文は書き上がり済み" },
        { emoji: "🔍", role: "監査担当",       state: "working", note: "事実・数字の裏取り 残り数章 ← 今ここ" },
        { emoji: "👓", role: "監修担当",       state: "waiting", note: "専門家チェックの依頼準備中" },
        { emoji: "🎨", role: "表紙担当",       state: "todo",    note: "デザイン未着手" },
        { emoji: "📤", role: "KDP担当",        state: "todo",    note: "Amazon出版登録 未着手" },
        { emoji: "🎬", role: "YouTube化担当",  state: "todo",    note: "本の内容を動画に 未着手" }
      ],
      forYou: ["監査の方向性、この内容で進めてOKか一度ざっと見てほしい"]
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
        { emoji: "⚙", role: "取得担当",   state: "done",    note: "字幕取得の仕組み完成" },
        { emoji: "📝", role: "要約担当",   state: "done",    note: "テーマ別に束ねて要約" },
        { emoji: "📩", role: "配達担当",   state: "waiting", note: "429で保留の4本を時間置いて再取得" }
      ],
      forYou: ["保留の4本、あとで『残り取って』って言ってくれたら取り直す"]
    },
    {
      id: "resell",
      name: "物販コンサル（eBay/メルカリ 他）",
      emoji: "💰",
      genre: "ビジネス / 転売",
      color: "#3fae6b",
      progress: 40,
      status: "active",
      headline: "目標月収に向けて。仕入れ〜出品の相談役",
      party: [
        { emoji: "🔎", role: "リサーチ担当", state: "todo", note: "売れ筋・仕入れ先の分析（依頼あれば動く）" },
        { emoji: "📊", role: "分析担当",     state: "idle", note: "数字が来たら利益計算・戦略提案" }
      ],
      forYou: []
    },

    // ↓↓↓ ここから下は君が例に出したやつ。中身が分からんから仮で置いてある ↓↓↓
    {
      id: "sengoku",
      name: "戦国ゲーム ❓",
      emoji: "⚔️",
      genre: "（教えて）",
      color: "#a06be0",
      progress: 0,
      status: "idle",
      headline: "← これ何のプロジェクト？中身を教えてくれたら埋めるで",
      party: [
        { emoji: "❓", role: "未設定", state: "todo", note: "どんな役割が要るか一緒に決めよう" }
      ],
      forYou: ["これが何のプロジェクトか教えて（ゲーム制作？ゲーム攻略？）"]
    },
    {
      id: "bizanalysis",
      name: "ビジネス分析 ❓",
      emoji: "📈",
      genre: "（教えて）",
      color: "#e0a53d",
      progress: 0,
      status: "idle",
      headline: "← これも中身を教えてくれたら埋める",
      party: [
        { emoji: "❓", role: "未設定", state: "todo", note: "何を分析したいか教えて" }
      ],
      forYou: ["何のビジネスを分析したいのか教えて"]
    }
  ]
};
