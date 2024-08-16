import React from "react";
import Image from "next/image";
import style from "./B10.module.css";
import BaseButton from "./BaseButton";

export default function BaseCart({
  content,
  title,
  img,
  type,
  children,
}: {
  content: any;
  title: any;
  img: any;
  type: any;
  children: any;
}) {
  return (
    <div className={style.container}>
      <div>
        <Image width={210} height={200} src={img} alt={title} />
      </div>
      <div className={style.text}>{title}</div>
      <div>{content}</div>
      <BaseButton type={type}>{children}</BaseButton>
    </div>
  );
}
