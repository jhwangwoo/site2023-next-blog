import React from "react";
import Title from "@/components/title/Title";
const secTitle = {
  title: "블로그",
  img: "/img/join01.png",
  desc: "개발자를 위한 블로그 입니다! 많이 이용 해주세요!",
};
export default function Blog() {
  return (
    <main id="main" className="container">
      <Title title={secTitle.title} img={secTitle.img} desc={secTitle.desc} />
    </main>
  );
}
