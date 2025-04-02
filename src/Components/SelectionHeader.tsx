import { useState } from "react";
import { CONSTANT } from "../CONSTANTS";
import '../Styles/SelectionHeader.css';

export const SelectionHeader =()=>{

  const [selectionOptions] = useState<string[]>(CONSTANT.SELECTION_HEADER_OPTIONS);


  return <div className="selection-header-container">
  {
    selectionOptions?.map((sel,indx)=><p className="selection-option white-border" key={indx}>{sel}</p>)
  }
  </div>
}