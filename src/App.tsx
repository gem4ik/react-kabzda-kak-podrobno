import { useState } from 'react';
import './App.css';
import { WishList } from './WishList';

export type WishesType = {
  id: number;
  title: string;
  os: string;
  price: number;
  category: string;
  checked: boolean;
};
function App() {
  const [wishes, setWishes] = useState<Array<WishesType>>([
    {
      id: 1,
      title: 'Iphone 13 PRO MAX',
      os: 'IOS',
      price: 1200,
      category: 'phones',
      checked: false,
    },
    {
      id: 2,
      title: 'Iphone 14',
      os: 'IOS',
      price: 1400,
      category: 'phones',
      checked: false,
    },
    {
      id: 3,
      title: 'Samsung Galaxy Fold 4',
      os: 'Android',
      price: 1500,
      category: 'phones',
      checked: false,
    },
    {
      id: 4,
      title: 'Samsung S23',
      os: 'Android',
      price: 1300,
      category: 'phones',
      checked: false,
    },
    {
      id: 5,
      title: 'Xiaomi 13',
      os: 'Android',
      price: 1000,
      category: 'phones',
      checked: false,
    },
    {
      id: 6,
      title: 'Huawei',
      os: 'Android',
      price: 900,
      category: 'phones',
      checked: false,
    },
    {
      id: 7,
      title: 'Nokia 3310',
      os: '-',
      price: 100,
      category: 'phones',
      checked: false,
    },
  ]);
  return (
    <div>
      <WishList wishes={wishes} />
    </div>
  );
}

export default App;
