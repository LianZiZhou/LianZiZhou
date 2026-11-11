import Image from "next/image";
import Link from "next/link";
import EmailButton from "@/components/EmailButton";

const external = { target: "_blank", rel: "noreferrer" } as const;

/* 主按钮：保留 daisyUI 的 btn-primary，只加一层同色柔光和悬停时的轻微上浮 */
const cta =
  "btn btn-primary shadow-lg shadow-primary/30 transition-[translate,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40";

export default function Home() {
  return (
    <>
      {/* 半透明毛玻璃导航栏：底色仍是 base-100，只是让背后的插画隐约透出来 */}
      <div className="navbar fixed top-0 z-10 border-b border-white/40 bg-base-100/75 shadow-[0_10px_30px_-18px_rgb(0_0_0/0.25)] backdrop-blur-xl backdrop-saturate-150">
        <div className="flex-1">
          <Link
            className="btn btn-ghost whitespace-nowrap px-3 text-xl tracking-wide sm:px-4"
            href="/"
          >
            莲子粥🌸
          </Link>
        </div>
        <div className="flex-none sm:mx-2">
          <ul className="menu menu-horizontal menu-classic px-1">
            <li>
              <a href="https://github.com/LianZiZhou" {...external}>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/LianZhou" {...external}>
                GitLab
              </a>
            </li>
            <li>
              <details>
                <summary>Social</summary>
                {/* 导航栏本身有 backdrop-filter，子元素再做毛玻璃看不到背后的插画，所以这里保持实色 */}
                <ul className="right-0 bg-base-100 p-2 shadow-xl shadow-base-content/10 ring-1 ring-base-content/5">
                  <li>
                    <EmailButton />
                  </li>
                  <li>
                    <a href="https://lianzhou.t.me" {...external}>
                      Telegram
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>

      <main className="hero hero-bg min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="py-6 motion-safe:animate-rise">
              {/* align-baseline：还原 daisyUI 3 的头像对齐（v5 默认是 middle） */}
              <div className="avatar avatar-online align-baseline before:outline-white">
                <div className="w-24 rounded-full shadow-xl ring-4 shadow-primary/25 ring-white/70">
                  <Image
                    src="/profile.jpg"
                    alt="profile"
                    width={96}
                    height={96}
                    preload
                  />
                </div>
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight motion-safe:animate-rise motion-safe:[animation-delay:80ms]">
              你好!👋
            </h1>
            <p className="py-6 leading-relaxed motion-safe:animate-rise motion-safe:[animation-delay:160ms]">
              这里是莲子粥!🌸
              <br />
              一名每天都要坚持熬粥的偶像!🍥
              <br />
              话说咱可是要闪闪拯救世界呐!✨
              {/* 原站这里是一个空行，换成一道主题色细线来分隔人设和技术栈 */}
              <span
                aria-hidden
                className="mx-auto my-5 block h-px w-10 bg-primary/60"
              />
              <span className="block text-sm font-medium tracking-[0.08em] text-base-content/70">
                Full Stack Web / NodeJS / Serverless
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-3 motion-safe:animate-rise motion-safe:[animation-delay:240ms]">
              <a className={cta} href="https://home.lzz.moe" {...external}>
                咱的小窝🏠
              </a>
              <a
                className={cta}
                href="https://t.me/lian_zi_zhou_daily"
                {...external}
              >
                粉丝早餐报🍥
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
