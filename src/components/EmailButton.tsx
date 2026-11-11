"use client";

// 和原站一样：邮箱地址在点击时才拼出来，不直接写进 HTML，防止被爬虫抓取
const obfuscated = "lianzhouNoRobotHeremtf.is";

export default function EmailButton() {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = `mailto:${obfuscated.replace("NoRobotHere", "@")}`;
      }}
    >
      Email
    </button>
  );
}
