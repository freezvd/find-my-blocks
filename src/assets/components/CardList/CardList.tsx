/* eslint-disable @typescript-eslint/camelcase */
import React from "react";
import classnames from "classnames";
import styles from "./CardList.module.css";

import { Card } from "../Card";
import { Content } from "../Content";
import { Heading, Text, Bold, Link } from "../Typography";
import { Alert } from "../Alert";


interface CardListProps {
    readonly cards: Array<object>;
}

export const CardList = ({ cards }: CardListProps) => {
  console.log("cards", cards);
  const Cards = cards.length > 0 && cards.map( ({
    id,
    title,
    postType,
    count,
    isReusable,
    post_url,
    edit_url
  }) => {
    return (
      <Card key={ id }>
        <Content>
          <Heading>{title}</Heading>
          { postType && <Text>Post Type: <Bold>{ postType }</Bold></Text> }
          <Content spacing="small">
            <Text>
              <Link to={ edit_url }>Edit Post</Link>
              <Link to={ post_url }>View Post</Link>
            </Text>
          </Content>
        </Content>

        { count > 1 || isReusable && <Content>
          { count > 1 && <Alert>{ count } usages in post.</Alert>}
          { isReusable && <Alert type="warning">Reusable Block</Alert>}
        </Content> }
      </Card>
    );
  } );

  const cardListClass = classnames(styles.list);
  return (
    <div className={ cardListClass }>
      {Cards}
    </div>
  );
}
;