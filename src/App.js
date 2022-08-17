import { useState, useEffect } from 'react';

import './App.css';
import Categories from './components/Categories';
import menu from './data';
import MenuItem from './components/Item';

function App() {
  let categories = ["all", ...new Set(menu.map(menuItem => menuItem.category))]
  const [activeCategory, setactiveCategory] = useState("all");
  const [menuItems, setMenuItems] = useState(menu)

  function changeMenuItems() {
    let items = [];
    if (activeCategory ==='all') {
      items = menu;
    } else {
      items = menu.filter((menuItem) => {
        return menuItem.category === activeCategory
      })
    }
    setMenuItems(items)
  }
  let itemsContent = menuItems.map(item => <MenuItem item={item} />);

  return (
    
    <div className="App">
      <div className="top-bar">
        <Categories categories={categories} active={activeCategory} setActive={setactiveCategory} changeMenuItems={changeMenuItems} />
      </div>
      <div className="content">
        {
          itemsContent
        }
      </div>
    </div>
  );
}

export default App;
