import React from "react";

import Image from "next/image";
export default function Title({ title, img, desc }) {
  return (
    <div className="intro__inner center bmStyle">
      <Image width={200} height={200} src={img} alt="게시판이름" />
      <h2>{title}</h2>
      <p class="intro__text">{desc}</p>
    </div>
  );
}
