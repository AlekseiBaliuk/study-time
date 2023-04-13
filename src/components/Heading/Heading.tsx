import React from "react";

interface headingProps {
  tag: keyof JSX.IntrinsicElements;
  text: string;
}

const Heading: React.FC<headingProps> = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag>{text}</Tag>;
};

export default Heading;
