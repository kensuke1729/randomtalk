const message_selfintroduction = [
    "どこに住んでいる?",
    "出身地は?",
    "休日はどんな過ごし方をしている?",
    "今日はどこからきたの?",
    "今の仕事のどんなところが好き?",
    "どんな仕事しているの ?",
    "どうして今の仕事を選んだの?",
    "動物に例えるならあなたはどんな人?",
    "普通の平日はどんな風に過ごしているの?",
    "どんな友達付き合いをしているの?",
    "今日の意気込みは?",
    "学生時代はどんなことをしていた?",
    "友達にはなんて呼ばれているの?",
    "なにかとっておきの特技はある?もしよかったら披露して。"
];
const messages_random = [
    "あなたのおすすめレストラン",
    "あなたのイチオシのアプリ紹介",
    "あなたのマイブーム",
    "あなたが最も幸せを感じる瞬間",
    "自分が大事にしている持ち物",
    "あなたの大好きな景色はどこ?",
    "生活のこだわり",
    "モーニングルーティーン",
    "ナイトルーティーン",
    "好きな食べ物・苦手な食べ物",
    "あなたのなまえの由来は?",
    "最近気になったニュースは?",
    "あなたのイチオシの旅行スポットは?",
    "友達にはどんな人と言われる?",
    "最近の失敗談",
    "家計簿はつける?",
    "健康には気をつけるタイプ?",
    "どんな食事が好み?",
    "おすすめの映画、なぜおすすめ?",
    "今一番行きたい場所はどこ?",
    "犬派?ネコ派?",
    "好きな季節は?",
    "夏といえば?",
    "もしも1億円あったら何がしたい?"
];
const messages_36questions = [
    "この世界の誰でもディナーに来てくれるとしたら、誰を誘いますか？",
    "有名になりたいですか？またどのようにして有名になりたいですか？",
    "電話をかける前に、何を話すか練習することがありますか？その理由は？",
    "あなたにとって「完璧な日」とはどんな日ですか？",
    "最後に1人で歌を歌ったのはいつですか？また、誰かに対して歌ったのはいつですか？",
    "あなたは90才まで生きることができ、最後の60年間を「30才の頃の肉体」か「30才の頃の精神」のどちらかを保つことができます。どちらを選びますか？",
    "自分がどのように死ぬか、何か予感はありますか？",
    "自分と相手の共通点を、3つ挙げてください。",
    "人生で最も感謝していること（人や物）は何ですか？",
    "自分の育てられた環境や境遇を一部修正できるなら、何を変えたいですか？",
    "4分間、あなたがこれまでどんな人生を歩んできたのか、できるだけ詳細に説明して下さい。",
    "明日の朝、目が覚めたときに何らかの才能や能力が身についています。どんな能力がいいですか？",
    "もしもあなたの将来や人生を教えてくれる水晶があったら、何を知りたいですか？",
    "昔からやりたい夢はありますか？あるとすれば、なぜ今できないのですか？",
    "これまでの自分の人生で一番の偉業は何ですか？",
    "友情において最も価値のあることは何ですか？",
    "一番大切な思い出は何ですか？",
    "一番最悪な思い出は何ですか？",
    "1年後に死ぬことが分かったら現在の生き方を変えますか？その理由は何ですか？",
    "あなたにとって「友情」とはなんですか？",
    "あなたの人生の中で「愛・愛情」はどのような役割を持っていますか？",
    "相手の長所を5つ挙げてください。お互い交互に1つずつ述べて下さい。",
    "家族と仲が良いですか？子供時代は他の人よりも幸せだと感じましたか？",
    "母親との関係をどう感じていますか？",
    "「私たちは」で始まる文章で、今の状況を3回描写して下さい。例えば「私たちはこの部屋にいて○○と感じている」など。",
    "「○○を共感できる人がいればいいのに」という文章を完成させてください。",
    "もしも今話している相手とより深い関係になるとして、あなたについて相手が知っておくべき重要なことは何ですか？",
    "相手の良いところは何ですか？初対面の人には言わないようなことを挙げて下さい。",
    "恥ずかしかった体験を相手に話してみて下さい。",
    "最後に他人の前で泣いたのはいつですか？また、1人で泣いたのはいつですか？",
    "相手のどんなところが好きですか？",
    "冗談でも言われたくないことはなんですか？",
    "今夜誰にも知られず死ぬとしたら、誰に何を伝えられてないと後悔しますか？そのことを言っていないのはなぜですか？",
    "全財産が全て詰まった家が火事になってしまいました。家族とペットを助け出した後、何か一つだけ取りに行くことができます。何を取りに行きますか？その理由はなんですか？",
    "家族の中で誰の死が最も悲しいですか？その理由はなんですか？",
    "個人的な心配事や問題を打ち明けて、相手ならどうするかアドバイスを受けて下さい。また、その心配事や問題を抱えるあなたが今どんな気持ちでいるのか、相手に想像・描写してもらって下さい。"
];

const messages_selfpriorities = [
    "これまで話してきて,相手のどんなところに興味を持ちましたか?",
    "お互いの第一印象は?",
    "今の心配ごとは?",
    "あなたはどんな人でありたい?",
    "将来の夢は?",
    "友達にはどんな人だと言われる?",
    "世の中のどんなニュースに関心 がある?",
    "機嫌が悪い時、あなたはどうする?",
    "自分の過去に戻れるとしたら戻りたい?いつに戻りたい?",
    "一つだけ魔法が使えるようになるなら、どんな魔法を使いたい?",
    "明日死ぬとしたら、今日一日を どうやって過ごしますか?",
    "困難なことに直面したとき、どうやって対処しますか?",
    "家族とは仲はいいですか?",
    "恥ずかしい思い出を話してください。",
    "1つだけ無人島にもっていけるとしたら,何を持っていきますか?",
    "子供の頃に実現したかった夢を教えて下さい。",
    "子供の頃はどんな子でしたか?",
    "今の自分を変えられるとしたら,どんなところを変えたい?",
    "自分がこの世を去る時、どんな風に去るのが理想?",
    "良好な人間関係を維持するのに大事なことはなんですか? ",
    "中高生の頃はどんなことに悩んでいましたか?",
    "中高生の頃はどんなことにワクワクしていましたか?",
    "自分の過去・現在・未来を1単語で表すと?そのわけは?",
    "人生で最も価値のあるものってあなたにとってどんなこと?",
    "あなたにとっていい人生とはどんな人生?",
    "自分のいいなと思うところを教えて?",
    "自分の弱みをこっそり教えて下さい ",
    "2人の共通点を3つあげてみて? ",
    "最後に泣いたのはいつ?それはなぜ?"
];

function change_message(msg_type) {
    let target_msg;
    if (msg_type == "self_introduction") {
        target_msg = message_selfintroduction
    } else if (msg_type == "questions") {
        target_msg = messages_36questions
    } else if (msg_type == "priorities") {
        target_msg = messages_selfpriorities
    } else {
        target_msg = messages_random
    }
    var contents = document.getElementById('random_contents').innerHTML
    const messageNo = Math.floor(Math.random() * target_msg.length);
    contents = target_msg[messageNo]
    document.getElementById("random_contents").innerHTML = contents;
}



