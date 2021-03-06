import React from "react";
import classnames from "classnames";
import styles from "./Card.module.css";

import { LogoIcon } from "../Logo";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({
  children
}: CardProps) => {

  const cardClassNames = classnames( styles.card );

  return (
    <div className={ cardClassNames }>
      { children }
    </div>
  );
};
