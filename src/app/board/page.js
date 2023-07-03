import React from "react";
import Title from "@/components/title/Title";
import { connectDB } from "@/utils/database";
import Link from "next/link";
const secTitle = {
  title: "게시판",
  img: "/img/join01.png",
  desc: "궁금한 사항은 언제든지 여기서 확인해보세요!",
};
export default async function Board() {
  const client = await connectDB;
  const db = client.db("JHWtable");
  let results = await db.collection("JHWtable").find().toArray();
  console.log(results);
  return (
    <main id="main" className="container">
      <Title title={secTitle.title} img={secTitle.img} desc={secTitle.desc} />
      <div className="board__inner">
        <div className="board__table">
          <table>
            <colgroup>
              <col style={{ width: "5%" }} />
              <col />
              <col style={{ width: "10%" }} />
              <col style={{ width: "15%" }} />
              <col style={{ width: "7%" }} />
            </colgroup>
            <thead>
              <tr>
                <th>번호</th>
                <th>제목</th>
                <th>등록자</th>
                <th>등록일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>{result.boardID}</td>
                  <td>
                    <Link href={`/board/${result._id}`}>
                      {result.boardTitle}
                    </Link>
                  </td>
                  <td>{result.youName}</td>
                  <td>{result.regTime}</td>
                  <td>{result.boardView}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
