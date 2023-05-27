import { FC } from 'react';
import { OsFilterType, WishesType } from './App';

export type WishListPropsType = {
  wishes: WishesType[];
  SetterForFilter: (value: OsFilterType) => void;
};

export const WishList: FC<WishListPropsType> = (props) => {
  const SetAll = () => {
    props.SetterForFilter('All');
  };
  const SetIOS = () => {
    props.SetterForFilter('IOS');
  };
  const SetAndroid = () => {
    props.SetterForFilter('Android');
  };
  const SetwithoutOS = () => {
    props.SetterForFilter('-');
  };

  let mappedWishes = props.wishes.map((w) => {
    return (
      <div>
        <input type="checkbox" checked={w.checked} />
        {w.title}
      </div>
    );
  });
  return (
    <div>
      <input type="text" />
      <button>+</button>
      {mappedWishes}
      <button onClick={SetAll}>All</button>
      <button onClick={SetIOS}>IOS</button>
      <button onClick={SetAndroid}>Android</button>
      <button onClick={SetwithoutOS}>without OS</button>
    </div>
  );
};
