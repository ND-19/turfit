import React, { useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBContainer,
  MDBTable,
  MDBTableBody,
  MDBIcon,
} from "mdbreact";
import "./booking.css";
export default function Individual() {
  const [Football, setFootball] = useState(false);
  const [Cricket, setCricket] = useState(false);
  return (
    <div>
      <MDBContainer>
        <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
          <MDBCardBody>
            <MDBCardTitle>SELECT GAME TYPE</MDBCardTitle>
            <MDBCardText>You can book your slots here!</MDBCardText>
            <a
              href="#!"
              className="card-link"
              onClick={() => {
                setFootball(!Football);
              }}
            >
              Football
            </a>
            <a
              href="#!"
              className="card-link"
              onClick={() => setCricket(!Cricket)}
            >
              Cricket
            </a>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      {Football && (
        <MDBContainer className="type-container">
          <MDBTable bordered>
            <MDBTableBody>
              <tr>
                <td>
                  <button>Saki Naka Football</button>
                </td>
                <td>
                  <button>Parel Football</button>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <MDBIcon icon="check" style={{ marginRight: "20px" }}>
            {" "}
            Available Slots
          </MDBIcon>
          <MDBIcon icon="times"> Unavailable Slots</MDBIcon>
        </MDBContainer>
      )}
      {Cricket && (
        <MDBContainer className="type-container">
          <MDBTable bordered>
            <MDBTableBody>
              <tr>
                <td>
                  <button>Saki Naka Football</button>
                </td>
              </tr>
            </MDBTableBody>
          </MDBTable>
          <MDBIcon icon="check" style={{ marginRight: "20px" }}>
            {" "}
            Available Slots
          </MDBIcon>
          <MDBIcon icon="times"> Unavailable Slots</MDBIcon>
        </MDBContainer>
      )}
    </div>
  );
}
