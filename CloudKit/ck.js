<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>csCloudKit3</title>
    <link rel="stylesheet" href="css/cloudkit-catalog.css">
    <style>
        .normal-sprite{background-image:url('../images/icons/normal-s7368ef0ced.png');background-repeat:no-repeat}.retina-sprite{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-repeat:no-repeat}*{margin:0;box-sizing:border-box}*:focus{outline:none}.link,body a{color:#2192d9;text-decoration:none;padding:0;cursor:pointer}.link[disabled],body a[disabled]{cursor:default}.link:visited,body a:visited{color:#2192d9}.link:hover,body a:hover{color:#0073bc}.link:hover:visited,body a:hover:visited{color:#0073bc}.link:focus,body a:focus{color:#094e96}.link:focus:visited,body a:focus:visited{color:#094e96}.divider{color:#e3e3e3}.hide{display:none}.clear{clear:both}.light,.link[disabled],body a[disabled]{color:#bbbbbb}.object{overflow:hidden;text-overflow:ellipsis}.object .object-key{padding-right:3px;font-weight:500}.align-center{text-align:center}.small{font-size:small}#apple-sign-in-button{padding-bottom:13px}#dialog{position:absolute;top:0;right:0;left:0;bottom:0;z-index:10;background-color:rgba(0,0,0,0.3)}#dialog #dialog-text{padding:13px 26px 59px 26px;background-color:white;border-radius:8px;position:absolute;max-width:500px;box-shadow:0px 0px 15px rgba(0,0,0,0.15),0px 0px 1px 1px rgba(0,0,0,0.1)}#dialog #dialog-text.no-actions{padding-bottom:13px}#dialog #dialog-text h2{font-weight:500}#dialog #dialog-text h2 .error-code{font-weight:300}#dialog #dialog-text .actions{line-height:44px;height:46px;border-top:1px solid #e3e3e3;position:absolute;left:0;right:0;bottom:0;padding:0 26px}body{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:400;-webkit-font-smoothing:antialiased;font-size:15px;line-height:1.4;color:#666}body a{text-decoration:none}body b{color:#262626}body code{color:black}body em,body i{font-weight:500}body h1{color:#262626;font-size:35px;line-height:1;padding-top:26px;font-weight:300}body h2{color:#262626;font-size:19px;line-height:1;margin-bottom:13px;padding-top:13px;font-weight:400}body h3{color:#262626;font-size:17px;font-weight:300;margin-bottom:3px}body h4{font-weight:300;font-size:15px;padding-top:26px;color:#262626}body p,body ol,body ul,body h1,body pre:not(.sample-code){margin-bottom:13px}body button{border:none;font-size:17px;background:none;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;cursor:pointer}body table{table-layout:fixed;font-size:15px;border-collapse:collapse;border-spacing:0;border-bottom:1px solid #e6e6e6}body table tr{border-top:1px solid #e6e6e6}body table tr th,body table tr td{padding:13px;vertical-align:middle}body table tr th:not(:last-child),body table tr td:not(:last-child){border-right:1px dotted #e6e6e6}body table tr th{font-weight:500;font-size:13px;color:#b0b0b0;text-align:right}body table tr td{font-weight:300;text-align:left;color:#262626;overflow:hidden;text-overflow:ellipsis}body table thead tr{border-top:none}body table thead tr th,body table thead tr td{padding-bottom:3px;padding-top:3px;text-align:left}body table thead tr th:not(:last-child),body table thead tr td:not(:last-child){border-right:none}.content .item{padding:13px;border-top:1px solid #e6e6e6}.content .item .item-asset{float:left}.content .item .item-name,.content .item .item-location{margin-left:330px}.content .item .item-location{font-size:15px}.content .item .item-location .item-location-title{font-weight:500;color:#b0b0b0}.main-pane{position:absolute;left:0;right:0;top:0;bottom:0;background-color:#F2F2F2;overflow-x:hidden}.main-pane .background-strip{height:45px;left:0;right:0;background-color:#2E333A}.left-pane{position:absolute;top:0;bottom:0;width:1140px;left:calc(50% - 570px);background-color:white;border-right:1px solid #D3D3D3}@media (max-width: 1190px){.left-pane{left:0}}.left-pane .vertical-scroll-container{position:absolute;top:45px;bottom:44px;left:0;overflow-x:hidden;overflow-y:auto}.left-pane .vertical-scroll-container .menu-items{width:305px;border-right:1px solid #DEDEDE;border-left:1px solid #D3D3D3;min-height:100%}.left-pane .vertical-scroll-container .menu-items .menu-item-container{position:relative;height:45px;overflow:hidden;margin-left:-1px;width:305px}.left-pane .vertical-scroll-container .menu-items .menu-item-container.caret{transition:height 0.3s ease-in-out}.left-pane .vertical-scroll-container .menu-items .menu-item-container.caret::after{position:absolute;top:10px;right:14px;content:'\2303';color:#7B7E83;line-height:30px}.left-pane .vertical-scroll-container .menu-items .menu-item-container.caret:not(.selected)::after{top:4px;-webkit-transform:rotate(-180deg);-moz-transform:rotate(-180deg);-o-transform:rotate(-180deg);transform:rotate(-180deg);ms-filter:"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";filter:progid:DXImageTransform.Microsoft.BasicImage(rotation=2)}.left-pane .vertical-scroll-container .menu-items .menu-item-container.caret.selected .menu-item{cursor:default}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected .tab-menu-item.selected{background-color:#CAEFFF;border-left:1px solid #B0D0DE;border-right:1px solid #B0D0DE;padding-left:47px}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected.caret{height:178px}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected.caret.private-records{height:148px}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected:not(.caret):not(:first-child){margin-top:-1px;padding-top:1px;height:46px}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected:not(.caret):not(:first-child) .border{display:block;top:0;background-color:white;border-bottom:none}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected:not(.caret) .menu-item{background-color:#CAEFFF;border-left:1px solid #B0D0DE;border-right:1px solid #B0D0DE}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected:not(.caret) .menu-item .icon{left:7px}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected:not(.caret) .menu-item .name{padding-left:47px}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected:not(.caret) .menu-item .subtitle{left:47px;color:#777777}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected:not(.caret) .menu-item .subtitle .green{color:#777777}.left-pane .vertical-scroll-container .menu-items .menu-item-container.selected:not(.caret) .border{display:none}.left-pane .vertical-scroll-container .menu-items .menu-item-container.readme .icon{background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -223px;background-repeat:no-repeat;width:31px;height:31px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .vertical-scroll-container .menu-items .menu-item-container.readme .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .vertical-scroll-container .menu-items .menu-item-container.authentication .icon{background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 0;background-repeat:no-repeat;width:31px;height:31px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .vertical-scroll-container .menu-items .menu-item-container.authentication .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .vertical-scroll-container .menu-items .menu-item-container.discoverability .icon{background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -68px;background-repeat:no-repeat;width:31px;height:31px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .vertical-scroll-container .menu-items .menu-item-container.discoverability .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .vertical-scroll-container .menu-items .menu-item-container.public-query .icon{background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -192px;background-repeat:no-repeat;width:31px;height:31px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .vertical-scroll-container .menu-items .menu-item-container.public-query .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .vertical-scroll-container .menu-items .menu-item-container.private-zones .icon{background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -347px;background-repeat:no-repeat;width:31px;height:31px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .vertical-scroll-container .menu-items .menu-item-container.private-zones .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .vertical-scroll-container .menu-items .menu-item-container.notifications .icon{background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -130px;background-repeat:no-repeat;width:31px;height:31px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .vertical-scroll-container .menu-items .menu-item-container.notifications .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .vertical-scroll-container .menu-items .menu-item-container.private-records .icon{background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -254px;background-repeat:no-repeat;width:31px;height:31px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .vertical-scroll-container .menu-items .menu-item-container.private-records .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .vertical-scroll-container .menu-items .menu-item-container.private-subscriptions .icon{background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -285px;background-repeat:no-repeat;width:31px;height:31px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .vertical-scroll-container .menu-items .menu-item-container.private-subscriptions .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .vertical-scroll-container .menu-items .menu-item-container.private-sync .icon{background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -316px;background-repeat:no-repeat;width:31px;height:31px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .vertical-scroll-container .menu-items .menu-item-container.private-sync .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .vertical-scroll-container .menu-items .menu-item-container .border{position:absolute;height:1px;bottom:0;left:14px;right:14px;border-bottom:1px solid #EDEDED}.left-pane .vertical-scroll-container .menu-items .menu-item-container .tab-menu{padding-bottom:13px}.left-pane .vertical-scroll-container .menu-items .menu-item-container .tab-menu .tab-menu-item{-moz-user-select:-moz-none;-ms-user-select:none;-webkit-user-select:none;user-select:none;height:30px;padding-left:48px;color:#44484F;font-size:13px;line-height:30px;cursor:pointer}.left-pane .home{-moz-user-select:-moz-none;-ms-user-select:none;-webkit-user-select:none;user-select:none;background-color:#3A4049;border-right:1px solid #282D33;border-left:1px solid #202429;width:305px;height:45px}.left-pane .home .icon{position:absolute;top:4px;left:8px;background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -31px;background-repeat:no-repeat;width:205px;height:37px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .home .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .menu-item{-moz-user-select:-moz-none;-ms-user-select:none;-webkit-user-select:none;user-select:none;display:block;position:relative;height:45px}.left-pane .menu-item:hover,.left-pane .menu-item:visited,.left-pane .menu-item:active{color:#44484F}.left-pane .menu-item.documentation{position:absolute;bottom:0;left:0;width:305px;border-right:1px solid #DEDEDE;border-left:1px solid #D3D3D3;background-color:white}.left-pane .menu-item.documentation .icon{background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -99px;background-repeat:no-repeat;width:31px;height:31px;top:7px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.left-pane .menu-item.documentation .icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.left-pane .menu-item.documentation .name{border-top:1px solid #E5E5E5}.left-pane .menu-item .name{padding-left:48px;right:0;top:0;color:#44484F;font-weight:400;line-height:44px}.left-pane .menu-item .name.with-subtitle{line-height:32px}.left-pane .menu-item .subtitle{position:absolute;left:48px;bottom:6px;font-size:11px;font-weight:400;color:#999999}.left-pane .menu-item .subtitle .green{color:#22ad50}.left-pane .menu-item .icon{display:block;top:6px;left:8px;position:absolute}.left-pane .menu-item .alert{position:absolute;right:13px;top:calc(50% - 10px)}.left-pane .menu-item .alert .alert-text{font-size:11px;line-height:20px;height:20px;border-radius:10px;background-color:#ff0000;min-width:20px;padding:0 6px;text-align:center;color:white;font-weight:500}.right-pane{position:absolute;left:calc(50% - 265px);top:0;bottom:0;right:0;overflow-x:auto}.right-pane .header{height:45px;width:835px;line-height:44px;text-align:right;padding:0 13px 0 8px;background-color:#3A4049;border-bottom:1px solid #343942;border-right:1px solid #202429;font-size:21px;font-weight:300}.right-pane .header .left-button{position:absolute;height:44px;opacity:0.7;-moz-user-select:-moz-none;-ms-user-select:none;-webkit-user-select:none;user-select:none}.right-pane .header .left-button .play-icon{position:absolute;top:7px;background-image:url('../images/icons/normal-s7368ef0ced.png');background-position:0 -161px;background-repeat:no-repeat;width:31px;height:31px}@media (-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3 / 2), (min-resolution: 1.5dppx){.right-pane .header .left-button .play-icon{background-image:url('../images/icons/retina-s9ec412d8ba.png');background-size:205px 378px}}.right-pane .header .left-button button{display:block;line-height:44px;color:#fff;position:absolute;padding-left:35px;white-space:nowrap;font-size:21px}.right-pane .header .left-button.disabled{opacity:0.2}.right-pane .header .left-button:not(.disabled):hover{opacity:1}.right-pane .header .left-button:not(.disabled).active{opacity:0.5}.right-pane .header span{color:#fff;opacity:0.7}.right-pane .vertical-scroll-container{position:absolute;top:45px;bottom:0;left:0;right:0;overflow-y:auto;overflow-x:hidden;min-width:835px}.right-pane .vertical-scroll-container .page{max-width:835px}.right-pane .vertical-scroll-container .page .page-segment{display:none;position:relative;padding:0 15px}.right-pane .vertical-scroll-container .page .page-segment .input-fields{background-color:#f2f2f2;padding:13px;border-bottom:1px solid #e6e6e6;border-top:1px solid #d9d9d9;font-size:15px}.right-pane .vertical-scroll-container .page .page-segment .input-fields table{border-bottom:none}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field{border-top:none}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td{padding:3px}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .checkboxes{height:30px;padding-top:1px}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .checkboxes .checkbox{line-height:28px;font-weight:300;display:inline-block;padding-left:7px}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .checkboxes .checkbox label{padding-right:3px}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .checkboxes .checkbox input{vertical-align:middle}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .checkboxes .checkbox:not(:last-child){padding-right:6px}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border{background-color:white;border:1px solid #e6e6e6;height:30px;width:350px;position:relative}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border.select select{z-index:1}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border.select::after{content:'\25BE';color:#333333;position:absolute;right:6px;line-height:26px;z-index:0}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border input,.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border select{border:none;border-radius:0;font-size:15px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-weight:300;color:#262626;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;-o-appearance:none;appearance:none;vertical-align:middle;padding:1px 6px;width:100%;height:28px;transition:outline linear 0.2s;outline:1px solid transparent;outline-offset:0}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border input:active,.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border input:focus,.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border select:active,.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border select:focus{background-color:transparent;border:none;box-shadow:none;border-radius:0}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border input::-ms-expand,.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border select::-ms-expand{display:none}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border input:focus,.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border select:focus{outline:1px solid #1780fb;box-shadow:#3b7fca 0 0 2px}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border input[type=file]{opacity:0;cursor:pointer}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border .fake-file-input{position:absolute;left:0;right:0;bottom:0;top:0;padding:0 6px;line-height:28px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border .fake-file-input button{font-size:13px;font-weight:500}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field td .border .fake-file-input .file-name{padding:0 6px;font-weight:300}.right-pane .vertical-scroll-container .page .page-segment .input-fields table tr.field th{padding:3px 3px 0 3px;border-right:none}.right-pane .vertical-scroll-container .page .page-segment .description{padding-bottom:10px}.right-pane .vertical-scroll-container .page .page-segment .description h1:not(:first-child){padding-top:0;padding-bottom:10px}.right-pane .vertical-scroll-container .page .page-segment.selected{display:block}.right-pane .vertical-scroll-container .page .page-segment b{font-weight:500}.right-pane .vertical-scroll-container .page .page-segment ul{padding:0 13px;list-style-type:none}.right-pane .vertical-scroll-container .page .page-segment ol{padding:0 13px;margin-left:13px}.right-pane .vertical-scroll-container .page .page-segment ol li:not(:last-child){padding-bottom:13px}.right-pane .vertical-scroll-container .page .page-segment pre{overflow-x:inherit;background-color:#f2f2f2;font-size:15px;border-bottom:1px solid #d9d9d9;border-top:1px solid #d9d9d9;padding:13px}.right-pane .vertical-scroll-container .page .page-segment pre code{font-family:monospace;background-color:#f2f2f2;line-height:110%}.right-pane .vertical-scroll-container .page .page-segment pre.no-top-border{border-top:none}.right-pane .vertical-scroll-container .page .page-segment .content{min-height:26px}.right-pane .vertical-scroll-container .page .page-segment .content>div{background-color:#ffffe0;transition:background-color 0.5s ease}.right-pane .vertical-scroll-container .page .page-segment .content>div.results{background-color:white}.right-pane .vertical-scroll-container .page .page-segment .content>div .table-wrapper{overflow-x:auto}.right-pane .vertical-scroll-container .page .page-segment .content table tbody td{max-width:320px}.right-pane .vertical-scroll-container .page .page-segment .content table tbody tr.new{background-color:#f4faea}@media (max-width: 1190px){.right-pane{left:305px}}
    </style>
</head>
<body>

    <script>
        /*
         * Initialize the global objects we will need.
         */
        if(typeof CKCatalog === 'undefined') {
            CKCatalog = {};
        }

        if(typeof CKCatalog.tabs === 'undefined') {
            CKCatalog.tabs = {
                'readme': [{}],
                'not-found': [{}]
            };
        }
   </script>
    
    <div id="apple-sign-in-button"></div>
    <div id="apple-sign-out-button"></div><br>
    <span id="username"></span><br><br>
<!--     <button type="button" onclick="readQuery()">Get Table</button>
 -->    
  <script>
      CKCatalog.init = function() {
  try {

    // Configure CloudKit for your app.
    CloudKit.configure({
      containers: [{

        // Change this to a container identifier you own.
        containerIdentifier: 'iCloud.computer.perma-cloud',

        // And generate an API token through CloudKit Dashboard.
        apiToken: '81ba8c7f88736ce19abe519911286ff08152119dbff0d18527c0a4277a8f67d8',

        auth: {
          buttonSize: 'medium',
          persist: true // Sets a cookie.
        },
        environment: 'development'
      }]
    });



    var failAuth = function() {
      var span = document.getElementById('username');
      span.textContent = 'Authentication Failed';
    };

    // Try to run the authentication code.
    try {
      CKCatalog.tabs['authentication'][0].sampleCode().catch(failAuth);
    } catch (e) {
      failAuth();
    }
  } catch (e) {
    CKCatalog.dialog.showError(e);
  }
};
    </script>
  <script>
    CKCatalog.tabs['authentication'] = (function() {

  var displayUserName = function(name) {
    var userNameEl = document.getElementById('username');
    userNameEl.textContent = name;
    var displayedUserName = document.getElementById('displayed-username');
    if(displayedUserName) {
      displayedUserName.textContent = name;
    }
  };

  var createButtonContainersHTML = function() {
    return '<div>'+
      '<h2 id="displayed-username"></h2>'+
      '<div id="apple-sign-in-button"></div>'+
      '<div id="apple-sign-out-button"></div>'+
    '</div>';
  };

  var authSample = {
    run: function() {
      var content = this.content;
      content.innerHTML = createButtonContainersHTML();
      return this.sampleCode().then(function() {
        return content.firstChild;
      });
    },
    sampleCode: function demoSetUpAuth() {

      // Get the container.
      var container = CloudKit.getDefaultContainer();

      function gotoAuthenticatedState(userInfo) {
        if(userInfo.isDiscoverable) {
          displayUserName(userInfo.firstName + ' ' + userInfo.lastName);
          console.log("igh")
          window.location.href = 'table.html';

        } else {
          displayUserName('User record name: ' + userInfo.userRecordName);
          console.log("igh")
          window.location.href = 'table.html';
        }
        container
          .whenUserSignsOut()
          .then(gotoUnauthenticatedState);
      }
      function gotoUnauthenticatedState() {
        displayUserName('Unauthenticated User');
        container
          .whenUserSignsIn()
          .then(gotoAuthenticatedState)
          .catch(gotoUnauthenticatedState);

      }

      // Check a user is signed in and render the appropriate button.
      return container.setUpAuth()
        .then(function(userInfo) {

          // Either a sign-in or a sign-out button was added to the DOM.

          // userInfo is the signed-in user or null.
          if(userInfo) {
            gotoAuthenticatedState(userInfo);
          } else {
            gotoUnauthenticatedState();
          }
        });
    }
  };
        
  return [ authSample ];

})();
    </script>
    
    <script>
        window.addEventListener('cloudkitloaded',CKCatalog.init);
    </script>
    <script async src="https://cdn.apple-cloudkit.com/ck/2/cloudkit.js"></script>

</body>
</html>
