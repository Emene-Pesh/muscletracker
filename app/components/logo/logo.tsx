import React from "react";
import Image from "next/image";

interface LogoProps {}

export default function Logo(props: LogoProps) {
  return (
    <div>
      <Image src="/images/fd3.png" alt="logo" width={100} height={100} />
    </div>
  );
}
