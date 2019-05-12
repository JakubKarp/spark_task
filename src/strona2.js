import React from "react";

function Lulu({match}) {
  return (
    
      <div>
        Jestem {match.params.id}
      </div>
    
  );
}

export default Lulu; 