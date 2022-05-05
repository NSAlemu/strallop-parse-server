exports.ConfirmationEmailTemplateOrder = `
<html><head><title>VARS: subject (REPLACE W SUBJECT)</title> <!--[if !mso]><!-- -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">/*<![CDATA[*/
  #outlook a {
    padding: 0
  }

  .ReadMsgBody {
    width: 100%
  }

  .ExternalClass {
    width: 100%
  }

  .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
    line-height: 100%
  }

  body, table, td, p, a, li, blockquote {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%
  }

  table, td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt
  }

  img {
    -ms-interpolation-mode: bicubic
  }

  body {
    margin: 0;
    padding: 0
  }

  img {
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none
  }

  table, td {
    border-collapse: collapse !important
  }

  body, #bodyTable, #bodyCell {
    height: 100% !important;
    margin: 0;
    padding: 0;
    width: 100% !important
  }

  p {
    display: block
  }

  body, #bodyTable, #bodyCell {
    font-family: 'Neue Plak', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Helvetica, Tahoma, Arial, sans-serif
  }

  #templateContainer {
    width: 90%
  }

  #bodyCell {
    padding: 56px 0
  }

  #templateContainer {
    border-radius: 2px;
    background-color: #FFFFFF
  }

  #templateBody {
    background-color: #FFFFFF;
    border-radius: 2px
  }

  #templateBodyContent {
    padding: 0
  }

  #bodyContent {
    padding: 0
  }

  .bodyContent {
    color: #444444;
    font-size: 15px;
    line-height: 1.4
  }

  .bodyContent a:link, .bodyContent a:visited, .bodyContent a .yshortcuts {
    color: #3659e3;
    font-weight: normal;
    text-decoration: none
  }

  .bodyContent img {
    display: inline;
    max-width: 560px
  }

  .img-hide-download-icon img + div {
    display: none
  }

  #body-message a, #body-message a:visited, #body-message a:enabled {
    color: #3659e3 !important
  }

  #body-message ol, #body-message ul {
    list-style-position: inside
  }

  #organizer_address a, #organizer_address a:visited, #organizer_address a:enabled {
    text-decoration: none !important;
    color: #444444 !important
  }

  h1 {
    font-size: 35px;
    letter-spacing: 0.36px;
    line-height: 47px;
    text-align: center
  }

  .events--default-row {
    display: flex
  }

  @media only screen and (max-width: 600px) {
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: none !important
    }

    body {
      width: 100% !important;
      min-width: 100% !important
    }

    #bodyCell {
      padding: 0 !important
    }

    #templateBodyContent {
      padding: 0 !important
    }

    #templateContainer {
      max-width: 600px !important;
      width: 100% !important
    }

    h1 {
      font-size: 24px !important;
      line-height: 100% !important
    }

    h2 {
      font-size: 20px !important;
      line-height: 100% !important
    }

    h3 {
      font-size: 18px !important;
      line-height: 100% !important
    }

    h4 {
      font-size: 16px !important;
      line-height: 100% !important
    }

    .bodyContent {
      font-size: 18px !important;
      line-height: 125% !important
    }

    .event--default-wrapper {
      width: 560px
    }

    .events--default-column {
      display: flex;
      width: 100%
    }

    .events--default-row {
      display: block
    }

    .featured-events-mobile {
      text-align: left !important;
      margin: 0 !important
    }

    .rsvp-button-featured {
      display: table-cell;
      text-align: end;
      float: right
    }

    .event-name-featured {
      display: table-cell;
      padding-right: 0.5em
    }
  }

  @media only screen and (min-width: 792px) {
    .events--default-column {
      display: flex;
      width: 100%;
      max-width: 260px
    }
  }

  @media only screen and (min-width: 601px) {
    .body {
      padding: 20px 0
    }

    #bodyContent {
      background-color: #FFF;
    }

    .event--default-wrapper {
      max-width: 50%
    }

    .events--default-column {
      width: 100%
    }

    .events--default-column.event--left {
      margin-right: 20px
    }

    .events--default-column.event--right {
      margin-left: 20px
    }

    .featured-events-mobile {
      text-align: left !important;
      margin: 0 !important
    }

    .rsvp-button-featured {
      display: table-cell;
      float: right
    }

    .event-name-featured {
      display: table-cell;
      padding-right: 0.5em
    }
  }

  @media only screen and (min-width: 481px) {
    .mj-column-per-100 {
      width: 100% !important
    }

    .mj-column-per-33 {
      width: 33% !important
    }

    .mj-column-per-62 {
      width: 62% !important
    }

    .mj-column-per-30 {
      width: 30% !important
    }

    .mj-column-px-30 {
      width: 30px !important
    }

    .mj-column-per-43 {
      width: 43% !important
    }

    .mj-column-per-57 {
      width: 57% !important;
      margin-top: 0 !important
    }

    .featured-events-mobile {
      text-align: left !important;
      margin: 0 !important
    }

    .name-button-featured {
      width: 100%;
      display: inline-table
    }

    .event-name-featured {
      float: left;
      width: 70%;
      padding-right: 0.5em
    }
  }

  @media all and (min-width: 0px) and (max-width: 480px) {
    .mj-image-px-164 {
      width: auto !important;
      height: auto !important
    }

    .featured-events-mobile {
      text-align: center !important;
      margin: 0 auto !important
    }

    .featured-events-image {
      padding: 0 !important;
      width: 100% !important
    }

    .name-button-featured {
      display: inline-block;
      text-align: start
    }

    .rsvp-button-featured {
      margin-bottom: 12px;
      margin-top: 12px;
      display: block;
      float: left
    }
  }

  /*]]>*/</style>
  <!--[if mso]>
  <style type="text/css">@media only screen and (max-width: 480px) {
    @-ms-viewport {
      width: 320px
    }@viewport {
      width: 320px
    }
  }</style><![endif]--> <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml><![endif]--><!--[if lte mso 11]>
  <style type="text/css">.outlook-group-fix {
    width: 100% !important
  }</style><![endif]--></head>
<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color: #FFFFFF;">
<div style="display: none; max-height: 0px; overflow: hidden;">
</div>
<div style="display: none; max-height: 0px; overflow: hidden;"> &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>
<center>

  <table style="min-width:100%" width="100%" bgcolor="#f2f2ed">
    <tbody>
    <tr>
      <td>


      </td>
    </tr>
    <tr>
      <td>
        <table style="margin-left:auto;margin-right:auto;border-collapse:collapse;border-spacing:0;border:0;padding:0" cellpadding="0" cellspacing="0" border="0">
          <tbody>
          <tr>

            <td style="margin-left:auto;margin-right:auto" align="center" bgcolor="#f2f2ed">
              <table class="m_5932195873061893277content" style="border:none">
                <tbody>
                <tr>
                  <td align="center" bgcolor="#f2f2ed">
                    <table cellpadding="0" cellspacing="0" border="0" bgcolor="#f2f2ed">
                      <tbody>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr bgcolor="#f2f2ed">
                        <td style="background-color:#f2f2ed" class="m_5932195873061893277grid__col" bgcolor="#f2f2ed">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="center">
                            <tbody>
                            <tr bgcolor="#f2f2ed">
                              <td width="30" bgcolor="#f2f2ed" align="center"></td>
                              <td style="text-align:center;background-color:#f2f2ed" align="center">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" bgcolor="#f2f2ed" align="center">


                                  <tbody>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">

                                      <div style="width:140px;height:100px;margin:0 auto;text-align:center">


                                        <img src="https://www.strallop.com/assets/logo.png" title="" alt="Strallop" border="0" height="25" class="CToWUd" width="50">


                                      </div>

                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                                      <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">


                                      <h1 style="padding:0;margin:12px 0 0 0;font-size:30px;line-height:42px;font-weight:bold;font-weight:800;letter-spacing:-0.2px;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;margin-top:0">Hi {{{firstName}}},
                                      </h1>
                                      <p>This is your Email Receipt for</p>
                                      <h1 style="padding:0;margin:12px 0 0 0;font-size:30px;line-height:42px;font-weight:bold;font-weight:800;letter-spacing:-0.2px;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;margin-top:0">
                                        {{{eventName}}}
                                      </h1>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                                      <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">


                                      <a style="text-decoration:none;color:#3f60e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" href="https://www.strallop.com/events/{{{eventId}}}" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/open-in-app/0xuJPLNiXJ1cweUgGhqUXw~~/AAQxAQA~/RgRjF3VZP0TqaHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS9ob3ctdG8tYnV5LWEtaG9tZS1pbi1sYXMtdmVnYXMtbW92aW5nLXRvLWxhcy12ZWdhcy1mcm9tLXNlYXR0bGUtdGlja2V0cy0xNjgxOTgxNzgyNzk_YWZmPWVlbWFpbG9yZGNvbmYmdXRtX2NhbXBhaWduPW9yZGVyX2NvbmZpcm0mdXRtX21lZGl1bT1lbWFpbCZyZWY9ZWVtYWlsb3JkY29uZiZ1dG1fc291cmNlPWV2ZW50YnJpdGUmdXRtX3Rlcm09dmlld2V2ZW50VwNzcGNCCmEw2UE2Ye8M5WJSE25lYml5b3UxNkBnbWFpbC5jb21YBAAAAAA~&amp;source=gmail&amp;ust=1631032172094000&amp;usg=AFQjCNGH3iILhkJbDJN-Grbc88M5DxIHuA">View
                                        event details</a>

                                    </td>
                                  </tr>








                                  </tbody>
                                </table>
                              </td>
                              <td width="30" bgcolor="#f2f2ed"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>





                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#ffffff;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0;border-bottom-left-radius:0" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:18px;font-size:18px;height:18px" height="18" bgcolor="">&nbsp;</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18">
    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                            <tr style="">
                                
                                <td width="50%" valign="top" style="padding:0 25px">
                                    
    



                                    
    
    

<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;font-weight:600;font-size:13px">Order Confirmation number
</span>
<br>
<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;font-weight:600;font-size:20px">{{{orderNumber}}}
</span>
<br>
<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;font-size:13px">{{{orderDate}}}
</span>


                                </td>
                                <td width="50%" valign="top" style="padding:0 25px;">
                                    
    



<span style="font-weight:bold;margin:4px 0;;line-height:21
    px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;color:#1e0a3c">
    
                                        Customer Information

    
</span>
<br>
<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;font-size:13px">{{{buyerFullName}}}
</span>
<br><span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;font-size:13px">{{{buyerEmail}}}
</span>


                                </td>
                            </tr>
                            
    

    
<tr>
    <td style="line-height:6px;font-size:6px;background-color:#ffffff" width="600" height="6">
        <table style="line-height:6px;font-size:6px;height:6px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="6">
            
            <tbody><tr>
                <td style="line-height:12px;font-size:12px;height:12px" height="12" bgcolor="">&nbsp;</td>
            </tr>
        </tbody></table>
    </td>
</tr>





                    </tbody>
                </table>
    
</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr bgcolor="#FFFFFF">
                        <td style="background-color:#ffffff" bgcolor="#FFFFFF" class="m_5932195873061893277grid__col">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="left">
                            <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td width="20" bgcolor="#FFFFFF" align="left"></td>
                              <td style="text-align:left;background-color:#ffffff" align="left">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="left">


                                  <tbody>
                                  
<tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="">


                                      <span style="font-weight:bold;margin:4px 0;;line-height:21
    px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:12px;color:#1e0a3c">Price
</span><br>
<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;font-size:11px">Total: {{{orderTotal}}}
</span>



                                    </td>
                                  </tr><tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:8px;font-size:8px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:12px;font-size:12px;height:12px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
<tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="">


                                      <h2 style="padding:0;margin:12px 0 0 0;font-size:17px;line-height:32px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">{{{Message From the organizers}}}</h2>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>






















                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="">


                                      <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%">
                                        <tbody>
                                        <tr>

                                          <td>
                                            <div>
                                              {{{emailHTMLDescription}}}
                                            </div>
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>





                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="white" width="100%" height="">


                                      <h2 style="padding:0;margin:12px 0 0 0;font-size:17px;line-height:23px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">

                                        Questions about this event?

                                      </h2>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:8px;font-size:8px;background-color:#ffffff;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0;border-bottom-left-radius:0" width="600" height="8">
                                      <table style="line-height:8px;font-size:8px;height:8px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="8">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        <tr bgcolor="#FFFFFF">
                                          <td style="line-height:8px;font-size:8px;height:8px" height="8"></td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="white" width="100%" height="">





<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#6f7287;font-weight:normal">







<a style="text-decoration:none;color:#3f60e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" href="https://clicks.Strallop.com/f/open-in-app/4vJ6b6wEGfQOXTmN7afNAw~~/AAQxAQA~/RgRjF3VZP0SraHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vbXl0aWNrZXRzLzE4NDMyOTExNTU_dXRtX2NhbXBhaWduPW9yZGVyX2NvbmZpcm0mdXRtX21lZGl1bT1lbWFpbCZyZWY9ZWVtYWlsb3JkY29uZiZjb250YWN0X29yZ2FuaXplcj0xJnV0bV9zb3VyY2U9ZXZlbnRicml0ZSZ1dG1fdGVybT1jb250YWN0b3JnVwNzcGNCCmEw2UE2Ye8M5WJSE25lYml5b3UxNkBnbWFpbC5jb21YBAAAAAA~" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/open-in-app/4vJ6b6wEGfQOXTmN7afNAw~~/AAQxAQA~/RgRjF3VZP0SraHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vbXl0aWNrZXRzLzE4NDMyOTExNTU_dXRtX2NhbXBhaWduPW9yZGVyX2NvbmZpcm0mdXRtX21lZGl1bT1lbWFpbCZyZWY9ZWVtYWlsb3JkY29uZiZjb250YWN0X29yZ2FuaXplcj0xJnV0bV9zb3VyY2U9ZXZlbnRicml0ZSZ1dG1fdGVybT1jb250YWN0b3JnVwNzcGNCCmEw2UE2Ye8M5WJSE25lYml5b3UxNkBnbWFpbC5jb21YBAAAAAA~&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNGjvnuDKmUqI9VF8HLHa_F5UgIfnQ">Contact the organizer</a>



</span>
                                    </td>
                                  </tr>


                                  </tbody>
                                </table>
                              </td>
                              <td width="20" bgcolor="#FFFFFF"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#ffffff;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0px;border-bottom-left-radius:0px" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">
                            <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18"></td>
                            </tr>

                            <tr>
                              <td style="line-height:18px;font-size:18px;height:18px" height="18" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:4px;font-size:4px;background-color:#f2f2ed" width="600" height="4">
                          <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                            <tbody>
                            <tr>
                              <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#ffffff;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0;border-bottom-left-radius:0" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:18px;font-size:18px;height:18px" height="18" bgcolor="">&nbsp;</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr bgcolor="#FFFFFF">
                        <td style="background-color:#ffffff" bgcolor="#FFFFFF" class="m_5932195873061893277grid__col">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="left">
                            <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td width="20" bgcolor="#FFFFFF" align="left"></td>
                              <td style="text-align:left;background-color:#ffffff" align="left">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="left">


                                  <tbody>
                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="">


                                      <table cellpadding="0" cellspacing="0" border="0" class="m_5932195873061893277no_text_resize" width="100%" style="border-spacing:0;border-collapse:collapse">
                                        <tbody>



                                        <tr>
                                          <td style="line-height:4px;font-size:4px;background-color:#ffffff" width="600" height="4">
                                            <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                                              <tbody>
                                              <tr>
                                                <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;
                                                </td>
                                              </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr><tr>
                                          <td colspan="3">


                                            <h2 style="padding:0;margin:12px 0 0 0;font-size:23px;line-height:32px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">

                                              Order Summary

                                            </h2>

                                          </td>
                                        </tr><tr>
                                          <td style="line-height:4px;font-size:4px;background-color:#ffffff" width="600" height="4">
                                            <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                                              <tbody>
                                              <tr>
                                                <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;
                                                </td>
                                              </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>


                                        <tr>
                                          <td colspan="3">



<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;color:#1e0a3c">Order #{{{orderNumber}}} - {{{purchaseDate}}}

</span>

                                          </td>
                                        </tr>

                                        <tr>
                                          <td colspan="3">
                                          </td>
                                        </tr>


                                        <tr>
                                          <td style="line-height:8px;font-size:8px;background-color:#ffffff" width="600" height="8">
                                            <table style="line-height:8px;font-size:8px;height:8px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="8">

                                              <tbody>
                                              <tr>
                                                <td style="line-height:16px;font-size:16px;height:16px" height="16" bgcolor="">&nbsp;
                                                </td>
                                              </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>


                                        <tr>
                                          <td colspan="3">




                                            {{{purchasedOrder}}}




                                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                              <tbody id="{{{OrderedTickets}}}"></tbody></table>
                                          </td>
                                        </tr>





                                        </tbody>
                                      </table>


                                    </td>
                                  </tr>
                                  <tr bgcolor="white">

                                  </tr>





                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="26">






<span style="font-weight:normal;margin:4px 0;font-size:12px;line-height:18px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#6f7287;font-weight:normal">



                            This order is subject to Strallop <a href="https://www.strallop.com/terms" style="text-decoration:none;color:#3f60e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/JHQt5Ghyv4RIr-Bn5gLxsg~~/AAQxAQA~/RgRjF3VZP0SAaHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vdG9zLz91dG1fY2FtcGFpZ249b3JkZXJfY29uZmlybSZ1dG1fbWVkaXVtPWVtYWlsJnJlZj1lZW1haWxvcmRjb25mJnV0bV9zb3VyY2U9ZXZlbnRicml0ZSZ1dG1fdGVybT10b3NXA3NwY0IKYTDZQTZh7wzlYlITbmViaXlvdTE2QGdtYWlsLmNvbVgEAAAAAA~~&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNFUBbNu8_RJ23qLEWJUGQ5zF2N6JA">Terms of Service</a>, and <a href="https://www.strallop.com/privacy-policy" style="text-decoration:none;color:#3f60e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/uUhd8XQwG0wot32S2-h01A~~/AAQxAQA~/RgRjF3VZP0SUaHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vcHJpdmFjeXBvbGljeS8_dXRtX2NhbXBhaWduPW9yZGVyX2NvbmZpcm0mdXRtX21lZGl1bT1lbWFpbCZyZWY9ZWVtYWlsb3JkY29uZiZ1dG1fc291cmNlPWV2ZW50YnJpdGUmdXRtX3Rlcm09cHJpdmFjeXBvbGljeVcDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNH6NDBHC4KXajPkyfUnwt2HPi2agQ">Privacy Policy</a>.


</span>


                                    </td>
                                  </tr>


                                  </tbody>
                                </table>
                              </td>
                              <td width="20" bgcolor="#FFFFFF"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#ffffff;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0px;border-bottom-left-radius:0px" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">
                            <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18"></td>
                            </tr>

                            <tr>
                              <td style="line-height:18px;font-size:18px;height:18px" height="18" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:4px;font-size:4px;background-color:#f2f2ed" width="600" height="4">
                          <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                            <tbody>
                            <tr>
                              <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr bgcolor="#f2f2ed">
                        <td style="background-color:#f2f2ed" bgcolor="#f2f2ed" class="m_5932195873061893277grid__col">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="center">
                            <tbody>
                            <tr bgcolor="#f2f2ed">
                              <td width="30" bgcolor="#f2f2ed" align="center"></td>
                              <td style="text-align:center;background-color:#f2f2ed" align="center">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%;color:#1e0a3c" cellspacing="0" cellpadding="0" bgcolor="#f2f2ed" align="center">


                                  <tbody>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">


                                    </td>
                                  </tr>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">

                                      <img src="https://www.strallop.com/assets/logo.png" style="height:24px;padding:0;width:12px" height="24" width="24" alt="twitter" title="twitter" border="0" class="CToWUd">

                                      <span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:120px;text-align:center">
    Strallop Events
</span>
                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#f2f2ed" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">



<span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:40px;text-align:center">
    <a href="https://clicks.Strallop.com/f/a/L2Nq5e-i20EzBWD1mkaEFw~~/AAQxAQA~/RgRjF3VZP0QiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vRXZlbnRicml0ZVcDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA" aria-label="Strallop's Twitter" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/L2Nq5e-i20EzBWD1mkaEFw~~/AAQxAQA~/RgRjF3VZP0QiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vRXZlbnRicml0ZVcDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNHoVFY2QNKAhi76GJ1Z1dxbjs3cPQ">
        <img src="https://ci6.googleusercontent.com/proxy/cJuV4Gb3M27Z4xbrlfxStbO6pvZriZyZd_5xBbhl1GlmiRlE6nBg4Mag8croszfaWMbgoVRSzVN39ozzsN0okEjh1e07cgrShz3ET4BO7gU8XZGh56Y-YiuEjjndeADJT39GPO2E23rjQyv_rBlpkceQTB-I02Vy6Qlf9hc4lS_lbuYZZOlowb6akwM3W-o=s0-d-e1-ft#https://cdn.evbstatic.com/s3-build/165480-rc2021-09-06_16.04-6d7bd82/django/images/emails_2018_rebrand/TW-icon-purple@2x.png" style="height:24px;padding:0;width:24px" height="24" width="24" alt="twitter" title="twitter" border="0" class="CToWUd">
    </a>
</span>


                                      <span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:40px;text-align:center">
    <a href="https://clicks.Strallop.com/f/a/qcIHzFjssUkDwLBQ1QvPzQ~~/AAQxAQA~/RgRjF3VZP0QjaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0V2ZW50YnJpdGVXA3NwY0IKYTDZQTZh7wzlYlITbmViaXlvdTE2QGdtYWlsLmNvbVgEAAAAAA~~" aria-label="Strallop Facebook" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/qcIHzFjssUkDwLBQ1QvPzQ~~/AAQxAQA~/RgRjF3VZP0QjaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0V2ZW50YnJpdGVXA3NwY0IKYTDZQTZh7wzlYlITbmViaXlvdTE2QGdtYWlsLmNvbVgEAAAAAA~~&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNGqLqDYVlpCWj_-t5W-hh4qCEM1Vg">
        <img src="https://ci3.googleusercontent.com/proxy/lMvQ6RWqmtADMsdyh7uSxE__CE_pP-w9de5tpmbEPpSxO_qdcxmajL6i0BX4emPfwgxVqkj0wgkQxtnkp6vC6MwyDBEwKu7QDAjghInh8vI6NvkeIIJaugbzWeTZQ7d_gGqDNtEjiuI1L-Rz16Gu5R0KDEvUSY7RKPtIVmmBoQkgM-0uT0v1qartAGkL_6c=s0-d-e1-ft#https://cdn.evbstatic.com/s3-build/165480-rc2021-09-06_16.04-6d7bd82/django/images/emails_2018_rebrand/FB-icon-purple@2x.png" style="height:24px;padding:0;width:24px" height="24" width="24" alt="facebook" title="facebook" border="0" class="CToWUd">
    </a>
</span>


                                      <span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:40px;text-align:center">
    <a href="https://clicks.Strallop.com/f/a/6fz2IVg8tev9SA9fMhue0Q~~/AAQxAQA~/RgRjF3VZP0QlaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ldmVudGJyaXRlL1cDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA" aria-label="Strallop's Instagram" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/6fz2IVg8tev9SA9fMhue0Q~~/AAQxAQA~/RgRjF3VZP0QlaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ldmVudGJyaXRlL1cDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNHf8YLHvGqIig-KOHzVoCBCyjj9Jg">
        <img src="https://ci6.googleusercontent.com/proxy/KWkaDWqoOvYDLeXpqr8LpWWQjFOIA6cK85iGeb2wpb1OvYXD31K691XHUyL_tK0G_o_nPIBxJ8lxPfQtAmcD_aIWv2deZHt7w0MaHmAyMX2CQuXx8dSkia2Q_-YyHlctb2P8MVpPIDFXHC83TCyvL3GS-MFV9cp0fPj7dYSdRIFjQC8sfH_xdGcOS9ua6Ns=s0-d-e1-ft#https://cdn.evbstatic.com/s3-build/165480-rc2021-09-06_16.04-6d7bd82/django/images/emails_2018_rebrand/IG-icon-purple@2x.png" style="height:24px;padding:0;width:24px" height="24" width="24" alt="instagram" title="instagram" border="0" class="CToWUd">
    </a>
</span>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:10px;font-size:10px;background-color:#f2f2ed" width="600" height="10">
                                      <table style="line-height:10px;font-size:10px;height:10px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="10">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:20px;font-size:20px;height:20px" height="20" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="#f2f2ed">
                                    <td class="m_5932195873061893277footer-content" style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="24">





<span style="font-weight:normal;margin:4px 0;font-size:12px;line-height:18px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#4b4d63;font-weight:normal">




    <span>
                This email was sent to


<a style="text-decoration:none;color:#3f60e7;color:#f05537;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" href="mailto:{{{purchaserEmail}}}" target="_blank">{{{purchaserEmail}}}</a>
            </span>



</span>


                                    </td>
                                  </tr>





                                  <tr bgcolor="#f2f2ed">
                                    <td class="m_5932195873061893277footer-content" style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="24">





<span style="font-weight:normal;margin:4px 0;font-size:12px;line-height:18px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#4b4d63;font-weight:normal">


            Copyright © 2021 Strallop. All rights reserved.


</span>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                                      <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr>
                                    <td><img src="https://ci5.googleusercontent.com/proxy/Nlb97E1WLmc61mzMdRlJKRiBX5TW1_EkFCeAa4IUMed4iIytmAluKE_0u4o7OjDx6jd9tXOqDqD831p2s8sjuO8iijL2zcUiCkNdEYUD5lToXSDiWehVL-bp4wBwkhzDyll9nSDZ7pF1a6RQFJIrCMs4VCgFnmrtU-QkC1op4sfY3XIJn5Kb-xQaSeU41w=s0-d-e1-ft#https://www.Strallop.com/emails/action/?recipient=nebiyou16%40gmail.com&amp;type_id=65&amp;type=open&amp;send_id=2021-09-06&amp;list_id=9" alt="" width="1" height="1" class="CToWUd">

                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td width="30" bgcolor="#f2f2ed"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
    </tbody>
  </table>


  <script type="text/plain">darkThemeSupport=true backgroundImageSupport=true headerImageLinkSupport=true</script>
</center>









</body></html>
`
exports.ConfirmationEmailTemplateTicketOrder = `
<html><head><title>VARS: subject (REPLACE W SUBJECT)</title> <!--[if !mso]><!-- -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">/*<![CDATA[*/
  #outlook a {
    padding: 0
  }

  .ReadMsgBody {
    width: 100%
  }

  .ExternalClass {
    width: 100%
  }

  .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
    line-height: 100%
  }

  body, table, td, p, a, li, blockquote {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%
  }

  table, td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt
  }

  img {
    -ms-interpolation-mode: bicubic
  }

  body {
    margin: 0;
    padding: 0
  }

  img {
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none
  }

  table, td {
    border-collapse: collapse !important
  }

  body, #bodyTable, #bodyCell {
    height: 100% !important;
    margin: 0;
    padding: 0;
    width: 100% !important
  }

  p {
    display: block
  }

  body, #bodyTable, #bodyCell {
    font-family: 'Neue Plak', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Helvetica, Tahoma, Arial, sans-serif
  }

  #templateContainer {
    width: 90%
  }

  #bodyCell {
    padding: 56px 0
  }

  #templateContainer {
    border-radius: 2px;
    background-color: #FFFFFF
  }

  #templateBody {
    background-color: #FFFFFF;
    border-radius: 2px
  }

  #templateBodyContent {
    padding: 0
  }

  #bodyContent {
    padding: 0
  }

  .bodyContent {
    color: #444444;
    font-size: 15px;
    line-height: 1.4
  }

  .bodyContent a:link, .bodyContent a:visited, .bodyContent a .yshortcuts {
    color: #3659e3;
    font-weight: normal;
    text-decoration: none
  }

  .bodyContent img {
    display: inline;
    max-width: 560px
  }

  .img-hide-download-icon img + div {
    display: none
  }

  #body-message a, #body-message a:visited, #body-message a:enabled {
    color: #3659e3 !important
  }

  #body-message ol, #body-message ul {
    list-style-position: inside
  }

  #organizer_address a, #organizer_address a:visited, #organizer_address a:enabled {
    text-decoration: none !important;
    color: #444444 !important
  }

  h1 {
    font-size: 35px;
    letter-spacing: 0.36px;
    line-height: 47px;
    text-align: center
  }

  .events--default-row {
    display: flex
  }

  @media only screen and (max-width: 600px) {
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: none !important
    }

    body {
      width: 100% !important;
      min-width: 100% !important
    }

    #bodyCell {
      padding: 0 !important
    }

    #templateBodyContent {
      padding: 0 !important
    }

    #templateContainer {
      max-width: 600px !important;
      width: 100% !important
    }

    h1 {
      font-size: 24px !important;
      line-height: 100% !important
    }

    h2 {
      font-size: 20px !important;
      line-height: 100% !important
    }

    h3 {
      font-size: 18px !important;
      line-height: 100% !important
    }

    h4 {
      font-size: 16px !important;
      line-height: 100% !important
    }

    .bodyContent {
      font-size: 18px !important;
      line-height: 125% !important
    }

    .event--default-wrapper {
      width: 560px
    }

    .events--default-column {
      display: flex;
      width: 100%
    }

    .events--default-row {
      display: block
    }

    .featured-events-mobile {
      text-align: left !important;
      margin: 0 !important
    }

    .rsvp-button-featured {
      display: table-cell;
      text-align: end;
      float: right
    }

    .event-name-featured {
      display: table-cell;
      padding-right: 0.5em
    }
  }

  @media only screen and (min-width: 792px) {
    .events--default-column {
      display: flex;
      width: 100%;
      max-width: 260px
    }
  }

  @media only screen and (min-width: 601px) {
    .body {
      padding: 20px 0
    }

    #bodyContent {
      background-color: #FFF;
    }

    .event--default-wrapper {
      max-width: 50%
    }

    .events--default-column {
      width: 100%
    }

    .events--default-column.event--left {
      margin-right: 20px
    }

    .events--default-column.event--right {
      margin-left: 20px
    }

    .featured-events-mobile {
      text-align: left !important;
      margin: 0 !important
    }

    .rsvp-button-featured {
      display: table-cell;
      float: right
    }

    .event-name-featured {
      display: table-cell;
      padding-right: 0.5em
    }
  }

  @media only screen and (min-width: 481px) {
    .mj-column-per-100 {
      width: 100% !important
    }

    .mj-column-per-33 {
      width: 33% !important
    }

    .mj-column-per-62 {
      width: 62% !important
    }

    .mj-column-per-30 {
      width: 30% !important
    }

    .mj-column-px-30 {
      width: 30px !important
    }

    .mj-column-per-43 {
      width: 43% !important
    }

    .mj-column-per-57 {
      width: 57% !important;
      margin-top: 0 !important
    }

    .featured-events-mobile {
      text-align: left !important;
      margin: 0 !important
    }

    .name-button-featured {
      width: 100%;
      display: inline-table
    }

    .event-name-featured {
      float: left;
      width: 70%;
      padding-right: 0.5em
    }
  }

  @media all and (min-width: 0px) and (max-width: 480px) {
    .mj-image-px-164 {
      width: auto !important;
      height: auto !important
    }

    .featured-events-mobile {
      text-align: center !important;
      margin: 0 auto !important
    }

    .featured-events-image {
      padding: 0 !important;
      width: 100% !important
    }

    .name-button-featured {
      display: inline-block;
      text-align: start
    }

    .rsvp-button-featured {
      margin-bottom: 12px;
      margin-top: 12px;
      display: block;
      float: left
    }
  }

  /*]]>*/</style>
  <!--[if mso]>
  <style type="text/css">@media only screen and (max-width: 480px) {
    @-ms-viewport {
      width: 320px
    }@viewport {
      width: 320px
    }
  }</style><![endif]--> <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml><![endif]--><!--[if lte mso 11]>
  <style type="text/css">.outlook-group-fix {
    width: 100% !important
  }</style><![endif]--></head>
<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color: #FFFFFF;">
<div style="display: none; max-height: 0px; overflow: hidden;">
</div>
<div style="display: none; max-height: 0px; overflow: hidden;"> &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>
<center>

  <table style="min-width:100%" width="100%" bgcolor="#f2f2ed">
    <tbody>
    <tr>
      <td>


      </td>
    </tr>
    <tr>
      <td>
        <table style="margin-left:auto;margin-right:auto;border-collapse:collapse;border-spacing:0;border:0;padding:0" cellpadding="0" cellspacing="0" border="0">
          <tbody>
          <tr>

            <td style="margin-left:auto;margin-right:auto" align="center" bgcolor="#f2f2ed">
              <table class="m_5932195873061893277content" style="border:none">
                <tbody>
                <tr>
                  <td align="center" bgcolor="#f2f2ed">
                    <table cellpadding="0" cellspacing="0" border="0" bgcolor="#f2f2ed">
                      <tbody>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr bgcolor="#f2f2ed">
                        <td style="background-color:#f2f2ed" class="m_5932195873061893277grid__col" bgcolor="#f2f2ed">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="center">
                            <tbody>
                            <tr bgcolor="#f2f2ed">
                              <td width="30" bgcolor="#f2f2ed" align="center"></td>
                              <td style="text-align:center;background-color:#f2f2ed" align="center">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" bgcolor="#f2f2ed" align="center">


                                  <tbody>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">

                                      <div style="width:140px;height:100px;margin:0 auto;text-align:center">


                                        <img src="https://www.strallop.com/assets/logo.png" title="" alt="Strallop" border="0" height="25" class="CToWUd" width="50">


                                      </div>

                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                                      <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">


                                      <h1 style="padding:0;margin:12px 0 0 0;font-size:30px;line-height:42px;font-weight:bold;font-weight:800;letter-spacing:-0.2px;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;margin-top:0">Hi {{{firstName}}},
                                      </h1>
                                      <p>This is your Confimation for</p>
                                      <h1 style="padding:0;margin:12px 0 0 0;font-size:30px;line-height:42px;font-weight:bold;font-weight:800;letter-spacing:-0.2px;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;margin-top:0">
                                        {{{eventName}}}
                                      </h1>


                                    </td>
                                  </tr>


                                  
                                  








                                  </tbody>
                                </table>
                              </td>
                              <td width="30" bgcolor="#f2f2ed"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>





                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#ffffff;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0;border-bottom-left-radius:0" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:18px;font-size:18px;height:18px" height="18" bgcolor="">&nbsp;</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr bgcolor="#FFFFFF">
                        <td style="background-color:#ffffff" bgcolor="#FFFFFF" class="m_5932195873061893277grid__col">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="left">
                            <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td width="20" bgcolor="#FFFFFF" align="left"></td>
                              <td style="text-align:left;background-color:#ffffff" align="left">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="left">


                                  <tbody>
                                  <tr><td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="">
            
        
    
<h2 style="padding:0;margin:12px 0 0 0;font-size:23px;line-height:32px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">{{{eventName}}}</h2>

    
        </td>
</tr><tr bgcolor="white">
        <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="22px">
            
                    
    
    

<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:24px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;font-weight:normal;text-decoration:none!important">{{{eventFullTime}}}
</span>


                
        </td>
    </tr>
    <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr><tr><td>
                <table>
                
                
    <tbody>


                
    <tr><td>
                <table>
                
            
    <tbody><tr bgcolor="white">
        <td style="padding:0;font-size:15px;line-height:21px;text-align:left" align="left" bgcolor="white" width="100%" height="22px">
            
                
    
    

<span style="font-weight:normal;margin:4px 0;font-size:16px;line-height:24px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;font-weight:normal">{{{eventAddressName}}}
</span>


            
        </td>
    </tr>

            
    <tr bgcolor="white">
        <td style="padding:0;font-size:15px;line-height:21px;text-align:left" align="left" bgcolor="white" width="100%" height="22px">
            
                
    
    

<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#6f7287;font-weight:normal">{{{eventAddressAddress1}}}<br>{{{eventAddressAddress2}}}<br>{{{eventAddressCity}}}
</span>


                </td>
            </tr>
            <tr>
                <td height="22px" style="font-size:15px;line-height:21px">
                    



            
        </td>
    </tr>

    
                </tbody></table>
            </td></tr>

        
                </tbody></table>
            </td>
</tr><tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="">


                                      <h2 style="padding:0;margin:12px 0 0 0;font-size:17px;line-height:32px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">{{{Message From the organizers}}}</h2>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>






















                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="">


                                      <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%">
                                        <tbody>
                                        <tr>

                                          <td>
                                            <div>
                                              {{{emailHTMLDescription}}}
                                            </div>
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>





                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="white" width="100%" height="">





<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#6f7287;font-weight:normal">







<a style="text-decoration:none;color:#3f60e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" href="https://www.strallop.com/events/{{{eventId}}}" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/open-in-app/4vJ6b6wEGfQOXTmN7afNAw~~/AAQxAQA~/RgRjF3VZP0SraHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vbXl0aWNrZXRzLzE4NDMyOTExNTU_dXRtX2NhbXBhaWduPW9yZGVyX2NvbmZpcm0mdXRtX21lZGl1bT1lbWFpbCZyZWY9ZWVtYWlsb3JkY29uZiZjb250YWN0X29yZ2FuaXplcj0xJnV0bV9zb3VyY2U9ZXZlbnRicml0ZSZ1dG1fdGVybT1jb250YWN0b3JnVwNzcGNCCmEw2UE2Ye8M5WJSE25lYml5b3UxNkBnbWFpbC5jb21YBAAAAAA~&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNGjvnuDKmUqI9VF8HLHa_F5UgIfnQ">View Event Details</a>



</span>
                                    </td>
                                  </tr>

<tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:14px;font-size:14px;height:14px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="white" width="100%" height="">


                                      <h2 style="padding:0;margin:12px 0 0 0;font-size:17px;line-height:23px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">

                                        Questions about this event?

                                      </h2>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:8px;font-size:8px;background-color:#ffffff;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0;border-bottom-left-radius:0" width="600" height="8">
                                      <table style="line-height:8px;font-size:8px;height:8px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="8">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        <tr bgcolor="#FFFFFF">
                                          <td style="line-height:8px;font-size:8px;height:8px" height="8"></td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="white" width="100%" height="">





<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#6f7287;font-weight:normal">







<a style="text-decoration:none;color:#3f60e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" href="https://www.strallop.com" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/open-in-app/4vJ6b6wEGfQOXTmN7afNAw~~/AAQxAQA~/RgRjF3VZP0SraHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vbXl0aWNrZXRzLzE4NDMyOTExNTU_dXRtX2NhbXBhaWduPW9yZGVyX2NvbmZpcm0mdXRtX21lZGl1bT1lbWFpbCZyZWY9ZWVtYWlsb3JkY29uZiZjb250YWN0X29yZ2FuaXplcj0xJnV0bV9zb3VyY2U9ZXZlbnRicml0ZSZ1dG1fdGVybT1jb250YWN0b3JnVwNzcGNCCmEw2UE2Ye8M5WJSE25lYml5b3UxNkBnbWFpbC5jb21YBAAAAAA~&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNGjvnuDKmUqI9VF8HLHa_F5UgIfnQ">Contact the organizer</a>



</span>
                                    </td>
                                  </tr>


                                  </tbody>
                                </table>
                              </td>
                              <td width="20" bgcolor="#FFFFFF"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#ffffff;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0px;border-bottom-left-radius:0px" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">
                            <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18"></td>
                            </tr>

                            <tr>
                              <td style="line-height:18px;font-size:18px;height:18px" height="18" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:4px;font-size:4px;background-color:#f2f2ed" width="600" height="4">
                          <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                            <tbody>
                            <tr>
                              <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#ffffff;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0;border-bottom-left-radius:0" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:18px;font-size:18px;height:18px" height="18" bgcolor="">&nbsp;</td>
                            </tr>
                            <tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr bgcolor="#FFFFFF">
                        <td style="background-color:#ffffff" bgcolor="#FFFFFF" class="m_5932195873061893277grid__col">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="left">
                            <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td width="20" bgcolor="#FFFFFF" align="left"></td>
                              <td style="text-align:left;background-color:#ffffff" align="left">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="left">


                                  <tbody>
                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="">


                                      <table cellpadding="0" cellspacing="0" border="0" class="m_5932195873061893277no_text_resize" width="100%" style="border-spacing:0;border-collapse:collapse">
                                        <tbody>



                                        <tr bgcolor="white">
                                          <td style="padding:0;text-align:center" align="center" bgcolor="white" width="100%" height="">


                                            <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data={{{orderNumber}}}">


                                          </td>
                                        </tr><tr>
                                          <td style="line-height:4px;font-size:4px;background-color:#ffffff" width="600" height="4">
                                            <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                                              <tbody>
                                              <tr>
                                                <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;
                                                </td>
                                              </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr><tr bgcolor="white">
                                          <td style="padding:0;text-align:center" align="center" bgcolor="white" width="100%" height="">


                                            <h5 style="padding:0;margin:12px 0 0 0;font-size:12px;line-height:23px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">Scan this at the event to check in</h5>


                                          </td>
                                        </tr><tr>
                                          <td style="line-height:4px;font-size:4px;background-color:#ffffff" width="600" height="4">
                                            <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                                              <tbody>
                                              <tr>
                                                <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;
                                                </td>
                                              </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr><tr>
                                          <td colspan="3">


                                            <h2 style="padding:0;margin:12px 0 0 0;font-size:23px;line-height:32px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">

                                              Order Summary

                                            </h2>

                                          </td>
                                        </tr>
<tr>
                                          <td style="line-height:4px;font-size:4px;background-color:#ffffff" width="600" height="4">
                                            <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                                              <tbody>
                                              <tr>
                                                <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;
                                                </td>
                                              </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr><tr>
                                          <td colspan="3">



<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;color:#1e0a3c">Order #{{{orderNumber}}} - {{{purchaseDate}}}

</span>

                                          </td>
                                        </tr>
<tr>
                                          <td style="line-height:4px;font-size:4px;background-color:#ffffff" width="600" height="4">
                                            <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                                              <tbody>
                                              <tr>
                                                <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;
                                                </td>
                                              </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>


                                        <tr>
                                          <td colspan="3">



<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',
Helvetica,Arial,sans-serif;font-size:14px;color:#1e0a3c">{{{attendeeFullName}}}
</span>
<span style="font-weight:bold;margin-left:35px;font-size:15px;line-height:21px;font-family:'Helvetica Neue',
Helvetica,Arial,sans-serif;font-size:14px;color:#1e0a3c">{{{ticketName}}}
</span>



                                          </td>
                                        </tr>

                                        <tr>
                                          <td colspan="3">
                                          </td>
                                        </tr>


                                        <tr>
                                          <td style="line-height:8px;font-size:8px;background-color:#ffffff" width="600" height="8">
                                            <table style="line-height:8px;font-size:8px;height:8px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="8">

                                              <tbody>
                                              <tr>
                                                <td style="line-height:16px;font-size:16px;height:16px" height="16" bgcolor="">&nbsp;
                                                </td>
                                              </tr>
                                              </tbody>
                                            </table>
                                          </td>
                                        </tr>


                                        





                                        </tbody>
                                      </table>


                                    </td>
                                  </tr>
                                  <tr bgcolor="white">

                                  </tr>





                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="26">






<span style="font-weight:normal;margin:4px 0;font-size:12px;line-height:18px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#6f7287;font-weight:normal">



                            This order is subject to Strallop <a href="https://www.strallop.com/terms" style="text-decoration:none;color:#3f60e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/JHQt5Ghyv4RIr-Bn5gLxsg~~/AAQxAQA~/RgRjF3VZP0SAaHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vdG9zLz91dG1fY2FtcGFpZ249b3JkZXJfY29uZmlybSZ1dG1fbWVkaXVtPWVtYWlsJnJlZj1lZW1haWxvcmRjb25mJnV0bV9zb3VyY2U9ZXZlbnRicml0ZSZ1dG1fdGVybT10b3NXA3NwY0IKYTDZQTZh7wzlYlITbmViaXlvdTE2QGdtYWlsLmNvbVgEAAAAAA~~&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNFUBbNu8_RJ23qLEWJUGQ5zF2N6JA">Terms of Service</a>, and <a href="https://www.strallop.com/privacy-policy" style="text-decoration:none;color:#3f60e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/uUhd8XQwG0wot32S2-h01A~~/AAQxAQA~/RgRjF3VZP0SUaHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vcHJpdmFjeXBvbGljeS8_dXRtX2NhbXBhaWduPW9yZGVyX2NvbmZpcm0mdXRtX21lZGl1bT1lbWFpbCZyZWY9ZWVtYWlsb3JkY29uZiZ1dG1fc291cmNlPWV2ZW50YnJpdGUmdXRtX3Rlcm09cHJpdmFjeXBvbGljeVcDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNH6NDBHC4KXajPkyfUnwt2HPi2agQ">Privacy Policy</a>.


</span>


                                    </td>
                                  </tr>


                                  </tbody>
                                </table>
                              </td>
                              <td width="20" bgcolor="#FFFFFF"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#ffffff;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0px;border-bottom-left-radius:0px" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">
                            <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18"></td>
                            </tr>

                            <tr>
                              <td style="line-height:18px;font-size:18px;height:18px" height="18" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:4px;font-size:4px;background-color:#f2f2ed" width="600" height="4">
                          <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                            <tbody>
                            <tr>
                              <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr bgcolor="#f2f2ed">
                        <td style="background-color:#f2f2ed" bgcolor="#f2f2ed" class="m_5932195873061893277grid__col">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="center">
                            <tbody>
                            <tr bgcolor="#f2f2ed">
                              <td width="30" bgcolor="#f2f2ed" align="center"></td>
                              <td style="text-align:center;background-color:#f2f2ed" align="center">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%;color:#1e0a3c" cellspacing="0" cellpadding="0" bgcolor="#f2f2ed" align="center">


                                  <tbody>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">


                                    </td>
                                  </tr>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">

                                      <img src="https://www.strallop.com/assets/logo.png" style="height:24px;padding:0;width:12px" height="24" width="24" alt="twitter" title="twitter" border="0" class="CToWUd">

                                      <span class="m_5932195873061893277social-logo-container" style="font-size:22px;padding:0;display:inline-block;height:auto;margin:0;width:160px;text-align:center">
    Strallop Events
</span>
                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#f2f2ed" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">



<span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:40px;text-align:center">
    <a href="https://twitter.com/strallop_events" aria-label="Strallop's Twitter" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/L2Nq5e-i20EzBWD1mkaEFw~~/AAQxAQA~/RgRjF3VZP0QiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vRXZlbnRicml0ZVcDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNHoVFY2QNKAhi76GJ1Z1dxbjs3cPQ">
        <img src="https://ci6.googleusercontent.com/proxy/cJuV4Gb3M27Z4xbrlfxStbO6pvZriZyZd_5xBbhl1GlmiRlE6nBg4Mag8croszfaWMbgoVRSzVN39ozzsN0okEjh1e07cgrShz3ET4BO7gU8XZGh56Y-YiuEjjndeADJT39GPO2E23rjQyv_rBlpkceQTB-I02Vy6Qlf9hc4lS_lbuYZZOlowb6akwM3W-o=s0-d-e1-ft#https://cdn.evbstatic.com/s3-build/165480-rc2021-09-06_16.04-6d7bd82/django/images/emails_2018_rebrand/TW-icon-purple@2x.png" style="height:24px;padding:0;width:24px" height="24" width="24" alt="twitter" title="twitter" border="0" class="CToWUd">
    </a>
</span>


                                      <span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:40px;text-align:center">
    <a href="https://www.facebook.com/strallop" aria-label="Strallop Facebook" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/qcIHzFjssUkDwLBQ1QvPzQ~~/AAQxAQA~/RgRjF3VZP0QjaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0V2ZW50YnJpdGVXA3NwY0IKYTDZQTZh7wzlYlITbmViaXlvdTE2QGdtYWlsLmNvbVgEAAAAAA~~&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNGqLqDYVlpCWj_-t5W-hh4qCEM1Vg">
        <img src="https://ci3.googleusercontent.com/proxy/lMvQ6RWqmtADMsdyh7uSxE__CE_pP-w9de5tpmbEPpSxO_qdcxmajL6i0BX4emPfwgxVqkj0wgkQxtnkp6vC6MwyDBEwKu7QDAjghInh8vI6NvkeIIJaugbzWeTZQ7d_gGqDNtEjiuI1L-Rz16Gu5R0KDEvUSY7RKPtIVmmBoQkgM-0uT0v1qartAGkL_6c=s0-d-e1-ft#https://cdn.evbstatic.com/s3-build/165480-rc2021-09-06_16.04-6d7bd82/django/images/emails_2018_rebrand/FB-icon-purple@2x.png" style="height:24px;padding:0;width:24px" height="24" width="24" alt="facebook" title="facebook" border="0" class="CToWUd">
    </a>
</span>


                                      <span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:40px;text-align:center">
    <a href="https://www.instagram.com/strallop/" aria-label="Strallop's Instagram" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/6fz2IVg8tev9SA9fMhue0Q~~/AAQxAQA~/RgRjF3VZP0QlaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ldmVudGJyaXRlL1cDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNHf8YLHvGqIig-KOHzVoCBCyjj9Jg">
        <img src="https://ci6.googleusercontent.com/proxy/KWkaDWqoOvYDLeXpqr8LpWWQjFOIA6cK85iGeb2wpb1OvYXD31K691XHUyL_tK0G_o_nPIBxJ8lxPfQtAmcD_aIWv2deZHt7w0MaHmAyMX2CQuXx8dSkia2Q_-YyHlctb2P8MVpPIDFXHC83TCyvL3GS-MFV9cp0fPj7dYSdRIFjQC8sfH_xdGcOS9ua6Ns=s0-d-e1-ft#https://cdn.evbstatic.com/s3-build/165480-rc2021-09-06_16.04-6d7bd82/django/images/emails_2018_rebrand/IG-icon-purple@2x.png" style="height:24px;padding:0;width:24px" height="24" width="24" alt="instagram" title="instagram" border="0" class="CToWUd">
    </a>
</span>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:10px;font-size:10px;background-color:#f2f2ed" width="600" height="10">
                                      <table style="line-height:10px;font-size:10px;height:10px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="10">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:20px;font-size:20px;height:20px" height="20" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="#f2f2ed">
                                    <td class="m_5932195873061893277footer-content" style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="24">





<span style="font-weight:normal;margin:4px 0;font-size:12px;line-height:18px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#4b4d63;font-weight:normal">




    <span>
                This email was sent to


<a style="text-decoration:none;color:#3f60e7;color:#f05537;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" href="mailto:{{{purchaserEmail}}}" target="_blank">{{{purchaserEmail}}}</a>
            </span>



</span>


                                    </td>
                                  </tr>





                                  <tr bgcolor="#f2f2ed">
                                    <td class="m_5932195873061893277footer-content" style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="24">





<span style="font-weight:normal;margin:4px 0;font-size:12px;line-height:18px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#4b4d63;font-weight:normal">


            Copyright © 2022 Strallop. All rights reserved.


</span>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                                      <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr>
                                    <td><img src="https://ci5.googleusercontent.com/proxy/Nlb97E1WLmc61mzMdRlJKRiBX5TW1_EkFCeAa4IUMed4iIytmAluKE_0u4o7OjDx6jd9tXOqDqD831p2s8sjuO8iijL2zcUiCkNdEYUD5lToXSDiWehVL-bp4wBwkhzDyll9nSDZ7pF1a6RQFJIrCMs4VCgFnmrtU-QkC1op4sfY3XIJn5Kb-xQaSeU41w=s0-d-e1-ft#https://www.Strallop.com/emails/action/?recipient=nebiyou16%40gmail.com&amp;type_id=65&amp;type=open&amp;send_id=2021-09-06&amp;list_id=9" alt="" width="1" height="1" class="CToWUd">

                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td width="30" bgcolor="#f2f2ed"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
    </tbody>
  </table>


  <script type="text/plain">darkThemeSupport=true backgroundImageSupport=true headerImageLinkSupport=true</script>
</center>










</body></html>
`
exports.ConfirmationEmailTemplateOrderMiniList = `
<tr>

    <td width="40%" valign="top">



<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;color:#1e0a3c">

                                        {{{purchasedTicketAmount}}} x

</span>


      <span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;font-weight:600;font-size:14px">{{{purchasedTicketTypeName}}}
</span>


    </td>
    <td width="30%" align="right" valign="top" style="text-align:right">



<span style="white-space: nowrap;font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-size:14px;color:#1e0a3c">Br. {{{purchasedTicketCost}}}
</span>

    </td>
  </tr>


  <tr>
    <td style="line-height:6px;font-size:6px;background-color:#ffffff" width="600" height="6">
      <table style="line-height:6px;font-size:6px;height:6px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="6">

        <tbody>
        <tr>
          <td style="line-height:12px;font-size:12px;height:12px" height="12" bgcolor="">&nbsp;
          </td>
        </tr>
        </tbody>
      </table>
    </td>
  </tr>
`
exports.ReminderEmailOrderTemplate = `
<html><head><title>VARS: subject (REPLACE W SUBJECT)</title> <!--[if !mso]><!-- -->
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!--<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">/*<![CDATA[*/
  #outlook a {
    padding: 0
  }

  .ReadMsgBody {
    width: 100%
  }

  .ExternalClass {
    width: 100%
  }

  .ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {
    line-height: 100%
  }

  body, table, td, p, a, li, blockquote {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%
  }

  table, td {
    mso-table-lspace: 0pt;
    mso-table-rspace: 0pt
  }

  img {
    -ms-interpolation-mode: bicubic
  }

  body {
    margin: 0;
    padding: 0
  }

  img {
    border: 0;
    height: auto;
    line-height: 100%;
    outline: none;
    text-decoration: none
  }

  table, td {
    border-collapse: collapse !important
  }

  body, #bodyTable, #bodyCell {
    height: 100% !important;
    margin: 0;
    padding: 0;
    width: 100% !important
  }

  p {
    display: block
  }

  body, #bodyTable, #bodyCell {
    font-family: 'Neue Plak', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Helvetica, Tahoma, Arial, sans-serif
  }

  #templateContainer {
    width: 90%
  }

  #bodyCell {
    padding: 56px 0
  }

  #templateContainer {
    border-radius: 2px;
    background-color: #FFFFFF
  }

  #templateBody {
    background-color: #FFFFFF;
    border-radius: 2px
  }

  #templateBodyContent {
    padding: 0
  }

  #bodyContent {
    padding: 0
  }

  .bodyContent {
    color: #444444;
    font-size: 15px;
    line-height: 1.4
  }

  .bodyContent a:link, .bodyContent a:visited, .bodyContent a .yshortcuts {
    color: #3659e3;
    font-weight: normal;
    text-decoration: none
  }

  .bodyContent img {
    display: inline;
    max-width: 560px
  }

  .img-hide-download-icon img + div {
    display: none
  }

  #body-message a, #body-message a:visited, #body-message a:enabled {
    color: #3659e3 !important
  }

  #body-message ol, #body-message ul {
    list-style-position: inside
  }

  #organizer_address a, #organizer_address a:visited, #organizer_address a:enabled {
    text-decoration: none !important;
    color: #444444 !important
  }

  h1 {
    font-size: 35px;
    letter-spacing: 0.36px;
    line-height: 47px;
    text-align: center
  }

  .events--default-row {
    display: flex
  }

  @media only screen and (max-width: 600px) {
    body, table, td, p, a, li, blockquote {
      -webkit-text-size-adjust: none !important
    }

    body {
      width: 100% !important;
      min-width: 100% !important
    }

    #bodyCell {
      padding: 0 !important
    }

    #templateBodyContent {
      padding: 0 !important
    }

    #templateContainer {
      max-width: 600px !important;
      width: 100% !important
    }

    h1 {
      font-size: 24px !important;
      line-height: 100% !important
    }

    h2 {
      font-size: 20px !important;
      line-height: 100% !important
    }

    h3 {
      font-size: 18px !important;
      line-height: 100% !important
    }

    h4 {
      font-size: 16px !important;
      line-height: 100% !important
    }

    .bodyContent {
      font-size: 18px !important;
      line-height: 125% !important
    }

    .event--default-wrapper {
      width: 560px
    }

    .events--default-column {
      display: flex;
      width: 100%
    }

    .events--default-row {
      display: block
    }

    .featured-events-mobile {
      text-align: left !important;
      margin: 0 !important
    }

    .rsvp-button-featured {
      display: table-cell;
      text-align: end;
      float: right
    }

    .event-name-featured {
      display: table-cell;
      padding-right: 0.5em
    }
  }

  @media only screen and (min-width: 792px) {
    .events--default-column {
      display: flex;
      width: 100%;
      max-width: 260px
    }
  }

  @media only screen and (min-width: 601px) {
    .body {
      padding: 20px 0
    }

    #bodyContent {
      background-color: #FFF;
    }

    .event--default-wrapper {
      max-width: 50%
    }

    .events--default-column {
      width: 100%
    }

    .events--default-column.event--left {
      margin-right: 20px
    }

    .events--default-column.event--right {
      margin-left: 20px
    }

    .featured-events-mobile {
      text-align: left !important;
      margin: 0 !important
    }

    .rsvp-button-featured {
      display: table-cell;
      float: right
    }

    .event-name-featured {
      display: table-cell;
      padding-right: 0.5em
    }
  }

  @media only screen and (min-width: 481px) {
    .mj-column-per-100 {
      width: 100% !important
    }

    .mj-column-per-33 {
      width: 33% !important
    }

    .mj-column-per-62 {
      width: 62% !important
    }

    .mj-column-per-30 {
      width: 30% !important
    }

    .mj-column-px-30 {
      width: 30px !important
    }

    .mj-column-per-43 {
      width: 43% !important
    }

    .mj-column-per-57 {
      width: 57% !important;
      margin-top: 0 !important
    }

    .featured-events-mobile {
      text-align: left !important;
      margin: 0 !important
    }

    .name-button-featured {
      width: 100%;
      display: inline-table
    }

    .event-name-featured {
      float: left;
      width: 70%;
      padding-right: 0.5em
    }
  }

  @media all and (min-width: 0px) and (max-width: 480px) {
    .mj-image-px-164 {
      width: auto !important;
      height: auto !important
    }

    .featured-events-mobile {
      text-align: center !important;
      margin: 0 auto !important
    }

    .featured-events-image {
      padding: 0 !important;
      width: 100% !important
    }

    .name-button-featured {
      display: inline-block;
      text-align: start
    }

    .rsvp-button-featured {
      margin-bottom: 12px;
      margin-top: 12px;
      display: block;
      float: left
    }
  }

  /*]]>*/</style>
  <!--[if mso]>
  <style type="text/css">@media only screen and (max-width: 480px) {
    @-ms-viewport {
      width: 320px
    }@viewport {
      width: 320px
    }
  }</style><![endif]--> <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml><![endif]--><!--[if lte mso 11]>
  <style type="text/css">.outlook-group-fix {
    width: 100% !important
  }</style><![endif]--></head>
<body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="background-color: #FFFFFF;">
<div style="display: none; max-height: 0px; overflow: hidden;">
</div>
<div style="display: none; max-height: 0px; overflow: hidden;"> &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>
<center>

  <table style="min-width:100%" width="100%" bgcolor="#f2f2ed">
    <tbody>
    <tr>
      <td>


      </td>
    </tr>
    <tr>
      <td>
        <table style="margin-left:auto;margin-right:auto;border-collapse:collapse;border-spacing:0;border:0;padding:0" cellpadding="0" cellspacing="0" border="0">
          <tbody>
          <tr>

            <td style="margin-left:auto;margin-right:auto" align="center" bgcolor="#f2f2ed">
              <table class="m_5932195873061893277content" style="border:none">
                <tbody>
                <tr>
                  <td align="center" bgcolor="#f2f2ed">
                    <table cellpadding="0" cellspacing="0" border="0" bgcolor="#f2f2ed">
                      <tbody>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr bgcolor="#f2f2ed">
                        <td style="background-color:#f2f2ed" class="m_5932195873061893277grid__col" bgcolor="#f2f2ed">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="center">
                            <tbody>
                            <tr bgcolor="#f2f2ed">
                              <td width="30" bgcolor="#f2f2ed" align="center"></td>
                              <td style="text-align:center;background-color:#f2f2ed" align="center">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" bgcolor="#f2f2ed" align="center">


                                  <tbody>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">

                                      <div style="width:140px;height:100px;margin:0 auto;text-align:center">


                                        <img src="https://www.strallop.com/assets/logo.png" title="" alt="Strallop" border="0" height="25" class="CToWUd" width="50">


                                      </div>

                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                                      <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">


                                      <h1 style="padding:0;margin:12px 0 0 0;font-size:30px;line-height:42px;font-weight:bold;font-weight:800;letter-spacing:-0.2px;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;margin-top:0">{{{firstName}}},
                                      </h1>
                                      <p>are you ready for</p>
                                      <h1 style="padding:0;margin:12px 0 0 0;font-size:30px;line-height:42px;font-weight:bold;font-weight:800;letter-spacing:-0.2px;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#1e0a3c;margin-top:0">
                                        {{{eventName}}}?</h1>


                                      <p>{{{eventLocation}}}</p><p>{{{startDate}}}</p><p>{{{startTime}}}</p></td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                                      <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">


                                      <a style="text-decoration:none;color:#3f60e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" href="https://www.strallop.com/events/{{{eventId}}}" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/open-in-app/0xuJPLNiXJ1cweUgGhqUXw~~/AAQxAQA~/RgRjF3VZP0TqaHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vZS9ob3ctdG8tYnV5LWEtaG9tZS1pbi1sYXMtdmVnYXMtbW92aW5nLXRvLWxhcy12ZWdhcy1mcm9tLXNlYXR0bGUtdGlja2V0cy0xNjgxOTgxNzgyNzk_YWZmPWVlbWFpbG9yZGNvbmYmdXRtX2NhbXBhaWduPW9yZGVyX2NvbmZpcm0mdXRtX21lZGl1bT1lbWFpbCZyZWY9ZWVtYWlsb3JkY29uZiZ1dG1fc291cmNlPWV2ZW50YnJpdGUmdXRtX3Rlcm09dmlld2V2ZW50VwNzcGNCCmEw2UE2Ye8M5WJSE25lYml5b3UxNkBnbWFpbC5jb21YBAAAAAA~&amp;source=gmail&amp;ust=1631032172094000&amp;usg=AFQjCNGH3iILhkJbDJN-Grbc88M5DxIHuA">View
                                        event details</a>

                                    </td>
                                  </tr>








                                  </tbody>
                                </table>
                              </td>
                              <td width="30" bgcolor="#f2f2ed"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>





                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>
                            <tr>
                              <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#ffffff;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0;border-bottom-left-radius:0" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                            <tbody>

                            <tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18"></td>
                            </tr><tr bgcolor="white">
                              <td style="padding:0;text-align:center" align="center" bgcolor="white" width="100%" height="">


                                <h4 style="padding:0;margin:12px 0 0 0;font-size:12px;line-height:23px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">Ticket: {{{ticketTypeName}}}</h4>


                              </td>
                            </tr>
                            <tr>
                              <td style="line-height:18px;font-size:18px;height:18px" height="18" bgcolor="">&nbsp;</td>
                            </tr><tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18"></td>
                            </tr></tbody>
                          </table>
                        </td>
                      </tr>


                      <tr bgcolor="#FFFFFF">
                        <td style="background-color:#ffffff" bgcolor="#FFFFFF" class="m_5932195873061893277grid__col">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="left">
                            <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td width="20" bgcolor="#FFFFFF" align="left"></td>
                              <td style="text-align:left;background-color:#ffffff" align="left">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" bgcolor="#FFFFFF" align="left">


                                  <tbody>
                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="">


                                      <h3 style="padding:0;margin:12px 0 0 0;font-size:17px;line-height:32px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">Message From the organizers</h3>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>






















                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:left" align="left" bgcolor="white" width="100%" height="">


                                      <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%">
                                        <tbody>
                                        <tr>

                                          <td>
                                            <div>
                                              {{{emailHTMLDescription}}}
                                            </div>
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>





                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#ffffff" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="white" width="100%" height="">


                                      <h2 style="padding:0;margin:12px 0 0 0;font-size:17px;line-height:23px;font-weight:normal;font-weight:500;color:#1e0a3c;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;margin-top:0">

                                        Questions about this event?

                                      </h2>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:8px;font-size:8px;background-color:#ffffff;border-top-left-radius:0px;border-top-right-radius:0px;border-bottom-right-radius:0;border-bottom-left-radius:0" width="600" height="8">
                                      <table style="line-height:8px;font-size:8px;height:8px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="8">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        <tr bgcolor="#FFFFFF">
                                          <td style="line-height:8px;font-size:8px;height:8px" height="8"></td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="white">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="white" width="100%" height="">





<span style="font-weight:normal;margin:4px 0;font-size:15px;line-height:21px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#6f7287;font-weight:normal">







<a style="text-decoration:none;color:#3f60e7;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" href="https://clicks.Strallop.com/f/open-in-app/4vJ6b6wEGfQOXTmN7afNAw~~/AAQxAQA~/RgRjF3VZP0SraHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vbXl0aWNrZXRzLzE4NDMyOTExNTU_dXRtX2NhbXBhaWduPW9yZGVyX2NvbmZpcm0mdXRtX21lZGl1bT1lbWFpbCZyZWY9ZWVtYWlsb3JkY29uZiZjb250YWN0X29yZ2FuaXplcj0xJnV0bV9zb3VyY2U9ZXZlbnRicml0ZSZ1dG1fdGVybT1jb250YWN0b3JnVwNzcGNCCmEw2UE2Ye8M5WJSE25lYml5b3UxNkBnbWFpbC5jb21YBAAAAAA~" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/open-in-app/4vJ6b6wEGfQOXTmN7afNAw~~/AAQxAQA~/RgRjF3VZP0SraHR0cHM6Ly93d3cuZXZlbnRicml0ZS5jb20vbXl0aWNrZXRzLzE4NDMyOTExNTU_dXRtX2NhbXBhaWduPW9yZGVyX2NvbmZpcm0mdXRtX21lZGl1bT1lbWFpbCZyZWY9ZWVtYWlsb3JkY29uZiZjb250YWN0X29yZ2FuaXplcj0xJnV0bV9zb3VyY2U9ZXZlbnRicml0ZSZ1dG1fdGVybT1jb250YWN0b3JnVwNzcGNCCmEw2UE2Ye8M5WJSE25lYml5b3UxNkBnbWFpbC5jb21YBAAAAAA~&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNGjvnuDKmUqI9VF8HLHa_F5UgIfnQ">Contact the organizer</a>



</span>
                                    </td>
                                  </tr>


                                  </tbody>
                                </table>
                              </td>
                              <td width="20" bgcolor="#FFFFFF"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:18px;font-size:18px;background-color:#ffffff;border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0px;border-bottom-left-radius:0px" width="600" height="18">
                          <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">
                            <tbody>
                            <tr bgcolor="#FFFFFF">
                              <td style="line-height:18px;font-size:18px;height:18px" height="18"></td>
                            </tr>

                            <tr>
                              <td style="line-height:18px;font-size:18px;height:18px" height="18" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>


                      <tr>
                        <td style="line-height:4px;font-size:4px;background-color:#f2f2ed" width="600" height="4">
                          <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                            <tbody>
                            <tr>
                              <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>











                      <tr>
                        <td style="line-height:4px;font-size:4px;background-color:#f2f2ed" width="600" height="4">
                          <table style="line-height:4px;font-size:4px;height:4px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="4">

                            <tbody>
                            <tr>
                              <td style="line-height:8px;font-size:8px;height:8px" height="8" bgcolor="">&nbsp;</td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>





                      <tr bgcolor="#f2f2ed">
                        <td style="background-color:#f2f2ed" bgcolor="#f2f2ed" class="m_5932195873061893277grid__col">
                          <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" align="center">
                            <tbody>
                            <tr bgcolor="#f2f2ed">
                              <td width="30" bgcolor="#f2f2ed" align="center"></td>
                              <td style="text-align:center;background-color:#f2f2ed" align="center">
                                <table style="border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%;color:#1e0a3c" cellspacing="0" cellpadding="0" bgcolor="#f2f2ed" align="center">


                                  <tbody>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">


                                    </td>
                                  </tr>
                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">

                                      <img src="https://www.strallop.com/assets/logo.png" style="height:24px;padding:0;width:12px" height="24" width="24" alt="twitter" title="twitter" border="0" class="CToWUd">

                                      <span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:120px;text-align:center">
    Strallop Events
</span>
                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:12px;font-size:12px;background-color:#f2f2ed" width="600" height="12">
                                      <table style="line-height:12px;font-size:12px;height:12px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="12">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:24px;font-size:24px;height:24px" height="24" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="#f2f2ed">
                                    <td style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="">



<span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:40px;text-align:center">
    <a href="https://clicks.Strallop.com/f/a/L2Nq5e-i20EzBWD1mkaEFw~~/AAQxAQA~/RgRjF3VZP0QiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vRXZlbnRicml0ZVcDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA" aria-label="Strallop's Twitter" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/L2Nq5e-i20EzBWD1mkaEFw~~/AAQxAQA~/RgRjF3VZP0QiaHR0cHM6Ly93d3cudHdpdHRlci5jb20vRXZlbnRicml0ZVcDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNHoVFY2QNKAhi76GJ1Z1dxbjs3cPQ">
        <img src="https://ci6.googleusercontent.com/proxy/cJuV4Gb3M27Z4xbrlfxStbO6pvZriZyZd_5xBbhl1GlmiRlE6nBg4Mag8croszfaWMbgoVRSzVN39ozzsN0okEjh1e07cgrShz3ET4BO7gU8XZGh56Y-YiuEjjndeADJT39GPO2E23rjQyv_rBlpkceQTB-I02Vy6Qlf9hc4lS_lbuYZZOlowb6akwM3W-o=s0-d-e1-ft#https://cdn.evbstatic.com/s3-build/165480-rc2021-09-06_16.04-6d7bd82/django/images/emails_2018_rebrand/TW-icon-purple@2x.png" style="height:24px;padding:0;width:24px" height="24" width="24" alt="twitter" title="twitter" border="0" class="CToWUd">
    </a>
</span>


                                      <span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:40px;text-align:center">
    <a href="https://clicks.Strallop.com/f/a/qcIHzFjssUkDwLBQ1QvPzQ~~/AAQxAQA~/RgRjF3VZP0QjaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0V2ZW50YnJpdGVXA3NwY0IKYTDZQTZh7wzlYlITbmViaXlvdTE2QGdtYWlsLmNvbVgEAAAAAA~~" aria-label="Strallop Facebook" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/qcIHzFjssUkDwLBQ1QvPzQ~~/AAQxAQA~/RgRjF3VZP0QjaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL0V2ZW50YnJpdGVXA3NwY0IKYTDZQTZh7wzlYlITbmViaXlvdTE2QGdtYWlsLmNvbVgEAAAAAA~~&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNGqLqDYVlpCWj_-t5W-hh4qCEM1Vg">
        <img src="https://ci3.googleusercontent.com/proxy/lMvQ6RWqmtADMsdyh7uSxE__CE_pP-w9de5tpmbEPpSxO_qdcxmajL6i0BX4emPfwgxVqkj0wgkQxtnkp6vC6MwyDBEwKu7QDAjghInh8vI6NvkeIIJaugbzWeTZQ7d_gGqDNtEjiuI1L-Rz16Gu5R0KDEvUSY7RKPtIVmmBoQkgM-0uT0v1qartAGkL_6c=s0-d-e1-ft#https://cdn.evbstatic.com/s3-build/165480-rc2021-09-06_16.04-6d7bd82/django/images/emails_2018_rebrand/FB-icon-purple@2x.png" style="height:24px;padding:0;width:24px" height="24" width="24" alt="facebook" title="facebook" border="0" class="CToWUd">
    </a>
</span>


                                      <span class="m_5932195873061893277social-logo-container" style="padding:0;display:inline-block;height:auto;margin:0;width:40px;text-align:center">
    <a href="https://clicks.Strallop.com/f/a/6fz2IVg8tev9SA9fMhue0Q~~/AAQxAQA~/RgRjF3VZP0QlaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ldmVudGJyaXRlL1cDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA" aria-label="Strallop's Instagram" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://clicks.Strallop.com/f/a/6fz2IVg8tev9SA9fMhue0Q~~/AAQxAQA~/RgRjF3VZP0QlaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9ldmVudGJyaXRlL1cDc3BjQgphMNlBNmHvDOViUhNuZWJpeW91MTZAZ21haWwuY29tWAQAAAAA&amp;source=gmail&amp;ust=1631032172095000&amp;usg=AFQjCNHf8YLHvGqIig-KOHzVoCBCyjj9Jg">
        <img src="https://ci6.googleusercontent.com/proxy/KWkaDWqoOvYDLeXpqr8LpWWQjFOIA6cK85iGeb2wpb1OvYXD31K691XHUyL_tK0G_o_nPIBxJ8lxPfQtAmcD_aIWv2deZHt7w0MaHmAyMX2CQuXx8dSkia2Q_-YyHlctb2P8MVpPIDFXHC83TCyvL3GS-MFV9cp0fPj7dYSdRIFjQC8sfH_xdGcOS9ua6Ns=s0-d-e1-ft#https://cdn.evbstatic.com/s3-build/165480-rc2021-09-06_16.04-6d7bd82/django/images/emails_2018_rebrand/IG-icon-purple@2x.png" style="height:24px;padding:0;width:24px" height="24" width="24" alt="instagram" title="instagram" border="0" class="CToWUd">
    </a>
</span>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:10px;font-size:10px;background-color:#f2f2ed" width="600" height="10">
                                      <table style="line-height:10px;font-size:10px;height:10px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="10">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:20px;font-size:20px;height:20px" height="20" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr bgcolor="#f2f2ed">
                                    <td class="m_5932195873061893277footer-content" style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="24">





<span style="font-weight:normal;margin:4px 0;font-size:12px;line-height:18px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#4b4d63;font-weight:normal">




    <span>
                This email was sent to


<a style="text-decoration:none;color:#3f60e7;color:#f05537;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;font-weight:normal" href="mailto:{{{purchaserEmail}}}" target="_blank">{{{purchaserEmail}}}</a>
            </span>



</span>


                                    </td>
                                  </tr>





                                  <tr bgcolor="#f2f2ed">
                                    <td class="m_5932195873061893277footer-content" style="padding:0;text-align:center" align="center" bgcolor="#f2f2ed" width="100%" height="24">





<span style="font-weight:normal;margin:4px 0;font-size:12px;line-height:18px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#4b4d63;font-weight:normal">


            Copyright © 2021 Strallop. All rights reserved.


</span>


                                    </td>
                                  </tr>


                                  <tr>
                                    <td style="line-height:18px;font-size:18px;background-color:#f2f2ed" width="600" height="18">
                                      <table style="line-height:18px;font-size:18px;height:18px;border-collapse:collapse;border-spacing:0;border:0;padding:0;width:100%" cellspacing="0" cellpadding="0" height="18">

                                        <tbody>
                                        <tr>
                                          <td style="line-height:36px;font-size:36px;height:36px" height="36" bgcolor="">
                                            &nbsp;
                                          </td>
                                        </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>


                                  <tr>
                                    <td><img src="https://ci5.googleusercontent.com/proxy/Nlb97E1WLmc61mzMdRlJKRiBX5TW1_EkFCeAa4IUMed4iIytmAluKE_0u4o7OjDx6jd9tXOqDqD831p2s8sjuO8iijL2zcUiCkNdEYUD5lToXSDiWehVL-bp4wBwkhzDyll9nSDZ7pF1a6RQFJIrCMs4VCgFnmrtU-QkC1op4sfY3XIJn5Kb-xQaSeU41w=s0-d-e1-ft#https://www.Strallop.com/emails/action/?recipient=nebiyou16%40gmail.com&amp;type_id=65&amp;type=open&amp;send_id=2021-09-06&amp;list_id=9" alt="" width="1" height="1" class="CToWUd">

                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </td>
                              <td width="30" bgcolor="#f2f2ed"></td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                </tbody>
              </table>
            </td>
          </tr>
          </tbody>
        </table>
      </td>
    </tr>
    </tbody>
  </table>


  <script type="text/plain">darkThemeSupport=true backgroundImageSupport=true headerImageLinkSupport=true</script>
</center>









<script>
  (function() {
    var ws = new WebSocket('ws://' + window.location.host + '/jb-server-page?reloadServiceClientId=1');
    ws.onmessage = function (msg) {
      if (msg.data === 'reload') {
        window.location.reload();
      }
      if (msg.data.startsWith('update-css ')) {
        var messageId = msg.data.substring(11);
        var links = document.getElementsByTagName('link');
        for (var i = 0; i < links.length; i++) {
          var link = links[i];
          if (link.rel !== 'stylesheet') continue;
          var clonedLink = link.cloneNode(true);
          var newHref = link.href.replace(/(&|\\?)jbUpdateLinksId=\\d+/, "$1jbUpdateLinksId=" + messageId);
          if (newHref !== link.href) {
            clonedLink.href = newHref;
          }
          else {
            var indexOfQuest = newHref.indexOf('?');
            if (indexOfQuest >= 0) {
              // to support ?foo#hash
              clonedLink.href = newHref.substring(0, indexOfQuest + 1) + 'jbUpdateLinksId=' + messageId + '&' +
                newHref.substring(indexOfQuest + 1);
            }
            else {
              clonedLink.href += '?' + 'jbUpdateLinksId=' + messageId;
            }
          }
          link.replaceWith(clonedLink);
        }
      }
    };
  })();
</script>
<script>
  (function() {
    var ws = new WebSocket('ws://' + window.location.host + '/jb-server-page?reloadServiceClientId=2');
    ws.onmessage = function (msg) {
      if (msg.data === 'reload') {
        window.location.reload();
      }
      if (msg.data.startsWith('update-css ')) {
        var messageId = msg.data.substring(11);
        var links = document.getElementsByTagName('link');
        for (var i = 0; i < links.length; i++) {
          var link = links[i];
          if (link.rel !== 'stylesheet') continue;
          var clonedLink = link.cloneNode(true);
          var newHref = link.href.replace(/(&|\\?)jbUpdateLinksId=\\d+/, "$1jbUpdateLinksId=" + messageId);
          if (newHref !== link.href) {
            clonedLink.href = newHref;
          }
          else {
            var indexOfQuest = newHref.indexOf('?');
            if (indexOfQuest >= 0) {
              // to support ?foo#hash
              clonedLink.href = newHref.substring(0, indexOfQuest + 1) + 'jbUpdateLinksId=' + messageId + '&' +
                newHref.substring(indexOfQuest + 1);
            }
            else {
              clonedLink.href += '?' + 'jbUpdateLinksId=' + messageId;
            }
          }
          link.replaceWith(clonedLink);
        }
      }
    };
  })();
</script>
<script>
(function() {
  var ws = new WebSocket('ws://' + window.location.host + '/jb-server-page?reloadServiceClientId=6');
  ws.onmessage = function (msg) {
      if (msg.data === 'reload') {
          window.location.reload();
      }
      if (msg.data.startsWith('update-css ')) {
          var messageId = msg.data.substring(11);
          var links = document.getElementsByTagName('link');
          for (var i = 0; i < links.length; i++) {
              var link = links[i];
              if (link.rel !== 'stylesheet') continue;
              var clonedLink = link.cloneNode(true);
              var newHref = link.href.replace(/(&|\\?)jbUpdateLinksId=\\d+/, "$1jbUpdateLinksId=" + messageId);
              if (newHref !== link.href) {
                clonedLink.href = newHref;
              }
              else {
                var indexOfQuest = newHref.indexOf('?');
                if (indexOfQuest >= 0) {
                  // to support ?foo#hash
                  clonedLink.href = newHref.substring(0, indexOfQuest + 1) + 'jbUpdateLinksId=' + messageId + '&' +
                                    newHref.substring(indexOfQuest + 1);
                }
                else {
                  clonedLink.href += '?' + 'jbUpdateLinksId=' + messageId;
                }
              }
              link.replaceWith(clonedLink);
          }
      }
  };
})();
</script></body></html>
`
