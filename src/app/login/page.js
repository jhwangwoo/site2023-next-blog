import React from "react";
import Title from "@/components/title/Title";
const secTitle = {
  title: "로그인",
  img: "/img/join01.png",
  desc: "로그인을 하면 더 많은 정보를 볼 수 있습니다.",
};
export default function login() {
  return (
    <main id="main" className="container">
      <Title title={secTitle.title} img={secTitle.img} desc={secTitle.desc} />
    </main>
  );
}
