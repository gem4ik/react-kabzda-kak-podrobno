import { FC } from 'react';
import { WishesType } from './App';

export type WishListPropsType = {
  wishes: WishesType[];
};
export const WishList:FC <WishListPropsType> = (props) => {
  let mappedWishes = props.wishes.map((w) => {
    return <div>{w.id}</div>;
  });

  return <div>{mappedWishes}</div>;
};
