import React, { useState } from "react";
import Individual from "./individual";
import Corporate from "./corporate";
import { MDBContainer} from "mdb-react-ui-kit";

export default function Booking() {
  const [radio, setRadio] = useState(null);
  return (
    <div>
      <MDBContainer>
        <input
          onClick={() => setRadio(1)}
          checked={radio === 1 ? true : false}
          type="radio"
          id="radio1"
          name="Individual"
        />
        <label htmlFor="Individual">Individual</label>
        <input
          onClick={() => setRadio(2)}
          checked={radio === 2 ? true : false}
          name="Corporate"
          type="radio"
          id="radio2"
        />
        <label htmlFor="Corporate">Corporate</label>
      </MDBContainer>
      {radio === 1 && <Individual />}
      {radio === 2 && <Corporate />}

    </div>
  );
}
