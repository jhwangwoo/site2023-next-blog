import React from "react";
import Title from "@/components/title/Title";
const secTitle = {
  title: "소개하기",
  img: "/img/join01.png",
  desc: "next.js를 통해서 블로그를 만들어 보았습니다.",
};

export default function About() {
  return (
    <main id="main" className="container">
      <Title title={secTitle.title} img={secTitle.img} desc={secTitle.desc} />
    </main>
  );
}
