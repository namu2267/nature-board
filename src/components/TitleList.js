import React from "react";

export function List({ props }) {
  return (
    <div className="flex justify-around border-2">
      <p className="text-md leading-loose m-3">{props.title}</p>
      <p className="text-md leading-loose m-3">작성자: {props.writer}</p>
    </div>
  );
}

{
  /* <p>{props.content}</p> */
}

export default function TitleList({ data }) {
  return (
    <ul>
      {data.map((item) => (
        <List props={item} key={item.id} />
      ))}
    </ul>
  );
}
