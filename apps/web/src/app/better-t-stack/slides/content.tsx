import Image from "next/image";
import amanProfileImg from "./assets/amanProfile.png";
import amanReplyImg from "./assets/amanReply.png";
import betterTstackImg from "./assets/better-t-stack.png";
import burioImg from "./assets/burio-com.png";
import issueImg from "./assets/burioIssue.png";
import burioTweetImg from "./assets/buriotweet.png";
import cliBuilderImg from "./assets/cli-builder.png";
import SorryImg from "./assets/Sorry.png";
import vercelImg from "./assets/vercel.png";
import webBuilderImg from "./assets/web-builder.png";

const R2_BASE = process.env.NEXT_PUBLIC_R2_BASE_URL;
const BG_HEADING = `${R2_BASE}/外部登壇資料テンプレ/千_外部登壇スライド_見出し.png`;
const BG_CONTENT = `${R2_BASE}/外部登壇資料テンプレ/千_外部登壇スライド_本文.png`;
const BG_BACK_COVER = `${R2_BASE}/外部登壇資料テンプレ/千_外部登壇スライド_裏表紙.png`;

export default function Content() {
  return (
    <>
      {/* 見出しスライド */}
      <section data-background-image={BG_HEADING} data-background-size="contain">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-center">
            個人で作成したものを
            <br />
            どこにデプロイしてますか？？
          </h1>
        </div>
      </section>
      <section data-background-image={BG_HEADING} data-background-size="contain">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-center">
            もちろん
            <br />
            Cloudflare Workers/Pagesですよね
          </h1>
        </div>
      </section>
      {/* 本文スライド */}
      <section data-background-image={BG_CONTENT} data-background-size="contain">
        <div className="flex h-full flex-row items-center justify-center">
          <div className="text-left text-black">
            私も自分のサイトを
            <br />
            Cloudflareにデプロイしました
          </div>
          <Image src={burioImg} alt="説明" />
        </div>
      </section>
      <section data-background-image={BG_HEADING} data-background-size="contain">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-center">できたッ！LT完！🫵</h1>
        </div>
      </section>
      <section data-background-image={BG_BACK_COVER} data-background-size="contain" />
      <section data-background-image={BG_HEADING} data-background-size="contain">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-center">
            ではどんな技術スタックで
            <br />
            デプロイしてますか？
          </h1>
        </div>
      </section>
      <section data-background-image={BG_HEADING} data-background-size="contain">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-center">
            ライブラリいちいち入れて
            <br />
            設定するのめんどくさくないですか？
          </h1>
        </div>
      </section>
      <section data-background-image={BG_CONTENT} data-background-size="contain">
        <Image src={betterTstackImg} alt="Better T-Stackのトップ画面" className="r-stretch" />
      </section>
      <section data-background-image={BG_CONTENT} data-background-size="contain">
        <div className="flex h-full flex-row items-center justify-center">
          <div className="flex flex-col">
            <h2 className="text-left text-black">Better T Stack</h2>

            <div className="text-left text-black">
              TypeScriptを使用して開発するためのプロジェクトビルダー
            </div>
            <ul className="text-left text-black">
              <li> Webでの選択形式</li>
              <li> CLIでの対話形式</li>
            </ul>
          </div>

          <div className="r-stack">
            <Image
              src={webBuilderImg}
              className="fragment fade-out"
              data-fragment-index="0"
              alt="Web Builder"
            />
            <Image
              src={cliBuilderImg}
              className="fragment fade-in"
              data-fragment-index="0"
              alt="CLI Builder"
            />
          </div>
        </div>
      </section>
      <section data-background-image={BG_HEADING} data-background-size="contain">
        <div className="flex h-full flex-col items-center justify-center">
          <h1 className="text-center">実際にやってみた</h1>
          <a href="https://www.better-t-stack.dev/new" className="text-blue-600">
            https://www.better-t-stack.dev/new
          </a>
        </div>
      </section>
      <section data-background-image={BG_CONTENT} data-background-size="contain">
        <div className="flex h-full flex-col justify-center">
          <h2 className="text-left text-black">Better T Stack使ってみて良かったところ</h2>
          <ul className="space-y-2 text-left text-black md:space-y-4 lg:space-y-6">
            <li>一発で環境構築完了</li>
            <li>選択肢が多く新たな出会いがある</li>
            <li>オプションが優秀</li>
          </ul>
        </div>
      </section>
      {/* 残念だったところ + 余談（issueは縦スライド） */}
      <section>
        <section data-background-image={BG_CONTENT} data-background-size="contain">
          <div className="flex h-full flex-col justify-center">
            <h2 className="text-left text-black">Better T Stack使ってみて残念だったところ</h2>
            <ul className="space-y-2 text-left text-black md:space-y-4 lg:space-y-6">
              <li>CSS,UIライブラリの選択ができない</li>
              <li>テストライブラリが搭載されてない</li>
              <li>wranglerのサポートを終了していた</li>
              <li>日本語のドキュメントがない</li>
            </ul>
          </div>
        </section>
        {/* 余談: 下矢印で表示 */}
        <section data-background-image={BG_CONTENT} data-background-size="contain">
          <div className="flex h-full flex-row items-center justify-center">
            <div className="text-left text-black">
              vercelのOSS支援プログラムに選ばれていました🔥
            </div>
            <Image src={vercelImg} alt="vercelの支援プログラム" className="r-stretch" />{" "}
          </div>
        </section>
      </section>
      <section data-background-image={BG_CONTENT} data-background-size="contain">
        <div className="flex h-full flex-row items-center justify-center gap-8">
          <div className="w-[30%] text-left text-black">issue建ててみました。</div>
          <Image
            src={issueImg}
            alt="ぶりおがissue建てている様子"
            className="r-stretch !max-w-[60%]"
          />
        </div>
      </section>
      <section data-background-image={BG_CONTENT} data-background-size="contain">
        <div className="flex h-full flex-row items-center justify-center gap-8">
          <div className="w-[30%] text-left text-black">
            ここであることに気づきました。
            <br />
            <br />
            日本好きそうじゃね...?
          </div>
          <Image
            src={amanProfileImg}
            alt="アマンのプロフィール"
            className="r-stretch !max-w-[60%]"
          />
        </div>
      </section>
      <section data-background-image={BG_CONTENT} data-background-size="contain">
        <div className="flex h-full flex-row items-center justify-center gap-8">
          <div className="w-[30%] text-left text-black">Twitterで釣ろうとしてみました。</div>
          <Image src={burioTweetImg} alt="ぶりおのツイート" className="r-stretch !max-w-[60%]" />
        </div>
      </section>
      <section data-background-image={BG_CONTENT} data-background-size="contain">
        <div className="flex h-full flex-row items-center justify-center gap-8">
          <div className="w-[30%] text-left text-black">
            普通に釣れたので、
            <br />
            お願いしてみました。
          </div>
          <Image src={amanReplyImg} alt="アマンのリプライ" className="r-stretch !max-w-[60%]" />
        </div>
      </section>
      <section data-background-image={BG_CONTENT} data-background-size="contain">
        <div className="flex h-full flex-row items-center justify-center gap-8">
          <div className="w-[30%] text-left text-black">
            ふられました。
            <br />
            無念。
          </div>
          <Image src={SorryImg} alt="ごめんなさい" className="r-stretch !max-w-[60%]" />
        </div>
      </section>
      <section data-background-image={BG_HEADING} data-background-size="contain">
        <div className="flex h-full items-center justify-center">
          <h1 className="text-center">
            やんわりと断られましたが、
            <br />
            これからもBetter T Stack使い倒すぞ！！
          </h1>
        </div>
      </section>
      <section data-background-image={BG_CONTENT} data-background-size="contain">
        <div className="flex h-full flex-col justify-center">
          <h2 className="text-left text-black">まとめ</h2>
          <ul className="space-y-2 text-left text-black md:space-y-4 lg:space-y-6">
            <li>
              Better T Stackは TypeScriptを使用して開発するための環境を
              <br />
              一発で作成できる
            </li>
            <li>
              Cloudflareにデプロイするための選択肢も入っていて、
              <br />
              Cloudflare側のテンプレよりも便利なものを簡単に入れることができる
            </li>
            <li>欠点もまだまだあるが、vercelのプログラムに選ばれており、今後の進化に期待</li>
          </ul>
        </div>
      </section>
    </>
  );
}
