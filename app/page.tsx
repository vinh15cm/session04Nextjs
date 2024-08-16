import React from "react";
import B1 from "./B1";
import B2 from "./B2";
import B3 from "./B3";
import B5 from "./B5";
import B6 from "./B6";
import B7 from "./B7";
import B8 from "./B8";
import B9 from "./B9";
import BaseCart from "./B10/BaseCart";
import B11 from "./B11";

export default function page() {
  return (
    <>
      <B1></B1>
      <br />
      <B2></B2>
      <br />
      <B3></B3>
      <br />
      <B5></B5>
      <br />
      <B6></B6>
      <br />
      <B7></B7>
      <br />
      <B8></B8>
      <br />
      <B9 type="success" message="success text" />
      <B9 type="error" message="error text" />
      <B9 type="warning" message="warning text" />
      <B9 type="info" message="info text" />
      <br />
      <BaseCart
        content="Áo phông nam mát mẻ"
        title="Áo phông nam"
        img="https://dosi-in.com/images/detailed/42/CDL10_1.jpg"
        type="primary"
      >
        Thêm vào giỏ hàng
      </BaseCart>
      <B11></B11>
    </>
  );
}
