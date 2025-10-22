import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./FamilyTree.css";

// eslint-disable-next-line react-refresh/only-export-components
export const AssetContext = createContext("");
// eslint-disable-next-line react-refresh/only-export-components
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money, setMoney] = useState(0);

  const asset = "diamond";
  const newAsset = "gold";
  return (
    <div className="family-tree">
      <h2>Family Tree</h2>
      <h4>Total Family Money: {money}</h4>

      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default FamilyTree;
