"use client";
import Head from "next/head";
import classNames from "classnames";
import Image from "next/image";
import soraImage from "../../public/pic.png";
import picImage from "../../public/pic.png";
import pic2Image from "../../public/pic2.png";
import { useState } from "react";

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const title = "Next.js page";
  const myBeforeStyle = [
    "before:ml-0.5",
    "before:text-yellow-500",
    //"before:content-['0828_2_fontfamily_']",
  ];
  const myHiddenTextStyle = [
    "px-2",
    "py-1",
    "m-5",
    "w-1/3",
    "text-xl",
    "text-white",
    //"bg-yellow-300",
  ];

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <div
        className={classNames([
          myBeforeStyle,
          String.raw`before:content-['0828\_2\_fontfamily_']`,
        ])}
      >
        <div className="font-serif">
          {/*sansに新しい要素"Lato"を追加*/}
          <div className="container mx-auto">
            <h1 className="mb-4 text-4xl font-bold">
              CSS Training. *** Font Example
            </h1>
            <p className="text-lg">This paragraph uses the *** font family.</p>
          </div>
        </div>
      </div>

      <div
        className={classNames([myBeforeStyle, "before:content-['0827_bg_']"])}
      >
        <button className="rounded bg-blue-500/50 px-4 py-2 text-white hover:bg-red-500/100 active:bg-mypurple-500/100">
          Warning Button
        </button>
      </div>

      <div
        className={classNames(
          [myBeforeStyle, "before:content-['0828_text_']", "!important"],
          "font-sans",
        )}
      >
        <p className="bg-mypurple-500/25 p-4 text-mypurple-800/50 hover:text-red-500/100">
          mycolored div with text.
        </p>
        <p className="text-sm">00012357435aaa</p>
        <p className="text-sm/none tabular-nums">00012357435aaa</p>
        <p className="text-sm/10 slashed-zero">00012357435aaa</p>
        <p className="text-sm/none diagonal-fractions">00012357435aaa</p>
        <p className="text-sm/tight underline decoration-solid">text.</p>
        <p className="text-sm/none underline decoration-double">text.</p>
        <p className="text-sm/none font-thin underline decoration-wavy">
          text.
        </p>
        <p className="text-sm/none font-bold underline decoration-sky-400/50 underline-offset-2 hover:decoration-red-600 ">
          text.
        </p>
        <p className="text-sm/none font-bold underline decoration-sky-400/50 decoration-8 hover:decoration-red-600 ">
          text.
        </p>
        <p className="text-sm tracking-tighter">letterSpacing</p>
        <p className="text-sm tracking-widest">letterSpacing</p>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0828_6_balance']",
        ])}
      >
        <p className="text-balance">
          ハンドラーを使用して、状態を管理せずにダイアログを表示することは可能ですが、その場合はモーダルダイアログを表示するための方法が変わります。一般的には、ポータルを使用してモーダルをポップアップさせることがあります。
        </p>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0829_1_padding']",
        ])}
      >
        <div className="flex flex-row justify-start">
          <div className="w-1/3 bg-gray-200 pr-8">
            <p className="text-balance">上にパディング24px</p>
            <p className="text-balance">右にパディング-8px</p>
            <p className="text-balance">左右にパディング8px</p>
            <p className="text-balance">上下にパディング自動</p>
            <p className="text-balance">画面サイズで上下にパディング16px</p>
          </div>
          <div className="w-2/3 ">
            <p className="text-balance bg-gray-300 pt-6">上にパディング24px</p>
            <p className="-pr-2 text-balance bg-blue-300">右にパディング-8px</p>
            <p className="text-balance bg-gray-300 py-2">上下にパディング8px</p>
            <p className="py-auto text-balance bg-red-300">
              上下にパディング自動
            </p>
            <p className="text-balance bg-gray-300 md:py-4">
              画面サイズで上下にパディング16px
            </p>
          </div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0829_0_margin']",
        ])}
      >
        <div className="flex flex-row justify-start">
          <div className="w-1/3 pr-8">
            <p className="text-balance">上にマージン24px</p>
            <p className="text-balance">右にマージン-8px</p>
            <p className="text-balance">左右にマージン8px</p>
            <p className="text-balance">上下にマージン自動</p>
            <p className="text-balance">画面サイズで上下にマージン16px</p>
          </div>
          <div className="w-2/3">
            <p className="mt-6 text-balance bg-gray-300">上にマージン24px</p>
            <p className="-mr-2 text-balance bg-blue-300">右にマージン-8px</p>
            <p className="my-2 text-balance bg-gray-300">上下にマージン8px</p>
            <p className="my-auto text-balance bg-blue-300">
              上下にマージン自動
            </p>
            <p className="text-balance bg-gray-300 md:my-4">
              画面サイズで上下にマージン16px
            </p>
          </div>
        </div>
      </div>

      <div
        className={classNames([myBeforeStyle, "before:content-['0830_0_w_h']"])}
      >
        <div className="flex flex-col items-center justify-center">
          <div className="flex h-1/2 w-1/4 items-center justify-center bg-gray-200">
            <p className="text-balance">
              この要素は親要素の幅と高さのそれぞれの半分の大きさに設定されています。
            </p>
          </div>
        </div>

        <hr className="my-2" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex size-1/2 items-center justify-center bg-gray-200">
            <p className="text-balance">
              この要素は親要素の幅と高さのそれぞれの半分の大きさに設定されています。
            </p>
          </div>
        </div>
        <hr className="my-2" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex size-auto items-center justify-center bg-gray-200">
            <p className="text-balance">
              この要素は親要素の幅と高さのそれぞれの半分の大きさに設定されています。
            </p>
          </div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0831_0_aspect']",
        ])}
      >
        <Image
          src={soraImage}
          alt={`Image test`}
          className="aspect-square w-1/5"
        />
        <Image
          src={soraImage}
          alt={`Image test`}
          className="aspect-auto w-1/5"
        />
        <Image
          src={soraImage}
          alt={`Image test`}
          className="aspect-video w-1/5"
        />
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0831_1_youtube']",
        ])}
      >
        <iframe
          src="https://www.youtube.com/watch?v=AXLWCvfrlIs"
          title="YouTube video player"
          className="h-30 aspect-video"
        ></iframe>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0833_rounded']",
        ])}
      >
        <button className="rounded-r-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Click me
        </button>
        <button className="rounded-l-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Click me
        </button>
        <button className="rounded-t-xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Click me
        </button>
        <button className="rounded-br-xl bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Click me
        </button>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0834_1_bg-gradient']",
        ])}
      >
        <div className="h-20 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500">
          ここに背景に適用したい要素の内容を追加します
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0834_0_bg-*jpg']",
        ])}
      >
        <div className="h-screen bg-[url('../../public/bluescreen.jpg')] bg-cover">
          ここに背景に適用したい要素の内容を追加します
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0851_0_bg-blend']",
        ])}
      >
        <div className="bg-blue-400 bg-[url('../../public/pic.png')] bg-blend-multiply">
          背景画像に青を乗算で重ねる
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0852_0_blur_shadow']",
        ])}
      >
        <div className="bg-[url('../../public/pic.png')] blur-sm">背景画像</div>
        <Image
          src={soraImage}
          alt={`Image test`}
          className="aspect-video w-1/2 shadow-red-700 drop-shadow-2xl"
        />
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0836_0_after']",
        ])}
      >
        <label>
          <span className="after:ml-0.5 after:text-red-500 after:content-['###']">
            text
          </span>
        </label>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0837_0_0_hidden']",
        ])}
      >
        <div
          className={classNames(myHiddenTextStyle, "bg-slate-300", "sm:hidden")}
        >
          心理(スクリーンサイズ変更でhidden)
        </div>
        <div
          className={classNames(
            myHiddenTextStyle,
            "bg-yellow-300",
            "hidden",
            "sm:block",
            "md:hidden",
          )}
        >
          戦略
        </div>
        <div
          className={classNames(
            myHiddenTextStyle,
            "bg-blue-200",
            "hidden",
            "md:block",
          )}
        >
          資金管理
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0837_1_invisible_0840_0_table']",
        ])}
      >
        <table className="table-fixed hover:invisible">
          <caption className="caption-bottom text-blue-400">
            表1: table例(hoverして非表示だがhの行間が埋まらないのでGood)
          </caption>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Row 1, Cell 1</td>
              <td>Row 1, Cell 2</td>
            </tr>
            <tr>
              <td>Row 2, Cell 1</td>
              <td>Row 2, Cell 2</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0839_0_list']",
        ])}
      >
        {/* list-discの例 */}
        <div className="m-4 box-border border-4">
          <ul className="mx-2 list-decimal">
            {/* リストアイテム */}
            <li className="border border-black p-4">
              <p className="text-balance">Item 1</p>
            </li>
            <li className="border border-black p-4">
              <p className="text-balance">Item 2</p>
            </li>
            <li className="border border-black p-4">
              <p className="text-balance">Item 3</p>
            </li>
          </ul>
        </div>

        {/* list-discの例 */}
        <div className="m-4 box-border border-4">
          <ul className="mx-2 list-myRoman marker:text-red-500">
            {/* リストアイテム */}
            <li className="border border-black p-4">
              <p className="text-balance">Item 1</p>
            </li>
            <li className="border border-black p-4">
              <p className="text-balance">Item 2</p>
            </li>
            <li className="border border-black p-4">
              <p className="text-balance">Item 3</p>
            </li>
          </ul>
        </div>

        {/* list-discの例 */}
        <div className="m-4 box-border border-4">
          <ul className="mx-2 list-image-myIcon">
            {/* リストアイテム */}
            <li className="border border-black p-4">
              <p className="text-balance">Item 1</p>
            </li>
            <li className="border border-black p-4">
              <p className="text-balance">Item 2</p>
            </li>
            <li className="border border-black p-4">
              <p className="text-balance">Item 3</p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={classNames([myBeforeStyle, "before:content-['0832_0_box']"])}
      >
        <div className="m-4 box-border border-4 p-4">
          <p>box-borderクラスが適用された要素</p>
        </div>

        <div className="m-4 box-content border-4 p-4">
          <p>box-contentクラスが適用された要素</p>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0829_2_flex_space_border_0829_3_divide']",
        ])}
      >
        <div className="flex space-x-4">
          {/*space-x-4 マージン(子要素に干渉する)*/}
          <div className="border border-black p-4">
            <p className="text-balance">Element 1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 3</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 4</p>
          </div>
        </div>

        <hr className="my-2" />

        <div className="flex -space-x-4">
          {/*■★マイナスマージン flex -space-x-4*/}
          <div className="border border-black p-4">
            <p className="text-balance">Element 1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 3</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 4</p>
          </div>
        </div>

        <hr className="my-2" />

        <div className="flex space-x-4 divide-x-2 divide-dotted divide-blue-300">
          <div className="p-4">
            <p className="text-balance">Element 1</p>
          </div>
          <div className="p-4">
            <p className="text-balance">Element 2</p>
          </div>
          <div className="p-4">
            <p className="text-balance">Element 3</p>
          </div>
          <div className="p-4">
            <p className="text-balance">Element 4</p>
          </div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0838_0_11_flex']",
        ])}
      >
        {/* justify-centerははみ出す */}
        <div className="mx-2 flex flex-row justify-center gap-x-10 gap-y-4">
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-3</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-3</p>
          </div>
        </div>
        <hr className="my-2" />

        {/* justify-betweenははみ出るがスライダーで見れる */}
        <div className="mx-2 flex flex-row justify-between gap-x-10 gap-y-4">
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-3</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-3</p>
          </div>
        </div>
        <hr className="my-2" />

        {/* flex-wrapははみ出さず折り返す */}
        <div className="mx-2 flex flex-wrap justify-center gap-x-10 gap-y-4">
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-3</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-3</p>
          </div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0838_6_grid']",
        ])}
      >
        {/* スクリーンmd未満で2列を守る ,スクリーンmd以上で3列を守る */}
        <div className="mx-2 grid grid-cols-2 justify-center md:grid-cols-3 ">
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-3</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-3</p>
          </div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0838_9_grid_span']",
        ])}
      ></div>
      {/* 3列を守る */}
      <div className="mx-2 grid grid-cols-3 justify-items-center gap-x-10 gap-y-4">
        <div className="border border-black p-4">
          <p className="text-balance">Element 1-1</p>
        </div>
        <div className="border border-black p-4">
          <p className="text-balance">Element 1-2</p>
        </div>
        <div className="border border-black p-4">
          <p className="text-balance">Element 1-3</p>
        </div>
        <div className="border border-black p-4">
          <p className="text-balance">Element 2-1</p>
        </div>
        <div className="border border-black p-4">
          <p className="text-balance">Element 2-2</p>
        </div>
        <div className="border border-black p-4">
          <p className="text-balance">Element 2-3</p>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0838_6_grid']",
        ])}
      >
        {/* スクリーンmd未満で2列を守る ,スクリーンmd以上で3列を守る */}
        <div className="mx-2 grid grid-cols-2 justify-center gap-x-10 gap-y-4 text-red-400 md:grid-cols-3">
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-2</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 1-3</p>
          </div>
          {/* col-span-2で２列占有 */}
          <div className="col-span-2 row-span-2 border border-black p-4">
            <p className="text-balance">Element 2-1</p>
          </div>
          <div className="border border-black p-4">
            <p className="text-balance">Element 2-2</p>
          </div>
          {/* col-span-2で3列占有 */}
          <div className="col-span-3 border border-black p-4">
            <p className="text-balance">Element 2-3</p>
          </div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0842_0_columns']",
        ])}
      >
        <div className="columns-3 gap-8">
          <div className="border p-4">Content 1</div>
          <div className="border p-4">Content 2</div>
          <div className="border p-4">Content 3</div>
          <div className="border p-4">Content 4</div>
          <div className="border p-4">Content 5</div>
          <div className="border p-4">Content 6</div>
        </div>

        {/* -3xsでスクリーンでオートマで３行～1行に変更してくれる */}
        <div className="columns-3xs gap-8">
          <div className="border p-4">Content 1</div>
          <div className="border p-4">Content 2</div>
          <div className="border p-4">Content 3</div>
          <div className="border p-4">Content 4</div>
          <div className="border p-4">Content 5</div>
          <div className="border p-4">Content 6</div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0845_0_float']",
        ])}
      >
        <p className="float-left">ここにあなたのテキストを追加します。</p>
        <Image
          src={picImage}
          alt={`Image test`}
          className="float-right aspect-auto w-1/3"
        />

        <p className="float-left">ここにあなたのテキストを追加します。</p>
        <Image
          src={pic2Image}
          alt={`Image test`}
          className="clear-right aspect-auto w-1/3"
        />
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0841_0_container']",
        ])}
      >
        <div className="w-96 font-sans">
          <div className="md:max-lg:container  md:max-lg:bg-blue-200">
            {/**md:max-lg:mx-auto */}
            <h1 className="mb-4 text-4xl font-bold">Lato Font Example</h1>
            <p className="text-lg">
              スクリーンサイズ変更してみて。This paragraph uses the Lato font
              family.This paragraph uses the Lato font family.This paragraph
              uses the Lato font family.
            </p>
          </div>
        </div>

        <div className="w-96 font-sans">
          <div className="">
            <h1 className="mb-4 text-4xl font-bold">Lato Font Example</h1>
            <p className="text-lg">
              スクリーンサイズ変更してみて。This paragraph uses the Lato font
              family.This paragraph uses the Lato font family.This paragraph
              uses the Lato font family.
            </p>
          </div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0844_0_box_decoration-']",
        ])}
      >
        {/* box-decoration-cloneの方が良し */}
        <a className="rounded border-solid bg-blue-500/50 box-decoration-clone px-4 py-2 text-white hover:bg-red-500/100 active:bg-mypurple-500/100">
          <span>
            Warning Button The
            <br />
            quick
            <br />
            orange fox
          </span>
        </a>
        <hr className="my-2" />
        <a className="rounded border-solid bg-blue-500/50 box-decoration-slice px-4 py-2 text-white hover:bg-red-500/100 active:bg-mypurple-500/100">
          <span>
            Warning Button The
            <br />
            quick
            <br />
            orange fox
          </span>
        </a>
      </div>

      {/**ここからposition系 */}
      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0846_0_relative_top-']",
        ])}
      >
        {/* box-decoration-cloneの方が良し */}
        <a className="rounded border-solid bg-blue-500/50 box-decoration-clone px-4 py-2 text-white hover:bg-red-500/100 active:bg-mypurple-500/100">
          <span>
            0_Warning Button The
            <br />
            quick
            <br />
            orange fox
          </span>
        </a>

        <hr className="my-2" />

        <a className="relative start-5 top-5 rounded border-solid bg-blue-500/50 box-decoration-slice px-4 py-2 text-white hover:bg-red-500/100 active:bg-mypurple-500/100">
          <span>
            1_relative_Warning Button The
            <br />
            quick
            <br />
            orange fox
          </span>
        </a>

        <a className="relative inset-x-1/2 rounded border-solid bg-blue-500/50 box-decoration-slice px-4 py-2 text-white hover:bg-red-500/100 active:bg-mypurple-500/100">
          <span>
            2_inset_Warning Button The
            <br />
            quick
            <br />
            orange fox
          </span>
        </a>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0847_0_z_isolate']",
        ])}
      >
        <div className="relative top-24 [&_div]:absolute [&_div]:left-[--offset] [&_div]:top-[--offset] [&_div]:h-24 [&_div]:w-24">
          <main>
            <div className="z-20 bg-green-400 [--offset:20px]">A-1</div>
          </main>
          <footer className="">
            {/* isolateなしはグローバルスコープ */}
            <div className="z-10 bg-yellow-400 [--offset:40px]">B-1</div>
            <div className="z-30 bg-red-400 [--offset:60px]">C-1</div>
          </footer>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-24 ml-[--offset] mt-[--offset] h-24 w-24">
            <footer className="isolate">
              <div className="z-50">test</div>
            </footer>
          </div>
        </div>

        <div className="relative top-0 [&_div]:absolute [&_div]:left-[--offset] [&_div]:top-[--offset] [&_div]:h-24 [&_div]:w-24">
          <main>
            <div className="z-20 bg-green-400 [--offset:220px]">A-2</div>
          </main>
          <footer className="isolate">
            {/* isolate有りでスコープを分けられる */}
            <div className="z-10 bg-yellow-400 [--offset:240px]">B-2</div>
            <div className="z-30 bg-red-400 [--offset:260px]">C-2</div>
          </footer>
        </div>
        <div className="relative">
          <div className="absolute left-0 top-96 ml-[--offset] mt-[--offset] h-24 w-24">
            <footer className="isolate">
              <div className="z-50"></div>
            </footer>
          </div>
        </div>
        <div className="mb-96"></div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0848_0_opacity']",
        ])}
      >
        <hr className="my-2" />

        <div className="relative top-6 [&_div]:absolute [&_div]:left-[--offset] [&_div]:top-[--offset] [&_div]:h-24 [&_div]:w-24">
          <footer className="isolate">
            <div className="z-50 bg-green-400 opacity-30 [--offset:20px]">
              A-3
            </div>
          </footer>
        </div>
        <div className="mb-40"></div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0850_0_ring']",
        ])}
      >
        <div>
          <button className="ring-2 ring-blue-500/50">button C</button>
        </div>
        <div>
          <button className="ring-blue-500/50 focus:ring-2">button D</button>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0853_0_transition']",
        ])}
      >
        <button className="mb-4 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-indigo-500">
          button A
        </button>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0853_1_animate-spin']",
        ])}
      >
        <button type="button" className="bg-blue-500" disabled>
          <svg className="h-10 w-10" viewBox="0 0 24 24">
            <rect
              className="animate-spin text-red-500"
              x="12"
              y="1"
              width="12"
              height="12"
              fill="currentColor"
            />
          </svg>
          button A
        </button>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0853_2_animate-ping']",
        ])}
      >
        <span className="relative flex h-3 w-3">
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
        </span>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0853_3_animate-pulse']",
        ])}
      >
        <div className="animate-pulse">
          <div className="bg-state-700 h-10 w-10 rounded-full">
            animate-pulse
          </div>

          <div className="flex-1 space-y-6 py-1">animate-pulse</div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0853_4_animate-bounce']",
        ])}
      >
        <div className="mb-14 h-6 w-6 animate-bounce">
          <div className="bg-state-700 h-10 w-10 rounded-full">
            animate-bounce
          </div>

          <div className="flex-1 space-y-6 py-1">animate-bounce</div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0853_5_animate-myWiggle']",
        ])}
      >
        {/* 独自の animate-myWiggle class */}
        <div className="h-16 w-16 animate-myWiggle bg-blue-500"></div>

        {/* 独自の animate-myWiggleでanimation定義はこちら側でするver */}
        <div className="h-16 w-16 animate-[myWiggle_1s_ease-in-out_infinite] bg-blue-500"></div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0856_0_scale_translate']",
        ])}
      >
        <div>
          <button className="bg-cyan-500">button A</button>
        </div>
        <div>
          <button className="mt-3 scale-y-150 bg-yellow-500">button B</button>
        </div>

        <div>
          <button className="mt-5 -scale-y-150 bg-blue-500">button C</button>
        </div>

        <div>
          <button className="mt-3 translate-x-6 bg-red-500">button D</button>
        </div>

        <div>
          <button className="mt-3 -translate-x-6 bg-red-500">button E</button>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0857_0_slew_rotate']",
        ])}
      >
        <div>
          <button className="skew-x-12 bg-cyan-500">button A</button>
        </div>

        <div>
          <button className="mt-5 rotate-45 bg-cyan-500">button B</button>
        </div>

        <div>
          <button className="mt-5 origin-top-right rotate-45 bg-cyan-500">
            button B
          </button>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0858_0_transform-none']",
        ])}
      >
        <div>
          <button className="mt-5 origin-top-right rotate-45 bg-cyan-500 sm:transform-none">
            button スクリーンサイズ変更して
          </button>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0859_0_overflow-scroll']",
        ])}
      >
        <div className="w-96 font-sans">
          <div className="overflow-scroll ">
            <h1 className="mb-4 text-4xl font-bold">Lato Font Example</h1>
            <p className="text-lg">
              This paragraph uses the Lato font family.This paragraph uses the
              Lato font family.This paragraph uses the Lato font family.
            </p>
          </div>
        </div>
      </div>

      <p className="text-lg">
        ----------------ここからモディファイア----------------------
      </p>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0863_0_cursor_focus:']",
        ])}
      >
        <div>
          <button className="mb-3 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:cursor-grab hover:bg-indigo-500 ">
            button A
          </button>
        </div>
        <div>
          <button className="mb-3 bg-blue-500 transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:cursor-not-allowed hover:bg-indigo-500 ">
            button A
          </button>
        </div>
        <div>
          <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:translate-y-1 hover:scale-110 hover:cursor-nw-resize hover:bg-indigo-500 ">
            button A
          </button>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0827_hover:_active:']",
        ])}
      >
        <button className="rounded bg-blue-500/50 px-4 py-2 text-white hover:bg-red-500/100 active:bg-mypurple-500/100">
          Warning Button
        </button>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0866_0_disabled:']",
        ])}
      >
        <div>
          <button disabled className="disabled:opacity-25">
            送信する
          </button>
        </div>
        <div>
          <button className="opacity-25 enabled:opacity-100">押す</button>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0867_0_checked:']",
        ])}
      >
        <label className="flex items-center">
          <input
            type="checkbox"
            className="h-5 w-5 appearance-none rounded-sm checked:border-transparent checked:bg-blue-500"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span className="ml-2 hover:scale-110 hover:cursor-grab">
            Customized
          </span>
        </label>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0868_0_required:_0869_0_valid:_0869_1_out-of-range:_0876_0_placeholder:']",
        ])}
      >
        <div className="py-2 ring-red-500/50 focus-within:ring-2">
          <label htmlFor="name">名前を入れて</label>
          <input
            required
            maxlength="5"
            id="name"
            type="text"
            className="border border-gray-300 placeholder:text-blue-400 required:border-pink-500 valid:border-green-500 out-of-range:border-red-500"
            placeholder="Enter text"
          />
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0871_0_target:']",
        ])}
      >
        <a href="#comment-1">コメント1へのリンク</a>
        <article id="comment-1" className="py-2 target:ring-2">
          青いリングで囲む
        </article>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0872_0_empty:']",
        ])}
      >
        <div className="py-2 ring-red-500/50 empty:ring-2">
          要素が空ではない場合と下記は空の場合
        </div>
        <div className="py-2 ring-red-500/50 empty:ring-2"></div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0873_0_odd:']",
        ])}
      >
        <div>
          <div className=" odd:bg-blue-500/50">
            first-childでありfirst-of-typeでもある
          </div>
          <div className="my-2 odd:bg-blue-500/50">2番目の要素</div>
          <div className="my-2 odd:bg-blue-500/50">3番目の要素</div>
          <div className="my-2 odd:bg-blue-500/50">4番目の要素</div>
          <div className="my-2 odd:bg-blue-500/50">5番目の要素</div>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0874_1_has-:_0885_0_open:']",
        ])}
      >
        <button
          className="rounded-lg bg-blue-500"
          onClick={() => setIsDialogOpen(true)}
        >
          ダイアログを開く
        </button>
        <div className="text-red-600">
          hasで内側の要素が条件満たした場合のみ、親の見た目を変える
        </div>
        <div className="flex h-40 w-full items-center bg-red-300 has-[dialog[open]]:bg-white">
          {isDialogOpen && (
            <dialog
              open
              className="open:shadow-lg open:ring-2 open:ring-red-200"
            >
              <h2>ダイアログのタイトル</h2>
              <p>ここにダイアログの内容を記述します。</p>
              <button
                className="rounded-lg bg-blue-500"
                onClick={() => setIsDialogOpen(false)}
              >
                閉じる
              </button>
            </dialog>
          )}
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0878_0_maker:']",
        ])}
      >
        <div className="m-4 box-border border-4">
          <ul className="mx-2 list-decimal marker:text-blue-400">
            {/* リストアイテム */}
            <li className="border border-black p-4">
              <p className="text-balance">Item 1</p>
            </li>
            <li className="border border-black p-4">
              <p className="text-balance">Item 2</p>
            </li>
            <li className="border border-black p-4">
              <p className="text-balance">Item 3</p>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0879_0_selection:']",
        ])}
      >
        <div className="m-4 box-border border-4 selection:bg-fuchsia-300 selection:text-fuchsia-900">
          <p className="text-balance">ドラックで文字を選択してください</p>
        </div>
        <div className=" m-4 box-border border-4">
          <p className="text-balance">ドラックで文字を選択してください</p>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0882_0_first-letter:_first-line:']",
        ])}
      >
        <div className="font-serif">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-line:uppercase first-line:tracking-widest">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis animi
            eos architecto ea asperiores non nulla debitis, fugit, repudiandae,
            sint nam unde aspernatur. Minus unde eum repellendus ex adipisci
            quidem!.
          </p>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0880_0_md:max-lg:']",
        ])}
      >
        <div className="">
          <p className="first-line:uppercase first-line:tracking-widest md:max-lg:bg-pink-400 md:max-lg:p-8">
            hello my name is Ken.スクリーンサイズ変更して
          </p>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0884_0_data-*:']",
        ])}
      >
        <div
          data-myBgColor="myLarge"
          className="data-[myBgColor=myLarge]:bg-blue-400"
        >
          <h1 className="text-2xl">Main Content</h1>
          <p className="mt-4">This is the main content area.</p>
        </div>

        <div data-myUi="myChecked active" className="data-myChecked:underline">
          <h1 className="text-2xl">Main Content</h1>
          <p className="mt-4">This is the main content area.</p>
        </div>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0886_0_group-*:']",
        ])}
      >
        <div className="text-red-600">
          group-*:親の要素に依存して、子の見た目を変える
          ■★■has-との違い(子に依存して親が変わるのがhas)
        </div>
        <a className="">
          <div className="group/test">
            <svg className="fill-blue-500 group-hover:stroke-red-500">
              <circle cx="50" cy="50" r="50" />
            </svg>
            <h3 className="group/nest invisible group-hover/test:visible">
              新規作成(指定の子要素だけが変わる)
              {/**groupのネスト */}
              <p className="group-hover/nest:bg-yellow-700">
                新規プロジェクト作成(指定の子要素だけが変わる)
              </p>
            </h3>
          </div>
          <p className="group-hover/test:text-white">
            新規プロジェクト作成(指定の子要素だけが変わる)
          </p>
        </a>
      </div>

      <div
        className={classNames([
          myBeforeStyle,
          "before:content-['0887_0_peer-*:']",
        ])}
      >
        <div className="text-red-600">
          peer-*:前方にある兄弟の要素に依存して、後方の自分要素の見た目を変える(依存関係)
        </div>
        <div className="py-2 ring-red-500/50 focus-within:ring-2">
          <label>
            <span className="">メールアドレス</span>
            <input
              type="email"
              className="peer border autofill:border-red-500"
              placeholder="Enter text"
            />
            <p className="invisible text-pink-600 peer-invalid:visible">
              メールアドレスの形式が不正です
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}
