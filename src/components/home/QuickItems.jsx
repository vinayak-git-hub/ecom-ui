import React from "react";
import { ItemGrid } from "./ItemGrid";

export const QuickItems = ({quickItems}) => {
    const chunks = (size) => quickItems == []?[]: Array.from(
        new Array(Math.ceil(quickItems.length / size)),
        (_, i) => quickItems.slice(i * size, i * size + size)
    );

  return (
    <div key={quickItems} style={{marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center"}}>
        {
            chunks(4).map(curr=>(
                <div key={curr._id}>
            <ItemGrid key={curr._id} items={curr}/>
                </div>
            ))
        }
      
    </div>
  );
};
