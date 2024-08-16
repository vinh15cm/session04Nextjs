import React from "react";
import style from "./B10.module.css";
export default function BaseButton({
  children,
  type,
}: {
  children: any;
  type: any;
}) {
  return <button className={`${type} ${style.btn}`}>{children}</button>;
}
