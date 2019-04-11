import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Lulu({match}) {
  return (
    
      <div>
        Jestem {match.params.id}
      </div>
    
  );
}

export default Lulu; 