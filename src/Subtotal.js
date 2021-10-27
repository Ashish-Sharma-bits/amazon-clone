import React from "react";
import "./Subtotal.css";
function Subtotal() {
  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              <small className="subtotal_gift">
                <input type="checkbox" />
                This order conatin gift
              </small>
            </p>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
