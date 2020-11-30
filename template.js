module.exports = (data) => {
  const getFormatWithComas = fields => (fields.filter(Boolean).join(', '));

  const { 
    po_number_intro,
    po_number,
    po_number_compid,
    vendor,
    r_send_inv_to_address ,
    r_ship_to_address,
    r_payment_terms,
    r_fob,
    r_ship_via,
    po_date,
    ship_date,
    quote_number,
    charge_to,
    requisition_by,
    line_notes,
    line_notes_cc,
    attn_vendor_contact,
    attn_ship_to,
    attn_send_invoice_to,
    total_cost,
    po_items,
    rebill,
  } = data;

  return `
    <!doctype html>
    <html>

      <head>
        <meta charset="utf-8">
        <style>
        body {
          font-family: 'Verdana';
        }
        
        .border {
          border: 1px solid lightgray;
        }
        
        .borderBottom {
          border-bottom: 1px solid black;
        }

        .container {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack:justify;
              -ms-flex-pack:justify;
                  justify-content:space-between;
          width: 100%;
        }

        .logoContainer {
          width: 60px;
          height: 60px;
        }

        .logo {
          height: 60px;
          width: 100%;
          background: url('https://images-na.ssl-images-amazon.com/images/I/3158kdr-q2L._SX425_.jpg');
          background-size: contain;
          background-repeat: no-repeat;
          border-radius: 10px;
        }

        .columnContainer {
          -webkit-box-flex: 1;
          -ms-flex-positive: 1;
          flex-grow: 1;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
        }

        .column {
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          width: 49%;
        }
        
        .title {
          font-weight: bold;
          font-size: 0.7rem;
          padding: 5px 10px 5px 10px;
          display: 'inline-block';
          white-space: 'nowrap';
        }
        
        .content {
          margin: 10px;
          padding: 10px;
          min-height: 70px;
          font-size: 0.6rem;
        }
        
        .instructions {
          font-size: 0.5rem;
        }
        
        .tableContent {
          font-size: 0.7rem;
          vertical-align: top;
        }
        
        .textAlignLeft {
          text-align: left;
        }
        
        .textAlignRight {
          text-align: right;
        }
        
        .paddingBottom5 {
          padding-bottom: 5px;
        }
        
        .marginLeft {
          margin-left: 20px;
        }
        
        .w-15 {
          width:15%;
        }
        
        .w-35 {
          width:35%;
        }
        
        .w-43 {
          width:43%;
        }
        
        .lineHeight2 {
          line-height:2rem;
        }

        table.table {
          width:100%;
          text-align: center;
          font-size:0.7rem;
          border-collapse: collapse;
        }
        
        table.tableBorder, table.tableBorder td {
          border: 1px solid lightgray;
          padding: 5px;
        }
        
        table.stripped tbody tr:nth-child(odd) {
          background-color: #ededed;
        }

        table.stripped tbody td {
          padding: 5px 5px 5px 0!important;
        }
        
        table.totalTable {
          width:250px;
          float: right;
          font-weight: bold;
          font-size:0.8rem;
          margin-top:-10px;
          margin-right:-30px;
        }
        
        .tableLeftLabelTitle {
          font-weight: bold;
        }
        
        .titleBlackAndWhite {
          background-color:black;
          color:white;
        }
        
        hr.solid {
          border-top: 2px solid black;
          margin-top:-1px;
        }
        
        .footer {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          width: 100%;
          height:150px;
          font-size:0.7rem;
          margin-top:-20px;
        }
        
        .footerLeft{
          height:100%;
          width: 60%;
          padding:10px;
          display:-webkit-box;
          display:-ms-flexbox;
          display:flex;
          -webkit-box-orient:vertical;
          -webkit-box-direction:normal;
              -ms-flex-direction:column;
                  flex-direction:column;
          -webkit-box-pack: end;
              -ms-flex-pack: end;
                  justify-content: flex-end;
        }

        .notesContainer {
          display:-webkit-box;
          display:-ms-flexbox;
          display:flex;
          width:100%;
          font-size: 0.7rem;
        }

        .w50 {
          width:50%;
        }
        
        .footerRight{
          height:100%; 
          width:40%;
          padding:10px;
          display:-webkit-box;
          display:-ms-flexbox;
          display:flex;
          -webkit-box-orient:vertical;
          -webkit-box-direction:normal;
              -ms-flex-direction:column;
                  flex-direction:column;
          -webkit-box-pack: end;
              -ms-flex-pack: end;
                  justify-content: flex-end;
        }
        
        .footerInstructions {
          font-size: 0.6rem;
        }
        
        .signContainer {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          position: relative;
        }
        
        .sign {
          background-image: url("https://i.pinimg.com/600x315/06/6d/fc/066dfc3d307b8fc00f1b1f756cc91bcb.jpg");
          height: 70px;
          width: 180px;
          background-size: contain;
          background-repeat: no-repeat;
        }
          
        </style>
      </head>

      <body>

        <div class="container">
        
          <div class="logoContainer">
            <div class="logo"></div>
          </div>
          
          <div class="columnContainer marginLeft">
          
            <div class="column">
              <span class="title">BILLING ADDRESS</span>
              <div class="content" style="padding:0;">
                <span>
                  ${getFormatWithComas([r_send_inv_to_address.address1, r_send_inv_to_address.address2])}
                  <br>
                  ${getFormatWithComas([r_send_inv_to_address.city, `${r_send_inv_to_address .state} ${r_send_inv_to_address.zip}`])}
                  <br>
                  ${r_send_inv_to_address .country}
                </span>

                <!--  while this syntax is not all that readable, it will honor the pre-line property -->
                <div style="white-space: pre-line;">${attn_send_invoice_to && (`<span>
                    <b>ATTN:</b>
                    ${attn_send_invoice_to}</span>`
                  )}
                </div>
              </div>

              <div class="content" style="padding:0; width:90%; margin-left:-80px;">
                <u>IMPORTANT INVOICE INSTRUCTIONS</u><br />
                <span class="instructions">
                  INVOICE MUST BE DIRECTED TO ACCOUNTS PAYABLE AT THE
                  ADDRESS INDICATED (INCLUDING SUITE NUMBER) REFERENCED
                  TO PURCHASE ORDER NUMBER. FREIGHT BILLS MUST
                  ACCOMPANY YOUR INVOICE.
                </span>
              </div>
            </div>
            
            <div class="column">
              <div class="content" style="padding:0;">
                <h1>PURCHASE ORDER</h1>
                <table class="table tableBorder">
                  <tr>
                    <td class="tableLeftLabelTitle textAlignLeft"> &nbsp; PO No.</td>
                    <td class="textAlignLeft"> &nbsp; ${po_number_intro} - ${po_number} - ${po_number_compid}</td>
                  </tr>
                  <tr>
                    <td class="tableLeftLabelTitle textAlignLeft">  &nbsp; PO Date</td>
                    <td class="textAlignLeft"> &nbsp; ${po_date}</td>
                  </tr>
                  <tr>
                    <td class="tableLeftLabelTitle textAlignLeft">  &nbsp; Quote No.</td>
                    <td class="textAlignLeft"> &nbsp; ${quote_number}</td>
                  </tr>
                </table>
              </div>
            </div>
            
          </div>
        </div>

        
        <div class="container">
        
          <div class="w-43">
            <div class="titleBlackAndWhite paddingBottom5">
              <span class="title marginLeft">VENDOR</span>
            </div>

            <div class="content" style="padding:0;">
              <span>
                ${getFormatWithComas([vendor.name, vendor.short_name])}
                <br>
                ${getFormatWithComas([vendor.vendor_address.address1, vendor.vendor_address.address2])}
                <br>
                ${getFormatWithComas([vendor.vendor_address.city, `${vendor.vendor_address.state} ${vendor.vendor_address.zip}`])}
                <br>
                ${vendor.vendor_address.country}
              </span>

              <!--  while this syntax is not all that readable, it will honor the pre-line property -->
              <div style="white-space: pre-line;">${attn_vendor_contact && (`<span>
                  <b>ATTN:</b>
                  ${attn_vendor_contact}</span>`
                )}
              </div>

            </div>
          </div>

          <div class="w-43">
            <div class="titleBlackAndWhite paddingBottom5">
              <span class="title marginLeft">DELIVERY ADDRESS</span>
            </div>
            <div class="content" style="padding:0;">
              <div class="content" style="padding:0;">
                <span>
                  ${getFormatWithComas([r_ship_to_address.address1, r_ship_to_address.address2])}
                  <br>
                  ${getFormatWithComas([r_ship_to_address.city, `${r_ship_to_address.state} ${r_ship_to_address.zip}`])}
                  <br>
                  ${r_ship_to_address.country}
                </span>

                <!--  while this syntax is not all that readable, it will honor the pre-line property -->
                <div style="white-space: pre-line;">${attn_ship_to && (`<span>
                    <b>ATTN:</b>
                    ${attn_ship_to}</span>`
                  )}
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <br>
        
        <table class="table tableBorder">
          <tr>
            <td class="tableLeftLabelTitle textAlignLeft w-15"> &nbsp; Terms</td>
            <td class="textAlignLeft w-35"> &nbsp; ${r_payment_terms.name}</td>
            <td class="tableLeftLabelTitle textAlignLeft w-15"> &nbsp; Ship Via</td>
            <td class="textAlignLeft w-35"> &nbsp; ${r_ship_via.name}</td>
          </tr>
          <tr>
            <td class="tableLeftLabelTitle textAlignLeft w-15">  &nbsp; F.O.B.</td>
            <td class="textAlignLeft w-35"> &nbsp; ${r_fob.name}</td>
            <td class="tableLeftLabelTitle textAlignLeft w-15"> &nbsp; Ship Date</td>
            <td class="textAlignLeft w-35"> &nbsp; ${ship_date}</td>
          </tr>
        </table>
        
        <br />

        <table align="center" class="table stripped">
          <thead class="titleBlackAndWhite">
            <td class="title borderBottom">QTY</td>
            <td class="title borderBottom">MEASURE</td>
            <td class="title borderBottom">ITEM NO</td>
            <td class="title borderBottom">DESCRIPTION</td>
            <td class="title borderBottom">UNIT PRICE</td>
            <td class="title borderBottom">SUBTOTAL</td>
          </thead>
          <tbody>
            ${po_items.map(item => (
              `<tr>
                <td class="tableContent textAlignRight">${item.quantity.toLocaleString()}</td>
                <td class="tableContent">${item.unit_of_measure}</td>
                <td class="tableContent">${item.item_number}</td>
                <td class="tableContent textAlignLeft" style="min-width: 250px;">
                  <div style="white-space: pre-line;">${item.description}</div>
                </td>
                <td class="tableContent textAlignRight">$${item.unit_price.toLocaleString()}</td>
                <td class="tableContent textAlignRight">$${item.subtotal.toLocaleString()}</td>
              </tr>`
            )).join('')}
          </tbody>
        </table>
        
        <hr class="solid">
        
        <table class="totalTable">
          <tr>
            <td>TOTAL COST</td>
            <td>$${total_cost.toLocaleString()}</td>
          </tr>
        </table>

        <br>
        <br>
        <br>

        <div class="notesContainer">
          <div class="w50" style="white-space: pre-line;"><span><b>NOTES:</b><br> ${line_notes}</span></div>
          <div class="w50" style="white-space: pre-line;"><span><b>CC:</b><br> ${line_notes_cc}</span></div>
        </div>
        
        <div id="pageFooter-last" class="footer">
          <div class="footerLeft">
            <span>
              <b>REQUISITION BY:</b> ${requisition_by}
            </span>
            <br>
            <span>
            <b>CHARGE TO:</b> ${charge_to}
            </span>
            <br>
            <span>
              <b>REBILL:</b> ${rebill}
            </span>
            <br>
            <span class="footerInstructions">
              This order is placed by Buyer subject to Buyer's standard terms and conditions
              receipt of which is acknowledged by shipment of the goods, and by which Seller
              agrees to be bound. No modifications or additions shall be binding upon Buyer
              unless agreed to in writing.
            </span>
          </div>
          <div class="footerRight">
            <h3>PLAYBOY ENTERPRISES, INC.</h3>
            <div class="signContainer">
              <span>SIGNED</span>
              <div class="sign"></div>
              <span style="position:absolute; bottom:0;">{{page}}/{{pages}}</span>
            </div>
          </div>
        </div>

      </body>

    </html>
  `
};
