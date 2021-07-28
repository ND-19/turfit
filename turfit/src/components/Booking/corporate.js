import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from "mdbreact";
export default function Corporate() {
  return (
    <div>
      <MDBContainer>
        <MDBTypography variant="h3">Add a Booking Enquiry</MDBTypography>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Sign up</p>
              <label htmlFor="Purpose">Purpose</label>
              <input
                type="text"
                id="Purpose"
                className="form-control"
                maxLength="255"
              />
              <br />
              <label htmlFor="requiredDate" className="grey-text">
                Required Date
              </label>
              <input type="date" id="requiredDate" className="form-control" />
              <br />
              <label htmlFor="slotTimeFrom" className="grey-text">
                Slot Time From
              </label>
              <input type="time" id="slotTimeFrom" className="form-control" />
              <br />
              <label htmlFor="slotTimeTo" className="grey-text">
                Slot Time To
              </label>
              <input type="time" id="slotTimeTo" className="form-control" />
              <br />
              <label htmlFor="enquirerName" className="grey-text">
                Enquirer's Name
              </label>
              <input
                type="text"
                id="enquirerName"
                className="form-control"
                maxLength="255"
              />
              <br />
              <label htmlFor="Email" className="grey-text">
                Email
              </label>
              <input type="email" id="Email" className="form-control" />
              <br />
              <label htmlFor="mobileNumber" className="grey-text">
                Mobile Number
              </label>
              <input type="tel" id="mobileNumber" className="form-control" />
              <br />
              <label htmlFor="companyName" className="grey-text">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="form-control"
                maxLength="255"
              />
              <br />
              <label htmlFor="sportType" className="grey-text">
                Sport Type
              </label>
              <input type="dropdown" id="userType" className="form-control" />
              <br />
              <label htmlFor="eventType" className="grey-text">
                Event Type
              </label>
              <input
                type="text"
                id="eventType"
                className="form-control"
                maxLength="255"
              />

              <label htmlFor="ground" className="grey-text">
                Ground
              </label>
              <input
                type="dropdown"
                id="eventType"
                className="form-control"
                maxLength="255"
              />

              <div className="text-center mt-4">Register</div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
