import React from "react";
import styles from "./B9.module.css";

export default function B9({ type, message }: { type: any; message: any }) {
  return <div className={`${styles.alert} ${styles[type]}`}>{message}</div>;
}
