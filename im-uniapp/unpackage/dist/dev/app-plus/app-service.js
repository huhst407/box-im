if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const icons = {
    "id": "2852637",
    "name": "uniui图标库",
    "font_family": "uniicons",
    "css_prefix_text": "uniui-",
    "description": "",
    "glyphs": [
      {
        "icon_id": "25027049",
        "name": "yanse",
        "font_class": "color",
        "unicode": "e6cf",
        "unicode_decimal": 59087
      },
      {
        "icon_id": "25027048",
        "name": "wallet",
        "font_class": "wallet",
        "unicode": "e6b1",
        "unicode_decimal": 59057
      },
      {
        "icon_id": "25015720",
        "name": "settings-filled",
        "font_class": "settings-filled",
        "unicode": "e6ce",
        "unicode_decimal": 59086
      },
      {
        "icon_id": "25015434",
        "name": "shimingrenzheng-filled",
        "font_class": "auth-filled",
        "unicode": "e6cc",
        "unicode_decimal": 59084
      },
      {
        "icon_id": "24934246",
        "name": "shop-filled",
        "font_class": "shop-filled",
        "unicode": "e6cd",
        "unicode_decimal": 59085
      },
      {
        "icon_id": "24934159",
        "name": "staff-filled-01",
        "font_class": "staff-filled",
        "unicode": "e6cb",
        "unicode_decimal": 59083
      },
      {
        "icon_id": "24932461",
        "name": "VIP-filled",
        "font_class": "vip-filled",
        "unicode": "e6c6",
        "unicode_decimal": 59078
      },
      {
        "icon_id": "24932462",
        "name": "plus_circle_fill",
        "font_class": "plus-filled",
        "unicode": "e6c7",
        "unicode_decimal": 59079
      },
      {
        "icon_id": "24932463",
        "name": "folder_add-filled",
        "font_class": "folder-add-filled",
        "unicode": "e6c8",
        "unicode_decimal": 59080
      },
      {
        "icon_id": "24932464",
        "name": "yanse-filled",
        "font_class": "color-filled",
        "unicode": "e6c9",
        "unicode_decimal": 59081
      },
      {
        "icon_id": "24932465",
        "name": "tune-filled",
        "font_class": "tune-filled",
        "unicode": "e6ca",
        "unicode_decimal": 59082
      },
      {
        "icon_id": "24932455",
        "name": "a-rilidaka-filled",
        "font_class": "calendar-filled",
        "unicode": "e6c0",
        "unicode_decimal": 59072
      },
      {
        "icon_id": "24932456",
        "name": "notification-filled",
        "font_class": "notification-filled",
        "unicode": "e6c1",
        "unicode_decimal": 59073
      },
      {
        "icon_id": "24932457",
        "name": "wallet-filled",
        "font_class": "wallet-filled",
        "unicode": "e6c2",
        "unicode_decimal": 59074
      },
      {
        "icon_id": "24932458",
        "name": "paihangbang-filled",
        "font_class": "medal-filled",
        "unicode": "e6c3",
        "unicode_decimal": 59075
      },
      {
        "icon_id": "24932459",
        "name": "gift-filled",
        "font_class": "gift-filled",
        "unicode": "e6c4",
        "unicode_decimal": 59076
      },
      {
        "icon_id": "24932460",
        "name": "fire-filled",
        "font_class": "fire-filled",
        "unicode": "e6c5",
        "unicode_decimal": 59077
      },
      {
        "icon_id": "24928001",
        "name": "refreshempty",
        "font_class": "refreshempty",
        "unicode": "e6bf",
        "unicode_decimal": 59071
      },
      {
        "icon_id": "24926853",
        "name": "location-ellipse",
        "font_class": "location-filled",
        "unicode": "e6af",
        "unicode_decimal": 59055
      },
      {
        "icon_id": "24926735",
        "name": "person-filled",
        "font_class": "person-filled",
        "unicode": "e69d",
        "unicode_decimal": 59037
      },
      {
        "icon_id": "24926703",
        "name": "personadd-filled",
        "font_class": "personadd-filled",
        "unicode": "e698",
        "unicode_decimal": 59032
      },
      {
        "icon_id": "24923351",
        "name": "back",
        "font_class": "back",
        "unicode": "e6b9",
        "unicode_decimal": 59065
      },
      {
        "icon_id": "24923352",
        "name": "forward",
        "font_class": "forward",
        "unicode": "e6ba",
        "unicode_decimal": 59066
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrow-right",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923353",
        "name": "arrowthinright",
        "font_class": "arrowthinright",
        "unicode": "e6bb",
        "unicode_decimal": 59067
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrow-left",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923354",
        "name": "arrowthinleft",
        "font_class": "arrowthinleft",
        "unicode": "e6bc",
        "unicode_decimal": 59068
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrow-up",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923355",
        "name": "arrowthinup",
        "font_class": "arrowthinup",
        "unicode": "e6bd",
        "unicode_decimal": 59069
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrow-down",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923356",
        "name": "arrowthindown",
        "font_class": "arrowthindown",
        "unicode": "e6be",
        "unicode_decimal": 59070
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "bottom",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923349",
        "name": "arrowdown",
        "font_class": "arrowdown",
        "unicode": "e6b8",
        "unicode_decimal": 59064
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "right",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923346",
        "name": "arrowright",
        "font_class": "arrowright",
        "unicode": "e6b5",
        "unicode_decimal": 59061
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "top",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923347",
        "name": "arrowup",
        "font_class": "arrowup",
        "unicode": "e6b6",
        "unicode_decimal": 59062
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "left",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923348",
        "name": "arrowleft",
        "font_class": "arrowleft",
        "unicode": "e6b7",
        "unicode_decimal": 59063
      },
      {
        "icon_id": "24923334",
        "name": "eye",
        "font_class": "eye",
        "unicode": "e651",
        "unicode_decimal": 58961
      },
      {
        "icon_id": "24923335",
        "name": "eye-filled",
        "font_class": "eye-filled",
        "unicode": "e66a",
        "unicode_decimal": 58986
      },
      {
        "icon_id": "24923336",
        "name": "eye-slash",
        "font_class": "eye-slash",
        "unicode": "e6b3",
        "unicode_decimal": 59059
      },
      {
        "icon_id": "24923337",
        "name": "eye-slash-filled",
        "font_class": "eye-slash-filled",
        "unicode": "e6b4",
        "unicode_decimal": 59060
      },
      {
        "icon_id": "24923305",
        "name": "info-filled",
        "font_class": "info-filled",
        "unicode": "e649",
        "unicode_decimal": 58953
      },
      {
        "icon_id": "24923299",
        "name": "reload-01",
        "font_class": "reload",
        "unicode": "e6b2",
        "unicode_decimal": 59058
      },
      {
        "icon_id": "24923195",
        "name": "mic_slash_fill",
        "font_class": "micoff-filled",
        "unicode": "e6b0",
        "unicode_decimal": 59056
      },
      {
        "icon_id": "24923165",
        "name": "map-pin-ellipse",
        "font_class": "map-pin-ellipse",
        "unicode": "e6ac",
        "unicode_decimal": 59052
      },
      {
        "icon_id": "24923166",
        "name": "map-pin",
        "font_class": "map-pin",
        "unicode": "e6ad",
        "unicode_decimal": 59053
      },
      {
        "icon_id": "24923167",
        "name": "location",
        "font_class": "location",
        "unicode": "e6ae",
        "unicode_decimal": 59054
      },
      {
        "icon_id": "24923064",
        "name": "starhalf",
        "font_class": "starhalf",
        "unicode": "e683",
        "unicode_decimal": 59011
      },
      {
        "icon_id": "24923065",
        "name": "star",
        "font_class": "star",
        "unicode": "e688",
        "unicode_decimal": 59016
      },
      {
        "icon_id": "24923066",
        "name": "star-filled",
        "font_class": "star-filled",
        "unicode": "e68f",
        "unicode_decimal": 59023
      },
      {
        "icon_id": "24899646",
        "name": "a-rilidaka",
        "font_class": "calendar",
        "unicode": "e6a0",
        "unicode_decimal": 59040
      },
      {
        "icon_id": "24899647",
        "name": "fire",
        "font_class": "fire",
        "unicode": "e6a1",
        "unicode_decimal": 59041
      },
      {
        "icon_id": "24899648",
        "name": "paihangbang",
        "font_class": "medal",
        "unicode": "e6a2",
        "unicode_decimal": 59042
      },
      {
        "icon_id": "24899649",
        "name": "font",
        "font_class": "font",
        "unicode": "e6a3",
        "unicode_decimal": 59043
      },
      {
        "icon_id": "24899650",
        "name": "gift",
        "font_class": "gift",
        "unicode": "e6a4",
        "unicode_decimal": 59044
      },
      {
        "icon_id": "24899651",
        "name": "link",
        "font_class": "link",
        "unicode": "e6a5",
        "unicode_decimal": 59045
      },
      {
        "icon_id": "24899652",
        "name": "notification",
        "font_class": "notification",
        "unicode": "e6a6",
        "unicode_decimal": 59046
      },
      {
        "icon_id": "24899653",
        "name": "staff",
        "font_class": "staff",
        "unicode": "e6a7",
        "unicode_decimal": 59047
      },
      {
        "icon_id": "24899654",
        "name": "VIP",
        "font_class": "vip",
        "unicode": "e6a8",
        "unicode_decimal": 59048
      },
      {
        "icon_id": "24899655",
        "name": "folder_add",
        "font_class": "folder-add",
        "unicode": "e6a9",
        "unicode_decimal": 59049
      },
      {
        "icon_id": "24899656",
        "name": "tune",
        "font_class": "tune",
        "unicode": "e6aa",
        "unicode_decimal": 59050
      },
      {
        "icon_id": "24899657",
        "name": "shimingrenzheng",
        "font_class": "auth",
        "unicode": "e6ab",
        "unicode_decimal": 59051
      },
      {
        "icon_id": "24899565",
        "name": "person",
        "font_class": "person",
        "unicode": "e699",
        "unicode_decimal": 59033
      },
      {
        "icon_id": "24899566",
        "name": "email-filled",
        "font_class": "email-filled",
        "unicode": "e69a",
        "unicode_decimal": 59034
      },
      {
        "icon_id": "24899567",
        "name": "phone-filled",
        "font_class": "phone-filled",
        "unicode": "e69b",
        "unicode_decimal": 59035
      },
      {
        "icon_id": "24899568",
        "name": "phone",
        "font_class": "phone",
        "unicode": "e69c",
        "unicode_decimal": 59036
      },
      {
        "icon_id": "24899570",
        "name": "email",
        "font_class": "email",
        "unicode": "e69e",
        "unicode_decimal": 59038
      },
      {
        "icon_id": "24899571",
        "name": "personadd",
        "font_class": "personadd",
        "unicode": "e69f",
        "unicode_decimal": 59039
      },
      {
        "icon_id": "24899558",
        "name": "chatboxes-filled",
        "font_class": "chatboxes-filled",
        "unicode": "e692",
        "unicode_decimal": 59026
      },
      {
        "icon_id": "24899559",
        "name": "contact",
        "font_class": "contact",
        "unicode": "e693",
        "unicode_decimal": 59027
      },
      {
        "icon_id": "24899560",
        "name": "chatbubble-filled",
        "font_class": "chatbubble-filled",
        "unicode": "e694",
        "unicode_decimal": 59028
      },
      {
        "icon_id": "24899561",
        "name": "contact-filled",
        "font_class": "contact-filled",
        "unicode": "e695",
        "unicode_decimal": 59029
      },
      {
        "icon_id": "24899562",
        "name": "chatboxes",
        "font_class": "chatboxes",
        "unicode": "e696",
        "unicode_decimal": 59030
      },
      {
        "icon_id": "24899563",
        "name": "chatbubble",
        "font_class": "chatbubble",
        "unicode": "e697",
        "unicode_decimal": 59031
      },
      {
        "icon_id": "24881290",
        "name": "upload-filled",
        "font_class": "upload-filled",
        "unicode": "e68e",
        "unicode_decimal": 59022
      },
      {
        "icon_id": "24881292",
        "name": "upload",
        "font_class": "upload",
        "unicode": "e690",
        "unicode_decimal": 59024
      },
      {
        "icon_id": "24881293",
        "name": "weixin",
        "font_class": "weixin",
        "unicode": "e691",
        "unicode_decimal": 59025
      },
      {
        "icon_id": "24881274",
        "name": "compose",
        "font_class": "compose",
        "unicode": "e67f",
        "unicode_decimal": 59007
      },
      {
        "icon_id": "24881275",
        "name": "qq",
        "font_class": "qq",
        "unicode": "e680",
        "unicode_decimal": 59008
      },
      {
        "icon_id": "24881276",
        "name": "download-filled",
        "font_class": "download-filled",
        "unicode": "e681",
        "unicode_decimal": 59009
      },
      {
        "icon_id": "24881277",
        "name": "pengyouquan",
        "font_class": "pyq",
        "unicode": "e682",
        "unicode_decimal": 59010
      },
      {
        "icon_id": "24881279",
        "name": "sound",
        "font_class": "sound",
        "unicode": "e684",
        "unicode_decimal": 59012
      },
      {
        "icon_id": "24881280",
        "name": "trash-filled",
        "font_class": "trash-filled",
        "unicode": "e685",
        "unicode_decimal": 59013
      },
      {
        "icon_id": "24881281",
        "name": "sound-filled",
        "font_class": "sound-filled",
        "unicode": "e686",
        "unicode_decimal": 59014
      },
      {
        "icon_id": "24881282",
        "name": "trash",
        "font_class": "trash",
        "unicode": "e687",
        "unicode_decimal": 59015
      },
      {
        "icon_id": "24881284",
        "name": "videocam-filled",
        "font_class": "videocam-filled",
        "unicode": "e689",
        "unicode_decimal": 59017
      },
      {
        "icon_id": "24881285",
        "name": "spinner-cycle",
        "font_class": "spinner-cycle",
        "unicode": "e68a",
        "unicode_decimal": 59018
      },
      {
        "icon_id": "24881286",
        "name": "weibo",
        "font_class": "weibo",
        "unicode": "e68b",
        "unicode_decimal": 59019
      },
      {
        "icon_id": "24881288",
        "name": "videocam",
        "font_class": "videocam",
        "unicode": "e68c",
        "unicode_decimal": 59020
      },
      {
        "icon_id": "24881289",
        "name": "download",
        "font_class": "download",
        "unicode": "e68d",
        "unicode_decimal": 59021
      },
      {
        "icon_id": "24879601",
        "name": "help",
        "font_class": "help",
        "unicode": "e679",
        "unicode_decimal": 59001
      },
      {
        "icon_id": "24879602",
        "name": "navigate-filled",
        "font_class": "navigate-filled",
        "unicode": "e67a",
        "unicode_decimal": 59002
      },
      {
        "icon_id": "24879603",
        "name": "plusempty",
        "font_class": "plusempty",
        "unicode": "e67b",
        "unicode_decimal": 59003
      },
      {
        "icon_id": "24879604",
        "name": "smallcircle",
        "font_class": "smallcircle",
        "unicode": "e67c",
        "unicode_decimal": 59004
      },
      {
        "icon_id": "24879605",
        "name": "minus-filled",
        "font_class": "minus-filled",
        "unicode": "e67d",
        "unicode_decimal": 59005
      },
      {
        "icon_id": "24879606",
        "name": "micoff",
        "font_class": "micoff",
        "unicode": "e67e",
        "unicode_decimal": 59006
      },
      {
        "icon_id": "24879588",
        "name": "closeempty",
        "font_class": "closeempty",
        "unicode": "e66c",
        "unicode_decimal": 58988
      },
      {
        "icon_id": "24879589",
        "name": "clear",
        "font_class": "clear",
        "unicode": "e66d",
        "unicode_decimal": 58989
      },
      {
        "icon_id": "24879590",
        "name": "navigate",
        "font_class": "navigate",
        "unicode": "e66e",
        "unicode_decimal": 58990
      },
      {
        "icon_id": "24879591",
        "name": "minus",
        "font_class": "minus",
        "unicode": "e66f",
        "unicode_decimal": 58991
      },
      {
        "icon_id": "24879592",
        "name": "image",
        "font_class": "image",
        "unicode": "e670",
        "unicode_decimal": 58992
      },
      {
        "icon_id": "24879593",
        "name": "mic",
        "font_class": "mic",
        "unicode": "e671",
        "unicode_decimal": 58993
      },
      {
        "icon_id": "24879594",
        "name": "paperplane",
        "font_class": "paperplane",
        "unicode": "e672",
        "unicode_decimal": 58994
      },
      {
        "icon_id": "24879595",
        "name": "close",
        "font_class": "close",
        "unicode": "e673",
        "unicode_decimal": 58995
      },
      {
        "icon_id": "24879596",
        "name": "help-filled",
        "font_class": "help-filled",
        "unicode": "e674",
        "unicode_decimal": 58996
      },
      {
        "icon_id": "24879597",
        "name": "plus-filled",
        "font_class": "paperplane-filled",
        "unicode": "e675",
        "unicode_decimal": 58997
      },
      {
        "icon_id": "24879598",
        "name": "plus",
        "font_class": "plus",
        "unicode": "e676",
        "unicode_decimal": 58998
      },
      {
        "icon_id": "24879599",
        "name": "mic-filled",
        "font_class": "mic-filled",
        "unicode": "e677",
        "unicode_decimal": 58999
      },
      {
        "icon_id": "24879600",
        "name": "image-filled",
        "font_class": "image-filled",
        "unicode": "e678",
        "unicode_decimal": 59e3
      },
      {
        "icon_id": "24855900",
        "name": "locked-filled",
        "font_class": "locked-filled",
        "unicode": "e668",
        "unicode_decimal": 58984
      },
      {
        "icon_id": "24855901",
        "name": "info",
        "font_class": "info",
        "unicode": "e669",
        "unicode_decimal": 58985
      },
      {
        "icon_id": "24855903",
        "name": "locked",
        "font_class": "locked",
        "unicode": "e66b",
        "unicode_decimal": 58987
      },
      {
        "icon_id": "24855884",
        "name": "camera-filled",
        "font_class": "camera-filled",
        "unicode": "e658",
        "unicode_decimal": 58968
      },
      {
        "icon_id": "24855885",
        "name": "chat-filled",
        "font_class": "chat-filled",
        "unicode": "e659",
        "unicode_decimal": 58969
      },
      {
        "icon_id": "24855886",
        "name": "camera",
        "font_class": "camera",
        "unicode": "e65a",
        "unicode_decimal": 58970
      },
      {
        "icon_id": "24855887",
        "name": "circle",
        "font_class": "circle",
        "unicode": "e65b",
        "unicode_decimal": 58971
      },
      {
        "icon_id": "24855888",
        "name": "checkmarkempty",
        "font_class": "checkmarkempty",
        "unicode": "e65c",
        "unicode_decimal": 58972
      },
      {
        "icon_id": "24855889",
        "name": "chat",
        "font_class": "chat",
        "unicode": "e65d",
        "unicode_decimal": 58973
      },
      {
        "icon_id": "24855890",
        "name": "circle-filled",
        "font_class": "circle-filled",
        "unicode": "e65e",
        "unicode_decimal": 58974
      },
      {
        "icon_id": "24855891",
        "name": "flag",
        "font_class": "flag",
        "unicode": "e65f",
        "unicode_decimal": 58975
      },
      {
        "icon_id": "24855892",
        "name": "flag-filled",
        "font_class": "flag-filled",
        "unicode": "e660",
        "unicode_decimal": 58976
      },
      {
        "icon_id": "24855893",
        "name": "gear-filled",
        "font_class": "gear-filled",
        "unicode": "e661",
        "unicode_decimal": 58977
      },
      {
        "icon_id": "24855894",
        "name": "home",
        "font_class": "home",
        "unicode": "e662",
        "unicode_decimal": 58978
      },
      {
        "icon_id": "24855895",
        "name": "home-filled",
        "font_class": "home-filled",
        "unicode": "e663",
        "unicode_decimal": 58979
      },
      {
        "icon_id": "24855896",
        "name": "gear",
        "font_class": "gear",
        "unicode": "e664",
        "unicode_decimal": 58980
      },
      {
        "icon_id": "24855897",
        "name": "smallcircle-filled",
        "font_class": "smallcircle-filled",
        "unicode": "e665",
        "unicode_decimal": 58981
      },
      {
        "icon_id": "24855898",
        "name": "map-filled",
        "font_class": "map-filled",
        "unicode": "e666",
        "unicode_decimal": 58982
      },
      {
        "icon_id": "24855899",
        "name": "map",
        "font_class": "map",
        "unicode": "e667",
        "unicode_decimal": 58983
      },
      {
        "icon_id": "24855825",
        "name": "refresh-filled",
        "font_class": "refresh-filled",
        "unicode": "e656",
        "unicode_decimal": 58966
      },
      {
        "icon_id": "24855826",
        "name": "refresh",
        "font_class": "refresh",
        "unicode": "e657",
        "unicode_decimal": 58967
      },
      {
        "icon_id": "24855808",
        "name": "cloud-upload",
        "font_class": "cloud-upload",
        "unicode": "e645",
        "unicode_decimal": 58949
      },
      {
        "icon_id": "24855809",
        "name": "cloud-download-filled",
        "font_class": "cloud-download-filled",
        "unicode": "e646",
        "unicode_decimal": 58950
      },
      {
        "icon_id": "24855810",
        "name": "cloud-download",
        "font_class": "cloud-download",
        "unicode": "e647",
        "unicode_decimal": 58951
      },
      {
        "icon_id": "24855811",
        "name": "cloud-upload-filled",
        "font_class": "cloud-upload-filled",
        "unicode": "e648",
        "unicode_decimal": 58952
      },
      {
        "icon_id": "24855813",
        "name": "redo",
        "font_class": "redo",
        "unicode": "e64a",
        "unicode_decimal": 58954
      },
      {
        "icon_id": "24855814",
        "name": "images-filled",
        "font_class": "images-filled",
        "unicode": "e64b",
        "unicode_decimal": 58955
      },
      {
        "icon_id": "24855815",
        "name": "undo-filled",
        "font_class": "undo-filled",
        "unicode": "e64c",
        "unicode_decimal": 58956
      },
      {
        "icon_id": "24855816",
        "name": "more",
        "font_class": "more",
        "unicode": "e64d",
        "unicode_decimal": 58957
      },
      {
        "icon_id": "24855817",
        "name": "more-filled",
        "font_class": "more-filled",
        "unicode": "e64e",
        "unicode_decimal": 58958
      },
      {
        "icon_id": "24855818",
        "name": "undo",
        "font_class": "undo",
        "unicode": "e64f",
        "unicode_decimal": 58959
      },
      {
        "icon_id": "24855819",
        "name": "images",
        "font_class": "images",
        "unicode": "e650",
        "unicode_decimal": 58960
      },
      {
        "icon_id": "24855821",
        "name": "paperclip",
        "font_class": "paperclip",
        "unicode": "e652",
        "unicode_decimal": 58962
      },
      {
        "icon_id": "24855822",
        "name": "settings",
        "font_class": "settings",
        "unicode": "e653",
        "unicode_decimal": 58963
      },
      {
        "icon_id": "24855823",
        "name": "search",
        "font_class": "search",
        "unicode": "e654",
        "unicode_decimal": 58964
      },
      {
        "icon_id": "24855824",
        "name": "redo-filled",
        "font_class": "redo-filled",
        "unicode": "e655",
        "unicode_decimal": 58965
      },
      {
        "icon_id": "24841702",
        "name": "list",
        "font_class": "list",
        "unicode": "e644",
        "unicode_decimal": 58948
      },
      {
        "icon_id": "24841489",
        "name": "mail-open-filled",
        "font_class": "mail-open-filled",
        "unicode": "e63a",
        "unicode_decimal": 58938
      },
      {
        "icon_id": "24841491",
        "name": "hand-thumbsdown-filled",
        "font_class": "hand-down-filled",
        "unicode": "e63c",
        "unicode_decimal": 58940
      },
      {
        "icon_id": "24841492",
        "name": "hand-thumbsdown",
        "font_class": "hand-down",
        "unicode": "e63d",
        "unicode_decimal": 58941
      },
      {
        "icon_id": "24841493",
        "name": "hand-thumbsup-filled",
        "font_class": "hand-up-filled",
        "unicode": "e63e",
        "unicode_decimal": 58942
      },
      {
        "icon_id": "24841494",
        "name": "hand-thumbsup",
        "font_class": "hand-up",
        "unicode": "e63f",
        "unicode_decimal": 58943
      },
      {
        "icon_id": "24841496",
        "name": "heart-filled",
        "font_class": "heart-filled",
        "unicode": "e641",
        "unicode_decimal": 58945
      },
      {
        "icon_id": "24841498",
        "name": "mail-open",
        "font_class": "mail-open",
        "unicode": "e643",
        "unicode_decimal": 58947
      },
      {
        "icon_id": "24841488",
        "name": "heart",
        "font_class": "heart",
        "unicode": "e639",
        "unicode_decimal": 58937
      },
      {
        "icon_id": "24839963",
        "name": "loop",
        "font_class": "loop",
        "unicode": "e633",
        "unicode_decimal": 58931
      },
      {
        "icon_id": "24839866",
        "name": "pulldown",
        "font_class": "pulldown",
        "unicode": "e632",
        "unicode_decimal": 58930
      },
      {
        "icon_id": "24813798",
        "name": "scan",
        "font_class": "scan",
        "unicode": "e62a",
        "unicode_decimal": 58922
      },
      {
        "icon_id": "24813786",
        "name": "bars",
        "font_class": "bars",
        "unicode": "e627",
        "unicode_decimal": 58919
      },
      {
        "icon_id": "24813788",
        "name": "cart-filled",
        "font_class": "cart-filled",
        "unicode": "e629",
        "unicode_decimal": 58921
      },
      {
        "icon_id": "24813790",
        "name": "checkbox",
        "font_class": "checkbox",
        "unicode": "e62b",
        "unicode_decimal": 58923
      },
      {
        "icon_id": "24813791",
        "name": "checkbox-filled",
        "font_class": "checkbox-filled",
        "unicode": "e62c",
        "unicode_decimal": 58924
      },
      {
        "icon_id": "24813794",
        "name": "shop",
        "font_class": "shop",
        "unicode": "e62f",
        "unicode_decimal": 58927
      },
      {
        "icon_id": "24813795",
        "name": "headphones",
        "font_class": "headphones",
        "unicode": "e630",
        "unicode_decimal": 58928
      },
      {
        "icon_id": "24813796",
        "name": "cart",
        "font_class": "cart",
        "unicode": "e631",
        "unicode_decimal": 58929
      }
    ]
  };
  const _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$T = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: icons.glyphs
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v) => v.font_class === this.type);
        if (code2) {
          return unescape(`%u${code2.unicode}`);
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "text",
      {
        style: vue.normalizeStyle({ color: $props.color, "font-size": $options.iconSize }),
        class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
        onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
      },
      null,
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$5 = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$S], ["__scopeId", "data-v-d31e1c47"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return typeof component === "string" ? easycom : component;
  }
  const _sfc_main$S = {
    name: "nav-bar",
    props: {
      back: {
        type: Boolean,
        default: false
      },
      title: {
        type: Boolean,
        default: true
      },
      search: {
        type: Boolean,
        default: false
      },
      add: {
        type: Boolean,
        default: false
      },
      more: {
        type: Boolean,
        default: false
      },
      iconFontSize: {
        type: Number,
        default: 24
      }
    },
    data() {
      return {};
    },
    computed: {
      height() {
      }
    },
    methods: {
      handleBackClick() {
        uni.navigateBack({
          delta: 1
        });
      }
    }
  };
  function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "im-nav-bar" }, [
      vue.createElementVNode("view", { style: { "height": "var(--status-bar-height)" } }),
      vue.createElementVNode("view", { class: "im-nav-bar-content" }, [
        $props.back ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "back",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.handleBackClick && $options.handleBackClick(...args))
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "back",
            size: $props.iconFontSize
          }, null, 8, ["size"])
        ])) : vue.createCommentVNode("v-if", true),
        $props.title ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "title"
        }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode("view", { class: "btn" }, [
          $props.search ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 0,
            class: "btn-item",
            type: "search",
            size: $props.iconFontSize,
            onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("search"))
          }, null, 8, ["size"])) : vue.createCommentVNode("v-if", true),
          $props.add ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 1,
            class: "btn-item",
            type: "plusempty",
            size: $props.iconFontSize,
            onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("add"))
          }, null, 8, ["size"])) : vue.createCommentVNode("v-if", true),
          $props.more ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 2,
            class: "btn-item",
            type: "more-filled",
            size: $props.iconFontSize,
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.$emit("more"))
          }, null, 8, ["size"])) : vue.createCommentVNode("v-if", true)
        ])
      ])
    ]);
  }
  const __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$R], ["__scopeId", "data-v-e9345f2e"], ["__file", "C:/Java/box-im/im-uniapp/components/nav-bar/nav-bar.vue"]]);
  const _sfc_main$R = {
    data() {
      return {};
    },
    props: {
      size: {
        type: Number,
        default: 100
      },
      mask: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      icontStyle() {
        return `font-size:${this.size}rpx`;
      },
      loadingStyle() {
        return this.mask ? "background: rgba(0, 0, 0, 0.3);" : "";
      }
    }
  };
  function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "loading-box",
        style: vue.normalizeStyle($options.loadingStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: "rotate iconfont icon-loading",
            style: vue.normalizeStyle($options.icontStyle)
          },
          null,
          4
          /* STYLE */
        ),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_2$6 = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$Q], ["__scopeId", "data-v-d980cb9a"], ["__file", "C:/Java/box-im/im-uniapp/components/loading/loading.vue"]]);
  const isObject$1 = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = Array.isArray(values) ? "list" : isObject$1(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    let locales = [LOCALE_EN, LOCALE_FR, LOCALE_ES];
    if (messages2 && Object.keys(messages2).length > 0) {
      locales = Object.keys(messages2);
    }
    const lang = startsWith(locale, locales);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater: formater2 }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater2 || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      const options = [
        messages2,
        locale
      ];
      locale = options[0];
      messages2 = options[1];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  const en$1 = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  const zhHans$1 = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "请输入搜索内容"
  };
  const zhHant$1 = {
    "uni-search-bar.cancel": "取消",
    "uni-search-bar.placeholder": "請輸入搜索內容"
  };
  const messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  const {
    t: t$1
  } = initVueI18n(messages$1);
  const _sfc_main$Q = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t$1("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t$1("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode(
        "view",
        {
          style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
          class: "uni-searchbar__box",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
        },
        [
          vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
            vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "18",
                type: "search"
              })
            ], true)
          ]),
          $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
            key: 0,
            focus: $data.showSync,
            disabled: $props.readonly,
            placeholder: $options.placeholderText,
            maxlength: $props.maxlength,
            class: "uni-searchbar__box-search-input",
            "confirm-type": "search",
            type: "text",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
            onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
            onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
          }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
            [vue.vModelText, $data.searchVal]
          ]) : (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 1,
              class: "uni-searchbar__text-placeholder"
            },
            vue.toDisplayString($props.placeholder),
            1
            /* TEXT */
          )),
          $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 2,
            class: "uni-searchbar__box-icon-clear",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
          }, [
            vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
              vue.createVNode(_component_uni_icons, {
                color: "#c0c4cc",
                size: "20",
                type: "clear"
              })
            ], true)
          ])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
          class: "uni-searchbar__cancel"
        },
        vue.toDisplayString($options.cancelTextI18n),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$5 = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$P], ["__scopeId", "data-v-f07ef577"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  const _sfc_main$P = {
    name: "head-image",
    data() {
      return {
        colors: [
          "#5daa31",
          "#c7515a",
          "#e03697",
          "#85029b",
          "#c9b455",
          "#326eb6"
        ]
      };
    },
    props: {
      id: {
        type: Number
      },
      size: {
        type: [Number, String],
        default: "default"
      },
      url: {
        type: String
      },
      name: {
        type: String,
        default: null
      },
      online: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      showUserInfo(e) {
        if (this.id && this.id > 0) {
          uni.navigateTo({
            url: "/pages/common/user-info?id=" + this.id
          });
        }
      }
    },
    computed: {
      _size() {
        if (typeof this.size === "number") {
          return this.size;
        } else if (typeof this.size === "string") {
          return {
            "default": 96,
            "small": 84,
            "smaller": 72,
            "mini": 60,
            "minier": 48,
            "lage": 108,
            "lager": 120
          }[this.size];
        }
      },
      avatarImageStyle() {
        return `width:${this._size}rpx;
					height:${this._size}rpx;`;
      },
      avatarTextStyle() {
        return `width: ${this._size}rpx;
					height:${this._size}rpx;
					background-color:${this.name ? this.textColor : "#fff"};
					font-size:${this._size * 0.5}rpx;
					`;
      },
      textColor() {
        let hash = 0;
        for (var i = 0; i < this.name.length; i++) {
          hash += this.name.charCodeAt(i);
        }
        return this.colors[hash % this.colors.length];
      }
    }
  };
  function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
    var _a;
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "head-image",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.showUserInfo($event)),
      title: $props.name
    }, [
      $props.url ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        class: "avatar-image",
        src: $props.url,
        style: vue.normalizeStyle($options.avatarImageStyle),
        "lazy-load": "true",
        mode: "aspectFill"
      }, null, 12, ["src"])) : vue.createCommentVNode("v-if", true),
      !$props.url ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "avatar-text",
          style: vue.normalizeStyle($options.avatarTextStyle)
        },
        vue.toDisplayString((_a = $props.name) == null ? void 0 : _a.substring(0, 1).toUpperCase()),
        5
        /* TEXT, STYLE */
      )) : vue.createCommentVNode("v-if", true),
      $props.online ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "online",
        title: "用户当前在线"
      })) : vue.createCommentVNode("v-if", true)
    ], 8, ["title"]);
  }
  const __easycom_2$5 = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$O], ["__scopeId", "data-v-aff6adc6"], ["__file", "C:/Java/box-im/im-uniapp/components/head-image/head-image.vue"]]);
  const _sfc_main$O = {
    name: "UniTag",
    emits: ["click"],
    props: {
      type: {
        // 标签类型default、primary、success、warning、error、royal
        type: String,
        default: "default"
      },
      size: {
        // 标签大小 normal, small
        type: String,
        default: "normal"
      },
      // 标签内容
      text: {
        type: String,
        default: ""
      },
      disabled: {
        // 是否为禁用状态
        type: [Boolean, String],
        default: false
      },
      inverted: {
        // 是否为空心
        type: [Boolean, String],
        default: false
      },
      circle: {
        // 是否为圆角样式
        type: [Boolean, String],
        default: false
      },
      mark: {
        // 是否为标记样式
        type: [Boolean, String],
        default: false
      },
      customStyle: {
        type: String,
        default: ""
      }
    },
    computed: {
      classes() {
        const {
          type,
          disabled,
          inverted,
          circle,
          mark,
          size,
          isTrue
        } = this;
        const classArr = [
          "uni-tag--" + type,
          "uni-tag--" + size,
          isTrue(disabled) ? "uni-tag--disabled" : "",
          isTrue(inverted) ? "uni-tag--" + type + "--inverted" : "",
          isTrue(circle) ? "uni-tag--circle" : "",
          isTrue(mark) ? "uni-tag--mark" : "",
          // type === 'default' ? 'uni-tag--default' : 'uni-tag-text',
          isTrue(inverted) ? "uni-tag--inverted uni-tag-text--" + type : "",
          size === "small" ? "uni-tag-text--small" : ""
        ];
        return classArr.join(" ");
      }
    },
    methods: {
      isTrue(value) {
        return value === true || value === "true";
      },
      onClick() {
        if (this.isTrue(this.disabled))
          return;
        this.$emit("click");
      }
    }
  };
  function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.text ? (vue.openBlock(), vue.createElementBlock(
      "text",
      {
        key: 0,
        class: vue.normalizeClass(["uni-tag", $options.classes]),
        style: vue.normalizeStyle($props.customStyle),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
      },
      vue.toDisplayString($props.text),
      7
      /* TEXT, CLASS, STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_3$6 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$N], ["__scopeId", "data-v-1f94d070"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-tag/components/uni-tag/uni-tag.vue"]]);
  const _sfc_main$N = {
    name: "UniBadge",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "error"
      },
      inverted: {
        type: Boolean,
        default: false
      },
      isDot: {
        type: Boolean,
        default: false
      },
      maxNum: {
        type: Number,
        default: 99
      },
      absolute: {
        type: String,
        default: ""
      },
      offset: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      text: {
        type: [String, Number],
        default: ""
      },
      size: {
        type: String,
        default: "small"
      },
      customStyle: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    computed: {
      width() {
        return String(this.text).length * 8 + 12;
      },
      classNames() {
        const {
          inverted,
          type,
          size,
          absolute
        } = this;
        return [
          inverted ? "uni-badge--" + type + "-inverted" : "",
          "uni-badge--" + type,
          "uni-badge--" + size,
          absolute ? "uni-badge--absolute" : ""
        ].join(" ");
      },
      positionStyle() {
        if (!this.absolute)
          return {};
        let w = this.width / 2, h = 10;
        if (this.isDot) {
          w = 5;
          h = 5;
        }
        const x = `${-w + this.offset[0]}px`;
        const y = `${-h + this.offset[1]}px`;
        const whiteList = {
          rightTop: {
            right: x,
            top: y
          },
          rightBottom: {
            right: x,
            bottom: y
          },
          leftBottom: {
            left: x,
            bottom: y
          },
          leftTop: {
            left: x,
            top: y
          }
        };
        const match = whiteList[this.absolute];
        return match ? match : whiteList["rightTop"];
      },
      dotStyle() {
        if (!this.isDot)
          return {};
        return {
          width: "10px",
          minWidth: "0",
          height: "10px",
          padding: "0",
          borderRadius: "10px"
        };
      },
      displayValue() {
        const {
          isDot,
          text,
          maxNum
        } = this;
        return isDot ? "" : Number(text) > maxNum ? `${maxNum}+` : text;
      }
    },
    methods: {
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-badge--x" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
      $props.text ? (vue.openBlock(), vue.createElementBlock(
        "text",
        {
          key: 0,
          class: vue.normalizeClass([$options.classNames, "uni-badge"]),
          style: vue.normalizeStyle([$options.positionStyle, $props.customStyle, $options.dotStyle]),
          onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick())
        },
        vue.toDisplayString($options.displayValue),
        7
        /* TEXT, CLASS, STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_2$4 = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$M], ["__scopeId", "data-v-c97cb896"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-badge/components/uni-badge/uni-badge.vue"]]);
  const _sfc_main$M = {
    name: "chatItem",
    data() {
      return {};
    },
    props: {
      chat: {
        type: Object
      },
      index: {
        type: Number
      },
      active: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      showChatBox() {
        if (!getApp().$vm.isInit || this.chatStore.isLoading()) {
          uni.showToast({
            title: "正在初始化页面,请稍后...",
            icon: "none"
          });
          return;
        }
        uni.navigateTo({
          url: "/pages/chat/chat-box?chatIdx=" + this.index
        });
      }
    },
    computed: {
      isShowSendName() {
        if (!this.chat.sendNickName) {
          return false;
        }
        let size = this.chat.messages.length;
        if (size == 0) {
          return false;
        }
        let lastMsg = this.chat.messages[size - 1];
        return this.$msgType.isNormal(lastMsg.type);
      },
      atText() {
        if (this.chat.atMe) {
          return "[有人@我]";
        } else if (this.chat.atAll) {
          return "[@全体成员]";
        }
        return "";
      }
    }
  };
  function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_uni_tag = resolveEasycom(vue.resolveDynamicComponent("uni-tag"), __easycom_3$6);
    const _component_uni_badge = resolveEasycom(vue.resolveDynamicComponent("uni-badge"), __easycom_2$4);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["chat-item", $props.active ? "active" : ""])
      },
      [
        vue.createCommentVNode("rich-text中的表情包会屏蔽事件，所以这里用一个遮罩层捕获点击事件 "),
        vue.createElementVNode("view", {
          class: "mask",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.showChatBox())
        }),
        vue.createElementVNode("view", { class: "left" }, [
          vue.createVNode(_component_head_image, {
            url: $props.chat.headImage,
            name: $props.chat.showName
          }, null, 8, ["url", "name"])
        ]),
        vue.createElementVNode("view", { class: "chat-right" }, [
          vue.createElementVNode("view", { class: "chat-name" }, [
            vue.createElementVNode("view", { class: "chat-name-text" }, [
              vue.createElementVNode(
                "view",
                null,
                vue.toDisplayString($props.chat.showName),
                1
                /* TEXT */
              ),
              $props.chat.type == "GROUP" ? (vue.openBlock(), vue.createBlock(_component_uni_tag, {
                key: 0,
                circle: "",
                text: "群",
                size: "small",
                type: "primary"
              })) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode(
              "view",
              { class: "chat-time" },
              vue.toDisplayString(_ctx.$date.toTimeText($props.chat.lastSendTime, true)),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "chat-content" }, [
            vue.createElementVNode(
              "view",
              { class: "chat-at-text" },
              vue.toDisplayString($options.atText),
              1
              /* TEXT */
            ),
            $options.isShowSendName ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: "chat-send-name"
              },
              vue.toDisplayString($props.chat.sendNickName + ": "),
              1
              /* TEXT */
            )) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("rich-text", {
              class: "chat-content-text",
              nodes: _ctx.$emo.transform($props.chat.lastContent, "emoji-small")
            }, null, 8, ["nodes"]),
            $props.chat.unreadCount > 0 ? (vue.openBlock(), vue.createBlock(_component_uni_badge, {
              key: 1,
              "max-num": 99,
              text: $props.chat.unreadCount
            }, null, 8, ["text"])) : vue.createCommentVNode("v-if", true)
          ])
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_3$5 = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$L], ["__scopeId", "data-v-4025332e"], ["__file", "C:/Java/box-im/im-uniapp/components/chat-item/chat-item.vue"]]);
  const _sfc_main$L = {
    name: "long-press-menu",
    data() {
      return {
        isShowMenu: false,
        isTouchMove: false,
        style: ""
      };
    },
    props: {
      items: {
        type: Array
      }
    },
    methods: {
      onLongPress(e) {
        if (this.isTouchMove) {
          return;
        }
        uni.getSystemInfo({
          success: (res) => {
            let touches = e.touches[0];
            let style = "";
            if (touches.clientY > res.windowHeight / 2) {
              style = `bottom:${res.windowHeight - touches.clientY}px;`;
            } else {
              style = `top:${touches.clientY}px;`;
            }
            if (touches.clientX > res.windowWidth / 2) {
              style += `right:${res.windowWidth - touches.clientX}px;`;
            } else {
              style += `left:${touches.clientX}px;`;
            }
            this.menuStyle = style;
            this.$nextTick(() => {
              this.isShowMenu = true;
            });
          }
        });
      },
      onTouchMove() {
        this.onClose();
        this.isTouchMove = true;
      },
      onTouchEnd() {
        this.isTouchMove = false;
      },
      onSelectMenu(item) {
        this.$emit("select", item);
        this.isShowMenu = false;
      },
      onClose() {
        this.isShowMenu = false;
      },
      itemStyle(item) {
        if (item.color) {
          return `color:${item.color};`;
        }
        return `color:#000;`;
      }
    }
  };
  function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode(
        "view",
        {
          onLongpress: _cache[0] || (_cache[0] = vue.withModifiers(($event) => $options.onLongPress($event), ["stop"])),
          onTouchmove: _cache[1] || (_cache[1] = (...args) => $options.onTouchMove && $options.onTouchMove(...args)),
          onTouchend: _cache[2] || (_cache[2] = (...args) => $options.onTouchEnd && $options.onTouchEnd(...args))
        },
        [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ],
        32
        /* NEED_HYDRATION */
      ),
      $data.isShowMenu ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "menu-mask",
          onTouchstart: _cache[3] || (_cache[3] = ($event) => $options.onClose()),
          onContextmenu: _cache[4] || (_cache[4] = vue.withModifiers(() => {
          }, ["prevent"]))
        },
        null,
        32
        /* NEED_HYDRATION */
      )) : vue.createCommentVNode("v-if", true),
      $data.isShowMenu ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "menu",
          style: vue.normalizeStyle(_ctx.menuStyle)
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($props.items, (item) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "menu-item",
                key: item.key,
                onClick: vue.withModifiers(($event) => $options.onSelectMenu(item), ["prevent"])
              }, [
                vue.createElementVNode(
                  "text",
                  {
                    style: vue.normalizeStyle($options.itemStyle(item))
                  },
                  vue.toDisplayString(item.name),
                  5
                  /* TEXT, STYLE */
                )
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_1$4 = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$K], ["__scopeId", "data-v-f8cd5c6f"], ["__file", "C:/Java/box-im/im-uniapp/components/long-press-menu/long-press-menu.vue"]]);
  const _sfc_main$K = {
    data() {
      return {
        showSearch: false,
        searchText: "",
        menu: {
          show: false,
          style: "",
          chatIdx: -1,
          isTouchMove: false,
          items: [
            {
              key: "DELETE",
              name: "删除该聊天",
              icon: "trash",
              color: "#e64e4e"
            },
            {
              key: "TOP",
              name: "置顶该聊天",
              icon: "arrow-up"
            }
          ]
        }
      };
    },
    methods: {
      onSelectMenu(item, chatIdx) {
        switch (item.key) {
          case "DELETE":
            this.removeChat(chatIdx);
            break;
          case "TOP":
            this.moveToTop(chatIdx);
            break;
        }
        this.menu.show = false;
      },
      removeChat(chatIdx) {
        this.chatStore.removeChat(chatIdx);
      },
      moveToTop(chatIdx) {
        this.chatStore.moveTop(chatIdx);
      },
      isShowChat(chat) {
        if (chat.delete) {
          return false;
        }
        return !this.searchText || chat.showName.includes(this.searchText);
      },
      onSearch() {
        this.showSearch = !this.showSearch;
        this.searchText = "";
      },
      refreshUnreadBadge() {
        if (this.unreadCount > 0) {
          uni.setTabBarBadge({
            index: 0,
            text: this.unreadCount + ""
          });
        } else {
          uni.removeTabBarBadge({
            index: 0,
            complete: () => {
            }
          });
        }
      }
    },
    computed: {
      unreadCount() {
        let count = 0;
        this.chatStore.chats.forEach((chat) => {
          if (!chat.delete) {
            count += chat.unreadCount;
          }
        });
        return count;
      },
      loading() {
        return this.chatStore.isLoading();
      },
      initializing() {
        return !getApp().$vm.isInit;
      }
    },
    watch: {
      unreadCount(newCount, oldCount) {
        this.refreshUnreadBadge();
      }
    },
    onShow() {
      this.refreshUnreadBadge();
    }
  };
  function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_loading = resolveEasycom(vue.resolveDynamicComponent("loading"), __easycom_2$6);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1$5);
    const _component_chat_item = resolveEasycom(vue.resolveDynamicComponent("chat-item"), __easycom_3$5);
    const _component_long_press_menu = resolveEasycom(vue.resolveDynamicComponent("long-press-menu"), __easycom_1$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab-page" }, [
      vue.createVNode(_component_nav_bar, {
        search: "",
        onSearch: _cache[0] || (_cache[0] = ($event) => $options.onSearch())
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("消息")
        ]),
        _: 1
        /* STABLE */
      }),
      $options.loading ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "chat-loading"
      }, [
        vue.createVNode(_component_loading, {
          size: 50,
          mask: false
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", null, "消息接收中...")
          ]),
          _: 1
          /* STABLE */
        })
      ])) : vue.createCommentVNode("v-if", true),
      $options.initializing ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "chat-loading"
      }, [
        vue.createVNode(_component_loading, {
          size: 50,
          mask: false
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", null, "正在初始化...")
          ]),
          _: 1
          /* STABLE */
        })
      ])) : vue.createCommentVNode("v-if", true),
      $data.showSearch ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "nav-bar"
      }, [
        vue.createElementVNode("view", { class: "nav-search" }, [
          vue.createVNode(_component_uni_search_bar, {
            focus: "true",
            radius: "100",
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.searchText = $event),
            cancelButton: "none",
            placeholder: "搜索"
          }, null, 8, ["modelValue"])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      !$options.loading && _ctx.chatStore.chats.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 3,
        class: "chat-tip"
      }, " 温馨提示：您现在还没有任何聊天消息，快跟您的好友发起聊天吧~ ")) : (vue.openBlock(), vue.createElementBlock("scroll-view", {
        key: 4,
        class: "scroll-bar",
        "scroll-with-animation": "true",
        "scroll-y": "true"
      }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList(_ctx.chatStore.chats, (chat, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", { key: index2 }, [
              $options.isShowChat(chat) ? (vue.openBlock(), vue.createBlock(_component_long_press_menu, {
                key: 0,
                items: $data.menu.items,
                onSelect: ($event) => $options.onSelectMenu($event, index2)
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_chat_item, {
                    chat,
                    index: index2,
                    active: $data.menu.chatIdx == index2
                  }, null, 8, ["chat", "index", "active"])
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["items", "onSelect"])) : vue.createCommentVNode("v-if", true)
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]))
    ]);
  }
  const PagesChatChat = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$J], ["__file", "C:/Java/box-im/im-uniapp/pages/chat/chat.vue"]]);
  function obj2strClass(obj) {
    let classess = "";
    for (let key in obj) {
      const val = obj[key];
      if (val) {
        classess += `${key} `;
      }
    }
    return classess;
  }
  function obj2strStyle(obj) {
    let style = "";
    for (let key in obj) {
      const val = obj[key];
      style += `${key}:${val};`;
    }
    return style;
  }
  const _sfc_main$J = {
    name: "uni-easyinput",
    emits: ["click", "iconClick", "update:modelValue", "input", "focus", "blur", "confirm", "clear", "eyes", "change", "keyboardheightchange"],
    model: {
      prop: "modelValue",
      event: "update:modelValue"
    },
    options: {
      virtualHost: true
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      },
      formItem: {
        from: "uniFormItem",
        default: null
      }
    },
    props: {
      name: String,
      value: [Number, String],
      modelValue: [Number, String],
      type: {
        type: String,
        default: "text"
      },
      clearable: {
        type: Boolean,
        default: true
      },
      autoHeight: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: " "
      },
      placeholderStyle: String,
      focus: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      maxlength: {
        type: [Number, String],
        default: 140
      },
      confirmType: {
        type: String,
        default: "done"
      },
      clearSize: {
        type: [Number, String],
        default: 24
      },
      inputBorder: {
        type: Boolean,
        default: true
      },
      prefixIcon: {
        type: String,
        default: ""
      },
      suffixIcon: {
        type: String,
        default: ""
      },
      trim: {
        type: [Boolean, String],
        default: false
      },
      cursorSpacing: {
        type: Number,
        default: 0
      },
      passwordIcon: {
        type: Boolean,
        default: true
      },
      primaryColor: {
        type: String,
        default: "#2979ff"
      },
      styles: {
        type: Object,
        default() {
          return {
            color: "#333",
            backgroundColor: "#fff",
            disableColor: "#F7F6F6",
            borderColor: "#e5e5e5"
          };
        }
      },
      errorMessage: {
        type: [String, Boolean],
        default: ""
      }
    },
    data() {
      return {
        focused: false,
        val: "",
        showMsg: "",
        border: false,
        isFirstBorder: false,
        showClearIcon: false,
        showPassword: false,
        focusShow: false,
        localMsg: "",
        isEnter: false
        // 用于判断当前是否是使用回车操作
      };
    },
    computed: {
      // 输入框内是否有值
      isVal() {
        const val = this.val;
        if (val || val === 0) {
          return true;
        }
        return false;
      },
      msg() {
        return this.localMsg || this.errorMessage;
      },
      // 因为uniapp的input组件的maxlength组件必须要数值，这里转为数值，用户可以传入字符串数值
      inputMaxlength() {
        return Number(this.maxlength);
      },
      // 处理外层样式的style
      boxStyle() {
        return `color:${this.inputBorder && this.msg ? "#e43d33" : this.styles.color};`;
      },
      // input 内容的类和样式处理
      inputContentClass() {
        return obj2strClass({
          "is-input-border": this.inputBorder,
          "is-input-error-border": this.inputBorder && this.msg,
          "is-textarea": this.type === "textarea",
          "is-disabled": this.disabled,
          "is-focused": this.focusShow
        });
      },
      inputContentStyle() {
        const focusColor = this.focusShow ? this.primaryColor : this.styles.borderColor;
        const borderColor = this.inputBorder && this.msg ? "#dd524d" : focusColor;
        return obj2strStyle({
          "border-color": borderColor || "#e5e5e5",
          "background-color": this.disabled ? this.styles.disableColor : this.styles.backgroundColor
        });
      },
      // input右侧样式
      inputStyle() {
        const paddingRight = this.type === "password" || this.clearable || this.prefixIcon ? "" : "10px";
        return obj2strStyle({
          "padding-right": paddingRight,
          "padding-left": this.prefixIcon ? "" : "10px"
        });
      }
    },
    watch: {
      value(newVal) {
        this.val = newVal;
      },
      modelValue(newVal) {
        this.val = newVal;
      },
      focus(newVal) {
        this.$nextTick(() => {
          this.focused = this.focus;
          this.focusShow = this.focus;
        });
      }
    },
    created() {
      this.init();
      if (this.form && this.formItem) {
        this.$watch("formItem.errMsg", (newVal) => {
          this.localMsg = newVal;
        });
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.focused = this.focus;
        this.focusShow = this.focus;
      });
    },
    methods: {
      /**
       * 初始化变量值
       */
      init() {
        if (this.value || this.value === 0) {
          this.val = this.value;
        } else if (this.modelValue || this.modelValue === 0 || this.modelValue === "") {
          this.val = this.modelValue;
        } else {
          this.val = null;
        }
      },
      /**
       * 点击图标时触发
       * @param {Object} type
       */
      onClickIcon(type) {
        this.$emit("iconClick", type);
      },
      /**
       * 显示隐藏内容，密码框时生效
       */
      onEyes() {
        this.showPassword = !this.showPassword;
        this.$emit("eyes", this.showPassword);
      },
      /**
       * 输入时触发
       * @param {Object} event
       */
      onInput(event) {
        let value = event.detail.value;
        if (this.trim) {
          if (typeof this.trim === "boolean" && this.trim) {
            value = this.trimStr(value);
          }
          if (typeof this.trim === "string") {
            value = this.trimStr(value, this.trim);
          }
        }
        if (this.errMsg)
          this.errMsg = "";
        this.val = value;
        this.$emit("input", value);
        this.$emit("update:modelValue", value);
      },
      /**
       * 外部调用方法
       * 获取焦点时触发
       * @param {Object} event
       */
      onFocus() {
        this.$nextTick(() => {
          this.focused = true;
        });
        this.$emit("focus", null);
      },
      _Focus(event) {
        this.focusShow = true;
        this.$emit("focus", event);
      },
      /**
       * 外部调用方法
       * 失去焦点时触发
       * @param {Object} event
       */
      onBlur() {
        this.focused = false;
        this.$emit("focus", null);
      },
      _Blur(event) {
        event.detail.value;
        this.focusShow = false;
        this.$emit("blur", event);
        if (this.isEnter === false) {
          this.$emit("change", this.val);
        }
        if (this.form && this.formItem) {
          const { validateTrigger } = this.form;
          if (validateTrigger === "blur") {
            this.formItem.onFieldChange();
          }
        }
      },
      /**
       * 按下键盘的发送键
       * @param {Object} e
       */
      onConfirm(e) {
        this.$emit("confirm", this.val);
        this.isEnter = true;
        this.$emit("change", this.val);
        this.$nextTick(() => {
          this.isEnter = false;
        });
      },
      /**
       * 清理内容
       * @param {Object} event
       */
      onClear(event) {
        this.val = "";
        this.$emit("input", "");
        this.$emit("update:modelValue", "");
        this.$emit("clear");
      },
      /**
       * 键盘高度发生变化的时候触发此事件
       * 兼容性：微信小程序2.7.0+、App 3.1.0+
       * @param {Object} event
       */
      onkeyboardheightchange(event) {
        this.$emit("keyboardheightchange", event);
      },
      /**
       * 去除空格
       */
      trimStr(str, pos = "both") {
        if (pos === "both") {
          return str.trim();
        } else if (pos === "left") {
          return str.trimLeft();
        } else if (pos === "right") {
          return str.trimRight();
        } else if (pos === "start") {
          return str.trimStart();
        } else if (pos === "end") {
          return str.trimEnd();
        } else if (pos === "all") {
          return str.replace(/\s+/g, "");
        } else if (pos === "none") {
          return str;
        }
        return str;
      }
    }
  };
  function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-easyinput", { "uni-easyinput-error": $options.msg }]),
        style: vue.normalizeStyle($options.boxStyle)
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["uni-easyinput__content", $options.inputContentClass]),
            style: vue.normalizeStyle($options.inputContentStyle)
          },
          [
            $props.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
              key: 0,
              class: "content-clear-icon",
              type: $props.prefixIcon,
              color: "#c0c4cc",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClickIcon("prefix")),
              size: "22"
            }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true),
            $props.type === "textarea" ? (vue.openBlock(), vue.createElementBlock("textarea", {
              key: 1,
              class: vue.normalizeClass(["uni-easyinput__content-textarea", { "input-padding": $props.inputBorder }]),
              name: $props.name,
              value: $data.val,
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              disabled: $props.disabled,
              "placeholder-class": "uni-easyinput__placeholder-class",
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              autoHeight: $props.autoHeight,
              "cursor-spacing": $props.cursorSpacing,
              onInput: _cache[1] || (_cache[1] = (...args) => $options.onInput && $options.onInput(...args)),
              onBlur: _cache[2] || (_cache[2] = (...args) => $options._Blur && $options._Blur(...args)),
              onFocus: _cache[3] || (_cache[3] = (...args) => $options._Focus && $options._Focus(...args)),
              onConfirm: _cache[4] || (_cache[4] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[5] || (_cache[5] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 42, ["name", "value", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "autoHeight", "cursor-spacing"])) : (vue.openBlock(), vue.createElementBlock("input", {
              key: 2,
              type: $props.type === "password" ? "text" : $props.type,
              class: "uni-easyinput__content-input",
              style: vue.normalizeStyle($options.inputStyle),
              name: $props.name,
              value: $data.val,
              password: !$data.showPassword && $props.type === "password",
              placeholder: $props.placeholder,
              placeholderStyle: $props.placeholderStyle,
              "placeholder-class": "uni-easyinput__placeholder-class",
              disabled: $props.disabled,
              maxlength: $options.inputMaxlength,
              focus: $data.focused,
              confirmType: $props.confirmType,
              "cursor-spacing": $props.cursorSpacing,
              onFocus: _cache[6] || (_cache[6] = (...args) => $options._Focus && $options._Focus(...args)),
              onBlur: _cache[7] || (_cache[7] = (...args) => $options._Blur && $options._Blur(...args)),
              onInput: _cache[8] || (_cache[8] = (...args) => $options.onInput && $options.onInput(...args)),
              onConfirm: _cache[9] || (_cache[9] = (...args) => $options.onConfirm && $options.onConfirm(...args)),
              onKeyboardheightchange: _cache[10] || (_cache[10] = (...args) => $options.onkeyboardheightchange && $options.onkeyboardheightchange(...args))
            }, null, 44, ["type", "name", "value", "password", "placeholder", "placeholderStyle", "disabled", "maxlength", "focus", "confirmType", "cursor-spacing"])),
            $props.type === "password" && $props.passwordIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 3 },
              [
                vue.createCommentVNode(" 开启密码时显示小眼睛 "),
                $options.isVal ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: $data.showPassword ? "eye-slash-filled" : "eye-filled",
                  size: 22,
                  color: $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onEyes
                }, null, 8, ["class", "type", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : $props.suffixIcon ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 4 },
              [
                $props.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: "content-clear-icon",
                  type: $props.suffixIcon,
                  color: "#c0c4cc",
                  onClick: _cache[11] || (_cache[11] = ($event) => $options.onClickIcon("suffix")),
                  size: "22"
                }, null, 8, ["type"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 5 },
              [
                $props.clearable && $options.isVal && !$props.disabled && $props.type !== "textarea" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
                  key: 0,
                  class: vue.normalizeClass(["content-clear-icon", { "is-textarea-icon": $props.type === "textarea" }]),
                  type: "clear",
                  size: $props.clearSize,
                  color: $options.msg ? "#dd524d" : $data.focusShow ? $props.primaryColor : "#c0c4cc",
                  onClick: $options.onClear
                }, null, 8, ["class", "size", "color", "onClick"])) : vue.createCommentVNode("v-if", true)
              ],
              64
              /* STABLE_FRAGMENT */
            )),
            vue.renderSlot(_ctx.$slots, "right", {}, void 0, true)
          ],
          6
          /* CLASS, STYLE */
        )
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_1$3 = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$I], ["__scopeId", "data-v-09fd5285"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.vue"]]);
  const _sfc_main$I = {
    name: "uniFormsItem",
    options: {
      virtualHost: true
    },
    provide() {
      return {
        uniFormItem: this
      };
    },
    inject: {
      form: {
        from: "uniForm",
        default: null
      }
    },
    props: {
      // 表单校验规则
      rules: {
        type: Array,
        default() {
          return null;
        }
      },
      // 表单域的属性名，在使用校验规则时必填
      name: {
        type: [String, Array],
        default: ""
      },
      required: {
        type: Boolean,
        default: false
      },
      label: {
        type: String,
        default: ""
      },
      // label的宽度 ，默认 80
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: ""
      },
      // 强制显示错误信息
      errorMessage: {
        type: [String, Boolean],
        default: ""
      },
      // 1.4.0 弃用，统一使用 form 的校验时机
      // validateTrigger: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 弃用，统一使用 form 的label 位置
      // labelPosition: {
      // 	type: String,
      // 	default: ''
      // },
      // 1.4.0 以下属性已经废弃，请使用  #label 插槽代替
      leftIcon: String,
      iconColor: {
        type: String,
        default: "#606266"
      }
    },
    data() {
      return {
        errMsg: "",
        userRules: null,
        localLabelAlign: "left",
        localLabelWidth: "65px",
        localLabelPos: "left",
        border: false,
        isFirstBorder: false
      };
    },
    computed: {
      // 处理错误信息
      msg() {
        return this.errorMessage || this.errMsg;
      }
    },
    watch: {
      // 规则发生变化通知子组件更新
      "form.formRules"(val) {
        this.init();
      },
      "form.labelWidth"(val) {
        this.localLabelWidth = this._labelWidthUnit(val);
      },
      "form.labelPosition"(val) {
        this.localLabelPos = this._labelPosition();
      },
      "form.labelAlign"(val) {
      }
    },
    created() {
      this.init(true);
      if (this.name && this.form) {
        this.$watch(
          () => {
            const val = this.form._getDataValue(this.name, this.form.localData);
            return val;
          },
          (value, oldVal) => {
            const isEqual2 = this.form._isEqual(value, oldVal);
            if (!isEqual2) {
              const val = this.itemSetValue(value);
              this.onFieldChange(val, false);
            }
          },
          {
            immediate: false
          }
        );
      }
    },
    unmounted() {
      this.__isUnmounted = true;
      this.unInit();
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules = null) {
        this.userRules = rules;
        this.init(false);
      },
      // 兼容老版本表单组件
      setValue() {
      },
      /**
       * 外部调用方法
       * 校验数据
       * @param {any} value 需要校验的数据
       * @param {boolean} 是否立即校验
       * @return {Array|null} 校验内容
       */
      async onFieldChange(value, formtrigger = true) {
        const {
          formData,
          localData,
          errShowType,
          validateCheck,
          validateTrigger,
          _isRequiredField,
          _realName
        } = this.form;
        const name = _realName(this.name);
        if (!value) {
          value = this.form.formData[name];
        }
        const ruleLen = this.itemRules.rules && this.itemRules.rules.length;
        if (!this.validator || !ruleLen || ruleLen === 0)
          return;
        const isRequiredField2 = _isRequiredField(this.itemRules.rules || []);
        let result = null;
        if (validateTrigger === "bind" || formtrigger) {
          result = await this.validator.validateUpdate(
            {
              [name]: value
            },
            formData
          );
          if (!isRequiredField2 && (value === void 0 || value === "")) {
            result = null;
          }
          if (result && result.errorMessage) {
            if (errShowType === "undertext") {
              this.errMsg = !result ? "" : result.errorMessage;
            }
            if (errShowType === "toast") {
              uni.showToast({
                title: result.errorMessage || "校验错误",
                icon: "none"
              });
            }
            if (errShowType === "modal") {
              uni.showModal({
                title: "提示",
                content: result.errorMessage || "校验错误"
              });
            }
          } else {
            this.errMsg = "";
          }
          validateCheck(result ? result : null);
        } else {
          this.errMsg = "";
        }
        return result ? result : null;
      },
      /**
       * 初始组件数据
       */
      init(type = false) {
        const {
          validator,
          formRules,
          childrens,
          formData,
          localData,
          _realName,
          labelWidth,
          _getDataValue,
          _setDataValue
        } = this.form || {};
        this.localLabelAlign = this._justifyContent();
        this.localLabelWidth = this._labelWidthUnit(labelWidth);
        this.localLabelPos = this._labelPosition();
        this.form && type && childrens.push(this);
        if (!validator || !formRules)
          return;
        if (!this.form.isFirstBorder) {
          this.form.isFirstBorder = true;
          this.isFirstBorder = true;
        }
        if (this.group) {
          if (!this.group.isFirstBorder) {
            this.group.isFirstBorder = true;
            this.isFirstBorder = true;
          }
        }
        this.border = this.form.border;
        const name = _realName(this.name);
        const itemRule = this.userRules || this.rules;
        if (typeof formRules === "object" && itemRule) {
          formRules[name] = {
            rules: itemRule
          };
          validator.updateSchema(formRules);
        }
        const itemRules = formRules[name] || {};
        this.itemRules = itemRules;
        this.validator = validator;
        this.itemSetValue(_getDataValue(this.name, localData));
      },
      unInit() {
        if (this.form) {
          const {
            childrens,
            formData,
            _realName
          } = this.form;
          childrens.forEach((item, index2) => {
            if (item === this) {
              this.form.childrens.splice(index2, 1);
              delete formData[_realName(item.name)];
            }
          });
        }
      },
      // 设置item 的值
      itemSetValue(value) {
        const name = this.form._realName(this.name);
        const rules = this.itemRules.rules || [];
        const val = this.form._getValue(name, value, rules);
        this.form._setDataValue(name, this.form.formData, val);
        return val;
      },
      /**
       * 移除该表单项的校验结果
       */
      clearValidate() {
        this.errMsg = "";
      },
      // 是否显示星号
      _isRequired() {
        return this.required;
      },
      // 处理对齐方式
      _justifyContent() {
        if (this.form) {
          const {
            labelAlign
          } = this.form;
          let labelAli = this.labelAlign ? this.labelAlign : labelAlign;
          if (labelAli === "left")
            return "flex-start";
          if (labelAli === "center")
            return "center";
          if (labelAli === "right")
            return "flex-end";
        }
        return "flex-start";
      },
      // 处理 label宽度单位 ,继承父元素的值
      _labelWidthUnit(labelWidth) {
        return this.num2px(this.labelWidth ? this.labelWidth : labelWidth || (this.label ? 65 : "auto"));
      },
      // 处理 label 位置
      _labelPosition() {
        if (this.form)
          return this.form.labelPosition || "left";
        return "left";
      },
      /**
       * 触发时机
       * @param {Object} rule 当前规则内时机
       * @param {Object} itemRlue 当前组件时机
       * @param {Object} parentRule 父组件时机
       */
      isTrigger(rule, itemRlue, parentRule) {
        if (rule === "submit" || !rule) {
          if (rule === void 0) {
            if (itemRlue !== "bind") {
              if (!itemRlue) {
                return parentRule === "" ? "bind" : "submit";
              }
              return "submit";
            }
            return "bind";
          }
          return "submit";
        }
        return "bind";
      },
      num2px(num) {
        if (typeof num === "number") {
          return `${num}px`;
        }
        return num;
      }
    }
  };
  function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-forms-item", ["is-direction-" + $data.localLabelPos, $data.border ? "uni-forms-item--border" : "", $data.border && $data.isFirstBorder ? "is-first-border" : ""]])
      },
      [
        vue.renderSlot(_ctx.$slots, "label", {}, () => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__label", { "no-label": !$props.label && !$props.required }]),
              style: vue.normalizeStyle({ width: $data.localLabelWidth, justifyContent: $data.localLabelAlign })
            },
            [
              $props.required ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 0,
                class: "is-required"
              }, "*")) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($props.label),
                1
                /* TEXT */
              )
            ],
            6
            /* CLASS, STYLE */
          )
        ], true),
        vue.createElementVNode("view", { class: "uni-forms-item__content" }, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["uni-forms-item__error", { "msg--active": $options.msg }])
            },
            [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($options.msg),
                1
                /* TEXT */
              )
            ],
            2
            /* CLASS */
          )
        ])
      ],
      2
      /* CLASS */
    );
  }
  const __easycom_2$3 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$H], ["__scopeId", "data-v-462874dd"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.vue"]]);
  var pattern = {
    email: /^\S+?@\S+?\.\S+?$/,
    idcard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    url: new RegExp(
      "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
      "i"
    )
  };
  const FORMAT_MAPPING = {
    "int": "integer",
    "bool": "boolean",
    "double": "number",
    "long": "number",
    "password": "string"
    // "fileurls": 'array'
  };
  function formatMessage(args, resources = "") {
    var defaultMessage = ["label"];
    defaultMessage.forEach((item) => {
      if (args[item] === void 0) {
        args[item] = "";
      }
    });
    let str = resources;
    for (let key in args) {
      let reg = new RegExp("{" + key + "}");
      str = str.replace(reg, args[key]);
    }
    return str;
  }
  function isEmptyValue(value, type) {
    if (value === void 0 || value === null) {
      return true;
    }
    if (typeof value === "string" && !value) {
      return true;
    }
    if (Array.isArray(value) && !value.length) {
      return true;
    }
    if (type === "object" && !Object.keys(value).length) {
      return true;
    }
    return false;
  }
  const types = {
    integer(value) {
      return types.number(value) && parseInt(value, 10) === value;
    },
    string(value) {
      return typeof value === "string";
    },
    number(value) {
      if (isNaN(value)) {
        return false;
      }
      return typeof value === "number";
    },
    "boolean": function(value) {
      return typeof value === "boolean";
    },
    "float": function(value) {
      return types.number(value) && !types.integer(value);
    },
    array(value) {
      return Array.isArray(value);
    },
    object(value) {
      return typeof value === "object" && !types.array(value);
    },
    date(value) {
      return value instanceof Date;
    },
    timestamp(value) {
      if (!this.integer(value) || Math.abs(value).toString().length > 16) {
        return false;
      }
      return true;
    },
    file(value) {
      return typeof value.url === "string";
    },
    email(value) {
      return typeof value === "string" && !!value.match(pattern.email) && value.length < 255;
    },
    url(value) {
      return typeof value === "string" && !!value.match(pattern.url);
    },
    pattern(reg, value) {
      try {
        return new RegExp(reg).test(value);
      } catch (e) {
        return false;
      }
    },
    method(value) {
      return typeof value === "function";
    },
    idcard(value) {
      return typeof value === "string" && !!value.match(pattern.idcard);
    },
    "url-https"(value) {
      return this.url(value) && value.startsWith("https://");
    },
    "url-scheme"(value) {
      return value.startsWith("://");
    },
    "url-web"(value) {
      return false;
    }
  };
  class RuleValidator {
    constructor(message) {
      this._message = message;
    }
    async validateRule(fieldKey, fieldValue, value, data, allData) {
      var result = null;
      let rules = fieldValue.rules;
      let hasRequired = rules.findIndex((item) => {
        return item.required;
      });
      if (hasRequired < 0) {
        if (value === null || value === void 0) {
          return result;
        }
        if (typeof value === "string" && !value.length) {
          return result;
        }
      }
      var message = this._message;
      if (rules === void 0) {
        return message["default"];
      }
      for (var i = 0; i < rules.length; i++) {
        let rule = rules[i];
        let vt = this._getValidateType(rule);
        Object.assign(rule, {
          label: fieldValue.label || `["${fieldKey}"]`
        });
        if (RuleValidatorHelper[vt]) {
          result = RuleValidatorHelper[vt](rule, value, message);
          if (result != null) {
            break;
          }
        }
        if (rule.validateExpr) {
          let now2 = Date.now();
          let resultExpr = rule.validateExpr(value, allData, now2);
          if (resultExpr === false) {
            result = this._getMessage(rule, rule.errorMessage || this._message["default"]);
            break;
          }
        }
        if (rule.validateFunction) {
          result = await this.validateFunction(rule, value, data, allData, vt);
          if (result !== null) {
            break;
          }
        }
      }
      if (result !== null) {
        result = message.TAG + result;
      }
      return result;
    }
    async validateFunction(rule, value, data, allData, vt) {
      let result = null;
      try {
        let callbackMessage = null;
        const res = await rule.validateFunction(rule, value, allData || data, (message) => {
          callbackMessage = message;
        });
        if (callbackMessage || typeof res === "string" && res || res === false) {
          result = this._getMessage(rule, callbackMessage || res, vt);
        }
      } catch (e) {
        result = this._getMessage(rule, e.message, vt);
      }
      return result;
    }
    _getMessage(rule, message, vt) {
      return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message["default"]);
    }
    _getValidateType(rule) {
      var result = "";
      if (rule.required) {
        result = "required";
      } else if (rule.format) {
        result = "format";
      } else if (rule.arrayType) {
        result = "arrayTypeFormat";
      } else if (rule.range) {
        result = "range";
      } else if (rule.maximum !== void 0 || rule.minimum !== void 0) {
        result = "rangeNumber";
      } else if (rule.maxLength !== void 0 || rule.minLength !== void 0) {
        result = "rangeLength";
      } else if (rule.pattern) {
        result = "pattern";
      } else if (rule.validateFunction) {
        result = "validateFunction";
      }
      return result;
    }
  }
  const RuleValidatorHelper = {
    required(rule, value, message) {
      if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
        return formatMessage(rule, rule.errorMessage || message.required);
      }
      return null;
    },
    range(rule, value, message) {
      const {
        range: range2,
        errorMessage
      } = rule;
      let list = new Array(range2.length);
      for (let i = 0; i < range2.length; i++) {
        const item = range2[i];
        if (types.object(item) && item.value !== void 0) {
          list[i] = item.value;
        } else {
          list[i] = item;
        }
      }
      let result = false;
      if (Array.isArray(value)) {
        result = new Set(value.concat(list)).size === list.length;
      } else {
        if (list.indexOf(value) > -1) {
          result = true;
        }
      }
      if (!result) {
        return formatMessage(rule, errorMessage || message["enum"]);
      }
      return null;
    },
    rangeNumber(rule, value, message) {
      if (!types.number(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let {
        minimum,
        maximum,
        exclusiveMinimum,
        exclusiveMaximum
      } = rule;
      let min = exclusiveMinimum ? value <= minimum : value < minimum;
      let max = exclusiveMaximum ? value >= maximum : value > maximum;
      if (minimum !== void 0 && min) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMinimum ? "exclusiveMinimum" : "minimum"]);
      } else if (maximum !== void 0 && max) {
        return formatMessage(rule, rule.errorMessage || message["number"][exclusiveMaximum ? "exclusiveMaximum" : "maximum"]);
      } else if (minimum !== void 0 && maximum !== void 0 && (min || max)) {
        return formatMessage(rule, rule.errorMessage || message["number"].range);
      }
      return null;
    },
    rangeLength(rule, value, message) {
      if (!types.string(value) && !types.array(value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      let min = rule.minLength;
      let max = rule.maxLength;
      let val = value.length;
      if (min !== void 0 && val < min) {
        return formatMessage(rule, rule.errorMessage || message["length"].minLength);
      } else if (max !== void 0 && val > max) {
        return formatMessage(rule, rule.errorMessage || message["length"].maxLength);
      } else if (min !== void 0 && max !== void 0 && (val < min || val > max)) {
        return formatMessage(rule, rule.errorMessage || message["length"].range);
      }
      return null;
    },
    pattern(rule, value, message) {
      if (!types["pattern"](rule.pattern, value)) {
        return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
      }
      return null;
    },
    format(rule, value, message) {
      var customTypes = Object.keys(types);
      var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format || rule.arrayType;
      if (customTypes.indexOf(format) > -1) {
        if (!types[format](value)) {
          return formatMessage(rule, rule.errorMessage || message.typeError);
        }
      }
      return null;
    },
    arrayTypeFormat(rule, value, message) {
      if (!Array.isArray(value)) {
        return formatMessage(rule, rule.errorMessage || message.typeError);
      }
      for (let i = 0; i < value.length; i++) {
        const element = value[i];
        let formatResult = this.format(rule, element, message);
        if (formatResult !== null) {
          return formatResult;
        }
      }
      return null;
    }
  };
  class SchemaValidator extends RuleValidator {
    constructor(schema, options) {
      super(SchemaValidator.message);
      this._schema = schema;
      this._options = options || null;
    }
    updateSchema(schema) {
      this._schema = schema;
    }
    async validate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async validateAll(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidate(data, true, allData);
      }
      return result;
    }
    async validateUpdate(data, allData) {
      let result = this._checkFieldInSchema(data);
      if (!result) {
        result = await this.invokeValidateUpdate(data, false, allData);
      }
      return result.length ? result[0] : null;
    }
    async invokeValidate(data, all, allData) {
      let result = [];
      let schema = this._schema;
      for (let key in schema) {
        let value = schema[key];
        let errorMessage = await this.validateRule(key, value, data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    async invokeValidateUpdate(data, all, allData) {
      let result = [];
      for (let key in data) {
        let errorMessage = await this.validateRule(key, this._schema[key], data[key], data, allData);
        if (errorMessage != null) {
          result.push({
            key,
            errorMessage
          });
          if (!all)
            break;
        }
      }
      return result;
    }
    _checkFieldInSchema(data) {
      var keys = Object.keys(data);
      var keys2 = Object.keys(this._schema);
      if (new Set(keys.concat(keys2)).size === keys2.length) {
        return "";
      }
      var noExistFields = keys.filter((key) => {
        return keys2.indexOf(key) < 0;
      });
      var errorMessage = formatMessage({
        field: JSON.stringify(noExistFields)
      }, SchemaValidator.message.TAG + SchemaValidator.message["defaultInvalid"]);
      return [{
        key: "invalid",
        errorMessage
      }];
    }
  }
  function Message() {
    return {
      TAG: "",
      default: "验证错误",
      defaultInvalid: "提交的字段{field}在数据库中并不存在",
      validateFunction: "验证无效",
      required: "{label}必填",
      "enum": "{label}超出范围",
      timestamp: "{label}格式无效",
      whitespace: "{label}不能为空",
      typeError: "{label}类型无效",
      date: {
        format: "{label}日期{value}格式无效",
        parse: "{label}日期无法解析,{value}无效",
        invalid: "{label}日期{value}无效"
      },
      length: {
        minLength: "{label}长度不能少于{minLength}",
        maxLength: "{label}长度不能超过{maxLength}",
        range: "{label}必须介于{minLength}和{maxLength}之间"
      },
      number: {
        minimum: "{label}不能小于{minimum}",
        maximum: "{label}不能大于{maximum}",
        exclusiveMinimum: "{label}不能小于等于{minimum}",
        exclusiveMaximum: "{label}不能大于等于{maximum}",
        range: "{label}必须介于{minimum}and{maximum}之间"
      },
      pattern: {
        mismatch: "{label}格式不匹配"
      }
    };
  }
  SchemaValidator.message = new Message();
  const deepCopy = (val) => {
    return JSON.parse(JSON.stringify(val));
  };
  const typeFilter = (format) => {
    return format === "int" || format === "double" || format === "number" || format === "timestamp";
  };
  const getValue = (key, value, rules) => {
    const isRuleNumType = rules.find((val) => val.format && typeFilter(val.format));
    const isRuleBoolType = rules.find((val) => val.format && val.format === "boolean" || val.format === "bool");
    if (!!isRuleNumType) {
      if (!value && value !== 0) {
        value = null;
      } else {
        value = isNumber(Number(value)) ? Number(value) : value;
      }
    }
    if (!!isRuleBoolType) {
      value = isBoolean(value) ? value : false;
    }
    return value;
  };
  const setDataValue = (field, formdata, value) => {
    formdata[field] = value;
    return value || "";
  };
  const getDataValue = (field, data) => {
    return objGet(data, field);
  };
  const realName = (name, data = {}) => {
    const base_name = _basePath(name);
    if (typeof base_name === "object" && Array.isArray(base_name) && base_name.length > 1) {
      const realname = base_name.reduce((a, b) => a += `#${b}`, "_formdata_");
      return realname;
    }
    return base_name[0] || name;
  };
  const isRealName = (name) => {
    const reg = /^_formdata_#*/;
    return reg.test(name);
  };
  const rawData = (object2 = {}, name) => {
    let newData = JSON.parse(JSON.stringify(object2));
    let formData = {};
    for (let i in newData) {
      let path = name2arr(i);
      objSet(formData, path, newData[i]);
    }
    return formData;
  };
  const name2arr = (name) => {
    let field = name.replace("_formdata_#", "");
    field = field.split("#").map((v) => isNumber(v) ? Number(v) : v);
    return field;
  };
  const objSet = (object2, path, value) => {
    if (typeof object2 !== "object")
      return object2;
    _basePath(path).reduce((o, k, i, _) => {
      if (i === _.length - 1) {
        o[k] = value;
        return null;
      } else if (k in o) {
        return o[k];
      } else {
        o[k] = /^[0-9]{1,}$/.test(_[i + 1]) ? [] : {};
        return o[k];
      }
    }, object2);
    return object2;
  };
  function _basePath(path) {
    if (Array.isArray(path))
      return path;
    return path.replace(/\[/g, ".").replace(/\]/g, "").split(".");
  }
  const objGet = (object2, path, defaultVal = "undefined") => {
    let newPath = _basePath(path);
    let val = newPath.reduce((o, k) => {
      return (o || {})[k];
    }, object2);
    return !val || val !== void 0 ? val : defaultVal;
  };
  const isNumber = (num) => {
    return !isNaN(Number(num));
  };
  const isBoolean = (bool) => {
    return typeof bool === "boolean";
  };
  const isRequiredField = (rules) => {
    let isNoField = false;
    for (let i = 0; i < rules.length; i++) {
      const ruleData = rules[i];
      if (ruleData.required) {
        isNoField = true;
        break;
      }
    }
    return isNoField;
  };
  const isEqual = (a, b) => {
    if (a === b) {
      return a !== 0 || 1 / a === 1 / b;
    }
    if (a == null || b == null) {
      return a === b;
    }
    var classNameA = toString.call(a), classNameB = toString.call(b);
    if (classNameA !== classNameB) {
      return false;
    }
    switch (classNameA) {
      case "[object RegExp]":
      case "[object String]":
        return "" + a === "" + b;
      case "[object Number]":
        if (+a !== +a) {
          return +b !== +b;
        }
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case "[object Date]":
      case "[object Boolean]":
        return +a === +b;
    }
    if (classNameA == "[object Object]") {
      var propsA = Object.getOwnPropertyNames(a), propsB = Object.getOwnPropertyNames(b);
      if (propsA.length != propsB.length) {
        return false;
      }
      for (var i = 0; i < propsA.length; i++) {
        var propName = propsA[i];
        if (a[propName] !== b[propName]) {
          return false;
        }
      }
      return true;
    }
    if (classNameA == "[object Array]") {
      if (a.toString() == b.toString()) {
        return true;
      }
      return false;
    }
  };
  const _sfc_main$H = {
    name: "uniForms",
    emits: ["validate", "submit"],
    options: {
      virtualHost: true
    },
    props: {
      // 即将弃用
      value: {
        type: Object,
        default() {
          return null;
        }
      },
      // vue3 替换 value 属性
      modelValue: {
        type: Object,
        default() {
          return null;
        }
      },
      // 1.4.0 开始将不支持 v-model ，且废弃 value 和 modelValue
      model: {
        type: Object,
        default() {
          return null;
        }
      },
      // 表单校验规则
      rules: {
        type: Object,
        default() {
          return {};
        }
      },
      //校验错误信息提示方式 默认 undertext 取值 [undertext|toast|modal]
      errShowType: {
        type: String,
        default: "undertext"
      },
      // 校验触发器方式 默认 bind 取值 [bind|submit]
      validateTrigger: {
        type: String,
        default: "submit"
      },
      // label 位置，默认 left 取值  top/left
      labelPosition: {
        type: String,
        default: "left"
      },
      // label 宽度
      labelWidth: {
        type: [String, Number],
        default: ""
      },
      // label 居中方式，默认 left 取值 left/center/right
      labelAlign: {
        type: String,
        default: "left"
      },
      border: {
        type: Boolean,
        default: false
      }
    },
    provide() {
      return {
        uniForm: this
      };
    },
    data() {
      return {
        // 表单本地值的记录，不应该与传如的值进行关联
        formData: {},
        formRules: {}
      };
    },
    computed: {
      // 计算数据源变化的
      localData() {
        const localVal = this.model || this.modelValue || this.value;
        if (localVal) {
          return deepCopy(localVal);
        }
        return {};
      }
    },
    watch: {
      // 监听数据变化 ,暂时不使用，需要单独赋值
      // localData: {},
      // 监听规则变化
      rules: {
        handler: function(val, oldVal) {
          this.setRules(val);
        },
        deep: true,
        immediate: true
      }
    },
    created() {
      let getbinddata = getApp().$vm.$.appContext.config.globalProperties.binddata;
      if (!getbinddata) {
        getApp().$vm.$.appContext.config.globalProperties.binddata = function(name, value, formName) {
          if (formName) {
            this.$refs[formName].setValue(name, value);
          } else {
            let formVm;
            for (let i in this.$refs) {
              const vm = this.$refs[i];
              if (vm && vm.$options && vm.$options.name === "uniForms") {
                formVm = vm;
                break;
              }
            }
            if (!formVm)
              return formatAppLog("error", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:182", "当前 uni-froms 组件缺少 ref 属性");
            formVm.setValue(name, value);
          }
        };
      }
      this.childrens = [];
      this.inputChildrens = [];
      this.setRules(this.rules);
    },
    methods: {
      /**
       * 外部调用方法
       * 设置规则 ，主要用于小程序自定义检验规则
       * @param {Array} rules 规则源数据
       */
      setRules(rules) {
        this.formRules = Object.assign({}, this.formRules, rules);
        this.validator = new SchemaValidator(rules);
      },
      /**
       * 外部调用方法
       * 设置数据，用于设置表单数据，公开给用户使用 ， 不支持在动态表单中使用
       * @param {Object} key
       * @param {Object} value
       */
      setValue(key, value) {
        let example = this.childrens.find((child) => child.name === key);
        if (!example)
          return null;
        this.formData[key] = getValue(key, value, this.formRules[key] && this.formRules[key].rules || []);
        return example.onFieldChange(this.formData[key]);
      },
      /**
       * 外部调用方法
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      validate(keepitem, callback) {
        return this.checkAll(this.formData, keepitem, callback);
      },
      /**
       * 外部调用方法
       * 部分表单校验
       * @param {Array|String} props 需要校验的字段
       * @param {Function} 回调函数
       */
      validateField(props2 = [], callback) {
        props2 = [].concat(props2);
        let invalidFields = {};
        this.childrens.forEach((item) => {
          const name = realName(item.name);
          if (props2.indexOf(name) !== -1) {
            invalidFields = Object.assign({}, invalidFields, {
              [name]: this.formData[name]
            });
          }
        });
        return this.checkAll(invalidFields, [], callback);
      },
      /**
       * 外部调用方法
       * 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果
       * @param {Array|String} props 需要移除校验的字段 ，不填为所有
       */
      clearValidate(props2 = []) {
        props2 = [].concat(props2);
        this.childrens.forEach((item) => {
          if (props2.length === 0) {
            item.errMsg = "";
          } else {
            const name = realName(item.name);
            if (props2.indexOf(name) !== -1) {
              item.errMsg = "";
            }
          }
        });
      },
      /**
       * 外部调用方法 ，即将废弃
       * 手动提交校验表单
       * 对整个表单进行校验的方法，参数为一个回调函数。
       * @param {Array} keepitem 保留不参与校验的字段
       * @param {type} callback 方法回调
       */
      submit(keepitem, callback, type) {
        for (let i in this.dataValue) {
          const itemData = this.childrens.find((v) => v.name === i);
          if (itemData) {
            if (this.formData[i] === void 0) {
              this.formData[i] = this._getValue(i, this.dataValue[i]);
            }
          }
        }
        if (!type) {
          formatAppLog("warn", "at uni_modules/uni-forms/components/uni-forms/uni-forms.vue:289", "submit 方法即将废弃，请使用validate方法代替！");
        }
        return this.checkAll(this.formData, keepitem, callback, "submit");
      },
      // 校验所有
      async checkAll(invalidFields, keepitem, callback, type) {
        if (!this.validator)
          return;
        let childrens = [];
        for (let i in invalidFields) {
          const item = this.childrens.find((v) => realName(v.name) === i);
          if (item) {
            childrens.push(item);
          }
        }
        if (!callback && typeof keepitem === "function") {
          callback = keepitem;
        }
        let promise2;
        if (!callback && typeof callback !== "function" && Promise) {
          promise2 = new Promise((resolve, reject) => {
            callback = function(valid, invalidFields2) {
              !valid ? resolve(invalidFields2) : reject(valid);
            };
          });
        }
        let results = [];
        let tempFormData = JSON.parse(JSON.stringify(invalidFields));
        for (let i in childrens) {
          const child = childrens[i];
          let name = realName(child.name);
          const result = await child.onFieldChange(tempFormData[name]);
          if (result) {
            results.push(result);
            if (this.errShowType === "toast" || this.errShowType === "modal")
              break;
          }
        }
        if (Array.isArray(results)) {
          if (results.length === 0)
            results = null;
        }
        if (Array.isArray(keepitem)) {
          keepitem.forEach((v) => {
            let vName = realName(v);
            let value = getDataValue(v, this.localData);
            if (value !== void 0) {
              tempFormData[vName] = value;
            }
          });
        }
        if (type === "submit") {
          this.$emit("submit", {
            detail: {
              value: tempFormData,
              errors: results
            }
          });
        } else {
          this.$emit("validate", results);
        }
        let resetFormData = {};
        resetFormData = rawData(tempFormData, this.name);
        callback && typeof callback === "function" && callback(results, resetFormData);
        if (promise2 && callback) {
          return promise2;
        } else {
          return null;
        }
      },
      /**
       * 返回validate事件
       * @param {Object} result
       */
      validateCheck(result) {
        this.$emit("validate", result);
      },
      _getValue: getValue,
      _isRequiredField: isRequiredField,
      _setDataValue: setDataValue,
      _getDataValue: getDataValue,
      _realName: realName,
      _isRealName: isRealName,
      _isEqual: isEqual
    }
  };
  function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-forms" }, [
      vue.createElementVNode("form", null, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ]);
  }
  const __easycom_3$4 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$G], ["__scopeId", "data-v-9a1e3c32"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-forms/components/uni-forms/uni-forms.vue"]]);
  const _sfc_main$G = {
    data() {
      return {
        loginForm: {
          terminal: 1,
          // APP终端
          userName: "",
          password: ""
        },
        rules: {
          userName: {
            rules: [{
              required: true,
              errorMessage: "请输入用户名"
            }]
          },
          password: {
            rules: [{
              required: true,
              errorMessage: "请输入密码"
            }]
          }
        }
      };
    },
    methods: {
      submit() {
        this.$http({
          url: "/login",
          data: this.loginForm,
          method: "POST"
        }).then((loginInfo) => {
          formatAppLog("log", "at pages/login/login.vue:51", "登录成功,自动跳转到聊天页面...");
          uni.setStorageSync("userName", this.loginForm.userName);
          uni.setStorageSync("password", this.loginForm.password);
          uni.setStorageSync("loginInfo", loginInfo);
          getApp().$vm.init();
          uni.switchTab({
            url: "/pages/chat/chat"
          });
        });
      }
    },
    onLoad() {
      this.loginForm.userName = uni.getStorageSync("userName");
      this.loginForm.password = uni.getStorageSync("password");
    }
  };
  function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_1$3);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_2$3);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "login" }, [
      vue.createElementVNode("view", { class: "title" }, "欢迎登录"),
      vue.createVNode(_component_uni_forms, {
        modelValue: $data.loginForm,
        rules: $data.rules,
        "validate-trigger": "bind"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, { name: "userName" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.loginForm.userName,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.loginForm.userName = $event),
                "prefix-icon": "person",
                placeholder: "用户名"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, { name: "password" }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.loginForm.password,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.loginForm.password = $event),
                "prefix-icon": "locked",
                placeholder: "密码"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("button", {
            class: "btn-submit",
            onClick: _cache[2] || (_cache[2] = (...args) => $options.submit && $options.submit(...args)),
            type: "primary"
          }, "登录")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "rules"]),
      vue.createElementVNode("navigator", {
        class: "nav-register",
        url: "/pages/register/register"
      }, " 没有账号,前往注册 ")
    ]);
  }
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$F], ["__file", "C:/Java/box-im/im-uniapp/pages/login/login.vue"]]);
  const _sfc_main$F = {
    data() {
      return {
        dataForm: {
          userName: "",
          nickName: "",
          password: "",
          corfirmPassword: ""
        },
        rules: {
          userName: {
            rules: [{
              required: true,
              errorMessage: "请输入用户名"
            }]
          },
          nickName: {
            rules: [{
              required: true,
              errorMessage: "请输入昵称"
            }]
          },
          password: {
            rules: [{
              required: true,
              errorMessage: "请输入密码"
            }]
          },
          corfirmPassword: {
            rules: [{
              required: true,
              errorMessage: "请输入确认密码"
            }, {
              validateFunction: (rule, value, data, callback) => {
                formatAppLog("log", "at pages/register/register.vue:60", "validateFunction");
                if (data.password != value) {
                  callback("两次密码输入不一致");
                }
                return true;
              }
            }]
          }
        }
      };
    },
    methods: {
      submit() {
        this.$refs.form.validate().then(() => {
          this.$http({
            url: "/register",
            data: this.dataForm,
            method: "POST"
          }).then(() => {
            uni.showToast({
              title: "注册成功,您已成为盒子IM的用户",
              icon: "none"
            });
            this.login();
          });
        });
      },
      login() {
        const loginForm = {
          terminal: this.$enums.TERMINAL_TYPE.APP,
          userName: this.dataForm.userName,
          password: this.dataForm.password
        };
        this.$http({
          url: "/login",
          data: loginForm,
          method: "POST"
        }).then((loginInfo) => {
          formatAppLog("log", "at pages/register/register.vue:98", "登录成功,自动跳转到聊天页面...");
          uni.setStorageSync("userName", loginForm.userName);
          uni.setStorageSync("password", loginForm.password);
          uni.setStorageSync("loginInfo", loginInfo);
          getApp().init();
          uni.switchTab({
            url: "/pages/chat/chat"
          });
        });
      }
    }
  };
  function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_1$3);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_2$3);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$4);
    return vue.openBlock(), vue.createElementBlock("view", { class: "register" }, [
      vue.createElementVNode("view", { class: "title" }, "欢迎注册"),
      vue.createVNode(_component_uni_forms, {
        ref: "form",
        modelValue: $data.dataForm,
        rules: $data.rules,
        "validate-trigger": "bind",
        "label-width": "80px"
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms_item, {
            name: "userName",
            label: "用户名"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.dataForm.userName,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.dataForm.userName = $event),
                placeholder: "用户名"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "nickName",
            label: "昵称"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "text",
                modelValue: $data.dataForm.nickName,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.dataForm.nickName = $event),
                placeholder: "昵称"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "password",
            label: "密码"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.dataForm.password,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.dataForm.password = $event),
                placeholder: "密码"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createVNode(_component_uni_forms_item, {
            name: "corfirmPassword",
            label: "确认密码"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_easyinput, {
                type: "password",
                modelValue: $data.dataForm.corfirmPassword,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.dataForm.corfirmPassword = $event),
                placeholder: "确认密码"
              }, null, 8, ["modelValue"])
            ]),
            _: 1
            /* STABLE */
          }),
          vue.createElementVNode("button", {
            class: "btn-submit",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.submit && $options.submit(...args)),
            type: "primary"
          }, "注册并登录")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["modelValue", "rules"]),
      vue.createElementVNode("navigator", {
        class: "nav-login",
        url: "/pages/login/login"
      }, " 返回登录页面 ")
    ]);
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$E], ["__file", "C:/Java/box-im/im-uniapp/pages/register/register.vue"]]);
  const defineMixin = (options) => {
    return options;
  };
  const version = "3";
  {
    formatAppLog("log", "at uni_modules/uview-plus/libs/config/config.js:5", `
 %c uview-plus V${version} %c https://ijry.github.io/uview-plus/ 

`, "color: #ffffff; background: #3c9cff; padding:5px 0;", "color: #3c9cff;background: #ffffff; padding:5px 0;");
  }
  const config = {
    v: version,
    version,
    // 主题名称
    type: [
      "primary",
      "success",
      "info",
      "error",
      "warning"
    ],
    // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
    color: {
      "u-primary": "#2979ff",
      "u-warning": "#ff9900",
      "u-success": "#19be6b",
      "u-error": "#fa3534",
      "u-info": "#909399",
      "u-main-color": "#303133",
      "u-content-color": "#606266",
      "u-tips-color": "#909399",
      "u-light-color": "#c0c4cc"
    },
    // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
    unit: "px"
  };
  const ActionSheet = {
    // action-sheet组件
    actionSheet: {
      show: false,
      title: "",
      description: "",
      actions: [],
      index: "",
      cancelText: "",
      closeOnClickAction: true,
      safeAreaInsetBottom: true,
      openType: "",
      closeOnClickOverlay: true,
      round: 0
    }
  };
  const Album = {
    // album 组件
    album: {
      urls: [],
      keyName: "",
      singleSize: 180,
      multipleSize: 70,
      space: 6,
      singleMode: "scaleToFill",
      multipleMode: "aspectFill",
      maxCount: 9,
      previewFullImage: true,
      rowCount: 3,
      showMore: true
    }
  };
  const Alert = {
    // alert警告组件
    alert: {
      title: "",
      type: "warning",
      description: "",
      closable: false,
      showIcon: false,
      effect: "light",
      center: false,
      fontSize: 14
    }
  };
  const Avatar = {
    // avatar 组件
    avatar: {
      src: "",
      shape: "circle",
      size: 40,
      mode: "scaleToFill",
      text: "",
      bgColor: "#c0c4cc",
      color: "#ffffff",
      fontSize: 18,
      icon: "",
      mpAvatar: false,
      randomBgColor: false,
      defaultUrl: "",
      colorIndex: "",
      name: ""
    }
  };
  const AvatarGroup = {
    // avatarGroup 组件
    avatarGroup: {
      urls: [],
      maxCount: 5,
      shape: "circle",
      mode: "scaleToFill",
      showMore: true,
      size: 40,
      keyName: "",
      gap: 0.5,
      extraValue: 0
    }
  };
  const Backtop = {
    // backtop组件
    backtop: {
      mode: "circle",
      icon: "arrow-upward",
      text: "",
      duration: 100,
      scrollTop: 0,
      top: 400,
      bottom: 100,
      right: 20,
      zIndex: 9,
      iconStyle: {
        color: "#909399",
        fontSize: "19px"
      }
    }
  };
  const Badge = {
    // 徽标数组件
    badge: {
      isDot: false,
      value: "",
      show: true,
      max: 999,
      type: "error",
      showZero: false,
      bgColor: null,
      color: null,
      shape: "circle",
      numberType: "overflow",
      offset: [],
      inverted: false,
      absolute: false
    }
  };
  const Button = {
    // button组件
    button: {
      hairline: false,
      type: "info",
      size: "normal",
      shape: "square",
      plain: false,
      disabled: false,
      loading: false,
      loadingText: "",
      loadingMode: "spinner",
      loadingSize: 15,
      openType: "",
      formType: "",
      appParameter: "",
      hoverStopPropagation: true,
      lang: "en",
      sessionFrom: "",
      sendMessageTitle: "",
      sendMessagePath: "",
      sendMessageImg: "",
      showMessageCard: false,
      dataName: "",
      throttleTime: 0,
      hoverStartTime: 0,
      hoverStayTime: 200,
      text: "",
      icon: "",
      iconColor: "",
      color: ""
    }
  };
  const Calendar = {
    // calendar 组件
    calendar: {
      title: "日期选择",
      showTitle: true,
      showSubtitle: true,
      mode: "single",
      startText: "开始",
      endText: "结束",
      customList: [],
      color: "#3c9cff",
      minDate: 0,
      maxDate: 0,
      defaultDate: null,
      maxCount: Number.MAX_SAFE_INTEGER,
      // Infinity
      rowHeight: 56,
      formatter: null,
      showLunar: false,
      showMark: true,
      confirmText: "确定",
      confirmDisabledText: "确定",
      show: false,
      closeOnClickOverlay: false,
      readonly: false,
      showConfirm: true,
      maxRange: Number.MAX_SAFE_INTEGER,
      // Infinity
      rangePrompt: "",
      showRangePrompt: true,
      allowSameDay: false,
      round: 0,
      monthNum: 3
    }
  };
  const CarKeyboard = {
    // 车牌号键盘
    carKeyboard: {
      random: false
    }
  };
  const Cell = {
    // cell组件的props
    cell: {
      customClass: "",
      title: "",
      label: "",
      value: "",
      icon: "",
      disabled: false,
      border: true,
      center: false,
      url: "",
      linkType: "navigateTo",
      clickable: false,
      isLink: false,
      required: false,
      arrowDirection: "",
      iconStyle: {},
      rightIconStyle: {},
      rightIcon: "arrow-right",
      titleStyle: {},
      size: "",
      stop: true,
      name: ""
    }
  };
  const CellGroup = {
    // cell-group组件的props
    cellGroup: {
      title: "",
      border: true,
      customStyle: {}
    }
  };
  const Checkbox = {
    // checkbox组件
    checkbox: {
      name: "",
      shape: "",
      size: "",
      checkbox: false,
      disabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      iconColor: "",
      label: "",
      labelSize: "",
      labelColor: "",
      labelDisabled: ""
    }
  };
  const CheckboxGroup = {
    // checkbox-group组件
    checkboxGroup: {
      name: "",
      value: [],
      shape: "square",
      disabled: false,
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      size: 18,
      placement: "row",
      labelSize: 14,
      labelColor: "#303133",
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      iconPlacement: "left",
      borderBottom: false
    }
  };
  const CircleProgress = {
    // circleProgress 组件
    circleProgress: {
      percentage: 30
    }
  };
  const Code = {
    // code 组件
    code: {
      seconds: 60,
      startText: "获取验证码",
      changeText: "X秒重新获取",
      endText: "重新获取",
      keepRunning: false,
      uniqueKey: ""
    }
  };
  const CodeInput = {
    // codeInput 组件
    codeInput: {
      adjustPosition: true,
      maxlength: 6,
      dot: false,
      mode: "box",
      hairline: false,
      space: 10,
      value: "",
      focus: false,
      bold: false,
      color: "#606266",
      fontSize: 18,
      size: 35,
      disabledKeyboard: false,
      borderColor: "#c9cacc",
      disabledDot: true
    }
  };
  const Col = {
    // col 组件
    col: {
      span: 12,
      offset: 0,
      justify: "start",
      align: "stretch",
      textAlign: "left"
    }
  };
  const Collapse = {
    // collapse 组件
    collapse: {
      value: null,
      accordion: false,
      border: true
    }
  };
  const CollapseItem = {
    // collapseItem 组件
    collapseItem: {
      title: "",
      value: "",
      label: "",
      disabled: false,
      isLink: true,
      clickable: true,
      border: true,
      align: "left",
      name: "",
      icon: "",
      duration: 300
    }
  };
  const ColumnNotice = {
    // columnNotice 组件
    columnNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80,
      step: false,
      duration: 1500,
      disableTouch: true
    }
  };
  const CountDown = {
    // u-count-down 计时器组件
    countDown: {
      time: 0,
      format: "HH:mm:ss",
      autoStart: true,
      millisecond: false
    }
  };
  const CountTo = {
    // countTo 组件
    countTo: {
      startVal: 0,
      endVal: 0,
      duration: 2e3,
      autoplay: true,
      decimals: 0,
      useEasing: true,
      decimal: ".",
      color: "#606266",
      fontSize: 22,
      bold: false,
      separator: ""
    }
  };
  const DatetimePicker = {
    // datetimePicker 组件
    datetimePicker: {
      show: false,
      popupMode: "bottom",
      showToolbar: true,
      value: "",
      title: "",
      mode: "datetime",
      maxDate: new Date((/* @__PURE__ */ new Date()).getFullYear() + 10, 0, 1).getTime(),
      minDate: new Date((/* @__PURE__ */ new Date()).getFullYear() - 10, 0, 1).getTime(),
      minHour: 0,
      maxHour: 23,
      minMinute: 0,
      maxMinute: 59,
      filter: null,
      formatter: null,
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      closeOnClickOverlay: false,
      defaultIndex: []
    }
  };
  const Divider = {
    // divider组件
    divider: {
      dashed: false,
      hairline: true,
      dot: false,
      textPosition: "center",
      text: "",
      textSize: 14,
      textColor: "#909399",
      lineColor: "#dcdfe6"
    }
  };
  const Empty = {
    // empty组件
    empty: {
      icon: "",
      text: "",
      textColor: "#c0c4cc",
      textSize: 14,
      iconColor: "#c0c4cc",
      iconSize: 90,
      mode: "data",
      width: 160,
      height: 160,
      show: true,
      marginTop: 0
    }
  };
  const Form = {
    // form 组件
    form: {
      model: {},
      rules: {},
      errorType: "message",
      borderBottom: true,
      labelPosition: "left",
      labelWidth: 45,
      labelAlign: "left",
      labelStyle: {}
    }
  };
  const GormItem = {
    // formItem 组件
    formItem: {
      label: "",
      prop: "",
      rule: "",
      borderBottom: "",
      labelPosition: "",
      labelWidth: "",
      rightIcon: "",
      leftIcon: "",
      required: false,
      leftIconStyle: ""
    }
  };
  const Gap = {
    // gap组件
    gap: {
      bgColor: "transparent",
      height: 20,
      marginTop: 0,
      marginBottom: 0,
      customStyle: {}
    }
  };
  const Grid = {
    // grid组件
    grid: {
      col: 3,
      border: false,
      align: "left"
    }
  };
  const GridItem = {
    // grid-item组件
    gridItem: {
      name: null,
      bgColor: "transparent"
    }
  };
  const {
    color: color$3
  } = config;
  const Icon = {
    // icon组件
    icon: {
      name: "",
      color: color$3["u-content-color"],
      size: "16px",
      bold: false,
      index: "",
      hoverClass: "",
      customPrefix: "uicon",
      label: "",
      labelPos: "right",
      labelSize: "15px",
      labelColor: color$3["u-content-color"],
      space: "3px",
      imgMode: "",
      width: "",
      height: "",
      top: 0,
      stop: false
    }
  };
  const Image = {
    // image组件
    image: {
      src: "",
      mode: "aspectFill",
      width: "300",
      height: "225",
      shape: "square",
      radius: 0,
      lazyLoad: true,
      showMenuByLongpress: true,
      loadingIcon: "photo",
      errorIcon: "error-circle",
      showLoading: true,
      showError: true,
      fade: true,
      webp: false,
      duration: 500,
      bgColor: "#f3f4f6"
    }
  };
  const IndexAnchor = {
    // indexAnchor 组件
    indexAnchor: {
      text: "",
      color: "#606266",
      size: 14,
      bgColor: "#dedede",
      height: 32
    }
  };
  const IndexList = {
    // indexList 组件
    indexList: {
      inactiveColor: "#606266",
      activeColor: "#5677fc",
      indexList: [],
      sticky: true,
      customNavHeight: 0
    }
  };
  const Input = {
    // index 组件
    input: {
      value: "",
      type: "text",
      fixed: false,
      disabled: false,
      disabledColor: "#f5f7fa",
      clearable: false,
      password: false,
      maxlength: -1,
      placeholder: null,
      placeholderClass: "input-placeholder",
      placeholderStyle: "color: #c0c4cc",
      showWordLimit: false,
      confirmType: "done",
      confirmHold: false,
      holdKeyboard: false,
      focus: false,
      autoBlur: false,
      disableDefaultPadding: false,
      cursor: -1,
      cursorSpacing: 30,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      inputAlign: "left",
      fontSize: "15px",
      color: "#303133",
      prefixIcon: "",
      prefixIconStyle: "",
      suffixIcon: "",
      suffixIconStyle: "",
      border: "surround",
      readonly: false,
      shape: "square",
      formatter: null
    }
  };
  const Keyboard = {
    // 键盘组件
    keyboard: {
      mode: "number",
      dotDisabled: false,
      tooltip: true,
      showTips: true,
      tips: "",
      showCancel: true,
      showConfirm: true,
      random: false,
      safeAreaInsetBottom: true,
      closeOnClickOverlay: true,
      show: false,
      overlay: true,
      zIndex: 10075,
      cancelText: "取消",
      confirmText: "确定",
      autoChange: false
    }
  };
  const Line = {
    // line组件
    line: {
      color: "#d6d7d9",
      length: "100%",
      direction: "row",
      hairline: true,
      margin: 0,
      dashed: false
    }
  };
  const LineProgress = {
    // lineProgress 组件
    lineProgress: {
      activeColor: "#19be6b",
      inactiveColor: "#ececec",
      percentage: 0,
      showText: true,
      height: 12
    }
  };
  const {
    color: color$2
  } = config;
  const Link = {
    // link超链接组件props参数
    link: {
      color: color$2["u-primary"],
      fontSize: 15,
      underLine: false,
      href: "",
      mpTips: "链接已复制，请在浏览器打开",
      lineColor: "",
      text: ""
    }
  };
  const List = {
    // list 组件
    list: {
      showScrollbar: false,
      lowerThreshold: 50,
      upperThreshold: 0,
      scrollTop: 0,
      offsetAccuracy: 10,
      enableFlex: false,
      pagingEnabled: false,
      scrollable: true,
      scrollIntoView: "",
      scrollWithAnimation: false,
      enableBackToTop: false,
      height: 0,
      width: 0,
      preLoadScreen: 1
    }
  };
  const ListItem = {
    // listItem 组件
    listItem: {
      anchor: ""
    }
  };
  const {
    color: color$1
  } = config;
  const LoadingIcon = {
    // loading-icon加载中图标组件
    loadingIcon: {
      show: true,
      color: color$1["u-tips-color"],
      textColor: color$1["u-tips-color"],
      vertical: false,
      mode: "spinner",
      size: 24,
      textSize: 15,
      text: "",
      timingFunction: "ease-in-out",
      duration: 1200,
      inactiveColor: ""
    }
  };
  const LoadingPage = {
    // loading-page组件
    loadingPage: {
      loadingText: "正在加载",
      image: "",
      loadingMode: "circle",
      loading: false,
      bgColor: "#ffffff",
      color: "#C8C8C8",
      fontSize: 19,
      iconSize: 28,
      loadingColor: "#C8C8C8"
    }
  };
  const Loadmore = {
    // loadmore 组件
    loadmore: {
      status: "loadmore",
      bgColor: "transparent",
      icon: true,
      fontSize: 14,
      iconSize: 17,
      color: "#606266",
      loadingIcon: "spinner",
      loadmoreText: "加载更多",
      loadingText: "正在加载...",
      nomoreText: "没有更多了",
      isDot: false,
      iconColor: "#b7b7b7",
      marginTop: 10,
      marginBottom: 10,
      height: "auto",
      line: false,
      lineColor: "#E6E8EB",
      dashed: false
    }
  };
  const Modal = {
    // modal 组件
    modal: {
      show: false,
      title: "",
      content: "",
      confirmText: "确认",
      cancelText: "取消",
      showConfirmButton: true,
      showCancelButton: false,
      confirmColor: "#2979ff",
      cancelColor: "#606266",
      buttonReverse: false,
      zoom: true,
      asyncClose: false,
      closeOnClickOverlay: false,
      negativeTop: 0,
      width: "650rpx",
      confirmButtonShape: ""
    }
  };
  const color = {
    primary: "#3c9cff",
    info: "#909399",
    default: "#909399",
    warning: "#f9ae3d",
    error: "#f56c6c",
    success: "#5ac725",
    mainColor: "#303133",
    contentColor: "#606266",
    tipsColor: "#909399",
    lightColor: "#c0c4cc",
    borderColor: "#e4e7ed"
  };
  const Navbar = {
    // navbar 组件
    navbar: {
      safeAreaInsetTop: true,
      placeholder: false,
      fixed: true,
      border: false,
      leftIcon: "arrow-left",
      leftText: "",
      rightText: "",
      rightIcon: "",
      title: "",
      bgColor: "#ffffff",
      titleWidth: "400rpx",
      height: "44px",
      leftIconSize: 20,
      leftIconColor: color.mainColor,
      autoBack: false,
      titleStyle: ""
    }
  };
  const NoNetwork = {
    // noNetwork
    noNetwork: {
      tips: "哎呀，网络信号丢失",
      zIndex: "",
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAYAAAB5fY51AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABLKADAAQAAAABAAABLAAAAADYYILnAABAAElEQVR4Ae29CZhkV3kefNeq6m2W7tn3nl0aCbHIAgmQPGB+sLCNzSID9g9PYrAf57d/+4+DiW0cy8QBJ06c2In/PLFDHJ78+MGCGNsYgyxwIwktwEijAc1ohtmnZ+2Z7p5eq6vu9r/vuXWrq25VdVV1V3dXVX9Hmj73nv285963vvOd75yraeIEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQaD8E9PbrkvRopSMwMBBYRs+5O/yJS68cPnzYXel4tFP/jXbqjPRFEAiCQNe6Bw/6gdFn9Oy9Q90LLG2DgBBW2wyldIQIPPPCte2a5q3jtR+4ff/4wuBuXotrDwSEsNpjHKUXQODppy+udYJMEUEZgbd94DvnNwlA7YGAEFZ7jOOK78Xp06eTTkq7sxwQhmXuf/754VXl4iSstRAQwmqt8ZLWlkHg0UcD49qYfUjXfLtMtOZ7npExJu4iqZWLl7DWQUAIq3XGSlpaAYHD77q8xwuCOSUoXw8Sl0eMux977DGzQjES3AIICGG1wCBJEysj8PXnz230XXdr5RQFMYbRvWnv6w8UhMhliyGwYghr4Pjg3oEXL34ey9zyC9tiD2ml5h47dr1LN7S6CMjz/A3PvHh1Z6UyJby5EVgRhKUe7Kz/JU0LfvrJo5f+Y3MPibSuFgQGBgasYSd9l6GDsup0WS/T/9RTp9fXmU2SNwECdQ92E7S57iaMeJnPQLK6ixkDLfjlb7546RfrLkQyNBcC3dsP6oHWMd9G+V3JgwPHh7rnm1/yLQ8CbU9Y33zp0j+nZFUMb/DHmB7+SHGY3LUKAk8cObtD00xlHDrfNge+Z2ozU3c9dvx4Yr5lSL6lR6CtCWvg6OAPw9z538ZhhZRl6XrwhW8du1KX/iNejtwvPQIDR8+vSRqJ/obU7GupjdNdh2gW0ZDypJBFR6BtB2rg2OVtuub9JcmpHIpBoK1xfffLzx4f7C0XL2HNiYDp6bs9z23Ypn1fC1Y/9PCFDc3ZW2lVHIG2JKzTp4Ok7nv/G6Q054MIvda+bNb74pEgKGtwGAdL7pcfAa8vOKEZ2kyjWuLr7uDh+/qvN6o8KWdxEWhLwroyeek/g4zuqwU6kNrhyZcu/UktaSXN8iNwuL9/RuvVXtJ9PbPQ1vhmcP6t9+47u9ByJP/SIdB2hDVw9MJHQFYfrQdCph84evFX68kjaZcPAZJWwjMXRFpJ2zr91tfuvrh8vZCa54NA2xGWrunvmg8QWCJ/N4ir7fCYDxatkOeBB7an501agXbygVdvv9IK/ZQ2FiPQdi9osGbH+zRNf7y4m9Xu9Me7N9nv0HXdr5ZS4psHgXpJC9P/wDRTx0Vn1TxjWG9LGrbaUm/Fi5meSvcrkxf/Cg/ow9XqAUk91v3qHT97r6471dJKfHMi8Oyzgx1Z03t1YAQVT2MwgsC3u+yXHzi0faQ5eyGtqgWBtpOw2Ol9+/TM+sTOn8L08MtzgQCy+tOHXr3jA0JWc6HU/HF5Scssr4jXcYqfP6V/T8iq+ceyWgvbUsKKOn38eJAYyl56TAuCEr2WYei//9Crd/5GlFb81kdASVopSFrerKRlaoZj9HR+700H10+0fg+lB21NWBxe2lhNHsUpDZr27mi4dV379R9+za4/iO7Fbx8ECknLCPTsTDJ17O33bJpqnx6u7J60PWFxeAcCbMV56dJfQKf1bkMLfuGh1+76zMoe9vbuPUnLsb2DtmOe5HSxvXsrvWtLBEhaTx29+Ma27Jx0ShAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQaEsEVoQdVluO3BJ06ptHL34b1XRjp4Ch6Rq24+kmjG4Nwwg+9uA9u/73EjRBqhAEihAoe3xwUQq5WTYEzp0b3ZnV/Ncf6O/9AvY9wlh/6dy3X7ncN512Zw9BVLXjuAP4np44vnQtkZoEgVkEhLBmsWiKqwsXpjbPBOn3gRfenwnc+7GBe+zsjclvonFDS9nA9Iy/u3x9+vAP3735VPk4CRUEFhcBIazFxbfm0k9fHD7k+v4nQFaPQIrx8Gmyx/GJ0J/t7ez7mw0b9MmaC2pQQgh0/ZSm4g5TwueWWtqLt0HuVy4CQljLPPYnB0depTn+b3t+8B4t0AdBUv93h2H9xc6da0aXs2m+r1WQsLRnl7NdUvfKRkAIa5nG//r1oGtsZvjTgev/kqYHF/TA+AXoqv4npJemOEiQU1Eo2l+G0movBK1UBBPU7s9E1+ILAkuNgKwSLjXiqO/khVtvARH8dxDBRkMzPrF/V+9/BlG5y9CUqlXinHv9mRPXtvuus88L9H3JPv2zD2yXExCqAicJBIFWRwAvv3Xqwq0/Pnn+lv/K+ZvfPH3p9p5W75O0fxaBp793ce3AwIDMWmYhafiVgNtwSMsXeHp4eNXJC8Nf0PAdRCiuf/XgrnWUqsqotcvnl9DmRkCdweX4b9N7+m/ih+mbMraLM14yJVwcXItKpT1VRve+ArC3Qqn+3gM7132jKEGZm6tXg86J7OhDfuA/iHwPUpfUZSfu2L59tXxEoQxeyxkEgjKeOnLxHb4RqC+NY5H3+2953d4XlrNN7Vq3ENYij+yZwbG9jpt9GkBPQ5H9zgP9607OVeWp87cOQtn9zwJf+xDMNFfj+jryPqXpxj8c2Nn7P+SXey70lidu4IXzb0DNB4tr9751+HV7zxSHyd1CERDCWiiCc+QPjUCnsaqmZ62O5IN7N/VUNP48ee7mAZDTf4Tt049iUG4Guv4ZfNLos9UIbo7qJWoJEHjy+bP7fNsoOcnW0A0/aacef8PdG28sQTNWTBVCWIs01OfPj66BpfqTmq732UnjgT1bei+Vq4pTv7HM8Ceg2/o1qLQug7T+FaaM3IqTLZdewpoHgYEjV9fphvOj+OShWa5V+CxvZtpzv/LwG/aNl4uXsPoRwI+4uEYjAJ2GmdG8L0FK2mYa+tsrkdXZy+P7x2ZuHdW14P+BLdank9q6Qwd3rf+ckFWjR6Tx5Q2cP58K9Jm3VCIr1ogt48lO237r3//96YofeG18y9q7RFklXITxPXV+5DchKb3ZDMy37Nu5tuxG4R9cHH6b42QfAzlds+3EPXu2rfrBIjRFilwkBIIR7SHoJDurFU89ZOd680Gke6JaWomvjoBIWNUxqivFD87fej0e0n8Fwvr0/t1rnyqX+QfnRz7g+8FX8Rv8vL3auF/IqhxKzR2WCPxXqKeq3krDTdj2ierpJEUtCIgOqxaUakwzNBR0D09yiqePHOjveyOkpxLr9VMXb73V97S/h3nDXx7Y2fdPkAYbncW1IgIDxy5vM7LZt/hgrnLtxyaBrJNxv/72N+6tuNhSLp+EVUZACKsyNnXHvHL+1qcgNf2KbSXu2bt9dcmS9qlzo/fARgcmCtpzB3b1/Vg5QiuslLowENyDWDn8cSjl98PgdBviu03N+rl9/WufLEwr18uDwLdevLTF1YK3xnVZ2HI1bUxrT7z5zTuXdRP78qCyeLUKYTUI25OXbm4JPO00TBj+6I7+db8ZL3ZwMOiYdG4dA1lN9HWte2iuI2NAVPapC8O/CGPR34Ip/AZIbIMo7yX8G9QMbcS09P+2b1vf5XgdrXaPfiYns9oeLLEd8D1/B7Dp0E1jGP042pXQj7RKf546cmGzp+tv1TRf6YQD35/QO3seP3xow5IfC9QqmM23naJ0ny9ysXwgq98BWc0kVhv/Nhalbqe8kd/Fr8MOSEr3zEVWrwyO3I29hl+E9LUHGf+nAXI6sGPdd8uV2YphIKnE5IyL6bLxk7cn3bdkHHefrpvJAExMZ1uBZmqeNzXtfzUzk/m/ens7LjV7Px+8d9e1579/44l0duZtge+Np5zEEw8c2pBu9na3YvtEwmrAqNE8IZvNHsep5//yjl3r/0O8yFOXbv0QCO05gP0JGIL+fjw+uj91YeRh/Dp/PtCDM7Zpfmjvjt6Xo7hW9ycmJjaYduf7Hdf/8HTGfa3rG9rYxLSWnsloPg7fijZV8oFM2Ja2a9t6EJd7bCztvHP7us4rrdD/r3/7ct9I99jEI4cOiQ3dIg2YEFYDgOUJDFj1e8TqX7cT4kImXuQr5279A4DeBEX8ayvprU4N3rovcALot/TH13T0fXDTJn0qXk4r3k9OTm4y7a6PzjjORzOOvn1kbEqbnEprPhRzwAKzwFLHk05hv6Yd6N+o3R6beG50aPSdr3qV6IJKkVp5ITIlXOCYn4Yexr0w/DO6YXymHFlR0e5r7tsM3fxgJbI6fW1ivTeT+SsYmr54cFff+5Cu5X+hb94Merp6/J/PusGvTE6724eGJ7RpSFOkKPCUZvBPBccoHBet3Rwe13rX9tw/PjXzZ5hKvr8SfhWKkeA2REAIa4GD6p0feRdWBnvxjv2PckVhVfBf4A29uG/X2i+Ui2eYn8n8NryuDr3jPfWSFV5k44UT137eshIP2K7/64cObbheqZ6lCp+Ydt8TBO7vTM5od1+/NR4SFVhoLpKKt410lnE8LTMzo3V2dLznxLkhYgQ9obiVjEDln7mVjEodfYcpw+MAsftg/7qSDbAnb97sCSb0Yei2fqOcbovVqKNnNO8HmAE9Cv3Wp+uoWjt27HpXNqH9WTKR+kBHKqEFbvo5y3N/avfu4g23R45f3WGa1k9ZicTd0zPTf/f6O7f8dT311Jp2fHzmgJlI/N70jPPe4bEZ6Kg4qw0lqlrLiNKBiLWerpTW25PUbkPXZViW62ecHz+4d8PXojTirzwEyhq8rTwYFtRjvpX/rlwJ+iSXugPbMuyKBOHo3geRJtuT7PujcmVUCuPJlhnL/9NUqvMD2eyM5sxMaIlE4n7XML907tyNjcxHQjty4sZv66Z1xEok/xNW5n4uZSf+8sT5m++vVO58wkEu5sR09pd9w/rWyET2vReujiqygrSopn/zKZN5qMeirotKeTyolm7p/+X06Wvr51ue5Gt9BISwFjiGsLl6N6SrvylXDNTK70D4mX071pwtF88w6Jd/DG/1E1u26NOV0pQL71y3/8PJVOcHMzPTWkcCH2YGOaTTaS2RTN6f1fQvvvDK1bdnbO2JZCr1SeRfn05Pa1PTU0gXJBKW+ecnzlxvCGndhFQ1NRP8bcY1/vjS9bF1V26MwHwsVKiXa3etYVw1TNhYJ3TDjQCO42jJVMcez7J+t9YyJF37ISCEtahjGjxkGDr2DJZ31D8h5vUQJL5RPkXlUMM07u3qSGidICvkzzuSlmlZb0olrK9hD9v9JCrPC196JoPMAolFg6CV+PPj54YeyWecx8Vk2v1Q0rSfhFT18LnBmzBRyNalp5qrSuq7kiAsh4SFa7oZ9M0wzI+cPHOjZPo9V1kS1z4ICGEt4lhiCvZrSa2jol7qzPXJPk6nIGbVbWfUvcr7hO9MP97ZVXpggOu6ajplYStj7l1XvbRMXbPAbp6HzSSBlkraNknrvfVCcPt2sHYi7f3pTDb47KUbYxuvKqkKpYBXKBnV869c3WgbDEixAck0FGFFfEzJzbIsO9C1TyrcymWWsLZGIHoW2rqTzdo5dXyykz0NC8l779i5vu4zwM+eHVntGP5jqVTq/6AkVc5NZ3wNH2lVxNWZNIukMSjiNd9z0+CHp5DXAdX4SAg203w8GB5IATtODHzdK8C15kEjhXvNS9rWA11dnfcMDY9prscss48RySakrOLWqODCoIKAgkuVgsS0urtD60haeV1YYVbbtjUn6/74HXvW/11huFy3PwKzT1r797Upe3jq4sib9u9Y+wxe+vh7W1N7jx49v6ZzbffnQD4/Cj1Pfjx54XiBls6GVuTUc9mQsOIO9mPQFdkIRlz4fy5JLm2ZMOqTcJaXIqpcqnixVe+rdbZ3dbc2OT0D0wZIibHSksmklslknvx+//q3PiKnXcTQae/b+LPQ3r1t0969cOL6G7o6E09qgZegdMJBpVQ1DbKCpyUt6oPKz/4NEJalCAuZFIuEVBJd+jgLh4rvAiFqUVGkhJZMWFp3Z0obGSu/d5gSnWmavuO6h+/cvYHSobgVgoAYjrb4QPMUiGtj1/79jBMkLBwiTlMASlYzTkhWCJyTrGAyMOFkst/BoYMmuIIyGJYcMXMMdNwHPhYN1qWS1t6ZLGaKZL8yzFXTr15BooLLMugHMBRNKgW+It8y9TEcJGt4rvcRFCCEVQbFdg0Swmrxkb0+cf2XOzq73kgdFieEXF2jdEUJKQH6SVWQrNjtZDKlpTPp38U58iUbthk/Ph7sN6zg/xudSGvD4xkq6otcnnjyF0XRRTflkyC0IIJE1JG0QbqGNpMNp5xFhRTcZDNoj66988SFm5vv3LX+WkGUXLYxAuXnCW3c4XbqGs9hwjv+a9lsuN+ahOJSCoLjNDAFvVUll0p1aNPp6adTweSflEszPO48oFn+4yOTmR+6enOshKyYhzWpf/jDuuf6x2aV/qNRaPG/1d0gUXWCA0uu7GhMmkqmerEc8KOVU0lMuyFQ+Ylut562YX9Sncmf7Ojo3BDZWbGLtMkiUVXSWTFNuMqWuYG530f7+/tnGFboxsfdd9mm8XdDo9O7rg6NFq0CFqZr5DWlK9qV0fZqGvZchSuPlevB2VmG/hOV4yWm3RAQwmrhEcW64qu4ykfJho52Vp3J8quBYQooqWDKADftBd6HD+5efyoKj/zR8ew/hWXY56/cnFh7a3RCTTGjuMX0SVB9qzu1qfQM+jO3dBW1g6uVSHv/qVNX10Vh4rc3AkJYLTy+WA/8ou9kJjo7bOh+DLVFZ64TEbCyBktxI5PJZj56R//Gx+NdH5vM4vuI+p8NXh9LjU1iw3EZhXc8TyPuuV9wDaaCfBjTM06N0hVWQmHBDzvSDZ5tvqYR7ZAymh8BIazmH6OKLbzv0KZvJEz3ZzEFnEolaEtV2XEaCLKadrIz//TQnk1/EU85NuH8th8Yf4j9gMZUOrNkZEVZCnsbtTU9KW18GqcKFyjh420sd2+j33pg3F8uTsLaDwEhrBYf04O7N/2t7/o/C2FoGnsIy/YGlvAwSfCvZzLOe+8oR1ZT3u/5uvHJC9dGtJlMrfqjslXVHwjpat2aLi2rjFFLjUSrFUjlO0juddXSSXx7ICCE1QbjiHO0/hofbPgwpnDTOR2V6hWNQqGUx34890noet5yaO+Gko3Y45PO7/uB/lvnrwxrWdha1absbgxo1FWtwplXqYSJY5Nn5lU3bLHQmGA/yko0plVSSjMjIITVzKNTR9sO7dv8RSeb/T9BWmMkKv4D+YzBXuljV7yxd+zfte6VeHGKrHTz4+cv38JWmyUmKzSGG5z7VndoE7kz3uPtq+Welvhwm39weVjOyaoFsBZPI4TV4gNY2Pw79mz8KyebeRIH+VEZTaX0sf27+v794TKmCxNTzr/2NOPj5wZBVjjdYSklq6jN69dyKuhqmWztivYob+RTSkPbe/xMdlMUJn77IiCE1W5jq+s4dYEO6mzsYAmvi/+CrH7LDYxPcBq4HGTFVcG1ULLT5orS1ULIkoSFI2cMHKG8obiXcteOCAhhtdmo6gaOh4EWWlkyYU9gvHswXfgV19d/7+LVkSWfBrItJJhObL/p7elQR8fUZnEV70XxPc01sM+xrzhU7toRgZIHuh07uZL6xA3LBaYB+Ar8rBsfz34YX1j+D5eu317QNGy2xPquSE4mDuXb2IujY2AgytNE67RiKFshzuwCR5s9ZSMlsK0QEMJqq+GkBKOF5yFzRoidK5BoFCeMjM/8mG+a//Xy0Li55KYLBRiTrGjwOQ1br4VMBQuKVJeQKVPxMLlvPwSEsNpsTEECmBLSgbHUpwD1YGwse59l2p+9fmuig4fiNZIowrqq/6Xeqm9Vh9JbjcOKvqFtACX7gV8kTVZvkaRoRQSEsFpx1OZoM2iKxxuHLtDcsZlgLzYZfv7m7XSv+r7fIm234XSP/8o5ktWqzqSyZr89PoXPYDTYkZvziw0NLluKayoEyq4iNVULpTF1IaDjHHZmoAW4aep9geN8fiLt998cGYdtVp7K6iqzXGJFUCAi7jdkuapsBJKcPBwgyP8YRyV7B04Q3dDbpY3jg6gupoMNla5U41BbUN9n0sr1ScKaHwEhrOYfo7paCAW0WiWknihhW/0Tabf/6tDtxpIVSIhGnz1dSXUkDL8fSHKi4/lWPId9Kp3Vxqegp8J/m9f14D6DQ/nmb281FwgkZ1Dj7bnSSFx7ICCE1R7jmO8FJJr8jCvjeNrIxFjDJBpKVaSlXhwDw384MyucBoLAGEfHI5ptO6n1YAq4FjorH9IWjUOnFlF3pj62aui3whbI33ZGQAir/UY3XCVEvzgdw/8NcSyGUhSlpVWQrFg2p39xp0JYLyIohaXxdZ2FGofG6yi85/QS32F0Asu8URgu1+2JgCjd22xcsVElPC85169Gaa1YTkRWJKpSqooBiQQzONvq9sRULKKxtzzAEJw1api2EFZjoW3K0oSwmnJY5tcoSD09HanEDztubnfO/IopyUWC6sUmZUpW5aSqkgwgK04DxxaZrFivacCaIdAuH9zaM1rSDgloOwSEsNpoSMenvU93dXb+EE5taFivKElRqd67qrNmsqIF+yjMF/i56MV2JqadYKxXMDXM6+4Wu04pf/kQEMJaPuwbWvPticwj4Il/NnTrdl7JrqaDC5wTUle1GmdWWVCw1+JotjA6PgnThsIdQrXknF8arkJi/+R355dbcrUaArU9ha3WqxXW3tHR9C5dN//T9eEJ3aGdUwP7T0V7F86Mr0VW4mF6o2NTS/ilaB2HDmb8wA2+08AuS1FNjIAQVhMPTi1NgwRkGKbxRxMz3uaJSRzVUkumOtLwo6Zc7aOkVdEhynN9NQ1cyuNqeEqD67mX9TXGyxXbJhFthYAQVosP58S0909czfqJqzdGODVqaG/IUbCWr2p0yukfp4FUtDfeir1yl8IPUGjPHFy/fqJyKolpJwSEsFp4NEfT6Z3YBvOp8MvMc0hAi9hHNQ1cBrJil5TUZxhfXsTuSdFNhoAQVpMNSD3NMTzzU1PZYAM/ProYkg3UV5rHT8lXmA7SwnwEq4FLLVkRI04HM+n0LdvzvlEPZpK2tREQwmrR8ZucCd7hePr7rw2N5PfxLUZXON1zHKz4kb0KnIttP6Njk8tyaimbwXPrsW/yq3v3bhoqaJZctjkCQlgtOMCYCnU4GedTI+NpQ32XbxH7QOmKG5nzdIWZJz8HNkKygqI9TmSL2JSiovGVn0A39c8WBcpN2yMghNWCQ4zPc0HRbr6GEs6chJFnmfl3knZO4/hmII1B6fiFG9br0s6qAeXPp2WUrhzHeXH/jr6n5pNf8rQuAkJYLTZ2kK7Wul7w6zeGx9DyUsZovOodOizosTg1TM9k1Wogpa7lIisOF+w48E/7E5B1Y/cgtdizsBKbK6c1tNioT6X9n3MDcyePOo7OoJqrC6S0+ZIYV+GSOHxvc18PJCxXG4ed13I727axqTp9yk9rX1jutkj9S4+ASFhLj/m8axwdDdbgELxfGsLpoZyqVXPVU1QugVJUV0dC27p+FaaBWWxknq6ceAljTNMiAf/BoUMbJpewWqmqSRAQCatJBqKWZpgJ731Zx9pJM4aK0hXe5vlKVFEbKFlxs3PvqpSSqpbzKztRm+gnEkktnU6/2GFMfa4wXK5XDgJCWC0y1iAR6/Z49iOjY7C5qkG6mk+3SFQGlEP8FFdnygrNFqBsn1OxP5+K5pGHbcBhqhT8fqu/v39mHkVIljZAQAirRQYx7Wj3Zj3tddQjVVJ4l50CMjHe8mqOTJCCvmoTyIrENXx7Uinbm4Gs2PZUqkObnp76i0N7N36tWl8kvn0RaGnCGhgILKPn3B3+xKVXDh8+nPseX3sOlpt13+P4uonv71WeDqLr1ampFB8S1JrulNaHc9rTMxltcpofOeWns0rTLkeIZUHRnpm5YibMf7kc9UudzYNAyyrd8ZLpWvfgQT8w+oyevXeo++bBtaEtQd9s1/ffRsV3I6eDJCp+nourgH04UZQnhIYfWm1o8xdUGCU8/E/bil89sH3dlQUVJplbHoGWJaxnXri2HTvd1nEEcCBS3z++MLi75UejQgcmJjL92ax/gNJPo6QekhVXAbdvXI3D+XQ1Bcxiu02zTAEjKFIdHTQS/S8Hd2/4YhQm/spFoCUJ6+mnL651gkwRQRmBt33gO+c3teNQYin/oG6aKX5rcKEukqqoWN+Ij5vy81v8UATDG0WGC21jlJ96K6wKPpWd8H8jChN/ZSPQcoR1+vTppJPS7iw3bIZl7n/++eFV5eJaOczX9Z2YvM1LPxWpocBHKv8qHHdMqSphGUqqahaThfj40ITBcbLnsDj6oXvu2bS4n96JVy73TYtASxHWo48GxrUx+5Cu+XY5RH3PMzLGxF0ktXLxrRoGNVPPfNtOolIrgElLGYH2wbZqcipdIFVFlDbfGhqfj9bskCaHHS/7gTt3r73Y+BqkxFZFoKUI6/C7Lu/Bl1jmlKB8PUhcHjHufuyxx/g5lbZw+BL7bX4EoiZqyS0T0uM0j1+82QSl+ua+bhxj7GjD2LicwWkLzaarigbKsmDJ7gcTmezMBw/t3ixntUfAiK8QaBmzhq8/f26j77pbaxo3w+jetPf1B5D2RE3pmzyR4/nH+Mti4Wx1dUrCHO0lSVGqskFUnakkpn6mhu086jgYHkWTW3Wbo4Tli6L5gqYHE47vfeDufVv+YflaIjU3KwItIWEdO3a9Szc0ElDNDqcLbHjmxas7a87QxAnX9ljfxcr+Mzs29ykpi1O8iJjoR/cm5o7dnUl89LRLW93dyWmVIip+Kp7pmlWqIvQ8Mga9Gslm3Efu3LX+K008HNK0ZUSgplnGMrZPGxgYsIKeXa/TA61jPu0w0+7xBx/cd3M+eZspD0wbDgWm+RXP13cODY/jWGKuGAb48jG+agNpilbqlKZoWDqDY2AyjtNUlupzYZlKpXgaxIVMNv0zd+/d+uxcaSVuZSPQ/IT13TN34QRvZW81n6HSDdMLUqmjh9tgd//Fi8OHEl3JL3Z2dh3MzGA7XU664llVWRz/QhLjNYmsmaWp/DjCjqIDdlaZTOZZ1/A+fGj7hjP5OLkQBMog0NSE9cSRszuswNhdpt31BRnazM3U9IuPHDrUuG+419eChqU+cvzqjp7u5P9KJpMPpqc51Zv9QntLkFQBEqZluVCw/7nhaP9i376+8YIouRQEyiLQtIQ1cPT8GjOw7vE8tyFtxBrb2MBXdh579FF99g0vC0nzB548ebNHT2l/aFmJj1BPBYyav9EFLaQ+jdPAVNL8/pZ13a8qiJLLOhAAjvrTRy/d0enbF+69d0tzHFhWR/vnk7Rple6mp+9uFFkRGF8LVj/08IUN8wGp2fIcPLh+4sCu9R+F3ucj0MLf4vaVVnChqYWmdaQS2jpY2vd0djh86Vqh7c3Yxm8dudTPxaW0lrn7yJEjZW0Tm7HdC2lT0xKW1xecgHE3FDWNcb7uDh6+r/96Y0prjlIO7ur7TOD5b3ayzt9ylY0Gl83qKFXZsCXrXdOlrV3djf2LBr556JOshLDmMWhPPXV6vav5O5jVxYLUhNl3iIbV8yiqpbI0bQcP85C2Xu0l3dczC0XUN4Pzb71339mFltOM+Q/0rzu5f2fvu1zH+QDOt3uZ0pbVRMRFouJK5qqeTkhVqyBdtdUmhGV5JI4cudrpd5kHiyp3tTU/8s6r+4rC2vCmaQmLWJO0Ep65INJK2tbpt75298U2HLuiLh3oX/95L+0/kHUyvwTieiUJHVEimVzy1UKeWMqv2pCoKEVFRNXT1aHawnBx80eAZj7TwcxdAc5Gi5fiaNnNT37nCk4xaV/X1IRF2B94YHt63qQVaCcfePX2K+07fMU9U7qtHev+xE/7r3cc70O+6w1gxuV0dHZiusgvJS/O7IskRXLs6KCxqj+B26t9a3uUREWi4plbQlTFYzXvu+7tB3EIUGel/L6e3TNw5NS8zYAqldss4YvzBC9C7559drAja3qvDoyg6pwCP+KBZaVOPPjazS1vMLpQKE9fuPnawDB+EqehPwzWuAuSl8LPg90WVxhJJPWQCUmPBAWTBEz1TFUGpqO3wYYvIPgr2az35a2b1/50V6f1e1NTlVcvEzB0xRekj67usu5FmS2/crvQcaol/zeeObfTSOj91dIq28PxiaOHDx9quy8LtQxhcZBqIS0Dhkl2l/3yA4e2j1Qb2JUUD1Iyz1waOQib0vsxKXsAFvH3wMB0JySwtZC+DBPTN5BOCEnhrI1BuKe9l6tIzsVCiD6E0DOabrwI2elZ09aP7N3aNxjheXvK+a1OENa0EFYEyYL9rz072Ju03ZpNQKj7Xd899cKhNrA9LASvZTY/s9GcHoK0XsrakLS8UklLxyl+/rj+/Qfu2367sJNyTS7SuZfneO7ffweBGScu3NwAqWgrTvTc5jjBZmw87tMCfRXYKQWOgula4OiBOQUZ7DZuhrAGdQXxV0zPuCaGnkv3VPGHOpPw7+QPR62OM5HhdNddGOeX2kmCbSnC4mDlSStVTFr4eLljdHV+702vWz9R66Cu5HS5h5hmHvz3QiOxwJTRo2BGgY06dm7OVhewYGAY6s75oD+ZDs4JPY9JyqSCQ7ABqftd5VFM3/j2Ja4mtsWpJQSq6ZXu5UZTKeJnsHpohiYPRqBn04nkS2+CQWW59BK2dAjwS0Y4IHDz2ERWG8Gnwm7iK9W3sFmbvrqGPzw6gW8eTmvTM07XmTPX28KYd7EQ3rjnvv1QFHbPt3zT9DcMPHd+13zzN1s+/hC2rKOo7NjeQdsxT5LEWrYjbdLw05eHtwWe9jl0542u62HZHZIVpalY/yIlP5X3MHYddLLZfy4fmYiBhNuB509vw+rG3tKY+kOwGHLi7W/cS91jS7v4s9TSnZHGLx8CICH9lXNDX+zpWfXuycnaBV2e3e567nAm4973qv0bzy1fD5qr5oEB7KXt0u7B3Loh7yhWVfypbOalh9+wr6U3mbfklLC5Hi1pDRE4ef7Wj+EEiZ+amqpvJT2bzWjJRLIPR3n9riA5i4DZg720DSIrlsrvHXSZ9p7ZGlrzSgirNcetqVp9/vz5FJTqj6JRejTdq6eBMzNpHP9s//QrF4bvrydfO6f1JrCX1mvcXlo98Kembjotr3wXwmrnp36J+pYNeh5JdqRem83O77gxkpxtW3bgOZ/g1HKJmt3U1Rw+3D+zrc89aunagnWzpq6PdxujLz388L4F78tdbtCEsJZ7BFq8/sHBoMPX/I9hyrGgnuDUUZzrnnz7yQu3HlxQQW2Ued++fZmJ1e5LoPB5k5ZpWCPXz+08du+99zrtAI0QVjuM4jL2YcIZeh+2+9wF49MFtYJSlgmHE0g/JlLWLJQPg7RmhtyXsJ18eja0tivsXhj6xy9ve/mRR5TRcG2ZmjyViN9NPkDN3Dz1FW5z9XM4i+s1ME1YcFNpUIrVLHzJzHnwjl0bn1twgW1UwPHjxxPXpztejR0HFTc+F3YXRwxdfdM9W08D0zrs4wtLaM5rkbCac1xaolWOvurhZIPIih0OdVm2haNTfqUlAFjCRnJP4HBn+iUqz6tVa2nGpTe/etsP2o2s2G8hrGqjL/FlEQC5GHghfplSUSMdvwaEA/9+4vjpa3c2stx2KIsfUek2dr+EuXNF2xEjSJx98w/tbFt7NiGsdniSl6EPp84O3W/Z1oPzXRms1GRKWdCJdeCIlJ+vlGYlh997r+70+EPH8NHJEtLCauCph+7bmj81ox1xEsJqx1Fdij4Zxi9AT2KSYBrtslgxhOD2gWOyz7AstFzx6zFHj1mGobYUYAgC9cHge3ddK5uhjQKFsNpoMJeqK6+8cm0X6noXiWUxHA8WxAdWNyQM45HFKL8dyiRpueM7jllmMGpnjO+1w9fNaxmXxiogaqlR0jQdAkeOBPjczrnOiQ6jw88ESSOA6KT7iQzOHEvavu1pZsLQg4QPP/DdZG9Xx/vWrOr+mfR03SvtNffdxleAQIgvTzjBT0w409Mpu2faufZy+vDhw5WPMa25dEnYqggIYbXqyNXY7i/jCyvdfmaVb5hdVsLp9LJGp43j1/1A7/RdvdMwPRzEboRnLVHe9vEvL3eXBOB4ZMta22H+TiqV2LJQ26u5u6Bju44Z3J7O/Lvp6cwPmBanOwQ4uNHRTWMK21bSvh1Mm642nTWCtKkH07rnTE72aOO0XZq7bIltVQSEsFp15HLthg5J/+aJE12m3tVjOPYq1/dW4cTjHnwMYhXOce8xDd3y/PJW6OpMdsTRVy4iK/rKMR/jwvz825VIHFzT3fkx13UW/dnhRy3GJyeeHEs7n1XNibUPFvY6vtGDw5vV9w0Vofn81qGhZfDhi3HX8SfQ/3HPMse9CWcCX0gel2OIFJIt+2fRH7qWRaYJG85NxldGzV4tGayFSLQ24+q9ULyu9gJfMU5ELTn6wUISTl03NHz1KzyiJLqmX657OLLdSJgoXTO7cBxyN172blier4YCvBsFdSNXV2dC35tKJrbzfPfFdjwvC/qs9MSMxxNRsSqmT6LhUDQHE+jUBE7UnATXTuLsrRn01K2l/x6+qItiR3TNG8V59KNB0DGSfNXGUXwJY2Gm+osNhpSvEBDCasIHgVLTt75/aQ0MnXpBNb2QgNYEntfr4wu/nBYpKQLtxtdwAh0SBX3VDe7nM/Ha5vf1Fb/CURS2bCTAWWuxR229qRsbQQQbUed61LfW14JVKKsTJ5sk8WUcHbtlNANyTOhgcmAGKH7p3m1FWpqtuZCu+LByVdKHVMjpKEQrBwIW9tnpXOIH+QTDSH/D9f0bmCLewDn1I4HmwtAypPDZ/oe9oXKf/aMPsWxSs/RR13FHrURiZE1gDR86tKHEdCDMKX+XCwEhrOVCvqBeHNaW6ui11/mWDtLQ1kEiWodXE4rwYgepAPssTPCMOjIdAk94TZ8pMZjch8HjDorGFUTUAwlkh64be0A9/ZCatiDZWtOyE7ClQmIdJICJFYhA+TRV4Fo5/QIHiUvrTEbkVRCxiJfsSBbfYk87OTExXxdazY5yUgiRKfpHQ1YSkONmAZY+gV4NIeVFfCXoLNA5h/Plb5LzWAyzF+IVXdNnvO/6GcsyhjC1vmWZ7s2pO3fdOqzriy9asnJxZREoerDLppDAhiIAEtCfO3F5rW0a6z1PX4/nf53nG5RqqrpieSnULEVh8cx4E7ugH78H8tG9eP/24oVezY+pkpA8b/abhPF8le75BqdsXUtaFeaTlTI2IByEoU1l8oq1mkokcZHElIRoWmpejMMCMyCvQXyy7JjjuUcgOl4tLCzCMpTHgFpcgkViX/dH/ax2Szf8m2Yqc/MN+1r7BM/C/rfCtRDWEozSkbMjq7NTY5t13dqE6dhG3wsSqlp+C9DDi0ifLrqmT1f6BgUaPjiHN0lJAGAfvpWcI4XjiHIMF6ocO/EjmMa9HeelQ1LT1PRpoce/sJwOTCQtc+kfGQp6Uxl+9JWtmL+jNEaJ0gKBgbsygR58B4sHfwV5aliVWg3vCHv6ymHcdG868IzrVsK6pnd71+/dsmXxbD3m3/W2ybn0T1/bQFe5I8euX+9ybuqbXMPbDA7ZCKV4uMOecyz+9OfmWvj9x9zEw6JW+JuOX298WhE6qtwLEV3TL1tb/AWj7sqwfqaro/sdmcyM+vBp2XzzDEzaBiQsNH+e+eeTjQ+ohwqnG0BYhfVzNYKrkOmpyauYYH8KvD8G6RPBszrC6Jq+ystl0ghzXEZjR5+O4+iZwTh+eG7Yqa5rq/3hGzzTSkXKn4YgIITVABjBP+ZzP7i8ydasrZCetuCHvIvFRs92SEdlpnCYE2LOQi12OA7RNf1yjrphHIyE9yOXPnfNMDg70DpdTf8DWDKs5rRvMVwChAWrUgh21HzllD0NrigqlxKVC7bKQuOOWeGiuI7OTkhb6T8C/Xw3xkel9cXxj6eIxiY3Hhx3X9dHsWJwDaa3l1+zd9Mt/F4tUk/ijWnP+/DBb8++LWqvnh0c7NDGta0pO7kl6zpb8AJzEUr91kYEFdeBRCt69Nm4+AsSl6jwjVGckY6VwPwUpLhLURx9xliWvxFHi/w+zB0SWCnLsVpxnoXesSI2ngp4zmRJXPgf/0IleGH51R6uwjeX5MR76qtITh7+8N9Cp4GF7Sm8Zl1s35pVXVomm/5c1vG+Wm284njHJeJq44/FjixUAld8w7uijW6+xo3MhW2S6+oIVHumqpewglJ87+LFtcFUcqur+1vxwPcZJqYPMOyhXw6GKI4+4/GwQpjCBhe+6XDIpFb06PM+np5hhS5eXzw9bLJ2pBLGv4Fe36BU4kA6IQGw8MUY6MJywVeqDs54Z69zrWdY7jI3G1ZtUiSV6zzDI3IqLLew/wu9jspl+yywrA1pEed5QceXPT3jBb/DLrA5ua5UHZ/4eMTbFx+fwvE3DJO8fANrjlctL7giJhRx9MrfR89R+VgJ1Y6currONuwd0FNsxwtV02mPlWGLy1TxlPHf6Hh8PH9xesvw9yRM+5PIRT2ZIgVKKZxWUY/PT8aTFPji0i3m4Ed1hDWV/7uY9bNGtiGqAyorJRWSqCgdkrQiR5KddrwPlsq8xfhG6efvx8dvtiQczDdmmPaldDBxSVYeZ3GJXxUMWzxq5d4fPz7Ym7X1HTAL2A7NqtJHEQ3qtCPjw3LoxB/v+OMZ5VVzR5aHWRuErYA+y4uu6fM+Xl9J/lh7bFvbY+vmv0bWos9tsXAWSLIiaSnyApHxJz6SbFSFuXTw8i86r5vVRW1m+6IHmUREAuI0lcREP5q2ztWPrO9/YK54xsXHI56+cePvj3qBfimZNS+J5FWMcrjptThsRd4dPX9+DcwEd5iQphwozfkCwJKaLv9ewHYKeicfSudwShcnJDBBOD3MTwGRO0cqLIj73jQTaejDBYaPHTBgJ/i5+HyYijd95sFhRzkzB7yL2IrCtGwezj9nOQVTUlfPwiicifnu5J0qHHd8mXHIG6ZD7JQqIk9kJK6QwAokMWRUhMaSeJ0vcfaiXNhs7PyuwpYV51Vh+EM/Pu2M9GckpyiOuZm2Wvtom+Y4me8xPbvIIujzPu6Wbvyt1ejL3U7Sv/v754ZHsORwaX3KGdwiJhO5pzY+Mivk/urVq52jTnIXlEc78LKu8qAMx/G8kHhyOicosz0ovM3IrIDKb15HSvDoOoqv+hMLYCOWI8ash0vmufryZVcqLz4u8fym3ov1xT/EVp4UDUTn4/iS0xW+sZTMojASmLqGp64iH4FRXJQ2TKj+lv7JVRTVxwQkm9APyaboGnGMzSVR6VR87ipsVT645ovOzi5tamb6zzB1/nqzjz+s9YetwLioZW5C8jq08K9+1IxS8yQsfF6ap1WL2BK8VOaJc6NbPcPrx7wJ++hmHQUPvOaQgMJ3ETtVlERDP0wVsQ19uPgcLQyt/Dc+p4jlL6k/1xa2qVyh5ApEzEoErm/DsPOTXV3de6anq36roFyRdYWVbVSshHJEMt98saIXfIu9koplYZL6m/hUz7kS/Jt0/PE8+Jj6X/Y6k+fv2tA1BKIvB/OC8WnGAmp5dpqx3XW36fjgYK/upXbhFd+BrRlqn16MfkrspkoC4hnirYjbUVWzs4rHx8uL3cerjwt0TA4RcBcsuX8Rn97q54okVsCKJJ9YkSvy1gJR4aOtnAr6OJP+L13d+BKBKMEzHhAfgDh6yzD+vqHjTDDvYpAxLqwEfVdbE9bpIEi6V27tdLP+LnzPrWS/XrRTnz5d4e79+LNY7r4kP+Z7Jv7z1LyPL0B4Tb+ci9cXLy+eJ54e8Rw//rqqcUR+HOrgYVprJbBl5E2w63oI64J7k8mUDZLGhmAXs19ucVkxP8gKQu4ptCxbMy2TW3KAGI4u1P207ztH3CDx/7bL+Cdse8h1Zy5ev7Dp8uHD7blJuy0J69TV8XW6l92Dl3cbLG6g98idbhDgdANcY1ZY9o2N4mpNr96GRf1Da3Wui0RW69F1bWslvp81LD2xDTOGu9DhQzBc7AcYfYlkAqo6A6ozqHNBYJTESGitTGShsp0qQSxT4AcoPJQw0LBlEPhBFakHDjoLvY+XgVIyg7WK77tG8n9pvpHXBbXL+OMBd7FN6KLu+uf27esbX9RHdIkLbxvCGhgYsDb3v2a7obt7YHakpKmYiqgE2ioqJbzIOszXcSov/DAzRRNehyJKvPx4+igv/ZLKEaCkoZxUFMYXE1I8f7Xyq/UHp9CkAlfbCF3NdlhS7IQguA0N2wiJYy1ktC5IISb1Okr5jSYruy2SGlYkIkKLSC3yy/WrUWGzSnjaTUX/QEhYQuNewLCdwBFKRkpOuAfr4sBnwwfDg6B0MHagORhBHNqHw5WxTwYav6lAt/42MBLfrYZXHO9w3Ftr/B0Hp0pY+tkD29ddAz5ln8NGjddSlNPyhHV8aKjbzAS7Dd3egRcvgRHJWyrHASw9Pyp+vlSxEluH0jWAGQF9VVZMpxHVRZ/xSKQU4PR5Xy0+/sLQZCFS9DN/XKtSeh5WrL2x+sMyZv+W67+vwz5eC7oDx12rm9pakNg639B68XL3Qh+2Bm94DySxHhg0daBHSQhiCbyyyMS9SDi8RhEHyYP1qD9qak0S4VGn5VYrSTRKEkKHWYYiHuQmCYb/YKYLqS+3H5LYckxJmz6qhSYJ5yNgzgtuclESpncBfN8Fj3lgJdCSGpHcGECoxrouMoHjzO+4evLLMB1VKxJV8Wyj8Q80Ix043jnTu32hlTdkh08Yn7UWcnio9Qs3pzZm0lN7LCOxIdIZxbuQ1+lAVFFxJB7aMeUIiPkiPRPjo2v6dPF4FVjHnxi/oQK0Az/bymf5uI7ayGLj6eM63nrbF5VNXzV7nv3HViQL3JAEaSV1z0iBNJIgJBCYkSKJYbdjEiSHw7a0BI5s6QBBbINUswMUsQ6E11UojZGccA9dcZDBdQY+TgyFTgkiEKYyIBvstAQzIRk8cBJ+A2j4gZFDFWAqjAp3V5IhQYYwwUJ57ByS0QINzMYK8FyrRxt3KNbXb2qG/UVNT5wDyCt6/A0boGbdqzPA4tD21SPquWihPy1FWHjQzYs3xnZkM95ePIZd8RccBx1xez/UPowp46I4+uVcLD9/8Plq0Gfy6Jp+uez5uqPyY+UtNN5DuVQc06drpv4bIDXsjtsMpdkOSC79QK4Xog3PzwF4IBNCBiIhpBSpoE8jioqWaM2KCRuOqwLXgIQItKIe0lCYD/lZjoqgGIo0+J++SsmMKA8eqQ21qHuUh2PfzQHN6vgG6vVK8GfmQhcbr3Yff+AEi3rtdCtNF8u/eIWD2ATXx4Mg0XH1Vr/hm7sDQw8PvyvTrriKWocEE0C6oM/kJRJHrAykgj6WGlq+JUifu6YfS6pu4/UVa6AgQcXKi78ApekhcWFBwMstEkTX9MvVHw+Lt2ex+4+Pg62CxgsHEwZbAdgWIJfA+ICkfDRYtyAwWWB7Ay8F8VT/KB0bOJ4Gx/CQfUKSwZGrJJs8iZHYgB0zMB+zk8hopQ8hEcEog2ERASIBAOL5fIrVIKLxXKtzKPZLgZUckvGf+/nH5HsK0+Uz3316zeAjj3D23Lwu90w0ZwNpiZ72UnvwfO/AXIFnXfLBxLOsHn6yiLqmr3oQ04LHX9hq6TFHI6txrlYWkHj98UT1lh8vryR/rIKq6aO204drdP8hRWF3itmLUw42QnW1CSTSA2IAIXkWOBYKLWw8wjVqNkEaFqjFwLQNJhWI4ZiFoiq6QX0SbsEo6HMoWVFCYprwjw6FP65BXCSoXJwiOwpnFK9A6yiWkQhRDwA9XAfpwLS/AqnqSKP7jwapquiznXFXMn6x8Yg/X/HySvLHKqiaPlZfvf0H6BloAM/v3tpzHkJwUx59Uxb4GE5Lfnt2ZGS16SX3+F5mq4llfegtwnaSR6J5EC8hPUV6IDaS6aDnoZ5DpYe6AtdgOr4pyhXLNPH0KKCo/DDP7N+S+mI6qHzbQr7AbdgW+iylWn0l5cf6E29ftfSN6L9lGl04x30tOtMHklmLhxpClW9BL4S1T+i2uNPRp+0FflD0AN9A9LHnmHGBBfJCE3QL9ALiguoJqiu+64gDzWGIIAlhzhaSDsMV/yjJi3BxyY9khP9BXBSzEMY/AFORGMmM1yyKZfmm+ZKuJf4uMHV1THEj+o+S864E7zYd/8Dliqp2MamvPbt9uw4dY/M4DnXTuMuXx/scK9iHLcbryzfKwvOJBSGNPl10Tb8WV0xYyMFymDdXXv46Kq+ueChJQI4WlSUqf8StOf5CNdXqr9afxe8/Gm6AoLAqGKyCGLSG350ACFzKM2FvaeOseEhFOsjItdQ2S6wYYmkOdl2+CfLBvmpIV55vYY2Qn6uAxAWC40zbhxSmWArcQj0TSIiSU37mx0kgVesgLereOSz8E5EWJa6Qzyh1hZEcO7xY4Ct9WLfNvwa+5xA2h6uGP6vMPxMsZ8WNf0Gf+cOCw9usq51a5+kNG9Sn1IjJsjoO0LI7EpVra/vxhPdFs7JyjYriohlbTAKGxO1C6oJEljseOLqmTxfPX66OucJK66OUNzuDjK7p05UIbGwX25I/vrj4BYrnD0uZ/Rtvfzz9fPsPIkgkbL0DZNMFRVEHFEY2ZCBTcwMLdfCsCCVN4SwpE9YG+ARNgD24IDHYSYB1yNCYDkLRFoC8oOUG40AKQx5IYyAmlQ6SF7dDoSof0hbJiApzqLs43aPc5UG+AvVQ/4T7nGQFQiJ5kdbAkmgH2Sz0FaWB4gLrad22v4nmuvPt/yzCc1+V4t0e4z93r8PYwDCvNANxLSthkai0jmCf5+jq6y6Y4SkjTfoKprgWufj9Dg3AozBmiK7pl3H8WDH3u0YfLY6u6c/HVS2vSvsxoygyTF2q/qNenEyjJ5NJPYGPRidME1M1/JYqwyoNq32Ihu4J0z5M+WA2DoqwEI9wfmEaEhQJzPNsKNOh0jJwrfRVJqbnNOrC6IGwQFzgHiKrpCuq2kE+FizrMXWE7IWCEKemg7hSiimOQchNIC3EchqpHlBO95TshQThkwF5TL9k+Mm/MZLGzVo3AlQdLzagDle1vCYd/wU9/5Z5ZcyZPnNow/J8ZHZZCGtsbKw3rdn7nIzTx42o0WfP1cPKuYJ6XPFs5q7p8zmKx5v8cdcxDeMPOR1fj+gh4X10TV/dukiC+nJPeLy8eH1hrtm/UVvpKxcrP2oL/dlcs1eQ9PCeo73wGcp+R2Xyvlp74vH19B9EkoA2CYKUlcQqJCQj6vkoyBjh/IurcJiy4Zxy2FMptRBO7sK3kClR0UYUZAX+wMqfC1ICiYHMYBsKSQsSFKaAUEqZLoiK00ASFsgpN0UEUWE6yOkiiArE6NmUb91OWwAAEuNJREFUszCNxA0c/uBoF04W86YOarWQAYjGmHBBEIkUiXEqib025hNmInWknv6zKo77Sh3/RvcfSx5Xl4O4yr5Y7NxiuEEQFT4uvs8yrF5VvosX28LLS185vsiRHkc9YPiJtrCbJIzHyx3gJdfpl80flZWPR6qIxJghus7xjSqj4E9UNn2VvN76Csqq6XIR+48OYEeGlcAaXhLfQwxNQcgQEI9IErOOxBUuCuDLz9Arm5iyOTaYy7Jty8hAb2VCm43ZmwnwQTbgFpAWyA4SGEKhaMdgYNpngKAcpeMCAfFjYGE4yAqco3RZ0LorUqOkxVkf6AgzvFBPFbISSsOUD+WRrWijpcwbmI4Gomj4yxAIv4bPVU+q9sfxk/EP36UlfP49N3vNWr/m9CZdX/zzjDDofAoW3XHVr9NPHdB8p2+uORl/mjFLUktMbBTtkSJbpLCRxYyD5OpJps/4+DJuvq5IIgoLqfi3pLzcRuloM7QSzKImsBSWG80LVKkxkSvOkFHaCjL5QvrPN9rwvaSVtEg2ICmQCNRQkGjwnlOpNktMxdds+GxcRFrIyCmhTQMEUJjl4qwtzPbAOVC8o0DUZroGiMmBpEUfRBZ4DvRUJC4/1GOpij1ML9XU0PJdFxIZGsOpJkkOQ0YdFh5CPodKl0WfRqQkVUhTIEf1iN4GkdJU4Rx/xsJfHkpfMv4cd+IAUJb1+YdkfSU7NXp6+/bti7qquKiEdfVq0Gl2TO2DonYzAcUTCv0slCB8FuGia/q8j7iAPl30aNIPHVKq55w+00MvjFLo05WmV8H5P9XLzydVF/H0xbGl9UGfjm226B98po2u6fO+0f3H9M7SbT1h+FoS00ybSmm+5/RZHxzbwWvVHtSvNuLRR4BKl0vPtHRhWh1SESUsNBkH0qjvNiAx4MA1JDBc4yBmTPmwJArJCFM+dA1SE5XsmFIqRTzKUrZYkMio78IUkauFoW6Mcbin1GWrOR8nqOEUEUQFmuK3ZdEw6NFg92s9j3XLp0CIsAuS8VdPkcKhCZ9/KAc81x/c3NdzFjy6KHZc0YPNh7VhDg9jYnh4co9n2dvx1nLalys7Rimx2xLGigfEJBQ0Xr149FkBVb04BQiTlPAFbTiDxRGKM1pJf5AgarPKG0sQu413N07hkCANO5m0fSebtCwziW5DqMISHTRMJCDF23inYbmsauNCHq+Vn1ta5dErzKN8psP/RiIXVpAegKJQ30Y06AQSEXdAIpdL0wbTNsLpoSIeCwRJHZYBpTusIFAIlPC0iqL5AxoCcmLPQkkLdITRCc0dSFqQD1A51g4pLOXmhZCwDMO2BpH9q6ZtDoU4oKQIy5yEynFnv+mzw+0+/q3Sf5yT4aYs89zq1alLIK7wYeQANcCpgW5AOaqIARzxcudrXrMTz+cuFAxBI1Rw06eLKz3xsnDikt+Mmr9mWBlXrbySeJAlTt8MXJImXHRNv0zx2GpWZ3r0KKqzXHlRHH26+fQf+mkbg56ADjppUuihMJl7BEhGtmnj+4Phj1lEUAzjaQcgJkzcqPPmlI/yjdJV8Trf/+hbeYyP0uMS0zSVF8SEaSELxkhR6a7IC1IVHkNMBWEkCljxYQ7YXgWKrDCHw2ohJDDKSkr5Tst3TANBp7DdgkTFKSOpxYMtV2i3hXQoJjwbBo3L4oibAajdXmSbCl01PEvi6x3PetMvwfi3cv+xHpPRk8GZvo6Oq5y5FvZlvtfqQZ5v5igfH7iRdHqrn/H24McyEb6ejCUxkCwqEATi8JDNKtWRIxI6wrLj+aOyQgIqLT/KTZ+OLYnCFGHE60PdSgzIgVmcfrbt5evjYkB97VeNyv8plx/UYoChElhYgB7KtD3PAUWRpejIVNzNAjNzyDuYRqnrMF5dIx4CkTrlAJQRps2FhZIX5lqYwfFLOygTBeSmkUhDEgNvIC7MR5ML6JhozoCpn+858G1utbH4j7BRT0Z9VlZzbTyOKJCKeCjkqYbkFBJh+DXCPVcKuXKIFURlm8WBoZSFOBCYmk6i33ioT+Kw1CegEMspcFfe+M8+rRySNum/YUwm9I7TPT04NWOBDg/nwtz16xMbEp3mPswIOuI6G7wBSlynz1pQWZEIP0smIcEEWN3QsfJDn+nj9FFSPh73wilgdE2f+eOumo4pPqWI2kI/LKu4RVXLq7H/kJopRUFhnkj4joNT9KC/BlZgAIVD1I+cwASVUBgCIsF1KEQxJLpGPKHGP5LYrAs5ikREnmJ61KF4K5cG1+REVS6HC1JauGroYYcOrLWUEp6MSF0UpoZgK5hV2dgEzeNLYbMBnRQZEUPnOwGMT6GOp57Kg/0WTCMYjnsQHpDmlJFTR5IcNt/alvV1PdF5NsKcLSpGG03L6QcjnWDpeIXqgFYb//A9wGi1+fMPDeqY7nae6uvT530KKp+JebkhHJyX6Fqz33X83tCgRr1d6gXBH+XnFtEwDmEVMBfAtbK7UvHxVTb1gGLQokbFVBZMDtUJHmT+dsPxmqSRU2nkrxkWxhfbOfEVwLov4sIaonSRr1qZy6vy8xliPbn+qPjYHxSm6mJwdB357DfaVtJ/BMLeW0/ayVQSR6TA5AB7h8kwmFeRrFBUSFYkJk7GsM+F5SuiCQmFBEriCskHYcxfEM9ozBjBS/yaKD//rBzndjD3BHswAcmqwFdhOWGugCw5owwpEt9sxMlVGWQEK4GlcAOi1XAcL6eLICfdcMFmNDnH7xdO/YTCHTkxM2B6EiSPbuXmHrZO5eJy4Iu6lfo2Gu8orFfA+PM9UMjnHpBIx9v+/Q9Wm8nMfcMTE1d7u7vP4Ec6fzy1wqOGP3xI63JHjgT2/rsy/boTbMP0pe78dVUWS5wjK0VUjIqNN3kA62ZYeIcfxofXDFNFUZBTT4W6m71mWBlXrb4yWSoEYWh0jVIUdJEmzA6o18mRDN7dCplCEkK8IiP4WRAU9OO8j5wimZB3SAhKYlJEphLkJCaSEP7PEdxsfVG5UWFxP6qPPngTlvBED6IWLN8dTPmg8ocFPPRXWBdlFWqqCEmLlhAgLRtKdLaAkpQNfRUM6DUQGOUiTimNEaT7FvRVw/F6K91XG4/mHf9KPaovvJ36jzfSS1mpc6mUdhnvhZL4a0GjZsKBKK+n0+kt0AHvztCAsIzjeeAeUKVPF1l101cBWCICxcGmcPalUeHRnyguIsJYej79fFnpKxdjrKhu+spVK69Ke+OW6SXlh7Xk/8b7D5umJKY6nUiQAEmp5ZKoD5Ay8kTFzcAsJIrL+ZREYCWAaU4ubXRNP8wfpuSuGubHMwCJhSuGPCiYJIMw5GV6xkfY0Wd+WoPiBAlEhvnzNluw3SKZYTkQHIQ5J1RQDg7Lw/QQGUIdFp4wcC9KgQ/7KkxjucEHROVmc3ZaCFfEjMxUvlPvBZ0WhT1Q1zG06hQKyGPA9qEh4bPRJuO/0p//WvoPyXpa77BPr9L1mn64QiJRT0vlP3jg1oyn0/th1dnN6VOkQyh8wVRuPpLUH9GHi+sckD4vLaj43NSHLwfv8cKjbGxdgc97JUpFpIRbpovKYHTUltkpHYkyEqNYf1gWfZU+Vn+JiMZERS4qKyTAMv1hmwoItLT/aL6OL9cn8A4mknhDkR5CUuh43ExhAXjnIQVxRQ9UwnU1JM73meHISINzlY/1Ir3jwNQBtui5IpU3K2mFZbEUEhgJiHlZhkqI8rws7hPFxBHlZ5romu1CGRSv2HyQEQiLPkwefJcSk2o0mU+F8Z46KswbKd8qvRUWiq7BsuoYlF/q+Jd839p4/KNnFHhw+Fbc819r/y3dHO7qsk9D2lLPBvEq59SLXC6CYSCq1OTk5F48g+FxLyQSvvyzhFK8taaYL1ACiYdkkSOg/HVO4irmAySLlR8+yHy5wnaWysTF7YmnRxdyecMXFDcxx3KjNCUEGUtb2r4Iixwh5qebxEG58v2Hkh0ERqlLp5kClNLkngLSyF8XExrZi089SYbFm9DRg1FCbEKyoxQE8sqFkTOgTwrDVIPCP/k8qpRcGrxMEXmxnpwjUeXbhjpgA2bBNsp0HPQWOiwNOnddw5YcNIdSFyzTlUKehEbrLDxDNn7osjCXPw5FO22qgPfKHn/pf8XxxxetvSvYlX8BxBVKCdGDmPPDhz0W+Oijjxof//jHt+Hh2oko/qKqFx4l0BJQmQIwS3RNn/fxZXqGFbq4nQzimI9tKFs+S1S1KJ9XoQkEfUQwtKg98fSzefMMwmx5F28/IqK2RLjM2b54/gX0H0v6+IiDZSVgHJogfYWNzDMUpCtsUkKg4pKIUJAsnNTlkjNWzfBCPMOhi8JAiCSqPBmyMFVQ1OdctQwLywNZ5cPCpDl80D6IhjzBASQF0sUeREpSJCyE4ceSpJXbEO2612AHepaTSRn/YrtEAD3n8xV/ntv4+S96nyGRO9gccQZmEPiBK3bRi5kPHcG+v2T32n2+53bxNY8oQyWIB0SR9OmqxMeTh5lm/8azx8srEbCQNSqTpUTX+eagwCiPqiWeQAXO/olHV2tPaYUFjWCxsQJjt7MV564K6iOB2Xj1adNGa3PqDMFl4XwSSnAQCUIibqFPlwtTwbiOkoSR+JvLx3KYv9BXaSrlLyifSegQBNMFTAWhiIeFArRZnoX+8Y2EzKhbnuNlYO9wFpZXkwoH5Kmj/6qOFTz+0n8+Y4Y/2pVIcJqY35+YJ6wjEN33ZzL9kPY3hWjx6Sv+RcByLIQAZZYQJSn2C944FRF/QkvjQ31XZDcV04GVPOGl+WdJEhVGbaNPV3d7Va7ZP83U/1ACgzTjkg4gjUFvHhGWkrPAPnnBLNeFSEKKfAbzOu9yBAUdVj6cZURpZuU3XOUILioD93x2IEnxxFGc9c6M+M93cHSNZVzHquBQDeMn4x898wQ2us7pgGvAbyU8/z5e5EupVEqtJirCgp4KHxVI7sbrQIYKHyKF3+yvIvEEX8FsQNk9qXwgBpgQwNo7p9OKrukzfdzF08+WTmYrV35YF+tU8bEpYImInGtLVH+8PkzZ8iQcVpjrawXCLOHH5uo/9JmWjbXHJMQcNhVW8bOklbsumnJw7Q+cgtVK2mJxAUNNKKncp54KHuzAwnjCE01B1UIHA1A80ik/IkdIfTj6mE8MXh2sSKZhdHUd+IcDykwFLj4eMv7Fv+il75c8/xEmeHaojD+jZ4LgbsPVVvO5iutg4oSAFCCiAqVp/jrUKRU8mzVexsube05ff3tiD0Q1wkP/ojrYgeiaftiheHsjLKL4GrudTxYvb0H9h94bpzeAwCD4cAqJf5SmlBjFH5D8ChVC1Q8KyIkrjtgbE64y4lqtINJHel5Hq4q4ZdsYzsWBWaU+rkFWtFzQbiNNnWciNbT/qD4+Hitq/FdE/3mWzmvQU+W4hZZPenQuRHRNfylcvfVjpUqz0Tj6dNE1/fm4euufTx1z5am3/hr6z6lj9A9ElneKwPJ3IYEVEpqKys0YFeUhoDBP4TV/+bjVIkfqKuu8/ixC/+tqR73111V4DYnrrb+G8a+h1tkk9dY/m7MxV7XUzwdP3ApBgCYG6Co+L6/+kcB4X0g0ERFFzwXjojBc5q8ZhqOKtWEoROmLEwSWBIHowVySyqSS5kIABEYhisRFEov8SgRWGD6K9OMgq8IwBIkTBBYXASGsxcW3pUoHgfF5iIiLPv9x+03kuLxMqaqsUj1KJL4gsFgICGEtFrJtUG6OwDhtJHHhqLOl+dBAG0AnXRAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBAFBQBAQBAQBQUAQEAQEAUFAEBAEBIGVhMD/D0fV/fpMMM+gAAAAAElFTkSuQmCC"
    }
  };
  const NoticeBar = {
    // noticeBar
    noticeBar: {
      text: [],
      direction: "row",
      step: false,
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      speed: 80,
      fontSize: 14,
      duration: 2e3,
      disableTouch: true,
      url: "",
      linkType: "navigateTo"
    }
  };
  const Notify = {
    // notify组件
    notify: {
      top: 0,
      type: "primary",
      color: "#ffffff",
      bgColor: "",
      message: "",
      duration: 3e3,
      fontSize: 15,
      safeAreaInsetTop: false
    }
  };
  const NumberBox = {
    // 步进器组件
    numberBox: {
      name: "",
      value: 0,
      min: 1,
      max: Number.MAX_SAFE_INTEGER,
      step: 1,
      integer: false,
      disabled: false,
      disabledInput: false,
      asyncChange: false,
      inputWidth: 35,
      showMinus: true,
      showPlus: true,
      decimalLength: null,
      longPress: true,
      color: "#323233",
      buttonSize: 30,
      bgColor: "#EBECEE",
      cursorSpacing: 100,
      disableMinus: false,
      disablePlus: false,
      iconStyle: ""
    }
  };
  const NumberKeyboard = {
    // 数字键盘
    numberKeyboard: {
      mode: "number",
      dotDisabled: false,
      random: false
    }
  };
  const Overlay = {
    // overlay组件
    overlay: {
      show: false,
      zIndex: 10070,
      duration: 300,
      opacity: 0.5
    }
  };
  const Parse = {
    // parse
    parse: {
      copyLink: true,
      errorImg: "",
      lazyLoad: false,
      loadingImg: "",
      pauseVideo: true,
      previewImg: true,
      setTitle: true,
      showImgMenu: true
    }
  };
  const Picker = {
    // picker
    picker: {
      show: false,
      popupMode: "bottom",
      showToolbar: true,
      title: "",
      columns: [],
      loading: false,
      itemHeight: 44,
      cancelText: "取消",
      confirmText: "确定",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      visibleItemCount: 5,
      keyName: "text",
      closeOnClickOverlay: false,
      defaultIndex: [],
      immediateChange: true
    }
  };
  const Popup = {
    // popup组件
    popup: {
      show: false,
      overlay: true,
      mode: "bottom",
      duration: 300,
      closeable: false,
      overlayStyle: {},
      closeOnClickOverlay: true,
      zIndex: 10075,
      safeAreaInsetBottom: true,
      safeAreaInsetTop: false,
      closeIconPos: "top-right",
      round: 0,
      zoom: true,
      bgColor: "",
      overlayOpacity: 0.5
    }
  };
  const Radio = {
    // radio组件
    radio: {
      name: "",
      shape: "",
      disabled: "",
      labelDisabled: "",
      activeColor: "",
      inactiveColor: "",
      iconSize: "",
      labelSize: "",
      label: "",
      labelColor: "",
      size: "",
      iconColor: "",
      placement: ""
    }
  };
  const RadioGroup = {
    // radio-group组件
    radioGroup: {
      value: "",
      disabled: false,
      shape: "circle",
      activeColor: "#2979ff",
      inactiveColor: "#c8c9cc",
      name: "",
      size: 18,
      placement: "row",
      label: "",
      labelColor: "#303133",
      labelSize: 14,
      labelDisabled: false,
      iconColor: "#ffffff",
      iconSize: 12,
      borderBottom: false,
      iconPlacement: "left"
    }
  };
  const Rate = {
    // rate组件
    rate: {
      value: 1,
      count: 5,
      disabled: false,
      size: 18,
      inactiveColor: "#b2b2b2",
      activeColor: "#FA3534",
      gutter: 4,
      minCount: 1,
      allowHalf: false,
      activeIcon: "star-fill",
      inactiveIcon: "star",
      touchable: true
    }
  };
  const ReadMore = {
    // readMore
    readMore: {
      showHeight: 400,
      toggle: false,
      closeText: "展开阅读全文",
      openText: "收起",
      color: "#2979ff",
      fontSize: 14,
      textIndent: "2em",
      name: ""
    }
  };
  const Row = {
    // row
    row: {
      gutter: 0,
      justify: "start",
      align: "center"
    }
  };
  const RowNotice = {
    // rowNotice
    rowNotice: {
      text: "",
      icon: "volume",
      mode: "",
      color: "#f9ae3d",
      bgColor: "#fdf6ec",
      fontSize: 14,
      speed: 80
    }
  };
  const ScrollList = {
    // scrollList
    scrollList: {
      indicatorWidth: 50,
      indicatorBarWidth: 20,
      indicator: true,
      indicatorColor: "#f2f2f2",
      indicatorActiveColor: "#3c9cff",
      indicatorStyle: ""
    }
  };
  const Search = {
    // search
    search: {
      shape: "round",
      bgColor: "#f2f2f2",
      placeholder: "请输入关键字",
      clearabled: true,
      focus: false,
      showAction: true,
      actionStyle: {},
      actionText: "搜索",
      inputAlign: "left",
      inputStyle: {},
      disabled: false,
      borderColor: "transparent",
      searchIconColor: "#909399",
      searchIconSize: 22,
      color: "#606266",
      placeholderColor: "#909399",
      searchIcon: "search",
      margin: "0",
      animation: false,
      value: "",
      maxlength: "-1",
      height: 32,
      label: null
    }
  };
  const Section = {
    // u-section组件
    section: {
      title: "",
      subTitle: "更多",
      right: true,
      fontSize: 15,
      bold: true,
      color: "#303133",
      subColor: "#909399",
      showLine: true,
      lineColor: "",
      arrow: true
    }
  };
  const Skeleton = {
    // skeleton
    skeleton: {
      loading: true,
      animate: true,
      rows: 0,
      rowsWidth: "100%",
      rowsHeight: 18,
      title: true,
      titleWidth: "50%",
      titleHeight: 18,
      avatar: false,
      avatarSize: 32,
      avatarShape: "circle"
    }
  };
  const Slider = {
    // slider组件
    slider: {
      value: 0,
      blockSize: 18,
      min: 0,
      max: 100,
      step: 1,
      activeColor: "#2979ff",
      inactiveColor: "#c0c4cc",
      blockColor: "#ffffff",
      showValue: false,
      disabled: false,
      blockStyle: {}
    }
  };
  const StatusBar = {
    // statusBar
    statusBar: {
      bgColor: "transparent"
    }
  };
  const Steps = {
    // steps组件
    steps: {
      direction: "row",
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#969799",
      activeIcon: "",
      inactiveIcon: "",
      dot: false
    }
  };
  const StepsItem = {
    // steps-item组件
    stepsItem: {
      title: "",
      desc: "",
      iconSize: 17,
      error: false
    }
  };
  const Sticky = {
    // sticky组件
    sticky: {
      offsetTop: 0,
      customNavHeight: 0,
      disabled: false,
      bgColor: "transparent",
      zIndex: "",
      index: ""
    }
  };
  const Subsection = {
    // subsection组件
    subsection: {
      list: [],
      current: 0,
      activeColor: "#3c9cff",
      inactiveColor: "#303133",
      mode: "button",
      fontSize: 12,
      bold: true,
      bgColor: "#eeeeef",
      keyName: "name"
    }
  };
  const SwipeAction = {
    // swipe-action组件
    swipeAction: {
      autoClose: true
    }
  };
  const SwipeActionItem = {
    // swipeActionItem 组件
    swipeActionItem: {
      show: false,
      name: "",
      disabled: false,
      threshold: 20,
      autoClose: true,
      options: [],
      duration: 300
    }
  };
  const Swiper = {
    // swiper 组件
    swiper: {
      list: [],
      indicator: false,
      indicatorActiveColor: "#FFFFFF",
      indicatorInactiveColor: "rgba(255, 255, 255, 0.35)",
      indicatorStyle: "",
      indicatorMode: "line",
      autoplay: true,
      current: 0,
      currentItemId: "",
      interval: 3e3,
      duration: 300,
      circular: false,
      previousMargin: 0,
      nextMargin: 0,
      acceleration: false,
      displayMultipleItems: 1,
      easingFunction: "default",
      keyName: "url",
      imgMode: "aspectFill",
      height: 130,
      bgColor: "#f3f4f6",
      radius: 4,
      loading: false,
      showTitle: false
    }
  };
  const SwipterIndicator = {
    // swiperIndicator 组件
    swiperIndicator: {
      length: 0,
      current: 0,
      indicatorActiveColor: "",
      indicatorInactiveColor: "",
      indicatorMode: "line"
    }
  };
  const Switch = {
    // switch
    switch: {
      loading: false,
      disabled: false,
      size: 25,
      activeColor: "#2979ff",
      inactiveColor: "#ffffff",
      value: false,
      activeValue: true,
      inactiveValue: false,
      asyncChange: false,
      space: 0
    }
  };
  const Tabbar = {
    // tabbar
    tabbar: {
      value: null,
      safeAreaInsetBottom: true,
      border: true,
      zIndex: 1,
      activeColor: "#1989fa",
      inactiveColor: "#7d7e80",
      fixed: true,
      placeholder: true
    }
  };
  const TabbarItem = {
    //
    tabbarItem: {
      name: null,
      icon: "",
      badge: null,
      dot: false,
      text: "",
      badgeStyle: "top: 6px;right:2px;"
    }
  };
  const Tabs = {
    //
    tabs: {
      duration: 300,
      list: [],
      lineColor: "#3c9cff",
      activeStyle: {
        color: "#303133"
      },
      inactiveStyle: {
        color: "#606266"
      },
      lineWidth: 20,
      lineHeight: 3,
      lineBgSize: "cover",
      itemStyle: {
        height: "44px"
      },
      scrollable: true,
      current: 0,
      keyName: "name"
    }
  };
  const Tag = {
    // tag 组件
    tag: {
      type: "primary",
      disabled: false,
      size: "medium",
      shape: "square",
      text: "",
      bgColor: "",
      color: "",
      borderColor: "",
      closeColor: "#C6C7CB",
      name: "",
      plainFill: false,
      plain: false,
      closable: false,
      show: true,
      icon: "",
      iconColor: ""
    }
  };
  const Text = {
    // text 组件
    text: {
      type: "",
      show: true,
      text: "",
      prefixIcon: "",
      suffixIcon: "",
      mode: "",
      href: "",
      format: "",
      call: false,
      openType: "",
      bold: false,
      block: false,
      lines: "",
      color: "#303133",
      size: 15,
      iconStyle: {
        fontSize: "15px"
      },
      decoration: "none",
      margin: 0,
      lineHeight: "",
      align: "left",
      wordWrap: "normal"
    }
  };
  const Textarea = {
    // textarea 组件
    textarea: {
      value: "",
      placeholder: "",
      placeholderClass: "textarea-placeholder",
      placeholderStyle: "color: #c0c4cc",
      height: 70,
      confirmType: "done",
      disabled: false,
      count: false,
      focus: false,
      autoHeight: false,
      fixed: false,
      cursorSpacing: 0,
      cursor: "",
      showConfirmBar: true,
      selectionStart: -1,
      selectionEnd: -1,
      adjustPosition: true,
      disableDefaultPadding: false,
      holdKeyboard: false,
      maxlength: 140,
      border: "surround",
      formatter: null
    }
  };
  const Toast = {
    // toast组件
    toast: {
      zIndex: 10090,
      loading: false,
      text: "",
      icon: "",
      type: "",
      loadingMode: "",
      show: "",
      overlay: false,
      position: "center",
      params: {},
      duration: 2e3,
      isTab: false,
      url: "",
      callback: null,
      back: false
    }
  };
  const Toolbar = {
    // toolbar 组件
    toolbar: {
      show: true,
      cancelText: "取消",
      confirmText: "确认",
      cancelColor: "#909193",
      confirmColor: "#3c9cff",
      title: ""
    }
  };
  const Tooltip = {
    // tooltip 组件
    tooltip: {
      text: "",
      copyText: "",
      size: 14,
      color: "#606266",
      bgColor: "transparent",
      direction: "top",
      zIndex: 10071,
      showCopy: true,
      buttons: [],
      overlay: true,
      showToast: true
    }
  };
  const Transition = {
    // transition动画组件的props
    transition: {
      show: false,
      mode: "fade",
      duration: "300",
      timingFunction: "ease-out"
    }
  };
  const Upload = {
    // upload组件
    upload: {
      accept: "image",
      extension: [],
      capture: ["album", "camera"],
      compressed: true,
      camera: "back",
      maxDuration: 60,
      uploadIcon: "camera-fill",
      uploadIconColor: "#D3D4D6",
      useBeforeRead: false,
      previewFullImage: true,
      maxCount: 52,
      disabled: false,
      imageMode: "aspectFill",
      name: "",
      sizeType: ["original", "compressed"],
      multiple: false,
      deletable: true,
      maxSize: Number.MAX_VALUE,
      fileList: [],
      uploadText: "",
      width: 80,
      height: 80,
      previewImage: true
    }
  };
  const props$4 = {
    ...ActionSheet,
    ...Album,
    ...Alert,
    ...Avatar,
    ...AvatarGroup,
    ...Backtop,
    ...Badge,
    ...Button,
    ...Calendar,
    ...CarKeyboard,
    ...Cell,
    ...CellGroup,
    ...Checkbox,
    ...CheckboxGroup,
    ...CircleProgress,
    ...Code,
    ...CodeInput,
    ...Col,
    ...Collapse,
    ...CollapseItem,
    ...ColumnNotice,
    ...CountDown,
    ...CountTo,
    ...DatetimePicker,
    ...Divider,
    ...Empty,
    ...Form,
    ...GormItem,
    ...Gap,
    ...Grid,
    ...GridItem,
    ...Icon,
    ...Image,
    ...IndexAnchor,
    ...IndexList,
    ...Input,
    ...Keyboard,
    ...Line,
    ...LineProgress,
    ...Link,
    ...List,
    ...ListItem,
    ...LoadingIcon,
    ...LoadingPage,
    ...Loadmore,
    ...Modal,
    ...Navbar,
    ...NoNetwork,
    ...NoticeBar,
    ...Notify,
    ...NumberBox,
    ...NumberKeyboard,
    ...Overlay,
    ...Parse,
    ...Picker,
    ...Popup,
    ...Radio,
    ...RadioGroup,
    ...Rate,
    ...ReadMore,
    ...Row,
    ...RowNotice,
    ...ScrollList,
    ...Search,
    ...Section,
    ...Skeleton,
    ...Slider,
    ...StatusBar,
    ...Steps,
    ...StepsItem,
    ...Sticky,
    ...Subsection,
    ...SwipeAction,
    ...SwipeActionItem,
    ...Swiper,
    ...SwipterIndicator,
    ...Switch,
    ...Tabbar,
    ...TabbarItem,
    ...Tabs,
    ...Tag,
    ...Text,
    ...Textarea,
    ...Toast,
    ...Toolbar,
    ...Tooltip,
    ...Transition,
    ...Upload
  };
  const props$3 = defineMixin({
    props: {
      // 列表锚点文本内容
      text: {
        type: [String, Number],
        default: () => props$4.indexAnchor.text
      },
      // 列表锚点文字颜色
      color: {
        type: String,
        default: () => props$4.indexAnchor.color
      },
      // 列表锚点文字大小，单位默认px
      size: {
        type: [String, Number],
        default: () => props$4.indexAnchor.size
      },
      // 列表锚点背景颜色
      bgColor: {
        type: String,
        default: () => props$4.indexAnchor.bgColor
      },
      // 列表锚点高度，单位默认px
      height: {
        type: [String, Number],
        default: () => props$4.indexAnchor.height
      }
    }
  });
  const mpMixin = defineMixin({});
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1[23456789]\d{9}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date$1(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
      value
    );
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  const test = {
    email,
    mobile,
    url,
    date: date$1,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty,
    isEmpty: empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string
  };
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/uview-plus/libs/function/digit.js:45", `${num} 超出了精度限制，结果可能不正确`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    if (typeof customStyle === "object") {
      customStyle.forEach((val, i) => {
        const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
        string2 += `${key}:${val};`;
      });
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = "") {
    if (!unit) {
      unit = config.unit || "px";
    }
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj) {
    if ([null, void 0, NaN, false].includes(obj))
      return obj;
    if (typeof obj !== "object" && typeof obj !== "function") {
      return obj;
    }
    const o = array(obj) ? [] : {};
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i];
      }
    }
    return o;
  }
  function deepMerge$1(targetOrigin = {}, source = {}) {
    let target = deepClone(targetOrigin);
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (source[prop] == null) {
          target[prop] = source[prop];
        } else if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = deepMerge$1(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function shallowMerge(target, source = {}) {
    if (typeof target !== "object" || typeof source !== "object")
      return false;
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      if (prop in target) {
        if (source[prop] == null) {
          target[prop] = source[prop];
        } else if (typeof target[prop] !== "object") {
          target[prop] = source[prop];
        } else if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else if (target[prop].concat && source[prop].concat) {
          target[prop] = target[prop].concat(source[prop]);
        } else {
          target[prop] = shallowMerge(target[prop], source[prop]);
        }
      } else {
        target[prop] = source[prop];
      }
    }
    return target;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uview-plus/libs/function/index.js:275", `uView提示：${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError(
          "fillString must be String"
        );
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = /* @__PURE__ */ new Date();
    } else if (/^\d{10}$/.test(dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else {
      date2 = new Date(
        typeof dateTime === "string" ? dateTime.replace(/-/g, "/") : dateTime
      );
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      // 年
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      // 月
      "d": date2.getDate().toString().padStart(2, "0"),
      // 日
      "h": date2.getHours().toString().padStart(2, "0"),
      // 时
      "M": date2.getMinutes().toString().padStart(2, "0"),
      // 分
      "s": date2.getSeconds().toString().padStart(2, "0")
      // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(/* @__PURE__ */ new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = (/* @__PURE__ */ new Date()).getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "刚刚";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}分钟前`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}小时前`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}天前`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}个月前`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}年前`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "u-form-item");
    const form = $parent.call(instance, "u-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (typeof obj !== "object" || null == obj) {
      return "";
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (typeof obj !== "object" || null == obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    const pages2 = getCurrentPages();
    return `/${pages2[pages2.length - 1].route || ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  const index = {
    range,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge: deepMerge$1,
    shallowMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages
    // setConfig
  };
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        // navigateBack页面后退时,回退的层数
        params: {},
        // 传递的参数
        animationType: "pop-in",
        // 窗口动画,只在APP有效
        animationDuration: 300,
        // 窗口动画持续时间,单位毫秒,只在APP有效
        intercept: false
        // 是否需要拦截
      };
      this.route = this.route.bind(this);
    }
    // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    // 整合路由参数
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    // 对外的方法名称
    async route(options = {}, params = {}) {
      let mergeConfig2 = {};
      if (typeof options === "string") {
        mergeConfig2.url = this.mixinParam(options, params);
        mergeConfig2.type = "navigateTo";
      } else {
        mergeConfig2 = deepMerge$1(this.config, options);
        mergeConfig2.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig2.url === page())
        return;
      if (params.intercept) {
        this.config.intercept = params.intercept;
      }
      mergeConfig2.params = params;
      mergeConfig2 = deepMerge$1(this.config, mergeConfig2);
      if (typeof uni.$u.routeIntercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          uni.$u.routeIntercept(mergeConfig2, resolve);
        });
        isNext && this.openPage(mergeConfig2);
      } else {
        this.openPage(mergeConfig2);
      }
    }
    // 执行路由跳转
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  const route = new Router().route;
  const mixin = defineMixin({
    // 定义每个组件都可能需要用到的外部样式以及类名
    props: {
      // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      // 跳转的页面路径
      url: {
        type: String,
        default: ""
      },
      // 页面跳转的类型
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$u.getRect = this.$uGetRect;
    },
    created() {
      this.$u.getRect = this.$uGetRect;
    },
    computed: {
      // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
      // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
      // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
      $u() {
        return deepMerge$1(uni.$u, {
          props: void 0,
          http: void 0,
          mixin: void 0
        });
      },
      /**
       * 生成bem规则类名
       * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
       * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
       * @param {String} name 组件名称
       * @param {Array} fixed 一直会存在的类名
       * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
       * @returns {Array|string}
       */
      bem() {
        return function(name, fixed, change) {
          const prefix = `u-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      // 跳转某一个页面
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          route({ type: this.linkType, url: url2 });
        }
      },
      // 查询节点信息
      // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
      // 解决办法为在组件根部再套一个没有任何作用的view元素
      $uGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = $parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      // 阻止事件冒泡
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      // 空操作
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uOnReachBottom");
    },
    beforeUnmount() {
      if (this.parent && test.array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  });
  const _sfc_main$E = {
    name: "u-index-anchor",
    mixins: [mpMixin, mixin, props$3],
    data() {
      return {};
    },
    mounted() {
      this.init();
    },
    methods: {
      addUnit,
      init() {
        const indexList2 = $parent.call(this, "u-index-list");
        if (!indexList2) {
          return error("u-index-anchor必须要搭配u-index-list组件使用");
        }
        indexList2.anchors.push(this);
        const indexListItem = $parent.call(this, "u-index-item");
        if (!indexListItem) {
          return error("u-index-anchor必须要搭配u-index-item组件使用");
        }
        indexListItem.id = this.text.charCodeAt(0);
      }
    }
  };
  function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "u-index-anchor u-border-bottom",
        ref: `u-index-anchor-${_ctx.text}`,
        style: vue.normalizeStyle({
          height: $options.addUnit(_ctx.height),
          backgroundColor: _ctx.bgColor
        })
      },
      [
        vue.createElementVNode(
          "text",
          {
            class: "u-index-anchor__text",
            style: vue.normalizeStyle({
              fontSize: $options.addUnit(_ctx.size),
              color: _ctx.color
            })
          },
          vue.toDisplayString(_ctx.text),
          5
          /* TEXT, STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$D], ["__scopeId", "data-v-20d39374"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uview-plus/components/u-index-anchor/u-index-anchor.vue"]]);
  const _imports_0 = "/static/image/online_web.png";
  const _imports_1 = "/static/image/online_app.png";
  const _sfc_main$D = {
    name: "frined-item",
    data() {
      return {};
    },
    methods: {
      showFriendInfo() {
        uni.navigateTo({
          url: "/pages/common/user-info?id=" + this.friend.id
        });
      }
    },
    props: {
      friend: {
        type: Object
      }
    }
  };
  function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "friend-item",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.showFriendInfo())
    }, [
      vue.createVNode(_component_head_image, {
        name: $props.friend.nickName,
        online: $props.friend.online,
        url: $props.friend.headImage,
        size: "small"
      }, null, 8, ["name", "online", "url"]),
      vue.createElementVNode("view", { class: "friend-info" }, [
        vue.createElementVNode(
          "view",
          { class: "friend-name" },
          vue.toDisplayString($props.friend.nickName),
          1
          /* TEXT */
        ),
        vue.createElementVNode("view", { class: "friend-online" }, [
          vue.withDirectives(vue.createElementVNode(
            "image",
            {
              class: "online",
              src: _imports_0,
              title: "电脑设备在线"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $props.friend.onlineWeb]
          ]),
          vue.withDirectives(vue.createElementVNode(
            "image",
            {
              class: "online",
              src: _imports_1,
              title: "移动设备在线"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $props.friend.onlineApp]
          ])
        ])
      ])
    ]);
  }
  const __easycom_3$3 = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$C], ["__scopeId", "data-v-85c739ab"], ["__file", "C:/Java/box-im/im-uniapp/components/friend-item/friend-item.vue"]]);
  const props$2 = defineMixin({
    props: {}
  });
  const _sfc_main$C = {
    name: "u-index-item",
    mixins: [mpMixin, mixin, props$2],
    data() {
      return {
        // 本组件到滚动条顶部的距离
        top: 0,
        height: 0,
        id: ""
      };
    },
    created() {
      this.anchor = {};
    },
    mounted() {
      this.init();
    },
    methods: {
      init() {
        this.getParentData("u-index-list");
        if (!this.parent) {
          return error("u-index-item必须要搭配u-index-list组件使用");
        }
        sleep().then(() => {
          this.getIndexItemRect().then((size) => {
            this.top = Math.ceil(size.top);
            this.height = Math.ceil(size.height);
          });
        });
      },
      getIndexItemRect() {
        return new Promise((resolve) => {
          this.$uGetRect(".u-index-item").then((size) => {
            resolve(size);
          });
        });
      }
    }
  };
  function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["u-index-item", [`u-index-item-${$data.id}`]]),
      id: `u-index-item-${$data.id}`
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 10, ["id"]);
  }
  const __easycom_4$3 = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$B], ["__scopeId", "data-v-83b92c70"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uview-plus/components/u-index-item/u-index-item.vue"]]);
  const props$1 = defineMixin({
    props: {
      // 是否展示组件
      show: {
        type: Boolean,
        default: () => props$4.transition.show
      },
      // 使用的动画模式
      mode: {
        type: String,
        default: () => props$4.transition.mode
      },
      // 动画的执行时间，单位ms
      duration: {
        type: [String, Number],
        default: () => props$4.transition.duration
      },
      // 使用的动画过渡函数
      timingFunction: {
        type: String,
        default: () => props$4.transition.timingFunction
      }
    }
  });
  const getClassNames = (name) => ({
    enter: `u-${name}-enter u-${name}-enter-active`,
    "enter-to": `u-${name}-enter-to u-${name}-enter-active`,
    leave: `u-${name}-leave u-${name}-leave-active`,
    "leave-to": `u-${name}-leave-to u-${name}-leave-active`
  });
  const transition = {
    methods: {
      // 组件被点击发出事件
      clickHandler() {
        this.$emit("click");
      },
      // vue版本的组件进场处理
      async vueEnter() {
        const classNames = getClassNames(this.mode);
        this.status = "enter";
        this.$emit("beforeEnter");
        this.inited = true;
        this.display = true;
        this.classes = classNames.enter;
        await vue.nextTick();
        {
          await sleep(20);
          this.$emit("enter");
          this.transitionEnded = false;
          this.$emit("afterEnter");
          this.classes = classNames["enter-to"];
        }
      },
      // 动画离场处理
      async vueLeave() {
        if (!this.display)
          return;
        const classNames = getClassNames(this.mode);
        this.status = "leave";
        this.$emit("beforeLeave");
        this.classes = classNames.leave;
        await vue.nextTick();
        {
          this.transitionEnded = false;
          this.$emit("leave");
          setTimeout(this.onTransitionEnd, this.duration);
          this.classes = classNames["leave-to"];
        }
      },
      // 完成过渡后触发
      onTransitionEnd() {
        if (this.transitionEnded)
          return;
        this.transitionEnded = true;
        this.$emit(this.status === "leave" ? "afterLeave" : "afterEnter");
        if (!this.show && this.display) {
          this.display = false;
          this.inited = false;
        }
      }
    }
  };
  const _sfc_main$B = {
    name: "u-transition",
    data() {
      return {
        inited: false,
        // 是否显示/隐藏组件
        viewStyle: {},
        // 组件内部的样式
        status: "",
        // 记录组件动画的状态
        transitionEnded: false,
        // 组件是否结束的标记
        display: false,
        // 组件是否展示
        classes: ""
        // 应用的类名
      };
    },
    emits: ["click", "beforeEnter", "enter", "afterEnter", "beforeLeave", "leave", "afterLeave"],
    computed: {
      mergeStyle() {
        const { viewStyle, customStyle } = this;
        return {
          transitionDuration: `${this.duration}ms`,
          // display: `${this.display ? '' : 'none'}`,
          transitionTimingFunction: this.timingFunction,
          // 避免自定义样式影响到动画属性，所以写在viewStyle前面
          ...addStyle(customStyle),
          ...viewStyle
        };
      }
    },
    // 将mixin挂在到组件中，实际上为一个vue格式对象。
    mixins: [mpMixin, mixin, transition, props$1],
    watch: {
      show: {
        handler(newVal) {
          newVal ? this.vueEnter() : this.vueLeave();
        },
        // 表示同时监听初始化时的props的show的意思
        immediate: true
      }
    }
  };
  function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
    return $data.inited ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["u-transition", $data.classes]),
        ref: "u-transition",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.clickHandler && _ctx.clickHandler(...args)),
        style: vue.normalizeStyle([$options.mergeStyle]),
        onTouchmove: _cache[1] || (_cache[1] = (...args) => _ctx.noop && _ctx.noop(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ],
      38
      /* CLASS, STYLE, NEED_HYDRATION */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$A], ["__scopeId", "data-v-5cec8177"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uview-plus/components/u-transition/u-transition.vue"]]);
  const props = defineMixin({
    props: {
      // 右边锚点非激活的颜色
      inactiveColor: {
        type: String,
        default: () => props$4.indexList.inactiveColor
      },
      // 右边锚点激活的颜色
      activeColor: {
        type: String,
        default: () => props$4.indexList.activeColor
      },
      // 索引字符列表，数组形式
      indexList: {
        type: Array,
        default: () => props$4.indexList.indexList
      },
      // 是否开启锚点自动吸顶
      sticky: {
        type: Boolean,
        default: () => props$4.indexList.sticky
      },
      // 自定义导航栏的高度
      customNavHeight: {
        type: [String, Number],
        default: () => props$4.indexList.customNavHeight
      }
    }
  });
  const indexList = () => {
    const indexList2 = [];
    const charCodeOfA = "A".charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      indexList2.push(String.fromCharCode(charCodeOfA + i));
    }
    return indexList2;
  };
  const _sfc_main$A = {
    name: "u-index-list",
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        // 当前正在被选中的字母索引
        activeIndex: -1,
        touchmoveIndex: 1,
        // 索引字母的信息
        letterInfo: {
          height: 0,
          itemHeight: 0,
          top: 0
        },
        // 设置字母指示器的高度，后面为了让指示器跟随字母，并将尖角部分指向字母的中部，需要依赖此值
        indicatorHeight: 50,
        // 字母放大指示器的top值，为了让其指向当前激活的字母
        // indicatorTop: 0
        // 当前是否正在被触摸状态
        touching: false,
        // 滚动条顶部top值
        scrollTop: 0,
        // scroll-view的高度
        scrollViewHeight: 0,
        // 系统信息
        sys: sys(),
        scrolling: false,
        scrollIntoView: ""
      };
    },
    computed: {
      // 如果有传入外部的indexList锚点数组则使用，否则使用内部生成A-Z字母
      uIndexList() {
        return this.indexList.length ? this.indexList : indexList();
      },
      // 字母放大指示器的top值，为了让其指向当前激活的字母
      indicatorTop() {
        const {
          top,
          itemHeight
        } = this.letterInfo;
        return Math.floor(top + itemHeight * this.activeIndex + itemHeight / 2 - this.indicatorHeight / 2);
      }
    },
    watch: {
      // 监听字母索引的变化，重新设置尺寸
      uIndexList: {
        immediate: true,
        handler() {
          sleep().then(() => {
            this.setIndexListLetterInfo();
          });
        }
      }
    },
    created() {
      this.children = [];
      this.anchors = [];
      this.init();
    },
    mounted() {
      this.setIndexListLetterInfo();
    },
    methods: {
      addUnit,
      init() {
        let customNavHeight = getPx(this.customNavHeight);
        this.scrollViewHeight = this.sys.windowHeight - customNavHeight;
      },
      // 索引列表被触摸
      touchStart(e) {
        const touchStart = e.changedTouches[0];
        if (!touchStart)
          return;
        this.touching = true;
        const {
          pageY
        } = touchStart;
        const currentIndex = this.getIndexListLetter(pageY);
        this.setValueForTouch(currentIndex);
      },
      // 索引字母列表被触摸滑动中
      touchMove(e) {
        let touchMove = e.changedTouches[0];
        if (!touchMove)
          return;
        if (!this.touching) {
          this.touching = true;
        }
        const {
          pageY
        } = touchMove;
        const currentIndex = this.getIndexListLetter(pageY);
        this.setValueForTouch(currentIndex);
      },
      // 触摸结束
      touchEnd(e) {
        sleep(300).then(() => {
          this.touching = false;
        });
      },
      // 获取索引列表的尺寸以及单个字符的尺寸信息
      getIndexListLetterRect() {
        return new Promise((resolve) => {
          this.$uGetRect(".u-index-list__letter").then((size) => {
            resolve(size);
          });
        });
      },
      // 设置indexList索引的尺寸信息
      setIndexListLetterInfo() {
        this.getIndexListLetterRect().then((size) => {
          const {
            height
          } = size;
          const sysData = sys();
          const windowHeight = sysData.windowHeight;
          let customNavHeight = 0;
          if (this.customNavHeight == 0) {
            customNavHeight = -(sysData.statusBarHeight + 44);
          } else {
            customNavHeight = getPx(this.customNavHeight);
          }
          this.letterInfo = {
            height,
            // 为了让字母列表对屏幕绝对居中，让其对导航栏进行修正，也即往上偏移导航栏的一半高度
            top: (windowHeight - height) / 2 + customNavHeight / 2,
            itemHeight: Math.floor(height / this.uIndexList.length)
          };
        });
      },
      // 获取当前被触摸的索引字母
      getIndexListLetter(pageY) {
        const {
          top,
          height,
          itemHeight
        } = this.letterInfo;
        if (pageY < top) {
          return 0;
        } else if (pageY >= top + height) {
          return this.uIndexList.length - 1;
        } else {
          return Math.floor((pageY - top) / itemHeight);
        }
      },
      // 设置各项由触摸而导致变化的值
      setValueForTouch(currentIndex) {
        if (currentIndex === this.activeIndex)
          return;
        this.activeIndex = currentIndex;
        this.scrollIntoView = `u-index-item-${this.uIndexList[currentIndex].charCodeAt(0)}`;
      },
      getHeaderRect() {
        return new Promise((resolve) => {
          dom.getComponentRect(this.$refs.header, (res) => {
            resolve(res.size);
          });
        });
      },
      // scroll-view的滚动事件
      async scrollHandler(e) {
        if (this.touching || this.scrolling)
          return;
        this.scrolling = true;
        sleep(10).then(() => {
          this.scrolling = false;
        });
        let scrollTop = 0;
        const len = this.children.length;
        let children = this.children;
        this.anchors;
        scrollTop = e.detail.scrollTop;
        scrollTop += getPx(this.customNavHeight);
        for (let i = 0; i < len; i++) {
          const item = children[i], nextItem = children[i + 1];
          if (scrollTop <= children[0].top || scrollTop >= children[len - 1].top + children[len - 1].height) {
            this.activeIndex = -1;
            break;
          } else if (!nextItem) {
            this.activeIndex = len - 1;
            break;
          } else if (scrollTop > item.top && scrollTop < nextItem.top) {
            this.activeIndex = i;
            break;
          }
        }
      }
    }
  };
  function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_u_transition = resolveEasycom(vue.resolveDynamicComponent("u-transition"), __easycom_0$3);
    return vue.openBlock(), vue.createElementBlock("view", { class: "u-index-list" }, [
      vue.createElementVNode("scroll-view", {
        scrollTop: $data.scrollTop,
        scrollIntoView: $data.scrollIntoView,
        "offset-accuracy": 1,
        style: vue.normalizeStyle({
          maxHeight: $options.addUnit($data.scrollViewHeight)
        }),
        "scroll-y": "",
        onScroll: _cache[0] || (_cache[0] = (...args) => $options.scrollHandler && $options.scrollHandler(...args)),
        ref: "uList"
      }, [
        _ctx.$slots.header ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
          vue.renderSlot(_ctx.$slots, "header", {}, void 0, true)
        ])) : vue.createCommentVNode("v-if", true),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true),
        _ctx.$slots.footer ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
          vue.renderSlot(_ctx.$slots, "footer", {}, void 0, true)
        ])) : vue.createCommentVNode("v-if", true)
      ], 44, ["scrollTop", "scrollIntoView"]),
      vue.createElementVNode(
        "view",
        {
          class: "u-index-list__letter",
          ref: "u-index-list__letter",
          style: vue.normalizeStyle({ top: $options.addUnit($data.letterInfo.top || 100) }),
          onTouchstart: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchStart && $options.touchStart(...args), ["prevent"])),
          onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.touchMove && $options.touchMove(...args), ["prevent"])),
          onTouchend: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.touchEnd && $options.touchEnd(...args), ["prevent"])),
          onTouchcancel: _cache[4] || (_cache[4] = vue.withModifiers((...args) => $options.touchEnd && $options.touchEnd(...args), ["prevent"]))
        },
        [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.uIndexList, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock(
                "view",
                {
                  class: "u-index-list__letter__item",
                  key: index2,
                  style: vue.normalizeStyle({
                    backgroundColor: $data.activeIndex === index2 ? _ctx.activeColor : "transparent"
                  })
                },
                [
                  vue.createElementVNode(
                    "text",
                    {
                      class: "u-index-list__letter__item__index",
                      style: vue.normalizeStyle({ color: $data.activeIndex === index2 ? "#fff" : _ctx.inactiveColor })
                    },
                    vue.toDisplayString(item),
                    5
                    /* TEXT, STYLE */
                  )
                ],
                4
                /* STYLE */
              );
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ],
        36
        /* STYLE, NEED_HYDRATION */
      ),
      vue.createVNode(_component_u_transition, {
        mode: "fade",
        show: $data.touching,
        customStyle: {
          position: "fixed",
          right: "50px",
          top: $options.addUnit($options.indicatorTop),
          zIndex: 2
        }
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["u-index-list__indicator", ["u-index-list__indicator--show"]]),
              style: vue.normalizeStyle({
                height: $options.addUnit($data.indicatorHeight),
                width: $options.addUnit($data.indicatorHeight)
              })
            },
            [
              vue.createElementVNode(
                "text",
                { class: "u-index-list__indicator__text" },
                vue.toDisplayString($options.uIndexList[$data.activeIndex]),
                1
                /* TEXT */
              )
            ],
            4
            /* STYLE */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["show", "customStyle"])
    ]);
  }
  const __easycom_5 = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$z], ["__scopeId", "data-v-dfefaad1"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uview-plus/components/u-index-list/u-index-list.vue"]]);
  const DoubleUnicodePrefixReg = /^[\uD800-\uDBFF]$/;
  const DoubleUnicodeSuffixReg = /^[\uDC00-\uDFFF]$/;
  const DoubleUnicodeReg = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var Probability;
  (function(Probability2) {
    Probability2[Probability2["Unknown"] = 1e-13] = "Unknown";
    Probability2[Probability2["Rule"] = 1e-12] = "Rule";
    Probability2[Probability2["DICT"] = 2e-8] = "DICT";
    Probability2[Probability2["Surname"] = 1] = "Surname";
    Probability2[Probability2["Custom"] = 1] = "Custom";
  })(Probability || (Probability = {}));
  const Priority = {
    Normal: 1,
    Surname: 10,
    Custom: 100
  };
  function stringLength(text) {
    var _a;
    return text.length - (((_a = text.match(DoubleUnicodeReg)) === null || _a === void 0 ? void 0 : _a.length) || 0);
  }
  function splitString(text) {
    const result = [];
    let i = 0;
    while (i < text.length) {
      const char = text[i];
      if (DoubleUnicodePrefixReg.test(char) && DoubleUnicodeSuffixReg.test(text[i + 1])) {
        result.push(text.substring(i, i + 2));
        i += 2;
      } else {
        result.push(char);
        i += 1;
      }
    }
    return result;
  }
  class FastDictFactory {
    constructor() {
      this.NumberDICT = [];
      this.StringDICT = /* @__PURE__ */ new Map();
    }
    get(word) {
      if (word.length > 1) {
        return this.StringDICT.get(word);
      } else {
        const code2 = word.charCodeAt(0);
        return this.NumberDICT[code2];
      }
    }
    set(word, pinyin2) {
      if (word.length > 1) {
        this.StringDICT.set(word, pinyin2);
      } else {
        const code2 = word.charCodeAt(0);
        this.NumberDICT[code2] = pinyin2;
      }
    }
    clear() {
      this.NumberDICT = [];
      this.StringDICT.clear();
    }
  }
  const map = {
    "bǎng páng pāng": ["膀"],
    líng: [
      "〇",
      "伶",
      "凌",
      "刢",
      "囹",
      "坽",
      "夌",
      "姈",
      "婈",
      "孁",
      "岺",
      "彾",
      "掕",
      "昤",
      "朎",
      "柃",
      "棂",
      "櫺",
      "欞",
      "泠",
      "淩",
      "澪",
      "灵",
      "燯",
      "爧",
      "狑",
      "玲",
      "琌",
      "瓴",
      "皊",
      "砱",
      "祾",
      "秢",
      "竛",
      "笭",
      "紷",
      "綾",
      "绫",
      "羐",
      "羚",
      "翎",
      "聆",
      "舲",
      "苓",
      "菱",
      "蓤",
      "蔆",
      "蕶",
      "蛉",
      "衑",
      "裬",
      "詅",
      "跉",
      "軨",
      "輘",
      "酃",
      "醽",
      "鈴",
      "錂",
      "铃",
      "閝",
      "陵",
      "零",
      "霊",
      "霗",
      "霛",
      "霝",
      "靈",
      "駖",
      "魿",
      "鯪",
      "鲮",
      "鴒",
      "鸰",
      "鹷",
      "麢",
      "齡",
      "齢",
      "龄",
      "龗",
      "㥄"
    ],
    yī: [
      "一",
      "乊",
      "伊",
      "依",
      "医",
      "吚",
      "咿",
      "噫",
      "壱",
      "壹",
      "夁",
      "嫛",
      "嬄",
      "弌",
      "揖",
      "撎",
      "檹",
      "毉",
      "洢",
      "渏",
      "漪",
      "瑿",
      "畩",
      "祎",
      "禕",
      "稦",
      "繄",
      "蛜",
      "衤",
      "譩",
      "辷",
      "郼",
      "醫",
      "銥",
      "铱",
      "鷖",
      "鹥",
      "黟",
      "黳"
    ],
    "dīng zhēng": ["丁"],
    "kǎo qiǎo yú": ["丂"],
    qī: [
      "七",
      "倛",
      "僛",
      "凄",
      "嘁",
      "墄",
      "娸",
      "悽",
      "慼",
      "慽",
      "戚",
      "捿",
      "柒",
      "桤",
      "桼",
      "棲",
      "榿",
      "欺",
      "沏",
      "淒",
      "漆",
      "紪",
      "緀",
      "萋",
      "褄",
      "諆",
      "迉",
      "郪",
      "鏚",
      "霋",
      "魌",
      "鶈"
    ],
    shàng: ["丄", "尙", "尚", "恦", "緔", "绱"],
    xià: [
      "丅",
      "下",
      "乤",
      "圷",
      "夏",
      "夓",
      "懗",
      "梺",
      "疜",
      "睱",
      "罅",
      "鎼",
      "鏬"
    ],
    hǎn: ["丆", "喊", "浫", "罕", "豃", "㘎"],
    "wàn mò": ["万"],
    zhàng: [
      "丈",
      "仗",
      "墇",
      "嶂",
      "帐",
      "帳",
      "幛",
      "扙",
      "杖",
      "涱",
      "痮",
      "瘬",
      "瘴",
      "瞕",
      "粀",
      "胀",
      "脹",
      "賬",
      "账",
      "障"
    ],
    sān: ["三", "厁", "叁", "弎", "毵", "毶", "毿", "犙", "鬖"],
    "shàng shǎng shang": ["上"],
    "qí jī": ["丌", "其", "奇"],
    "bù fǒu": ["不"],
    "yǔ yù yú": ["与"],
    miǎn: [
      "丏",
      "偭",
      "免",
      "冕",
      "勉",
      "勔",
      "喕",
      "娩",
      "愐",
      "汅",
      "沔",
      "湎",
      "睌",
      "緬",
      "缅",
      "腼",
      "葂",
      "靦",
      "鮸",
      "𩾃"
    ],
    gài: [
      "丐",
      "乢",
      "匃",
      "匄",
      "戤",
      "概",
      "槩",
      "槪",
      "溉",
      "漑",
      "瓂",
      "葢",
      "鈣",
      "钙",
      "𬮿"
    ],
    chǒu: ["丑", "丒", "侴", "吜", "杽", "瞅", "矁", "醜", "魗"],
    zhuān: [
      "专",
      "叀",
      "嫥",
      "専",
      "專",
      "瑼",
      "甎",
      "砖",
      "磗",
      "磚",
      "蟤",
      "諯",
      "鄟",
      "顓",
      "颛",
      "鱄",
      "䏝"
    ],
    "qiě jū": ["且"],
    pī: [
      "丕",
      "伓",
      "伾",
      "噼",
      "坯",
      "岯",
      "憵",
      "批",
      "披",
      "炋",
      "狉",
      "狓",
      "砒",
      "磇",
      "礔",
      "礕",
      "秛",
      "秠",
      "耚",
      "豾",
      "邳",
      "鈚",
      "鉟",
      "銔",
      "錃",
      "錍",
      "霹",
      "駓",
      "髬",
      "魾",
      "𬳵"
    ],
    shì: [
      "世",
      "丗",
      "亊",
      "事",
      "仕",
      "侍",
      "冟",
      "势",
      "勢",
      "卋",
      "呩",
      "嗜",
      "噬",
      "士",
      "奭",
      "嬕",
      "室",
      "市",
      "式",
      "弑",
      "弒",
      "恀",
      "恃",
      "戺",
      "拭",
      "揓",
      "是",
      "昰",
      "枾",
      "柿",
      "栻",
      "澨",
      "烒",
      "煶",
      "眂",
      "眎",
      "眡",
      "睗",
      "示",
      "礻",
      "筮",
      "簭",
      "舐",
      "舓",
      "襫",
      "視",
      "视",
      "觢",
      "試",
      "誓",
      "諡",
      "謚",
      "试",
      "谥",
      "貰",
      "贳",
      "軾",
      "轼",
      "逝",
      "遾",
      "釈",
      "释",
      "釋",
      "鈰",
      "鉃",
      "鉽",
      "铈",
      "飾",
      "餙",
      "餝",
      "饰",
      "鰘",
      "䏡",
      "𬤊"
    ],
    qiū: [
      "丘",
      "丠",
      "坵",
      "媝",
      "恘",
      "恷",
      "楸",
      "秋",
      "秌",
      "穐",
      "篍",
      "緧",
      "萩",
      "蘒",
      "蚯",
      "蝵",
      "蟗",
      "蠤",
      "趥",
      "邱",
      "鞦",
      "鞧",
      "鰌",
      "鰍",
      "鳅",
      "鶖",
      "鹙",
      "龝"
    ],
    bǐng: [
      "丙",
      "屛",
      "怲",
      "抦",
      "昞",
      "昺",
      "柄",
      "棅",
      "炳",
      "禀",
      "秉",
      "稟",
      "苪",
      "蛃",
      "邴",
      "鈵",
      "陃",
      "鞆",
      "餅",
      "餠",
      "饼"
    ],
    yè: [
      "业",
      "亱",
      "僷",
      "墷",
      "夜",
      "嶪",
      "嶫",
      "抴",
      "捙",
      "擛",
      "擪",
      "擫",
      "晔",
      "曄",
      "曅",
      "曗",
      "曳",
      "曵",
      "枼",
      "枽",
      "業",
      "洂",
      "液",
      "澲",
      "烨",
      "燁",
      "爗",
      "璍",
      "皣",
      "瞱",
      "瞸",
      "礏",
      "腋",
      "葉",
      "謁",
      "谒",
      "邺",
      "鄴",
      "鍱",
      "鐷",
      "靥",
      "靨",
      "頁",
      "页",
      "餣",
      "饁",
      "馌",
      "驜",
      "鵺",
      "鸈"
    ],
    cóng: [
      "丛",
      "从",
      "叢",
      "婃",
      "孮",
      "従",
      "徔",
      "徖",
      "悰",
      "樷",
      "欉",
      "淙",
      "灇",
      "爜",
      "琮",
      "藂",
      "誴",
      "賨",
      "賩",
      "錝"
    ],
    dōng: [
      "东",
      "倲",
      "冬",
      "咚",
      "埬",
      "岽",
      "崬",
      "徚",
      "昸",
      "東",
      "氡",
      "氭",
      "涷",
      "笗",
      "苳",
      "菄",
      "蝀",
      "鮗",
      "鯟",
      "鶇",
      "鶫",
      "鸫",
      "鼕",
      "𬟽"
    ],
    sī: [
      "丝",
      "俬",
      "凘",
      "厮",
      "司",
      "咝",
      "嘶",
      "噝",
      "媤",
      "廝",
      "恖",
      "撕",
      "斯",
      "楒",
      "泀",
      "澌",
      "燍",
      "禗",
      "禠",
      "私",
      "糹",
      "絲",
      "緦",
      "纟",
      "缌",
      "罳",
      "蕬",
      "虒",
      "蛳",
      "蜤",
      "螄",
      "蟖",
      "蟴",
      "鉰",
      "銯",
      "鍶",
      "鐁",
      "锶",
      "颸",
      "飔",
      "騦",
      "鷥",
      "鸶",
      "鼶",
      "㟃"
    ],
    chéng: [
      "丞",
      "呈",
      "城",
      "埕",
      "堘",
      "塍",
      "塖",
      "宬",
      "峸",
      "惩",
      "懲",
      "成",
      "承",
      "挰",
      "掁",
      "揨",
      "枨",
      "棖",
      "橙",
      "檙",
      "洆",
      "溗",
      "澂",
      "珵",
      "珹",
      "畻",
      "程",
      "窚",
      "筬",
      "絾",
      "脭",
      "荿",
      "誠",
      "诚",
      "郕",
      "酲",
      "鋮",
      "铖",
      "騬",
      "鯎"
    ],
    diū: ["丟", "丢", "銩", "铥"],
    liǎng: [
      "両",
      "两",
      "兩",
      "唡",
      "啢",
      "掚",
      "緉",
      "脼",
      "蜽",
      "裲",
      "魉",
      "魎",
      "𬜯"
    ],
    yǒu: [
      "丣",
      "卣",
      "友",
      "梄",
      "湵",
      "牖",
      "禉",
      "羑",
      "聈",
      "苃",
      "莠",
      "蜏",
      "酉",
      "銪",
      "铕",
      "黝"
    ],
    yán: [
      "严",
      "厳",
      "啱",
      "喦",
      "嚴",
      "塩",
      "壛",
      "壧",
      "妍",
      "姸",
      "娫",
      "娮",
      "岩",
      "嵒",
      "嵓",
      "巌",
      "巖",
      "巗",
      "延",
      "揅",
      "昖",
      "楌",
      "檐",
      "櫩",
      "欕",
      "沿",
      "炎",
      "炏",
      "狿",
      "琂",
      "盐",
      "碞",
      "筵",
      "簷",
      "莚",
      "蔅",
      "虤",
      "蜒",
      "言",
      "訁",
      "訮",
      "詽",
      "讠",
      "郔",
      "閆",
      "閻",
      "闫",
      "阎",
      "顏",
      "顔",
      "颜",
      "鹽",
      "麣",
      "𫄧"
    ],
    bìng: [
      "並",
      "併",
      "倂",
      "傡",
      "垪",
      "摒",
      "栤",
      "病",
      "窉",
      "竝",
      "誁",
      "靐",
      "鮩"
    ],
    "sàng sāng": ["丧"],
    gǔn: [
      "丨",
      "惃",
      "滚",
      "滾",
      "磙",
      "緄",
      "绲",
      "蓘",
      "蔉",
      "衮",
      "袞",
      "輥",
      "辊",
      "鮌",
      "鯀",
      "鲧"
    ],
    jiū: [
      "丩",
      "勼",
      "啾",
      "揪",
      "揫",
      "朻",
      "究",
      "糾",
      "纠",
      "萛",
      "赳",
      "阄",
      "鬏",
      "鬮",
      "鳩",
      "鸠"
    ],
    "gè gě": ["个", "個", "各"],
    yā: [
      "丫",
      "圧",
      "孲",
      "庘",
      "押",
      "枒",
      "桠",
      "椏",
      "錏",
      "鐚",
      "鴉",
      "鴨",
      "鵶",
      "鸦",
      "鸭"
    ],
    pán: [
      "丬",
      "媻",
      "幋",
      "槃",
      "洀",
      "瀊",
      "爿",
      "盘",
      "盤",
      "磐",
      "縏",
      "蒰",
      "蟠",
      "蹒",
      "蹣",
      "鎜",
      "鞶"
    ],
    "zhōng zhòng": ["中"],
    jǐ: [
      "丮",
      "妀",
      "己",
      "戟",
      "挤",
      "掎",
      "撠",
      "擠",
      "橶",
      "泲",
      "犱",
      "脊",
      "虮",
      "蟣",
      "魢",
      "鱾",
      "麂"
    ],
    jiè: [
      "丯",
      "介",
      "借",
      "唶",
      "堺",
      "屆",
      "届",
      "岕",
      "庎",
      "徣",
      "戒",
      "楐",
      "犗",
      "玠",
      "琾",
      "界",
      "畍",
      "疥",
      "砎",
      "蚧",
      "蛶",
      "衸",
      "褯",
      "誡",
      "诫",
      "鎅",
      "骱",
      "魪"
    ],
    fēng: [
      "丰",
      "仹",
      "偑",
      "僼",
      "凨",
      "凬",
      "凮",
      "妦",
      "寷",
      "封",
      "峯",
      "峰",
      "崶",
      "枫",
      "楓",
      "檒",
      "沣",
      "沨",
      "渢",
      "灃",
      "烽",
      "犎",
      "猦",
      "琒",
      "疯",
      "瘋",
      "盽",
      "砜",
      "碸",
      "篈",
      "蘴",
      "蜂",
      "蠭",
      "豐",
      "鄷",
      "酆",
      "鋒",
      "鎽",
      "鏠",
      "锋",
      "霻",
      "靊",
      "飌",
      "麷"
    ],
    "guàn kuàng": ["丱"],
    chuàn: ["串", "汌", "玔", "賗", "釧", "钏"],
    chǎn: [
      "丳",
      "产",
      "冁",
      "剷",
      "囅",
      "嵼",
      "旵",
      "浐",
      "滻",
      "灛",
      "產",
      "産",
      "簅",
      "蒇",
      "蕆",
      "諂",
      "譂",
      "讇",
      "谄",
      "鏟",
      "铲",
      "閳",
      "闡",
      "阐",
      "骣",
      "𬊤"
    ],
    lín: [
      "临",
      "冧",
      "壣",
      "崊",
      "嶙",
      "斴",
      "晽",
      "暽",
      "林",
      "潾",
      "瀶",
      "燐",
      "琳",
      "璘",
      "瞵",
      "碄",
      "磷",
      "粦",
      "粼",
      "繗",
      "翷",
      "臨",
      "轔",
      "辚",
      "遴",
      "邻",
      "鄰",
      "鏻",
      "阾",
      "隣",
      "霖",
      "驎",
      "鱗",
      "鳞",
      "麐",
      "麟",
      "𬴊",
      "𬭸"
    ],
    zhuó: [
      "丵",
      "劅",
      "卓",
      "啄",
      "圴",
      "妰",
      "娺",
      "撯",
      "擆",
      "擢",
      "斫",
      "斮",
      "斱",
      "斲",
      "斵",
      "晫",
      "椓",
      "浊",
      "浞",
      "濁",
      "灼",
      "烵",
      "琸",
      "硺",
      "禚",
      "窡",
      "籗",
      "籱",
      "罬",
      "茁",
      "蠗",
      "蠿",
      "諁",
      "諑",
      "謶",
      "诼",
      "酌",
      "鐲",
      "镯",
      "鵫",
      "鷟",
      "䓬",
      "𬸦"
    ],
    zhǔ: [
      "丶",
      "主",
      "劯",
      "嘱",
      "囑",
      "宔",
      "帾",
      "拄",
      "渚",
      "濐",
      "煑",
      "煮",
      "燝",
      "瞩",
      "矚",
      "罜",
      "詝",
      "陼",
      "鸀",
      "麈",
      "𬣞"
    ],
    bā: [
      "丷",
      "仈",
      "八",
      "叭",
      "哵",
      "夿",
      "岜",
      "巴",
      "捌",
      "朳",
      "玐",
      "疤",
      "笆",
      "粑",
      "羓",
      "芭",
      "蚆",
      "豝",
      "釟"
    ],
    wán: [
      "丸",
      "刓",
      "完",
      "岏",
      "抏",
      "捖",
      "汍",
      "烷",
      "玩",
      "琓",
      "笂",
      "紈",
      "纨",
      "翫",
      "芄",
      "貦",
      "頑",
      "顽"
    ],
    dān: [
      "丹",
      "勯",
      "匰",
      "単",
      "妉",
      "媅",
      "殚",
      "殫",
      "甔",
      "眈",
      "砃",
      "箪",
      "簞",
      "耼",
      "耽",
      "聃",
      "聸",
      "褝",
      "襌",
      "躭",
      "郸",
      "鄲",
      "酖",
      "頕"
    ],
    "wèi wéi": ["为"],
    "jǐng dǎn": ["丼"],
    "lì lí": ["丽"],
    jǔ: [
      "举",
      "弆",
      "挙",
      "擧",
      "椇",
      "榉",
      "榘",
      "櫸",
      "欅",
      "矩",
      "筥",
      "聥",
      "舉",
      "莒",
      "蒟",
      "襷",
      "踽",
      "齟",
      "龃"
    ],
    piě: ["丿", "苤", "鐅", "𬭯"],
    fú: [
      "乀",
      "伏",
      "俘",
      "凫",
      "刜",
      "匐",
      "咈",
      "哹",
      "垘",
      "孚",
      "岪",
      "巿",
      "帗",
      "幅",
      "幞",
      "弗",
      "彿",
      "怫",
      "扶",
      "柫",
      "栿",
      "桴",
      "氟",
      "泭",
      "浮",
      "涪",
      "澓",
      "炥",
      "玸",
      "甶",
      "畉",
      "癁",
      "祓",
      "福",
      "稪",
      "符",
      "箙",
      "紱",
      "紼",
      "絥",
      "綍",
      "绂",
      "绋",
      "罘",
      "罦",
      "翇",
      "艀",
      "芙",
      "芣",
      "苻",
      "茀",
      "茯",
      "菔",
      "葍",
      "虙",
      "蚨",
      "蜉",
      "蝠",
      "袚",
      "袱",
      "襆",
      "襥",
      "諨",
      "豧",
      "踾",
      "輻",
      "辐",
      "郛",
      "鉘",
      "鉜",
      "韍",
      "韨",
      "颫",
      "髴",
      "鮄",
      "鮲",
      "鳧",
      "鳬",
      "鴔",
      "鵩",
      "黻"
    ],
    "yí jí": ["乁"],
    yì: [
      "乂",
      "义",
      "亄",
      "亦",
      "亿",
      "伇",
      "伿",
      "佾",
      "俋",
      "億",
      "兿",
      "刈",
      "劓",
      "劮",
      "勚",
      "勩",
      "匇",
      "呓",
      "呭",
      "呹",
      "唈",
      "囈",
      "圛",
      "坄",
      "垼",
      "埸",
      "奕",
      "嫕",
      "嬑",
      "寱",
      "屹",
      "峄",
      "嶧",
      "帟",
      "帠",
      "幆",
      "廙",
      "异",
      "弈",
      "弋",
      "役",
      "忆",
      "怈",
      "怿",
      "悒",
      "意",
      "憶",
      "懌",
      "懿",
      "抑",
      "挹",
      "敡",
      "易",
      "晹",
      "曀",
      "曎",
      "杙",
      "枍",
      "棭",
      "榏",
      "槸",
      "檍",
      "歝",
      "殔",
      "殪",
      "殹",
      "毅",
      "浂",
      "浥",
      "浳",
      "湙",
      "溢",
      "潩",
      "澺",
      "瀷",
      "炈",
      "焲",
      "熠",
      "熤",
      "熼",
      "燚",
      "燡",
      "燱",
      "獈",
      "玴",
      "異",
      "疫",
      "痬",
      "瘗",
      "瘞",
      "瘱",
      "癔",
      "益",
      "瞖",
      "穓",
      "竩",
      "篒",
      "縊",
      "繶",
      "繹",
      "绎",
      "缢",
      "義",
      "羿",
      "翊",
      "翌",
      "翳",
      "翼",
      "耴",
      "肄",
      "肊",
      "膉",
      "臆",
      "艗",
      "艺",
      "芅",
      "苅",
      "萟",
      "蓺",
      "薏",
      "藙",
      "藝",
      "蘙",
      "虉",
      "蜴",
      "螠",
      "衪",
      "袣",
      "裔",
      "裛",
      "褹",
      "襼",
      "訲",
      "訳",
      "詍",
      "詣",
      "誼",
      "譯",
      "議",
      "讛",
      "议",
      "译",
      "诣",
      "谊",
      "豙",
      "豛",
      "豷",
      "貖",
      "贀",
      "跇",
      "轶",
      "逸",
      "邑",
      "鄓",
      "醷",
      "釴",
      "鈠",
      "鎰",
      "鐿",
      "镒",
      "镱",
      "阣",
      "隿",
      "霬",
      "饐",
      "駅",
      "驛",
      "驿",
      "骮",
      "鮨",
      "鶂",
      "鶃",
      "鶍",
      "鷁",
      "鷊",
      "鷧",
      "鷾",
      "鸃",
      "鹝",
      "鹢",
      "黓",
      "齸",
      "𬬩",
      "㑊",
      "𫄷",
      "𬟁"
    ],
    nǎi: ["乃", "倷", "奶", "嬭", "廼", "氖", "疓", "艿", "迺", "釢"],
    wǔ: [
      "乄",
      "五",
      "仵",
      "伍",
      "侮",
      "倵",
      "儛",
      "午",
      "啎",
      "妩",
      "娬",
      "嫵",
      "庑",
      "廡",
      "忤",
      "怃",
      "憮",
      "摀",
      "武",
      "潕",
      "熓",
      "牾",
      "玝",
      "珷",
      "瑦",
      "甒",
      "碔",
      "舞",
      "躌",
      "迕",
      "逜",
      "陚",
      "鵡",
      "鹉",
      "𣲘"
    ],
    jiǔ: [
      "久",
      "乆",
      "九",
      "乣",
      "奺",
      "杦",
      "汣",
      "灸",
      "玖",
      "紤",
      "舏",
      "酒",
      "镹",
      "韭",
      "韮"
    ],
    "tuō zhé": ["乇", "杔", "馲"],
    "me mó ma yāo": ["么"],
    zhī: [
      "之",
      "倁",
      "卮",
      "巵",
      "搘",
      "支",
      "栀",
      "梔",
      "椥",
      "榰",
      "汁",
      "泜",
      "疷",
      "祗",
      "祬",
      "秓",
      "稙",
      "綕",
      "肢",
      "胑",
      "胝",
      "脂",
      "芝",
      "蘵",
      "蜘",
      "衼",
      "隻",
      "鳷",
      "鴲",
      "鼅",
      "𦭜"
    ],
    "wū wù": ["乌"],
    zhà: [
      "乍",
      "咤",
      "宱",
      "搾",
      "榨",
      "溠",
      "痄",
      "蚱",
      "詐",
      "诈",
      "醡",
      "霅",
      "䃎"
    ],
    hū: [
      "乎",
      "乯",
      "匢",
      "匫",
      "呼",
      "唿",
      "嘑",
      "垀",
      "寣",
      "幠",
      "忽",
      "惚",
      "昒",
      "歑",
      "泘",
      "淴",
      "滹",
      "烀",
      "苸",
      "虍",
      "虖",
      "謼",
      "軤",
      "轷",
      "雐"
    ],
    fá: [
      "乏",
      "伐",
      "傠",
      "坺",
      "垡",
      "墢",
      "姂",
      "栰",
      "浌",
      "瞂",
      "笩",
      "筏",
      "罚",
      "罰",
      "罸",
      "藅",
      "閥",
      "阀"
    ],
    "lè yuè yào lào": ["乐", "樂"],
    yín: [
      "乑",
      "吟",
      "噖",
      "嚚",
      "圁",
      "垠",
      "夤",
      "婬",
      "寅",
      "峾",
      "崟",
      "崯",
      "檭",
      "殥",
      "泿",
      "淫",
      "滛",
      "烎",
      "犾",
      "狺",
      "璌",
      "硍",
      "碒",
      "荶",
      "蔩",
      "訔",
      "訚",
      "訡",
      "誾",
      "鄞",
      "鈝",
      "銀",
      "银",
      "霪",
      "鷣",
      "齦"
    ],
    pīng: ["乒", "俜", "娉", "涄", "甹", "砯", "聠", "艵", "頩"],
    pāng: ["乓", "滂", "胮", "膖", "雱", "霶"],
    qiáo: [
      "乔",
      "侨",
      "僑",
      "嫶",
      "憔",
      "桥",
      "槗",
      "樵",
      "橋",
      "櫵",
      "犞",
      "瞧",
      "硚",
      "礄",
      "荍",
      "荞",
      "蕎",
      "藮",
      "譙",
      "趫",
      "鐈",
      "鞒",
      "鞽",
      "顦"
    ],
    hǔ: ["乕", "琥", "萀", "虎", "虝", "錿", "鯱"],
    guāi: ["乖"],
    "chéng shèng": ["乗", "乘", "娍"],
    yǐ: [
      "乙",
      "乛",
      "以",
      "倚",
      "偯",
      "嬟",
      "崺",
      "已",
      "庡",
      "扆",
      "攺",
      "敼",
      "旑",
      "旖",
      "檥",
      "矣",
      "礒",
      "笖",
      "舣",
      "艤",
      "苡",
      "苢",
      "蚁",
      "螘",
      "蟻",
      "裿",
      "踦",
      "輢",
      "轙",
      "逘",
      "酏",
      "釔",
      "鈘",
      "鉯",
      "钇",
      "顗",
      "鳦",
      "齮",
      "𫖮",
      "𬺈"
    ],
    "háo yǐ": ["乚"],
    "niè miē": ["乜"],
    qǐ: [
      "乞",
      "企",
      "启",
      "唘",
      "啓",
      "啔",
      "啟",
      "婍",
      "屺",
      "杞",
      "棨",
      "玘",
      "盀",
      "綺",
      "绮",
      "芑",
      "諬",
      "起",
      "邔",
      "闙"
    ],
    yě: ["也", "冶", "嘢", "埜", "壄", "漜", "野"],
    xí: [
      "习",
      "喺",
      "媳",
      "嶍",
      "席",
      "椺",
      "檄",
      "漝",
      "習",
      "蓆",
      "袭",
      "襲",
      "覡",
      "觋",
      "謵",
      "趘",
      "郋",
      "鎴",
      "隰",
      "霫",
      "飁",
      "騱",
      "騽",
      "驨",
      "鰼",
      "鳛",
      "𠅤",
      "𫘬"
    ],
    xiāng: [
      "乡",
      "厢",
      "廂",
      "忀",
      "楿",
      "欀",
      "湘",
      "瓖",
      "稥",
      "箱",
      "緗",
      "缃",
      "膷",
      "芗",
      "萫",
      "葙",
      "薌",
      "襄",
      "郷",
      "鄉",
      "鄊",
      "鄕",
      "鑲",
      "镶",
      "香",
      "驤",
      "骧",
      "鱜",
      "麘",
      "𬙋"
    ],
    shū: [
      "书",
      "倏",
      "倐",
      "儵",
      "叔",
      "姝",
      "尗",
      "抒",
      "掓",
      "摅",
      "攄",
      "書",
      "枢",
      "梳",
      "樞",
      "殊",
      "殳",
      "毹",
      "毺",
      "淑",
      "瀭",
      "焂",
      "疎",
      "疏",
      "紓",
      "綀",
      "纾",
      "舒",
      "菽",
      "蔬",
      "踈",
      "軗",
      "輸",
      "输",
      "鄃",
      "陎",
      "鮛",
      "鵨"
    ],
    dǒu: ["乧", "抖", "枓", "蚪", "鈄", "阧", "陡"],
    shǐ: [
      "乨",
      "使",
      "兘",
      "史",
      "始",
      "宩",
      "屎",
      "榁",
      "矢",
      "笶",
      "豕",
      "鉂",
      "駛",
      "驶"
    ],
    jī: [
      "乩",
      "僟",
      "击",
      "刉",
      "刏",
      "剞",
      "叽",
      "唧",
      "喞",
      "嗘",
      "嘰",
      "圾",
      "基",
      "墼",
      "姬",
      "屐",
      "嵆",
      "嵇",
      "撃",
      "擊",
      "朞",
      "机",
      "枅",
      "樭",
      "機",
      "毄",
      "激",
      "犄",
      "玑",
      "璣",
      "畸",
      "畿",
      "癪",
      "矶",
      "磯",
      "积",
      "積",
      "笄",
      "筓",
      "箕",
      "簊",
      "緁",
      "羁",
      "羇",
      "羈",
      "耭",
      "肌",
      "芨",
      "虀",
      "覉",
      "覊",
      "譏",
      "譤",
      "讥",
      "賫",
      "賷",
      "赍",
      "跻",
      "踑",
      "躋",
      "躸",
      "銈",
      "錤",
      "鐖",
      "鑇",
      "鑙",
      "隮",
      "雞",
      "鞿",
      "韲",
      "飢",
      "饑",
      "饥",
      "魕",
      "鳮",
      "鶏",
      "鶺",
      "鷄",
      "鸄",
      "鸡",
      "齎",
      "齏",
      "齑",
      "𬯀",
      "𫓯",
      "𫓹",
      "𫌀"
    ],
    náng: ["乪", "嚢", "欜", "蠰", "饢"],
    jiā: [
      "乫",
      "佳",
      "傢",
      "加",
      "嘉",
      "抸",
      "枷",
      "梜",
      "毠",
      "泇",
      "浃",
      "浹",
      "犌",
      "猳",
      "珈",
      "痂",
      "笳",
      "糘",
      "耞",
      "腵",
      "葭",
      "袈",
      "豭",
      "貑",
      "跏",
      "迦",
      "鉫",
      "鎵",
      "镓",
      "鴐",
      "麚",
      "𬂩"
    ],
    jù: [
      "乬",
      "倨",
      "倶",
      "具",
      "剧",
      "劇",
      "勮",
      "埧",
      "埾",
      "壉",
      "姖",
      "屦",
      "屨",
      "岠",
      "巨",
      "巪",
      "怇",
      "惧",
      "愳",
      "懅",
      "懼",
      "拒",
      "拠",
      "昛",
      "歫",
      "洰",
      "澽",
      "炬",
      "烥",
      "犋",
      "秬",
      "窭",
      "窶",
      "簴",
      "粔",
      "耟",
      "聚",
      "虡",
      "蚷",
      "詎",
      "讵",
      "豦",
      "距",
      "踞",
      "躆",
      "遽",
      "邭",
      "醵",
      "鉅",
      "鐻",
      "钜",
      "颶",
      "飓",
      "駏",
      "鮔"
    ],
    shí: [
      "乭",
      "十",
      "埘",
      "塒",
      "姼",
      "实",
      "実",
      "寔",
      "實",
      "峕",
      "嵵",
      "时",
      "旹",
      "時",
      "榯",
      "湜",
      "溡",
      "炻",
      "祏",
      "竍",
      "蚀",
      "蝕",
      "辻",
      "遈",
      "鉐",
      "飠",
      "饣",
      "鮖",
      "鰣",
      "鲥",
      "鼫",
      "鼭"
    ],
    mǎo: ["乮", "冇", "卯", "峁", "戼", "昴", "泖", "笷", "蓩", "鉚", "铆"],
    mǎi: ["买", "嘪", "荬", "蕒", "買", "鷶"],
    luàn: ["乱", "亂", "釠"],
    rǔ: ["乳", "擩", "汝", "肗", "辱", "鄏"],
    xué: [
      "乴",
      "学",
      "學",
      "峃",
      "嶨",
      "斈",
      "泶",
      "澩",
      "燢",
      "穴",
      "茓",
      "袕",
      "踅",
      "鷽",
      "鸴"
    ],
    yǎn: [
      "䶮",
      "乵",
      "俨",
      "偃",
      "儼",
      "兖",
      "兗",
      "厣",
      "厴",
      "噞",
      "孍",
      "嵃",
      "巘",
      "巚",
      "弇",
      "愝",
      "戭",
      "扊",
      "抁",
      "掩",
      "揜",
      "曮",
      "椼",
      "檿",
      "沇",
      "渷",
      "演",
      "琰",
      "甗",
      "眼",
      "罨",
      "萒",
      "蝘",
      "衍",
      "褗",
      "躽",
      "遃",
      "郾",
      "隒",
      "顩",
      "魇",
      "魘",
      "鰋",
      "鶠",
      "黡",
      "黤",
      "黬",
      "黭",
      "黶",
      "鼴",
      "鼹",
      "齴",
      "龑",
      "𬸘",
      "𬙂",
      "𪩘"
    ],
    fǔ: [
      "乶",
      "俌",
      "俛",
      "俯",
      "府",
      "弣",
      "抚",
      "拊",
      "撫",
      "斧",
      "椨",
      "滏",
      "焤",
      "甫",
      "盙",
      "簠",
      "腐",
      "腑",
      "蜅",
      "輔",
      "辅",
      "郙",
      "釜",
      "釡",
      "阝",
      "頫",
      "鬴",
      "黼",
      "㕮",
      "𫖯"
    ],
    shā: [
      "乷",
      "唦",
      "杀",
      "桬",
      "殺",
      "毮",
      "猀",
      "痧",
      "砂",
      "硰",
      "紗",
      "繺",
      "纱",
      "蔱",
      "裟",
      "鎩",
      "铩",
      "閷",
      "髿",
      "魦",
      "鯊",
      "鯋",
      "鲨"
    ],
    nǎ: ["乸", "雫"],
    qián: [
      "乹",
      "亁",
      "仱",
      "偂",
      "前",
      "墘",
      "媊",
      "岒",
      "拑",
      "掮",
      "榩",
      "橬",
      "歬",
      "潛",
      "潜",
      "濳",
      "灊",
      "箝",
      "葥",
      "虔",
      "軡",
      "鈐",
      "鉗",
      "銭",
      "錢",
      "鎆",
      "钤",
      "钱",
      "钳",
      "靬",
      "騚",
      "騝",
      "鰬",
      "黔",
      "黚"
    ],
    suǒ: [
      "乺",
      "唢",
      "嗩",
      "所",
      "暛",
      "溑",
      "溹",
      "琐",
      "琑",
      "瑣",
      "索",
      "褨",
      "鎖",
      "鎻",
      "鏁",
      "锁"
    ],
    yú: [
      "乻",
      "于",
      "亐",
      "伃",
      "余",
      "堣",
      "堬",
      "妤",
      "娛",
      "娯",
      "娱",
      "嬩",
      "崳",
      "嵎",
      "嵛",
      "愚",
      "扵",
      "揄",
      "旟",
      "楡",
      "楰",
      "榆",
      "欤",
      "歈",
      "歟",
      "歶",
      "渔",
      "渝",
      "湡",
      "漁",
      "澞",
      "牏",
      "狳",
      "玗",
      "玙",
      "瑜",
      "璵",
      "盂",
      "睮",
      "窬",
      "竽",
      "籅",
      "羭",
      "腴",
      "臾",
      "舁",
      "舆",
      "艅",
      "茰",
      "萮",
      "萸",
      "蕍",
      "蘛",
      "虞",
      "虶",
      "蝓",
      "螸",
      "衧",
      "褕",
      "覦",
      "觎",
      "諛",
      "謣",
      "谀",
      "踰",
      "輿",
      "轝",
      "逾",
      "邘",
      "酑",
      "鍝",
      "隅",
      "雓",
      "雩",
      "餘",
      "馀",
      "騟",
      "骬",
      "髃",
      "魚",
      "魣",
      "鮽",
      "鯲",
      "鰅",
      "鱼",
      "鷠",
      "鸆",
      "齵"
    ],
    zhù: [
      "乼",
      "伫",
      "佇",
      "住",
      "坾",
      "墸",
      "壴",
      "嵀",
      "拀",
      "杼",
      "柱",
      "樦",
      "殶",
      "注",
      "炷",
      "疰",
      "眝",
      "祝",
      "祩",
      "竚",
      "筯",
      "箸",
      "篫",
      "簗",
      "紵",
      "紸",
      "纻",
      "羜",
      "翥",
      "苎",
      "莇",
      "蛀",
      "註",
      "貯",
      "贮",
      "跓",
      "軴",
      "鉒",
      "鋳",
      "鑄",
      "铸",
      "馵",
      "駐",
      "驻"
    ],
    zhě: ["乽", "者", "褶", "襵", "赭", "踷", "鍺", "锗"],
    "qián gān": ["乾"],
    "zhì luàn": ["乿"],
    guī: [
      "亀",
      "圭",
      "妫",
      "媯",
      "嫢",
      "嬀",
      "帰",
      "归",
      "摫",
      "椝",
      "槻",
      "槼",
      "櫷",
      "歸",
      "珪",
      "瑰",
      "璝",
      "瓌",
      "皈",
      "瞡",
      "硅",
      "茥",
      "蘬",
      "規",
      "规",
      "邽",
      "郌",
      "閨",
      "闺",
      "騩",
      "鬶",
      "鬹"
    ],
    "lǐn lìn": ["亃"],
    jué: [
      "亅",
      "决",
      "刔",
      "劂",
      "匷",
      "厥",
      "噊",
      "孒",
      "孓",
      "崛",
      "崫",
      "嶥",
      "彏",
      "憠",
      "憰",
      "戄",
      "抉",
      "挗",
      "掘",
      "攫",
      "桷",
      "橛",
      "橜",
      "欮",
      "氒",
      "決",
      "灍",
      "焳",
      "熦",
      "爑",
      "爴",
      "爵",
      "獗",
      "玃",
      "玦",
      "玨",
      "珏",
      "瑴",
      "瘚",
      "矍",
      "矡",
      "砄",
      "絕",
      "絶",
      "绝",
      "臄",
      "芵",
      "蕝",
      "蕨",
      "虳",
      "蟨",
      "蟩",
      "觖",
      "觮",
      "觼",
      "訣",
      "譎",
      "诀",
      "谲",
      "貜",
      "赽",
      "趉",
      "蹷",
      "躩",
      "鈌",
      "鐍",
      "鐝",
      "钁",
      "镢",
      "鴂",
      "鴃",
      "鷢",
      "𫘝",
      "㵐",
      "𫔎"
    ],
    "le liǎo": ["了"],
    "gè mā": ["亇"],
    "yǔ yú": ["予", "懙"],
    zhēng: [
      "争",
      "佂",
      "凧",
      "姃",
      "媜",
      "峥",
      "崝",
      "崢",
      "征",
      "徰",
      "炡",
      "烝",
      "爭",
      "狰",
      "猙",
      "癥",
      "眐",
      "睁",
      "睜",
      "筝",
      "箏",
      "篜",
      "聇",
      "脀",
      "蒸",
      "踭",
      "鉦",
      "錚",
      "鏳",
      "鬇"
    ],
    èr: ["二", "刵", "咡", "弍", "弐", "樲", "誀", "貮", "貳", "贰", "髶"],
    chù: [
      "亍",
      "傗",
      "儊",
      "怵",
      "憷",
      "搐",
      "斶",
      "歜",
      "珿",
      "琡",
      "矗",
      "竌",
      "絀",
      "绌",
      "臅",
      "触",
      "觸",
      "豖",
      "鄐",
      "閦",
      "黜"
    ],
    kuī: ["亏", "刲", "岿", "巋", "盔", "窥", "窺", "聧", "虧", "闚", "顝"],
    yún: [
      "云",
      "伝",
      "勻",
      "匀",
      "囩",
      "妘",
      "愪",
      "抣",
      "昀",
      "橒",
      "沄",
      "涢",
      "溳",
      "澐",
      "熉",
      "畇",
      "秐",
      "筼",
      "篔",
      "紜",
      "縜",
      "纭",
      "耘",
      "芸",
      "蒷",
      "蕓",
      "郧",
      "鄖",
      "鋆",
      "雲"
    ],
    hù: [
      "互",
      "冱",
      "嗀",
      "嚛",
      "婟",
      "嫭",
      "嫮",
      "岵",
      "帍",
      "弖",
      "怙",
      "戶",
      "户",
      "戸",
      "戽",
      "扈",
      "护",
      "昈",
      "槴",
      "沍",
      "沪",
      "滬",
      "熩",
      "瓠",
      "祜",
      "笏",
      "簄",
      "粐",
      "綔",
      "蔰",
      "護",
      "豰",
      "鄠",
      "鍙",
      "頀",
      "鱯",
      "鳠",
      "鳸",
      "鸌",
      "鹱"
    ],
    qí: [
      "亓",
      "剘",
      "埼",
      "岐",
      "岓",
      "崎",
      "嵜",
      "愭",
      "掑",
      "斉",
      "斊",
      "旂",
      "旗",
      "棊",
      "棋",
      "檱",
      "櫀",
      "歧",
      "淇",
      "濝",
      "猉",
      "玂",
      "琦",
      "琪",
      "璂",
      "畦",
      "疧",
      "碁",
      "碕",
      "祁",
      "祈",
      "祺",
      "禥",
      "竒",
      "簯",
      "簱",
      "籏",
      "粸",
      "綥",
      "綦",
      "肵",
      "脐",
      "臍",
      "艩",
      "芪",
      "萁",
      "萕",
      "蕲",
      "藄",
      "蘄",
      "蚑",
      "蚚",
      "蛴",
      "蜝",
      "蜞",
      "螧",
      "蠐",
      "褀",
      "軝",
      "鄿",
      "釮",
      "錡",
      "锜",
      "陭",
      "頎",
      "颀",
      "騎",
      "騏",
      "騹",
      "骐",
      "骑",
      "鬐",
      "鬿",
      "鯕",
      "鰭",
      "鲯",
      "鳍",
      "鵸",
      "鶀",
      "麒",
      "麡",
      "𨙸",
      "𬨂",
      "䓫"
    ],
    jǐng: [
      "井",
      "儆",
      "刭",
      "剄",
      "坓",
      "宑",
      "幜",
      "憬",
      "暻",
      "殌",
      "汫",
      "汬",
      "澋",
      "璄",
      "璟",
      "璥",
      "穽",
      "肼",
      "蟼",
      "警",
      "阱",
      "頚",
      "頸"
    ],
    sì: [
      "亖",
      "佀",
      "価",
      "儩",
      "兕",
      "嗣",
      "四",
      "姒",
      "娰",
      "孠",
      "寺",
      "巳",
      "柶",
      "榹",
      "汜",
      "泗",
      "泤",
      "洍",
      "洠",
      "涘",
      "瀃",
      "牭",
      "祀",
      "禩",
      "竢",
      "笥",
      "耜",
      "肂",
      "肆",
      "蕼",
      "覗",
      "貄",
      "釲",
      "鈶",
      "鈻",
      "飤",
      "飼",
      "饲",
      "駟",
      "騃",
      "驷"
    ],
    suì: [
      "亗",
      "嬘",
      "岁",
      "嵗",
      "旞",
      "檖",
      "歲",
      "歳",
      "澻",
      "煫",
      "燧",
      "璲",
      "砕",
      "碎",
      "祟",
      "禭",
      "穂",
      "穗",
      "穟",
      "繀",
      "繐",
      "繸",
      "襚",
      "誶",
      "譢",
      "谇",
      "賥",
      "邃",
      "鐆",
      "鐩",
      "隧",
      "韢",
      "𫟦",
      "𬭼"
    ],
    gèn: ["亘", "亙", "揯", "搄", "茛"],
    yà: [
      "亚",
      "亜",
      "俹",
      "冴",
      "劜",
      "圔",
      "圠",
      "埡",
      "娅",
      "婭",
      "揠",
      "氩",
      "氬",
      "犽",
      "砑",
      "稏",
      "聐",
      "襾",
      "覀",
      "訝",
      "讶",
      "迓",
      "齾"
    ],
    "xiē suò": ["些"],
    "qí zhāi": ["亝", "齊"],
    "yā yà": ["亞", "压", "垭", "壓", "铔"],
    "jí qì": ["亟", "焏"],
    tóu: ["亠", "投", "頭", "骰"],
    "wáng wú": ["亡"],
    "kàng háng gāng": ["亢"],
    dà: ["亣", "眔"],
    jiāo: [
      "交",
      "僬",
      "娇",
      "嬌",
      "峧",
      "嶕",
      "嶣",
      "憍",
      "椒",
      "浇",
      "澆",
      "焦",
      "礁",
      "穚",
      "簥",
      "胶",
      "膠",
      "膲",
      "茭",
      "茮",
      "蕉",
      "虠",
      "蛟",
      "蟭",
      "跤",
      "轇",
      "郊",
      "鐎",
      "驕",
      "骄",
      "鮫",
      "鲛",
      "鵁",
      "鷦",
      "鷮",
      "鹪",
      "䴔"
    ],
    hài: ["亥", "嗐", "害", "氦", "餀", "饚", "駭", "駴", "骇"],
    "hēng pēng": ["亨"],
    mǔ: [
      "亩",
      "姆",
      "峔",
      "拇",
      "母",
      "牡",
      "牳",
      "畂",
      "畆",
      "畒",
      "畝",
      "畞",
      "畮",
      "砪",
      "胟",
      "踇",
      "鉧",
      "𬭁",
      "𧿹"
    ],
    ye: ["亪"],
    xiǎng: [
      "享",
      "亯",
      "响",
      "想",
      "晑",
      "蚃",
      "蠁",
      "響",
      "飨",
      "餉",
      "饗",
      "饷",
      "鮝",
      "鯗",
      "鱶",
      "鲞"
    ],
    jīng: [
      "京",
      "亰",
      "兢",
      "坕",
      "坙",
      "婛",
      "惊",
      "旌",
      "旍",
      "晶",
      "橸",
      "泾",
      "涇",
      "猄",
      "睛",
      "秔",
      "稉",
      "粳",
      "精",
      "経",
      "經",
      "綡",
      "聙",
      "腈",
      "茎",
      "荆",
      "荊",
      "菁",
      "葏",
      "驚",
      "鯨",
      "鲸",
      "鶁",
      "鶄",
      "麖",
      "麠",
      "鼱",
      "䴖"
    ],
    tíng: [
      "亭",
      "停",
      "婷",
      "嵉",
      "庭",
      "廷",
      "楟",
      "榳",
      "筳",
      "聤",
      "莛",
      "葶",
      "蜓",
      "蝏",
      "諪",
      "邒",
      "霆",
      "鼮",
      "䗴"
    ],
    liàng: ["亮", "喨", "悢", "晾", "湸", "諒", "谅", "輌", "輛", "辆", "鍄"],
    "qīn qìng": ["亲", "親"],
    bó: [
      "亳",
      "仢",
      "侼",
      "僰",
      "博",
      "帛",
      "愽",
      "懪",
      "挬",
      "搏",
      "欂",
      "浡",
      "淿",
      "渤",
      "煿",
      "牔",
      "狛",
      "瓝",
      "礴",
      "秡",
      "箔",
      "簙",
      "糪",
      "胉",
      "脖",
      "膊",
      "舶",
      "艊",
      "萡",
      "葧",
      "袯",
      "襏",
      "襮",
      "謈",
      "踣",
      "郣",
      "鈸",
      "鉑",
      "鋍",
      "鎛",
      "鑮",
      "钹",
      "铂",
      "镈",
      "餺",
      "馎",
      "馛",
      "馞",
      "駁",
      "駮",
      "驳",
      "髆",
      "鵓",
      "鹁"
    ],
    yòu: [
      "亴",
      "佑",
      "佦",
      "侑",
      "又",
      "右",
      "哊",
      "唀",
      "囿",
      "姷",
      "宥",
      "峟",
      "幼",
      "狖",
      "祐",
      "蚴",
      "誘",
      "诱",
      "貁",
      "迶",
      "酭",
      "釉",
      "鼬"
    ],
    xiè: [
      "亵",
      "伳",
      "偞",
      "偰",
      "僁",
      "卨",
      "卸",
      "噧",
      "塮",
      "夑",
      "媟",
      "屑",
      "屧",
      "廨",
      "徢",
      "懈",
      "暬",
      "械",
      "榍",
      "榭",
      "泻",
      "洩",
      "渫",
      "澥",
      "瀉",
      "瀣",
      "灺",
      "炧",
      "炨",
      "燮",
      "爕",
      "獬",
      "祄",
      "禼",
      "糏",
      "紲",
      "絏",
      "絬",
      "繲",
      "纈",
      "绁",
      "缷",
      "薢",
      "薤",
      "蟹",
      "蠏",
      "褉",
      "褻",
      "謝",
      "谢",
      "躞",
      "邂",
      "靾",
      "韰",
      "齂",
      "齘",
      "齛",
      "齥",
      "𬹼",
      "𤫉"
    ],
    "dǎn dàn": ["亶", "馾"],
    lián: [
      "亷",
      "劆",
      "匲",
      "匳",
      "嗹",
      "噒",
      "奁",
      "奩",
      "嫾",
      "帘",
      "廉",
      "怜",
      "憐",
      "涟",
      "漣",
      "濂",
      "濓",
      "瀮",
      "熑",
      "燫",
      "簾",
      "籢",
      "籨",
      "縺",
      "翴",
      "联",
      "聨",
      "聫",
      "聮",
      "聯",
      "臁",
      "莲",
      "蓮",
      "薕",
      "螊",
      "蠊",
      "裢",
      "褳",
      "覝",
      "謰",
      "蹥",
      "连",
      "連",
      "鎌",
      "鐮",
      "镰",
      "鬑",
      "鰱",
      "鲢"
    ],
    duǒ: [
      "亸",
      "哚",
      "嚲",
      "埵",
      "崜",
      "朵",
      "朶",
      "綞",
      "缍",
      "趓",
      "躱",
      "躲",
      "軃"
    ],
    "wěi mén": ["亹", "斖"],
    rén: ["人", "亻", "仁", "壬", "忈", "忎", "朲", "秂", "芢", "魜", "鵀"],
    jí: [
      "亼",
      "亽",
      "伋",
      "佶",
      "偮",
      "卙",
      "即",
      "卽",
      "及",
      "叝",
      "吉",
      "堲",
      "塉",
      "姞",
      "嫉",
      "岌",
      "嵴",
      "嶯",
      "彶",
      "忣",
      "急",
      "愱",
      "戢",
      "揤",
      "极",
      "棘",
      "楫",
      "極",
      "槉",
      "檝",
      "殛",
      "汲",
      "湒",
      "潗",
      "疾",
      "瘠",
      "皍",
      "笈",
      "箿",
      "籍",
      "級",
      "级",
      "膌",
      "艥",
      "蒺",
      "蕀",
      "蕺",
      "蝍",
      "螏",
      "襋",
      "觙",
      "谻",
      "踖",
      "蹐",
      "躤",
      "輯",
      "轚",
      "辑",
      "郆",
      "銡",
      "鍓",
      "鏶",
      "集",
      "雧",
      "霵",
      "鹡",
      "㴔"
    ],
    wáng: ["亾", "仼", "兦", "莣", "蚟"],
    "shén shí": ["什"],
    lè: [
      "仂",
      "叻",
      "忇",
      "氻",
      "泐",
      "玏",
      "砳",
      "簕",
      "艻",
      "阞",
      "韷",
      "餎",
      "鰳",
      "鱳",
      "鳓"
    ],
    dīng: ["仃", "叮", "帄", "玎", "疔", "盯", "耵", "虰", "靪"],
    zè: ["仄", "崱", "庂", "捑", "昃", "昗", "汄"],
    "jǐn jìn": ["仅", "僅", "嫤"],
    "pú pū": ["仆"],
    "chóu qiú": ["仇"],
    zhǎng: ["仉", "幥", "掌", "礃"],
    jīn: [
      "今",
      "堻",
      "巾",
      "惍",
      "斤",
      "津",
      "珒",
      "琻",
      "璡",
      "砛",
      "筋",
      "荕",
      "衿",
      "襟",
      "觔",
      "金",
      "釒",
      "釿",
      "钅",
      "鹶",
      "黅",
      "𬬱"
    ],
    bīng: ["仌", "仒", "兵", "冫", "冰", "掤", "氷", "鋲"],
    réng: ["仍", "礽", "芿", "辸", "陾"],
    fó: ["仏", "坲", "梻"],
    "jīn sǎn": ["仐"],
    lún: [
      "仑",
      "伦",
      "侖",
      "倫",
      "囵",
      "圇",
      "婨",
      "崘",
      "崙",
      "棆",
      "沦",
      "淪",
      "磮",
      "腀",
      "菕",
      "蜦",
      "踚",
      "輪",
      "轮",
      "錀",
      "陯",
      "鯩",
      "𬬭"
    ],
    cāng: [
      "仓",
      "仺",
      "倉",
      "凔",
      "嵢",
      "沧",
      "滄",
      "濸",
      "獊",
      "舱",
      "艙",
      "苍",
      "蒼",
      "螥",
      "鸧"
    ],
    "zǎi zǐ zī": ["仔"],
    tā: ["他", "塌", "它", "榙", "溻", "牠", "祂", "褟", "趿", "遢", "闧"],
    fù: [
      "付",
      "偩",
      "傅",
      "冨",
      "副",
      "咐",
      "坿",
      "复",
      "妇",
      "婦",
      "媍",
      "嬔",
      "富",
      "復",
      "椱",
      "祔",
      "禣",
      "竎",
      "緮",
      "縛",
      "缚",
      "腹",
      "萯",
      "蕧",
      "蚹",
      "蛗",
      "蝜",
      "蝮",
      "袝",
      "複",
      "覄",
      "覆",
      "訃",
      "詂",
      "讣",
      "負",
      "賦",
      "賻",
      "负",
      "赋",
      "赙",
      "赴",
      "輹",
      "鍑",
      "鍢",
      "阜",
      "附",
      "馥",
      "駙",
      "驸",
      "鮒",
      "鰒",
      "鲋",
      "鳆",
      "㳇"
    ],
    xiān: [
      "仙",
      "仚",
      "佡",
      "僊",
      "僲",
      "先",
      "嘕",
      "奾",
      "屳",
      "廯",
      "忺",
      "憸",
      "掀",
      "暹",
      "杴",
      "氙",
      "珗",
      "祆",
      "秈",
      "籼",
      "繊",
      "纎",
      "纖",
      "苮",
      "褼",
      "襳",
      "跹",
      "蹮",
      "躚",
      "酰",
      "鍁",
      "锨",
      "韯",
      "韱",
      "馦",
      "鱻",
      "鶱",
      "𬸣"
    ],
    "tuō chà duó": ["仛"],
    hóng: [
      "仜",
      "吰",
      "垬",
      "妅",
      "娂",
      "宏",
      "宖",
      "弘",
      "彋",
      "汯",
      "泓",
      "洪",
      "浤",
      "渱",
      "潂",
      "玒",
      "玜",
      "竑",
      "竤",
      "篊",
      "粠",
      "紘",
      "紭",
      "綋",
      "纮",
      "翃",
      "翝",
      "耾",
      "苰",
      "荭",
      "葒",
      "葓",
      "谹",
      "谼",
      "鈜",
      "鉷",
      "鋐",
      "閎",
      "闳",
      "霐",
      "霟",
      "鞃",
      "魟",
      "鴻",
      "鸿",
      "黉",
      "黌",
      "𫟹",
      "𬭎"
    ],
    tóng: [
      "仝",
      "佟",
      "哃",
      "峂",
      "峝",
      "庝",
      "彤",
      "晍",
      "曈",
      "桐",
      "氃",
      "浵",
      "潼",
      "犝",
      "獞",
      "眮",
      "瞳",
      "砼",
      "秱",
      "童",
      "粡",
      "膧",
      "茼",
      "蚒",
      "詷",
      "赨",
      "酮",
      "鉖",
      "鉵",
      "銅",
      "铜",
      "餇",
      "鮦",
      "鲖",
      "𫍣",
      "𦒍"
    ],
    rèn: [
      "仞",
      "仭",
      "刃",
      "刄",
      "妊",
      "姙",
      "屻",
      "岃",
      "扨",
      "牣",
      "祍",
      "紉",
      "紝",
      "絍",
      "纫",
      "纴",
      "肕",
      "腍",
      "衽",
      "袵",
      "訒",
      "認",
      "认",
      "讱",
      "軔",
      "轫",
      "鈓",
      "靭",
      "靱",
      "韌",
      "韧",
      "飪",
      "餁",
      "饪"
    ],
    qiān: [
      "仟",
      "佥",
      "僉",
      "千",
      "圲",
      "奷",
      "孯",
      "岍",
      "悭",
      "愆",
      "慳",
      "扦",
      "拪",
      "搴",
      "撁",
      "攐",
      "攑",
      "攓",
      "杄",
      "櫏",
      "汘",
      "汧",
      "牵",
      "牽",
      "竏",
      "签",
      "簽",
      "籖",
      "籤",
      "粁",
      "芊",
      "茾",
      "蚈",
      "褰",
      "諐",
      "謙",
      "谦",
      "谸",
      "迁",
      "遷",
      "釺",
      "鈆",
      "鉛",
      "鏲",
      "钎",
      "阡",
      "韆",
      "顅",
      "騫",
      "骞",
      "鬜",
      "鬝",
      "鵮",
      "鹐"
    ],
    "gǎn hàn": ["仠"],
    "yì gē": ["仡"],
    dài: [
      "代",
      "侢",
      "叇",
      "垈",
      "埭",
      "岱",
      "帒",
      "带",
      "帯",
      "帶",
      "廗",
      "怠",
      "戴",
      "曃",
      "柋",
      "殆",
      "瀻",
      "玳",
      "瑇",
      "甙",
      "簤",
      "紿",
      "緿",
      "绐",
      "艜",
      "蝳",
      "袋",
      "襶",
      "貣",
      "贷",
      "蹛",
      "軑",
      "軚",
      "軩",
      "轪",
      "迨",
      "霴",
      "靆",
      "鴏",
      "黛",
      "黱"
    ],
    "lìng líng lǐng": ["令"],
    chào: ["仦", "耖", "觘"],
    "cháng zhǎng": ["仧", "兏", "長", "长"],
    sā: ["仨"],
    cháng: [
      "仩",
      "偿",
      "償",
      "嘗",
      "嚐",
      "嫦",
      "尝",
      "常",
      "徜",
      "瑺",
      "瓺",
      "甞",
      "肠",
      "腸",
      "膓",
      "苌",
      "萇",
      "镸",
      "鱨",
      "鲿"
    ],
    yí: [
      "仪",
      "侇",
      "儀",
      "冝",
      "匜",
      "咦",
      "圯",
      "夷",
      "姨",
      "宐",
      "宜",
      "宧",
      "寲",
      "峓",
      "嶬",
      "嶷",
      "巸",
      "彛",
      "彜",
      "彝",
      "彞",
      "怡",
      "恞",
      "扅",
      "暆",
      "栘",
      "椬",
      "椸",
      "沂",
      "洟",
      "熪",
      "瓵",
      "痍",
      "移",
      "簃",
      "籎",
      "羠",
      "胰",
      "萓",
      "蛦",
      "螔",
      "觺",
      "謻",
      "貽",
      "贻",
      "跠",
      "迻",
      "遺",
      "鏔",
      "頉",
      "頤",
      "頥",
      "顊",
      "颐",
      "饴",
      "鮧",
      "鴺"
    ],
    mù: [
      "仫",
      "凩",
      "募",
      "墓",
      "幕",
      "幙",
      "慔",
      "慕",
      "暮",
      "暯",
      "木",
      "楘",
      "毣",
      "沐",
      "炑",
      "牧",
      "狇",
      "目",
      "睦",
      "穆",
      "艒",
      "苜",
      "莯",
      "蚞",
      "鉬",
      "钼",
      "雮",
      "霂"
    ],
    "men mén": ["们"],
    fǎn: ["仮", "反", "橎", "返"],
    "chào miǎo": ["仯"],
    "yǎng áng": ["仰"],
    zhòng: [
      "仲",
      "众",
      "堹",
      "妕",
      "媑",
      "狆",
      "眾",
      "祌",
      "筗",
      "茽",
      "蚛",
      "衆",
      "衶",
      "諥"
    ],
    "pǐ pí": ["仳"],
    wò: [
      "仴",
      "偓",
      "卧",
      "媉",
      "幄",
      "握",
      "楃",
      "沃",
      "渥",
      "濣",
      "瓁",
      "瞃",
      "硪",
      "肟",
      "腛",
      "臥",
      "齷",
      "龌"
    ],
    jiàn: [
      "件",
      "俴",
      "健",
      "僭",
      "剑",
      "剣",
      "剱",
      "劍",
      "劎",
      "劒",
      "劔",
      "墹",
      "寋",
      "建",
      "徤",
      "擶",
      "旔",
      "楗",
      "毽",
      "洊",
      "涧",
      "澗",
      "牮",
      "珔",
      "瞷",
      "磵",
      "礀",
      "箭",
      "糋",
      "繝",
      "腱",
      "臶",
      "舰",
      "艦",
      "荐",
      "薦",
      "覸",
      "諓",
      "諫",
      "譛",
      "谏",
      "賎",
      "賤",
      "贱",
      "趝",
      "践",
      "踐",
      "踺",
      "轞",
      "鉴",
      "鍳",
      "鍵",
      "鐱",
      "鑑",
      "鑒",
      "鑬",
      "鑳",
      "键",
      "間",
      "餞",
      "饯",
      "𬣡"
    ],
    "jià jiè jie": ["价"],
    "yǎo fó": ["仸"],
    "rèn rén": ["任"],
    "fèn bīn": ["份"],
    dī: [
      "仾",
      "低",
      "啲",
      "埞",
      "堤",
      "岻",
      "彽",
      "樀",
      "滴",
      "磾",
      "秪",
      "羝",
      "袛",
      "趆",
      "隄",
      "鞮",
      "䃅"
    ],
    fǎng: [
      "仿",
      "倣",
      "旊",
      "昉",
      "昘",
      "瓬",
      "眆",
      "紡",
      "纺",
      "舫",
      "訪",
      "访",
      "髣",
      "鶭"
    ],
    zhōng: [
      "伀",
      "刣",
      "妐",
      "幒",
      "彸",
      "忠",
      "柊",
      "汷",
      "泈",
      "炂",
      "盅",
      "籦",
      "終",
      "终",
      "舯",
      "蔠",
      "蜙",
      "螤",
      "螽",
      "衳",
      "衷",
      "蹱",
      "鈡",
      "鍾",
      "鐘",
      "钟",
      "锺",
      "鴤",
      "鼨"
    ],
    pèi: [
      "伂",
      "佩",
      "姵",
      "帔",
      "斾",
      "旆",
      "沛",
      "浿",
      "珮",
      "蓜",
      "轡",
      "辔",
      "配",
      "霈",
      "馷"
    ],
    diào: [
      "伄",
      "吊",
      "弔",
      "掉",
      "瘹",
      "盄",
      "窎",
      "窵",
      "竨",
      "訋",
      "釣",
      "鈟",
      "銱",
      "鋽",
      "鑃",
      "钓",
      "铞",
      "雿",
      "魡"
    ],
    dùn: [
      "伅",
      "潡",
      "炖",
      "燉",
      "盾",
      "砘",
      "碷",
      "踲",
      "逇",
      "遁",
      "遯",
      "鈍",
      "钝"
    ],
    wěn: ["伆", "刎", "吻", "呅", "抆", "桽", "稳", "穏", "穩", "紊", "肳", "脗"],
    xǐn: ["伈"],
    kàng: ["伉", "匟", "囥", "抗", "炕", "鈧", "钪"],
    ài: [
      "伌",
      "僾",
      "塧",
      "壒",
      "嫒",
      "嬡",
      "愛",
      "懓",
      "暧",
      "曖",
      "爱",
      "瑷",
      "璦",
      "皧",
      "瞹",
      "砹",
      "硋",
      "碍",
      "礙",
      "薆",
      "譺",
      "賹",
      "鑀",
      "隘",
      "靉",
      "餲",
      "馤",
      "鱫",
      "鴱"
    ],
    "jì qí": ["伎", "薺"],
    "xiū xǔ": ["休"],
    "jìn yín": ["伒"],
    dǎn: [
      "伔",
      "刐",
      "撢",
      "玬",
      "瓭",
      "紞",
      "胆",
      "膽",
      "衴",
      "賧",
      "赕",
      "黕",
      "𬘘"
    ],
    fū: [
      "伕",
      "呋",
      "娐",
      "孵",
      "尃",
      "怤",
      "懯",
      "敷",
      "旉",
      "玞",
      "砆",
      "稃",
      "筟",
      "糐",
      "綒",
      "肤",
      "膚",
      "荂",
      "荴",
      "衭",
      "趺",
      "跗",
      "邞",
      "鄜",
      "酜",
      "鈇",
      "麩",
      "麬",
      "麱",
      "麸",
      "𫓧"
    ],
    tǎng: [
      "伖",
      "傥",
      "儻",
      "埫",
      "戃",
      "曭",
      "爣",
      "矘",
      "躺",
      "鎲",
      "钂",
      "镋"
    ],
    yōu: [
      "优",
      "優",
      "呦",
      "嚘",
      "峳",
      "幽",
      "忧",
      "悠",
      "憂",
      "攸",
      "櫌",
      "滺",
      "瀀",
      "纋",
      "羪",
      "耰",
      "逌",
      "鄾",
      "麀"
    ],
    huǒ: ["伙", "夥", "火", "煷", "邩", "鈥", "钬"],
    "huì kuài": ["会", "會", "浍", "璯"],
    yǔ: [
      "伛",
      "俁",
      "俣",
      "偊",
      "傴",
      "匬",
      "噳",
      "圄",
      "圉",
      "宇",
      "寙",
      "屿",
      "嶼",
      "庾",
      "挧",
      "敔",
      "斞",
      "楀",
      "瑀",
      "瘐",
      "祤",
      "禹",
      "穥",
      "窳",
      "羽",
      "與",
      "萭",
      "貐",
      "鄅",
      "頨",
      "麌",
      "齬",
      "龉",
      "㺄"
    ],
    cuì: [
      "伜",
      "啛",
      "忰",
      "悴",
      "毳",
      "淬",
      "焠",
      "疩",
      "瘁",
      "竁",
      "粋",
      "粹",
      "紣",
      "綷",
      "翆",
      "翠",
      "脃",
      "脆",
      "脺",
      "膬",
      "膵",
      "臎",
      "萃",
      "襊",
      "顇"
    ],
    sǎn: ["伞", "傘", "糤", "繖", "饊", "馓"],
    wěi: [
      "伟",
      "伪",
      "偉",
      "偽",
      "僞",
      "儰",
      "娓",
      "寪",
      "屗",
      "崣",
      "嶉",
      "徫",
      "愇",
      "捤",
      "暐",
      "梶",
      "洧",
      "浘",
      "渨",
      "炜",
      "煒",
      "猥",
      "玮",
      "瑋",
      "痿",
      "緯",
      "纬",
      "腲",
      "艉",
      "芛",
      "苇",
      "荱",
      "萎",
      "葦",
      "蒍",
      "蔿",
      "蜼",
      "諉",
      "诿",
      "踓",
      "鍡",
      "韑",
      "韙",
      "韡",
      "韪",
      "頠",
      "颹",
      "骩",
      "骪",
      "骫",
      "鮪",
      "鲔",
      "𫇭",
      "𬀩",
      "𬱟"
    ],
    "chuán zhuàn": ["传", "傳"],
    "chē jū": ["伡", "俥", "车"],
    "jū chē": ["車"],
    yá: [
      "伢",
      "厑",
      "厓",
      "堐",
      "岈",
      "崕",
      "崖",
      "涯",
      "漄",
      "牙",
      "玡",
      "琊",
      "睚",
      "笌",
      "芽",
      "蚜",
      "衙",
      "齖"
    ],
    qiàn: [
      "伣",
      "俔",
      "倩",
      "儙",
      "刋",
      "壍",
      "嬱",
      "悓",
      "棈",
      "椠",
      "槧",
      "欠",
      "歉",
      "皘",
      "篏",
      "篟",
      "縴",
      "芡",
      "蒨",
      "蔳",
      "輤",
      "𬘬"
    ],
    shāng: [
      "伤",
      "傷",
      "商",
      "墒",
      "慯",
      "殇",
      "殤",
      "滳",
      "漡",
      "熵",
      "蔏",
      "螪",
      "觞",
      "觴",
      "謪",
      "鬺"
    ],
    chāng: [
      "伥",
      "倀",
      "娼",
      "昌",
      "椙",
      "淐",
      "猖",
      "琩",
      "菖",
      "裮",
      "錩",
      "锠",
      "閶",
      "阊",
      "鯧",
      "鲳",
      "鼚"
    ],
    "chen cāng": ["伧"],
    xùn: [
      "伨",
      "侚",
      "卂",
      "噀",
      "巺",
      "巽",
      "徇",
      "愻",
      "殉",
      "殾",
      "汛",
      "潠",
      "狥",
      "蕈",
      "訊",
      "訓",
      "訙",
      "训",
      "讯",
      "迅",
      "迿",
      "逊",
      "遜",
      "鑂",
      "顨",
      "馴",
      "驯"
    ],
    xìn: ["伩", "囟", "孞", "脪", "舋", "衅", "訫", "釁", "阠", "顖"],
    chǐ: [
      "伬",
      "侈",
      "卶",
      "叺",
      "呎",
      "垑",
      "恥",
      "歯",
      "耻",
      "肔",
      "胣",
      "蚇",
      "裭",
      "褫",
      "豉",
      "鉹",
      "齒",
      "齿"
    ],
    "xián xuán": ["伭"],
    "nú nǔ": ["伮"],
    "bó bǎi": ["伯"],
    "gū gù": ["估"],
    nǐ: ["伱", "你", "儞", "孴", "拟", "擬", "旎", "晲", "狔", "苨", "薿", "隬"],
    "nì ní": ["伲"],
    bàn: [
      "伴",
      "办",
      "半",
      "姅",
      "怑",
      "扮",
      "瓣",
      "秚",
      "絆",
      "绊",
      "辦",
      "鉡",
      "靽"
    ],
    xù: [
      "伵",
      "侐",
      "勖",
      "勗",
      "卹",
      "叙",
      "垿",
      "壻",
      "婿",
      "序",
      "恤",
      "敍",
      "敘",
      "旭",
      "昫",
      "朂",
      "槒",
      "欰",
      "殈",
      "汿",
      "沀",
      "洫",
      "溆",
      "漵",
      "潊",
      "烅",
      "烼",
      "煦",
      "獝",
      "珬",
      "盢",
      "瞁",
      "稸",
      "絮",
      "続",
      "緒",
      "緖",
      "續",
      "绪",
      "续",
      "聓",
      "聟",
      "蓄",
      "藚",
      "訹",
      "賉",
      "酗",
      "頊",
      "鱮",
      "㳚"
    ],
    zhòu: [
      "伷",
      "僽",
      "冑",
      "呪",
      "咒",
      "咮",
      "宙",
      "昼",
      "晝",
      "甃",
      "皱",
      "皺",
      "籀",
      "籒",
      "籕",
      "粙",
      "紂",
      "縐",
      "纣",
      "绉",
      "胄",
      "荮",
      "葤",
      "詋",
      "酎",
      "駎",
      "驟",
      "骤",
      "㤘",
      "㑇"
    ],
    shēn: [
      "伸",
      "侁",
      "兟",
      "呻",
      "堔",
      "妽",
      "娠",
      "屾",
      "峷",
      "扟",
      "敒",
      "曑",
      "柛",
      "氠",
      "深",
      "燊",
      "珅",
      "甡",
      "甧",
      "申",
      "眒",
      "砷",
      "穼",
      "籶",
      "籸",
      "糂",
      "紳",
      "绅",
      "罙",
      "罧",
      "葠",
      "蓡",
      "蔘",
      "薓",
      "裑",
      "訷",
      "詵",
      "诜",
      "身",
      "駪",
      "鯓",
      "鯵",
      "鰺",
      "鲹",
      "鵢",
      "𬳽"
    ],
    qū: [
      "伹",
      "佉",
      "匤",
      "呿",
      "坥",
      "屈",
      "岖",
      "岴",
      "嶇",
      "憈",
      "抾",
      "敺",
      "浀",
      "煀",
      "祛",
      "筁",
      "粬",
      "胠",
      "蛆",
      "蛐",
      "袪",
      "覻",
      "詘",
      "诎",
      "趍",
      "躯",
      "軀",
      "阹",
      "駆",
      "駈",
      "驅",
      "驱",
      "髷",
      "魼",
      "鰸",
      "鱋",
      "鶌",
      "麯",
      "麴",
      "麹",
      "黢",
      "㭕",
      "𪨰",
      "䓛"
    ],
    "sì cì": ["伺"],
    bēng: ["伻", "嘣", "奟", "崩", "嵭", "閍"],
    "sì shì": ["似"],
    "jiā qié gā": ["伽"],
    "yǐ chì": ["佁"],
    "diàn tián": ["佃", "钿"],
    "hān gàn": ["佄"],
    mài: [
      "佅",
      "劢",
      "勱",
      "卖",
      "唛",
      "売",
      "脈",
      "衇",
      "賣",
      "迈",
      "邁",
      "霡",
      "霢",
      "麥",
      "麦",
      "鿏"
    ],
    dàn: [
      "但",
      "僤",
      "啖",
      "啗",
      "啿",
      "噉",
      "嚪",
      "帎",
      "憺",
      "旦",
      "柦",
      "氮",
      "沊",
      "泹",
      "淡",
      "狚",
      "疍",
      "癚",
      "禫",
      "窞",
      "腅",
      "萏",
      "蓞",
      "蛋",
      "蜑",
      "觛",
      "訑",
      "誕",
      "诞",
      "贉",
      "霮",
      "餤",
      "饏",
      "駳",
      "髧",
      "鴠",
      "𫢸"
    ],
    bù: [
      "佈",
      "勏",
      "吥",
      "咘",
      "埗",
      "埠",
      "布",
      "廍",
      "怖",
      "悑",
      "步",
      "歨",
      "歩",
      "瓿",
      "篰",
      "荹",
      "蔀",
      "踄",
      "部",
      "郶",
      "鈈",
      "钚",
      "餢"
    ],
    bǐ: [
      "佊",
      "俾",
      "匕",
      "夶",
      "妣",
      "彼",
      "朼",
      "柀",
      "比",
      "毞",
      "沘",
      "疕",
      "秕",
      "笔",
      "筆",
      "粃",
      "聛",
      "舭",
      "貏",
      "鄙"
    ],
    "zhāo shào": ["佋"],
    cǐ: ["佌", "此", "泚", "皉", "𫚖"],
    wèi: [
      "位",
      "卫",
      "味",
      "喂",
      "墛",
      "媦",
      "慰",
      "懀",
      "未",
      "渭",
      "煟",
      "熭",
      "犚",
      "猬",
      "畏",
      "緭",
      "罻",
      "胃",
      "苿",
      "菋",
      "藯",
      "蘶",
      "蝟",
      "螱",
      "衛",
      "衞",
      "褽",
      "謂",
      "讆",
      "讏",
      "谓",
      "躗",
      "躛",
      "軎",
      "轊",
      "鏏",
      "霨",
      "餧",
      "餵",
      "饖",
      "魏",
      "鮇",
      "鳚"
    ],
    zuǒ: ["佐", "左", "繓"],
    yǎng: [
      "佒",
      "傟",
      "养",
      "坱",
      "岟",
      "慃",
      "懩",
      "攁",
      "氧",
      "氱",
      "炴",
      "痒",
      "癢",
      "礢",
      "紻",
      "蝆",
      "軮",
      "養",
      "駚"
    ],
    "tǐ tī": ["体", "體"],
    zhàn: [
      "佔",
      "偡",
      "嶘",
      "战",
      "戦",
      "戰",
      "栈",
      "桟",
      "棧",
      "湛",
      "站",
      "綻",
      "绽",
      "菚",
      "蘸",
      "虥",
      "虦",
      "譧",
      "轏",
      "驏"
    ],
    "hé hē hè": ["何"],
    bì: [
      "佖",
      "咇",
      "哔",
      "嗶",
      "坒",
      "堛",
      "壁",
      "奰",
      "妼",
      "婢",
      "嬖",
      "币",
      "幣",
      "幤",
      "庇",
      "庳",
      "廦",
      "弊",
      "弻",
      "弼",
      "彃",
      "必",
      "怭",
      "愊",
      "愎",
      "敝",
      "斃",
      "梐",
      "毕",
      "毖",
      "毙",
      "湢",
      "滗",
      "滭",
      "潷",
      "煏",
      "熚",
      "狴",
      "獘",
      "獙",
      "珌",
      "璧",
      "畀",
      "畢",
      "疪",
      "痹",
      "痺",
      "皕",
      "睤",
      "碧",
      "筚",
      "箅",
      "箆",
      "篦",
      "篳",
      "粊",
      "綼",
      "縪",
      "繴",
      "罼",
      "腷",
      "苾",
      "荜",
      "萆",
      "萞",
      "蓖",
      "蓽",
      "蔽",
      "薜",
      "蜌",
      "袐",
      "襅",
      "襞",
      "襣",
      "觱",
      "詖",
      "诐",
      "貱",
      "贔",
      "赑",
      "跸",
      "蹕",
      "躃",
      "躄",
      "避",
      "邲",
      "鄨",
      "鄪",
      "鉍",
      "鏎",
      "鐴",
      "铋",
      "閇",
      "閉",
      "閟",
      "闭",
      "陛",
      "韠",
      "飶",
      "饆",
      "馝",
      "駜",
      "驆",
      "髀",
      "魓",
      "鮅",
      "鷝",
      "鷩",
      "鼊"
    ],
    tuó: [
      "佗",
      "坨",
      "堶",
      "岮",
      "槖",
      "橐",
      "沱",
      "砣",
      "砤",
      "碢",
      "紽",
      "詑",
      "跎",
      "酡",
      "阤",
      "陀",
      "陁",
      "駝",
      "駞",
      "騨",
      "驒",
      "驝",
      "驼",
      "鮀",
      "鴕",
      "鸵",
      "鼉",
      "鼍",
      "鼧",
      "𬶍"
    ],
    shé: ["佘", "舌", "虵", "蛥"],
    "yì dié": ["佚", "昳", "泆", "軼"],
    "fó fú bì bó": ["佛"],
    "zuò zuō": ["作"],
    gōu: [
      "佝",
      "沟",
      "溝",
      "痀",
      "篝",
      "簼",
      "緱",
      "缑",
      "袧",
      "褠",
      "鈎",
      "鉤",
      "钩",
      "鞲",
      "韝"
    ],
    nìng: ["佞", "侫", "倿", "寕", "泞", "澝", "濘"],
    qú: [
      "佢",
      "劬",
      "戵",
      "斪",
      "欋",
      "欔",
      "氍",
      "淭",
      "灈",
      "爠",
      "璖",
      "璩",
      "癯",
      "磲",
      "籧",
      "絇",
      "胊",
      "臞",
      "菃",
      "葋",
      "蕖",
      "蘧",
      "蟝",
      "蠷",
      "蠼",
      "衐",
      "衢",
      "躣",
      "軥",
      "鑺",
      "鴝",
      "鸜",
      "鸲",
      "鼩"
    ],
    "yōng yòng": ["佣"],
    wǎ: ["佤", "咓", "砙", "邷"],
    kǎ: ["佧", "垰", "胩", "裃", "鉲"],
    bāo: [
      "佨",
      "勹",
      "包",
      "孢",
      "煲",
      "笣",
      "胞",
      "苞",
      "蕔",
      "裦",
      "褒",
      "襃",
      "闁",
      "齙",
      "龅"
    ],
    "huái huí": ["佪"],
    "gé hè": ["佫"],
    lǎo: [
      "佬",
      "咾",
      "恅",
      "栳",
      "狫",
      "珯",
      "硓",
      "老",
      "耂",
      "荖",
      "蛯",
      "轑",
      "銠",
      "铑",
      "鮱"
    ],
    xiáng: ["佭", "庠", "栙", "祥", "絴", "翔", "詳", "跭"],
    gé: [
      "佮",
      "匌",
      "呄",
      "嗝",
      "塥",
      "愅",
      "挌",
      "搿",
      "槅",
      "櫊",
      "滆",
      "膈",
      "臵",
      "茖",
      "觡",
      "諽",
      "輵",
      "轕",
      "閣",
      "阁",
      "隔",
      "鞷",
      "韐",
      "韚",
      "騔",
      "骼",
      "鮯"
    ],
    yáng: [
      "佯",
      "劷",
      "垟",
      "崸",
      "徉",
      "扬",
      "揚",
      "敭",
      "旸",
      "昜",
      "暘",
      "杨",
      "楊",
      "洋",
      "炀",
      "珜",
      "疡",
      "瘍",
      "眻",
      "蛘",
      "諹",
      "輰",
      "鍚",
      "钖",
      "阦",
      "阳",
      "陽",
      "霷",
      "颺",
      "飏",
      "鰑",
      "鴹",
      "鸉"
    ],
    bǎi: ["佰", "捭", "摆", "擺", "栢", "百", "竡", "粨", "襬"],
    fǎ: ["佱", "峜", "法", "灋", "砝", "鍅"],
    mǐng: ["佲", "凕", "姳", "慏", "酩"],
    "èr nài": ["佴"],
    hěn: ["佷", "很", "狠", "詪", "𬣳"],
    huó: ["佸", "活"],
    guǐ: [
      "佹",
      "匦",
      "匭",
      "厬",
      "垝",
      "姽",
      "宄",
      "庋",
      "庪",
      "恑",
      "晷",
      "湀",
      "癸",
      "祪",
      "簋",
      "蛫",
      "蟡",
      "觤",
      "詭",
      "诡",
      "軌",
      "轨",
      "陒",
      "鬼"
    ],
    quán: [
      "佺",
      "全",
      "啳",
      "埢",
      "姾",
      "峑",
      "巏",
      "拳",
      "搼",
      "权",
      "楾",
      "権",
      "權",
      "泉",
      "洤",
      "湶",
      "牷",
      "犈",
      "瑔",
      "痊",
      "硂",
      "筌",
      "縓",
      "荃",
      "葲",
      "蜷",
      "蠸",
      "觠",
      "詮",
      "诠",
      "跧",
      "踡",
      "輇",
      "辁",
      "醛",
      "銓",
      "铨",
      "闎",
      "顴",
      "颧",
      "駩",
      "騡",
      "鬈",
      "鰁",
      "鳈",
      "齤"
    ],
    tiāo: ["佻", "庣", "旫", "祧", "聎"],
    jiǎo: [
      "佼",
      "儌",
      "孂",
      "挢",
      "搅",
      "撟",
      "撹",
      "攪",
      "敫",
      "敽",
      "敿",
      "晈",
      "暞",
      "曒",
      "灚",
      "燞",
      "狡",
      "璬",
      "皎",
      "皦",
      "絞",
      "纐",
      "绞",
      "腳",
      "臫",
      "蟜",
      "譑",
      "賋",
      "踋",
      "鉸",
      "铰",
      "餃",
      "饺",
      "鱎",
      "龣"
    ],
    cì: [
      "佽",
      "刾",
      "庛",
      "朿",
      "栨",
      "次",
      "絘",
      "茦",
      "莿",
      "蛓",
      "螆",
      "賜",
      "赐"
    ],
    xíng: [
      "侀",
      "刑",
      "哘",
      "型",
      "娙",
      "形",
      "洐",
      "硎",
      "蛵",
      "邢",
      "郉",
      "鈃",
      "鉶",
      "銒",
      "钘",
      "铏",
      "陉",
      "陘",
      "餳",
      "𫰛"
    ],
    tuō: [
      "侂",
      "咃",
      "咜",
      "圫",
      "托",
      "拕",
      "拖",
      "汑",
      "脫",
      "脱",
      "莌",
      "袥",
      "託",
      "讬",
      "飥",
      "饦",
      "魠",
      "鮵"
    ],
    kǎn: ["侃", "偘", "冚", "坎", "惂", "砍", "莰", "輡", "轗", "顑"],
    zhí: [
      "侄",
      "値",
      "值",
      "埴",
      "執",
      "姪",
      "嬂",
      "戠",
      "执",
      "摭",
      "植",
      "樴",
      "淔",
      "漐",
      "直",
      "禃",
      "絷",
      "縶",
      "聀",
      "职",
      "職",
      "膱",
      "蟙",
      "跖",
      "踯",
      "蹠",
      "躑",
      "軄",
      "釞",
      "馽"
    ],
    gāi: [
      "侅",
      "垓",
      "姟",
      "峐",
      "晐",
      "畡",
      "祴",
      "荄",
      "該",
      "该",
      "豥",
      "賅",
      "賌",
      "赅",
      "陔"
    ],
    lái: [
      "來",
      "俫",
      "倈",
      "崃",
      "崍",
      "庲",
      "来",
      "梾",
      "棶",
      "涞",
      "淶",
      "猍",
      "琜",
      "筙",
      "箂",
      "莱",
      "萊",
      "逨",
      "郲",
      "錸",
      "铼",
      "騋",
      "鯠",
      "鶆",
      "麳"
    ],
    kuǎ: ["侉", "咵", "垮", "銙"],
    gōng: [
      "侊",
      "公",
      "功",
      "匑",
      "匔",
      "塨",
      "宫",
      "宮",
      "工",
      "幊",
      "弓",
      "恭",
      "攻",
      "杛",
      "碽",
      "糼",
      "糿",
      "肱",
      "觥",
      "觵",
      "躬",
      "躳",
      "髸",
      "龔",
      "龚",
      "䢼"
    ],
    lì: [
      "例",
      "俐",
      "俪",
      "傈",
      "儮",
      "儷",
      "凓",
      "利",
      "力",
      "励",
      "勵",
      "历",
      "厉",
      "厤",
      "厯",
      "厲",
      "叓",
      "吏",
      "呖",
      "唎",
      "唳",
      "嚦",
      "囇",
      "坜",
      "塛",
      "壢",
      "娳",
      "婯",
      "屴",
      "岦",
      "悧",
      "悷",
      "慄",
      "戾",
      "搮",
      "暦",
      "曆",
      "曞",
      "朸",
      "枥",
      "栃",
      "栗",
      "栛",
      "檪",
      "櫔",
      "櫪",
      "欐",
      "歴",
      "歷",
      "沥",
      "沴",
      "涖",
      "溧",
      "濿",
      "瀝",
      "爏",
      "犡",
      "猁",
      "珕",
      "瑮",
      "瓅",
      "瓑",
      "瓥",
      "疬",
      "痢",
      "癧",
      "盭",
      "睙",
      "砅",
      "砺",
      "砾",
      "磿",
      "礪",
      "礫",
      "礰",
      "禲",
      "秝",
      "立",
      "笠",
      "篥",
      "粒",
      "粝",
      "糲",
      "脷",
      "苈",
      "茘",
      "荔",
      "莅",
      "莉",
      "蒚",
      "蒞",
      "藶",
      "蚸",
      "蛎",
      "蛠",
      "蜧",
      "蝷",
      "蠇",
      "蠣",
      "詈",
      "讈",
      "赲",
      "轢",
      "轣",
      "轹",
      "酈",
      "鉝",
      "隶",
      "隷",
      "雳",
      "靂",
      "靋",
      "鬁",
      "鳨",
      "鴗",
      "鷅",
      "麜",
      "𫵷",
      "𬍛"
    ],
    yīn: [
      "侌",
      "凐",
      "喑",
      "噾",
      "囙",
      "因",
      "垔",
      "堙",
      "姻",
      "婣",
      "愔",
      "慇",
      "栶",
      "氤",
      "洇",
      "溵",
      "濦",
      "瘖",
      "禋",
      "秵",
      "筃",
      "絪",
      "緸",
      "茵",
      "蒑",
      "蔭",
      "裀",
      "諲",
      "銦",
      "铟",
      "闉",
      "阥",
      "阴",
      "陰",
      "陻",
      "隂",
      "霒",
      "霠",
      "鞇",
      "音",
      "韾",
      "駰",
      "骃",
      "齗",
      "𬘡",
      "𬤇",
      "𬮱"
    ],
    mǐ: [
      "侎",
      "孊",
      "弭",
      "敉",
      "洣",
      "渳",
      "灖",
      "米",
      "粎",
      "羋",
      "脒",
      "芈",
      "葞",
      "蔝",
      "銤"
    ],
    zhū: [
      "侏",
      "株",
      "槠",
      "橥",
      "櫧",
      "櫫",
      "洙",
      "潴",
      "瀦",
      "猪",
      "珠",
      "硃",
      "秼",
      "絑",
      "茱",
      "蕏",
      "蛛",
      "蝫",
      "蠩",
      "袾",
      "誅",
      "諸",
      "诛",
      "诸",
      "豬",
      "跦",
      "邾",
      "銖",
      "铢",
      "駯",
      "鮢",
      "鯺",
      "鴸",
      "鼄"
    ],
    ān: [
      "侒",
      "偣",
      "媕",
      "安",
      "峖",
      "庵",
      "桉",
      "氨",
      "盦",
      "盫",
      "腤",
      "菴",
      "萻",
      "葊",
      "蓭",
      "誝",
      "諳",
      "谙",
      "鞌",
      "鞍",
      "韽",
      "馣",
      "鮟",
      "鵪",
      "鶕",
      "鹌",
      "𩽾"
    ],
    lù: [
      "侓",
      "僇",
      "勎",
      "勠",
      "圥",
      "坴",
      "塶",
      "娽",
      "峍",
      "廘",
      "彔",
      "录",
      "戮",
      "摝",
      "椂",
      "樚",
      "淕",
      "淥",
      "渌",
      "漉",
      "潞",
      "琭",
      "璐",
      "甪",
      "盝",
      "睩",
      "硉",
      "祿",
      "禄",
      "稑",
      "穋",
      "箓",
      "簏",
      "簬",
      "簵",
      "簶",
      "籙",
      "粶",
      "蔍",
      "蕗",
      "虂",
      "螰",
      "賂",
      "赂",
      "趢",
      "路",
      "踛",
      "蹗",
      "輅",
      "轆",
      "辂",
      "辘",
      "逯",
      "醁",
      "錄",
      "録",
      "錴",
      "鏴",
      "陸",
      "騄",
      "騼",
      "鯥",
      "鴼",
      "鵦",
      "鵱",
      "鷺",
      "鹭",
      "鹿",
      "麓",
      "𫘧"
    ],
    móu: ["侔", "劺", "恈", "眸", "蛑", "謀", "谋", "踎", "鍪", "鴾", "麰"],
    ér: [
      "侕",
      "儿",
      "児",
      "兒",
      "峏",
      "栭",
      "洏",
      "粫",
      "而",
      "胹",
      "荋",
      "袻",
      "輀",
      "轜",
      "陑",
      "隭",
      "髵",
      "鮞",
      "鲕",
      "鴯",
      "鸸"
    ],
    "dòng tǒng tóng": ["侗"],
    chà: ["侘", "奼", "姹", "岔", "汊", "詫", "诧"],
    chì: [
      "侙",
      "傺",
      "勅",
      "勑",
      "叱",
      "啻",
      "彳",
      "恜",
      "慗",
      "憏",
      "懘",
      "抶",
      "敕",
      "斥",
      "杘",
      "湁",
      "灻",
      "炽",
      "烾",
      "熾",
      "痓",
      "痸",
      "瘛",
      "翄",
      "翅",
      "翤",
      "翨",
      "腟",
      "赤",
      "趩",
      "遫",
      "鉓",
      "雴",
      "飭",
      "饬",
      "鶒",
      "鷘"
    ],
    "gòng gōng": ["供", "共"],
    zhōu: [
      "侜",
      "周",
      "喌",
      "州",
      "徟",
      "洲",
      "淍",
      "炿",
      "烐",
      "珘",
      "矪",
      "舟",
      "謅",
      "譸",
      "诌",
      "賙",
      "赒",
      "輈",
      "輖",
      "辀",
      "週",
      "郮",
      "銂",
      "霌",
      "駲",
      "騆",
      "鵃",
      "鸼"
    ],
    rú: [
      "侞",
      "儒",
      "嚅",
      "如",
      "嬬",
      "孺",
      "帤",
      "曘",
      "桇",
      "渪",
      "濡",
      "筎",
      "茹",
      "蕠",
      "薷",
      "蝡",
      "蠕",
      "袽",
      "襦",
      "邚",
      "醹",
      "銣",
      "铷",
      "顬",
      "颥",
      "鱬",
      "鴑",
      "鴽"
    ],
    "jiàn cún": ["侟"],
    xiá: [
      "侠",
      "俠",
      "匣",
      "峡",
      "峽",
      "敮",
      "暇",
      "柙",
      "炠",
      "烚",
      "狎",
      "狭",
      "狹",
      "珨",
      "瑕",
      "硖",
      "硤",
      "碬",
      "祫",
      "筪",
      "縖",
      "翈",
      "舝",
      "舺",
      "蕸",
      "赮",
      "轄",
      "辖",
      "遐",
      "鍜",
      "鎋",
      "陜",
      "陿",
      "霞",
      "騢",
      "魻",
      "鶷",
      "黠"
    ],
    lǚ: [
      "侣",
      "侶",
      "儢",
      "吕",
      "呂",
      "屡",
      "屢",
      "履",
      "挔",
      "捛",
      "旅",
      "梠",
      "焒",
      "祣",
      "稆",
      "穭",
      "絽",
      "縷",
      "缕",
      "膂",
      "膐",
      "褛",
      "褸",
      "郘",
      "鋁",
      "铝"
    ],
    ta: ["侤"],
    "jiǎo yáo": ["侥", "僥", "徺"],
    zhēn: [
      "侦",
      "偵",
      "寊",
      "帧",
      "帪",
      "幀",
      "搸",
      "斟",
      "桢",
      "楨",
      "榛",
      "樼",
      "殝",
      "浈",
      "湞",
      "潧",
      "澵",
      "獉",
      "珍",
      "珎",
      "瑧",
      "甄",
      "眞",
      "真",
      "砧",
      "碪",
      "祯",
      "禎",
      "禛",
      "箴",
      "胗",
      "臻",
      "葴",
      "蒖",
      "蓁",
      "薽",
      "貞",
      "贞",
      "轃",
      "遉",
      "酙",
      "針",
      "鉁",
      "錱",
      "鍼",
      "针",
      "鱵"
    ],
    "cè zè zhāi": ["侧", "側"],
    kuài: [
      "侩",
      "儈",
      "凷",
      "哙",
      "噲",
      "圦",
      "块",
      "塊",
      "巜",
      "廥",
      "快",
      "旝",
      "欳",
      "狯",
      "獪",
      "筷",
      "糩",
      "脍",
      "膾",
      "郐",
      "鄶",
      "鱠",
      "鲙"
    ],
    chái: ["侪", "儕", "喍", "柴", "犲", "祡", "豺"],
    nóng: [
      "侬",
      "儂",
      "农",
      "哝",
      "噥",
      "檂",
      "欁",
      "浓",
      "濃",
      "燶",
      "禯",
      "秾",
      "穠",
      "脓",
      "膿",
      "蕽",
      "襛",
      "譨",
      "農",
      "辳",
      "醲",
      "鬞",
      "𬪩"
    ],
    jǐn: [
      "侭",
      "儘",
      "卺",
      "厪",
      "巹",
      "槿",
      "漌",
      "瑾",
      "紧",
      "緊",
      "菫",
      "蓳",
      "謹",
      "谨",
      "錦",
      "锦",
      "饉",
      "馑"
    ],
    "hóu hòu": ["侯", "矦"],
    jiǒng: [
      "侰",
      "僒",
      "冏",
      "囧",
      "泂",
      "澃",
      "炯",
      "烱",
      "煚",
      "煛",
      "熲",
      "燛",
      "窘",
      "綗",
      "褧",
      "迥",
      "逈",
      "顈",
      "颎",
      "䌹"
    ],
    "chěng tǐng": ["侱"],
    "zhèn zhēn": ["侲", "揕"],
    zuò: [
      "侳",
      "做",
      "唑",
      "坐",
      "岝",
      "岞",
      "座",
      "祚",
      "糳",
      "胙",
      "葃",
      "葄",
      "蓙",
      "袏",
      "阼"
    ],
    qīn: [
      "侵",
      "兓",
      "媇",
      "嵚",
      "嶔",
      "欽",
      "衾",
      "誛",
      "钦",
      "顉",
      "駸",
      "骎",
      "鮼"
    ],
    jú: [
      "侷",
      "啹",
      "婅",
      "局",
      "巈",
      "椈",
      "橘",
      "泦",
      "淗",
      "湨",
      "焗",
      "犑",
      "狊",
      "粷",
      "菊",
      "蘜",
      "趜",
      "跼",
      "蹫",
      "輂",
      "郹",
      "閰",
      "駶",
      "驧",
      "鵙",
      "鵴",
      "鶪",
      "鼰",
      "鼳",
      "䴗"
    ],
    "shù dōu": ["侸"],
    tǐng: [
      "侹",
      "圢",
      "娗",
      "挺",
      "涏",
      "烶",
      "珽",
      "脡",
      "艇",
      "誔",
      "頲",
      "颋"
    ],
    shèn: [
      "侺",
      "愼",
      "慎",
      "昚",
      "涁",
      "渗",
      "滲",
      "瘆",
      "瘮",
      "眘",
      "祳",
      "肾",
      "胂",
      "脤",
      "腎",
      "蜃",
      "蜄",
      "鋠"
    ],
    "tuì tuó": ["侻"],
    nán: [
      "侽",
      "喃",
      "娚",
      "抩",
      "暔",
      "枏",
      "柟",
      "楠",
      "男",
      "畘",
      "莮",
      "萳",
      "遖"
    ],
    xiāo: [
      "侾",
      "哓",
      "嘵",
      "嚻",
      "囂",
      "婋",
      "宯",
      "宵",
      "庨",
      "彇",
      "揱",
      "枭",
      "枵",
      "梟",
      "櫹",
      "歊",
      "毊",
      "消",
      "潇",
      "瀟",
      "灱",
      "灲",
      "烋",
      "焇",
      "猇",
      "獢",
      "痚",
      "痟",
      "硝",
      "硣",
      "窙",
      "箫",
      "簘",
      "簫",
      "綃",
      "绡",
      "翛",
      "膮",
      "萧",
      "蕭",
      "虈",
      "虓",
      "蟂",
      "蟏",
      "蟰",
      "蠨",
      "踃",
      "逍",
      "銷",
      "销",
      "霄",
      "颵",
      "驍",
      "骁",
      "髇",
      "髐",
      "魈",
      "鴞",
      "鴵",
      "鷍",
      "鸮"
    ],
    "biàn pián": ["便", "緶", "缏"],
    tuǐ: ["俀", "腿", "蹆", "骽"],
    xì: [
      "係",
      "匸",
      "卌",
      "呬",
      "墍",
      "屃",
      "屓",
      "屭",
      "忥",
      "怬",
      "恄",
      "椞",
      "潝",
      "潟",
      "澙",
      "熂",
      "犔",
      "磶",
      "禊",
      "細",
      "綌",
      "縘",
      "细",
      "绤",
      "舃",
      "舄",
      "蕮",
      "虩",
      "衋",
      "覤",
      "赩",
      "趇",
      "郤",
      "釳",
      "阋",
      "隙",
      "隟",
      "霼",
      "餼",
      "饩",
      "鬩",
      "黖"
    ],
    cù: [
      "促",
      "媨",
      "憱",
      "猝",
      "瘄",
      "瘯",
      "簇",
      "縬",
      "脨",
      "蔟",
      "誎",
      "趗",
      "踧",
      "踿",
      "蹙",
      "蹴",
      "蹵",
      "醋",
      "顣",
      "鼀"
    ],
    é: [
      "俄",
      "囮",
      "娥",
      "峉",
      "峨",
      "峩",
      "涐",
      "珴",
      "皒",
      "睋",
      "磀",
      "莪",
      "訛",
      "誐",
      "譌",
      "讹",
      "迗",
      "鈋",
      "鋨",
      "锇",
      "頟",
      "額",
      "额",
      "魤",
      "鵝",
      "鵞",
      "鹅"
    ],
    qiú: [
      "俅",
      "叴",
      "唒",
      "囚",
      "崷",
      "巯",
      "巰",
      "扏",
      "梂",
      "殏",
      "毬",
      "求",
      "汓",
      "泅",
      "浗",
      "湭",
      "煪",
      "犰",
      "玌",
      "球",
      "璆",
      "皳",
      "盚",
      "紌",
      "絿",
      "肍",
      "芁",
      "莍",
      "虬",
      "虯",
      "蛷",
      "裘",
      "觓",
      "觩",
      "訄",
      "訅",
      "賕",
      "赇",
      "逎",
      "逑",
      "遒",
      "酋",
      "釚",
      "釻",
      "銶",
      "頄",
      "鮂",
      "鯄",
      "鰽",
      "鼽",
      "𨱇"
    ],
    xú: ["俆", "徐", "禑"],
    "guàng kuāng": ["俇"],
    kù: [
      "俈",
      "喾",
      "嚳",
      "库",
      "庫",
      "廤",
      "瘔",
      "絝",
      "绔",
      "袴",
      "裤",
      "褲",
      "酷"
    ],
    wù: [
      "俉",
      "务",
      "務",
      "勿",
      "卼",
      "坞",
      "塢",
      "奦",
      "婺",
      "寤",
      "屼",
      "岉",
      "嵨",
      "忢",
      "悞",
      "悟",
      "悮",
      "戊",
      "扤",
      "晤",
      "杌",
      "溩",
      "焐",
      "熃",
      "物",
      "痦",
      "矹",
      "窹",
      "粅",
      "蘁",
      "誤",
      "误",
      "鋈",
      "阢",
      "隖",
      "雾",
      "霚",
      "霧",
      "靰",
      "騖",
      "骛",
      "鶩",
      "鹜",
      "鼿",
      "齀"
    ],
    jùn: [
      "俊",
      "儁",
      "呁",
      "埈",
      "寯",
      "峻",
      "懏",
      "捃",
      "攟",
      "晙",
      "棞",
      "燇",
      "珺",
      "畯",
      "竣",
      "箟",
      "蜠",
      "賐",
      "郡",
      "陖",
      "餕",
      "馂",
      "駿",
      "骏",
      "鵔",
      "鵕",
      "鵘",
      "䐃"
    ],
    liáng: [
      "俍",
      "墚",
      "梁",
      "椋",
      "樑",
      "粮",
      "粱",
      "糧",
      "良",
      "輬",
      "辌",
      "𫟅"
    ],
    zǔ: ["俎", "唨", "爼", "祖", "組", "组", "詛", "诅", "鎺", "阻", "靻"],
    "qiào xiào": ["俏"],
    yǒng: [
      "俑",
      "勇",
      "勈",
      "咏",
      "埇",
      "塎",
      "嵱",
      "彮",
      "怺",
      "恿",
      "悀",
      "惥",
      "愑",
      "愹",
      "慂",
      "柡",
      "栐",
      "永",
      "泳",
      "湧",
      "甬",
      "蛹",
      "詠",
      "踊",
      "踴",
      "鯒",
      "鲬"
    ],
    hùn: ["俒", "倱", "圂", "尡", "慁", "掍", "溷", "焝", "睴", "觨", "諢", "诨"],
    jìng: [
      "俓",
      "傹",
      "境",
      "妌",
      "婙",
      "婧",
      "弪",
      "弳",
      "径",
      "徑",
      "敬",
      "曔",
      "桱",
      "梷",
      "浄",
      "瀞",
      "獍",
      "痉",
      "痙",
      "竞",
      "竟",
      "竫",
      "競",
      "竸",
      "胫",
      "脛",
      "莖",
      "誩",
      "踁",
      "迳",
      "逕",
      "鏡",
      "镜",
      "靖",
      "静",
      "靜",
      "鵛"
    ],
    sàn: ["俕", "閐"],
    pěi: ["俖"],
    sú: ["俗"],
    xī: [
      "俙",
      "僖",
      "兮",
      "凞",
      "卥",
      "厀",
      "吸",
      "唏",
      "唽",
      "嘻",
      "噏",
      "嚱",
      "夕",
      "奚",
      "嬆",
      "嬉",
      "屖",
      "嵠",
      "巇",
      "希",
      "徆",
      "徯",
      "息",
      "悉",
      "悕",
      "惁",
      "惜",
      "昔",
      "晞",
      "晰",
      "晳",
      "曦",
      "析",
      "桸",
      "榽",
      "樨",
      "橀",
      "欷",
      "氥",
      "汐",
      "浠",
      "淅",
      "渓",
      "溪",
      "烯",
      "焁",
      "焈",
      "焟",
      "熄",
      "熈",
      "熙",
      "熹",
      "熺",
      "熻",
      "燨",
      "爔",
      "牺",
      "犀",
      "犠",
      "犧",
      "琋",
      "瘜",
      "皙",
      "睎",
      "瞦",
      "矽",
      "硒",
      "磎",
      "礂",
      "稀",
      "穸",
      "窸",
      "粞",
      "糦",
      "緆",
      "繥",
      "羲",
      "翕",
      "翖",
      "肸",
      "肹",
      "膝",
      "舾",
      "莃",
      "菥",
      "蒠",
      "蜥",
      "螅",
      "蟋",
      "蠵",
      "西",
      "觹",
      "觽",
      "觿",
      "譆",
      "谿",
      "豀",
      "豨",
      "豯",
      "貕",
      "赥",
      "邜",
      "鄎",
      "酅",
      "醯",
      "釸",
      "錫",
      "鏭",
      "鐊",
      "鑴",
      "锡",
      "隵",
      "餏",
      "饎",
      "饻",
      "鯑",
      "鵗",
      "鸂",
      "鼷"
    ],
    lǐ: [
      "俚",
      "娌",
      "峢",
      "峲",
      "李",
      "欚",
      "浬",
      "澧",
      "理",
      "礼",
      "禮",
      "粴",
      "裏",
      "裡",
      "豊",
      "逦",
      "邐",
      "醴",
      "鋰",
      "锂",
      "鯉",
      "鱧",
      "鱱",
      "鲤",
      "鳢"
    ],
    bǎo: [
      "保",
      "堢",
      "媬",
      "宝",
      "寚",
      "寳",
      "寶",
      "珤",
      "緥",
      "葆",
      "藵",
      "褓",
      "賲",
      "靌",
      "飹",
      "飽",
      "饱",
      "駂",
      "鳵",
      "鴇",
      "鸨"
    ],
    "yú shù yù": ["俞"],
    "sì qí": ["俟"],
    "xìn shēn": ["信"],
    xiū: [
      "俢",
      "修",
      "咻",
      "庥",
      "樇",
      "烌",
      "羞",
      "脙",
      "脩",
      "臹",
      "貅",
      "銝",
      "鎀",
      "飍",
      "饈",
      "馐",
      "髤",
      "髹",
      "鮴",
      "鱃",
      "鵂",
      "鸺",
      "䗛"
    ],
    dì: [
      "俤",
      "偙",
      "僀",
      "埊",
      "墑",
      "墬",
      "娣",
      "帝",
      "怟",
      "旳",
      "梊",
      "焍",
      "玓",
      "甋",
      "眱",
      "睇",
      "碲",
      "祶",
      "禘",
      "第",
      "締",
      "缔",
      "腣",
      "菂",
      "蒂",
      "蔕",
      "蝃",
      "蝭",
      "螮",
      "諦",
      "谛",
      "踶",
      "递",
      "逓",
      "遞",
      "遰",
      "鉪",
      "𤧛",
      "䗖"
    ],
    chóu: [
      "俦",
      "儔",
      "嬦",
      "惆",
      "愁",
      "懤",
      "栦",
      "燽",
      "畴",
      "疇",
      "皗",
      "稠",
      "筹",
      "籌",
      "絒",
      "綢",
      "绸",
      "菗",
      "詶",
      "讎",
      "讐",
      "踌",
      "躊",
      "酧",
      "酬",
      "醻",
      "雔",
      "雠",
      "雦"
    ],
    zhì: [
      "俧",
      "偫",
      "儨",
      "制",
      "劕",
      "垁",
      "娡",
      "寘",
      "帙",
      "帜",
      "幟",
      "庢",
      "庤",
      "廌",
      "彘",
      "徏",
      "徝",
      "志",
      "忮",
      "懥",
      "懫",
      "挃",
      "挚",
      "掷",
      "摯",
      "擲",
      "旘",
      "晊",
      "智",
      "栉",
      "桎",
      "梽",
      "櫍",
      "櫛",
      "治",
      "洷",
      "滍",
      "滞",
      "滯",
      "潌",
      "瀄",
      "炙",
      "熫",
      "狾",
      "猘",
      "璏",
      "瓆",
      "痔",
      "痣",
      "礩",
      "祑",
      "秩",
      "秷",
      "稚",
      "稺",
      "穉",
      "窒",
      "紩",
      "緻",
      "置",
      "翐",
      "膣",
      "至",
      "致",
      "芖",
      "蛭",
      "袟",
      "袠",
      "製",
      "覟",
      "觗",
      "觯",
      "觶",
      "誌",
      "豑",
      "豒",
      "貭",
      "質",
      "贄",
      "质",
      "贽",
      "跱",
      "踬",
      "躓",
      "輊",
      "轾",
      "郅",
      "銍",
      "鋕",
      "鑕",
      "铚",
      "锧",
      "陟",
      "隲",
      "雉",
      "駤",
      "騭",
      "騺",
      "驇",
      "骘",
      "鯯",
      "鴙",
      "鷙",
      "鸷",
      "𬃊"
    ],
    "liǎ liǎng": ["俩"],
    jiǎn: [
      "俭",
      "倹",
      "儉",
      "减",
      "剪",
      "堿",
      "弿",
      "彅",
      "戩",
      "戬",
      "拣",
      "挸",
      "捡",
      "揀",
      "撿",
      "枧",
      "柬",
      "梘",
      "检",
      "検",
      "檢",
      "減",
      "湕",
      "瀽",
      "瑐",
      "睑",
      "瞼",
      "硷",
      "碱",
      "礆",
      "笕",
      "筧",
      "简",
      "簡",
      "絸",
      "繭",
      "翦",
      "茧",
      "藆",
      "蠒",
      "裥",
      "襇",
      "襉",
      "襺",
      "詃",
      "謇",
      "謭",
      "譾",
      "谫",
      "趼",
      "蹇",
      "鐗",
      "鬋",
      "鰎",
      "鹸",
      "鹻",
      "鹼"
    ],
    huò: [
      "俰",
      "咟",
      "嚯",
      "嚿",
      "奯",
      "彠",
      "惑",
      "或",
      "擭",
      "旤",
      "曤",
      "檴",
      "沎",
      "湱",
      "瀖",
      "獲",
      "癨",
      "眓",
      "矐",
      "祸",
      "禍",
      "穫",
      "窢",
      "耯",
      "臛",
      "艧",
      "获",
      "蒦",
      "藿",
      "蠖",
      "謋",
      "貨",
      "货",
      "鍃",
      "鑊",
      "镬",
      "雘",
      "霍",
      "靃",
      "韄",
      "㸌"
    ],
    "jù jū": ["俱", "据", "鋸", "锯"],
    xiào: [
      "俲",
      "傚",
      "効",
      "咲",
      "哮",
      "啸",
      "嘋",
      "嘨",
      "嘯",
      "孝",
      "效",
      "斅",
      "斆",
      "歗",
      "涍",
      "熽",
      "笑",
      "詨",
      "誟"
    ],
    pái: ["俳", "徘", "牌", "犤", "猅", "簰", "簲", "輫"],
    biào: ["俵", "鰾", "鳔"],
    "chù tì": ["俶"],
    fèi: [
      "俷",
      "剕",
      "厞",
      "吠",
      "屝",
      "废",
      "廃",
      "廢",
      "昲",
      "曊",
      "櫠",
      "沸",
      "濷",
      "狒",
      "癈",
      "肺",
      "萉",
      "費",
      "费",
      "鐨",
      "镄",
      "陫",
      "靅",
      "鼣"
    ],
    fèng: ["俸", "凤", "奉", "湗", "焨", "煈", "賵", "赗", "鳯", "鳳", "鴌"],
    ǎn: ["俺", "唵", "埯", "揞", "罯", "銨", "铵"],
    bèi: [
      "俻",
      "倍",
      "偝",
      "偹",
      "備",
      "僃",
      "备",
      "悖",
      "惫",
      "愂",
      "憊",
      "昁",
      "梖",
      "焙",
      "牬",
      "犕",
      "狈",
      "狽",
      "珼",
      "琲",
      "碚",
      "禙",
      "糒",
      "苝",
      "蓓",
      "蛽",
      "褙",
      "貝",
      "贝",
      "軰",
      "輩",
      "辈",
      "邶",
      "郥",
      "鄁",
      "鋇",
      "鐾",
      "钡",
      "鞁",
      "鞴",
      "𬇙"
    ],
    yù: [
      "俼",
      "儥",
      "喅",
      "喩",
      "喻",
      "域",
      "堉",
      "妪",
      "嫗",
      "寓",
      "峪",
      "嶎",
      "庽",
      "彧",
      "御",
      "愈",
      "慾",
      "戫",
      "昱",
      "棛",
      "棜",
      "棫",
      "櫲",
      "欎",
      "欝",
      "欲",
      "毓",
      "浴",
      "淯",
      "滪",
      "潏",
      "澦",
      "灪",
      "焴",
      "煜",
      "燏",
      "燠",
      "爩",
      "狱",
      "獄",
      "玉",
      "琙",
      "瘉",
      "癒",
      "砡",
      "硢",
      "硲",
      "礇",
      "礖",
      "礜",
      "禦",
      "秗",
      "稢",
      "稶",
      "篽",
      "籞",
      "籲",
      "粖",
      "緎",
      "罭",
      "聿",
      "肀",
      "艈",
      "芋",
      "芌",
      "茟",
      "蒮",
      "蓣",
      "蓹",
      "蕷",
      "蘌",
      "蜟",
      "蜮",
      "袬",
      "裕",
      "誉",
      "諭",
      "譽",
      "谕",
      "豫",
      "軉",
      "輍",
      "逳",
      "遇",
      "遹",
      "郁",
      "醧",
      "鈺",
      "鋊",
      "錥",
      "鐭",
      "钰",
      "閾",
      "阈",
      "雤",
      "霱",
      "預",
      "预",
      "飫",
      "饇",
      "饫",
      "馭",
      "驈",
      "驭",
      "鬰",
      "鬱",
      "鬻",
      "魊",
      "鱊",
      "鳿",
      "鴥",
      "鴧",
      "鴪",
      "鵒",
      "鷸",
      "鸒",
      "鹆",
      "鹬"
    ],
    xīn: [
      "俽",
      "噺",
      "妡",
      "嬜",
      "廞",
      "心",
      "忄",
      "忻",
      "惞",
      "新",
      "昕",
      "杺",
      "欣",
      "歆",
      "炘",
      "盺",
      "薪",
      "訢",
      "辛",
      "邤",
      "鈊",
      "鋅",
      "鑫",
      "锌",
      "馨",
      "馫",
      "䜣",
      "𫷷"
    ],
    "hǔ chí": ["俿"],
    jiù: [
      "倃",
      "僦",
      "匓",
      "匛",
      "匶",
      "厩",
      "咎",
      "就",
      "廄",
      "廏",
      "廐",
      "慦",
      "捄",
      "救",
      "旧",
      "柩",
      "柾",
      "桕",
      "欍",
      "殧",
      "疚",
      "臼",
      "舅",
      "舊",
      "鯦",
      "鷲",
      "鹫",
      "麔",
      "齨",
      "㠇"
    ],
    yáo: [
      "倄",
      "傜",
      "嗂",
      "垚",
      "堯",
      "姚",
      "媱",
      "尧",
      "尭",
      "峣",
      "嶢",
      "嶤",
      "徭",
      "揺",
      "搖",
      "摇",
      "摿",
      "暚",
      "榣",
      "烑",
      "爻",
      "猺",
      "珧",
      "瑤",
      "瑶",
      "磘",
      "窑",
      "窯",
      "窰",
      "肴",
      "蘨",
      "謠",
      "謡",
      "谣",
      "軺",
      "轺",
      "遙",
      "遥",
      "邎",
      "顤",
      "颻",
      "飖",
      "餆",
      "餚",
      "鰩",
      "鱙",
      "鳐"
    ],
    "cuì zú": ["倅"],
    "liǎng liǎ": ["倆"],
    wǎn: [
      "倇",
      "唍",
      "婉",
      "惋",
      "挽",
      "晚",
      "晥",
      "晩",
      "晼",
      "梚",
      "椀",
      "琬",
      "畹",
      "皖",
      "盌",
      "碗",
      "綩",
      "綰",
      "绾",
      "脘",
      "萖",
      "踠",
      "輓",
      "鋔"
    ],
    zǒng: [
      "倊",
      "偬",
      "傯",
      "嵸",
      "总",
      "惣",
      "捴",
      "搃",
      "摠",
      "燪",
      "総",
      "緫",
      "縂",
      "總",
      "蓗"
    ],
    guān: [
      "倌",
      "关",
      "官",
      "棺",
      "瘝",
      "癏",
      "窤",
      "蒄",
      "関",
      "闗",
      "關",
      "鰥",
      "鱞",
      "鳏"
    ],
    tiǎn: [
      "倎",
      "唺",
      "忝",
      "悿",
      "晪",
      "殄",
      "淟",
      "睓",
      "腆",
      "舔",
      "覥",
      "觍",
      "賟",
      "錪",
      "餂"
    ],
    mén: ["們", "扪", "捫", "璊", "菛", "虋", "鍆", "钔", "門", "閅", "门", "𫞩"],
    "dǎo dào": ["倒"],
    "tán tàn": ["倓", "埮"],
    "juè jué": ["倔"],
    chuí: [
      "倕",
      "垂",
      "埀",
      "捶",
      "搥",
      "桘",
      "棰",
      "槌",
      "箠",
      "腄",
      "菙",
      "錘",
      "鎚",
      "锤",
      "陲",
      "顀"
    ],
    xìng: [
      "倖",
      "姓",
      "婞",
      "嬹",
      "幸",
      "性",
      "悻",
      "杏",
      "涬",
      "緈",
      "臖",
      "荇",
      "莕",
      "葕"
    ],
    péng: [
      "倗",
      "傰",
      "塜",
      "塳",
      "弸",
      "憉",
      "捀",
      "朋",
      "棚",
      "椖",
      "樥",
      "硼",
      "稝",
      "竼",
      "篷",
      "纄",
      "膨",
      "芃",
      "蓬",
      "蘕",
      "蟚",
      "蟛",
      "袶",
      "輣",
      "錋",
      "鑝",
      "韸",
      "韼",
      "騯",
      "髼",
      "鬅",
      "鬔",
      "鵬",
      "鹏"
    ],
    "tǎng cháng": ["倘"],
    hòu: [
      "候",
      "厚",
      "后",
      "垕",
      "堠",
      "後",
      "洉",
      "茩",
      "豞",
      "逅",
      "郈",
      "鮜",
      "鱟",
      "鲎",
      "鲘"
    ],
    tì: [
      "倜",
      "剃",
      "嚏",
      "嚔",
      "屉",
      "屜",
      "悌",
      "悐",
      "惕",
      "惖",
      "戻",
      "掦",
      "替",
      "朑",
      "歒",
      "殢",
      "涕",
      "瓋",
      "笹",
      "籊",
      "薙",
      "褅",
      "逖",
      "逷",
      "髰",
      "鬀",
      "鬄"
    ],
    gàn: [
      "倝",
      "凎",
      "幹",
      "榦",
      "檊",
      "淦",
      "灨",
      "盰",
      "紺",
      "绀",
      "詌",
      "贑",
      "赣",
      "骭",
      "㽏"
    ],
    "liàng jìng": ["倞", "靓"],
    suī: [
      "倠",
      "哸",
      "夊",
      "滖",
      "濉",
      "眭",
      "睢",
      "芕",
      "荽",
      "荾",
      "虽",
      "雖",
      "鞖"
    ],
    "chàng chāng": ["倡"],
    jié: [
      "倢",
      "偼",
      "傑",
      "刦",
      "刧",
      "刼",
      "劫",
      "劼",
      "卩",
      "卪",
      "婕",
      "媫",
      "孑",
      "岊",
      "崨",
      "嵥",
      "嶻",
      "巀",
      "幯",
      "截",
      "捷",
      "掶",
      "擮",
      "昅",
      "杢",
      "杰",
      "桀",
      "桝",
      "楬",
      "楶",
      "榤",
      "洁",
      "滐",
      "潔",
      "狤",
      "睫",
      "礍",
      "竭",
      "節",
      "羯",
      "莭",
      "蓵",
      "蛣",
      "蜐",
      "蠘",
      "蠞",
      "蠽",
      "衱",
      "袺",
      "訐",
      "詰",
      "誱",
      "讦",
      "踕",
      "迼",
      "鉣",
      "鍻",
      "镼",
      "頡",
      "鮚",
      "鲒",
      "㛃"
    ],
    "kǒng kōng": ["倥"],
    juàn: [
      "倦",
      "劵",
      "奆",
      "慻",
      "桊",
      "淃",
      "狷",
      "獧",
      "眷",
      "睊",
      "睠",
      "絭",
      "絹",
      "绢",
      "罥",
      "羂",
      "腃",
      "蔨",
      "鄄",
      "餋"
    ],
    zōng: [
      "倧",
      "堫",
      "宗",
      "嵏",
      "嵕",
      "惾",
      "朡",
      "棕",
      "椶",
      "熧",
      "猣",
      "磫",
      "緃",
      "翪",
      "腙",
      "葼",
      "蝬",
      "豵",
      "踨",
      "踪",
      "蹤",
      "鍐",
      "鑁",
      "騌",
      "騣",
      "骔",
      "鬃",
      "鬉",
      "鬷",
      "鯮",
      "鯼"
    ],
    ní: [
      "倪",
      "坭",
      "埿",
      "尼",
      "屔",
      "怩",
      "淣",
      "猊",
      "籾",
      "聣",
      "蚭",
      "蜺",
      "觬",
      "貎",
      "跜",
      "輗",
      "郳",
      "鈮",
      "铌",
      "霓",
      "馜",
      "鯢",
      "鲵",
      "麑",
      "齯",
      "𫐐",
      "𫠜"
    ],
    zhuō: [
      "倬",
      "拙",
      "捉",
      "桌",
      "梲",
      "棁",
      "棳",
      "槕",
      "涿",
      "窧",
      "鐯",
      "䦃"
    ],
    "wō wēi": ["倭"],
    luǒ: ["倮", "剆", "曪", "瘰", "癳", "臝", "蓏", "蠃", "裸", "躶"],
    sōng: [
      "倯",
      "凇",
      "娀",
      "崧",
      "嵩",
      "庺",
      "憽",
      "松",
      "枀",
      "枩",
      "柗",
      "梥",
      "檧",
      "淞",
      "濍",
      "硹",
      "菘",
      "鬆"
    ],
    lèng: ["倰", "堎", "愣", "睖", "踜"],
    zì: [
      "倳",
      "剚",
      "字",
      "恣",
      "渍",
      "漬",
      "牸",
      "眥",
      "眦",
      "胔",
      "胾",
      "自",
      "茡",
      "荢"
    ],
    bèn: ["倴", "坌", "捹", "撪", "渀", "笨", "逩"],
    cǎi: ["倸", "啋", "婇", "彩", "採", "棌", "毝", "睬", "綵", "跴", "踩"],
    zhài: ["债", "債", "寨", "瘵", "砦"],
    yē: ["倻", "吔", "噎", "擨", "暍", "椰", "歋", "潱", "蠮"],
    shà: ["倽", "唼", "喢", "歃", "箑", "翜", "翣", "萐", "閯", "霎"],
    qīng: [
      "倾",
      "傾",
      "卿",
      "圊",
      "寈",
      "氢",
      "氫",
      "淸",
      "清",
      "蜻",
      "軽",
      "輕",
      "轻",
      "郬",
      "錆",
      "鑋",
      "靑",
      "青",
      "鯖"
    ],
    yīng: [
      "偀",
      "嘤",
      "噟",
      "嚶",
      "婴",
      "媖",
      "嫈",
      "嬰",
      "孆",
      "孾",
      "愥",
      "撄",
      "攖",
      "朠",
      "桜",
      "樱",
      "櫻",
      "渶",
      "煐",
      "珱",
      "瑛",
      "璎",
      "瓔",
      "甇",
      "甖",
      "碤",
      "礯",
      "緓",
      "纓",
      "绬",
      "缨",
      "罂",
      "罃",
      "罌",
      "膺",
      "英",
      "莺",
      "蘡",
      "蝧",
      "蠳",
      "褮",
      "譻",
      "賏",
      "軈",
      "鑍",
      "锳",
      "霙",
      "韺",
      "鴬",
      "鶑",
      "鶧",
      "鶯",
      "鷪",
      "鷹",
      "鸎",
      "鸚",
      "鹦",
      "鹰",
      "䓨"
    ],
    "chēng chèn": ["偁", "爯"],
    ruǎn: ["偄", "朊", "瑌", "瓀", "碝", "礝", "腝", "軟", "輭", "软", "阮"],
    "zhòng tóng": ["偅"],
    chǔn: ["偆", "惷", "睶", "萶", "蠢", "賰"],
    "jiǎ jià": ["假"],
    "jì jié": ["偈"],
    "bǐng bìng": ["偋"],
    ruò: [
      "偌",
      "叒",
      "嵶",
      "弱",
      "楉",
      "焫",
      "爇",
      "箬",
      "篛",
      "蒻",
      "鄀",
      "鰙",
      "鰯",
      "鶸"
    ],
    tí: [
      "偍",
      "厗",
      "啼",
      "嗁",
      "崹",
      "漽",
      "瑅",
      "睼",
      "禵",
      "稊",
      "緹",
      "缇",
      "罤",
      "蕛",
      "褆",
      "謕",
      "趧",
      "蹄",
      "蹏",
      "醍",
      "鍗",
      "題",
      "题",
      "騠",
      "鮷",
      "鯷",
      "鳀",
      "鵜",
      "鷤",
      "鹈",
      "𫘨"
    ],
    wēi: [
      "偎",
      "危",
      "喴",
      "威",
      "媙",
      "嶶",
      "巍",
      "微",
      "愄",
      "揋",
      "揻",
      "椳",
      "楲",
      "溦",
      "烓",
      "煨",
      "燰",
      "癓",
      "縅",
      "葨",
      "葳",
      "薇",
      "蜲",
      "蝛",
      "覣",
      "詴",
      "逶",
      "隇",
      "隈",
      "霺",
      "鰃",
      "鰄",
      "鳂"
    ],
    piān: ["偏", "囨", "媥", "楄", "犏", "篇", "翩", "鍂"],
    yàn: [
      "偐",
      "厌",
      "厭",
      "唁",
      "喭",
      "嚈",
      "嚥",
      "堰",
      "妟",
      "姲",
      "嬊",
      "嬿",
      "宴",
      "彥",
      "彦",
      "敥",
      "晏",
      "暥",
      "曕",
      "曣",
      "滟",
      "灎",
      "灔",
      "灧",
      "灩",
      "焔",
      "焰",
      "焱",
      "熖",
      "燄",
      "牪",
      "猒",
      "砚",
      "硯",
      "艳",
      "艶",
      "艷",
      "覎",
      "觃",
      "觾",
      "諺",
      "讌",
      "讞",
      "谚",
      "谳",
      "豓",
      "豔",
      "贋",
      "贗",
      "赝",
      "軅",
      "酀",
      "酽",
      "醼",
      "釅",
      "雁",
      "餍",
      "饜",
      "騐",
      "験",
      "騴",
      "驗",
      "驠",
      "验",
      "鬳",
      "鳫",
      "鴈",
      "鴳",
      "鷃",
      "鷰",
      "齞"
    ],
    "tǎng dàng": ["偒"],
    è: [
      "偔",
      "匎",
      "卾",
      "厄",
      "呝",
      "咢",
      "噩",
      "垩",
      "堊",
      "堮",
      "岋",
      "崿",
      "廅",
      "悪",
      "愕",
      "戹",
      "扼",
      "搤",
      "搹",
      "擜",
      "櫮",
      "歞",
      "歺",
      "湂",
      "琧",
      "砈",
      "砐",
      "硆",
      "腭",
      "苊",
      "萼",
      "蕚",
      "蚅",
      "蝁",
      "覨",
      "諤",
      "讍",
      "谔",
      "豟",
      "軛",
      "軶",
      "轭",
      "遌",
      "遏",
      "遻",
      "鄂",
      "鈪",
      "鍔",
      "鑩",
      "锷",
      "阨",
      "阸",
      "頞",
      "顎",
      "颚",
      "餓",
      "餩",
      "饿",
      "鰐",
      "鰪",
      "鱷",
      "鳄",
      "鶚",
      "鹗",
      "齃",
      "齶",
      "𫫇",
      "𥔲"
    ],
    xié: [
      "偕",
      "勰",
      "协",
      "協",
      "嗋",
      "垥",
      "奊",
      "恊",
      "愶",
      "拹",
      "携",
      "撷",
      "擕",
      "擷",
      "攜",
      "斜",
      "旪",
      "熁",
      "燲",
      "綊",
      "緳",
      "縀",
      "缬",
      "翓",
      "胁",
      "脅",
      "脇",
      "脋",
      "膎",
      "蝢",
      "衺",
      "襭",
      "諧",
      "讗",
      "谐",
      "鞋",
      "鞵",
      "龤",
      "㙦"
    ],
    chě: ["偖", "扯", "撦"],
    shěng: ["偗", "渻", "眚"],
    chā: [
      "偛",
      "嗏",
      "扠",
      "挿",
      "插",
      "揷",
      "疀",
      "臿",
      "艖",
      "銟",
      "鍤",
      "锸",
      "餷"
    ],
    huáng: [
      "偟",
      "凰",
      "喤",
      "堭",
      "墴",
      "媓",
      "崲",
      "徨",
      "惶",
      "楻",
      "湟",
      "煌",
      "獚",
      "瑝",
      "璜",
      "癀",
      "皇",
      "磺",
      "穔",
      "篁",
      "簧",
      "艎",
      "葟",
      "蝗",
      "蟥",
      "諻",
      "趪",
      "遑",
      "鍠",
      "鐄",
      "锽",
      "隍",
      "韹",
      "餭",
      "騜",
      "鰉",
      "鱑",
      "鳇",
      "鷬",
      "黃",
      "黄",
      "𨱑"
    ],
    yǎo: [
      "偠",
      "咬",
      "婹",
      "宎",
      "岆",
      "杳",
      "柼",
      "榚",
      "溔",
      "狕",
      "窅",
      "窈",
      "舀",
      "苭",
      "闄",
      "騕",
      "鷕",
      "齩"
    ],
    "chǒu qiào": ["偢"],
    yóu: [
      "偤",
      "尤",
      "庮",
      "怣",
      "沋",
      "油",
      "浟",
      "游",
      "犹",
      "猶",
      "猷",
      "由",
      "疣",
      "秞",
      "肬",
      "莜",
      "莸",
      "蕕",
      "蚰",
      "蝣",
      "訧",
      "輏",
      "輶",
      "逰",
      "遊",
      "邮",
      "郵",
      "鈾",
      "铀",
      "駀",
      "魷",
      "鮋",
      "鱿",
      "鲉",
      "𬨎"
    ],
    xū: [
      "偦",
      "墟",
      "媭",
      "嬃",
      "楈",
      "欨",
      "歔",
      "燸",
      "疞",
      "盱",
      "綇",
      "縃",
      "繻",
      "胥",
      "蕦",
      "虗",
      "虚",
      "虛",
      "蝑",
      "裇",
      "訏",
      "許",
      "諝",
      "譃",
      "谞",
      "鑐",
      "需",
      "須",
      "须",
      "顼",
      "驉",
      "鬚",
      "魆",
      "魖",
      "𬣙",
      "𦈡"
    ],
    zhā: [
      "偧",
      "哳",
      "抯",
      "挓",
      "揸",
      "摣",
      "樝",
      "渣",
      "皶",
      "觰",
      "譇",
      "齄",
      "齇"
    ],
    cī: ["偨", "疵", "蠀", "趀", "骴", "髊", "齹"],
    bī: ["偪", "屄", "楅", "毴", "豍", "逼", "鰏", "鲾", "鵖"],
    xún: [
      "偱",
      "噚",
      "寻",
      "尋",
      "峋",
      "巡",
      "廵",
      "循",
      "恂",
      "揗",
      "攳",
      "旬",
      "杊",
      "栒",
      "桪",
      "樳",
      "洵",
      "浔",
      "潯",
      "燅",
      "燖",
      "珣",
      "璕",
      "畃",
      "紃",
      "荀",
      "蟳",
      "詢",
      "询",
      "鄩",
      "鱏",
      "鱘",
      "鲟",
      "𬘓",
      "𬩽",
      "𬍤",
      "𬊈"
    ],
    "cāi sī": ["偲"],
    duān: ["偳", "媏", "端", "褍", "鍴"],
    ǒu: ["偶", "吘", "嘔", "耦", "腢", "蕅", "藕", "𬉼", "𠙶"],
    tōu: ["偷", "偸", "鍮"],
    "zán zá zǎ": ["偺"],
    "lǚ lóu": ["偻", "僂"],
    fèn: [
      "偾",
      "僨",
      "奋",
      "奮",
      "弅",
      "忿",
      "愤",
      "憤",
      "瀵",
      "瞓",
      "秎",
      "粪",
      "糞",
      "膹",
      "鱝",
      "鲼"
    ],
    "kuǐ guī": ["傀"],
    sǒu: ["傁", "叜", "叟", "嗾", "櫢", "瞍", "薮", "藪"],
    "zhì sī tí": ["傂"],
    sù: [
      "傃",
      "僳",
      "嗉",
      "塐",
      "塑",
      "夙",
      "嫊",
      "愫",
      "憟",
      "榡",
      "樎",
      "樕",
      "殐",
      "泝",
      "涑",
      "溯",
      "溸",
      "潚",
      "潥",
      "玊",
      "珟",
      "璛",
      "簌",
      "粛",
      "粟",
      "素",
      "縤",
      "肃",
      "肅",
      "膆",
      "蔌",
      "藗",
      "觫",
      "訴",
      "謖",
      "诉",
      "谡",
      "趚",
      "蹜",
      "速",
      "遡",
      "遬",
      "鋉",
      "餗",
      "驌",
      "骕",
      "鱐",
      "鷫",
      "鹔",
      "𫗧"
    ],
    xiā: ["傄", "煆", "瞎", "虲", "谺", "颬", "鰕"],
    "yuàn yuán": ["傆", "媛"],
    rǒng: ["傇", "冗", "宂", "氄", "軵"],
    nù: ["傉", "怒"],
    yùn: [
      "傊",
      "孕",
      "恽",
      "惲",
      "愠",
      "慍",
      "枟",
      "腪",
      "蕴",
      "薀",
      "藴",
      "蘊",
      "褞",
      "貟",
      "运",
      "運",
      "郓",
      "鄆",
      "酝",
      "醖",
      "醞",
      "韗",
      "韞",
      "韵",
      "韻",
      "餫"
    ],
    "gòu jiǎng": ["傋"],
    mà: ["傌", "嘜", "榪", "睰", "祃", "禡", "罵", "閁", "駡", "骂", "鬕"],
    bàng: [
      "傍",
      "塝",
      "棒",
      "玤",
      "稖",
      "艕",
      "蒡",
      "蜯",
      "謗",
      "谤",
      "鎊",
      "镑"
    ],
    diān: [
      "傎",
      "厧",
      "嵮",
      "巅",
      "巓",
      "巔",
      "掂",
      "攧",
      "敁",
      "槇",
      "滇",
      "癫",
      "癲",
      "蹎",
      "顚",
      "顛",
      "颠",
      "齻"
    ],
    táng: [
      "傏",
      "唐",
      "啺",
      "坣",
      "堂",
      "塘",
      "搪",
      "棠",
      "榶",
      "溏",
      "漟",
      "煻",
      "瑭",
      "磄",
      "禟",
      "篖",
      "糃",
      "糖",
      "糛",
      "膅",
      "膛",
      "蓎",
      "螗",
      "螳",
      "赯",
      "踼",
      "鄌",
      "醣",
      "鎕",
      "隚",
      "餹",
      "饄",
      "鶶",
      "䣘"
    ],
    hào: [
      "傐",
      "哠",
      "恏",
      "昊",
      "昦",
      "晧",
      "暠",
      "暤",
      "暭",
      "曍",
      "浩",
      "淏",
      "澔",
      "灏",
      "灝",
      "皓",
      "皜",
      "皞",
      "皡",
      "皥",
      "耗",
      "聕",
      "薃",
      "號",
      "鄗",
      "顥",
      "颢",
      "鰝"
    ],
    "xī xì": ["傒"],
    shān: [
      "傓",
      "删",
      "刪",
      "剼",
      "圸",
      "山",
      "挻",
      "搧",
      "柵",
      "檆",
      "潸",
      "澘",
      "煽",
      "狦",
      "珊",
      "笘",
      "縿",
      "羴",
      "羶",
      "脠",
      "舢",
      "芟",
      "衫",
      "跚",
      "軕",
      "邖",
      "閊",
      "鯅"
    ],
    "qiàn jiān": ["傔"],
    "què jué": ["傕", "埆"],
    "cāng chen": ["傖"],
    róng: [
      "傛",
      "媶",
      "嫆",
      "嬫",
      "容",
      "峵",
      "嵘",
      "嶸",
      "戎",
      "搈",
      "曧",
      "栄",
      "榕",
      "榮",
      "榵",
      "毧",
      "溶",
      "瀜",
      "烿",
      "熔",
      "狨",
      "瑢",
      "穁",
      "絨",
      "绒",
      "羢",
      "肜",
      "茙",
      "茸",
      "荣",
      "蓉",
      "蝾",
      "融",
      "螎",
      "蠑",
      "褣",
      "鎔",
      "镕",
      "駥"
    ],
    "tà tàn": ["傝"],
    suō: [
      "傞",
      "唆",
      "嗍",
      "嗦",
      "娑",
      "摍",
      "桫",
      "梭",
      "睃",
      "簑",
      "簔",
      "羧",
      "莏",
      "蓑",
      "趖",
      "鮻"
    ],
    dǎi: ["傣", "歹"],
    zài: ["傤", "儎", "再", "在", "扗", "洅", "載", "酨"],
    gǔ: [
      "傦",
      "古",
      "啒",
      "尳",
      "愲",
      "榖",
      "榾",
      "汩",
      "淈",
      "濲",
      "瀔",
      "牯",
      "皷",
      "皼",
      "盬",
      "瞽",
      "穀",
      "罟",
      "羖",
      "股",
      "脵",
      "臌",
      "薣",
      "蛊",
      "蠱",
      "詁",
      "诂",
      "轂",
      "逧",
      "鈷",
      "钴",
      "餶",
      "馉",
      "鼓",
      "鼔",
      "𦙶"
    ],
    bīn: [
      "傧",
      "宾",
      "彬",
      "斌",
      "椕",
      "滨",
      "濒",
      "濱",
      "濵",
      "瀕",
      "繽",
      "缤",
      "虨",
      "豩",
      "豳",
      "賓",
      "賔",
      "邠",
      "鑌",
      "镔",
      "霦",
      "顮"
    ],
    chǔ: [
      "储",
      "儲",
      "杵",
      "椘",
      "楚",
      "楮",
      "檚",
      "濋",
      "璴",
      "础",
      "礎",
      "禇",
      "處",
      "齭",
      "齼",
      "𬺓"
    ],
    nuó: ["傩", "儺", "挪", "梛", "橠"],
    "cān càn": ["傪"],
    lěi: [
      "傫",
      "儡",
      "厽",
      "垒",
      "塁",
      "壘",
      "壨",
      "櫐",
      "灅",
      "癗",
      "矋",
      "磊",
      "礨",
      "耒",
      "蕌",
      "蕾",
      "藟",
      "蘽",
      "蠝",
      "誄",
      "讄",
      "诔",
      "鑸",
      "鸓"
    ],
    cuī: ["催", "凗", "墔", "崔", "嵟", "慛", "摧", "榱", "獕", "磪", "鏙"],
    yōng: [
      "傭",
      "嗈",
      "墉",
      "壅",
      "嫞",
      "庸",
      "廱",
      "慵",
      "拥",
      "擁",
      "滽",
      "灉",
      "牅",
      "痈",
      "癕",
      "癰",
      "臃",
      "邕",
      "郺",
      "鄘",
      "鏞",
      "镛",
      "雍",
      "雝",
      "饔",
      "鱅",
      "鳙",
      "鷛"
    ],
    "zāo cáo": ["傮"],
    sǒng: ["傱", "嵷", "怂", "悚", "愯", "慫", "竦", "耸", "聳", "駷", "㧐"],
    ào: [
      "傲",
      "坳",
      "垇",
      "墺",
      "奡",
      "嫯",
      "岙",
      "岰",
      "嶴",
      "懊",
      "擙",
      "澳",
      "鏊",
      "驁",
      "骜"
    ],
    "qī còu": ["傶"],
    chuǎng: ["傸", "磢", "闖", "闯"],
    shǎ: ["傻", "儍"],
    hàn: [
      "傼",
      "垾",
      "悍",
      "憾",
      "扞",
      "捍",
      "撖",
      "撼",
      "旱",
      "晘",
      "暵",
      "汉",
      "涆",
      "漢",
      "瀚",
      "焊",
      "猂",
      "皔",
      "睅",
      "翰",
      "莟",
      "菡",
      "蛿",
      "蜭",
      "螒",
      "譀",
      "輚",
      "釬",
      "銲",
      "鋎",
      "雗",
      "頷",
      "顄",
      "颔",
      "駻",
      "鶾"
    ],
    zhāng: [
      "傽",
      "嫜",
      "张",
      "張",
      "彰",
      "慞",
      "暲",
      "樟",
      "漳",
      "獐",
      "璋",
      "章",
      "粻",
      "蔁",
      "蟑",
      "遧",
      "鄣",
      "鏱",
      "餦",
      "騿",
      "鱆",
      "麞"
    ],
    "yān yàn": ["傿", "墕", "嬮"],
    "piào biāo": ["僄", "骠"],
    liàn: [
      "僆",
      "堜",
      "媡",
      "恋",
      "戀",
      "楝",
      "殓",
      "殮",
      "湅",
      "潋",
      "澰",
      "瀲",
      "炼",
      "煉",
      "瑓",
      "練",
      "纞",
      "练",
      "萰",
      "錬",
      "鍊",
      "鏈",
      "链",
      "鰊",
      "𬶠"
    ],
    màn: [
      "㵘",
      "僈",
      "墁",
      "幔",
      "慢",
      "曼",
      "漫",
      "澷",
      "熳",
      "獌",
      "縵",
      "缦",
      "蔄",
      "蘰",
      "鄤",
      "鏝",
      "镘",
      "𬜬"
    ],
    "tàn tǎn": ["僋"],
    yíng: [
      "僌",
      "営",
      "塋",
      "嬴",
      "攍",
      "楹",
      "櫿",
      "溁",
      "溋",
      "滢",
      "潆",
      "濙",
      "濚",
      "濴",
      "瀅",
      "瀛",
      "瀠",
      "瀯",
      "灐",
      "灜",
      "熒",
      "營",
      "瑩",
      "盁",
      "盈",
      "禜",
      "籝",
      "籯",
      "縈",
      "茔",
      "荧",
      "莹",
      "萤",
      "营",
      "萦",
      "萾",
      "蓥",
      "藀",
      "蛍",
      "蝇",
      "蝿",
      "螢",
      "蠅",
      "謍",
      "贏",
      "赢",
      "迎",
      "鎣"
    ],
    dòng: [
      "働",
      "冻",
      "凍",
      "动",
      "動",
      "姛",
      "戙",
      "挏",
      "栋",
      "棟",
      "湩",
      "硐",
      "胨",
      "胴",
      "腖",
      "迵",
      "霘",
      "駧"
    ],
    zhuàn: [
      "僎",
      "啭",
      "囀",
      "堟",
      "撰",
      "灷",
      "瑑",
      "篆",
      "腞",
      "蒃",
      "襈",
      "譔",
      "饌",
      "馔"
    ],
    xiàng: [
      "像",
      "勨",
      "向",
      "嚮",
      "姠",
      "嶑",
      "曏",
      "橡",
      "珦",
      "缿",
      "蟓",
      "衖",
      "襐",
      "象",
      "鐌",
      "項",
      "项",
      "鱌"
    ],
    shàn: [
      "僐",
      "善",
      "墠",
      "墡",
      "嬗",
      "擅",
      "敾",
      "椫",
      "樿",
      "歚",
      "汕",
      "灗",
      "疝",
      "磰",
      "繕",
      "缮",
      "膳",
      "蟮",
      "蟺",
      "訕",
      "謆",
      "譱",
      "讪",
      "贍",
      "赡",
      "赸",
      "鄯",
      "鐥",
      "饍",
      "騸",
      "骟",
      "鱓",
      "鱔",
      "鳝",
      "𫮃"
    ],
    "tuí tuǐ": ["僓"],
    zǔn: ["僔", "噂", "撙", "譐"],
    pú: [
      "僕",
      "匍",
      "圤",
      "墣",
      "濮",
      "獛",
      "璞",
      "瞨",
      "穙",
      "莆",
      "菐",
      "菩",
      "葡",
      "蒱",
      "蒲",
      "贌",
      "酺",
      "鏷",
      "镤"
    ],
    láo: [
      "僗",
      "劳",
      "労",
      "勞",
      "哰",
      "崂",
      "嶗",
      "憥",
      "朥",
      "浶",
      "牢",
      "痨",
      "癆",
      "窂",
      "簩",
      "醪",
      "鐒",
      "铹",
      "顟",
      "髝",
      "𫭼"
    ],
    chǎng: ["僘", "厰", "廠", "敞", "昶", "氅", "鋹", "𬬮"],
    guāng: [
      "僙",
      "光",
      "咣",
      "垙",
      "姯",
      "洸",
      "灮",
      "炗",
      "炚",
      "炛",
      "烡",
      "珖",
      "胱",
      "茪",
      "輄",
      "銧",
      "黆",
      "𨐈"
    ],
    liáo: [
      "僚",
      "嘹",
      "嫽",
      "寥",
      "寮",
      "尞",
      "屪",
      "嵺",
      "嶚",
      "嶛",
      "廫",
      "憀",
      "敹",
      "暸",
      "橑",
      "獠",
      "璙",
      "疗",
      "療",
      "竂",
      "簝",
      "繚",
      "缭",
      "聊",
      "膋",
      "膫",
      "藔",
      "蟟",
      "豂",
      "賿",
      "蹘",
      "辽",
      "遼",
      "飉",
      "髎",
      "鷯",
      "鹩"
    ],
    dèng: ["僜", "凳", "墱", "嶝", "櫈", "瞪", "磴", "覴", "邓", "鄧", "隥"],
    "chán zhàn zhuàn": ["僝"],
    bō: [
      "僠",
      "嶓",
      "拨",
      "撥",
      "播",
      "波",
      "溊",
      "玻",
      "癶",
      "盋",
      "砵",
      "碆",
      "礡",
      "缽",
      "菠",
      "袰",
      "蹳",
      "鉢",
      "钵",
      "餑",
      "饽",
      "驋",
      "鱍",
      "𬭛"
    ],
    huì: [
      "僡",
      "匯",
      "卉",
      "喙",
      "嘒",
      "嚖",
      "圚",
      "嬒",
      "寭",
      "屶",
      "屷",
      "彗",
      "彙",
      "彚",
      "徻",
      "恚",
      "恵",
      "惠",
      "慧",
      "憓",
      "懳",
      "晦",
      "暳",
      "槥",
      "橞",
      "檅",
      "櫘",
      "汇",
      "泋",
      "滙",
      "潓",
      "烩",
      "燴",
      "獩",
      "璤",
      "瞺",
      "硊",
      "秽",
      "穢",
      "篲",
      "絵",
      "繪",
      "绘",
      "翙",
      "翽",
      "荟",
      "蔧",
      "蕙",
      "薈",
      "薉",
      "蟪",
      "詯",
      "誨",
      "諱",
      "譓",
      "譿",
      "讳",
      "诲",
      "賄",
      "贿",
      "鐬",
      "闠",
      "阓",
      "靧",
      "頮",
      "顪",
      "颒",
      "餯",
      "𬤝",
      "𬭬"
    ],
    chuǎn: ["僢", "喘", "舛", "荈", "踳"],
    "tiě jiàn": ["僣"],
    sēng: ["僧", "鬙"],
    xiàn: [
      "僩",
      "僴",
      "哯",
      "垷",
      "塪",
      "姭",
      "娊",
      "宪",
      "岘",
      "峴",
      "憲",
      "撊",
      "晛",
      "橌",
      "橺",
      "涀",
      "瀗",
      "献",
      "獻",
      "现",
      "現",
      "県",
      "睍",
      "粯",
      "糮",
      "絤",
      "綫",
      "線",
      "线",
      "缐",
      "羡",
      "羨",
      "腺",
      "臔",
      "臽",
      "苋",
      "莧",
      "誢",
      "豏",
      "鋧",
      "錎",
      "限",
      "陥",
      "陷",
      "霰",
      "餡",
      "馅",
      "麲",
      "鼸",
      "𬀪",
      "𪾢"
    ],
    "yù jú": ["僪"],
    "è wū": ["僫"],
    "tóng zhuàng": ["僮"],
    lǐn: [
      "僯",
      "凛",
      "凜",
      "廩",
      "廪",
      "懍",
      "懔",
      "撛",
      "檁",
      "檩",
      "澟",
      "癛",
      "癝"
    ],
    gù: [
      "僱",
      "凅",
      "固",
      "堌",
      "崓",
      "崮",
      "故",
      "梏",
      "棝",
      "牿",
      "痼",
      "祻",
      "錮",
      "锢",
      "雇",
      "顧",
      "顾",
      "鯝",
      "鲴"
    ],
    jiāng: [
      "僵",
      "壃",
      "姜",
      "橿",
      "殭",
      "江",
      "畕",
      "疅",
      "礓",
      "繮",
      "缰",
      "翞",
      "茳",
      "葁",
      "薑",
      "螀",
      "螿",
      "豇",
      "韁",
      "鱂",
      "鳉"
    ],
    mǐn: [
      "僶",
      "冺",
      "刡",
      "勄",
      "悯",
      "惽",
      "愍",
      "慜",
      "憫",
      "抿",
      "敃",
      "敏",
      "敯",
      "泯",
      "潣",
      "皿",
      "笢",
      "笽",
      "簢",
      "蠠",
      "閔",
      "閩",
      "闵",
      "闽",
      "鰵",
      "鳘",
      "黽"
    ],
    jìn: [
      "僸",
      "凚",
      "噤",
      "嚍",
      "墐",
      "壗",
      "妗",
      "嬧",
      "搢",
      "晉",
      "晋",
      "枃",
      "殣",
      "浕",
      "浸",
      "溍",
      "濅",
      "濜",
      "烬",
      "煡",
      "燼",
      "琎",
      "瑨",
      "璶",
      "盡",
      "祲",
      "縉",
      "缙",
      "荩",
      "藎",
      "覲",
      "觐",
      "賮",
      "贐",
      "赆",
      "近",
      "进",
      "進",
      "靳",
      "齽"
    ],
    "jià jie": ["價"],
    qiào: [
      "僺",
      "峭",
      "帩",
      "撬",
      "殻",
      "窍",
      "竅",
      "誚",
      "诮",
      "躈",
      "陗",
      "鞩",
      "韒",
      "髚"
    ],
    pì: ["僻", "媲", "嫓", "屁", "澼", "甓", "疈", "譬", "闢", "鷿", "鸊", "䴙"],
    sài: ["僿", "簺", "賽", "赛"],
    "chán tǎn shàn": ["儃"],
    "dāng dàng": ["儅", "当", "闣"],
    xuān: [
      "儇",
      "喧",
      "塇",
      "媗",
      "宣",
      "愃",
      "愋",
      "揎",
      "昍",
      "暄",
      "煊",
      "煖",
      "瑄",
      "睻",
      "矎",
      "禤",
      "箮",
      "翧",
      "翾",
      "萱",
      "萲",
      "蓒",
      "蕿",
      "藼",
      "蘐",
      "蝖",
      "蠉",
      "諠",
      "諼",
      "譞",
      "谖",
      "軒",
      "轩",
      "鍹",
      "駽",
      "鰚",
      "𫓶",
      "𫍽"
    ],
    "dān dàn": ["儋", "擔", "瘅"],
    càn: ["儏", "澯", "灿", "燦", "璨", "粲", "薒", "謲"],
    "bīn bìn": ["儐"],
    "án àn": ["儑"],
    tái: [
      "儓",
      "坮",
      "嬯",
      "抬",
      "擡",
      "檯",
      "炱",
      "炲",
      "籉",
      "臺",
      "薹",
      "跆",
      "邰",
      "颱",
      "鮐",
      "鲐"
    ],
    lán: [
      "儖",
      "兰",
      "囒",
      "婪",
      "岚",
      "嵐",
      "幱",
      "拦",
      "攔",
      "斓",
      "斕",
      "栏",
      "欄",
      "欗",
      "澜",
      "瀾",
      "灆",
      "灡",
      "燣",
      "燷",
      "璼",
      "篮",
      "籃",
      "籣",
      "繿",
      "葻",
      "蓝",
      "藍",
      "蘫",
      "蘭",
      "褴",
      "襕",
      "襤",
      "襴",
      "襽",
      "譋",
      "讕",
      "谰",
      "躝",
      "鑭",
      "镧",
      "闌",
      "阑",
      "韊",
      "𬒗"
    ],
    "nǐ yì ài yí": ["儗"],
    méng: [
      "儚",
      "幪",
      "曚",
      "朦",
      "橗",
      "檬",
      "氋",
      "溕",
      "濛",
      "甍",
      "甿",
      "盟",
      "礞",
      "艨",
      "莔",
      "萌",
      "蕄",
      "虻",
      "蝱",
      "鄳",
      "鄸",
      "霿",
      "靀",
      "顭",
      "饛",
      "鯍",
      "鸏",
      "鹲",
      "𫑡",
      "㠓"
    ],
    níng: [
      "儜",
      "凝",
      "咛",
      "嚀",
      "嬣",
      "柠",
      "橣",
      "檸",
      "狞",
      "獰",
      "聍",
      "聹",
      "薴",
      "鑏",
      "鬡",
      "鸋"
    ],
    qióng: [
      "儝",
      "卭",
      "宆",
      "惸",
      "憌",
      "桏",
      "橩",
      "焪",
      "焭",
      "煢",
      "熍",
      "琼",
      "瓊",
      "睘",
      "穷",
      "穹",
      "窮",
      "竆",
      "笻",
      "筇",
      "舼",
      "茕",
      "藑",
      "藭",
      "蛩",
      "蛬",
      "赹",
      "跫",
      "邛",
      "銎",
      "䓖"
    ],
    liè: [
      "儠",
      "冽",
      "列",
      "劣",
      "劽",
      "埒",
      "埓",
      "姴",
      "峛",
      "巤",
      "挒",
      "捩",
      "栵",
      "洌",
      "浖",
      "烈",
      "烮",
      "煭",
      "犣",
      "猎",
      "猟",
      "獵",
      "聗",
      "脟",
      "茢",
      "蛚",
      "趔",
      "躐",
      "迾",
      "颲",
      "鬛",
      "鬣",
      "鮤",
      "鱲",
      "鴷",
      "䴕",
      "𫚭"
    ],
    kuǎng: ["儣", "夼", "懭"],
    bào: [
      "儤",
      "勽",
      "報",
      "忁",
      "报",
      "抱",
      "曓",
      "爆",
      "犦",
      "菢",
      "虣",
      "蚫",
      "豹",
      "鉋",
      "鑤",
      "铇",
      "骲",
      "髱",
      "鮑",
      "鲍"
    ],
    biāo: [
      "儦",
      "墂",
      "幖",
      "彪",
      "标",
      "標",
      "滮",
      "瀌",
      "熛",
      "爂",
      "猋",
      "瘭",
      "磦",
      "膘",
      "臕",
      "謤",
      "贆",
      "鏢",
      "鑣",
      "镖",
      "镳",
      "颮",
      "颷",
      "飆",
      "飇",
      "飈",
      "飊",
      "飑",
      "飙",
      "飚",
      "驫",
      "骉",
      "髟"
    ],
    zǎn: ["儧", "儹", "噆", "攅", "昝", "趱", "趲"],
    háo: [
      "儫",
      "嗥",
      "嘷",
      "噑",
      "嚎",
      "壕",
      "椃",
      "毜",
      "毫",
      "濠",
      "獆",
      "獔",
      "竓",
      "籇",
      "蚝",
      "蠔",
      "譹",
      "豪"
    ],
    qìng: ["儬", "凊", "庆", "慶", "櫦", "濪", "碃", "磬", "罄", "靘"],
    chèn: [
      "儭",
      "嚫",
      "榇",
      "櫬",
      "疢",
      "衬",
      "襯",
      "讖",
      "谶",
      "趁",
      "趂",
      "齓",
      "齔",
      "龀"
    ],
    téng: [
      "儯",
      "幐",
      "滕",
      "漛",
      "疼",
      "籐",
      "籘",
      "縢",
      "腾",
      "藤",
      "虅",
      "螣",
      "誊",
      "謄",
      "邆",
      "駦",
      "騰",
      "驣",
      "鰧",
      "䲢"
    ],
    "lǒng lóng lòng": ["儱"],
    "chán chàn": ["儳"],
    "ráng xiāng": ["儴", "勷"],
    "huì xié": ["儶"],
    luó: [
      "儸",
      "攞",
      "椤",
      "欏",
      "猡",
      "玀",
      "箩",
      "籮",
      "罗",
      "羅",
      "脶",
      "腡",
      "萝",
      "蘿",
      "螺",
      "覼",
      "逻",
      "邏",
      "鏍",
      "鑼",
      "锣",
      "镙",
      "饠",
      "騾",
      "驘",
      "骡",
      "鸁"
    ],
    léi: [
      "儽",
      "嫘",
      "檑",
      "欙",
      "瓃",
      "畾",
      "縲",
      "纍",
      "纝",
      "缧",
      "罍",
      "羸",
      "蔂",
      "蘲",
      "虆",
      "轠",
      "鐳",
      "鑘",
      "镭",
      "雷",
      "靁",
      "鱩",
      "鼺"
    ],
    "nàng nāng": ["儾"],
    "wù wū": ["兀"],
    yǔn: [
      "允",
      "喗",
      "夽",
      "抎",
      "殒",
      "殞",
      "狁",
      "磒",
      "荺",
      "賱",
      "鈗",
      "阭",
      "陨",
      "隕",
      "霣",
      "馻",
      "齫",
      "齳"
    ],
    zān: ["兂", "橵", "簪", "簮", "糌", "鐕", "鐟", "鵤"],
    yuán: [
      "元",
      "円",
      "原",
      "厡",
      "厵",
      "园",
      "圆",
      "圎",
      "園",
      "圓",
      "垣",
      "塬",
      "媴",
      "嫄",
      "援",
      "榞",
      "榬",
      "橼",
      "櫞",
      "沅",
      "湲",
      "源",
      "溒",
      "爰",
      "猨",
      "猿",
      "笎",
      "緣",
      "縁",
      "缘",
      "羱",
      "茒",
      "薗",
      "蝝",
      "蝯",
      "螈",
      "袁",
      "褤",
      "謜",
      "轅",
      "辕",
      "邍",
      "邧",
      "酛",
      "鈨",
      "鎱",
      "騵",
      "魭",
      "鶢",
      "鶰",
      "黿",
      "鼋",
      "𫘪"
    ],
    xiōng: [
      "兄",
      "兇",
      "凶",
      "匂",
      "匈",
      "哅",
      "忷",
      "恟",
      "汹",
      "洶",
      "胷",
      "胸",
      "芎",
      "訩",
      "詾",
      "讻"
    ],
    chōng: [
      "充",
      "嘃",
      "忡",
      "憃",
      "憧",
      "摏",
      "沖",
      "浺",
      "珫",
      "罿",
      "翀",
      "舂",
      "艟",
      "茺",
      "衝",
      "蹖",
      "㳘"
    ],
    zhào: [
      "兆",
      "垗",
      "旐",
      "曌",
      "枛",
      "櫂",
      "照",
      "燳",
      "狣",
      "瞾",
      "笊",
      "罀",
      "罩",
      "羄",
      "肁",
      "肇",
      "肈",
      "詔",
      "诏",
      "赵",
      "趙",
      "鮡",
      "𬶐"
    ],
    "duì ruì yuè": ["兊", "兌", "兑"],
    kè: [
      "克",
      "刻",
      "勀",
      "勊",
      "堁",
      "娔",
      "客",
      "恪",
      "愙",
      "氪",
      "溘",
      "碦",
      "緙",
      "缂",
      "艐",
      "衉",
      "課",
      "课",
      "錁",
      "锞",
      "騍",
      "骒"
    ],
    tù: ["兎", "兔", "堍", "迌", "鵵"],
    dǎng: ["党", "攩", "欓", "譡", "讜", "谠", "黨", "𣗋"],
    dōu: ["兜", "兠", "唗", "橷", "篼", "蔸"],
    huǎng: [
      "兤",
      "奛",
      "幌",
      "怳",
      "恍",
      "晄",
      "炾",
      "熀",
      "縨",
      "詤",
      "謊",
      "谎"
    ],
    rù: ["入", "嗕", "媷", "扖", "杁", "洳", "溽", "縟", "缛", "蓐", "褥", "鳰"],
    nèi: ["內", "氝", "氞", "錗"],
    "yú shù": ["兪"],
    "liù lù": ["六"],
    han: ["兯", "爳"],
    tiān: ["兲", "天", "婖", "添", "酟", "靔", "靝", "黇"],
    "xīng xìng": ["兴"],
    diǎn: [
      "典",
      "嚸",
      "奌",
      "婰",
      "敟",
      "椣",
      "点",
      "碘",
      "蒧",
      "蕇",
      "踮",
      "點"
    ],
    "zī cí": ["兹"],
    jiān: [
      "兼",
      "冿",
      "囏",
      "坚",
      "堅",
      "奸",
      "姦",
      "姧",
      "尖",
      "幵",
      "惤",
      "戋",
      "戔",
      "搛",
      "椾",
      "樫",
      "櫼",
      "歼",
      "殱",
      "殲",
      "湔",
      "瀐",
      "瀸",
      "煎",
      "熞",
      "熸",
      "牋",
      "瑊",
      "睷",
      "礛",
      "礷",
      "笺",
      "箋",
      "緘",
      "縑",
      "缄",
      "缣",
      "肩",
      "艰",
      "艱",
      "菅",
      "菺",
      "葌",
      "蒹",
      "蔪",
      "蕑",
      "蕳",
      "虃",
      "譼",
      "豜",
      "鑯",
      "雃",
      "鞯",
      "韀",
      "韉",
      "餰",
      "馢",
      "鰔",
      "鰜",
      "鰹",
      "鲣",
      "鳒",
      "鵑",
      "鵳",
      "鶼",
      "鹣",
      "麉"
    ],
    shòu: [
      "兽",
      "受",
      "售",
      "壽",
      "夀",
      "寿",
      "授",
      "狩",
      "獣",
      "獸",
      "痩",
      "瘦",
      "綬",
      "绶",
      "膄"
    ],
    jì: [
      "兾",
      "冀",
      "剂",
      "剤",
      "劑",
      "勣",
      "坖",
      "垍",
      "塈",
      "妓",
      "季",
      "寂",
      "寄",
      "廭",
      "彑",
      "徛",
      "忌",
      "悸",
      "惎",
      "懻",
      "技",
      "旡",
      "既",
      "旣",
      "暨",
      "暩",
      "曁",
      "梞",
      "檕",
      "檵",
      "洎",
      "漃",
      "漈",
      "瀱",
      "痵",
      "癠",
      "禝",
      "稩",
      "稷",
      "穄",
      "穊",
      "穧",
      "紀",
      "継",
      "績",
      "繋",
      "繼",
      "继",
      "绩",
      "罽",
      "臮",
      "芰",
      "茍",
      "茤",
      "葪",
      "蓟",
      "蔇",
      "薊",
      "蘎",
      "蘮",
      "蘻",
      "裚",
      "襀",
      "覬",
      "觊",
      "計",
      "記",
      "誋",
      "计",
      "记",
      "跡",
      "跽",
      "蹟",
      "迹",
      "际",
      "際",
      "霁",
      "霽",
      "驥",
      "骥",
      "髻",
      "鬾",
      "魝",
      "魥",
      "鯚",
      "鯽",
      "鰶",
      "鰿",
      "鱀",
      "鱭",
      "鲚",
      "鲫",
      "鵋",
      "鷑",
      "齌",
      "𪟝",
      "𬶨",
      "𬶭"
    ],
    jiōng: ["冂", "冋", "坰", "埛", "扃", "蘏", "蘔", "駉", "駫", "𬳶"],
    mào: [
      "冃",
      "冐",
      "媢",
      "帽",
      "愗",
      "懋",
      "暓",
      "柕",
      "楙",
      "毷",
      "瑁",
      "皃",
      "眊",
      "瞀",
      "耄",
      "茂",
      "萺",
      "蝐",
      "袤",
      "覒",
      "貌",
      "貿",
      "贸",
      "鄚",
      "鄮"
    ],
    rǎn: ["冄", "冉", "姌", "媣", "染", "珃", "苒", "蒅", "䎃"],
    "nèi nà": ["内"],
    gāng: [
      "冈",
      "冮",
      "刚",
      "剛",
      "堈",
      "堽",
      "岡",
      "掆",
      "摃",
      "棡",
      "牨",
      "犅",
      "疘",
      "綱",
      "纲",
      "缸",
      "罁",
      "罡",
      "肛",
      "釭",
      "鎠",
      "㭎"
    ],
    cè: [
      "冊",
      "册",
      "厕",
      "厠",
      "夨",
      "廁",
      "恻",
      "惻",
      "憡",
      "敇",
      "测",
      "測",
      "笧",
      "策",
      "筞",
      "筴",
      "箣",
      "荝",
      "萗",
      "萴",
      "蓛"
    ],
    guǎ: ["冎", "剐", "剮", "叧", "寡"],
    "mào mò": ["冒"],
    gòu: [
      "冓",
      "啂",
      "坸",
      "垢",
      "够",
      "夠",
      "媾",
      "彀",
      "搆",
      "撀",
      "构",
      "構",
      "煹",
      "覯",
      "觏",
      "訽",
      "詬",
      "诟",
      "購",
      "购",
      "遘",
      "雊"
    ],
    xǔ: ["冔", "喣", "暊", "栩", "珝", "盨", "糈", "詡", "諿", "诩", "鄦", "醑"],
    mì: [
      "冖",
      "冪",
      "嘧",
      "塓",
      "宻",
      "密",
      "峚",
      "幂",
      "幎",
      "幦",
      "怽",
      "榓",
      "樒",
      "櫁",
      "汨",
      "淧",
      "滵",
      "漞",
      "濗",
      "熐",
      "羃",
      "蔤",
      "蜜",
      "覓",
      "覔",
      "覛",
      "觅",
      "謐",
      "谧",
      "鼏"
    ],
    "yóu yín": ["冘"],
    xiě: ["写", "冩", "藛"],
    jūn: [
      "军",
      "君",
      "均",
      "桾",
      "汮",
      "皲",
      "皸",
      "皹",
      "碅",
      "莙",
      "蚐",
      "袀",
      "覠",
      "軍",
      "鈞",
      "銁",
      "銞",
      "鍕",
      "钧",
      "頵",
      "鮶",
      "鲪",
      "麏"
    ],
    mí: [
      "冞",
      "擟",
      "瀰",
      "爢",
      "猕",
      "獼",
      "祢",
      "禰",
      "縻",
      "蒾",
      "藌",
      "蘪",
      "蘼",
      "袮",
      "詸",
      "謎",
      "迷",
      "醚",
      "醾",
      "醿",
      "釄",
      "镾",
      "鸍",
      "麊",
      "麋",
      "麛"
    ],
    "guān guàn": ["冠", "覌", "観", "觀", "观"],
    měng: [
      "冡",
      "勐",
      "懵",
      "掹",
      "猛",
      "獴",
      "艋",
      "蜢",
      "蠓",
      "錳",
      "锰",
      "鯭",
      "鼆"
    ],
    zhǒng: ["冢", "塚", "尰", "歱", "煄", "瘇", "肿", "腫", "踵"],
    zuì: [
      "冣",
      "嶵",
      "晬",
      "最",
      "栬",
      "槜",
      "檇",
      "檌",
      "祽",
      "絊",
      "罪",
      "蕞",
      "辠",
      "酔",
      "酻",
      "醉",
      "錊"
    ],
    yuān: [
      "冤",
      "剈",
      "囦",
      "嬽",
      "寃",
      "棩",
      "淵",
      "渁",
      "渆",
      "渊",
      "渕",
      "灁",
      "眢",
      "肙",
      "葾",
      "蒬",
      "蜎",
      "蜵",
      "駌",
      "鳶",
      "鴛",
      "鵷",
      "鸢",
      "鸳",
      "鹓",
      "鼘",
      "鼝"
    ],
    míng: [
      "冥",
      "名",
      "明",
      "暝",
      "朙",
      "榠",
      "洺",
      "溟",
      "猽",
      "眀",
      "眳",
      "瞑",
      "茗",
      "螟",
      "覭",
      "詺",
      "鄍",
      "銘",
      "铭",
      "鳴",
      "鸣"
    ],
    kòu: [
      "冦",
      "叩",
      "宼",
      "寇",
      "扣",
      "敂",
      "滱",
      "窛",
      "筘",
      "簆",
      "蔲",
      "蔻",
      "釦",
      "鷇"
    ],
    tài: [
      "冭",
      "太",
      "夳",
      "忲",
      "态",
      "態",
      "汰",
      "汱",
      "泰",
      "溙",
      "肽",
      "舦",
      "酞",
      "鈦",
      "钛"
    ],
    "féng píng": ["冯", "馮"],
    "chōng chòng": ["冲"],
    kuàng: [
      "况",
      "圹",
      "壙",
      "岲",
      "懬",
      "旷",
      "昿",
      "曠",
      "框",
      "況",
      "爌",
      "眖",
      "眶",
      "矿",
      "砿",
      "礦",
      "穬",
      "絋",
      "絖",
      "纊",
      "纩",
      "貺",
      "贶",
      "軦",
      "邝",
      "鄺",
      "鉱",
      "鋛",
      "鑛",
      "黋"
    ],
    lěng: ["冷"],
    pàn: [
      "冸",
      "判",
      "叛",
      "沜",
      "泮",
      "溿",
      "炍",
      "牉",
      "畔",
      "盼",
      "聁",
      "袢",
      "襻",
      "詊",
      "鋬",
      "鑻",
      "頖",
      "鵥"
    ],
    fā: ["冹", "彂", "沷", "発", "發"],
    xiǎn: [
      "冼",
      "尟",
      "尠",
      "崄",
      "嶮",
      "幰",
      "攇",
      "显",
      "櫶",
      "毨",
      "灦",
      "烍",
      "燹",
      "狝",
      "猃",
      "獫",
      "獮",
      "玁",
      "禒",
      "筅",
      "箲",
      "藓",
      "蘚",
      "蚬",
      "蜆",
      "譣",
      "赻",
      "跣",
      "鍌",
      "险",
      "険",
      "險",
      "韅",
      "顕",
      "顯",
      "㬎"
    ],
    qià: ["冾", "圶", "帢", "恰", "殎", "洽", "硈", "胢", "髂"],
    "jìng chēng": ["净", "凈", "淨"],
    sōu: [
      "凁",
      "嗖",
      "廀",
      "廋",
      "捜",
      "搜",
      "摉",
      "溲",
      "獀",
      "艘",
      "蒐",
      "螋",
      "鄋",
      "醙",
      "鎪",
      "锼",
      "颼",
      "飕",
      "餿",
      "馊",
      "騪"
    ],
    měi: [
      "凂",
      "媄",
      "媺",
      "嬍",
      "嵄",
      "挴",
      "毎",
      "每",
      "浼",
      "渼",
      "燘",
      "美",
      "躾",
      "鎂",
      "镁",
      "黣"
    ],
    tú: [
      "凃",
      "図",
      "图",
      "圖",
      "圗",
      "塗",
      "屠",
      "峹",
      "嵞",
      "庩",
      "廜",
      "徒",
      "悇",
      "揬",
      "涂",
      "瘏",
      "筡",
      "腯",
      "荼",
      "蒤",
      "跿",
      "途",
      "酴",
      "鈯",
      "鍎",
      "馟",
      "駼",
      "鵌",
      "鶟",
      "鷋",
      "鷵",
      "𬳿"
    ],
    zhǔn: ["准", "凖", "埻", "準", "𬘯"],
    "liáng liàng": ["凉", "涼", "量"],
    diāo: [
      "凋",
      "刁",
      "刟",
      "叼",
      "奝",
      "弴",
      "彫",
      "汈",
      "琱",
      "碉",
      "簓",
      "虭",
      "蛁",
      "貂",
      "錭",
      "雕",
      "鮉",
      "鯛",
      "鲷",
      "鵰",
      "鼦"
    ],
    còu: ["凑", "湊", "腠", "輳", "辏"],
    ái: ["凒", "啀", "嘊", "捱", "溰", "癌", "皑", "皚"],
    duó: ["凙", "剫", "夺", "奪", "痥", "踱", "鈬", "鐸", "铎"],
    dú: [
      "凟",
      "匵",
      "嬻",
      "椟",
      "櫝",
      "殰",
      "涜",
      "牍",
      "牘",
      "犊",
      "犢",
      "独",
      "獨",
      "瓄",
      "皾",
      "裻",
      "読",
      "讀",
      "讟",
      "豄",
      "贕",
      "錖",
      "鑟",
      "韇",
      "韣",
      "韥",
      "騳",
      "髑",
      "黩",
      "黷"
    ],
    "jǐ jī": ["几"],
    fán: [
      "凡",
      "凢",
      "凣",
      "匥",
      "墦",
      "杋",
      "柉",
      "棥",
      "樊",
      "瀿",
      "烦",
      "煩",
      "燔",
      "璠",
      "矾",
      "礬",
      "笲",
      "籵",
      "緐",
      "羳",
      "舤",
      "舧",
      "薠",
      "蘩",
      "蠜",
      "襎",
      "蹯",
      "釩",
      "鐇",
      "鐢",
      "钒",
      "鷭",
      "𫔍",
      "𬸪"
    ],
    jū: [
      "凥",
      "匊",
      "娵",
      "婮",
      "居",
      "崌",
      "抅",
      "挶",
      "掬",
      "梮",
      "椐",
      "檋",
      "毩",
      "毱",
      "泃",
      "涺",
      "狙",
      "琚",
      "疽",
      "砠",
      "罝",
      "腒",
      "艍",
      "蜛",
      "裾",
      "諊",
      "跔",
      "踘",
      "躹",
      "陱",
      "雎",
      "鞠",
      "鞫",
      "駒",
      "驹",
      "鮈",
      "鴡",
      "鶋",
      "𬶋"
    ],
    "chù chǔ": ["処", "处"],
    zhǐ: [
      "凪",
      "劧",
      "咫",
      "址",
      "坧",
      "帋",
      "恉",
      "扺",
      "指",
      "旨",
      "枳",
      "止",
      "汦",
      "沚",
      "洔",
      "淽",
      "疻",
      "砋",
      "祉",
      "秖",
      "紙",
      "纸",
      "芷",
      "藢",
      "衹",
      "襧",
      "訨",
      "趾",
      "軹",
      "轵",
      "酯",
      "阯",
      "黹"
    ],
    píng: [
      "凭",
      "凴",
      "呯",
      "坪",
      "塀",
      "岼",
      "帡",
      "帲",
      "幈",
      "平",
      "慿",
      "憑",
      "枰",
      "洴",
      "焩",
      "玶",
      "瓶",
      "甁",
      "竮",
      "箳",
      "簈",
      "缾",
      "荓",
      "萍",
      "蓱",
      "蚲",
      "蛢",
      "評",
      "评",
      "軿",
      "輧",
      "郱",
      "鮃",
      "鲆"
    ],
    kǎi: [
      "凯",
      "凱",
      "剀",
      "剴",
      "垲",
      "塏",
      "恺",
      "愷",
      "慨",
      "暟",
      "蒈",
      "輆",
      "鍇",
      "鎧",
      "铠",
      "锴",
      "闓",
      "闿",
      "颽"
    ],
    gān: [
      "凲",
      "坩",
      "尲",
      "尴",
      "尶",
      "尷",
      "柑",
      "泔",
      "漧",
      "玕",
      "甘",
      "疳",
      "矸",
      "竿",
      "筸",
      "粓",
      "肝",
      "苷",
      "迀",
      "酐",
      "魐"
    ],
    "kǎn qiǎn": ["凵"],
    tū: [
      "凸",
      "堗",
      "嶀",
      "捸",
      "涋",
      "湥",
      "痜",
      "禿",
      "秃",
      "突",
      "葖",
      "鋵",
      "鵚",
      "鼵",
      "㻬"
    ],
    "āo wā": ["凹"],
    chū: ["出", "初", "岀", "摴", "榋", "樗", "貙", "齣", "䢺", "䝙"],
    dàng: [
      "凼",
      "圵",
      "垱",
      "壋",
      "档",
      "檔",
      "氹",
      "璗",
      "瓽",
      "盪",
      "瞊",
      "砀",
      "碭",
      "礑",
      "簜",
      "荡",
      "菪",
      "蕩",
      "蘯",
      "趤",
      "逿",
      "雼",
      "𬍡"
    ],
    hán: [
      "函",
      "凾",
      "含",
      "圅",
      "娢",
      "寒",
      "崡",
      "晗",
      "梒",
      "浛",
      "涵",
      "澏",
      "焓",
      "琀",
      "甝",
      "筨",
      "蜬",
      "邗",
      "邯",
      "鋡",
      "韓",
      "韩"
    ],
    záo: ["凿", "鑿"],
    dāo: ["刀", "刂", "忉", "氘", "舠", "螩", "釖", "魛", "鱽"],
    chuāng: ["刅", "摐", "牎", "牕", "疮", "瘡", "窓", "窗", "窻"],
    "fēn fèn": ["分"],
    "qiè qiē": ["切"],
    kān: ["刊", "勘", "堪", "戡", "栞", "龕", "龛"],
    cǔn: ["刌", "忖"],
    chú: [
      "刍",
      "厨",
      "幮",
      "廚",
      "橱",
      "櫉",
      "櫥",
      "滁",
      "犓",
      "篨",
      "耡",
      "芻",
      "蒢",
      "蒭",
      "蜍",
      "蟵",
      "豠",
      "趎",
      "蹰",
      "躇",
      "躕",
      "鉏",
      "鋤",
      "锄",
      "除",
      "雏",
      "雛",
      "鶵"
    ],
    "huà huá": ["划"],
    lí: [
      "刕",
      "剓",
      "剺",
      "劙",
      "厘",
      "喱",
      "嚟",
      "囄",
      "嫠",
      "孷",
      "廲",
      "悡",
      "梨",
      "梸",
      "棃",
      "漓",
      "灕",
      "犁",
      "犂",
      "狸",
      "琍",
      "璃",
      "瓈",
      "盠",
      "睝",
      "离",
      "穲",
      "竰",
      "筣",
      "篱",
      "籬",
      "糎",
      "縭",
      "缡",
      "罹",
      "艃",
      "荲",
      "菞",
      "蓠",
      "蔾",
      "藜",
      "蘺",
      "蜊",
      "蟍",
      "蟸",
      "蠫",
      "褵",
      "謧",
      "貍",
      "醨",
      "鋫",
      "錅",
      "鏫",
      "鑗",
      "離",
      "驪",
      "骊",
      "鯏",
      "鯬",
      "鱺",
      "鲡",
      "鵹",
      "鸝",
      "鹂",
      "黎",
      "黧",
      "㰀"
    ],
    yuè: [
      "刖",
      "嬳",
      "岄",
      "岳",
      "嶽",
      "恱",
      "悅",
      "悦",
      "戉",
      "抈",
      "捳",
      "月",
      "樾",
      "瀹",
      "爚",
      "玥",
      "礿",
      "禴",
      "篗",
      "籆",
      "籥",
      "籰",
      "粤",
      "粵",
      "蘥",
      "蚎",
      "蚏",
      "説",
      "越",
      "跀",
      "跃",
      "躍",
      "軏",
      "鈅",
      "鉞",
      "鑰",
      "钺",
      "閱",
      "閲",
      "阅",
      "鸑",
      "鸙",
      "黦",
      "龠",
      "𫐄",
      "𬸚"
    ],
    liú: [
      "刘",
      "劉",
      "嚠",
      "媹",
      "嵧",
      "旈",
      "旒",
      "榴",
      "橊",
      "流",
      "浏",
      "瀏",
      "琉",
      "瑠",
      "瑬",
      "璢",
      "畄",
      "留",
      "畱",
      "疁",
      "瘤",
      "癅",
      "硫",
      "蒥",
      "蓅",
      "蟉",
      "裗",
      "鎏",
      "鏐",
      "鐂",
      "镠",
      "飀",
      "飅",
      "飗",
      "駠",
      "駵",
      "騮",
      "驑",
      "骝",
      "鰡",
      "鶹",
      "鹠",
      "麍"
    ],
    zé: [
      "则",
      "則",
      "啧",
      "嘖",
      "嫧",
      "帻",
      "幘",
      "択",
      "樍",
      "歵",
      "沢",
      "泎",
      "溭",
      "皟",
      "瞔",
      "矠",
      "礋",
      "箦",
      "簀",
      "舴",
      "蔶",
      "蠌",
      "襗",
      "謮",
      "賾",
      "赜",
      "迮",
      "鸅",
      "齚",
      "齰"
    ],
    "chuàng chuāng": ["创", "創"],
    qù: ["刞", "厺", "去", "閴", "闃", "阒", "麮", "鼁"],
    "bié biè": ["別", "别"],
    "páo bào": ["刨"],
    "chǎn chàn": ["刬", "剗", "幝"],
    guā: [
      "刮",
      "劀",
      "桰",
      "歄",
      "煱",
      "瓜",
      "胍",
      "踻",
      "颪",
      "颳",
      "騧",
      "鴰",
      "鸹"
    ],
    gēng: [
      "刯",
      "庚",
      "椩",
      "浭",
      "焿",
      "畊",
      "絚",
      "羮",
      "羹",
      "耕",
      "菮",
      "賡",
      "赓",
      "鶊",
      "鹒"
    ],
    dào: [
      "到",
      "噵",
      "悼",
      "椡",
      "檤",
      "燾",
      "瓙",
      "盗",
      "盜",
      "稲",
      "稻",
      "纛",
      "翿",
      "艔",
      "菿",
      "衜",
      "衟",
      "軇",
      "道"
    ],
    chuàng: ["刱", "剏", "剙", "怆", "愴"],
    kū: ["刳", "哭", "圐", "堀", "枯", "桍", "矻", "窟", "跍", "郀", "骷", "鮬"],
    duò: [
      "刴",
      "剁",
      "墯",
      "尮",
      "惰",
      "憜",
      "挅",
      "桗",
      "舵",
      "跥",
      "跺",
      "陊",
      "陏",
      "飿",
      "饳",
      "鵽"
    ],
    "shuā shuà": ["刷"],
    "quàn xuàn": ["券"],
    "chà shā": ["刹", "剎"],
    "cì cī": ["刺"],
    guì: [
      "刽",
      "刿",
      "劊",
      "劌",
      "撌",
      "攰",
      "昋",
      "桂",
      "椢",
      "槶",
      "樻",
      "櫃",
      "猤",
      "禬",
      "筀",
      "蓕",
      "襘",
      "貴",
      "贵",
      "跪",
      "鐀",
      "鑎",
      "鞼",
      "鱖",
      "鱥"
    ],
    lóu: [
      "剅",
      "娄",
      "婁",
      "廔",
      "楼",
      "樓",
      "溇",
      "漊",
      "熡",
      "耧",
      "耬",
      "艛",
      "蒌",
      "蔞",
      "蝼",
      "螻",
      "謱",
      "軁",
      "遱",
      "鞻",
      "髅",
      "髏",
      "𪣻"
    ],
    cuò: [
      "剉",
      "剒",
      "厝",
      "夎",
      "挫",
      "措",
      "棤",
      "莝",
      "莡",
      "蓌",
      "逪",
      "銼",
      "錯",
      "锉",
      "错"
    ],
    "xiāo xuē": ["削"],
    "kēi kè": ["剋", "尅"],
    "là lá": ["剌"],
    tī: ["剔", "梯", "踢", "銻", "锑", "鷈", "鷉", "䏲", "䴘"],
    pōu: ["剖"],
    wān: ["剜", "塆", "壪", "帵", "弯", "彎", "湾", "潫", "灣", "睕", "蜿", "豌"],
    "bāo bō": ["剝", "剥"],
    duō: ["剟", "咄", "哆", "嚉", "多", "夛", "掇", "毲", "畓", "裰", "㙍"],
    qíng: [
      "剠",
      "勍",
      "夝",
      "情",
      "擎",
      "晴",
      "暒",
      "棾",
      "樈",
      "檠",
      "氰",
      "甠",
      "硘",
      "葝",
      "黥"
    ],
    "yǎn shàn": ["剡"],
    "dū zhuó": ["剢"],
    yān: [
      "剦",
      "嫣",
      "崦",
      "嶖",
      "恹",
      "懕",
      "懨",
      "樮",
      "淊",
      "淹",
      "漹",
      "烟",
      "焉",
      "焑",
      "煙",
      "珚",
      "篶",
      "胭",
      "臙",
      "菸",
      "鄢",
      "醃",
      "閹",
      "阉",
      "黫"
    ],
    huō: ["剨", "劐", "吙", "攉", "秴", "耠", "锪", "騞", "𬴃"],
    shèng: [
      "剩",
      "剰",
      "勝",
      "圣",
      "墭",
      "嵊",
      "晠",
      "榺",
      "橳",
      "琞",
      "聖",
      "蕂",
      "貹",
      "賸"
    ],
    "duān zhì": ["剬"],
    wū: [
      "剭",
      "呜",
      "嗚",
      "圬",
      "屋",
      "巫",
      "弙",
      "杇",
      "歍",
      "汙",
      "汚",
      "污",
      "洿",
      "烏",
      "窏",
      "箼",
      "螐",
      "誈",
      "誣",
      "诬",
      "邬",
      "鄔",
      "鎢",
      "钨",
      "鰞",
      "鴮"
    ],
    gē: [
      "割",
      "哥",
      "圪",
      "彁",
      "戈",
      "戓",
      "戨",
      "歌",
      "滒",
      "犵",
      "肐",
      "袼",
      "謌",
      "鎶",
      "鴚",
      "鴿",
      "鸽"
    ],
    "dá zhá": ["剳"],
    chuán: ["剶", "暷", "椽", "篅", "舡", "舩", "船", "輲", "遄"],
    "tuán zhuān": ["剸", "漙", "篿"],
    "lù jiū": ["剹"],
    pēng: ["剻", "匉", "嘭", "怦", "恲", "抨", "梈", "烹", "砰", "軯", "駍"],
    piāo: ["剽", "勡", "慓", "旚", "犥", "翲", "螵", "飃", "飄", "飘", "魒"],
    kōu: ["剾", "彄", "抠", "摳", "眍", "瞘", "芤", "𫸩"],
    "jiǎo chāo": ["剿", "劋", "勦", "摷"],
    qiāo: [
      "劁",
      "勪",
      "墝",
      "幧",
      "敲",
      "橇",
      "毃",
      "燆",
      "硗",
      "磽",
      "繑",
      "趬",
      "跷",
      "踍",
      "蹺",
      "蹻",
      "郻",
      "鄡",
      "鄥",
      "鍫",
      "鍬",
      "鐰",
      "锹",
      "頝"
    ],
    "huá huà": ["劃"],
    "zhā zhá": ["劄"],
    "pī pǐ": ["劈", "悂"],
    tāng: ["劏", "嘡", "羰", "薚", "蝪", "蹚", "鞺", "鼞"],
    chán: [
      "劖",
      "嚵",
      "壥",
      "婵",
      "嬋",
      "巉",
      "廛",
      "棎",
      "毚",
      "湹",
      "潹",
      "潺",
      "澶",
      "瀍",
      "瀺",
      "煘",
      "獑",
      "磛",
      "緾",
      "纏",
      "纒",
      "缠",
      "艬",
      "蝉",
      "蟐",
      "蟬",
      "蟾",
      "誗",
      "讒",
      "谗",
      "躔",
      "鄽",
      "酁",
      "鋋",
      "鑱",
      "镵",
      "饞",
      "馋"
    ],
    zuān: ["劗", "躜", "躦", "鉆", "鑚"],
    mó: [
      "劘",
      "嫫",
      "嬤",
      "嬷",
      "尛",
      "摹",
      "擵",
      "橅",
      "糢",
      "膜",
      "藦",
      "蘑",
      "謨",
      "謩",
      "谟",
      "饃",
      "饝",
      "馍",
      "髍",
      "魔",
      "魹"
    ],
    zhú: [
      "劚",
      "斸",
      "曯",
      "欘",
      "灟",
      "炢",
      "烛",
      "燭",
      "爥",
      "瘃",
      "竹",
      "笁",
      "笜",
      "舳",
      "茿",
      "蓫",
      "蠋",
      "蠾",
      "躅",
      "逐",
      "逫",
      "钃",
      "鱁"
    ],
    quàn: ["劝", "勧", "勸", "牶", "韏"],
    "jìn jìng": ["劤", "劲", "勁"],
    kēng: ["劥", "坑", "牼", "硁", "硜", "誙", "銵", "鍞", "鏗", "铿", "阬"],
    "xié liè": ["劦"],
    "zhù chú": ["助"],
    nǔ: ["努", "弩", "砮", "胬"],
    shào: ["劭", "卲", "哨", "潲", "紹", "綤", "绍", "袑", "邵"],
    miǎo: ["劰", "杪", "淼", "渺", "眇", "秒", "篎", "緲", "缈", "藐", "邈"],
    kǒu: ["劶", "口"],
    wā: [
      "劸",
      "娲",
      "媧",
      "屲",
      "挖",
      "攨",
      "洼",
      "溛",
      "漥",
      "瓾",
      "畖",
      "穵",
      "窊",
      "窪",
      "蛙",
      "韈",
      "鼃"
    ],
    kuāng: [
      "劻",
      "匡",
      "匩",
      "哐",
      "恇",
      "洭",
      "筐",
      "筺",
      "誆",
      "诓",
      "軭",
      "邼"
    ],
    hé: [
      "劾",
      "咊",
      "啝",
      "姀",
      "峆",
      "敆",
      "曷",
      "柇",
      "楁",
      "毼",
      "河",
      "涸",
      "渮",
      "澕",
      "熆",
      "皬",
      "盇",
      "盉",
      "盍",
      "盒",
      "禾",
      "篕",
      "籺",
      "粭",
      "翮",
      "菏",
      "萂",
      "覈",
      "訸",
      "詥",
      "郃",
      "釛",
      "鉌",
      "鑉",
      "閡",
      "闔",
      "阂",
      "阖",
      "鞨",
      "頜",
      "餄",
      "饸",
      "魺",
      "鹖",
      "麧",
      "齕",
      "龁",
      "龢",
      "𬌗"
    ],
    gào: [
      "勂",
      "吿",
      "告",
      "峼",
      "祮",
      "祰",
      "禞",
      "筶",
      "誥",
      "诰",
      "郜",
      "鋯",
      "锆"
    ],
    "bó bèi": ["勃"],
    láng: [
      "勆",
      "嫏",
      "廊",
      "斏",
      "桹",
      "榔",
      "樃",
      "欴",
      "狼",
      "琅",
      "瑯",
      "硠",
      "稂",
      "艆",
      "蓈",
      "蜋",
      "螂",
      "躴",
      "郒",
      "郞",
      "鋃",
      "鎯",
      "锒"
    ],
    xūn: [
      "勋",
      "勛",
      "勲",
      "勳",
      "嚑",
      "坃",
      "埙",
      "塤",
      "壎",
      "壦",
      "曛",
      "燻",
      "獯",
      "矄",
      "纁",
      "臐",
      "薫",
      "薰",
      "蘍",
      "醺",
      "𫄸"
    ],
    "juàn juān": ["勌", "瓹"],
    "lè lēi": ["勒"],
    kài: ["勓", "炌", "烗", "鎎"],
    "wěng yǎng": ["勜"],
    qín: [
      "勤",
      "嗪",
      "噙",
      "嶜",
      "庈",
      "懃",
      "懄",
      "捦",
      "擒",
      "斳",
      "檎",
      "澿",
      "珡",
      "琴",
      "琹",
      "瘽",
      "禽",
      "秦",
      "耹",
      "芩",
      "芹",
      "菦",
      "螓",
      "蠄",
      "鈙",
      "鈫",
      "雂",
      "靲",
      "鳹",
      "鵭"
    ],
    jiàng: [
      "勥",
      "匞",
      "匠",
      "嵹",
      "弜",
      "弶",
      "摾",
      "櫤",
      "洚",
      "滰",
      "犟",
      "糡",
      "糨",
      "絳",
      "绛",
      "謽",
      "酱",
      "醤",
      "醬"
    ],
    fān: [
      "勫",
      "嬏",
      "帆",
      "幡",
      "忛",
      "憣",
      "旙",
      "旛",
      "繙",
      "翻",
      "藩",
      "轓",
      "颿",
      "飜",
      "鱕"
    ],
    juān: ["勬", "姢", "娟", "捐", "涓", "蠲", "裐", "鎸", "鐫", "镌", "鹃"],
    "tóng dòng": ["勭", "烔", "燑", "狪"],
    lǜ: [
      "勴",
      "垏",
      "嵂",
      "律",
      "慮",
      "氯",
      "滤",
      "濾",
      "爈",
      "箻",
      "綠",
      "繂",
      "膟",
      "葎",
      "虑",
      "鑢"
    ],
    chè: [
      "勶",
      "坼",
      "彻",
      "徹",
      "掣",
      "撤",
      "澈",
      "烢",
      "爡",
      "瞮",
      "硩",
      "聅",
      "迠",
      "頙",
      "㬚"
    ],
    sháo: ["勺", "玿", "韶"],
    "gōu gòu": ["勾"],
    cōng: [
      "匆",
      "囪",
      "囱",
      "忩",
      "怱",
      "悤",
      "暰",
      "樬",
      "漗",
      "瑽",
      "璁",
      "瞛",
      "篵",
      "繱",
      "聡",
      "聦",
      "聪",
      "聰",
      "苁",
      "茐",
      "葱",
      "蓯",
      "蔥",
      "蟌",
      "鍯",
      "鏓",
      "鏦",
      "騘",
      "驄",
      "骢"
    ],
    "táo yáo": ["匋", "陶"],
    páo: ["匏", "咆", "垉", "庖", "爮", "狍", "袍", "褜", "軳", "鞄", "麅"],
    dá: [
      "匒",
      "妲",
      "怛",
      "炟",
      "燵",
      "畣",
      "笪",
      "羍",
      "荙",
      "薘",
      "蟽",
      "詚",
      "达",
      "迏",
      "迖",
      "迚",
      "逹",
      "達",
      "鐽",
      "靼",
      "鞑",
      "韃",
      "龖",
      "龘",
      "𫟼"
    ],
    "huà huā": ["化"],
    "běi bèi": ["北"],
    nǎo: ["匘", "垴", "堖", "嫐", "恼", "悩", "惱", "瑙", "碯", "脑", "脳", "腦"],
    "chí shi": ["匙"],
    fāng: ["匚", "堏", "方", "淓", "牥", "芳", "邡", "鈁", "錺", "钫", "鴋"],
    zā: ["匝", "咂", "帀", "沞", "臜", "臢", "迊", "鉔", "魳"],
    qiè: [
      "匧",
      "厒",
      "妾",
      "怯",
      "悏",
      "惬",
      "愜",
      "挈",
      "穕",
      "窃",
      "竊",
      "笡",
      "箧",
      "篋",
      "籡",
      "踥",
      "鍥",
      "锲",
      "鯜"
    ],
    "zāng cáng": ["匨"],
    fěi: ["匪", "奜", "悱", "棐", "榧", "篚", "翡", "蕜", "誹", "诽"],
    "kuì guì": ["匮", "匱"],
    suǎn: ["匴"],
    pǐ: ["匹", "噽", "嚭", "圮", "庀", "痞", "癖", "脴", "苉", "銢", "鴄"],
    "qū ōu": ["区", "區"],
    "kē qià": ["匼"],
    "yǎn yàn": ["匽", "棪"],
    biǎn: ["匾", "惼", "揙", "碥", "稨", "窆", "藊", "褊", "貶", "贬", "鴘"],
    nì: [
      "匿",
      "堄",
      "嫟",
      "嬺",
      "惄",
      "愵",
      "昵",
      "暱",
      "氼",
      "眤",
      "睨",
      "縌",
      "胒",
      "腻",
      "膩",
      "逆",
      "𨺙"
    ],
    niàn: ["卄", "唸", "埝", "廿", "念", "惗", "艌"],
    sà: ["卅", "櫒", "脎", "萨", "蕯", "薩", "鈒", "隡", "颯", "飒", "馺"],
    zú: ["卆", "哫", "崪", "族", "箤", "足", "踤", "镞"],
    shēng: [
      "升",
      "呏",
      "声",
      "斘",
      "昇",
      "曻",
      "枡",
      "殅",
      "泩",
      "湦",
      "焺",
      "牲",
      "珄",
      "生",
      "甥",
      "竔",
      "笙",
      "聲",
      "鉎",
      "鍟",
      "阩",
      "陞",
      "陹",
      "鵿",
      "鼪"
    ],
    wàn: [
      "卍",
      "卐",
      "忨",
      "杤",
      "瞣",
      "脕",
      "腕",
      "萬",
      "蟃",
      "贎",
      "輐",
      "錽",
      "𬇕"
    ],
    "huá huà huā": ["华", "華"],
    bēi: ["卑", "悲", "揹", "杯", "桮", "盃", "碑", "藣", "鵯", "鹎"],
    "zú cù": ["卒"],
    "dān shàn chán": ["单", "單"],
    "nán nā": ["南"],
    "shuài lǜ": ["卛"],
    "bǔ bo pú": ["卜"],
    "kuàng guàn": ["卝"],
    biàn: [
      "卞",
      "变",
      "変",
      "峅",
      "弁",
      "徧",
      "忭",
      "抃",
      "昪",
      "汳",
      "汴",
      "玣",
      "艑",
      "苄",
      "覍",
      "諚",
      "變",
      "辡",
      "辧",
      "辨",
      "辩",
      "辫",
      "辮",
      "辯",
      "遍",
      "釆",
      "𨚕"
    ],
    bǔ: ["卟", "哺", "捕", "补", "補", "鸔", "𬷕"],
    "zhàn zhān": ["占", "覱"],
    "kǎ qiǎ": ["卡"],
    lú: [
      "卢",
      "嚧",
      "垆",
      "壚",
      "庐",
      "廬",
      "曥",
      "枦",
      "栌",
      "櫨",
      "泸",
      "瀘",
      "炉",
      "爐",
      "獹",
      "玈",
      "瓐",
      "盧",
      "矑",
      "籚",
      "纑",
      "罏",
      "胪",
      "臚",
      "舮",
      "舻",
      "艫",
      "芦",
      "蘆",
      "蠦",
      "轤",
      "轳",
      "鈩",
      "鑪",
      "顱",
      "颅",
      "馿",
      "髗",
      "魲",
      "鱸",
      "鲈",
      "鸕",
      "鸬",
      "黸",
      "𬬻"
    ],
    lǔ: [
      "卤",
      "塷",
      "掳",
      "擄",
      "樐",
      "橹",
      "櫓",
      "氌",
      "滷",
      "澛",
      "瀂",
      "硵",
      "磠",
      "穞",
      "艣",
      "艪",
      "蓾",
      "虏",
      "虜",
      "鏀",
      "鐪",
      "鑥",
      "镥",
      "魯",
      "鲁",
      "鹵"
    ],
    guà: ["卦", "啩", "挂", "掛", "罣", "褂", "詿", "诖"],
    "áng yǎng": ["卬"],
    yìn: [
      "印",
      "垽",
      "堷",
      "廕",
      "慭",
      "憖",
      "憗",
      "懚",
      "洕",
      "湚",
      "猌",
      "癊",
      "胤",
      "茚",
      "酳",
      "鮣",
      "䲟"
    ],
    què: [
      "却",
      "卻",
      "塙",
      "崅",
      "悫",
      "愨",
      "慤",
      "搉",
      "榷",
      "燩",
      "琷",
      "皵",
      "确",
      "確",
      "礭",
      "闋",
      "阕",
      "鵲",
      "鹊",
      "𬒈"
    ],
    luǎn: ["卵"],
    "juàn juǎn": ["卷", "巻"],
    "chǎng ān hàn": ["厂"],
    "wěi yán": ["厃"],
    tīng: [
      "厅",
      "厛",
      "听",
      "庁",
      "廰",
      "廳",
      "汀",
      "烃",
      "烴",
      "綎",
      "耓",
      "聴",
      "聼",
      "聽",
      "鞓",
      "𬘩"
    ],
    "zhé zhái": ["厇"],
    "hàn àn": ["厈", "屽"],
    yǎ: ["厊", "唖", "庌", "痖", "瘂", "蕥"],
    shè: [
      "厍",
      "厙",
      "弽",
      "慑",
      "慴",
      "懾",
      "摂",
      "欇",
      "涉",
      "涻",
      "渉",
      "滠",
      "灄",
      "社",
      "舎",
      "蔎",
      "蠂",
      "設",
      "设",
      "赦",
      "騇",
      "麝"
    ],
    dǐ: [
      "厎",
      "呧",
      "坘",
      "弤",
      "抵",
      "拞",
      "掋",
      "牴",
      "砥",
      "菧",
      "觝",
      "詆",
      "诋",
      "軧",
      "邸",
      "阺",
      "骶",
      "鯳"
    ],
    "zhǎ zhǎi": ["厏"],
    páng: ["厐", "嫎", "庞", "徬", "舽", "螃", "逄", "鰟", "鳑", "龎", "龐"],
    "zhì shī": ["厔"],
    máng: [
      "厖",
      "吂",
      "哤",
      "娏",
      "忙",
      "恾",
      "杗",
      "杧",
      "汒",
      "浝",
      "牻",
      "痝",
      "盲",
      "硭",
      "笀",
      "芒",
      "茫",
      "蘉",
      "邙",
      "釯",
      "鋩",
      "铓",
      "駹"
    ],
    zuī: ["厜", "樶", "纗", "蟕"],
    "shà xià": ["厦", "廈"],
    áo: [
      "厫",
      "嗷",
      "嗸",
      "廒",
      "敖",
      "滶",
      "獒",
      "獓",
      "璈",
      "翱",
      "翶",
      "翺",
      "聱",
      "蔜",
      "螯",
      "謷",
      "謸",
      "遨",
      "鏖",
      "隞",
      "鰲",
      "鳌",
      "鷔",
      "鼇"
    ],
    "lán qiān": ["厱"],
    "sī mǒu": ["厶"],
    "gōng hóng": ["厷"],
    "lín miǎo": ["厸"],
    "qiú róu": ["厹"],
    dū: ["厾", "嘟", "督", "醏"],
    "xiàn xuán": ["县", "縣"],
    "cān shēn cēn sān": ["参", "參", "叄", "叅"],
    "ài yǐ": ["叆"],
    "chā chà chǎ chá": ["叉"],
    shuāng: [
      "双",
      "孀",
      "孇",
      "欆",
      "礵",
      "艭",
      "雙",
      "霜",
      "騻",
      "驦",
      "骦",
      "鷞",
      "鸘",
      "鹴"
    ],
    shōu: ["収", "收"],
    guái: ["叏"],
    bá: [
      "叐",
      "妭",
      "抜",
      "拔",
      "炦",
      "癹",
      "胈",
      "茇",
      "菝",
      "詙",
      "跋",
      "軷",
      "魃",
      "鼥"
    ],
    "fā fà": ["发"],
    "zhuó yǐ lì jué": ["叕"],
    qǔ: ["取", "娶", "竬", "蝺", "詓", "齲", "龋"],
    "jiǎ xiá": ["叚", "徦"],
    "wèi yù": ["叞", "尉", "蔚"],
    dié: [
      "叠",
      "垤",
      "堞",
      "峌",
      "幉",
      "恎",
      "惵",
      "戜",
      "曡",
      "殜",
      "氎",
      "牃",
      "牒",
      "瓞",
      "畳",
      "疂",
      "疉",
      "疊",
      "碟",
      "絰",
      "绖",
      "耊",
      "耋",
      "胅",
      "艓",
      "苵",
      "蜨",
      "蝶",
      "褋",
      "詄",
      "諜",
      "谍",
      "跮",
      "蹀",
      "迭",
      "镻",
      "鰈",
      "鲽",
      "鴩",
      "𫶇"
    ],
    ruì: ["叡", "枘", "汭", "瑞", "睿", "芮", "蚋", "蜹", "銳", "鋭", "锐"],
    "jù gōu": ["句"],
    lìng: ["另", "呤", "炩", "蘦"],
    "dāo dáo tāo": ["叨"],
    "zhī zhǐ": ["只"],
    jiào: [
      "叫",
      "呌",
      "嘂",
      "嘦",
      "噍",
      "嬓",
      "斍",
      "斠",
      "滘",
      "漖",
      "獥",
      "珓",
      "皭",
      "窖",
      "藠",
      "訆",
      "譥",
      "趭",
      "較",
      "轎",
      "轿",
      "较",
      "酵",
      "醮",
      "釂"
    ],
    "zhào shào": ["召"],
    "kě kè": ["可"],
    "tái tāi": ["台", "苔"],
    pǒ: ["叵", "尀", "笸", "箥", "鉕", "钷", "駊"],
    "yè xié": ["叶"],
    "hào háo": ["号"],
    tàn: ["叹", "嘆", "探", "歎", "湠", "炭", "碳", "舕"],
    "hōng hóng": ["叿"],
    miē: ["吀", "咩", "哶", "孭"],
    "xū yū yù": ["吁"],
    chī: [
      "吃",
      "哧",
      "喫",
      "嗤",
      "噄",
      "妛",
      "媸",
      "彨",
      "彲",
      "摛",
      "攡",
      "殦",
      "瓻",
      "痴",
      "癡",
      "眵",
      "瞝",
      "笞",
      "粚",
      "胵",
      "蚩",
      "螭",
      "訵",
      "魑",
      "鴟",
      "鵄",
      "鸱",
      "黐",
      "齝",
      "𫄨"
    ],
    "xuān sòng": ["吅"],
    yāo: [
      "吆",
      "喓",
      "夭",
      "妖",
      "幺",
      "楆",
      "殀",
      "祅",
      "腰",
      "葽",
      "訞",
      "邀",
      "鴁",
      "鴢",
      "㙘"
    ],
    zǐ: [
      "吇",
      "姉",
      "姊",
      "子",
      "杍",
      "梓",
      "榟",
      "橴",
      "滓",
      "矷",
      "秭",
      "笫",
      "籽",
      "紫",
      "耔",
      "虸",
      "訿",
      "釨"
    ],
    "hé gě": ["合", "鲄"],
    "cùn dòu": ["吋"],
    "tóng tòng": ["同"],
    "tǔ tù": ["吐", "唋"],
    "zhà zhā": ["吒", "奓"],
    "xià hè": ["吓"],
    "ā yā": ["吖"],
    "ma má mǎ": ["吗"],
    lìn: [
      "吝",
      "恡",
      "悋",
      "橉",
      "焛",
      "甐",
      "膦",
      "蔺",
      "藺",
      "賃",
      "赁",
      "蹸",
      "躏",
      "躙",
      "躪",
      "轥",
      "閵"
    ],
    tūn: ["吞", "暾", "朜", "焞"],
    "bǐ pǐ": ["吡"],
    qìn: ["吢", "吣", "唚", "抋", "揿", "搇", "撳", "沁", "瀙", "菣", "藽"],
    "jiè gè": ["吤"],
    "fǒu pǐ": ["否"],
    "ba bā": ["吧"],
    dūn: [
      "吨",
      "噸",
      "墩",
      "墪",
      "惇",
      "撉",
      "撴",
      "犜",
      "獤",
      "礅",
      "蜳",
      "蹾",
      "驐"
    ],
    fēn: [
      "吩",
      "帉",
      "昐",
      "朆",
      "梤",
      "棻",
      "氛",
      "竕",
      "紛",
      "纷",
      "翂",
      "芬",
      "衯",
      "訜",
      "躮",
      "酚",
      "鈖",
      "雰",
      "餴",
      "饙",
      "馚"
    ],
    "é huā": ["吪"],
    "kēng háng": ["吭", "妔"],
    shǔn: ["吮"],
    "zhī zī": ["吱"],
    "yǐn shěn": ["吲"],
    wú: [
      "吳",
      "吴",
      "呉",
      "墲",
      "峿",
      "梧",
      "橆",
      "毋",
      "洖",
      "浯",
      "無",
      "珸",
      "璑",
      "祦",
      "芜",
      "茣",
      "莁",
      "蕪",
      "蜈",
      "蟱",
      "譕",
      "郚",
      "鋙",
      "铻",
      "鯃",
      "鵐",
      "鷡",
      "鹀",
      "鼯"
    ],
    "chǎo chāo": ["吵"],
    "nà nè": ["吶"],
    "xuè chuò jué": ["吷"],
    chuī: ["吹", "炊", "龡"],
    "dōu rú": ["吺"],
    hǒu: ["吼", "犼"],
    "hōng hǒu ōu": ["吽"],
    "wú yù": ["吾"],
    "ya yā": ["呀"],
    "è e": ["呃"],
    dāi: ["呆", "懛", "獃"],
    "mèn qǐ": ["呇"],
    hōng: [
      "呍",
      "嚝",
      "揈",
      "灴",
      "烘",
      "焢",
      "硡",
      "薨",
      "訇",
      "谾",
      "軣",
      "輷",
      "轟",
      "轰",
      "鍧"
    ],
    nà: [
      "呐",
      "捺",
      "笝",
      "納",
      "纳",
      "肭",
      "蒳",
      "衲",
      "豽",
      "貀",
      "軜",
      "郍",
      "鈉",
      "钠",
      "靹",
      "魶"
    ],
    "tūn tiān": ["呑"],
    "fǔ ḿ": ["呒", "嘸"],
    "dāi tǎi": ["呔"],
    "ǒu ōu òu": ["呕"],
    "bài bei": ["呗"],
    "yuán yún yùn": ["员", "員"],
    guō: [
      "呙",
      "啯",
      "嘓",
      "埚",
      "堝",
      "墎",
      "崞",
      "彉",
      "彍",
      "懖",
      "猓",
      "瘑",
      "聒",
      "蝈",
      "蟈",
      "郭",
      "鈛",
      "鍋",
      "锅"
    ],
    "huá qì": ["呚"],
    "qiàng qiāng": ["呛", "跄"],
    shī: [
      "呞",
      "失",
      "尸",
      "屍",
      "师",
      "師",
      "施",
      "浉",
      "湤",
      "湿",
      "溮",
      "溼",
      "濕",
      "狮",
      "獅",
      "瑡",
      "絁",
      "葹",
      "蒒",
      "蓍",
      "虱",
      "蝨",
      "褷",
      "襹",
      "詩",
      "诗",
      "邿",
      "釃",
      "鉇",
      "鍦",
      "鯴",
      "鰤",
      "鲺",
      "鳲",
      "鳾",
      "鶳",
      "鸤",
      "䴓",
      "𫚕"
    ],
    juǎn: ["呟", "埍", "臇", "菤", "錈", "锩"],
    pěn: ["呠", "翸"],
    "wěn mǐn": ["呡"],
    "ne ní": ["呢"],
    "ḿ m̀ móu": ["呣"],
    rán: [
      "呥",
      "嘫",
      "然",
      "燃",
      "繎",
      "肰",
      "蚦",
      "蚺",
      "衻",
      "袇",
      "袡",
      "髥",
      "髯"
    ],
    "tiè chè": ["呫"],
    "qì zhī": ["呮"],
    "zǐ cī": ["呰"],
    "guā gū guǎ": ["呱"],
    "cī zī": ["呲"],
    "hǒu xǔ gòu": ["呴"],
    "hē ā á ǎ à a": ["呵"],
    náo: [
      "呶",
      "夒",
      "峱",
      "嶩",
      "巎",
      "挠",
      "撓",
      "猱",
      "硇",
      "蛲",
      "蟯",
      "詉",
      "譊",
      "鐃",
      "铙"
    ],
    "xiā gā": ["呷"],
    pēi: ["呸", "怌", "肧", "胚", "衃", "醅"],
    "háo xiāo": ["呺"],
    mìng: ["命", "掵"],
    "dá dàn": ["呾"],
    "zuǐ jǔ": ["咀"],
    "xián gān": ["咁"],
    pǒu: ["咅", "哣", "犃"],
    "yǎng yāng": ["咉"],
    "zǎ zé zhā": ["咋"],
    "hé hè huó huò hú": ["和"],
    hāi: ["咍"],
    dā: ["咑", "哒", "噠", "墶", "搭", "撘", "耷", "褡", "鎝", "𨱏"],
    "kǎ kā": ["咔"],
    gū: [
      "咕",
      "唂",
      "唃",
      "姑",
      "嫴",
      "孤",
      "巬",
      "巭",
      "柧",
      "橭",
      "沽",
      "泒",
      "稒",
      "笟",
      "箍",
      "箛",
      "篐",
      "罛",
      "苽",
      "菇",
      "菰",
      "蓇",
      "觚",
      "軱",
      "軲",
      "轱",
      "辜",
      "酤",
      "鈲",
      "鮕",
      "鴣",
      "鸪"
    ],
    "kā gā": ["咖"],
    zuo: ["咗"],
    lóng: [
      "咙",
      "嚨",
      "嶐",
      "巃",
      "巄",
      "昽",
      "曨",
      "朧",
      "栊",
      "槞",
      "櫳",
      "湰",
      "滝",
      "漋",
      "爖",
      "珑",
      "瓏",
      "癃",
      "眬",
      "矓",
      "砻",
      "礱",
      "礲",
      "窿",
      "竜",
      "聋",
      "聾",
      "胧",
      "茏",
      "蘢",
      "蠪",
      "蠬",
      "襱",
      "豅",
      "鏧",
      "鑨",
      "霳",
      "靇",
      "驡",
      "鸗",
      "龍",
      "龒",
      "龙"
    ],
    "xiàn xián": ["咞"],
    qì: [
      "咠",
      "唭",
      "噐",
      "器",
      "夡",
      "弃",
      "憇",
      "憩",
      "暣",
      "棄",
      "欫",
      "气",
      "気",
      "氣",
      "汔",
      "汽",
      "泣",
      "湆",
      "湇",
      "炁",
      "甈",
      "盵",
      "矵",
      "碛",
      "碶",
      "磜",
      "磧",
      "罊",
      "芞",
      "葺",
      "藒",
      "蟿",
      "訖",
      "讫",
      "迄",
      "鐑"
    ],
    "xì dié": ["咥"],
    "liē liě lié lie": ["咧"],
    zī: [
      "咨",
      "嗞",
      "姕",
      "姿",
      "孜",
      "孳",
      "孶",
      "崰",
      "嵫",
      "栥",
      "椔",
      "淄",
      "湽",
      "滋",
      "澬",
      "玆",
      "禌",
      "秶",
      "粢",
      "紎",
      "緇",
      "緕",
      "纃",
      "缁",
      "茊",
      "茲",
      "葘",
      "諮",
      "谘",
      "貲",
      "資",
      "赀",
      "资",
      "赼",
      "趑",
      "趦",
      "輜",
      "輺",
      "辎",
      "鄑",
      "鈭",
      "錙",
      "鍿",
      "鎡",
      "锱",
      "镃",
      "頾",
      "頿",
      "髭",
      "鯔",
      "鰦",
      "鲻",
      "鶅",
      "鼒",
      "齍",
      "齜",
      "龇"
    ],
    mī: ["咪"],
    "jī xī qià": ["咭"],
    "gē luò kǎ lo": ["咯"],
    "shù xún": ["咰"],
    "zán zá zǎ zan": ["咱"],
    "hāi ké": ["咳"],
    huī: [
      "咴",
      "噅",
      "噕",
      "婎",
      "媈",
      "幑",
      "徽",
      "恢",
      "拻",
      "挥",
      "揮",
      "晖",
      "暉",
      "楎",
      "洃",
      "瀈",
      "灰",
      "灳",
      "烣",
      "睳",
      "禈",
      "翚",
      "翬",
      "蘳",
      "袆",
      "褘",
      "詼",
      "诙",
      "豗",
      "輝",
      "辉",
      "鰴",
      "麾",
      "㧑"
    ],
    "huài shì": ["咶"],
    táo: [
      "咷",
      "啕",
      "桃",
      "檮",
      "洮",
      "淘",
      "祹",
      "綯",
      "绹",
      "萄",
      "蜪",
      "裪",
      "迯",
      "逃",
      "醄",
      "鋾",
      "鞀",
      "鞉",
      "饀",
      "駣",
      "騊",
      "鼗",
      "𫘦"
    ],
    xián: [
      "咸",
      "啣",
      "娴",
      "娹",
      "婱",
      "嫌",
      "嫺",
      "嫻",
      "弦",
      "挦",
      "撏",
      "涎",
      "湺",
      "澖",
      "甉",
      "痫",
      "癇",
      "癎",
      "絃",
      "胘",
      "舷",
      "藖",
      "蚿",
      "蛝",
      "衔",
      "衘",
      "誸",
      "諴",
      "賢",
      "贒",
      "贤",
      "輱",
      "醎",
      "銜",
      "鑦",
      "閑",
      "闲",
      "鷳",
      "鷴",
      "鷼",
      "鹇",
      "鹹",
      "麙",
      "𫍯"
    ],
    "è àn": ["咹"],
    "xuān xuǎn": ["咺", "烜"],
    "wāi hé wǒ guǎ guō": ["咼"],
    "yàn yè yān": ["咽"],
    āi: ["哀", "哎", "埃", "溾", "銰", "鎄", "锿"],
    pǐn: ["品", "榀"],
    shěn: [
      "哂",
      "婶",
      "嬸",
      "审",
      "宷",
      "審",
      "弞",
      "曋",
      "渖",
      "瀋",
      "瞫",
      "矤",
      "矧",
      "覾",
      "訠",
      "諗",
      "讅",
      "谂",
      "谉",
      "邥",
      "頣",
      "魫"
    ],
    "hǒng hōng hòng": ["哄"],
    "wā wa": ["哇"],
    "hā hǎ hà": ["哈"],
    zāi: ["哉", "栽", "渽", "溨", "災", "灾", "烖", "睵", "賳"],
    "dì diè": ["哋"],
    pài: ["哌", "沠", "派", "渒", "湃", "蒎", "鎃"],
    "gén hěn": ["哏"],
    "yǎ yā": ["哑", "雅"],
    "yuě huì": ["哕", "噦"],
    nián: ["哖", "年", "秊", "秥", "鮎", "鯰", "鲇", "鲶", "鵇", "黏"],
    "huá huā": ["哗", "嘩"],
    "jì jiē zhāi": ["哜", "嚌"],
    mōu: ["哞"],
    "yō yo": ["哟", "喲"],
    lòng: ["哢", "梇", "贚"],
    "ò ó é": ["哦"],
    "lī lǐ li": ["哩"],
    "nǎ na nǎi né něi": ["哪"],
    hè: [
      "哬",
      "垎",
      "壑",
      "寉",
      "惒",
      "焃",
      "煂",
      "燺",
      "爀",
      "癋",
      "碋",
      "翯",
      "褐",
      "謞",
      "賀",
      "贺",
      "赫",
      "靍",
      "靎",
      "靏",
      "鶴",
      "鸖",
      "鹤"
    ],
    "bō pò bā": ["哱"],
    zhé: [
      "哲",
      "啠",
      "喆",
      "嚞",
      "埑",
      "悊",
      "摺",
      "晢",
      "晣",
      "歽",
      "矺",
      "砓",
      "磔",
      "籷",
      "粍",
      "虴",
      "蛰",
      "蟄",
      "袩",
      "詟",
      "謫",
      "謺",
      "讁",
      "讋",
      "谪",
      "輒",
      "輙",
      "轍",
      "辄",
      "辙",
      "鮿"
    ],
    "liàng láng": ["哴"],
    "liè lǜ": ["哷"],
    hān: ["哻", "憨", "蚶", "谽", "酣", "頇", "顸", "馠", "魽", "鼾"],
    "hēng hng": ["哼"],
    gěng: [
      "哽",
      "埂",
      "峺",
      "挭",
      "梗",
      "綆",
      "绠",
      "耿",
      "莄",
      "郠",
      "骾",
      "鯁",
      "鲠",
      "𬒔"
    ],
    "chuò yuè": ["哾"],
    "gě jiā": ["哿"],
    "bei bài": ["唄"],
    "hán hàn": ["唅"],
    chún: [
      "唇",
      "浱",
      "湻",
      "滣",
      "漘",
      "犉",
      "純",
      "纯",
      "脣",
      "莼",
      "蒓",
      "蓴",
      "醇",
      "醕",
      "錞",
      "陙",
      "鯙",
      "鶉",
      "鹑",
      "𬭚"
    ],
    "ài āi": ["唉"],
    "jiá qiǎn": ["唊"],
    "yán dàn xián": ["唌"],
    chē: ["唓", "砗", "硨", "莗", "蛼"],
    "wú ńg ń": ["唔"],
    zào: [
      "唕",
      "唣",
      "噪",
      "慥",
      "梍",
      "灶",
      "煰",
      "燥",
      "皁",
      "皂",
      "竃",
      "竈",
      "簉",
      "艁",
      "譟",
      "趮",
      "躁",
      "造",
      "𥖨"
    ],
    dí: [
      "唙",
      "啇",
      "嘀",
      "嚁",
      "嫡",
      "廸",
      "敌",
      "敵",
      "梑",
      "涤",
      "滌",
      "狄",
      "笛",
      "籴",
      "糴",
      "苖",
      "荻",
      "蔋",
      "蔐",
      "藡",
      "覿",
      "觌",
      "豴",
      "迪",
      "靮",
      "頔",
      "馰",
      "髢",
      "鸐",
      "𬱖"
    ],
    "gòng hǒng gǒng": ["唝", "嗊"],
    dóu: ["唞"],
    "lào láo": ["唠", "嘮", "憦"],
    huàn: [
      "唤",
      "喚",
      "奂",
      "奐",
      "宦",
      "嵈",
      "幻",
      "患",
      "愌",
      "换",
      "換",
      "擐",
      "攌",
      "梙",
      "槵",
      "浣",
      "涣",
      "渙",
      "漶",
      "澣",
      "烉",
      "焕",
      "煥",
      "瑍",
      "痪",
      "瘓",
      "睆",
      "肒",
      "藧",
      "豢",
      "轘",
      "逭",
      "鯇",
      "鯶",
      "鰀",
      "鲩"
    ],
    léng: ["唥", "塄", "楞", "碐", "薐"],
    "wō wěi": ["唩"],
    fěng: ["唪", "覂", "諷", "讽"],
    "yín jìn": ["唫"],
    "hǔ xià": ["唬"],
    wéi: [
      "唯",
      "围",
      "圍",
      "壝",
      "峗",
      "峞",
      "嵬",
      "帏",
      "帷",
      "幃",
      "惟",
      "桅",
      "沩",
      "洈",
      "涠",
      "湋",
      "溈",
      "潍",
      "潙",
      "潿",
      "濰",
      "犩",
      "矀",
      "維",
      "维",
      "蓶",
      "覹",
      "违",
      "違",
      "鄬",
      "醀",
      "鍏",
      "闈",
      "闱",
      "韋",
      "韦",
      "鮠",
      "𣲗",
      "𬶏"
    ],
    shuā: ["唰"],
    chàng: ["唱", "怅", "悵", "暢", "焻", "畅", "畼", "誯", "韔", "鬯"],
    "ér wā": ["唲"],
    qiàng: ["唴", "炝", "熗", "羻"],
    yō: ["唷"],
    yū: ["唹", "淤", "瘀", "盓", "箊", "紆", "纡", "込", "迂", "迃", "陓"],
    lài: [
      "唻",
      "濑",
      "瀨",
      "瀬",
      "癞",
      "癩",
      "睐",
      "睞",
      "籁",
      "籟",
      "藾",
      "賚",
      "賴",
      "赉",
      "赖",
      "頼",
      "顂",
      "鵣"
    ],
    tuò: ["唾", "嶞", "柝", "毤", "毻", "箨", "籜", "萚", "蘀", "跅"],
    "zhōu zhāo tiào": ["啁"],
    kěn: ["啃", "垦", "墾", "恳", "懇", "肎", "肯", "肻", "豤", "錹"],
    "zhuó zhào": ["啅", "濯"],
    "hēng hèng": ["啈", "悙"],
    "lín lán": ["啉"],
    "a ā á ǎ à": ["啊"],
    qiāng: [
      "啌",
      "嗴",
      "嶈",
      "戕",
      "摤",
      "斨",
      "枪",
      "槍",
      "溬",
      "牄",
      "猐",
      "獇",
      "羌",
      "羗",
      "腔",
      "蜣",
      "謒",
      "鏘",
      "锖",
      "锵"
    ],
    "tūn zhūn xiāng duǐ": ["啍"],
    wèn: ["問", "妏", "揾", "搵", "璺", "问", "顐"],
    "cuì qi": ["啐"],
    "dié shà jié tì": ["啑"],
    "yuē wā": ["啘"],
    "zǐ cǐ": ["啙"],
    "bǐ tú": ["啚"],
    "chuò chuài": ["啜"],
    "yǎ yā è": ["啞"],
    fēi: [
      "啡",
      "婓",
      "婔",
      "扉",
      "暃",
      "渄",
      "猆",
      "緋",
      "绯",
      "裶",
      "霏",
      "非",
      "靟",
      "飛",
      "飝",
      "飞",
      "餥",
      "馡",
      "騑",
      "騛",
      "鯡",
      "鲱",
      "𬴂"
    ],
    pí: [
      "啤",
      "壀",
      "枇",
      "毗",
      "毘",
      "焷",
      "琵",
      "疲",
      "皮",
      "篺",
      "罴",
      "羆",
      "脾",
      "腗",
      "膍",
      "蚍",
      "蚽",
      "蜱",
      "螷",
      "蠯",
      "豼",
      "貔",
      "郫",
      "鈹",
      "阰",
      "陴",
      "隦",
      "魮",
      "鮍",
      "鲏",
      "鵧",
      "鼙"
    ],
    shá: ["啥"],
    "lā la": ["啦"],
    "yīng qíng": ["啨"],
    pā: ["啪", "妑", "舥", "葩", "趴"],
    "zhě shì": ["啫"],
    sè: [
      "啬",
      "嗇",
      "懎",
      "擌",
      "栜",
      "歮",
      "涩",
      "渋",
      "澀",
      "澁",
      "濇",
      "濏",
      "瀒",
      "瑟",
      "璱",
      "瘷",
      "穑",
      "穡",
      "穯",
      "繬",
      "譅",
      "轖",
      "銫",
      "鏼",
      "铯",
      "飋"
    ],
    niè: [
      "啮",
      "嗫",
      "噛",
      "嚙",
      "囁",
      "囓",
      "圼",
      "孼",
      "孽",
      "嵲",
      "嶭",
      "巕",
      "帇",
      "敜",
      "枿",
      "槷",
      "櫱",
      "涅",
      "湼",
      "痆",
      "篞",
      "籋",
      "糱",
      "糵",
      "聂",
      "聶",
      "臬",
      "臲",
      "蘖",
      "蠥",
      "讘",
      "踂",
      "踗",
      "踙",
      "蹑",
      "躡",
      "錜",
      "鎳",
      "鑈",
      "鑷",
      "钀",
      "镊",
      "镍",
      "闑",
      "陧",
      "隉",
      "顳",
      "颞",
      "齧",
      "𫔶"
    ],
    "luō luó luo": ["啰", "囉"],
    "tān chǎn tuō": ["啴"],
    bo: ["啵", "蔔"],
    dìng: [
      "啶",
      "定",
      "椗",
      "矴",
      "碇",
      "碠",
      "磸",
      "聢",
      "腚",
      "萣",
      "蝊",
      "訂",
      "订",
      "錠",
      "锭",
      "顁",
      "飣",
      "饤"
    ],
    lāng: ["啷"],
    "án ān": ["啽"],
    kā: ["喀", "擖"],
    "yóng yú": ["喁"],
    "lā lá lǎ": ["喇"],
    jiē: [
      "喈",
      "喼",
      "嗟",
      "堦",
      "媘",
      "接",
      "掲",
      "擑",
      "湝",
      "煯",
      "疖",
      "痎",
      "癤",
      "皆",
      "秸",
      "稭",
      "脻",
      "蝔",
      "街",
      "謯",
      "阶",
      "階",
      "鞂",
      "鶛"
    ],
    hóu: [
      "喉",
      "帿",
      "猴",
      "瘊",
      "睺",
      "篌",
      "糇",
      "翭",
      "葔",
      "鄇",
      "鍭",
      "餱",
      "骺",
      "鯸",
      "𬭤"
    ],
    "dié zhá": ["喋"],
    wāi: ["喎", "歪", "竵"],
    "nuò rě": ["喏"],
    "xù huò guó": ["喐"],
    zán: ["喒"],
    "wō ō": ["喔"],
    hú: [
      "喖",
      "嘝",
      "囫",
      "壶",
      "壷",
      "壺",
      "媩",
      "弧",
      "搰",
      "斛",
      "楜",
      "槲",
      "湖",
      "瀫",
      "焀",
      "煳",
      "狐",
      "猢",
      "瑚",
      "瓳",
      "箶",
      "絗",
      "縠",
      "胡",
      "葫",
      "蔛",
      "蝴",
      "螜",
      "衚",
      "觳",
      "醐",
      "鍸",
      "頶",
      "餬",
      "鬍",
      "魱",
      "鰗",
      "鵠",
      "鶘",
      "鶦",
      "鹕"
    ],
    "huàn yuán xuǎn hé": ["喛"],
    xǐ: [
      "喜",
      "囍",
      "壐",
      "屣",
      "徙",
      "憙",
      "枲",
      "橲",
      "歖",
      "漇",
      "玺",
      "璽",
      "矖",
      "禧",
      "縰",
      "葈",
      "葸",
      "蓰",
      "蟢",
      "謑",
      "蹝",
      "躧",
      "鈢",
      "鉨",
      "鉩",
      "鱚",
      "𬭳",
      "𬶮"
    ],
    "hē hè yè": ["喝"],
    kuì: [
      "喟",
      "嘳",
      "媿",
      "嬇",
      "愦",
      "愧",
      "憒",
      "篑",
      "簣",
      "籄",
      "聩",
      "聭",
      "聵",
      "膭",
      "蕢",
      "謉",
      "餽",
      "饋",
      "馈"
    ],
    "zhǒng chuáng": ["喠"],
    "wéi wèi": ["喡", "為", "爲"],
    "duó zhà": ["喥"],
    "sāng sàng": ["喪"],
    "qiáo jiāo": ["喬"],
    "pèn bēn": ["喯"],
    "cān sūn qī": ["喰"],
    "zhā chā": ["喳"],
    miāo: ["喵"],
    "pēn pèn": ["喷"],
    kuí: [
      "喹",
      "夔",
      "奎",
      "巙",
      "戣",
      "揆",
      "晆",
      "暌",
      "楏",
      "楑",
      "櫆",
      "犪",
      "睽",
      "葵",
      "藈",
      "蘷",
      "虁",
      "蝰",
      "躨",
      "逵",
      "鄈",
      "鍨",
      "鍷",
      "頯",
      "馗",
      "騤",
      "骙",
      "魁"
    ],
    "lou lóu": ["喽"],
    "zào qiāo": ["喿"],
    "hè xiāo xiào hù": ["嗃"],
    "á shà": ["嗄"],
    xiù: [
      "嗅",
      "岫",
      "峀",
      "溴",
      "珛",
      "琇",
      "璓",
      "秀",
      "綉",
      "繍",
      "繡",
      "绣",
      "螑",
      "袖",
      "褎",
      "褏",
      "銹",
      "鏥",
      "鏽",
      "锈",
      "齅"
    ],
    "qiāng qiàng": ["嗆", "戗", "戧", "蹌", "蹡"],
    "ài yì": ["嗌", "艾"],
    "má mǎ ma": ["嗎"],
    "kè kē": ["嗑"],
    "dā tà": ["嗒", "鎉"],
    sǎng: ["嗓", "搡", "磉", "褬", "鎟", "顙", "颡"],
    chēn: ["嗔", "抻", "琛", "瞋", "諃", "謓", "賝", "郴", "𬘭"],
    "wā gǔ": ["嗗"],
    "pǎng bēng": ["嗙"],
    "xián qiǎn qiān": ["嗛"],
    lào: ["嗠", "嫪", "橯", "涝", "澇", "耢", "耮", "躼", "軂", "酪"],
    wēng: ["嗡", "翁", "聬", "螉", "鎓", "鶲", "鹟", "𬭩"],
    wà: ["嗢", "腽", "膃", "袜", "襪", "韤"],
    "hēi hāi": ["嗨"],
    hē: ["嗬", "欱", "蠚", "訶", "诃"],
    zi: ["嗭"],
    sǎi: ["嗮"],
    "ǹg ńg ňg": ["嗯"],
    gě: ["嗰", "舸"],
    ná: ["嗱", "拏", "拿", "鎿", "镎"],
    diǎ: ["嗲"],
    "ài ǎi āi": ["嗳"],
    tōng: ["嗵", "樋", "炵", "蓪"],
    "zuī suī": ["嗺"],
    "zhē zhè zhù zhe": ["嗻"],
    mò: [
      "嗼",
      "圽",
      "塻",
      "墨",
      "妺",
      "嫼",
      "寞",
      "帞",
      "昩",
      "末",
      "枺",
      "歿",
      "殁",
      "沫",
      "漠",
      "爅",
      "獏",
      "瘼",
      "皌",
      "眽",
      "眿",
      "瞐",
      "瞙",
      "砞",
      "礳",
      "秣",
      "絈",
      "纆",
      "耱",
      "茉",
      "莈",
      "蓦",
      "蛨",
      "蟔",
      "貃",
      "貊",
      "貘",
      "銆",
      "鏌",
      "镆",
      "陌",
      "靺",
      "驀",
      "魩",
      "默",
      "黙",
      "𬙊"
    ],
    sòu: ["嗽", "瘶"],
    tǎn: [
      "嗿",
      "坦",
      "忐",
      "憳",
      "憻",
      "暺",
      "毯",
      "璮",
      "菼",
      "袒",
      "襢",
      "醓",
      "鉭",
      "钽"
    ],
    "jiào dǎo": ["嘄"],
    "kǎi gě": ["嘅"],
    "shān càn": ["嘇"],
    cáo: ["嘈", "嶆", "曹", "曺", "槽", "漕", "艚", "蓸", "螬", "褿", "鏪", "𥕢"],
    piào: ["嘌", "徱", "蔈", "驃"],
    "lóu lou": ["嘍"],
    gǎ: ["尕", "玍"],
    "gǔ jiǎ": ["嘏"],
    "jiāo xiāo": ["嘐"],
    "xū shī": ["嘘", "噓"],
    pó: ["嘙", "嚩", "婆", "櫇", "皤", "鄱"],
    "dē dēi": ["嘚"],
    "ma má": ["嘛"],
    "lē lei": ["嘞"],
    "gā gá gǎ": ["嘠"],
    sāi: ["嘥", "噻", "毢", "腮", "顋", "鰓"],
    "zuō chuài": ["嘬"],
    "cháo zhāo": ["嘲", "朝", "鼂"],
    zuǐ: ["嘴", "噿", "嶊", "璻"],
    "qiáo qiào": ["嘺", "翹", "谯"],
    "chù xù shòu": ["嘼"],
    "tān chǎn": ["嘽"],
    "dàn tán": ["嘾", "弾", "彈", "惔", "澹"],
    "hēi mò": ["嘿"],
    ě: ["噁", "砨", "頋", "騀", "鵈"],
    "fān bo": ["噃"],
    chuáng: ["噇", "床", "牀"],
    "cù zā hé": ["噈"],
    "tūn kuò": ["噋"],
    "cēng chēng": ["噌"],
    dēng: ["噔", "嬁", "灯", "燈", "璒", "登", "竳", "簦", "艠", "豋"],
    pū: ["噗", "扑", "撲", "攴", "攵", "潽", "炇", "陠"],
    juē: ["噘", "屩", "屫", "撧"],
    lū: ["噜", "嚕", "撸", "擼", "謢"],
    zhān: [
      "噡",
      "岾",
      "惉",
      "旃",
      "旜",
      "枬",
      "栴",
      "毡",
      "氈",
      "氊",
      "沾",
      "瞻",
      "薝",
      "蛅",
      "詀",
      "詹",
      "譫",
      "谵",
      "趈",
      "邅",
      "閚",
      "霑",
      "飦",
      "饘",
      "驙",
      "魙",
      "鱣",
      "鸇",
      "鹯",
      "𫗴"
    ],
    ō: ["噢"],
    "zhòu zhuó": ["噣"],
    "jiào qiào chī": ["噭"],
    yuàn: [
      "噮",
      "妴",
      "怨",
      "愿",
      "掾",
      "瑗",
      "禐",
      "苑",
      "衏",
      "裫",
      "褑",
      "院",
      "願"
    ],
    "ǎi ài āi": ["噯"],
    "yōng yǒng": ["噰", "澭"],
    "jué xué": ["噱"],
    "pēn pèn fèn": ["噴"],
    gá: ["噶", "尜", "釓", "錷", "钆"],
    "xīn hěn hèn": ["噷"],
    dāng: ["噹", "澢", "珰", "璫", "筜", "簹", "艡", "蟷", "裆", "襠"],
    làn: ["嚂", "滥", "濫", "烂", "燗", "爁", "爛", "爤", "瓓", "糷", "钄"],
    tà: [
      "嚃",
      "嚺",
      "崉",
      "挞",
      "搨",
      "撻",
      "榻",
      "橽",
      "毾",
      "涾",
      "澾",
      "濌",
      "禢",
      "粏",
      "誻",
      "譶",
      "蹋",
      "蹹",
      "躂",
      "躢",
      "遝",
      "錔",
      "闒",
      "闥",
      "闼",
      "阘",
      "鞜",
      "鞳"
    ],
    "huō huò ǒ": ["嚄"],
    hāo: ["嚆", "茠", "蒿", "薅"],
    "hè xià": ["嚇"],
    "xiù pì": ["嚊"],
    "zhōu chóu": ["嚋", "盩", "诪"],
    mē: ["嚒"],
    "chā cā": ["嚓"],
    "bó pào bào": ["嚗"],
    "me mèi mò": ["嚜"],
    "xié hái": ["嚡"],
    "áo xiāo": ["嚣"],
    mō: ["嚤", "摸"],
    pín: [
      "嚬",
      "娦",
      "嫔",
      "嬪",
      "玭",
      "矉",
      "薲",
      "蠙",
      "貧",
      "贫",
      "顰",
      "颦",
      "𬞟"
    ],
    mè: ["嚰", "濹"],
    "rǎng rāng": ["嚷"],
    lá: ["嚹", "旯"],
    "jiáo jué jiào": ["嚼"],
    chuò: [
      "嚽",
      "娖",
      "擉",
      "歠",
      "涰",
      "磭",
      "踀",
      "輟",
      "辍",
      "辵",
      "辶",
      "酫",
      "鑡",
      "餟",
      "齪",
      "龊"
    ],
    "huān huàn": ["嚾"],
    "zá cà": ["囃"],
    chài: ["囆", "虿", "蠆", "袃", "訍"],
    "náng nāng": ["囊"],
    "zá zàn cān": ["囋"],
    sū: ["囌", "櫯", "甦", "稣", "穌", "窣", "蘇", "蘓", "酥", "鯂"],
    zèng: ["囎", "熷", "甑", "贈", "赠", "鋥", "锃"],
    "zá niè yàn": ["囐"],
    nāng: ["囔"],
    "luó luō luo": ["囖"],
    "wéi guó": ["囗"],
    huí: [
      "囘",
      "回",
      "囬",
      "廻",
      "廽",
      "恛",
      "洄",
      "痐",
      "茴",
      "蚘",
      "蛔",
      "蛕",
      "蜖",
      "迴",
      "逥",
      "鮰"
    ],
    nín: ["囜", "您", "脌"],
    "jiǎn nān": ["囝"],
    nān: ["囡"],
    tuán: ["团", "団", "團", "慱", "抟", "摶", "檲", "糰", "鏄", "鷒", "鷻"],
    "tún dùn": ["囤", "坉"],
    guó: [
      "囯",
      "囶",
      "囻",
      "国",
      "圀",
      "國",
      "帼",
      "幗",
      "慖",
      "摑",
      "漍",
      "聝",
      "腘",
      "膕",
      "蔮",
      "虢",
      "馘",
      "𬇹"
    ],
    kùn: ["困", "涃", "睏"],
    "wéi tōng": ["囲"],
    qūn: ["囷", "夋", "逡"],
    rì: ["囸", "日", "衵", "鈤", "馹", "驲"],
    tāi: ["囼", "孡", "胎"],
    pǔ: [
      "圃",
      "圑",
      "擈",
      "普",
      "暜",
      "樸",
      "檏",
      "氆",
      "浦",
      "溥",
      "烳",
      "諩",
      "譜",
      "谱",
      "蹼",
      "鐠",
      "镨"
    ],
    "quān juàn juān": ["圈", "圏"],
    "chuí chuán": ["圌"],
    tuǎn: ["圕", "畽", "疃"],
    lüè: ["圙", "掠", "略", "畧", "稤", "鋝", "鋢", "锊", "䂮"],
    "huán yuán": ["圜"],
    luán: [
      "圝",
      "圞",
      "奱",
      "娈",
      "孌",
      "孪",
      "孿",
      "峦",
      "巒",
      "挛",
      "攣",
      "曫",
      "栾",
      "欒",
      "滦",
      "灤",
      "癴",
      "癵",
      "羉",
      "脔",
      "臠",
      "虊",
      "銮",
      "鑾",
      "鵉",
      "鸞",
      "鸾"
    ],
    tǔ: ["土", "圡", "釷", "钍"],
    "xū wéi": ["圩"],
    "dì de": ["地", "嶳"],
    "qiān sú": ["圱"],
    zhèn: [
      "圳",
      "塦",
      "挋",
      "振",
      "朕",
      "栚",
      "甽",
      "眹",
      "紖",
      "絼",
      "纼",
      "誫",
      "賑",
      "赈",
      "鋴",
      "鎭",
      "鎮",
      "镇",
      "阵",
      "陣",
      "震",
      "鴆",
      "鸩"
    ],
    "chǎng cháng": ["场", "場", "塲"],
    "qí yín": ["圻"],
    jiá: [
      "圿",
      "忦",
      "恝",
      "戞",
      "扴",
      "脥",
      "荚",
      "莢",
      "蛱",
      "蛺",
      "裌",
      "跲",
      "郏",
      "郟",
      "鋏",
      "铗",
      "頬",
      "頰",
      "颊",
      "鴶",
      "鵊"
    ],
    "zhǐ zhì": ["坁"],
    bǎn: [
      "坂",
      "岅",
      "昄",
      "板",
      "版",
      "瓪",
      "粄",
      "舨",
      "蝂",
      "鈑",
      "钣",
      "阪",
      "魬"
    ],
    qǐn: ["坅", "寑", "寝", "寢", "昑", "梫", "笉", "螼", "赾", "鋟", "锓"],
    "méi fén": ["坆"],
    "rǒng kēng": ["坈"],
    "fāng fáng": ["坊"],
    "fèn bèn": ["坋"],
    tān: ["坍", "怹", "摊", "擹", "攤", "滩", "灘", "瘫", "癱", "舑", "貪", "贪"],
    "huài pēi pī péi": ["坏"],
    "dì làn": ["坔"],
    tán: [
      "坛",
      "墰",
      "墵",
      "壇",
      "壜",
      "婒",
      "憛",
      "昙",
      "曇",
      "榃",
      "檀",
      "潭",
      "燂",
      "痰",
      "磹",
      "罈",
      "罎",
      "藫",
      "談",
      "譚",
      "譠",
      "谈",
      "谭",
      "貚",
      "郯",
      "醰",
      "錟",
      "顃"
    ],
    bà: ["坝", "垻", "壩", "弝", "欛", "灞", "爸", "矲", "覇", "霸", "鮁", "鲅"],
    fén: [
      "坟",
      "墳",
      "妢",
      "岎",
      "幩",
      "枌",
      "棼",
      "汾",
      "焚",
      "燌",
      "燓",
      "羒",
      "羵",
      "蒶",
      "蕡",
      "蚠",
      "蚡",
      "豮",
      "豶",
      "轒",
      "鐼",
      "隫",
      "馩",
      "魵",
      "黂",
      "鼖",
      "鼢",
      "𣸣"
    ],
    zhuì: [
      "坠",
      "墜",
      "惴",
      "甀",
      "畷",
      "礈",
      "綴",
      "縋",
      "缀",
      "缒",
      "腏",
      "膇",
      "諈",
      "贅",
      "赘",
      "醊",
      "錣",
      "鑆"
    ],
    pō: ["坡", "岥", "泼", "溌", "潑", "釙", "鏺", "钋", "頗", "颇", "䥽"],
    "pǎn bàn": ["坢"],
    kūn: [
      "坤",
      "堃",
      "堒",
      "崐",
      "崑",
      "昆",
      "晜",
      "潉",
      "焜",
      "熴",
      "猑",
      "琨",
      "瑻",
      "菎",
      "蜫",
      "裈",
      "裩",
      "褌",
      "醌",
      "錕",
      "锟",
      "騉",
      "髠",
      "髡",
      "髨",
      "鯤",
      "鲲",
      "鵾",
      "鶤",
      "鹍"
    ],
    diàn: [
      "坫",
      "垫",
      "墊",
      "壂",
      "奠",
      "婝",
      "店",
      "惦",
      "扂",
      "橂",
      "殿",
      "淀",
      "澱",
      "玷",
      "琔",
      "电",
      "癜",
      "簟",
      "蜔",
      "鈿",
      "電",
      "靛",
      "驔"
    ],
    "mù mǔ": ["坶"],
    "kē kě": ["坷", "軻"],
    xuè: ["坹", "岤", "桖", "瀥", "狘", "瞲", "謔", "谑", "趐"],
    "dǐ chí": ["坻", "柢"],
    lā: ["垃", "柆", "菈", "邋"],
    lǒng: ["垄", "垅", "壟", "壠", "拢", "攏", "竉", "陇", "隴", "𬕂"],
    mín: [
      "垊",
      "姄",
      "岷",
      "崏",
      "捪",
      "旻",
      "旼",
      "民",
      "珉",
      "琘",
      "琝",
      "瑉",
      "痻",
      "盿",
      "砇",
      "緍",
      "緡",
      "缗",
      "罠",
      "苠",
      "鈱",
      "錉",
      "鍲",
      "鴖"
    ],
    "dòng tóng": ["垌", "峒", "洞"],
    cí: [
      "垐",
      "嬨",
      "慈",
      "柌",
      "濨",
      "珁",
      "瓷",
      "甆",
      "磁",
      "礠",
      "祠",
      "糍",
      "茨",
      "詞",
      "词",
      "辝",
      "辞",
      "辤",
      "辭",
      "雌",
      "飺",
      "餈",
      "鴜",
      "鶿",
      "鷀",
      "鹚"
    ],
    duī: ["垖", "堆", "塠", "痽", "磓", "鐓", "鐜", "鴭"],
    "duò duǒ": ["垛"],
    "duǒ duò": ["垜", "挆"],
    chá: ["垞", "察", "嵖", "搽", "槎", "檫", "猹", "茬", "茶", "詧", "靫", "𥻗"],
    shǎng: ["垧", "晌", "樉", "賞", "贘", "赏", "鋿", "鏛", "鑜"],
    shǒu: ["垨", "守", "手", "扌", "艏", "首"],
    da: ["垯", "繨", "跶"],
    háng: [
      "垳",
      "斻",
      "杭",
      "筕",
      "絎",
      "绗",
      "航",
      "苀",
      "蚢",
      "裄",
      "貥",
      "迒",
      "頏",
      "颃",
      "魧"
    ],
    "ān ǎn": ["垵"],
    xīng: [
      "垶",
      "惺",
      "星",
      "曐",
      "煋",
      "猩",
      "瑆",
      "皨",
      "篂",
      "腥",
      "興",
      "觪",
      "觲",
      "謃",
      "騂",
      "骍",
      "鮏",
      "鯹"
    ],
    "yuàn huán": ["垸"],
    bāng: [
      "垹",
      "帮",
      "幇",
      "幚",
      "幫",
      "捠",
      "梆",
      "浜",
      "邦",
      "邫",
      "鞤",
      "𠳐"
    ],
    "póu fú": ["垺"],
    cén: ["埁", "岑", "涔"],
    "běng fēng": ["埄"],
    "dì fáng": ["埅"],
    "xiá jiā": ["埉"],
    "mái mán": ["埋"],
    làng: ["埌", "崀", "浪", "蒗", "閬", "㫰"],
    "shān yán": ["埏"],
    "qín jīn": ["埐"],
    "pǔ bù": ["埔"],
    huā: ["埖", "婲", "椛", "硴", "糀", "花", "蒊", "蘤", "誮", "錵"],
    "suì sù": ["埣"],
    "pí pì": ["埤"],
    "qīng zhēng": ["埥", "鲭"],
    "wǎn wān": ["埦"],
    lǔn: ["埨", "稐", "𫭢"],
    "zhēng chéng": ["埩"],
    kōng: ["埪", "崆", "箜", "躻", "錓", "鵼"],
    "cǎi cài": ["埰", "寀", "采"],
    "chù tòu": ["埱"],
    běng: ["埲", "琫", "菶", "鞛"],
    "kǎn xiàn": ["埳"],
    "yì shì": ["埶", "醳"],
    péi: ["培", "毰", "裴", "裵", "賠", "赔", "錇", "锫", "阫", "陪"],
    "sào sǎo": ["埽"],
    "jǐn qīn jìn": ["堇"],
    "péng bèng": ["堋"],
    "qiàn zàn jiàn": ["堑"],
    àn: [
      "堓",
      "屵",
      "岸",
      "按",
      "暗",
      "案",
      "胺",
      "荌",
      "豻",
      "貋",
      "錌",
      "闇",
      "隌",
      "黯"
    ],
    "duò huī": ["堕", "墮"],
    huán: [
      "堚",
      "寏",
      "寰",
      "峘",
      "桓",
      "洹",
      "澴",
      "獂",
      "环",
      "環",
      "糫",
      "繯",
      "缳",
      "羦",
      "荁",
      "萈",
      "萑",
      "豲",
      "鍰",
      "鐶",
      "锾",
      "镮",
      "闤",
      "阛",
      "雈",
      "鬟",
      "鹮",
      "𬘫",
      "𤩽"
    ],
    "bǎo bǔ pù": ["堡"],
    "máo móu wǔ": ["堥"],
    ruán: ["堧", "壖", "撋"],
    "ài è yè": ["堨"],
    gèng: ["堩", "暅"],
    méi: [
      "堳",
      "塺",
      "媒",
      "嵋",
      "徾",
      "攗",
      "枚",
      "栂",
      "梅",
      "楣",
      "楳",
      "槑",
      "湄",
      "湈",
      "煤",
      "猸",
      "玫",
      "珻",
      "瑂",
      "眉",
      "睂",
      "禖",
      "脄",
      "脢",
      "腜",
      "苺",
      "莓",
      "葿",
      "郿",
      "酶",
      "鎇",
      "镅",
      "霉",
      "鶥",
      "鹛",
      "黴"
    ],
    dǔ: ["堵", "琽", "睹", "笃", "篤", "覩", "賭", "赌"],
    féng: ["堸", "綘", "艂", "逢"],
    hèng: ["堼"],
    chūn: [
      "堾",
      "媋",
      "旾",
      "春",
      "暙",
      "杶",
      "椿",
      "槆",
      "橁",
      "櫄",
      "瑃",
      "箺",
      "萅",
      "蝽",
      "輴",
      "鰆",
      "鶞",
      "䲠"
    ],
    jiǎng: [
      "塂",
      "奖",
      "奨",
      "奬",
      "桨",
      "槳",
      "獎",
      "耩",
      "膙",
      "蒋",
      "蔣",
      "講",
      "讲",
      "顜"
    ],
    huāng: ["塃", "巟", "慌", "肓", "荒", "衁"],
    duàn: [
      "塅",
      "断",
      "斷",
      "椴",
      "段",
      "毈",
      "煅",
      "瑖",
      "碫",
      "簖",
      "籪",
      "緞",
      "缎",
      "腶",
      "葮",
      "躖",
      "鍛",
      "锻"
    ],
    tǎ: ["塔", "墖", "獭", "獺", "鮙", "鰨", "鳎"],
    wěng: ["塕", "奣", "嵡", "攚", "暡", "瞈", "蓊"],
    "sāi sài sè": ["塞"],
    zàng: ["塟", "弉", "臓", "臟", "葬", "蔵", "銺"],
    tián: [
      "塡",
      "屇",
      "恬",
      "沺",
      "湉",
      "璳",
      "甛",
      "甜",
      "田",
      "畋",
      "畑",
      "碵",
      "磌",
      "胋",
      "闐",
      "阗",
      "鴫",
      "鷆",
      "鷏"
    ],
    zhèng: [
      "塣",
      "幁",
      "政",
      "証",
      "諍",
      "證",
      "证",
      "诤",
      "郑",
      "鄭",
      "靕",
      "鴊"
    ],
    "tián zhèn": ["填"],
    wēn: [
      "塭",
      "昷",
      "榲",
      "殟",
      "温",
      "溫",
      "瑥",
      "瘟",
      "蕰",
      "豱",
      "輼",
      "轀",
      "辒",
      "鎾",
      "饂",
      "鰛",
      "鰮",
      "鳁"
    ],
    liù: ["塯", "廇", "磟", "翏", "雡", "霤", "餾", "鬸", "鷚", "鹨"],
    hǎi: ["塰", "海", "烸", "酼", "醢"],
    lǎng: ["塱", "朖", "朗", "朤", "烺", "蓢", "㮾"],
    bèng: ["塴", "揼", "泵", "甏", "綳", "蹦", "迸", "逬", "鏰", "镚"],
    chén: [
      "塵",
      "宸",
      "尘",
      "忱",
      "敐",
      "敶",
      "晨",
      "曟",
      "栕",
      "樄",
      "沉",
      "煁",
      "瘎",
      "臣",
      "茞",
      "莀",
      "莐",
      "蔯",
      "薼",
      "螴",
      "訦",
      "諶",
      "軙",
      "辰",
      "迧",
      "鈂",
      "陈",
      "陳",
      "霃",
      "鷐",
      "麎"
    ],
    "ōu qiū": ["塸"],
    "qiàn jiàn": ["塹"],
    "zhuān tuán": ["塼"],
    shuǎng: ["塽", "慡", "漺", "爽", "縔", "鏯"],
    shú: ["塾", "婌", "孰", "璹", "秫", "贖", "赎"],
    lǒu: ["塿", "嵝", "嶁", "甊", "篓", "簍"],
    chí: [
      "墀",
      "弛",
      "持",
      "池",
      "漦",
      "竾",
      "筂",
      "箎",
      "篪",
      "茌",
      "荎",
      "蚳",
      "謘",
      "貾",
      "赿",
      "踟",
      "迟",
      "迡",
      "遅",
      "遟",
      "遲",
      "鍉",
      "馳",
      "驰"
    ],
    shù: [
      "墅",
      "庶",
      "庻",
      "怷",
      "恕",
      "戍",
      "束",
      "树",
      "樹",
      "沭",
      "漱",
      "潄",
      "濖",
      "竖",
      "竪",
      "絉",
      "腧",
      "荗",
      "蒁",
      "虪",
      "術",
      "裋",
      "豎",
      "述",
      "鉥",
      "錰",
      "鏣",
      "霔",
      "鶐",
      "𬬸"
    ],
    "dì zhì": ["墆", "疐"],
    kàn: ["墈", "崁", "瞰", "矙", "磡", "衎", "鬫"],
    chěn: ["墋", "夦", "硶", "碜", "磣", "贂", "趻", "踸", "鍖"],
    "zhǐ zhuó": ["墌"],
    qiǎng: ["墏", "繈", "繦", "羥", "襁"],
    zēng: ["増", "增", "憎", "璔", "矰", "磳", "罾", "譄", "鄫", "鱛", "䎖"],
    qiáng: [
      "墙",
      "墻",
      "嫱",
      "嬙",
      "樯",
      "檣",
      "漒",
      "牆",
      "艢",
      "蔃",
      "蔷",
      "蘠"
    ],
    "kuài tuí": ["墤"],
    "tuǎn dǒng": ["墥"],
    "qiáo què": ["墧"],
    "zūn dūn": ["墫"],
    "qiāo áo": ["墽"],
    "yì tú": ["墿"],
    "xué bó jué": ["壆"],
    lǎn: [
      "壈",
      "嬾",
      "孄",
      "孏",
      "懒",
      "懶",
      "揽",
      "擥",
      "攬",
      "榄",
      "欖",
      "浨",
      "漤",
      "灠",
      "纜",
      "缆",
      "罱",
      "覧",
      "覽",
      "览",
      "醂",
      "顲"
    ],
    huài: ["壊", "壞", "蘾"],
    rǎng: ["壌", "壤", "攘", "爙"],
    "làn xiàn": ["壏"],
    dǎo: [
      "壔",
      "导",
      "導",
      "岛",
      "島",
      "嶋",
      "嶌",
      "嶹",
      "捣",
      "搗",
      "擣",
      "槝",
      "祷",
      "禂",
      "禱",
      "蹈",
      "陦",
      "隝",
      "隯"
    ],
    ruǐ: ["壡", "桵", "橤", "繠", "蕊", "蕋", "蘂", "蘃"],
    san: ["壭"],
    zhuàng: ["壮", "壯", "壵", "撞", "焋", "状", "狀"],
    "ké qiào": ["壳", "殼"],
    kǔn: [
      "壸",
      "壼",
      "悃",
      "捆",
      "梱",
      "硱",
      "祵",
      "稇",
      "稛",
      "綑",
      "裍",
      "閫",
      "閸",
      "阃"
    ],
    mǎng: ["壾", "漭", "茻", "莽", "莾", "蠎"],
    cún: ["壿", "存"],
    "zhǐ zhōng": ["夂"],
    "gǔ yíng": ["夃"],
    "jiàng xiáng": ["夅", "降"],
    "páng féng fēng": ["夆"],
    zhāi: ["夈", "捚", "摘", "斋", "斎", "榸", "粂", "齋"],
    "xuàn xiòng": ["夐"],
    wài: ["外", "顡"],
    "wǎn yuàn wān yuān": ["夗"],
    "mǎo wǎn": ["夘"],
    mèng: ["夢", "夣", "孟", "梦", "癦", "霥"],
    "dà dài": ["大"],
    "fū fú": ["夫", "姇", "枎", "粰"],
    guài: ["夬", "怪", "恠"],
    yāng: [
      "央",
      "姎",
      "抰",
      "殃",
      "泱",
      "秧",
      "胦",
      "鉠",
      "鍈",
      "雵",
      "鴦",
      "鸯"
    ],
    "hāng bèn": ["夯"],
    gǎo: [
      "夰",
      "搞",
      "杲",
      "槀",
      "槁",
      "檺",
      "稁",
      "稾",
      "稿",
      "縞",
      "缟",
      "菒",
      "藁",
      "藳"
    ],
    "tāo běn": ["夲"],
    "tóu tou": ["头"],
    "yǎn tāo": ["夵"],
    "kuā kuà": ["夸", "誇"],
    "jiá jiā gā xiá": ["夹"],
    huà: [
      "夻",
      "婳",
      "嫿",
      "嬅",
      "崋",
      "摦",
      "杹",
      "枠",
      "桦",
      "槬",
      "樺",
      "澅",
      "画",
      "畫",
      "畵",
      "繣",
      "舙",
      "話",
      "諙",
      "譮",
      "话",
      "黊"
    ],
    "jiā jiá gā xiá": ["夾"],
    ēn: ["奀", "恩", "蒽"],
    "dī tì": ["奃"],
    "yǎn yān": ["奄", "渰"],
    pào: ["奅", "疱", "皰", "砲", "礟", "礮", "靤", "麭"],
    nài: ["奈", "柰", "渿", "耐", "萘", "褦", "錼", "鼐"],
    "quān juàn": ["奍", "弮", "棬"],
    zòu: ["奏", "揍"],
    "qì qiè xiè": ["契"],
    kāi: ["奒", "开", "揩", "鐦", "锎", "開"],
    "bēn bèn": ["奔", "泍"],
    tào: ["套"],
    "zàng zhuǎng": ["奘"],
    běn: ["奙", "本", "楍", "畚", "翉", "苯"],
    "xùn zhuì": ["奞"],
    shē: ["奢", "檨", "猞", "畭", "畲", "賒", "賖", "赊", "輋", "𪨶"],
    "hǎ pò tǎi": ["奤"],
    "ào yù": ["奥", "奧", "澚"],
    yūn: ["奫", "氲", "氳", "蒀", "蒕", "蝹", "贇", "赟", "𫖳"],
    "duǒ chě": ["奲"],
    "nǚ rǔ": ["女"],
    nú: ["奴", "孥", "笯", "駑", "驽"],
    "dīng dǐng tiǎn": ["奵"],
    "tā jiě": ["她"],
    nuán: ["奻"],
    "hǎo hào": ["好"],
    fàn: [
      "奿",
      "嬎",
      "梵",
      "汎",
      "泛",
      "滼",
      "瀪",
      "犯",
      "畈",
      "盕",
      "笵",
      "範",
      "范",
      "訉",
      "販",
      "贩",
      "軬",
      "輽",
      "飯",
      "飰",
      "饭"
    ],
    shuò: ["妁", "搠", "朔", "槊", "烁", "爍", "矟", "蒴", "鎙", "鑠", "铄"],
    "fēi pèi": ["妃"],
    wàng: ["妄", "忘", "旺", "望", "朢"],
    zhuāng: [
      "妆",
      "妝",
      "娤",
      "庄",
      "庒",
      "桩",
      "梉",
      "樁",
      "粧",
      "糚",
      "荘",
      "莊",
      "装",
      "裝"
    ],
    mā: ["妈", "媽"],
    "fū yōu": ["妋"],
    "hài jiè": ["妎"],
    dù: [
      "妒",
      "妬",
      "杜",
      "殬",
      "渡",
      "秺",
      "芏",
      "荰",
      "螙",
      "蠧",
      "蠹",
      "鍍",
      "镀",
      "靯",
      "𬭊"
    ],
    miào: ["妙", "庙", "庿", "廟", "玅", "竗"],
    "fǒu pēi pī": ["妚"],
    "yuè jué": ["妜"],
    niū: ["妞"],
    "nà nàn": ["妠"],
    tuǒ: ["妥", "嫷", "庹", "椭", "楕", "橢", "鬌", "鰖", "鵎"],
    "wàn yuán": ["妧"],
    fáng: ["妨", "房", "肪", "防", "魴", "鲂"],
    nī: ["妮"],
    zhóu: ["妯", "碡"],
    zhāo: ["妱", "巶", "招", "昭", "釗", "鉊", "鍣", "钊", "駋", "𬬿"],
    "nǎi nǐ": ["妳"],
    tǒu: ["妵", "敨", "紏", "蘣", "黈"],
    "xián xuán xù": ["妶"],
    "zhí yì": ["妷", "秇"],
    ē: ["妸", "妿", "婀", "屙"],
    mèi: [
      "妹",
      "媚",
      "寐",
      "抺",
      "旀",
      "昧",
      "沬",
      "煝",
      "痗",
      "眛",
      "睸",
      "祙",
      "篃",
      "蝞",
      "袂",
      "跊",
      "鬽",
      "魅"
    ],
    "qī qì": ["妻"],
    "xū xǔ": ["姁", "稰"],
    "shān shàn": ["姍", "姗", "苫", "釤", "钐"],
    mán: ["姏", "慲", "樠", "蛮", "蠻", "謾", "饅", "馒", "鬗", "鬘", "鰻", "鳗"],
    jiě: ["姐", "媎", "檞", "毑", "飷"],
    "wěi wēi": ["委"],
    pīn: ["姘", "拼", "礗", "穦", "馪", "驞"],
    "huá huó": ["姡"],
    "jiāo xiáo": ["姣"],
    "gòu dù": ["姤"],
    "lǎo mǔ": ["姥"],
    "nián niàn": ["姩"],
    zhěn: [
      "姫",
      "屒",
      "弫",
      "抮",
      "昣",
      "枕",
      "畛",
      "疹",
      "眕",
      "稹",
      "縝",
      "縥",
      "缜",
      "聄",
      "萙",
      "袗",
      "裖",
      "覙",
      "診",
      "诊",
      "軫",
      "轸",
      "辴",
      "駗",
      "鬒"
    ],
    héng: [
      "姮",
      "恆",
      "恒",
      "烆",
      "珩",
      "胻",
      "蘅",
      "衡",
      "鑅",
      "鴴",
      "鵆",
      "鸻"
    ],
    "jūn xún": ["姰"],
    "kuā hù": ["姱"],
    "è yà": ["姶"],
    "xiān shēn": ["姺"],
    wá: ["娃"],
    "ráo rǎo": ["娆", "嬈"],
    "shào shāo": ["娋"],
    xiē: ["娎", "揳", "楔", "歇", "蝎", "蠍"],
    "wǔ méi mǔ": ["娒"],
    "chuò lài": ["娕"],
    niáng: ["娘", "嬢", "孃"],
    "nà nuó": ["娜", "𦰡"],
    "pōu bǐ": ["娝"],
    "něi suī": ["娞"],
    tuì: ["娧", "煺", "蛻", "蜕", "退", "駾"],
    mǎn: ["娨", "屘", "満", "满", "滿", "螨", "蟎", "襔", "鏋"],
    "wú wù yú": ["娪"],
    "xī āi": ["娭"],
    "zhuì shuì": ["娷"],
    "dōng dòng": ["娻"],
    "ǎi ái è": ["娾"],
    "ē ě": ["娿"],
    mián: [
      "婂",
      "嬵",
      "宀",
      "杣",
      "棉",
      "檰",
      "櫋",
      "眠",
      "矈",
      "矊",
      "矏",
      "綿",
      "緜",
      "绵",
      "芇",
      "蝒"
    ],
    "pǒu péi bù": ["婄"],
    biǎo: ["婊", "脿", "表", "裱", "褾", "諘", "錶"],
    "fù fàn": ["婏"],
    wǒ: ["婐", "婑", "我"],
    "ní nǐ": ["婗", "棿"],
    "quán juàn": ["婘", "惓"],
    hūn: [
      "婚",
      "昏",
      "昬",
      "棔",
      "涽",
      "睧",
      "睯",
      "碈",
      "荤",
      "葷",
      "蔒",
      "轋",
      "閽",
      "阍"
    ],
    "qiān jǐn": ["婜"],
    "wān wà": ["婠"],
    "lái lài": ["婡", "徕", "徠"],
    "zhōu chōu": ["婤"],
    "chuò nào": ["婥"],
    "nüè àn": ["婩"],
    "hùn kūn": ["婫"],
    "dàng yáng": ["婸"],
    nàn: ["婻"],
    "ruò chuò": ["婼"],
    jiǎ: ["婽", "岬", "斚", "斝", "榎", "槚", "檟", "玾", "甲", "胛", "鉀", "钾"],
    "tōu yú": ["婾", "媮"],
    "yù yú": ["媀"],
    "wéi wěi": ["媁"],
    "dì tí": ["媂", "珶", "苐"],
    róu: [
      "媃",
      "揉",
      "柔",
      "渘",
      "煣",
      "瑈",
      "瓇",
      "禸",
      "粈",
      "糅",
      "脜",
      "腬",
      "葇",
      "蝚",
      "蹂",
      "輮",
      "鍒",
      "鞣",
      "騥",
      "鰇",
      "鶔",
      "𫐓"
    ],
    "ruǎn nèn": ["媆"],
    miáo: ["媌", "嫹", "描", "瞄", "苗", "鶓", "鹋"],
    "yí pèi": ["媐"],
    "mián miǎn": ["媔"],
    "tí shì": ["媞", "惿"],
    "duò tuó": ["媠", "沲"],
    ǎo: ["媪", "媼", "艹", "芺", "袄", "襖", "镺"],
    "chú zòu": ["媰"],
    yìng: ["媵", "映", "暎", "硬", "膡", "鱦"],
    "qín shēn": ["嫀"],
    jià: ["嫁", "幏", "架", "榢", "稼", "駕", "驾"],
    sǎo: ["嫂"],
    "zhēn zhěn": ["嫃"],
    "jiē suǒ": ["嫅"],
    "míng mǐng": ["嫇"],
    niǎo: ["嫋", "嬝", "嬲", "茑", "蔦", "袅", "裊", "褭", "鸟"],
    tāo: [
      "嫍",
      "幍",
      "弢",
      "慆",
      "掏",
      "搯",
      "槄",
      "涛",
      "滔",
      "濤",
      "瑫",
      "絛",
      "縚",
      "縧",
      "绦",
      "詜",
      "謟",
      "轁",
      "鞱",
      "韜",
      "韬",
      "飸",
      "饕"
    ],
    biáo: ["嫑"],
    "piáo piāo": ["嫖", "薸"],
    xuán: [
      "嫙",
      "悬",
      "懸",
      "暶",
      "檈",
      "漩",
      "玄",
      "璇",
      "璿",
      "痃",
      "蜁",
      "𫠊"
    ],
    "màn mān": ["嫚"],
    kāng: [
      "嫝",
      "嵻",
      "康",
      "慷",
      "槺",
      "漮",
      "砊",
      "穅",
      "糠",
      "躿",
      "鏮",
      "鱇",
      "𡐓",
      "𩾌"
    ],
    "hān nǎn": ["嫨"],
    nèn: ["嫩", "嫰"],
    zhē: ["嫬", "遮"],
    "mā má": ["嫲"],
    piè: ["嫳"],
    zhǎn: [
      "嫸",
      "展",
      "搌",
      "斩",
      "斬",
      "琖",
      "盏",
      "盞",
      "輾",
      "醆",
      "颭",
      "飐"
    ],
    "xiān yǎn jìn": ["嬐"],
    liǎn: [
      "嬚",
      "敛",
      "斂",
      "琏",
      "璉",
      "羷",
      "脸",
      "臉",
      "蔹",
      "蘝",
      "蘞",
      "裣",
      "襝",
      "鄻"
    ],
    "qióng huán xuān": ["嬛"],
    dǒng: ["嬞", "懂", "箽", "董", "蕫", "諌"],
    cān: ["嬠", "湌", "爘", "飡", "餐", "驂", "骖"],
    tiǎo: ["嬥", "宨", "晀", "朓", "窱", "脁"],
    bí: ["嬶", "荸", "鼻"],
    liǔ: [
      "嬼",
      "柳",
      "栁",
      "桞",
      "桺",
      "橮",
      "熮",
      "珋",
      "綹",
      "绺",
      "罶",
      "羀",
      "鋶",
      "锍"
    ],
    "qiān xiān": ["孅", "欦"],
    "xié huī": ["孈"],
    "huān quán": ["孉"],
    "lí lì": ["孋", "麗"],
    "zhú chuò": ["孎"],
    kǒng: ["孔", "恐"],
    "mā zī": ["孖"],
    "sūn xùn": ["孙", "孫"],
    "bèi bó": ["孛", "誖"],
    "yòu niū": ["孧"],
    zhuǎn: ["孨", "竱", "轉"],
    hái: ["孩", "骸"],
    nāo: ["孬"],
    "chán càn": ["孱"],
    bò: ["孹", "檗", "蘗", "譒"],
    nái: ["孻", "腉"],
    "níng nìng": ["宁", "寍", "寗", "寜", "寧", "甯"],
    zhái: ["宅"],
    "tū jiā": ["宊"],
    sòng: ["宋", "訟", "誦", "讼", "诵", "送", "鎹", "頌", "颂", "餸"],
    ròu: ["宍", "肉", "譳"],
    zhūn: ["宒", "窀", "衠", "諄", "谆", "迍"],
    "mì fú": ["宓"],
    "dàng tàn": ["宕"],
    "wǎn yuān": ["宛"],
    chǒng: ["宠", "寵"],
    qún: ["宭", "峮", "帬", "羣", "群", "裙", "裠"],
    zǎi: ["宰", "崽"],
    "bǎo shí": ["宲"],
    "jiā jia jie": ["家"],
    "huāng huǎng": ["宺"],
    kuān: ["宽", "寛", "寬", "臗", "鑧", "髋", "髖"],
    "sù xiǔ xiù": ["宿"],
    "jié zǎn": ["寁"],
    "bìng bǐng": ["寎"],
    "jìn qǐn": ["寖"],
    "lóu jù": ["寠"],
    "xiě xiè": ["寫"],
    "qīn qìn": ["寴"],
    cùn: ["寸", "籿"],
    duì: [
      "对",
      "対",
      "對",
      "怼",
      "憝",
      "懟",
      "濧",
      "瀩",
      "碓",
      "祋",
      "綐",
      "薱",
      "譈",
      "譵",
      "轛",
      "队",
      "陮"
    ],
    "lüè luó": ["寽"],
    "shè yè yì": ["射"],
    "jiāng jiàng qiāng": ["将"],
    "jiāng jiàng": ["將", "浆", "漿", "畺"],
    zūn: ["尊", "嶟", "樽", "罇", "遵", "鐏", "鱒", "鳟", "鶎", "鷷", "𨱔"],
    "shù zhù": ["尌", "澍"],
    xiǎo: ["小", "晓", "暁", "曉", "皛", "皢", "筱", "筿", "篠", "謏", "𫍲"],
    "jié jí": ["尐", "诘", "鞊"],
    "shǎo shào": ["少"],
    ěr: [
      "尒",
      "尓",
      "尔",
      "栮",
      "毦",
      "洱",
      "爾",
      "珥",
      "耳",
      "薾",
      "衈",
      "趰",
      "迩",
      "邇",
      "鉺",
      "铒",
      "餌",
      "饵",
      "駬"
    ],
    "wāng yóu": ["尢"],
    wāng: ["尣", "尩", "尪", "尫", "汪"],
    liào: ["尥", "尦", "廖", "撂", "料", "炓", "窷", "鐐", "镣", "𪤗"],
    "méng máng lóng páng": ["尨"],
    gà: ["尬", "魀"],
    "kuì kuǐ": ["尯"],
    tuí: ["尵", "弚", "穨", "蘈", "蹪", "隤", "頹", "頺", "頽", "颓", "魋", "𬯎"],
    yǐn: [
      "尹",
      "嶾",
      "引",
      "朄",
      "檃",
      "檼",
      "櫽",
      "淾",
      "濥",
      "瘾",
      "癮",
      "粌",
      "蘟",
      "蚓",
      "螾",
      "讔",
      "赺",
      "趛",
      "輑",
      "鈏",
      "靷"
    ],
    "chǐ chě": ["尺"],
    kāo: ["尻", "髛"],
    "jìn jǐn": ["尽"],
    "wěi yǐ": ["尾"],
    "niào suī": ["尿"],
    céng: ["层", "層", "嶒", "驓"],
    diǎo: ["屌"],
    "píng bǐng bīng": ["屏"],
    lòu: ["屚", "漏", "瘘", "瘺", "瘻", "鏤", "镂", "陋"],
    "shǔ zhǔ": ["属", "屬"],
    "xiè tì": ["屟"],
    "chè cǎo": ["屮"],
    "tún zhūn": ["屯"],
    "nì jǐ": ["屰"],
    "hóng lóng": ["屸"],
    "qǐ kǎi": ["岂", "豈"],
    áng: ["岇", "昂", "昻"],
    "gǎng gāng": ["岗", "崗"],
    kě: ["岢", "敤", "渇", "渴", "炣"],
    gǒu: ["岣", "狗", "玽", "笱", "耇", "耈", "耉", "苟", "豿"],
    tiáo: [
      "岧",
      "岹",
      "樤",
      "祒",
      "笤",
      "芀",
      "萔",
      "蓚",
      "蓨",
      "蜩",
      "迢",
      "鋚",
      "鎥",
      "鞗",
      "髫",
      "鯈",
      "鰷",
      "鲦",
      "齠",
      "龆"
    ],
    "qū jū": ["岨"],
    lǐng: ["岭", "嶺", "領", "领"],
    pò: ["岶", "敀", "洦", "湐", "烞", "珀", "破", "砶", "粕", "蒪", "魄"],
    "bā kè": ["峇"],
    luò: [
      "峈",
      "摞",
      "洛",
      "洜",
      "犖",
      "珞",
      "笿",
      "纙",
      "荦",
      "詻",
      "雒",
      "駱",
      "骆",
      "鵅"
    ],
    "fù niè": ["峊"],
    ěn: ["峎"],
    "zhì shì": ["峙", "崻"],
    qiǎ: ["峠", "跒", "酠", "鞐"],
    "qiáo jiào": ["峤", "癄"],
    "xié yé": ["峫"],
    bū: ["峬", "庯", "晡", "誧", "逋", "鈽", "錻", "钸", "餔", "鵏"],
    chóng: ["崇", "崈", "爞", "虫", "蝩", "蟲", "褈", "隀"],
    "zú cuì": ["崒", "椊"],
    "líng léng": ["崚"],
    "dòng dōng": ["崠"],
    xiáo: ["崤", "洨", "淆", "訤", "誵"],
    "pí bǐ": ["崥", "芘"],
    "zhǎn chán": ["崭", "嶃", "嶄"],
    "wǎi wēi": ["崴"],
    "yáng dàng": ["崵"],
    "shì dié": ["崼"],
    yào: [
      "崾",
      "曜",
      "熎",
      "燿",
      "矅",
      "穾",
      "窔",
      "筄",
      "耀",
      "艞",
      "药",
      "葯",
      "薬",
      "藥",
      "袎",
      "覞",
      "詏",
      "讑",
      "靿",
      "鷂",
      "鹞",
      "鼼"
    ],
    "kān zhàn": ["嵁"],
    "hán dǎng": ["嵅"],
    "qiàn kàn": ["嵌"],
    "wù máo": ["嵍"],
    "kě jié": ["嵑", "嶱"],
    "wēi wěi": ["嵔"],
    kē: [
      "嵙",
      "柯",
      "棵",
      "榼",
      "樖",
      "牁",
      "牱",
      "犐",
      "珂",
      "疴",
      "瞌",
      "磕",
      "礚",
      "科",
      "稞",
      "窠",
      "萪",
      "薖",
      "蚵",
      "蝌",
      "趷",
      "轲",
      "醘",
      "鈳",
      "钶",
      "頦",
      "顆",
      "颗",
      "髁"
    ],
    "dàng táng": ["嵣"],
    "róng yíng": ["嵤", "爃"],
    "ái kǎi": ["嵦"],
    "kāo qiāo": ["嵪"],
    cuó: ["嵯", "嵳", "痤", "矬", "蒫", "蔖", "虘", "鹺", "鹾"],
    "qiǎn qīn": ["嵰"],
    "dì dié": ["嵽"],
    cēn: ["嵾"],
    dǐng: ["嵿", "艼", "薡", "鐤", "頂", "顶", "鼎", "鼑"],
    "áo ào": ["嶅"],
    "pǐ pèi": ["嶏"],
    "jiào qiáo": ["嶠", "潐"],
    "jué guì": ["嶡", "鳜"],
    "zhān shàn": ["嶦", "鳣"],
    "xiè jiè": ["嶰"],
    "guī xī juàn": ["嶲"],
    rū: ["嶿"],
    "lì liè": ["巁", "棙", "爄", "綟"],
    "xī guī juàn": ["巂"],
    "yíng hōng": ["巆"],
    yǐng: [
      "巊",
      "廮",
      "影",
      "摬",
      "梬",
      "潁",
      "瘿",
      "癭",
      "矨",
      "穎",
      "郢",
      "鐛",
      "頴",
      "颍",
      "颕",
      "颖"
    ],
    chǎo: ["巐", "炒", "煼", "眧", "麨"],
    cuán: ["巑", "櫕", "欑"],
    chuān: ["巛", "川", "氚", "瑏", "穿"],
    "jīng xíng": ["巠"],
    cháo: [
      "巢",
      "巣",
      "晁",
      "漅",
      "潮",
      "牊",
      "窲",
      "罺",
      "謿",
      "轈",
      "鄛",
      "鼌"
    ],
    qiǎo: ["巧", "愀", "髜"],
    gǒng: ["巩", "廾", "拱", "拲", "栱", "汞", "珙", "輁", "鞏"],
    "chà chā chāi cī": ["差"],
    "xiàng hàng": ["巷"],
    shuài: ["帅", "帥", "蟀"],
    pà: ["帊", "帕", "怕", "袙"],
    "tǎng nú": ["帑"],
    "mò wà": ["帓"],
    "tiē tiě tiè": ["帖"],
    zhǒu: ["帚", "晭", "疛", "睭", "箒", "肘", "菷", "鯞"],
    "juǎn juàn": ["帣"],
    shuì: ["帨", "涗", "涚", "睡", "稅", "税", "裞"],
    "chóu dào": ["帱", "幬"],
    "jiǎn jiān sàn": ["帴"],
    "shà qiè": ["帹"],
    "qí jì": ["帺", "荠"],
    "shān qiāo shēn": ["幓"],
    "zhuàng chuáng": ["幢"],
    "chān chàn": ["幨"],
    miè: [
      "幭",
      "懱",
      "搣",
      "滅",
      "灭",
      "烕",
      "礣",
      "篾",
      "蔑",
      "薎",
      "蠛",
      "衊",
      "鑖",
      "鱴",
      "鴓"
    ],
    "gān gàn": ["干"],
    "bìng bīng": ["并", "幷"],
    "jī jǐ": ["幾"],
    "guǎng ān": ["广"],
    guǎng: ["広", "廣", "犷", "獷"],
    me: ["庅"],
    "dùn tún": ["庉"],
    "bài tīng": ["庍"],
    "yìng yīng": ["应"],
    "dǐ de": ["底"],
    "dù duó": ["度"],
    "máng méng páng": ["庬"],
    "bìng píng": ["庰"],
    chěng: ["庱", "悜", "睈", "逞", "騁", "骋"],
    "jī cuò": ["庴"],
    qǐng: ["庼", "廎", "檾", "漀", "苘", "請", "謦", "请", "頃", "顷"],
    "guī wěi huì": ["廆"],
    "jǐn qín": ["廑"],
    kuò: [
      "廓",
      "扩",
      "拡",
      "擴",
      "濶",
      "筈",
      "萿",
      "葀",
      "蛞",
      "闊",
      "阔",
      "霩",
      "鞟",
      "鞹",
      "韕",
      "頢",
      "鬠"
    ],
    "qiáng sè": ["廧", "薔"],
    "yǐn yìn": ["廴", "隐", "隠", "隱", "飮", "飲", "饮"],
    "pò pǎi": ["廹", "迫"],
    "nòng lòng": ["弄"],
    "dì tì tuí": ["弟"],
    "jué zhāng": ["弡"],
    "mí mǐ": ["弥", "彌", "靡"],
    chāo: ["弨", "怊", "抄", "欩", "訬", "超", "鈔", "钞"],
    yi: ["弬"],
    shāo: [
      "弰",
      "旓",
      "烧",
      "焼",
      "燒",
      "筲",
      "艄",
      "萷",
      "蕱",
      "輎",
      "髾",
      "鮹"
    ],
    "xuān yuān": ["弲"],
    "qiáng qiǎng jiàng": ["強", "强"],
    "tán dàn": ["弹", "醈"],
    biè: ["彆"],
    "qiáng jiàng qiǎng": ["彊"],
    "jì xuě": ["彐"],
    tuàn: ["彖", "褖"],
    yuē: ["彟", "曰", "曱", "矱"],
    "shān xiǎn": ["彡"],
    wén: [
      "彣",
      "文",
      "炆",
      "珳",
      "瘒",
      "繧",
      "聞",
      "芠",
      "蚉",
      "蚊",
      "螡",
      "蟁",
      "閺",
      "閿",
      "闅",
      "闦",
      "闻",
      "阌",
      "雯",
      "馼",
      "駇",
      "魰",
      "鳼",
      "鴍",
      "鼤",
      "𫘜"
    ],
    "péng bāng": ["彭"],
    "piāo piào": ["彯"],
    "zhuó bó": ["彴"],
    "tuǒ yí": ["彵"],
    "páng fǎng": ["彷"],
    wǎng: [
      "彺",
      "往",
      "徃",
      "惘",
      "枉",
      "棢",
      "網",
      "网",
      "罒",
      "罓",
      "罔",
      "罖",
      "菵",
      "蛧",
      "蝄",
      "誷",
      "輞",
      "辋",
      "魍"
    ],
    cú: ["徂", "殂"],
    "dài dāi": ["待"],
    huái: ["徊", "怀", "懐", "懷", "槐", "淮", "耲", "蘹", "褢", "褱", "踝"],
    "wā wàng jiā": ["徍"],
    "chěng zhèng": ["徎"],
    "dé děi de": ["得"],
    "cóng zòng": ["從"],
    "shì tǐ": ["徥"],
    "tí chí": ["徲", "鶗", "鶙"],
    dé: ["徳", "德", "恴", "悳", "惪", "淂", "鍀", "锝"],
    "zhǐ zhēng": ["徴", "徵"],
    bié: ["徶", "癿", "莂", "蛂", "襒", "蹩"],
    "chōng zhǒng": ["徸"],
    "jiǎo jiào": ["徼", "笅", "筊"],
    "lòng lǒng": ["徿"],
    "qú jù": ["忂", "渠", "瞿", "螶"],
    "dìng tìng": ["忊"],
    gǎi: ["忋", "改"],
    rěn: ["忍", "栠", "栣", "秹", "稔", "綛", "荏", "荵", "躵"],
    chàn: ["忏", "懴", "懺", "硟", "羼", "韂", "顫"],
    tè: ["忑", "慝", "特", "蟘", "鋱", "铽"],
    "tè tēi tuī": ["忒"],
    "gān hàn": ["忓", "攼"],
    "yì qì": ["忔"],
    "tài shì": ["忕"],
    "xī liě": ["忚"],
    "yīng yìng": ["応", "應", "譍"],
    "mǐn wěn mín": ["忞", "忟"],
    "sōng zhōng": ["忪"],
    "yù shū": ["忬", "悆"],
    "qí shì": ["忯", "耆"],
    "tún zhūn dùn": ["忳"],
    "qián qín": ["忴", "扲"],
    hún: ["忶", "浑", "渾", "餛", "馄", "魂", "鼲"],
    niǔ: ["忸", "扭", "炄", "狃", "紐", "纽", "莥", "鈕", "钮", "靵"],
    "kuáng wǎng": ["忹"],
    "kāng hàng": ["忼"],
    "kài xì": ["忾", "愾"],
    òu: ["怄", "慪"],
    "bǎo bào": ["怉"],
    "mín mén": ["怋"],
    "zuò zhà": ["怍"],
    zěn: ["怎"],
    yàng: ["怏", "恙", "样", "様", "樣", "漾", "羕", "詇"],
    "kòu jù": ["怐"],
    "náo niú": ["怓"],
    "zhēng zhèng": ["怔", "掙", "钲", "铮"],
    "tiē zhān": ["怗"],
    "hù gù": ["怘"],
    "cū jù zū": ["怚"],
    "sī sāi": ["思"],
    "yóu chóu": ["怞"],
    "tū dié": ["怢"],
    "yōu yào": ["怮"],
    xuàn: [
      "怰",
      "昡",
      "楦",
      "泫",
      "渲",
      "炫",
      "琄",
      "眩",
      "碹",
      "絢",
      "縼",
      "繏",
      "绚",
      "蔙",
      "衒",
      "袨",
      "贙",
      "鉉",
      "鏇",
      "铉",
      "镟",
      "颴"
    ],
    "xù xuè": ["怴"],
    "bì pī": ["怶"],
    "xī shù": ["怸"],
    "nèn nín": ["恁"],
    "tiāo yáo": ["恌"],
    "xī qī xù": ["恓"],
    "xiào jiǎo": ["恔"],
    "hū kuā": ["恗"],
    nǜ: ["恧", "朒", "衂", "衄"],
    hèn: ["恨"],
    "dòng tōng": ["恫"],
    "quán zhuān": ["恮"],
    "è wù ě wū": ["恶", "惡"],
    tòng: ["恸", "慟", "憅", "痛", "衕"],
    "yuān juàn": ["悁"],
    "qiāo qiǎo": ["悄"],
    "jiè kè": ["悈"],
    "hào jiào": ["悎"],
    huǐ: ["悔", "檓", "毀", "毁", "毇", "燬", "譭"],
    "mán mèn": ["悗", "鞔"],
    "yī yì": ["悘", "衣"],
    quān: ["悛", "箞", "鐉", "𨟠"],
    "kuī lǐ": ["悝"],
    "yì niàn": ["悥"],
    "mèn mēn": ["悶"],
    guàn: [
      "悹",
      "悺",
      "惯",
      "慣",
      "掼",
      "摜",
      "樌",
      "欟",
      "泴",
      "涫",
      "潅",
      "灌",
      "爟",
      "瓘",
      "盥",
      "礶",
      "祼",
      "罆",
      "罐",
      "貫",
      "贯",
      "躀",
      "遦",
      "鏆",
      "鑵",
      "鱹",
      "鸛",
      "鹳"
    ],
    "kōng kǒng": ["悾"],
    "lǔn lùn": ["惀"],
    guǒ: [
      "惈",
      "果",
      "椁",
      "槨",
      "粿",
      "綶",
      "菓",
      "蜾",
      "裹",
      "褁",
      "輠",
      "餜",
      "馃"
    ],
    "yuān wǎn": ["惌", "箢"],
    "lán lín": ["惏"],
    "yù xù": ["惐", "淢"],
    "chuò chuì": ["惙"],
    "hūn mèn": ["惛"],
    "chǎng tǎng": ["惝"],
    "suǒ ruǐ": ["惢"],
    cǎn: ["惨", "慘", "憯", "黪", "黲", "䅟"],
    cán: ["惭", "慙", "慚", "残", "殘", "蚕", "蝅", "蠶", "蠺"],
    "dàn dá": ["惮", "憚"],
    rě: ["惹"],
    "yú tōu": ["愉"],
    "kài qì": ["愒"],
    "dàng táng shāng yáng": ["愓"],
    "chén xìn dān": ["愖"],
    "kè qià": ["愘"],
    nuò: [
      "愞",
      "懦",
      "懧",
      "掿",
      "搦",
      "榒",
      "稬",
      "穤",
      "糑",
      "糥",
      "糯",
      "諾",
      "诺",
      "蹃",
      "逽",
      "鍩",
      "锘"
    ],
    gǎn: [
      "感",
      "擀",
      "敢",
      "桿",
      "橄",
      "澉",
      "澸",
      "皯",
      "秆",
      "稈",
      "笴",
      "芉",
      "衦",
      "赶",
      "趕",
      "鱤",
      "鳡"
    ],
    "còng sōng": ["愡"],
    "sāi sī sǐ": ["愢"],
    "gōng gòng hǒng": ["愩", "慐"],
    "shuò sù": ["愬", "洬"],
    "yáo yào": ["愮"],
    huàng: ["愰", "曂", "榥", "滉", "皝", "皩", "鎤", "㿠"],
    zhěng: ["愸", "抍", "拯", "整", "晸"],
    cǎo: ["愺", "艸", "草", "騲"],
    "xì xié": ["慀"],
    "cǎo sāo": ["慅"],
    "xù chù": ["慉"],
    "qiè qiàn": ["慊"],
    "cáo cóng": ["慒"],
    "ào áo": ["慠"],
    "lián liǎn": ["慩", "梿", "槤", "櫣"],
    "jìn qín jǐn": ["慬"],
    "dì chì": ["慸"],
    "zhí zhé": ["慹"],
    "lóu lǚ": ["慺", "鷜"],
    còng: ["憁", "謥"],
    "zhī zhì": ["憄", "知", "織", "织"],
    chēng: [
      "憆",
      "摚",
      "撐",
      "撑",
      "晿",
      "柽",
      "棦",
      "橕",
      "檉",
      "泟",
      "浾",
      "琤",
      "瞠",
      "碀",
      "緽",
      "罉",
      "蛏",
      "蟶",
      "赪",
      "赬",
      "鏿",
      "鐣",
      "阷",
      "靗",
      "頳",
      "饓"
    ],
    biē: ["憋", "虌", "鱉", "鳖", "鼈", "龞"],
    "chéng dèng zhèng": ["憕"],
    "xǐ xī": ["憘"],
    "duì dùn tūn": ["憞"],
    "xiāo jiāo": ["憢"],
    "xián xiàn": ["憪"],
    "liáo liǎo": ["憭", "燎", "爎", "爒"],
    shéng: ["憴", "縄", "繉", "繩", "绳", "譝"],
    "náo nǎo náng": ["憹"],
    "jǐng jìng": ["憼"],
    "jǐ jiǎo": ["憿"],
    "xuān huān": ["懁"],
    "cǎo sāo sào": ["懆"],
    mèn: ["懑", "懣", "暪", "焖", "燜"],
    "mèng méng měng": ["懜"],
    "ài yì nǐ": ["懝"],
    "méng měng": ["懞", "瞢", "矒"],
    "qí jī jì": ["懠"],
    mǒ: ["懡"],
    "lán xiàn": ["懢"],
    "yōu yǒu": ["懮"],
    "liú liǔ": ["懰", "藰"],
    ràng: ["懹", "譲", "讓", "让"],
    huān: ["懽", "欢", "歓", "歡", "獾", "讙", "貛", "酄", "驩", "鴅", "鵍"],
    nǎn: ["戁", "揇", "湳", "煵", "腩", "蝻", "赧"],
    "mí mó": ["戂"],
    "gàng zhuàng": ["戅", "戆"],
    "zhuàng gàng": ["戇"],
    "xū qu": ["戌"],
    "xì hū": ["戏", "戯", "戲"],
    "jiá gā": ["戛"],
    zéi: ["戝", "蠈", "賊", "贼", "鰂", "鱡", "鲗"],
    děng: ["戥", "等"],
    "hū xì": ["戱"],
    chuō: ["戳", "踔", "逴"],
    "biǎn piān": ["扁"],
    "shǎng jiōng": ["扄"],
    "shàn shān": ["扇"],
    cái: ["才", "材", "纔", "裁", "財", "财"],
    "zhā zā zhá": ["扎"],
    "lè lì cái": ["扐"],
    "bā pá": ["扒"],
    "dǎ dá": ["打"],
    rēng: ["扔"],
    "fǎn fú": ["払"],
    "diǎo dí yuē lì": ["扚"],
    "káng gāng": ["扛"],
    "yū wū": ["扜"],
    "yū wū kū": ["扝"],
    "tuō chǐ yǐ": ["扡"],
    "gǔ jié xì gē": ["扢"],
    dèn: ["扥", "扽"],
    "sǎo sào": ["扫", "掃"],
    rǎo: ["扰", "擾", "隢"],
    "xī chā qì": ["扱"],
    "bān pān": ["扳"],
    "bā ào": ["扷"],
    "xī zhé": ["扸"],
    "zhì sǔn kǎn": ["扻"],
    zhǎo: ["找", "沼", "瑵"],
    "kuáng wǎng zài": ["抂"],
    "hú gǔ": ["抇", "鹄", "鹘"],
    "bǎ bà": ["把"],
    "dǎn shěn": ["抌"],
    "nè nì ruì nà": ["抐"],
    zhuā: ["抓", "檛", "簻", "膼", "髽"],
    póu: ["抔", "裒"],
    "zhé shé zhē": ["折"],
    "póu pōu fū": ["抙", "捊"],
    pāo: ["抛", "拋", "脬", "萢"],
    "ǎo ào niù": ["抝"],
    "lūn lún": ["抡", "掄"],
    "qiǎng qiāng chēng": ["抢"],
    "zhǐ zhǎi": ["抧"],
    "bù pū": ["抪", "柨"],
    "yǎo tāo": ["抭"],
    "hē hè qiā": ["抲"],
    "nǐ ní": ["抳"],
    "pī pēi": ["抷"],
    "mǒ mò mā": ["抹"],
    chōu: ["抽", "犨", "犫", "瘳", "篘"],
    "jiā yá": ["拁"],
    "fú bì": ["拂", "畐", "鶝"],
    zhǎ: ["拃", "眨", "砟", "鮺", "鲝"],
    "dān dàn dǎn": ["担"],
    "chāi cā": ["拆"],
    niān: ["拈", "蔫"],
    "lā lá lǎ là": ["拉"],
    "bàn pàn": ["拌"],
    pāi: ["拍"],
    līn: ["拎"],
    guǎi: ["拐", "枴", "柺"],
    "tuò tà zhí": ["拓"],
    "ào ǎo niù": ["拗"],
    "jū gōu": ["拘"],
    "pīn pàn fān": ["拚"],
    "bài bái": ["拜"],
    bài: ["拝", "敗", "稗", "粺", "薭", "贁", "败", "韛"],
    qiá: ["拤"],
    "nǐng níng nìng": ["拧"],
    "zé zhái": ["择", "擇"],
    hén: ["拫", "痕", "鞎"],
    "kuò guā": ["括"],
    "jié jiá": ["拮"],
    nǐn: ["拰"],
    shuān: ["拴", "栓", "閂", "闩"],
    "cún zùn": ["拵"],
    "zā zǎn": ["拶", "桚"],
    kǎo: ["拷", "攷", "栲", "烤", "考"],
    "yí chǐ hài": ["拸"],
    "cè sè chuò": ["拺"],
    "zhuài zhuāi yè": ["拽"],
    "shí shè": ["拾"],
    bāi: ["挀", "掰"],
    "kuò guāng": ["挄"],
    nòng: ["挊", "挵", "齈"],
    "jiào jiāo": ["挍", "敎", "教"],
    "kuà kū": ["挎"],
    "ná rú": ["挐"],
    "tiāo tiǎo": ["挑"],
    "dié shè": ["挕"],
    liě: ["挘", "毟"],
    "yà yǎ": ["挜", "掗"],
    "wō zhuā": ["挝"],
    "xié jiā": ["挟", "挾"],
    "dǎng dàng": ["挡", "擋"],
    "zhèng zhēng": ["挣", "正", "症"],
    "āi ái": ["挨"],
    "tuō shuì": ["挩", "捝"],
    "tǐ tì": ["挮"],
    "suō shā": ["挱"],
    "sā shā suō": ["挲"],
    "kēng qiān": ["挳", "摼"],
    "bàng péng": ["挷"],
    "ruó ruá": ["挼"],
    "jiǎo kù": ["捁"],
    "wǔ wú": ["捂"],
    tǒng: ["捅", "桶", "筒", "筩", "統", "綂", "统", "㛚"],
    "huò chì": ["捇"],
    "tú shū chá": ["捈"],
    "lǚ luō": ["捋"],
    "shāo shào": ["捎", "稍"],
    niē: ["捏", "揑"],
    "shù sǒng sōu": ["捒"],
    "yé yú": ["捓"],
    "jué zhuó": ["捔"],
    "bù pú zhì": ["捗"],
    zùn: ["捘", "銌"],
    lāo: ["捞", "撈", "粩"],
    sǔn: ["损", "損", "榫", "笋", "筍", "箰", "鎨", "隼"],
    "wàn wǎn wān yù": ["捥"],
    pěng: ["捧", "淎", "皏"],
    shě: ["捨"],
    "fǔ fù bǔ": ["捬"],
    dáo: ["捯"],
    "luò luǒ wǒ": ["捰"],
    "juǎn quán": ["捲"],
    "chēn tiǎn": ["捵"],
    "niǎn niē": ["捻"],
    "ruó wěi ré": ["捼"],
    zuó: ["捽", "昨", "秨", "稓", "筰", "莋", "鈼"],
    "wò xiá": ["捾"],
    "qìng qiàn": ["掅"],
    "póu pǒu": ["掊"],
    qiā: ["掐", "葜"],
    "pái pǎi": ["排"],
    "qiān wàn": ["掔"],
    "yè yē": ["掖"],
    "niè nǐ yì": ["掜"],
    "huò xù": ["掝"],
    "yàn shàn yǎn": ["掞"],
    "zhěng dìng": ["掟"],
    kòng: ["控", "鞚"],
    tuī: ["推", "蓷", "藬"],
    "zōu zhōu chōu": ["掫"],
    tiàn: ["掭", "舚"],
    kèn: ["掯", "裉", "褃"],
    pá: ["掱", "杷", "潖", "爬", "琶", "筢"],
    "guó guāi": ["掴"],
    "dǎn shàn": ["掸", "撣"],
    "chān xiān càn shǎn": ["掺"],
    sāo: ["掻", "搔", "溞", "繅", "缫", "螦", "騒", "騷", "鰠", "鱢", "鳋"],
    pèng: ["掽", "椪", "槰", "碰", "踫"],
    "zhēng kēng": ["揁"],
    "jiū yóu": ["揂"],
    "jiān jiǎn": ["揃", "籛"],
    "pì chè": ["揊"],
    "sāi zǒng cāi": ["揌"],
    "tí dī dǐ": ["提"],
    "zǒng sōng": ["揔"],
    "huáng yóng": ["揘"],
    "zǎn zuàn": ["揝"],
    "xū jū": ["揟"],
    "ké qiā": ["揢"],
    "chuāi chuǎi chuài tuán zhuī": ["揣"],
    "dì tì": ["揥"],
    "lá là": ["揦"],
    là: [
      "揧",
      "楋",
      "溂",
      "瓎",
      "瘌",
      "翋",
      "臘",
      "蝋",
      "蝲",
      "蠟",
      "辢",
      "辣",
      "鑞",
      "镴",
      "鬎",
      "鯻",
      "𬶟"
    ],
    "jiē qì": ["揭"],
    "chòng dǒng": ["揰"],
    "dié shé yè": ["揲"],
    "jiàn qián jiǎn": ["揵"],
    yé: ["揶", "爷", "爺", "瑘", "鋣", "鎁", "铘"],
    chān: ["搀", "摻", "攙", "裧", "襜", "覘", "觇", "辿", "鋓"],
    "gē gé": ["搁", "擱"],
    "lǒu lōu": ["搂", "摟"],
    "chōu zǒu": ["搊"],
    chuāi: ["搋"],
    sūn: ["搎", "槂", "狲", "猻", "荪", "蓀", "蕵", "薞", "飧", "飱"],
    "róng náng nǎng": ["搑"],
    "péng bàng": ["搒"],
    cuō: ["搓", "瑳", "磋", "蹉", "遳", "醝"],
    "kē è": ["搕"],
    "nù nuò nòu": ["搙"],
    "lā xié xiàn": ["搚"],
    qiǔ: ["搝", "糗"],
    "xiǎn xiān": ["搟"],
    "jié zhé": ["搩"],
    "pán bān pó": ["搫"],
    bān: [
      "搬",
      "攽",
      "斑",
      "斒",
      "班",
      "瘢",
      "癍",
      "肦",
      "螁",
      "螌",
      "褩",
      "辬",
      "頒",
      "颁",
      "𨭉"
    ],
    "zhì nái": ["搱"],
    "wā wǎ wà": ["搲"],
    huá: ["搳", "撶", "滑", "猾", "蕐", "螖", "譁", "鏵", "铧", "驊", "骅", "鷨"],
    "qiāng qiǎng chēng": ["搶"],
    "tián shēn": ["搷"],
    "ná nuò": ["搻"],
    èn: ["摁"],
    "shè niè": ["摄", "攝"],
    bìn: ["摈", "擯", "殡", "殯", "膑", "臏", "髌", "髕", "髩", "鬂", "鬓", "鬢"],
    "shā sà shǎi": ["摋"],
    "chǎn sùn": ["摌"],
    "jiū liú liáo jiǎo náo": ["摎"],
    "féng pěng": ["摓"],
    shuāi: ["摔"],
    "dì tú zhí": ["摕"],
    "qì jì chá": ["摖"],
    "sōu sǒng": ["摗"],
    "liǎn liàn": ["摙"],
    "gài xì": ["摡"],
    "hù chū": ["摢"],
    tàng: ["摥", "烫", "燙", "鐋"],
    "nái zhì": ["摨"],
    "mó mā": ["摩"],
    "jiāng qiàng": ["摪"],
    "áo qiáo": ["摮"],
    "niè chè": ["摰"],
    "mán màn": ["摱"],
    "chàn cán": ["摲"],
    "sè mí sù": ["摵"],
    "biāo biào": ["摽"],
    "juē jué": ["撅"],
    piē: ["撆", "暼", "氕", "瞥"],
    "piě piē": ["撇"],
    "zǎn zān zēn qián": ["撍"],
    "sā sǎ": ["撒"],
    hòng: ["撔", "訌", "讧", "闀", "鬨"],
    "héng guàng": ["撗"],
    niǎn: [
      "撚",
      "撵",
      "攆",
      "涊",
      "焾",
      "碾",
      "簐",
      "蹍",
      "蹨",
      "躎",
      "輦",
      "辇"
    ],
    "chéng zhěng": ["撜"],
    "huī wéi": ["撝"],
    cāo: ["撡", "操", "糙"],
    "xiāo sōu": ["撨"],
    "liáo liāo": ["撩"],
    "cuō zuǒ": ["撮"],
    "wěi tuǒ": ["撱"],
    cuān: ["撺", "攛", "汆", "蹿", "躥", "鑹", "镩"],
    "qiào yāo jī": ["撽"],
    "zhuā wō": ["撾"],
    "lèi léi": ["擂"],
    nǎng: ["擃", "攮", "曩", "灢"],
    "qíng jǐng": ["擏"],
    kuǎi: ["擓", "蒯", "㧟"],
    "pǐ bò": ["擗"],
    "bò bāi": ["擘"],
    "jù jǐ": ["據"],
    mēng: ["擝"],
    "sǒu sòu": ["擞"],
    xǐng: ["擤", "箵", "醒"],
    cā: ["擦"],
    "níng nǐng nìng": ["擰"],
    "zhì jié": ["擳"],
    "là liè": ["擸", "爉"],
    "sòu sǒu": ["擻"],
    "lì luò yuè": ["擽"],
    "tī zhāi zhì": ["擿"],
    pān: ["攀", "潘", "眅", "萠"],
    lèi: [
      "攂",
      "泪",
      "涙",
      "淚",
      "禷",
      "类",
      "纇",
      "蘱",
      "酹",
      "銇",
      "錑",
      "頛",
      "頪",
      "類",
      "颣"
    ],
    "cā sǎ": ["攃"],
    "jùn pèi": ["攈"],
    "lì luò": ["攊", "躒"],
    "là lài": ["攋", "櫴"],
    "lú luó": ["攎"],
    "zǎn cuán": ["攒"],
    "xiān jiān": ["攕"],
    "mí mǐ mó": ["攠"],
    "zǎn cuán zàn zuān": ["攢"],
    zuàn: ["攥"],
    "lì shài": ["攦"],
    "lì luǒ": ["攭"],
    "guǐ guì": ["攱"],
    "jī qī yǐ": ["攲"],
    fàng: ["放"],
    "wù móu": ["敄"],
    "chù shōu": ["敊"],
    "gé guó è": ["敋"],
    "duó duì": ["敓", "敚"],
    "duō què": ["敠", "敪"],
    "sàn sǎn": ["散"],
    "dūn duì": ["敦", "镦"],
    "qī yǐ jī": ["敧"],
    "xiào xué": ["敩"],
    "shù shǔ shuò": ["数", "數"],
    "ái zhú": ["敱", "敳"],
    "xiòng xuàn": ["敻"],
    "zhuó zhú": ["斀"],
    "yì dù": ["斁"],
    "lí tái": ["斄"],
    "fěi fēi": ["斐"],
    "yǔ zhōng": ["斔"],
    "dòu dǒu": ["斗"],
    "wò guǎn": ["斡"],
    "tǒu tiǎo": ["斢"],
    dòu: [
      "斣",
      "梪",
      "浢",
      "痘",
      "窦",
      "竇",
      "脰",
      "荳",
      "豆",
      "逗",
      "郖",
      "酘",
      "閗",
      "闘",
      "餖",
      "饾",
      "鬥",
      "鬦",
      "鬪",
      "鬬",
      "鬭"
    ],
    "yín zhì": ["斦"],
    "chǎn jiè": ["斺"],
    "wū yū yú": ["於"],
    "yóu liú": ["斿"],
    "páng bàng": ["旁"],
    "máo mào": ["旄"],
    "pī bì": ["旇"],
    "xuán xuàn": ["旋"],
    "wú mó": ["无"],
    zǎo: ["早", "枣", "栆", "棗", "澡", "璪", "薻", "藻", "蚤"],
    gā: ["旮"],
    "gàn hàn": ["旰"],
    "tái yīng": ["旲"],
    "xū xù": ["旴"],
    "tūn zhùn": ["旽"],
    "wù wǔ": ["旿"],
    "pò pèi": ["昢"],
    zòng: ["昮", "猔", "疭", "瘲", "粽", "糉", "糭", "縦"],
    ǎi: ["昹", "毐", "矮", "蔼", "藹", "譪", "躷", "霭", "靄"],
    "huàng huǎng": ["晃"],
    xuǎn: ["晅", "癣", "癬", "选", "選"],
    "xù kuā": ["晇"],
    hǒng: ["晎"],
    shài: ["晒", "曬"],
    "yūn yùn": ["晕", "煴"],
    "shèng chéng": ["晟", "椉", "盛"],
    "jǐng yǐng": ["景"],
    shǎn: ["晱", "熌", "睒", "覢", "閃", "闪", "陕", "陝"],
    "qǐ dù": ["晵"],
    "ǎn àn yǎn": ["晻"],
    "wǎng wàng": ["暀"],
    zàn: [
      "暂",
      "暫",
      "瓉",
      "瓒",
      "瓚",
      "禶",
      "襸",
      "讃",
      "讚",
      "賛",
      "贊",
      "赞",
      "蹔",
      "鄼",
      "錾",
      "鏨",
      "饡"
    ],
    "yùn yūn": ["暈"],
    "mín mǐn": ["暋"],
    "dǔ shǔ": ["暏"],
    shǔ: [
      "暑",
      "曙",
      "潻",
      "癙",
      "糬",
      "署",
      "薥",
      "薯",
      "藷",
      "蜀",
      "蠴",
      "襡",
      "襩",
      "鱪",
      "鱰",
      "黍",
      "鼠",
      "鼡"
    ],
    "jiǎn lán": ["暕"],
    nuǎn: ["暖", "煗", "餪"],
    "bào pù": ["暴"],
    "xī xǐ": ["暿"],
    "pù bào": ["曝", "瀑"],
    "qū qǔ": ["紶"],
    "qǔ qū": ["曲"],
    "gèng gēng": ["更"],
    "hū hù": ["曶", "雽"],
    "zēng céng": ["曽", "橧"],
    "céng zēng": ["曾", "竲"],
    "cǎn qián jiàn": ["朁"],
    "qiè hé": ["朅"],
    "bì pí": ["朇", "禆", "笓", "裨"],
    "yǒu yòu": ["有"],
    "bān fén": ["朌", "鳻"],
    "fú fù": ["服", "洑"],
    "fěi kū": ["朏", "胐"],
    "qú xù chǔn": ["朐"],
    "juān zuī": ["朘"],
    "huāng máng wáng": ["朚"],
    "qī jī": ["期"],
    "tóng chuáng": ["朣", "橦"],
    zhá: ["札", "牐", "箚", "蚻", "譗", "鍘", "铡", "閘", "闸"],
    "zhú shù shú": ["朮"],
    "shù shú zhú": ["术"],
    "zhū shú": ["朱"],
    "pǔ pò pō piáo": ["朴"],
    "dāo tiáo mù": ["朷"],
    "guǐ qiú": ["朹"],
    xiǔ: ["朽", "滫", "潃", "糔"],
    "chéng chēng": ["朾"],
    zá: ["杂", "沯", "砸", "襍", "雑", "雜", "雥", "韴"],
    "yú wū": ["杅"],
    "gān gǎn": ["杆"],
    "chā chà": ["杈"],
    "shān shā": ["杉"],
    cūn: ["村", "皴", "竴", "膥", "踆", "邨"],
    "rèn ér": ["杒", "梕"],
    "sháo biāo": ["杓"],
    "dì duò": ["杕", "枤"],
    "gū gài": ["杚"],
    "yí zhì lí duò": ["杝"],
    "gàng gāng": ["杠"],
    "tiáo tiāo": ["条", "條"],
    "mà mǎ": ["杩"],
    "sì zhǐ xǐ": ["杫"],
    "yuán wán": ["杬", "蚖"],
    "bèi fèi": ["杮"],
    "shū duì": ["杸"],
    "niǔ chǒu": ["杻"],
    "wò yuè": ["枂", "臒"],
    máo: [
      "枆",
      "毛",
      "氂",
      "渵",
      "牦",
      "矛",
      "罞",
      "茅",
      "茆",
      "蝥",
      "蟊",
      "軞",
      "酕",
      "鉾",
      "錨",
      "锚",
      "髦",
      "鶜"
    ],
    "pī mì": ["枈"],
    àng: ["枊", "盎", "醠"],
    "fāng bìng": ["枋"],
    "hù dǐ": ["枑"],
    xín: ["枔", "襑", "鐔", "鬵"],
    "yāo yǎo": ["枖"],
    "ě è": ["枙"],
    "zhī qí": ["枝"],
    "cōng zōng": ["枞", "樅"],
    "xiān zhēn": ["枮"],
    "tái sì": ["枱"],
    "gǒu jǔ gōu": ["枸"],
    "bāo fú": ["枹"],
    "yì xiè": ["枻", "栧"],
    "tuó duò": ["柁", "馱", "駄", "驮"],
    "yí duò lí": ["柂"],
    "nǐ chì": ["柅"],
    "pán bàn": ["柈", "跘"],
    "yǎng yàng yāng yīng": ["柍"],
    "fù fū fǔ": ["柎"],
    "bǎi bó bò": ["柏"],
    mǒu: ["某"],
    "sháo shào": ["柖"],
    zhè: ["柘", "樜", "浙", "淛", "蔗", "蟅", "這", "鷓", "鹧", "䗪"],
    "yòu yóu": ["柚", "櫾"],
    "guì jǔ": ["柜"],
    "zhà zuò": ["柞"],
    "dié zhì": ["柣", "眰"],
    "zhā zǔ zū": ["柤"],
    "chá zhā": ["查", "査"],
    "āo ào": ["柪", "軪"],
    "bā fú pèi bó biē": ["柭"],
    "duò zuó wù": ["柮"],
    "bì bié": ["柲"],
    "zhù chù": ["柷"],
    "bēi pēi": ["柸"],
    "shì fèi": ["柹"],
    "shān zhà shi cè": ["栅"],
    "lì yuè": ["栎", "櫟"],
    "qì qiè": ["栔", "砌"],
    "qī xī": ["栖", "蹊"],
    "guā kuò": ["栝"],
    "bīng bēn": ["栟"],
    "xiào jiào": ["校"],
    "jiàn zùn": ["栫", "袸"],
    "yǒu yù": ["栯"],
    "hé hú": ["核"],
    gēn: ["根", "跟"],
    "zhī yì": ["栺"],
    "gé gē": ["格"],
    "héng háng": ["桁"],
    "guàng guāng": ["桄"],
    "yí tí": ["桋", "荑"],
    sāng: ["桑", "桒", "槡"],
    "jú jié": ["桔"],
    "yú móu": ["桙"],
    "ráo náo": ["桡", "橈"],
    "guì huì": ["桧", "檜"],
    "chén zhèn": ["桭"],
    "tīng yíng": ["桯"],
    "bó po": ["桲"],
    "bèn fàn": ["桳"],
    "fēng fèng": ["桻", "葑"],
    "sù yìn": ["梀"],
    "tǐng tìng": ["梃"],
    "xuān juān xié": ["梋"],
    "tú chá": ["梌"],
    "āo yòu": ["梎"],
    kuǎn: ["梡", "欵", "款", "歀"],
    "shāo sào": ["梢"],
    "qín chén cén": ["梣"],
    "lí sì qǐ": ["梩"],
    "chān yán": ["梴"],
    "bīn bīng": ["梹", "槟", "檳"],
    "táo chóu dào": ["梼"],
    "cōng sōng": ["棇"],
    "gùn hùn": ["棍"],
    "dé zhé": ["棏"],
    "pái bèi pèi": ["棑"],
    "bàng pǒu bèi bēi": ["棓"],
    "dì dài tì": ["棣"],
    sēn: ["森", "椮", "槮", "襂"],
    "rěn shěn": ["棯"],
    "léng lēng líng": ["棱"],
    "fú sù": ["棴"],
    "zōu sǒu": ["棷"],
    zōu: [
      "棸",
      "箃",
      "緅",
      "諏",
      "诹",
      "邹",
      "郰",
      "鄒",
      "鄹",
      "陬",
      "騶",
      "驺",
      "鯫",
      "鲰",
      "黀",
      "齱",
      "齺"
    ],
    "zhào zhuō": ["棹"],
    "chēn shēn": ["棽"],
    "jiē qiè": ["椄"],
    "yǐ yī": ["椅"],
    "chóu zhòu diāo": ["椆"],
    "qiāng kōng": ["椌"],
    "zhuī chuí": ["椎"],
    "bēi pí": ["椑"],
    mēn: ["椚"],
    "quān juàn quán": ["椦"],
    "duǒ chuán": ["椯"],
    "wěi huī": ["椲"],
    "jiǎ jiā": ["椵"],
    "hán jiān": ["椷"],
    "shèn zhēn": ["椹"],
    "yàn yà": ["椻"],
    "zhā chá": ["楂"],
    "guō kuǎ": ["楇"],
    "jí zhì": ["楖"],
    "kǔ hù": ["楛"],
    "yóu yǒu": ["楢"],
    "sǒng cōng": ["楤"],
    "yuán xuàn": ["楥"],
    "yǎng yàng yīng": ["楧"],
    pián: ["楩", "胼", "腁", "賆", "蹁", "駢", "騈", "骈", "骿", "㛹"],
    "dié yè": ["楪"],
    "dùn shǔn": ["楯"],
    "còu zòu": ["楱"],
    "dì dǐ shì": ["楴"],
    "kǎi jiē": ["楷"],
    "róu ròu": ["楺"],
    "lè yuè": ["楽"],
    "wēn yùn": ["榅", "鞰"],
    lǘ: ["榈", "櫚", "氀", "膢", "藘", "閭", "闾", "驢", "驴"],
    shén: ["榊", "神", "鉮", "鰰", "𬬹"],
    "bī pi": ["榌"],
    "zhǎn niǎn zhèn": ["榐"],
    "fú fù bó": ["榑"],
    "jiàn jìn": ["榗"],
    "bǎng bàng": ["榜"],
    "shā xiè": ["榝", "樧"],
    nòu: ["槈", "耨", "鎒", "鐞"],
    "qiǎn lián xiàn": ["槏"],
    gàng: ["槓", "焵", "焹", "筻", "鿍"],
    gāo: [
      "槔",
      "槹",
      "橰",
      "櫜",
      "睾",
      "篙",
      "糕",
      "羔",
      "臯",
      "韟",
      "餻",
      "高",
      "髙",
      "鷎",
      "鷱",
      "鼛"
    ],
    "diān zhěn zhēn": ["槙"],
    "kǎn jiàn": ["槛"],
    "xí dié": ["槢"],
    "jī guī": ["槣"],
    "róng yōng": ["槦"],
    "tuán shuàn quán": ["槫"],
    "qì sè": ["槭"],
    "cuī zhǐ": ["槯"],
    "yǒu chǎo": ["槱"],
    "màn wàn": ["槾"],
    "lí chī": ["樆"],
    "léi lěi": ["樏", "櫑", "礌"],
    "cháo jiǎo chāo": ["樔"],
    "chēng táng": ["樘"],
    "jiū liáo": ["樛"],
    "mó mú": ["模"],
    "niǎo mù": ["樢"],
    "héng hèng": ["横", "橫"],
    xuě: ["樰", "膤", "艝", "轌", "雪", "鱈", "鳕"],
    "fá fèi": ["橃"],
    rùn: ["橍", "润", "潤", "膶", "閏", "閠", "闰"],
    "zhǎn jiǎn": ["橏"],
    shùn: ["橓", "瞚", "瞬", "舜", "蕣", "順", "顺", "鬊"],
    "tuí dūn": ["橔"],
    "táng chēng": ["橖"],
    "sù qiū": ["橚"],
    "tán diàn": ["橝"],
    "fén fèn fèi": ["橨"],
    "rǎn yān": ["橪"],
    "cū chu": ["橻"],
    "shū qiāo": ["橾"],
    "píng bò": ["檘"],
    "zhái shì tú": ["檡"],
    "biǎo biāo": ["檦"],
    "qiān lián": ["檶"],
    "nǐ mí": ["檷"],
    "jiàn kǎn": ["檻"],
    "nòu ruǎn rú": ["檽"],
    "jī jì": ["櫅", "禨"],
    "huǎng guǒ gǔ": ["櫎"],
    "lǜ chū": ["櫖"],
    "miè mèi": ["櫗"],
    ōu: [
      "櫙",
      "欧",
      "歐",
      "殴",
      "毆",
      "瓯",
      "甌",
      "膒",
      "藲",
      "謳",
      "讴",
      "鏂",
      "鴎",
      "鷗",
      "鸥"
    ],
    "zhù zhuó": ["櫡"],
    "jué jì": ["櫭"],
    "huái guī": ["櫰"],
    "chán zhàn": ["欃"],
    "wéi zuì": ["欈"],
    cáng: ["欌", "鑶"],
    "yù yì": ["欥"],
    "chù qù xì": ["欪"],
    "kài ài": ["欬"],
    "yì yīn": ["欭"],
    "xì kài": ["欯"],
    "shuò sòu": ["欶"],
    "ǎi ēi éi ěi èi ê̄ ế ê̌ ề": ["欸"],
    "qī yī": ["欹"],
    "chuā xū": ["欻"],
    "chǐ chuài": ["欼"],
    "kǎn qiàn": ["欿"],
    "kǎn kè": ["歁"],
    "chuǎn chuán": ["歂"],
    "yīn yān": ["歅"],
    "jìn qūn": ["歏"],
    pēn: ["歕"],
    "xū chuā": ["歘"],
    "xī shè": ["歙"],
    "liǎn hān": ["歛"],
    "zhì chí": ["歭"],
    "sè shà": ["歰"],
    sǐ: ["死"],
    "wěn mò": ["歾"],
    piǎo: ["殍", "皫", "瞟", "醥", "顠"],
    "qíng jìng": ["殑"],
    "fǒu bó": ["殕"],
    "zhí shi": ["殖"],
    "yè yān yàn": ["殗"],
    "hūn mèi": ["殙"],
    chòu: ["殠", "臰", "遚"],
    "kuì huì": ["殨", "溃", "潰"],
    cuàn: ["殩", "熶", "爨", "窜", "竄", "篡", "簒"],
    "yīn yān yǐn": ["殷"],
    "qìng kēng shēng": ["殸"],
    "yáo xiáo xiào": ["殽"],
    "gū gǔ": ["毂", "蛄"],
    "guàn wān": ["毌"],
    "dú dài": ["毒"],
    "xún xùn": ["毥"],
    mú: ["毪", "氁"],
    "dòu nuò": ["毭"],
    "sāi suī": ["毸"],
    lu: ["氇"],
    sào: ["氉", "瘙", "矂", "髞"],
    "shì zhī": ["氏"],
    "dī dǐ": ["氐"],
    "máng méng": ["氓"],
    "yáng rì": ["氜"],
    shuǐ: ["水", "氵", "氺", "閖"],
    "zhěng chéng zhèng": ["氶"],
    tǔn: ["氽"],
    "fán fàn": ["氾"],
    "guǐ jiǔ": ["氿"],
    "bīn pà pā": ["汃"],
    "zhuó què": ["汋"],
    "dà tài": ["汏"],
    pìn: ["汖", "牝", "聘"],
    "hàn hán": ["汗", "馯"],
    tu: ["汢"],
    "tāng shāng": ["汤", "湯"],
    "zhī jì": ["汥"],
    "gàn hán cén": ["汵"],
    "wèn mén": ["汶"],
    "fāng pāng": ["汸"],
    "hǔ huǎng": ["汻"],
    "niú yóu": ["汼"],
    hàng: ["沆"],
    "shěn chén": ["沈"],
    "dùn zhuàn": ["沌"],
    "nǜ niǔ": ["沑"],
    "méi mò": ["沒", "没"],
    "tà dá": ["沓"],
    "mì wù": ["沕"],
    "hóng pāng": ["沗"],
    "shā shà": ["沙"],
    "zhuǐ zǐ": ["沝"],
    "ōu òu": ["沤", "漚"],
    "jǔ jù": ["沮"],
    "tuō duó": ["沰"],
    "mǐ lì": ["沵"],
    "yí chí": ["沶"],
    "xiè yì": ["泄"],
    "bó pō": ["泊"],
    "mì bì": ["泌", "秘"],
    "chù shè": ["泏"],
    "yōu yòu āo": ["泑"],
    "pēng píng": ["泙", "硑"],
    "pào pāo": ["泡"],
    "ní nì": ["泥", "秜"],
    "yuè sà": ["泧"],
    "jué xuè": ["泬", "疦"],
    "lóng shuāng": ["泷", "瀧"],
    "luò pō": ["泺", "濼"],
    "zé shì": ["泽", "澤"],
    "sǎ xǐ": ["洒"],
    "sè qì zì": ["洓"],
    "xǐ xiǎn": ["洗"],
    "kǎo kào": ["洘"],
    "àn yàn è": ["洝"],
    "lěi lèi": ["洡"],
    "qiè jié": ["洯"],
    "qiǎn jiān": ["浅"],
    "jì jǐ": ["济", "済", "濟", "纪"],
    "hǔ xǔ": ["浒", "滸"],
    "jùn xùn": ["浚", "濬"],
    "yǐng chéng yíng": ["浧"],
    "liàn lì": ["浰"],
    "féng hóng": ["浲", "溄"],
    "jiǒng jiōng": ["浻"],
    "suī něi": ["浽"],
    "yǒng chōng": ["涌"],
    "tūn yūn": ["涒"],
    "wō guō": ["涡", "渦"],
    hēng: ["涥", "脝"],
    "zhǎng zhàng": ["涨", "漲"],
    "shòu tāo": ["涭"],
    shuàn: ["涮", "腨"],
    "kōng náng": ["涳"],
    "wò wǎn yuān": ["涴"],
    "tuō tuò": ["涶"],
    wō: ["涹", "猧", "窝", "窩", "莴", "萵", "蜗", "蝸", "踒"],
    "qiè jí": ["淁"],
    "guǒ guàn": ["淉"],
    "lín lìn": ["淋", "獜", "疄"],
    "tǎng chǎng": ["淌"],
    "nào chuò zhuō": ["淖"],
    "péng píng": ["淜"],
    féi: ["淝", "肥", "腓", "蜰"],
    "pì pèi": ["淠"],
    "niǎn shěn": ["淰"],
    "biāo hǔ": ["淲"],
    "chún zhūn": ["淳"],
    "hùn hún": ["混"],
    qiǎn: ["淺", "繾", "缱", "肷", "膁", "蜸", "譴", "谴", "遣", "鑓"],
    "wèn mín": ["渂"],
    "rè ruò luò": ["渃"],
    "dú dòu": ["渎", "瀆", "读"],
    "jiàn jiān": ["渐", "溅", "漸", "濺"],
    "miǎn shéng": ["渑", "澠"],
    "nuǎn nuán": ["渜"],
    "qiú wù": ["渞"],
    "tíng tīng": ["渟"],
    "dì tí dī": ["渧"],
    "gǎng jiǎng": ["港"],
    "hōng qìng": ["渹"],
    tuān: ["湍", "煓"],
    "huì mǐn xū": ["湏"],
    "xǔ xù": ["湑"],
    pén: ["湓", "瓫", "盆", "葐"],
    "mǐn hūn": ["湣"],
    "tuàn nuǎn": ["湪"],
    "qiū jiǎo": ["湫", "湬"],
    "yān yīn": ["湮"],
    "bàn pán": ["湴"],
    "zhuāng hún": ["湷"],
    "yàn guì": ["溎"],
    "lián liǎn nián xián xiàn": ["溓"],
    "dá tǎ": ["溚", "鿎"],
    "liū liù": ["溜", "澑", "蹓"],
    lùn: ["溣"],
    mǎ: [
      "溤",
      "犸",
      "獁",
      "玛",
      "瑪",
      "码",
      "碼",
      "遤",
      "鎷",
      "馬",
      "马",
      "鰢",
      "鷌"
    ],
    "zhēn qín": ["溱"],
    "nì niào": ["溺"],
    "chù xù": ["滀", "畜"],
    "wěng wēng": ["滃"],
    "hào xuè": ["滈"],
    "qì xì xiē": ["滊"],
    "xíng yíng": ["滎"],
    "zé hào": ["滜"],
    "piāo piào piǎo": ["漂"],
    "cóng sǒng": ["漎"],
    "féng péng": ["漨"],
    "luò tà": ["漯"],
    "pēng bēn": ["漰"],
    "chóng shuāng": ["漴"],
    "huǒ kuò huò": ["漷"],
    "liáo liú": ["漻"],
    "cuǐ cuī": ["漼"],
    "cóng zǒng": ["潀"],
    "cóng zōng": ["潈"],
    "pì piē": ["潎"],
    "dàng xiàng": ["潒"],
    "huáng guāng": ["潢"],
    "liáo lào lǎo": ["潦"],
    "cōng zòng": ["潨"],
    "zhí zhì": ["潪"],
    "tān shàn": ["潬"],
    "tú zhā": ["潳"],
    "sàn sǎ": ["潵"],
    hēi: ["潶", "黑", "黒", "𬭶"],
    "chéng dèng": ["澄", "瀓"],
    "cūn cún": ["澊"],
    "péng pēng": ["澎"],
    "hòng gǒng": ["澒", "銾"],
    "wàn màn": ["澫"],
    "kuài huì": ["澮"],
    "guō wō": ["濄"],
    "pēn fén": ["濆"],
    "jí shà": ["濈"],
    "huì huò": ["濊"],
    "dǐng tìng": ["濎"],
    "mǐ nǐ": ["濔"],
    "bì pì": ["濞"],
    "cuì zuǐ": ["濢"],
    "hù huò": ["濩"],
    "ǎi kài kè": ["濭"],
    "wěi duì": ["濻", "瀢"],
    "zàn cuán": ["濽", "灒"],
    "yǎng yàng": ["瀁"],
    "wǎng wāng": ["瀇"],
    "mò miè": ["瀎", "眜"],
    suǐ: ["瀡", "膸", "髓"],
    "huái wāi": ["瀤"],
    "zùn jiàn": ["瀳"],
    "yīng yǐng yìng": ["瀴"],
    "ráng ràng": ["瀼"],
    shuàng: ["灀"],
    "zhuó jiào zé": ["灂"],
    sǎ: ["灑", "訯", "靸"],
    "luán luàn": ["灓"],
    "dǎng tǎng": ["灙"],
    "xún quán quàn": ["灥"],
    "huǒ biāo": ["灬"],
    "zhà yù": ["灹"],
    "fén bèn": ["炃"],
    "jiǒng guì": ["炅"],
    "pàng fēng": ["炐"],
    quē: ["炔", "缺", "缼", "蒛"],
    biān: [
      "炞",
      "煸",
      "甂",
      "砭",
      "笾",
      "箯",
      "籩",
      "編",
      "编",
      "蝙",
      "邉",
      "邊",
      "鍽",
      "鞭",
      "鯾",
      "鯿",
      "鳊"
    ],
    "zhāo zhào": ["炤"],
    "zhuō chù": ["炪"],
    "pào páo bāo": ["炮"],
    "páo fǒu": ["炰"],
    "shǎn qián shān": ["炶"],
    "zhà zhá": ["炸"],
    "jiǎo yào": ["烄"],
    quǎn: ["烇", "犬", "犭", "畎", "綣", "绻", "虇"],
    "yàng yáng": ["烊"],
    "lào luò": ["烙"],
    "huí huǐ": ["烠"],
    rè: ["热", "熱"],
    "fú páo": ["烰"],
    "xiè chè": ["烲", "焎"],
    "yàn shān": ["烻"],
    "hūn xūn": ["焄"],
    kào: ["焅", "犒", "銬", "铐", "靠", "鮳", "鯌", "鲓", "㸆"],
    "juān yè": ["焆"],
    "jùn qū": ["焌"],
    "tāo dào": ["焘"],
    "chǎo jù": ["焣"],
    "wò ài": ["焥"],
    "zǒng cōng": ["焧"],
    "xī yì": ["焬"],
    "xìn xīn": ["焮"],
    "chāo zhuō": ["焯"],
    "xiǒng yīng": ["焸", "焽"],
    kuǐ: ["煃", "跬", "蹞", "頍", "𫠆"],
    "huī yùn xūn": ["煇"],
    "jiǎo qiāo": ["煍"],
    "qián shǎn shān": ["煔"],
    "xī yí": ["煕"],
    "shà shā": ["煞"],
    "yè zhá": ["煠"],
    "yáng yàng": ["煬"],
    "ēn yūn": ["煾"],
    "yūn yǔn": ["熅"],
    "hè xiāo": ["熇"],
    xióng: ["熊", "熋", "雄"],
    "xūn xùn": ["熏", "爋"],
    gòng: ["熕", "貢", "贡"],
    liū: ["熘"],
    "cōng zǒng": ["熜"],
    "lù āo": ["熝"],
    "shú shóu": ["熟"],
    "fēng péng": ["熢"],
    "cuǐ suī": ["熣"],
    tēng: ["熥", "膯", "鼟"],
    "yùn yù": ["熨"],
    "áo āo": ["熬"],
    "hàn rǎn": ["熯"],
    "ōu ǒu": ["熰"],
    "huáng huǎng": ["熿"],
    "chǎn dǎn chàn": ["燀"],
    "jiāo zhuó qiáo jué": ["燋"],
    "yàn yān": ["燕"],
    "tài liè": ["燤"],
    āo: ["爊"],
    "yàn xún": ["爓"],
    "jué jiào": ["爝", "覐", "覚", "覺", "觉"],
    "lǎn làn": ["爦"],
    "zhuǎ zhǎo": ["爪"],
    "zhǎo zhuǎ": ["爫"],
    "fù fǔ": ["父"],
    diē: ["爹", "褺", "跌"],
    zāng: ["牂", "羘", "臧", "賍", "賘", "贓", "贜", "赃", "髒"],
    "piàn piān": ["片"],
    "biān miàn": ["牑"],
    bǎng: ["牓", "綁", "绑"],
    "yǒu yōng": ["牗"],
    "chēng chèng": ["牚", "竀"],
    niú: ["牛", "牜"],
    "jiū lè": ["牞"],
    "mù móu": ["牟"],
    māng: ["牤"],
    "gē qiú": ["牫"],
    "yòu chōu": ["牰"],
    "tè zhí": ["犆"],
    bēn: ["犇", "錛", "锛"],
    "jiān qián": ["犍", "玪"],
    má: ["犘", "痲", "蔴", "蟇", "麻"],
    "máo lí": ["犛"],
    "bá quǎn": ["犮"],
    "zhuó bào": ["犳"],
    "àn hān": ["犴"],
    "kàng gǎng": ["犺"],
    "pèi fèi": ["犻"],
    "fān huān": ["犿"],
    kuáng: ["狂", "狅", "誑", "诳", "軖", "軠", "鵟", "𫛭"],
    "yí quán chí": ["狋"],
    "xīng shēng": ["狌"],
    "tuó yí": ["狏"],
    kǔ: ["狜", "苦"],
    "huán huān": ["狟"],
    "hé mò": ["狢"],
    "tà shì": ["狧"],
    "máng dòu": ["狵"],
    "xī shǐ": ["狶"],
    suān: ["狻", "痠", "酸"],
    "bài pí": ["猈"],
    "jiān yàn": ["猏", "豣"],
    "yī yǐ": ["猗"],
    "yá wèi": ["猚"],
    cāi: ["猜"],
    "māo máo": ["猫", "貓"],
    "chuàn chuān": ["猭"],
    "tuān tuàn": ["猯", "貒"],
    "yà jiá qiè": ["猰"],
    "hè xiē gé hài": ["猲"],
    "biān piàn": ["猵", "獱"],
    "bó pò": ["猼"],
    "háo gāo": ["獋"],
    "fén fèn": ["獖"],
    "yào xiāo": ["獟"],
    "shuò xī": ["獡"],
    "gé liè xiē": ["獦"],
    "nòu rú": ["獳"],
    "náo nǎo yōu": ["獶"],
    ráng: ["獽", "瓤", "禳", "穣", "穰", "蘘", "躟", "鬤"],
    "náo yōu": ["獿"],
    "lǜ shuài": ["率"],
    "wáng wàng": ["王"],
    "yáng chàng": ["玚"],
    "mín wén": ["玟"],
    "bīn fēn": ["玢"],
    "mén yǔn": ["玧"],
    "qiāng cāng": ["玱", "瑲", "篬"],
    "án gān": ["玵"],
    "xuán xián": ["玹"],
    "cī cǐ": ["玼", "跐"],
    "yí tāi": ["珆"],
    "zǔ jù": ["珇"],
    fà: ["珐", "琺", "蕟", "髪", "髮"],
    "yín kèn": ["珢"],
    "huī hún": ["珲"],
    "xuán qióng": ["琁"],
    "fú fū": ["琈"],
    "bǐng pín": ["琕"],
    "cuì sè": ["琗"],
    "yù wéi": ["琟"],
    "tiǎn tiàn": ["琠"],
    "zhuó zuó": ["琢"],
    "běng pěi": ["琣"],
    guǎn: ["琯", "璭", "痯", "筦", "管", "舘", "輨", "錧", "館", "馆", "鳤"],
    "hún huī": ["琿"],
    "xié jiē": ["瑎"],
    "chàng dàng yáng": ["瑒"],
    "tiàn zhèn": ["瑱"],
    "bīn pián": ["瑸", "璸"],
    "tú shū": ["瑹"],
    cuǐ: ["璀", "皠", "趡"],
    "zǎo suǒ": ["璅"],
    "jué qióng": ["璚"],
    "lú fū": ["璷"],
    "jì zī": ["璾"],
    suí: ["瓍", "綏", "绥", "遀", "随", "隨", "髄"],
    "mí xǐ": ["瓕"],
    "qióng wěi wèi": ["瓗"],
    "huán yè yà": ["瓛"],
    "bó páo": ["瓟"],
    "zhí hú": ["瓡"],
    piáo: ["瓢", "闝"],
    "wǎ wà": ["瓦"],
    "xiáng hóng": ["瓨"],
    wèng: ["瓮", "甕", "罋", "蕹", "齆"],
    "shèn shén": ["甚"],
    ruí: ["甤", "緌", "蕤"],
    yòng: ["用", "砽", "苚", "蒏", "醟", "㶲"],
    shuǎi: ["甩"],
    béng: ["甭", "甮"],
    "yóu zhá": ["甴"],
    "diàn tián shèng": ["甸"],
    "tǐng dīng": ["町", "甼"],
    "zāi zī": ["甾"],
    "bì qí": ["畁"],
    "dá fú": ["畗"],
    "cè jì": ["畟"],
    "zāi zī tián": ["畠"],
    "zhì chóu shì": ["畤"],
    "fān pān": ["畨", "番"],
    "shē yú": ["畬"],
    "dāng dàng dǎng": ["當"],
    "jiāng qiáng": ["疆"],
    "pǐ yǎ shū": ["疋"],
    "jié qiè": ["疌"],
    "yí nǐ": ["疑"],
    nè: ["疒", "眲", "訥", "讷"],
    "gē yì": ["疙"],
    "nüè yào": ["疟", "瘧"],
    "lì lài": ["疠", "癘"],
    "yǎ xiā": ["疨"],
    xuē: ["疶", "蒆", "薛", "辥", "辪", "靴", "鞾"],
    "dǎn da": ["疸"],
    "fá biǎn": ["疺"],
    "fèi féi": ["疿", "痱"],
    "shān diàn": ["痁"],
    "téng chóng": ["痋"],
    "tōng tóng": ["痌"],
    "wěi yòu yù": ["痏"],
    "tān shǐ": ["痑"],
    "pū pù": ["痡", "鋪"],
    "bēng péng": ["痭"],
    "má lìn": ["痳"],
    "tiǎn diàn": ["痶"],
    "ān yè è": ["痷"],
    "kē ē": ["痾"],
    "zhì chì": ["瘈"],
    "jiǎ xiá xiā": ["瘕"],
    "lěi huì": ["瘣"],
    "chài cuó": ["瘥"],
    "diān chēn": ["瘨"],
    "da dá": ["瘩"],
    "biě biē": ["瘪"],
    qué: ["瘸"],
    "dàn dān": ["癉"],
    "guì wēi": ["癐"],
    "nòng nóng": ["癑"],
    "biē biě": ["癟"],
    "bō bǒ": ["癷"],
    bái: ["白"],
    "jí bī": ["皀"],
    "de dì dí dī": ["的"],
    "pā bà": ["皅"],
    "gāo háo": ["皋"],
    "gāo yáo": ["皐"],
    "lì luò bō": ["皪"],
    "zhā cǔ": ["皻"],
    "zhāo zhǎn dǎn": ["皽"],
    "jiān jiàn": ["监", "監", "鋻", "间", "鞬"],
    "gài gě hé": ["盖"],
    "máng wàng": ["盳"],
    yuǎn: ["盶", "逺", "遠"],
    "tián xián": ["盷"],
    "xiāng xiàng": ["相"],
    dǔn: ["盹", "趸", "躉"],
    "xì pǎn": ["盻"],
    "shěng xǐng": ["省"],
    "yún hùn": ["眃"],
    "miǎn miàn": ["眄"],
    "kàn kān": ["看"],
    "yìng yāng yǎng": ["眏"],
    "yǎo āo ǎo": ["眑"],
    "jū xū kōu": ["眗"],
    "yí chì": ["眙"],
    "dié tì": ["眣"],
    "bǐng fǎng": ["眪"],
    "pàng pán": ["眫"],
    "mī mí": ["眯", "瞇"],
    "xuàn shùn xún": ["眴"],
    tiào: ["眺", "粜", "糶", "覜", "趒"],
    "zhe zhuó zháo zhāo": ["着"],
    "qiáo shào xiāo": ["睄"],
    "cuó zhuài": ["睉"],
    gùn: ["睔", "謴"],
    "suì zuì": ["睟"],
    "pì bì": ["睥", "稫", "辟"],
    "yì zé gāo": ["睪"],
    "xǐng xìng": ["睲"],
    "guì wèi kuì": ["瞆"],
    "kòu jì": ["瞉"],
    "qióng huán": ["瞏"],
    "mán mén": ["瞒", "瞞"],
    "diāo dōu": ["瞗"],
    "lou lóu lǘ": ["瞜"],
    "shùn rún": ["瞤"],
    "liào liǎo": ["瞭", "钌"],
    "jiàn xián": ["瞯"],
    "wǔ mí": ["瞴"],
    "guì kuì": ["瞶"],
    "nǐng chēng": ["矃"],
    "huò yuè": ["矆"],
    "mēng méng": ["矇"],
    "kuàng guō": ["矌"],
    "guàn quán": ["矔"],
    "mǎn mán": ["矕"],
    "jīn guān qín": ["矜"],
    "jīn qín guān": ["矝"],
    "yù xù jué": ["矞"],
    "jiǎo jiáo": ["矫", "矯"],
    duǎn: ["短"],
    "shí dàn": ["石"],
    "gāng qiāng kòng": ["矼"],
    "huā xū": ["砉"],
    "pīn bīn fēn": ["砏"],
    "yán yàn": ["研", "硏"],
    "luǒ kē": ["砢"],
    "fú fèi": ["砩", "笰"],
    "zhǔ zhù": ["砫"],
    "lá lì lā": ["砬"],
    "kuāng guāng": ["硄"],
    "gè luò": ["硌"],
    "shuò shí": ["硕", "碩"],
    "wèi wéi ái": ["硙"],
    "què kè kù": ["硞"],
    "mǎng bàng": ["硥"],
    "luò lòng": ["硦"],
    "yǒng tóng": ["硧"],
    nüè: ["硸", "虐"],
    "kēng kěng": ["硻"],
    "yān yǎn": ["硽"],
    "zhuì chuí duǒ": ["硾"],
    "kōng kòng": ["硿"],
    "zòng cóng": ["碂"],
    "jiān zhàn": ["碊"],
    "lù liù": ["碌", "陆"],
    "què xī": ["碏"],
    "lún lǔn lùn": ["碖"],
    "náo gāng": ["碙"],
    "jié yà": ["碣"],
    "wèi wěi": ["碨"],
    "tí dī": ["碮"],
    "chá chā": ["碴"],
    "qiāo què": ["碻"],
    "sù xiè": ["碿"],
    "liú liù": ["磂", "遛", "鎦", "馏"],
    "sī tí": ["磃"],
    "bàng páng": ["磅"],
    "huá kě gū": ["磆"],
    "wěi kuǐ": ["磈"],
    "xiá qià yà": ["磍"],
    "lián qiān": ["磏"],
    "wèi ái gài": ["磑"],
    "lá lā": ["磖"],
    "áo qiāo": ["磝"],
    "pēng pèng": ["磞", "閛"],
    "yīn yǐn": ["磤"],
    "lěi léi": ["磥"],
    "mó mò": ["磨"],
    "qì zhú": ["磩"],
    "láo luò": ["磱"],
    "pán bō": ["磻"],
    "jí shé": ["磼"],
    "hé qiāo qiào": ["礉"],
    "kè huò": ["礊"],
    "què hú": ["礐"],
    "è qì": ["礘"],
    cǎ: ["礤", "礸"],
    "xián xín": ["礥"],
    "léi lěi lèi": ["礧"],
    "yán yǎn": ["礹"],
    "qí zhǐ": ["祇", "蚔"],
    "bēng fāng": ["祊"],
    "bì mì": ["祕"],
    suàn: ["祘", "笇", "筭", "算", "蒜"],
    "piào piāo": ["票"],
    "jì zhài": ["祭"],
    "shuì lèi": ["祱"],
    "jìn jīn": ["禁"],
    "chán shàn": ["禅"],
    "yáng shāng": ["禓"],
    "zhī zhǐ tí": ["禔"],
    "shàn chán": ["禪"],
    "yú yù ǒu": ["禺"],
    "zǐ zì": ["秄"],
    "chá ná": ["秅"],
    "zhǒng zhòng chóng": ["种"],
    "hào mào": ["秏"],
    "kù kū": ["秙"],
    zū: ["租", "葅"],
    chèng: ["秤", "穪"],
    "huó kuò": ["秮", "秳"],
    "chēng chèn chèng": ["称", "稱"],
    "shì zhì": ["秲", "銴"],
    "fù pū": ["秿"],
    "xùn zè": ["稄"],
    "tú shǔ": ["稌"],
    "zhùn zhǔn": ["稕"],
    "jī qí": ["稘", "綨", "觭"],
    "léng líng": ["稜"],
    "zuì zú sū": ["稡"],
    "xì qiè": ["稧", "郄"],
    "zhǒng zhòng": ["種"],
    "zōng zǒng": ["稯"],
    "xián jiān liàn": ["稴"],
    "zī jiū": ["稵"],
    "jī qǐ": ["稽"],
    ròng: ["穃"],
    "shān cǎn cēn": ["穇"],
    "mén méi": ["穈"],
    "jǐ jì": ["穖"],
    "xiāo rào": ["穘"],
    "zhuō bó": ["穛"],
    "tóng zhǒng zhòng": ["穜"],
    zuō: ["穝"],
    "biāo pāo": ["穮", "藨"],
    "zhuō jué": ["穱"],
    "cuán zàn": ["穳"],
    "kōng kòng kǒng": ["空"],
    "yū yǔ": ["穻"],
    zhǎi: ["窄", "鉙"],
    báo: ["窇", "雹"],
    "kū zhú": ["窋"],
    "jiào liáo liù": ["窌"],
    "wā guī": ["窐"],
    "tiǎo yáo": ["窕"],
    "xūn yìn": ["窨"],
    "yà yē": ["窫"],
    "tián diān yǎn": ["窴"],
    "chāo kē": ["窼"],
    "kuǎn cuàn": ["窽", "窾"],
    "chù qì": ["竐"],
    "qǔ kǒu": ["竘"],
    "jìng zhěn": ["竧"],
    "kǎn kàn": ["竷"],
    "zhú dǔ": ["竺"],
    "lè jīn": ["竻"],
    "zhuì ruì": ["笍"],
    "háng hàng": ["笐"],
    "cén jìn hán": ["笒"],
    "dā xiá nà": ["笚"],
    "zé zuó": ["笮"],
    "lóng lǒng": ["笼", "篭", "籠", "躘", "龓"],
    "zhù zhú": ["筑", "築"],
    "dá dā": ["答", "荅"],
    shāi: ["筛", "篩", "簁", "籭"],
    "yún jūn": ["筠"],
    "láng làng": ["筤", "郎", "阆"],
    "zhì zhǐ": ["筫"],
    o: ["筽"],
    "póu bù fú pú": ["箁"],
    "pái bēi": ["箄"],
    gè: ["箇", "虼", "鉻", "铬"],
    "tái chí": ["箈"],
    "guǎi dài": ["箉"],
    "zhào dào": ["箌"],
    "jīng qìng": ["箐"],
    "lín lǐn": ["箖"],
    "jùn qūn": ["箘"],
    "shī yí": ["箷", "釶"],
    "yuē yào chuò": ["箹"],
    "xiāo shuò qiào": ["箾"],
    "gōng gǎn lǒng": ["篢"],
    "páng péng": ["篣"],
    "zhuó huò": ["篧"],
    "jiǎn jiān": ["篯"],
    "dí zhú": ["篴"],
    "zān cēn cǎn": ["篸"],
    "zhuàn suǎn zuàn": ["篹"],
    "piǎo biāo": ["篻"],
    "guó guì": ["簂"],
    "cè jí": ["簎"],
    "mì miè": ["簚"],
    "shāi sī": ["簛"],
    "sǔn zhuàn": ["簨"],
    "gàn gǎn": ["簳"],
    "bò bǒ": ["簸"],
    "bó bù": ["簿"],
    shi: ["籂"],
    "zhēn jiān": ["籈"],
    "zhuàn zuǎn": ["籑"],
    "fān pān biān": ["籓"],
    "sǒu shǔ": ["籔"],
    zuǎn: ["籫", "繤", "纂", "纉", "纘", "缵"],
    nǚ: ["籹", "釹", "钕"],
    "shā chǎo": ["粆"],
    "kāng jīng": ["粇"],
    fěn: ["粉", "黺"],
    cū: ["粗", "觕", "麁", "麄", "麤"],
    "nián zhān": ["粘"],
    "cè sè": ["粣"],
    "zhōu yù": ["粥"],
    "shēn sǎn": ["糁"],
    "biān biǎn": ["糄", "萹"],
    miàn: ["糆", "面", "靣", "麪", "麫", "麵", "麺"],
    "hú hū hù": ["糊"],
    "gǔ gòu": ["糓"],
    "mí méi": ["糜"],
    "sǎn shēn": ["糝", "糣"],
    zāo: ["糟", "蹧", "遭", "醩"],
    "mì sī": ["糸"],
    "jiū jiǔ": ["糺"],
    "xì jì": ["系", "繫"],
    "zhēng zhěng": ["糽"],
    "chà chǎ": ["紁", "衩"],
    "yuē yāo": ["約", "约"],
    "hóng gōng": ["紅", "红"],
    "hé gē": ["紇", "纥"],
    "wén wèn": ["紋", "纹"],
    fóu: ["紑"],
    "jì jié jiè": ["紒"],
    "pī pí bǐ": ["紕", "纰"],
    "jīn jìn": ["紟"],
    "zhā zā": ["紥", "紮"],
    hā: ["紦"],
    "fū fù": ["紨"],
    "chōu chóu": ["紬"],
    "lèi léi lěi": ["累"],
    "bō bì": ["紴"],
    "tiǎn zhěn": ["紾"],
    "jiōng jiǒng": ["絅"],
    "jié jiē": ["結", "结", "节"],
    "guà kuā": ["絓"],
    "bǎi mò": ["絔"],
    "gēng huán": ["絙"],
    "jié xié": ["絜"],
    "quán shuān": ["絟"],
    "gǎi ǎi": ["絠"],
    "luò lào": ["絡", "络"],
    "bīng bēng pēng": ["絣"],
    "gěi jǐ": ["給", "给"],
    "tóng tōng dòng": ["絧"],
    "tiào diào dào": ["絩"],
    "lěi lèi léi": ["絫"],
    "gāi hài": ["絯"],
    "chī zhǐ": ["絺"],
    "wèn miǎn mán wàn": ["絻"],
    "huán huàn wàn": ["綄"],
    "qīn xiān": ["綅"],
    "tì tí": ["綈"],
    "yán xiàn": ["綖"],
    "zōng zèng zòng": ["綜"],
    "chēn lín": ["綝"],
    "zhǔn zhùn": ["綧"],
    "qiàn qīng zhēng": ["綪"],
    "qìng qǐ": ["綮"],
    "lún guān": ["綸", "纶"],
    "chuò chāo": ["綽", "绰"],
    "tián tǎn chān": ["緂"],
    "lǜ lù": ["緑", "绿"],
    "ruǎn ruàn": ["緛"],
    "jí qī": ["緝"],
    "zhòng chóng": ["緟", "重"],
    "miáo máo": ["緢"],
    "xiè yè": ["緤"],
    huǎn: ["緩", "缓", "㬊"],
    "gēng gèng": ["緪", "縆"],
    "tōu xū shū": ["緰"],
    "zōng zòng": ["緵", "繌"],
    "yùn gǔn": ["緷"],
    "guā wō": ["緺"],
    "yùn yūn wēn": ["緼", "縕"],
    "bāng bàng": ["縍"],
    "gǔ hú": ["縎", "鶻"],
    "cī cuò suǒ": ["縒"],
    "cuī shuāi": ["縗"],
    "róng rǒng ròng": ["縙"],
    "zài zēng": ["縡"],
    cài: ["縩", "菜", "蔡"],
    "féng fèng": ["縫"],
    "suō sù": ["縮", "缩"],
    "yǎn yǐn": ["縯", "酓"],
    "zòng zǒng": ["縱", "纵"],
    "zhuàn juàn": ["縳"],
    "mò mù": ["縸", "莫"],
    "piǎo piāo": ["縹", "缥"],
    "fán pó": ["繁"],
    "bēng bèng": ["繃"],
    "móu miù miào liǎo": ["繆"],
    "yáo yóu zhòu": ["繇"],
    "zēng zèng": ["繒", "缯"],
    "jú jué": ["繘"],
    "chuō chuò": ["繛"],
    "zūn zǔn": ["繜"],
    rào: ["繞", "绕", "遶"],
    "chǎn chán": ["繟"],
    "huì huí": ["繢", "缋", "藱"],
    "qiāo sāo zǎo": ["繰"],
    "jiǎo zhuó": ["繳", "缴"],
    "dàn tán chán": ["繵"],
    nǒng: ["繷"],
    "pú fú": ["纀"],
    "yào lì": ["纅"],
    "rǎng xiāng": ["纕"],
    "lí sǎ xǐ lǐ": ["纚"],
    "xiān qiàn": ["纤"],
    "jīng jìng": ["经"],
    "tí tì": ["绨"],
    "bēng běng bèng": ["绷"],
    "zōng zèng": ["综"],
    "jī qī": ["缉"],
    "wēn yùn yūn": ["缊"],
    "fèng féng": ["缝"],
    "shuāi cuī suī": ["缞"],
    "miù móu liáo miào mù": ["缪"],
    "qiāo sāo": ["缲"],
    fǒu: ["缶", "缹", "缻", "雬", "鴀"],
    "bà ba pí": ["罢", "罷"],
    "guà guǎi": ["罫"],
    "yáng xiáng": ["羊", "羏"],
    "měi gāo": ["羙"],
    "yì xī": ["羛"],
    "qiǎng qiān": ["羟"],
    "qiāng kòng": ["羫"],
    "qián xián yán": ["羬"],
    nóu: ["羺"],
    "hóng gòng": ["羾"],
    "pī bì pō": ["翍"],
    "qú yù": ["翑"],
    ké: ["翗"],
    "qiào qiáo": ["翘"],
    "zhái dí": ["翟"],
    "dào zhōu": ["翢"],
    "hóu qú": ["翵"],
    shuǎ: ["耍"],
    "ruǎn nuò": ["耎"],
    "ér nài": ["耏"],
    "zhuān duān": ["耑"],
    "pá bà": ["耙"],
    "chí sì": ["耛"],
    "qù chú": ["耝"],
    "lún lǔn": ["耣"],
    "jí jiè": ["耤"],
    "tāng tǎng": ["耥"],
    pǎng: ["耪", "覫"],
    "zhá zé": ["耫"],
    "yē yé": ["耶"],
    "yún yíng": ["耺"],
    "wà tuǐ zhuó": ["聉"],
    "ér nǜ": ["聏"],
    "tiē zhé": ["聑"],
    "dǐ zhì": ["聜"],
    qié: ["聺"],
    "nǐ jiàn": ["聻"],
    "lèi lē": ["肋"],
    cào: ["肏", "襙", "鄵", "鼜"],
    "bó dí": ["肑"],
    "xiào xiāo": ["肖"],
    "dù dǔ": ["肚"],
    chāi: ["肞", "釵", "钗"],
    "hán qín hàn": ["肣"],
    "pàng pán pàn": ["肨", "胖"],
    "zhūn chún": ["肫"],
    āng: ["肮", "骯"],
    "yù yō": ["育"],
    "pí bǐ bì": ["肶"],
    "fèi bì": ["胇"],
    "bèi bēi": ["背"],
    "fèi zǐ": ["胏"],
    "píng pēng": ["胓", "苹"],
    "fū fú zhǒu": ["胕"],
    "shèng shēng": ["胜"],
    kuà: ["胯", "跨", "骻"],
    "gǎi hǎi": ["胲"],
    "gē gé gā": ["胳"],
    "néng nài": ["能"],
    "guī kuì": ["胿"],
    "mài mò": ["脉"],
    "zāng zàng": ["脏"],
    "jiǎo jué": ["脚", "角"],
    cuǒ: ["脞"],
    "de te": ["脦"],
    "zuī juān": ["脧"],
    něi: ["脮", "腇", "餒", "馁", "鮾", "鯘"],
    "pú fǔ": ["脯"],
    niào: ["脲"],
    shuí: ["脽"],
    guò: ["腂", "過", "鐹"],
    "là xī": ["腊"],
    "yān ā": ["腌"],
    "gāo gào": ["膏"],
    "lù biāo": ["膔"],
    chuái: ["膗"],
    "zhuān chuán chún zhuǎn": ["膞"],
    chuài: ["膪", "踹"],
    "fán pán": ["膰"],
    "wǔ hū": ["膴"],
    "shān dàn": ["膻"],
    tún: ["臀", "臋", "蛌", "豘", "豚", "軘", "霕", "飩", "饨", "魨", "鲀", "黗"],
    "bì bei": ["臂"],
    "là gé": ["臈"],
    "sào sāo": ["臊"],
    nào: ["臑", "閙", "闹", "鬧"],
    "ní luán": ["臡"],
    "qiān xián": ["臤"],
    "guàng jiǒng": ["臦"],
    "guǎng jiǒng": ["臩"],
    "chòu xiù": ["臭"],
    "mián biān": ["臱"],
    "dié zhí": ["臷"],
    "zhī jìn": ["臸"],
    "shè shě": ["舍"],
    pù: ["舖", "舗"],
    "bān bō pán": ["般"],
    kuā: ["舿"],
    "gèn gěn": ["艮"],
    "sè shǎi": ["色"],
    "fú bó": ["艴"],
    "jiāo qiú": ["艽"],
    "chāi chā": ["芆"],
    "sháo què": ["芍"],
    "hù xià": ["芐"],
    "zì zǐ": ["芓"],
    "huì hū": ["芔"],
    "tún chūn": ["芚"],
    "jiè gài": ["芥"],
    "xù zhù": ["芧"],
    "yuán yán": ["芫"],
    "xīn xìn": ["芯"],
    "lún huā": ["芲"],
    "wù hū": ["芴"],
    "gōu gǒu": ["芶"],
    "mào máo": ["芼"],
    "fèi fú": ["芾"],
    "chán yín": ["苂"],
    qiē: ["苆"],
    "sū sù": ["苏"],
    "tiáo sháo": ["苕"],
    "lì jī": ["苙"],
    "kē hē": ["苛"],
    "jù qǔ": ["苣"],
    "ruò rě": ["若"],
    "zhù níng": ["苧"],
    "pā bó": ["苩"],
    xiú: ["苬"],
    "zhǎ zuó": ["苲"],
    "jū chá": ["苴"],
    nié: ["苶"],
    "shēng ruí": ["苼"],
    "qié jiā": ["茄"],
    "zǐ cí": ["茈"],
    "qiàn xī": ["茜"],
    chǎi: ["茝"],
    "fá pèi": ["茷"],
    ráo: ["荛", "蕘", "襓", "饒", "饶"],
    "yíng xíng": ["荥"],
    "qián xún": ["荨", "蕁"],
    "yìn yīn": ["荫"],
    "hé hè": ["荷"],
    "shā suō": ["莎"],
    "péng fēng": ["莑"],
    "shēn xīn": ["莘"],
    "wǎn guān guǎn": ["莞"],
    "yóu sù": ["莤"],
    "shāo xiāo": ["莦", "蛸"],
    "làng liáng": ["莨"],
    "piǎo fú": ["莩"],
    "wèn wǎn miǎn": ["莬"],
    "shì shí": ["莳", "蒔"],
    "tù tú": ["莵"],
    "xiān liǎn": ["莶", "薟"],
    "wǎn yù": ["菀"],
    "zōu chù": ["菆"],
    "lù lǜ": ["菉"],
    "jūn jùn": ["菌"],
    "niè rěn": ["菍"],
    "zī zì zāi": ["菑"],
    "tú tù": ["菟"],
    "jiē shà": ["菨"],
    "qiáo zhǎo": ["菬"],
    "tái zhī chí": ["菭"],
    "fēi fěi": ["菲", "蜚"],
    "qín qīn jīn": ["菳"],
    "zū jù": ["菹", "蒩"],
    "lǐn má": ["菻"],
    "tián tiàn": ["菾"],
    tiē: ["萜", "貼", "贴"],
    "luò là lào luō": ["落"],
    "zhù zhuó zhe": ["著"],
    "shèn rèn": ["葚"],
    "gě gé": ["葛"],
    "jùn suǒ": ["葰"],
    "kuì kuài": ["蒉"],
    "rú ná": ["蒘"],
    "méng mēng měng": ["蒙"],
    "yuán huán": ["蒝"],
    "xú shú": ["蒣"],
    "xí xì": ["蒵"],
    "mì míng": ["蓂"],
    "sōu sǒu": ["蓃"],
    "gài gě hé hài": ["蓋"],
    "yǎo zhuó": ["蓔"],
    "diào tiáo dí": ["蓧"],
    "xū qiū fū": ["蓲"],
    "zí jú": ["蓻"],
    "liǎo lù": ["蓼"],
    xu: ["蓿"],
    "hàn hǎn": ["蔊"],
    "màn wàn mán": ["蔓"],
    "pó bò": ["蔢"],
    "fān fán bō": ["蕃"],
    "hóng hòng": ["蕻"],
    "yù ào": ["薁", "隩"],
    "xí xiào": ["薂"],
    "báo bó bò": ["薄"],
    "cí zī": ["薋"],
    "wàn luàn": ["薍"],
    "kǎo hāo": ["薧"],
    "yuǎn wěi": ["薳"],
    "zhòu chóu": ["薵"],
    "wō mái": ["薶"],
    "xiāo hào": ["藃"],
    "yù xù xū": ["藇"],
    "jiè jí": ["藉"],
    "diào zhuó": ["藋"],
    "cáng zàng": ["藏"],
    lǎ: ["藞"],
    "chú zhū": ["藸"],
    "pín píng": ["蘋"],
    "gān hán": ["虷"],
    "hóng jiàng": ["虹"],
    "huī huǐ": ["虺"],
    "xiā há": ["虾"],
    "mǎ mà mā": ["蚂"],
    "fāng bàng": ["蚄"],
    "bàng bèng": ["蚌"],
    "jué quē": ["蚗"],
    "qín qián": ["蚙"],
    "gōng zhōng": ["蚣"],
    "fǔ fù": ["蚥"],
    "dài dé": ["蚮"],
    "gǒu qú xù": ["蚼"],
    "bǒ pí": ["蚾"],
    "shé yí": ["蛇"],
    tiě: ["蛈", "鉄", "銕", "鐡", "鐵", "铁", "驖"],
    "gé luò": ["蛒"],
    "máng bàng": ["蛖"],
    "yì xǔ": ["蛡"],
    "há gé": ["蛤"],
    "qiè ní": ["蛪"],
    "é yǐ": ["蛾"],
    "zhē zhé": ["蜇"],
    "là zhà": ["蜡"],
    suò: ["蜶", "逤"],
    "yóu qiú": ["蝤"],
    "xiā hā": ["蝦"],
    "xī qī": ["螇"],
    "bī pí": ["螕"],
    "nài něng": ["螚"],
    "hé xiá": ["螛"],
    "guì huǐ": ["螝"],
    "mǎ mā mà": ["螞"],
    "shì zhē": ["螫"],
    "zhì dié": ["螲"],
    "jiàn chán": ["螹"],
    "ma má mò": ["蟆"],
    "mǎng měng": ["蟒"],
    "biē bié": ["蟞"],
    "bēn fèi": ["蟦"],
    "láo liáo": ["蟧"],
    "yín xún": ["蟫"],
    "lí lǐ": ["蠡"],
    "xuè xiě": ["血"],
    "xíng háng hàng héng": ["行"],
    "shuāi cuī": ["衰"],
    "tuó tuō": ["袉"],
    "lǐng líng": ["袊"],
    "bào páo pào": ["袌"],
    "jù jiē": ["袓"],
    "hè kè": ["袔"],
    "yí yì": ["袘", "貤"],
    "nà jué": ["袦"],
    "bèi pī": ["被"],
    "chǐ nuǒ": ["袲"],
    "chǐ qǐ duǒ nuǒ": ["袳"],
    "jiá qiā jié": ["袷"],
    "bó mò": ["袹"],
    "guī guà": ["袿"],
    "liè liě": ["裂"],
    "chéng chěng": ["裎"],
    "jiē gé": ["裓"],
    "dāo chóu": ["裯"],
    "shang cháng": ["裳"],
    "yuān gǔn": ["裷"],
    "yǎn ān": ["裺"],
    "tì xī": ["裼"],
    "fù fú": ["褔"],
    "chǔ zhǔ": ["褚"],
    "tuì tùn": ["褪"],
    lǎi: ["襰"],
    "yào yāo": ["要"],
    "qín tán": ["覃"],
    "jiàn xiàn": ["見", "见"],
    piǎn: ["覑", "諞", "谝", "貵", "𡎚"],
    "piē miè": ["覕"],
    "yíng yǐng": ["覮"],
    "qù qū": ["覰", "覷", "觑"],
    "jiàn biǎn": ["覵"],
    "luó luǎn": ["覶"],
    "zī zuǐ": ["觜"],
    "huà xiè": ["觟"],
    "jiě jiè xiè": ["解", "觧"],
    "xué hù": ["觷"],
    "lì lù": ["觻"],
    tǎo: ["討", "讨"],
    zhùn: ["訰"],
    "zī zǐ": ["訾"],
    "yí dài": ["詒", "诒"],
    xiòng: ["詗", "诇"],
    "diào tiǎo": ["誂"],
    "yí chǐ chì": ["誃"],
    "lǎng làng": ["誏"],
    "ēi éi ěi èi xī": ["誒", "诶"],
    shuà: ["誜"],
    "yǔ yù": ["語", "语", "雨"],
    "shuō shuì yuè": ["說", "说"],
    "shuí shéi": ["誰", "谁"],
    "qū juè": ["誳"],
    "chī lài": ["誺"],
    "nì ná": ["誽"],
    "diào tiáo": ["調"],
    "pǐ bēi": ["諀"],
    "jì jī": ["諅"],
    "zé zuò zhǎ cuò": ["諎"],
    "chù jí": ["諔"],
    "háo xià": ["諕"],
    "lùn lún": ["論", "论"],
    "shì dì": ["諟"],
    "huà guā": ["諣"],
    "xǐ shāi āi": ["諰"],
    "nán nàn": ["諵", "難"],
    miù: ["謬", "谬"],
    zèn: ["譖", "谮"],
    "shí zhì": ["識", "识"],
    "juàn xuān": ["讂"],
    "yí tuī": ["讉"],
    zhán: ["讝"],
    "xǔ hǔ": ["许"],
    "xiáng yáng": ["详"],
    "tiáo diào zhōu": ["调"],
    "chén shèn": ["谌"],
    "mí mèi": ["谜"],
    "màn mán": ["谩"],
    "gǔ yù": ["谷"],
    "huō huò huá": ["豁"],
    "zhì zhài": ["豸"],
    "huān huán": ["貆"],
    "kěn kūn": ["貇"],
    "mò hé": ["貈"],
    "mò hé háo": ["貉"],
    "jù lóu": ["貗"],
    "zé zhài": ["責", "责"],
    "dài tè": ["貸"],
    "bì bēn": ["賁"],
    "jiǎ gǔ jià": ["賈"],
    "xiōng mín": ["賯"],
    càng: ["賶"],
    "zhuàn zuàn": ["賺", "赚"],
    "wàn zhuàn": ["贃"],
    "gàn gòng zhuàng": ["贛"],
    "yuán yùn": ["贠"],
    "bēn bì": ["贲"],
    "jiǎ gǔ": ["贾"],
    zǒu: ["走", "赱", "鯐"],
    "dié tú": ["趃"],
    "jū qiè": ["趄"],
    "qū cù": ["趋", "趨"],
    "jí jié": ["趌"],
    "guā huó": ["趏"],
    "què qì jí": ["趞"],
    "tàng tāng": ["趟"],
    "chuō zhuó": ["趠"],
    "qù cù": ["趣"],
    "yuè tì": ["趯"],
    "bō bào": ["趵"],
    "kuà wù": ["趶"],
    "guì jué": ["趹"],
    "fāng fàng páng": ["趽"],
    "páo bà": ["跁"],
    "qí qǐ": ["跂"],
    "jiàn chén": ["跈"],
    "pǎo páo": ["跑"],
    "diǎn diē tiē": ["跕"],
    "jū jù qiè": ["跙"],
    bǒ: ["跛"],
    "luò lì": ["跞"],
    "dài duò duō chí": ["跢"],
    zhuǎi: ["跩"],
    "bèng pián": ["跰"],
    "tiào táo": ["跳"],
    "shū chōu": ["跾"],
    "liàng liáng": ["踉"],
    "tà tā": ["踏"],
    chǎ: ["蹅", "鑔", "镲"],
    "dí zhí": ["蹢"],
    "dēng dèng": ["蹬", "鐙", "镫"],
    cèng: ["蹭"],
    "dūn cún": ["蹲"],
    "juě jué": ["蹶"],
    liāo: ["蹽"],
    "xiè sǎ": ["躠"],
    tǐ: ["躰", "軆", "骵"],
    "yà zhá gá": ["轧", "軋"],
    "xìn xiàn": ["軐"],
    "fàn guǐ": ["軓"],
    "zhuàn zhuǎn": ["転"],
    "zhóu zhòu": ["軸", "轴"],
    bú: ["轐", "醭", "鳪"],
    "zhuǎn zhuàn zhuǎi": ["转"],
    "zǎi zài": ["载"],
    "niǎn zhǎn": ["辗"],
    "biān bian": ["边"],
    "dào biān": ["辺"],
    "yǐ yí": ["迆", "迤", "迱"],
    "guò guo guō": ["过"],
    "wàng kuāng": ["迋"],
    "hái huán": ["还"],
    "zhè zhèi": ["这"],
    "yuǎn yuàn": ["远"],
    "zhì lì": ["迣"],
    "zhù wǎng": ["迬"],
    "zhuī duī": ["追"],
    "shì kuò": ["适"],
    tòu: ["透"],
    "tōng tòng": ["通"],
    guàng: ["逛"],
    "dǎi dài": ["逮"],
    "suì suí": ["遂"],
    "tí dì": ["遆"],
    "yí wèi": ["遗"],
    "shì dí zhé": ["適"],
    cà: ["遪"],
    "huán hái": ["還"],
    "lí chí": ["邌"],
    "kàng háng": ["邟"],
    "nà nèi nā": ["那"],
    "xié yá yé yú xú": ["邪"],
    "gāi hái": ["郂"],
    "huán xún": ["郇"],
    "chī xī": ["郗"],
    hǎo: ["郝"],
    "lì zhí": ["郦"],
    "xiáo ǎo": ["郩"],
    "dōu dū": ["都"],
    liǎo: ["曢", "鄝", "镽"],
    "zàn cuán cuó": ["酂", "酇"],
    "dīng dǐng": ["酊"],
    "cù zuò": ["酢"],
    "fā pō": ["酦"],
    "shāi shī": ["酾"],
    niàng: ["酿", "醸"],
    "qiú chōu": ["醔"],
    "pō fā": ["醗", "醱"],
    "chǎn chěn": ["醦"],
    "yàn liǎn xiān": ["醶"],
    "niàng niáng": ["釀"],
    "lǐ li": ["里"],
    "lí xǐ xī": ["釐"],
    "liǎo liào": ["釕"],
    "dīng dìng": ["釘", "钉"],
    "qiǎo jiǎo": ["釥"],
    "yú huá": ["釪"],
    "huá wū": ["釫"],
    "rì rèn jiàn": ["釰", "釼"],
    "dì dài": ["釱"],
    "pī zhāo": ["釽"],
    "yá yé": ["釾"],
    "bǎ pá": ["鈀", "钯"],
    "tā tuó": ["鉈", "铊"],
    běi: ["鉳"],
    "bǐng píng": ["鉼"],
    "hā kē": ["鉿", "铪"],
    chòng: ["銃", "铳"],
    "xiǎng jiōng": ["銄"],
    "yù sì": ["銉"],
    "xù huì": ["銊"],
    "rén rěn": ["銋"],
    "shàn shuò": ["銏"],
    "chì lì": ["銐"],
    "xiǎn xǐ": ["銑", "铣"],
    "hóu xiàng": ["銗"],
    "diào tiáo yáo": ["銚"],
    "xiān kuò tiǎn guā": ["銛", "銽", "铦"],
    "zhé niè": ["銸"],
    "zhōng yōng": ["銿"],
    "tōu tù dòu": ["鋀"],
    "méi méng": ["鋂"],
    "wàn jiǎn": ["鋄", "鎫"],
    "tǐng dìng": ["鋌", "铤"],
    "juān jiān cuān": ["鋑"],
    "sī tuó": ["鋖"],
    "juān xuān juàn": ["鋗"],
    "wú huá wū": ["鋘"],
    "zhuó chuò": ["鋜"],
    "xíng xìng jīng": ["鋞"],
    "jū jú": ["鋦", "锔"],
    "zuì niè": ["鋷"],
    "yuān yuǎn wǎn wān": ["鋺"],
    "gāng gàng": ["鋼", "钢"],
    zhuī: ["錐", "锥", "騅", "骓", "鵻"],
    ā: ["錒", "锕"],
    "cuō chā": ["鎈"],
    "suǒ sè": ["鎍"],
    "yáo zú": ["鎐"],
    "yè tà gé": ["鎑"],
    "qiāng chēng": ["鎗"],
    "gé lì": ["鎘", "镉", "鬲"],
    "bī pī bì": ["鎞"],
    "gǎo hào": ["鎬"],
    "zú chuò": ["鏃"],
    "xiū xiù": ["鏅"],
    "shòu sōu": ["鏉"],
    "dí dī": ["鏑", "镝"],
    "qiāo sǎn càn": ["鏒"],
    "lù áo": ["鏕"],
    "tāng táng": ["鏜"],
    "jiàn zàn": ["鏩"],
    "huì suì ruì": ["鏸"],
    "qiǎng qiāng": ["鏹", "镪"],
    "sǎn xiàn sà": ["鏾"],
    "jiǎn jiàn": ["鐧", "锏"],
    "dāng chēng": ["鐺", "铛"],
    "zuān zuàn": ["鑽"],
    "sà xì": ["钑"],
    "yào yuè": ["钥"],
    "tǒu dǒu": ["钭"],
    "zuàn zuān": ["钻"],
    "qiān yán": ["铅"],
    "pí pī": ["铍"],
    "yáo diào tiáo": ["铫"],
    "tāng tàng": ["铴"],
    "pù pū": ["铺"],
    "tán xiān": ["锬"],
    "liù liú": ["镏"],
    "hào gǎo": ["镐"],
    "táng tāng": ["镗"],
    "tán chán xín": ["镡"],
    "huò shǎn": ["閄"],
    "hàn bì": ["閈", "闬"],
    "kāng kàng": ["閌", "闶"],
    "xián jiàn jiān jiǎn": ["閒"],
    "xiā xiǎ": ["閕"],
    "xiǎ kě": ["閜"],
    "biàn guān": ["閞"],
    "hé gé": ["閤", "颌"],
    "hòng xiàng": ["閧"],
    "sē xī": ["閪"],
    "tíng tǐng": ["閮"],
    "è yān": ["閼", "阏"],
    "hòng juǎn xiàng": ["闂"],
    "bǎn pàn": ["闆"],
    "dū shé": ["闍", "阇"],
    "què quē": ["闕"],
    "tāng táng chāng": ["闛"],
    "kàn hǎn": ["闞", "阚"],
    "xì sè tà": ["闟"],
    "mēn mèn": ["闷"],
    "quē què": ["阙"],
    "yán diàn": ["阽"],
    "ā ē": ["阿"],
    "bēi pō pí": ["陂"],
    "yàn yǎn": ["隁"],
    "yú yáo shù": ["隃"],
    "lóng lōng": ["隆"],
    "duì zhuì": ["隊"],
    "suí duò": ["隋"],
    "gāi qí ái": ["隑"],
    "huī duò": ["隓", "隳"],
    "wěi kuí": ["隗"],
    "lì dài": ["隸"],
    "zhuī cuī wéi": ["隹"],
    "hè hú": ["隺", "鶮"],
    "jùn juàn": ["隽", "雋"],
    "nán nàn nuó": ["难"],
    "què qiāo qiǎo": ["雀"],
    "guàn huán": ["雚"],
    "guī xī": ["雟"],
    "sè xí": ["雭"],
    án: ["雸"],
    "wù méng": ["雺"],
    tèng: ["霯"],
    "lù lòu": ["露"],
    mái: ["霾"],
    "jìng liàng": ["靚"],
    "gé jí": ["革"],
    bǎ: ["靶"],
    "yāng yàng": ["鞅"],
    "gé tà sǎ": ["鞈"],
    "biān yìng": ["鞕"],
    "qiào shāo": ["鞘"],
    "juān xuān": ["鞙"],
    "shàng zhǎng": ["鞝"],
    "pí bǐng bì bēi": ["鞞"],
    la: ["鞡"],
    "xiè dié": ["鞢"],
    ēng: ["鞥"],
    "móu mù": ["鞪"],
    "bì bǐng": ["鞸"],
    "mèi wà": ["韎"],
    rǒu: ["韖"],
    "shè xiè": ["韘"],
    "yùn wēn": ["韫"],
    "dùn dú": ["頓", "顿"],
    duǐ: ["頧"],
    luō: ["頱"],
    "bīn pín": ["頻"],
    yóng: ["顒", "颙", "鰫"],
    mān: ["顢", "颟"],
    "jǐng gěng": ["颈"],
    "jié xié jiá": ["颉"],
    "kē ké": ["颏"],
    "pín bīn": ["频"],
    "chàn zhàn": ["颤"],
    "fēng fěng": ["風", "风"],
    "biāo diū": ["颩"],
    "bá fú": ["颰"],
    "sāo sōu": ["颾"],
    "liù liáo": ["飂"],
    "shí sì yì": ["食"],
    "yǎng juàn": ["飬"],
    "zhù tǒu": ["飳"],
    "yí sì": ["飴"],
    "zuò zé zhā": ["飵"],
    tiè: ["飻", "餮"],
    "xiǎng náng": ["饟"],
    "táng xíng": ["饧"],
    "gē le": ["饹"],
    "chā zha": ["馇"],
    "náng nǎng": ["馕"],
    "yūn wò": ["馧"],
    "zhī shì": ["馶"],
    "xìn jìn": ["馸"],
    "kuài jué": ["駃"],
    zǎng: ["駔", "驵"],
    "tái dài": ["駘"],
    "xún xuān": ["駨"],
    "liáng láng": ["駺"],
    piàn: ["騗", "騙", "骗", "魸"],
    "dài tái": ["骀"],
    "sāo sǎo": ["骚"],
    "gǔ gū": ["骨"],
    "bèi mó": ["骳"],
    "xiāo qiāo": ["骹"],
    "bǎng pǎng": ["髈"],
    "bó jué": ["髉"],
    "bì pǒ": ["髲"],
    "máo méng": ["髳"],
    "kuò yuè": ["髺"],
    "bā bà": ["魞", "鲃"],
    "jì cǐ": ["鮆"],
    "bó bà": ["鮊"],
    "zhǎ zhà": ["鮓", "鲊"],
    "chóu dài": ["鮘"],
    "luò gé": ["鮥"],
    "guī xié wā kuí": ["鮭"],
    "xiān xiǎn": ["鮮", "鲜"],
    "pū bū": ["鯆"],
    "yì sī": ["鯣"],
    "bà bó": ["鲌"],
    "guī xié": ["鲑"],
    "sāi xǐ": ["鳃"],
    "niǎo diǎo": ["鳥"],
    "diāo zhāo": ["鳭"],
    "gān hàn yàn": ["鳱"],
    "fū guī": ["鳺"],
    "jiān qiān zhān": ["鳽"],
    "hé jiè": ["鶡"],
    "piān biǎn": ["鶣"],
    "chuàn zhì": ["鶨"],
    "cāng qiāng": ["鶬"],
    "sǔn xùn": ["鶽"],
    "biāo páo": ["麃"],
    "zhù cū": ["麆"],
    "jūn qún": ["麇", "麕"],
    chi: ["麶"],
    "mó me": ["麼"],
    "mó me ma": ["麽"],
    "mí mǒ": ["麿"],
    "dàn shèn": ["黮"],
    "zhěn yān": ["黰"],
    "dǎn zhǎn": ["黵"],
    "miǎn mǐn měng": ["黾"],
    hōu: ["齁"],
    nàng: ["齉"],
    "qí jì zī zhāi": ["齐"],
    "yín kěn yǎn": ["龂"],
    "yín kěn": ["龈"],
    "gōng wò": ["龏"],
    "guī jūn qiū": ["龜", "龟"],
    "kuí wā": ["䖯"],
    lōu: ["䁖"],
    "ōu qū": ["𫭟"],
    "lóu lǘ": ["𦝼"],
    "gǎ gā gá": ["嘎"],
    "wā guà": ["坬"],
    "zhǐ dǐ": ["茋"],
    "gǒng hóng": ["硔"],
    "yáo xiào": ["滧"]
  };
  const DICT1 = new FastDictFactory();
  Object.keys(map).forEach((key) => {
    const chars = map[key];
    for (let char of chars) {
      DICT1.set(char, key);
    }
  });
  const InitialList = [
    "zh",
    "ch",
    "sh",
    "z",
    "c",
    "s",
    "b",
    "p",
    "m",
    "f",
    "d",
    "t",
    "n",
    "l",
    "g",
    "k",
    "h",
    "j",
    "q",
    "x",
    "r",
    "y",
    "w",
    ""
  ];
  const SpecialInitialList = ["j", "q", "x"];
  const SpecialFinalList = [
    "uān",
    "uán",
    "uǎn",
    "uàn",
    "uan",
    "uē",
    "ué",
    "uě",
    "uè",
    "ue",
    "ūn",
    "ún",
    "ǔn",
    "ùn",
    "un",
    "ū",
    "ú",
    "ǔ",
    "ù",
    "u"
  ];
  const SpecialFinalMap = {
    uān: "üān",
    uán: "üán",
    uǎn: "üǎn",
    uàn: "üàn",
    uan: "üan",
    uē: "üē",
    ué: "üé",
    uě: "üě",
    uè: "üè",
    ue: "üe",
    ūn: "ǖn",
    ún: "ǘn",
    ǔn: "ǚn",
    ùn: "ǜn",
    un: "ün",
    ū: "ǖ",
    ú: "ǘ",
    ǔ: "ǚ",
    ù: "ǜ",
    u: "ü"
  };
  const doubleFinalList = [
    "ia",
    "ian",
    "iang",
    "iao",
    "ie",
    "iu",
    "iong",
    "ua",
    "uai",
    "uan",
    "uang",
    "ue",
    "ui",
    "uo",
    "üan",
    "üe",
    "van",
    "ve"
  ];
  const Numbers = {
    一: "yì",
    二: "èr",
    三: "sān",
    四: "sì",
    五: "wǔ",
    六: "liù",
    七: "qī",
    八: "bā",
    九: "jiǔ",
    十: "shí",
    百: "bǎi",
    千: "qiān",
    万: "wàn",
    亿: "yì",
    单: "dān",
    两: "liǎng",
    双: "shuāng",
    多: "duō",
    几: "jǐ",
    十一: "shí yī",
    零一: "líng yī",
    第一: "dì yī",
    一十: "yī shí",
    一十一: "yī shí yī"
  };
  const NumberWordMap = {
    重: "chóng",
    行: "háng",
    斗: "dǒu",
    更: "gēng"
  };
  function genNumberDict() {
    const dict = {
      零一: "líng yī",
      "〇一": "líng yī",
      十一: "shí yī",
      一十: "yī shí",
      第一: "dì yī",
      一十一: "yī shí yī"
    };
    for (let number2 in Numbers) {
      for (let key in NumberWordMap) {
        const word = `${number2}${key}`;
        const pinyin2 = `${Numbers[number2]} ${NumberWordMap[key]}`;
        dict[word] = pinyin2;
      }
    }
    return dict;
  }
  const NumberDict = genNumberDict();
  const PatternNumberDict = Object.keys(NumberDict).map((key) => ({
    zh: key,
    pinyin: NumberDict[key],
    probability: 1e-12,
    length: stringLength(key),
    priority: Priority.Normal,
    dict: Symbol("rule")
  }));
  const toneSandhiMap = {
    // 说不说，说一说，叠词之间发音为轻声
    不: {
      bú: [4]
      // "不" 后面跟 4 声时，变调为 2 声
    },
    一: {
      yí: [4],
      yì: [1, 2, 3]
    }
  };
  const toneSandhiIgnoreSuffix = {
    不: ["的", "而", "之", "后", "也", "还", "地"],
    一: ["的", "而", "之", "后", "也", "还", "是"]
  };
  const toneSandhiList = Object.keys(toneSandhiMap);
  function processToneSandhi(cur, pre, next) {
    if (toneSandhiList.indexOf(cur) === -1) {
      return getSingleWordPinyin(cur);
    }
    if (pre === next && pre && getSingleWordPinyin(pre) !== pre) {
      return getPinyinWithoutTone(getSingleWordPinyin(cur));
    }
    if (next && !toneSandhiIgnoreSuffix[cur].includes(next)) {
      const nextPinyin = getSingleWordPinyin(next);
      if (nextPinyin !== next) {
        const nextTone = getNumOfTone(nextPinyin);
        const pinyinMap = toneSandhiMap[cur];
        for (let pinyin2 in pinyinMap) {
          const tones = pinyinMap[pinyin2];
          if (tones.indexOf(Number(nextTone)) !== -1) {
            return pinyin2;
          }
        }
      }
    }
  }
  function processToneSandhiLiao(cur, pre) {
    if (cur === "了" && (!pre || !DICT1.get(pre))) {
      return "liǎo";
    }
  }
  function processReduplicationChar(cur, pre) {
    if (cur === "々") {
      if (!pre || !DICT1.get(pre)) {
        return "tóng";
      } else {
        return DICT1.get(pre).split(" ")[0];
      }
    }
  }
  function processSepecialPinyin(cur, pre, next) {
    return processReduplicationChar(cur, pre) || processToneSandhiLiao(cur, pre) || processToneSandhi(cur, pre, next) || getSingleWordPinyin(cur);
  }
  const Surnames = {
    南宫: "nán gōng",
    第五: "dì wǔ",
    万俟: "mò qí",
    司马: "sī mǎ",
    上官: "shàng guān",
    欧阳: "ōu yáng",
    夏侯: "xià hóu",
    诸葛: "zhū gě",
    闻人: "wén rén",
    东方: "dōng fāng",
    赫连: "hè lián",
    皇甫: "huáng fǔ",
    尉迟: "yù chí",
    公羊: "gōng yáng",
    澹台: "tán tái",
    公冶: "gōng yě",
    宗政: "zōng zhèng",
    濮阳: "pú yáng",
    淳于: "chún yú",
    太叔: "tài shū",
    申屠: "shēn tú",
    公孙: "gōng sūn",
    仲孙: "zhòng sūn",
    轩辕: "xuān yuán",
    令狐: "líng hú",
    钟离: "zhōng lí",
    宇文: "yǔ wén",
    长孙: "zhǎng sūn",
    慕容: "mù róng",
    鲜于: "xiān yú",
    闾丘: "lǘ qiū",
    司徒: "sī tú",
    司空: "sī kōng",
    亓官: "qí guān",
    司寇: "sī kòu",
    仉督: "zhǎng dū",
    子车: "zǐ jū",
    颛孙: "zhuān sūn",
    端木: "duān mù",
    巫马: "wū mǎ",
    公西: "gōng xī",
    漆雕: "qī diāo",
    乐正: "yuè zhèng",
    壤驷: "rǎng sì",
    公良: "gōng liáng",
    拓跋: "tuò bá",
    夹谷: "jiá gǔ",
    宰父: "zǎi fǔ",
    榖梁: "gǔ liáng",
    段干: "duàn gān",
    百里: "bǎi lǐ",
    东郭: "dōng guō",
    南门: "nán mén",
    呼延: "hū yán",
    羊舌: "yáng shé",
    梁丘: "liáng qiū",
    左丘: "zuǒ qiū",
    东门: "dōng mén",
    西门: "xī mén",
    句龙: "gōu lóng",
    毌丘: "guàn qiū",
    赵: "zhào",
    钱: "qián",
    孙: "sūn",
    李: "lǐ",
    周: "zhōu",
    吴: "wú",
    郑: "zhèng",
    王: "wáng",
    冯: "féng",
    陈: "chén",
    褚: "chǔ",
    卫: "wèi",
    蒋: "jiǎng",
    沈: "shěn",
    韩: "hán",
    杨: "yáng",
    朱: "zhū",
    秦: "qín",
    尤: "yóu",
    许: "xǔ",
    何: "hé",
    吕: "lǚ",
    施: "shī",
    张: "zhāng",
    孔: "kǒng",
    曹: "cáo",
    严: "yán",
    华: "huà",
    金: "jīn",
    魏: "wèi",
    陶: "táo",
    姜: "jiāng",
    戚: "qī",
    谢: "xiè",
    邹: "zōu",
    喻: "yù",
    柏: "bǎi",
    水: "shuǐ",
    窦: "dòu",
    章: "zhāng",
    云: "yún",
    苏: "sū",
    潘: "pān",
    葛: "gě",
    奚: "xī",
    范: "fàn",
    彭: "péng",
    郎: "láng",
    鲁: "lǔ",
    韦: "wéi",
    昌: "chāng",
    马: "mǎ",
    苗: "miáo",
    凤: "fèng",
    花: "huā",
    方: "fāng",
    俞: "yú",
    任: "rén",
    袁: "yuán",
    柳: "liǔ",
    酆: "fēng",
    鲍: "bào",
    史: "shǐ",
    唐: "táng",
    费: "fèi",
    廉: "lián",
    岑: "cén",
    薛: "xuē",
    雷: "léi",
    贺: "hè",
    倪: "ní",
    汤: "tāng",
    滕: "téng",
    殷: "yīn",
    罗: "luó",
    毕: "bì",
    郝: "hǎo",
    邬: "wū",
    安: "ān",
    常: "cháng",
    乐: "yuè",
    于: "yú",
    时: "shí",
    傅: "fù",
    皮: "pí",
    卞: "biàn",
    齐: "qí",
    康: "kāng",
    伍: "wǔ",
    余: "yú",
    元: "yuán",
    卜: "bǔ",
    顾: "gù",
    孟: "mèng",
    平: "píng",
    黄: "huáng",
    和: "hé",
    穆: "mù",
    萧: "xiāo",
    尹: "yǐn",
    姚: "yáo",
    邵: "shào",
    湛: "zhàn",
    汪: "wāng",
    祁: "qí",
    毛: "máo",
    禹: "yǔ",
    狄: "dí",
    米: "mǐ",
    贝: "bèi",
    明: "míng",
    臧: "zāng",
    计: "jì",
    伏: "fú",
    成: "chéng",
    戴: "dài",
    谈: "tán",
    宋: "sòng",
    茅: "máo",
    庞: "páng",
    熊: "xióng",
    纪: "jǐ",
    舒: "shū",
    屈: "qū",
    项: "xiàng",
    祝: "zhù",
    董: "dǒng",
    梁: "liáng",
    杜: "dù",
    阮: "ruǎn",
    蓝: "lán",
    闵: "mǐn",
    席: "xí",
    季: "jì",
    麻: "má",
    强: "qiáng",
    贾: "jiǎ",
    路: "lù",
    娄: "lóu",
    危: "wēi",
    江: "jiāng",
    童: "tóng",
    颜: "yán",
    郭: "guō",
    梅: "méi",
    盛: "shèng",
    林: "lín",
    刁: "diāo",
    钟: "zhōng",
    徐: "xú",
    邱: "qiū",
    骆: "luò",
    高: "gāo",
    夏: "xià",
    蔡: "cài",
    田: "tián",
    樊: "fán",
    胡: "hú",
    凌: "líng",
    霍: "huò",
    虞: "yú",
    万: "wàn",
    支: "zhī",
    柯: "kē",
    昝: "zǎn",
    管: "guǎn",
    卢: "lú",
    莫: "mò",
    经: "jīng",
    房: "fáng",
    裘: "qiú",
    缪: "miào",
    干: "gān",
    解: "xiè",
    应: "yīng",
    宗: "zōng",
    丁: "dīng",
    宣: "xuān",
    贲: "bēn",
    邓: "dèng",
    郁: "yù",
    单: "shàn",
    杭: "háng",
    洪: "hóng",
    包: "bāo",
    诸: "zhū",
    左: "zuǒ",
    石: "shí",
    崔: "cuī",
    吉: "jí",
    钮: "niǔ",
    龚: "gōng",
    程: "chéng",
    嵇: "jī",
    邢: "xíng",
    滑: "huá",
    裴: "péi",
    陆: "lù",
    荣: "róng",
    翁: "wēng",
    荀: "xún",
    羊: "yáng",
    於: "yū",
    惠: "huì",
    甄: "zhēn",
    曲: "qū",
    家: "jiā",
    封: "fēng",
    芮: "ruì",
    羿: "yì",
    储: "chǔ",
    靳: "jìn",
    汲: "jí",
    邴: "bǐng",
    糜: "mí",
    松: "sōng",
    井: "jǐng",
    段: "duàn",
    富: "fù",
    巫: "wū",
    乌: "wū",
    焦: "jiāo",
    巴: "bā",
    弓: "gōng",
    牧: "mù",
    隗: "wěi",
    山: "shān",
    谷: "gǔ",
    车: "chē",
    侯: "hóu",
    宓: "mì",
    蓬: "péng",
    全: "quán",
    郗: "xī",
    班: "bān",
    仰: "yǎng",
    秋: "qiū",
    仲: "zhòng",
    伊: "yī",
    宫: "gōng",
    宁: "nìng",
    仇: "qiú",
    栾: "luán",
    暴: "bào",
    甘: "gān",
    钭: "tǒu",
    厉: "lì",
    戎: "róng",
    祖: "zǔ",
    武: "wǔ",
    符: "fú",
    刘: "liú",
    景: "jǐng",
    詹: "zhān",
    束: "shù",
    龙: "lóng",
    叶: "yè",
    幸: "xìng",
    司: "sī",
    韶: "sháo",
    郜: "gào",
    黎: "lí",
    蓟: "jì",
    薄: "bó",
    印: "yìn",
    宿: "sù",
    白: "bái",
    怀: "huái",
    蒲: "pú",
    邰: "tái",
    从: "cóng",
    鄂: "è",
    索: "suǒ",
    咸: "xián",
    籍: "jí",
    赖: "lài",
    卓: "zhuó",
    蔺: "lìn",
    屠: "tú",
    蒙: "méng",
    池: "chí",
    乔: "qiáo",
    阴: "yīn",
    鬱: "yù",
    胥: "xū",
    能: "nài",
    苍: "cāng",
    双: "shuāng",
    闻: "wén",
    莘: "shēn",
    党: "dǎng",
    翟: "zhái",
    谭: "tán",
    贡: "gòng",
    劳: "láo",
    逄: "páng",
    姬: "jī",
    申: "shēn",
    扶: "fú",
    堵: "dǔ",
    冉: "rǎn",
    宰: "zǎi",
    郦: "lì",
    雍: "yōng",
    郤: "xì",
    璩: "qú",
    桑: "sāng",
    桂: "guì",
    濮: "pú",
    牛: "niú",
    寿: "shòu",
    通: "tōng",
    边: "biān",
    扈: "hù",
    燕: "yān",
    冀: "jì",
    郏: "jiá",
    浦: "pǔ",
    尚: "shàng",
    农: "nóng",
    温: "wēn",
    别: "bié",
    庄: "zhuāng",
    晏: "yàn",
    柴: "chái",
    瞿: "qú",
    阎: "yán",
    充: "chōng",
    慕: "mù",
    连: "lián",
    茹: "rú",
    习: "xí",
    宦: "huàn",
    艾: "ài",
    鱼: "yú",
    容: "róng",
    向: "xiàng",
    古: "gǔ",
    易: "yì",
    慎: "shèn",
    戈: "gē",
    廖: "liào",
    庾: "yǔ",
    终: "zhōng",
    暨: "jì",
    居: "jū",
    衡: "héng",
    步: "bù",
    都: "dū",
    耿: "gěng",
    满: "mǎn",
    弘: "hóng",
    匡: "kuāng",
    国: "guó",
    文: "wén",
    寇: "kòu",
    广: "guǎng",
    禄: "lù",
    阙: "quē",
    东: "dōng",
    欧: "ōu",
    殳: "shū",
    沃: "wò",
    利: "lì",
    蔚: "wèi",
    越: "yuè",
    夔: "kuí",
    隆: "lóng",
    师: "shī",
    巩: "gǒng",
    厍: "shè",
    聂: "niè",
    晁: "cháo",
    勾: "gōu",
    敖: "áo",
    融: "róng",
    冷: "lěng",
    訾: "zī",
    辛: "xīn",
    阚: "kàn",
    那: "nā",
    简: "jiǎn",
    饶: "ráo",
    空: "kōng",
    曾: "zēng",
    母: "mǔ",
    沙: "shā",
    乜: "niè",
    养: "yǎng",
    鞠: "jū",
    须: "xū",
    丰: "fēng",
    巢: "cháo",
    关: "guān",
    蒯: "kuǎi",
    相: "xiàng",
    查: "zhā",
    后: "hòu",
    荆: "jīng",
    红: "hóng",
    游: "yóu",
    竺: "zhú",
    权: "quán",
    逯: "lù",
    盖: "gě",
    益: "yì",
    桓: "huán",
    公: "gōng",
    牟: "móu",
    哈: "hǎ",
    言: "yán",
    福: "fú",
    肖: "xiāo",
    区: "ōu",
    覃: "qín",
    朴: "piáo",
    繁: "pó",
    员: "yùn",
    句: "gōu",
    要: "yāo",
    过: "guō",
    钻: "zuān",
    谌: "chén",
    折: "shé",
    召: "shào",
    郄: "qiè",
    撒: "sǎ",
    甯: "nìng",
    六: "lù",
    啜: "chuài",
    行: "xíng"
  };
  const PatternSurname = Object.keys(Surnames).map((key) => ({
    zh: key,
    pinyin: Surnames[key],
    probability: 1 + stringLength(key),
    length: stringLength(key),
    priority: Priority.Surname,
    dict: Symbol("surname")
  }));
  const DICT2 = {
    这个: "zhè ge",
    成为: "chéng wéi",
    认为: "rèn wéi",
    作为: "zuò wéi",
    部分: "bù fen",
    要求: "yāo qiú",
    应该: "yīng gāi",
    增长: "zēng zhǎng",
    提供: "tí gōng",
    觉得: "jué de",
    任务: "rèn wu",
    那个: "nà ge",
    称为: "chēng wéi",
    为主: "wéi zhǔ",
    了解: "liǎo jiě",
    处理: "chǔ lǐ",
    皇上: "huáng shang",
    只要: "zhǐ yào",
    大量: "dà liàng",
    力量: "lì liàng",
    几乎: "jī hū",
    干部: "gàn bù",
    目的: "mù dì",
    行为: "xíng wéi",
    只见: "zhǐ jiàn",
    认识: "rèn shi",
    市长: "shì zhǎng",
    师父: "shī fu",
    调查: "diào chá",
    重新: "chóng xīn",
    分为: "fēn wéi",
    知识: "zhī shi",
    导弹: "dǎo dàn",
    质量: "zhì liàng",
    行款: "háng kuǎn",
    行列: "háng liè",
    行话: "háng huà",
    行业: "háng yè",
    隔行: "gé háng",
    在行: "zài háng",
    行家: "háng jia",
    内行: "nèi háng",
    外行: "wài háng",
    同行: "tóng háng",
    本行: "běn háng",
    行伍: "háng wǔ",
    洋行: "yáng háng",
    银行: "yín háng",
    商行: "shāng háng",
    支行: "zhī háng",
    总行: "zǒng háng",
    行情: "háng qíng",
    懂行: "dǒng háng",
    行规: "háng guī",
    行当: "háng dang",
    行货: "háng huò",
    太行: "tài háng",
    入行: "rù háng",
    中行: "zhōng háng",
    农行: "nóng háng",
    工行: "gōng háng",
    建行: "jiàn háng",
    各行: "gè háng",
    行号: "háng hào",
    行高: "háng gāo",
    行首: "háng shǒu",
    行尾: "háng wěi",
    行末: "háng mò",
    行长: "háng cháng",
    行距: "háng jù",
    换行: "huàn háng",
    行会: "háng huì",
    行辈: "háng bèi",
    行道: "háng dào",
    道行: "dào heng",
    参与: "cān yù",
    充分: "chōng fèn",
    尽管: "jǐn guǎn",
    生长: "shēng zhǎng",
    数量: "shù liàng",
    应当: "yīng dāng",
    院长: "yuàn zhǎng",
    强调: "qiáng diào",
    只能: "zhǐ néng",
    音乐: "yīn yuè",
    以为: "yǐ wéi",
    处于: "chǔ yú",
    部长: "bù zhǎng",
    蒙古: "měng gǔ",
    只有: "zhǐ yǒu",
    适当: "shì dàng",
    只好: "zhǐ hǎo",
    成长: "chéng zhǎng",
    高兴: "gāo xìng",
    不了: "bù liǎo",
    产量: "chǎn liàng",
    胖子: "pàng zi",
    显得: "xiǎn de",
    只是: "zhǐ shì",
    似的: "shì de",
    率领: "shuài lǐng",
    改为: "gǎi wéi",
    不禁: "bù jīn",
    成分: "chéng fèn",
    答应: "dā ying",
    少年: "shào nián",
    兴趣: "xìng qù",
    太监: "tài jian",
    休息: "xiū xi",
    校长: "xiào zhǎng",
    更新: "gēng xīn",
    合同: "hé tong",
    喝道: "hè dào",
    重庆: "chóng qìng",
    重建: "chóng jiàn",
    使得: "shǐ de",
    审查: "shěn chá",
    累计: "lěi jì",
    给予: "jǐ yǔ",
    极为: "jí wéi",
    冠军: "guàn jūn",
    仿佛: "fǎng fú",
    头发: "tóu fa",
    投降: "tóu xiáng",
    家长: "jiā zhǎng",
    仔细: "zǐ xì",
    要是: "yào shi",
    将领: "jiàng lǐng",
    含量: "hán liàng",
    更为: "gèng wéi",
    积累: "jī lěi",
    地处: "dì chǔ",
    县长: "xiàn zhǎng",
    少女: "shào nǚ",
    路上: "lù shang",
    只怕: "zhǐ pà",
    能量: "néng liàng",
    储量: "chǔ liàng",
    供应: "gōng yìng",
    挑战: "tiǎo zhàn",
    西藏: "xī zàng",
    记得: "jì de",
    总量: "zǒng liàng",
    当真: "dàng zhēn",
    将士: "jiàng shì",
    差别: "chā bié",
    较为: "jiào wéi",
    长老: "zhǎng lǎo",
    大夫: "dài fu",
    差异: "chā yì",
    懂得: "dǒng de",
    尽量: "jǐn liàng",
    模样: "mú yàng",
    的确: "dí què",
    为首: "wéi shǒu",
    便宜: "pián yi",
    更名: "gēng míng",
    石头: "shí tou",
    州长: "zhōu zhǎng",
    为止: "wéi zhǐ",
    漂亮: "piào liang",
    炮弹: "pào dàn",
    藏族: "zàng zú",
    角色: "jué sè",
    当作: "dàng zuò",
    尽快: "jǐn kuài",
    人为: "rén wéi",
    重复: "chóng fù",
    胡同: "hú tòng",
    差距: "chā jù",
    弟兄: "dì xiong",
    大将: "dà jiàng",
    睡觉: "shuì jiào",
    一觉: "yí jiào",
    团长: "tuán zhǎng",
    队长: "duì zhǎng",
    区长: "qū zhǎng",
    难得: "nán dé",
    丫头: "yā tou",
    会长: "huì zhǎng",
    弟弟: "dì di",
    王爷: "wáng ye",
    重量: "zhòng liàng",
    誉为: "yù wéi",
    家伙: "jiā huo",
    华山: "huà shān",
    椅子: "yǐ zi",
    流量: "liú liàng",
    长大: "zhǎng dà",
    勉强: "miǎn qiǎng",
    会计: "kuài jì",
    过分: "guò fèn",
    济南: "jǐ nán",
    调动: "diào dòng",
    燕京: "yān jīng",
    少将: "shào jiàng",
    中毒: "zhòng dú",
    晓得: "xiǎo de",
    变更: "biàn gēng",
    打更: "dǎ gēng",
    认得: "rèn de",
    苹果: "píng guǒ",
    念头: "niàn tou",
    挣扎: "zhēng zhá",
    三藏: "sān zàng",
    剥削: "bō xuē",
    丞相: "chéng xiàng",
    少量: "shǎo liàng",
    寻思: "xún si",
    夺得: "duó dé",
    干线: "gàn xiàn",
    呼吁: "hū yù",
    处罚: "chǔ fá",
    长官: "zhǎng guān",
    柏林: "bó lín",
    亲戚: "qīn qi",
    身分: "shēn fèn",
    胳膊: "gē bo",
    着手: "zhuó shǒu",
    炸弹: "zhà dàn",
    咳嗽: "ké sou",
    叶子: "yè zi",
    外长: "wài zhǎng",
    供给: "gōng jǐ",
    师长: "shī zhǎng",
    变量: "biàn liàng",
    应有: "yīng yǒu",
    下载: "xià zài",
    乐器: "yuè qì",
    间接: "jiàn jiē",
    底下: "dǐ xià",
    打扮: "dǎ bàn",
    子弹: "zǐ dàn",
    弹药: "dàn yào",
    热量: "rè liàng",
    削弱: "xuē ruò",
    骨干: "gǔ gàn",
    容量: "róng liàng",
    模糊: "mó hu",
    转动: "zhuàn dòng",
    称呼: "chēng hu",
    科长: "kē zhǎng",
    处置: "chǔ zhì",
    着重: "zhuó zhòng",
    着急: "zháo jí",
    强迫: "qiǎng pò",
    庭长: "tíng zhǎng",
    首相: "shǒu xiàng",
    喇嘛: "lǎ ma",
    镇长: "zhèn zhǎng",
    只管: "zhǐ guǎn",
    重重: "chóng chóng",
    免得: "miǎn de",
    着实: "zhuó shí",
    度假: "dù jià",
    真相: "zhēn xiàng",
    相貌: "xiàng mào",
    处分: "chǔ fèn",
    委屈: "wěi qu",
    为期: "wéi qī",
    伯伯: "bó bo",
    伯子: "bǎi zi",
    圈子: "quān zi",
    见识: "jiàn shi",
    笼罩: "lǒng zhào",
    与会: "yù huì",
    都督: "dū du",
    都市: "dū shì",
    成都: "chéng dū",
    首都: "shǒu dū",
    帝都: "dì dū",
    王都: "wáng dū",
    东都: "dōng dū",
    都护: "dū hù",
    都城: "dū chéng",
    建都: "jiàn dū",
    迁都: "qiān dū",
    故都: "gù dū",
    定都: "dìng dū",
    中都: "zhōng dū",
    六安: "lù ān",
    宰相: "zǎi xiàng",
    较量: "jiào liàng",
    对称: "duì chèn",
    总长: "zǒng zhǎng",
    相公: "xiàng gong",
    空白: "kòng bái",
    打量: "dǎ liang",
    水分: "shuǐ fèn",
    舌头: "shé tou",
    没收: "mò shōu",
    行李: "xíng li",
    判处: "pàn chǔ",
    散文: "sǎn wén",
    处境: "chǔ jìng",
    孙子: "sūn zi",
    拳头: "quán tou",
    打发: "dǎ fā",
    组长: "zǔ zhǎng",
    骨头: "gǔ tou",
    宁可: "nìng kě",
    更换: "gēng huàn",
    薄弱: "bó ruò",
    还原: "huán yuán",
    重修: "chóng xiū",
    重来: "chóng lái",
    只顾: "zhǐ gù",
    爱好: "ài hào",
    馒头: "mán tou",
    军长: "jūn zhǎng",
    首长: "shǒu zhǎng",
    厂长: "chǎng zhǎng",
    司长: "sī zhǎng",
    长子: "zhǎng zǐ",
    强劲: "qiáng jìng",
    恰当: "qià dàng",
    头儿: "tóu er",
    站长: "zhàn zhǎng",
    折腾: "zhē teng",
    相处: "xiāng chǔ",
    统率: "tǒng shuài",
    中将: "zhōng jiàng",
    命中: "mìng zhòng",
    名将: "míng jiàng",
    木头: "mù tou",
    动弹: "dòng tan",
    地壳: "dì qiào",
    干活: "gàn huó",
    少爷: "shào ye",
    水量: "shuǐ liàng",
    补给: "bǔ jǐ",
    尾巴: "wěi ba",
    来得: "lái de",
    好奇: "hào qí",
    钥匙: "yào shi",
    当做: "dàng zuò",
    沉着: "chén zhuó",
    哑巴: "yǎ ba",
    车子: "chē zi",
    上将: "shàng jiàng",
    恶心: "ě xīn",
    担子: "dàn zi",
    应届: "yīng jiè",
    主角: "zhǔ jué",
    运转: "yùn zhuǎn",
    兄长: "xiōng zhǎng",
    格式: "gé shì",
    正月: "zhēng yuè",
    营长: "yíng zhǎng",
    当成: "dàng chéng",
    女婿: "nǚ xu",
    咽喉: "yān hóu",
    重阳: "chóng yáng",
    化为: "huà wéi",
    吐蕃: "tǔ bō",
    钻进: "zuān jìn",
    乐队: "yuè duì",
    亮相: "liàng xiàng",
    被子: "bèi zi",
    舍得: "shě de",
    杉木: "shā mù",
    击中: "jī zhòng",
    排长: "pái zhǎng",
    假期: "jià qī",
    分量: "fèn liàng",
    数次: "shù cì",
    提防: "dī fáng",
    吆喝: "yāo he",
    查处: "chá chǔ",
    量子: "liàng zǐ",
    里头: "lǐ tou",
    调研: "diào yán",
    伺候: "cì hou",
    重申: "chóng shēn",
    枕头: "zhěn tou",
    拚命: "pīn mìng",
    社长: "shè zhǎng",
    归还: "guī huán",
    批量: "pī liàng",
    畜牧: "xù mù",
    点着: "diǎn zháo",
    甚为: "shèn wéi",
    小将: "xiǎo jiàng",
    着眼: "zhuó yǎn",
    处死: "chǔ sǐ",
    厌恶: "yàn wù",
    鼓乐: "gǔ yuè",
    树干: "shù gàn",
    秘鲁: "bì lǔ",
    大方: "dà fāng",
    外头: "wài tou",
    班长: "bān zhǎng",
    星宿: "xīng xiù",
    宁愿: "nìng yuàn",
    钦差: "qīn chāi",
    为数: "wéi shù",
    勾当: "gòu dàng",
    削减: "xuē jiǎn",
    间谍: "jiàn dié",
    埋怨: "mán yuàn",
    结实: "jiē shi",
    计量: "jì liáng",
    淹没: "yān mò",
    村长: "cūn zhǎng",
    连长: "lián zhǎng",
    自给: "zì jǐ",
    武将: "wǔ jiàng",
    温差: "wēn chā",
    直奔: "zhí bèn",
    供求: "gōng qiú",
    剂量: "jì liàng",
    道长: "dào zhǎng",
    泄露: "xiè lòu",
    王八: "wáng ba",
    切割: "qiē gē",
    间隔: "jiàn gé",
    一晃: "yì huǎng",
    长假: "cháng jià",
    令狐: "líng hú",
    为害: "wéi hài",
    句子: "jù zi",
    偿还: "cháng huán",
    疙瘩: "gē da",
    燕山: "yān shān",
    堵塞: "dǔ sè",
    夺冠: "duó guàn",
    扎实: "zhā shi",
    电荷: "diàn hè",
    看守: "kān shǒu",
    复辟: "fù bì",
    郁闷: "yù mèn",
    尽早: "jǐn zǎo",
    切断: "qiē duàn",
    指头: "zhǐ tou",
    为生: "wéi shēng",
    畜生: "chù sheng",
    切除: "qiē chú",
    着力: "zhuó lì",
    着想: "zhuó xiǎng",
    级差: "jí chā",
    投奔: "tóu bèn",
    棍子: "gùn zi",
    含糊: "hán hu",
    少妇: "shào fù",
    兴致: "xìng zhì",
    纳闷: "nà mèn",
    干流: "gàn liú",
    卷起: "juǎn qǐ",
    扇子: "shàn zi",
    更改: "gēng gǎi",
    笼络: "lǒng luò",
    喇叭: "lǎ ba",
    载荷: "zài hè",
    妥当: "tuǒ dàng",
    为难: "wéi nán",
    着陆: "zhuó lù",
    燕子: "yàn zi",
    干吗: "gàn má",
    白发: "bái fà",
    总得: "zǒng děi",
    夹击: "jiā jī",
    曝光: "bào guāng",
    曲调: "qǔ diào",
    相机: "xiàng jī",
    叫化: "jiào huà",
    角逐: "jué zhú",
    啊哟: "ā yō",
    载重: "zài zhòng",
    长辈: "zhǎng bèi",
    出差: "chū chāi",
    垛口: "duǒ kǒu",
    撇开: "piē kāi",
    厅长: "tīng zhǎng",
    组分: "zǔ fèn",
    误差: "wù chā",
    家当: "jiā dàng",
    传记: "zhuàn jì",
    个子: "gè zi",
    铺设: "pū shè",
    干事: "gàn shì",
    杆菌: "gǎn jūn",
    定量: "dìng liàng",
    运载: "yùn zài",
    会儿: "huì er",
    酋长: "qiú zhǎng",
    重返: "chóng fǎn",
    差额: "chā é",
    露面: "lòu miàn",
    钻研: "zuān yán",
    大城: "dài chéng",
    上当: "shàng dàng",
    销量: "xiāo liàng",
    作坊: "zuō fang",
    照相: "zhào xiàng",
    哎呀: "āi yā",
    调集: "diào jí",
    看中: "kàn zhòng",
    议长: "yì zhǎng",
    风筝: "fēng zheng",
    辟邪: "bì xié",
    空隙: "kòng xì",
    更迭: "gēng dié",
    偏差: "piān chā",
    声调: "shēng diào",
    适量: "shì liàng",
    屯子: "tún zi",
    无量: "wú liàng",
    空地: "kòng dì",
    调度: "diào dù",
    散射: "sǎn shè",
    创伤: "chuāng shāng",
    海参: "hǎi shēn",
    满载: "mǎn zài",
    重叠: "chóng dié",
    落差: "luò chā",
    单调: "dān diào",
    老将: "lǎo jiàng",
    人参: "rén shēn",
    间断: "jiàn duàn",
    重现: "chóng xiàn",
    夹杂: "jiā zá",
    调用: "diào yòng",
    萝卜: "luó bo",
    附着: "fù zhuó",
    应声: "yìng shēng",
    主将: "zhǔ jiàng",
    罪过: "zuì guo",
    咀嚼: "jǔ jué",
    为政: "wéi zhèng",
    过量: "guò liàng",
    乐曲: "yuè qǔ",
    负荷: "fù hè",
    枪弹: "qiāng dàn",
    悄然: "qiǎo rán",
    处方: "chǔ fāng",
    悄声: "qiǎo shēng",
    曲子: "qǔ zi",
    情调: "qíng diào",
    挑衅: "tiǎo xìn",
    代为: "dài wéi",
    了结: "liǎo jié",
    打中: "dǎ zhòng",
    酒吧: "jiǔ bā",
    懒得: "lǎn de",
    增量: "zēng liàng",
    衣着: "yī zhuó",
    部将: "bù jiàng",
    要塞: "yào sài",
    茶几: "chá jī",
    杠杆: "gàng gǎn",
    出没: "chū mò",
    鲜有: "xiǎn yǒu",
    间隙: "jiàn xì",
    重担: "zhòng dàn",
    重演: "chóng yǎn",
    重试: "chóng shì",
    应酬: "yìng chou",
    只当: "zhǐ dāng",
    毋宁: "wú nìng",
    包扎: "bāo zā",
    前头: "qián tou",
    卷烟: "juǎn yān",
    非得: "fēi děi",
    弹道: "dàn dào",
    杆子: "gān zi",
    门将: "mén jiàng",
    后头: "hòu tou",
    喝彩: "hè cǎi",
    暖和: "nuǎn huo",
    累积: "lěi jī",
    调遣: "diào qiǎn",
    倔强: "jué jiàng",
    宝藏: "bǎo zàng",
    丧事: "sāng shì",
    约莫: "yuē mo",
    纤夫: "qiàn fū",
    更替: "gēng tì",
    装载: "zhuāng zài",
    背包: "bēi bāo",
    帖子: "tiě zi",
    松散: "sōng sǎn",
    呼喝: "hū hè",
    可恶: "kě wù",
    自转: "zì zhuàn",
    供电: "gōng diàn",
    反省: "fǎn xǐng",
    坦率: "tǎn shuài",
    苏打: "sū dá",
    本分: "běn fèn",
    落得: "luò de",
    鄙薄: "bǐ bó",
    相间: "xiāng jiàn",
    单薄: "dān bó",
    混蛋: "hún dàn",
    贞观: "zhēn guān",
    附和: "fù hè",
    能耐: "néng nài",
    吓唬: "xià hu",
    未了: "wèi liǎo",
    引着: "yǐn zháo",
    抽调: "chōu diào",
    沙子: "shā zi",
    席卷: "xí juǎn",
    标的: "biāo dì",
    别扭: "biè niu",
    思量: "sī liang",
    喝采: "hè cǎi",
    论语: "lún yǔ",
    盖子: "gài zi",
    分外: "fèn wài",
    弄堂: "lòng táng",
    乐舞: "yuè wǔ",
    雨量: "yǔ liàng",
    毛发: "máo fà",
    差遣: "chāi qiǎn",
    背负: "bēi fù",
    转速: "zhuàn sù",
    声乐: "shēng yuè",
    夹攻: "jiā gōng",
    供水: "gōng shuǐ",
    主干: "zhǔ gàn",
    惩处: "chéng chǔ",
    长相: "zhǎng xiàng",
    公差: "gōng chāi",
    榴弹: "liú dàn",
    省得: "shěng de",
    条子: "tiáo zi",
    重围: "chóng wéi",
    阻塞: "zǔ sè",
    劲风: "jìng fēng",
    纠葛: "jiū gé",
    颠簸: "diān bǒ",
    点中: "diǎn zhòng",
    重创: "zhòng chuāng",
    姥姥: "lǎo lao",
    迷糊: "mí hu",
    公家: "gōng jia",
    几率: "jī lǜ",
    苦闷: "kǔ mèn",
    度量: "dù liàng",
    差错: "chā cuò",
    暑假: "shǔ jià",
    参差: "cēn cī",
    搭载: "dā zài",
    助长: "zhù zhǎng",
    相称: "xiāng chèn",
    红晕: "hóng yùn",
    舍命: "shě mìng",
    喜好: "xǐ hào",
    列传: "liè zhuàn",
    劲敌: "jìng dí",
    蛤蟆: "há ma",
    请假: "qǐng jià",
    钉子: "dīng zi",
    沉没: "chén mò",
    高丽: "gāo lí",
    休假: "xiū jià",
    无为: "wú wéi",
    巴结: "bā jie",
    了得: "liǎo dé",
    变相: "biàn xiàng",
    核弹: "hé dàn",
    亲家: "qìng jia",
    承载: "chéng zài",
    喝问: "hè wèn",
    还击: "huán jī",
    交还: "jiāo huán",
    将令: "jiàng lìng",
    单于: "chán yú",
    空缺: "kòng quē",
    绿林: "lù lín",
    胆量: "dǎn liàng",
    执着: "zhí zhuó",
    低调: "dī diào",
    闭塞: "bì sè",
    轻薄: "qīng bó",
    得当: "dé dàng",
    占卜: "zhān bǔ",
    扫帚: "sào zhou",
    龟兹: "qiū cí",
    年长: "nián zhǎng",
    外传: "wài zhuàn",
    头子: "tóu zi",
    裁缝: "cái feng",
    礼乐: "lǐ yuè",
    血泊: "xuè pō",
    散乱: "sǎn luàn",
    动量: "dòng liàng",
    倒腾: "dǎo teng",
    取舍: "qǔ shě",
    咱家: "zán jiā",
    长发: "cháng fà",
    爪哇: "zhǎo wā",
    弹壳: "dàn ké",
    省悟: "xǐng wù",
    嚷嚷: "rāng rang",
    连累: "lián lèi",
    应得: "yīng dé",
    族长: "zú zhǎng",
    柜子: "guì zi",
    擂鼓: "léi gǔ",
    眩晕: "xuàn yùn",
    调配: "tiáo pèi",
    躯干: "qū gàn",
    差役: "chāi yì",
    坎坷: "kǎn kě",
    少儿: "shào ér",
    乐团: "yuè tuán",
    养分: "yǎng fèn",
    退还: "tuì huán",
    格调: "gé diào",
    语调: "yǔ diào",
    音调: "yīn diào",
    乐府: "yuè fǔ",
    古朴: "gǔ pǔ",
    打点: "dǎ diǎn",
    差使: "chāi shǐ",
    匀称: "yún chèn",
    瘦削: "shòu xuē",
    膏药: "gāo yao",
    吞没: "tūn mò",
    调任: "diào rèn",
    散居: "sǎn jū",
    上头: "shàng tóu",
    风靡: "fēng mǐ",
    放假: "fàng jià",
    估量: "gū liang",
    失当: "shī dàng",
    中弹: "zhòng dàn",
    妄为: "wàng wéi",
    长者: "zhǎng zhě",
    起哄: "qǐ hòng",
    末了: "mò liǎo",
    相声: "xiàng sheng",
    校正: "jiào zhèng",
    劝降: "quàn xiáng",
    矢量: "shǐ liàng",
    沉闷: "chén mèn",
    给与: "jǐ yǔ",
    解法: "jiě fǎ",
    塞外: "sài wài",
    将校: "jiàng xiào",
    嗜好: "shì hào",
    没落: "mò luò",
    朴刀: "pō dāo",
    片子: "piān zi",
    切削: "qiē xiāo",
    弹丸: "dàn wán",
    稀薄: "xī bó",
    亏得: "kuī dé",
    间歇: "jiàn xiē",
    翘首: "qiáo shǒu",
    色调: "sè diào",
    处决: "chǔ jué",
    表率: "biǎo shuài",
    尺子: "chǐ zi",
    招降: "zhāo xiáng",
    称职: "chèn zhí",
    斗篷: "dǒu peng",
    铺子: "pù zi",
    底子: "dǐ zi",
    负载: "fù zài",
    干警: "gàn jǐng",
    倒数: "dào shǔ",
    将官: "jiàng guān",
    锄头: "chú tou",
    归降: "guī xiáng",
    疟疾: "nüè ji",
    唠叨: "láo dao",
    限量: "xiàn liàng",
    屏息: "bǐng xī",
    重逢: "chóng féng",
    器乐: "qì yuè",
    氢弹: "qīng dàn",
    脖颈: "bó gěng",
    妃子: "fēi zi",
    处事: "chǔ shì",
    参量: "cān liàng",
    轻率: "qīng shuài",
    缥缈: "piāo miǎo",
    中奖: "zhòng jiǎng",
    才干: "cái gàn",
    施舍: "shī shě",
    卷子: "juàn zi",
    游说: "yóu shuì",
    巷子: "xiàng zi",
    膀胱: "páng guāng",
    切勿: "qiè wù",
    看管: "kān guǎn",
    风头: "fēng tou",
    精干: "jīng gàn",
    高差: "gāo chā",
    恐吓: "kǒng hè",
    扁担: "biǎn dàn",
    给养: "jǐ yǎng",
    格子: "gé zi",
    供需: "gōng xū",
    反差: "fǎn chā",
    飞弹: "fēi dàn",
    微薄: "wēi bó",
    发型: "fà xíng",
    即兴: "jí xìng",
    攒动: "cuán dòng",
    间或: "jiàn huò",
    浅薄: "qiǎn bó",
    乐章: "yuè zhāng",
    顺差: "shùn chā",
    调子: "diào zi",
    相位: "xiàng wèi",
    转子: "zhuàn zǐ",
    劲旅: "jìng lǚ",
    咔嚓: "kā chā",
    了事: "liǎo shì",
    转悠: "zhuàn you",
    当铺: "dàng pù",
    爪子: "zhuǎ zi",
    单子: "dān zi",
    好战: "hào zhàn",
    燕麦: "yàn mài",
    只许: "zhǐ xǔ",
    干练: "gàn liàn",
    女将: "nǚ jiàng",
    酒量: "jiǔ liàng",
    划船: "huá chuán",
    伎俩: "jì liǎng",
    挑拨: "tiǎo bō",
    少校: "shào xiào",
    着落: "zhuó luò",
    憎恶: "zēng wù",
    刻薄: "kè bó",
    要挟: "yāo xié",
    用处: "yòng chu",
    还手: "huán shǒu",
    模具: "mú jù",
    执著: "zhí zhuó",
    喝令: "hè lìng",
    保长: "bǎo zhǎng",
    吸着: "xī zhe",
    症结: "zhēng jié",
    公转: "gōng zhuàn",
    校勘: "jiào kān",
    重提: "chóng tí",
    扫兴: "sǎo xìng",
    铺盖: "pū gài",
    长史: "zhǎng shǐ",
    差价: "chā jià",
    压根: "yà gēn",
    怔住: "zhèng zhù",
    应允: "yīng yǔn",
    切入: "qiē rù",
    战将: "zhàn jiàng",
    年少: "nián shào",
    舍身: "shě shēn",
    执拗: "zhí niù",
    处世: "chǔ shì",
    中风: "zhòng fēng",
    等量: "děng liàng",
    放量: "fàng liàng",
    腔调: "qiāng diào",
    老少: "lǎo shào",
    没入: "mò rù",
    瓜葛: "guā gé",
    将帅: "jiàng shuài",
    车载: "chē zài",
    窝囊: "wō nang",
    长进: "zhǎng jìn",
    可汗: "kè hán",
    并州: "bīng zhōu",
    供销: "gōng xiāo",
    切片: "qiē piàn",
    差事: "chāi shì",
    知会: "zhī hui",
    鹰爪: "yīng zhǎo",
    处女: "chǔ nǚ",
    切磋: "qiē cuō",
    日头: "rì tou",
    押解: "yā jiè",
    滋长: "zī zhǎng",
    道观: "dào guàn",
    脚色: "jué sè",
    当量: "dāng liàng",
    婆家: "pó jia",
    缘分: "yuán fèn",
    空闲: "kòng xián",
    好色: "hào sè",
    怒喝: "nù hè",
    笼统: "lǒng tǒng",
    边塞: "biān sài",
    何曾: "hé céng",
    重合: "chóng hé",
    零散: "líng sǎn",
    轰隆: "hōng lōng",
    化子: "huà zi",
    内蒙: "nèi měng",
    数落: "shǔ luò",
    逆差: "nì chā",
    牟利: "móu lì",
    栅栏: "zhà lan",
    中标: "zhòng biāo",
    调档: "diào dàng",
    佝偻: "gōu lóu",
    场子: "chǎng zi",
    甲壳: "jiǎ qiào",
    重温: "chóng wēn",
    炮制: "páo zhì",
    返还: "fǎn huán",
    自传: "zì zhuàn",
    高调: "gāo diào",
    殷红: "yān hóng",
    固着: "gù zhuó",
    强求: "qiǎng qiú",
    本相: "běn xiàng",
    骄横: "jiāo hèng",
    草率: "cǎo shuài",
    气闷: "qì mèn",
    着色: "zhuó sè",
    宁肯: "nìng kěn",
    兴头: "xìng tou",
    拘泥: "jū nì",
    夹角: "jiā jiǎo",
    发髻: "fà jì",
    猛将: "měng jiàng",
    约摸: "yuē mo",
    拖累: "tuō lěi",
    呢绒: "ní róng",
    钻探: "zuān tàn",
    夹层: "jiā céng",
    落魄: "luò pò",
    巷道: "hàng dào",
    运量: "yùn liàng",
    解闷: "jiě mèn",
    空儿: "kòng er",
    估摸: "gū mo",
    好客: "hào kè",
    钻孔: "zuān kǒng",
    糊弄: "hù nòng",
    荥阳: "xíng yáng",
    烦闷: "fán mèn",
    仓卒: "cāng cù",
    分叉: "fēn chà",
    厂子: "chǎng zi",
    小调: "xiǎo diào",
    少阳: "shào yáng",
    受降: "shòu xiáng",
    染坊: "rǎn fáng",
    胳臂: "gē bei",
    将门: "jiàng mén",
    模板: "mú bǎn",
    配给: "pèi jǐ",
    为伍: "wéi wǔ",
    跟头: "gēn tou",
    划算: "huá suàn",
    累赘: "léi zhui",
    哄笑: "hōng xiào",
    晕眩: "yūn xuàn",
    干掉: "gàn diào",
    缝制: "féng zhì",
    难处: "nán chù",
    着意: "zhuó yì",
    蛮横: "mán hèng",
    奇数: "jī shù",
    短发: "duǎn fà",
    生还: "shēng huán",
    还清: "huán qīng",
    看护: "kān hù",
    直率: "zhí shuài",
    奏乐: "zòu yuè",
    载客: "zài kè",
    专横: "zhuān hèng",
    湮没: "yān mò",
    空格: "kòng gé",
    铺垫: "pū diàn",
    良将: "liáng jiàng",
    哗啦: "huā lā",
    散漫: "sǎn màn",
    脱发: "tuō fà",
    送还: "sòng huán",
    埋没: "mái mò",
    累及: "lěi jí",
    薄雾: "bó wù",
    调离: "diào lí",
    舌苔: "shé tāi",
    机长: "jī zhǎng",
    栓塞: "shuān sè",
    配角: "pèi jué",
    切口: "qiē kǒu",
    创口: "chuāng kǒu",
    哈欠: "hā qian",
    实弹: "shí dàn",
    铺平: "pū píng",
    哈达: "hǎ dá",
    懒散: "lǎn sǎn",
    实干: "shí gàn",
    填空: "tián kòng",
    刁钻: "diāo zuān",
    乐师: "yuè shī",
    量变: "liàng biàn",
    诱降: "yòu xiáng",
    搪塞: "táng sè",
    征调: "zhēng diào",
    夹道: "jiā dào",
    干咳: "gān ké",
    止咳: "zhǐ ké",
    乐工: "yuè gōng",
    划过: "huá guò",
    着火: "zháo huǒ",
    更正: "gēng zhèng",
    给付: "jǐ fù",
    空子: "kòng zi",
    哪吒: "né zhā",
    正着: "zhèng zháo",
    刷子: "shuā zi",
    丧葬: "sāng zàng",
    夹带: "jiā dài",
    安分: "ān fèn",
    中意: "zhòng yì",
    长孙: "zhǎng sūn",
    校订: "jiào dìng",
    卷曲: "juǎn qū",
    载运: "zài yùn",
    投弹: "tóu dàn",
    柞蚕: "zuò cán",
    份量: "fèn liàng",
    调换: "diào huàn",
    了然: "liǎo rán",
    咧嘴: "liě zuǐ",
    典当: "diǎn dàng",
    寒假: "hán jià",
    长兄: "zhǎng xiōng",
    给水: "jǐ shuǐ",
    须发: "xū fà",
    枝干: "zhī gàn",
    属相: "shǔ xiàng",
    哄抢: "hōng qiǎng",
    刻划: "kè huà",
    塞子: "sāi zi",
    单干: "dān gàn",
    还乡: "huán xiāng",
    兆头: "zhào tou",
    寺观: "sì guàn",
    督率: "dū shuài",
    啊哈: "ā ha",
    割舍: "gē shě",
    抹布: "mā bù",
    好恶: "hào wù",
    下处: "xià chǔ",
    消长: "xiāo zhǎng",
    离间: "lí jiàn",
    准头: "zhǔn tou",
    校对: "jiào duì",
    什物: "shí wù",
    番禺: "pān yú",
    佛爷: "fó ye",
    吗啡: "mǎ fēi",
    盐分: "yán fèn",
    虎将: "hǔ jiàng",
    薄荷: "bò he",
    独处: "dú chǔ",
    空位: "kòng wèi",
    铺路: "pū lù",
    乌拉: "wū lā",
    调回: "diào huí",
    来头: "lái tou",
    闲散: "xián sǎn",
    胶卷: "jiāo juǎn",
    冒失: "mào shi",
    干劲: "gàn jìn",
    弦乐: "xián yuè",
    相国: "xiàng guó",
    丹参: "dān shēn",
    助兴: "zhù xìng",
    铺开: "pū kāi",
    次长: "cì zhǎng",
    发卡: "fà qiǎ",
    拮据: "jié jū",
    刹车: "shā chē",
    生发: "shēng fà",
    重播: "chóng bō",
    缝合: "féng hé",
    音量: "yīn liàng",
    少尉: "shào wèi",
    冲压: "chòng yā",
    苍劲: "cāng jìng",
    厚薄: "hòu báo",
    威吓: "wēi hè",
    外相: "wài xiàng",
    呼号: "hū háo",
    着迷: "zháo mí",
    挑担: "tiāo dàn",
    纹路: "wén lù",
    还俗: "huán sú",
    强横: "qiáng hèng",
    着数: "zhāo shù",
    降顺: "xiáng shùn",
    挑明: "tiǎo míng",
    眯缝: "mī feng",
    分内: "fèn nèi",
    更衣: "gēng yī",
    软和: "ruǎn huo",
    尽兴: "jìn xìng",
    号子: "hào zi",
    爪牙: "zhǎo yá",
    败将: "bài jiàng",
    猜中: "cāi zhòng",
    结扎: "jié zā",
    没空: "méi kòng",
    夹缝: "jiā fèng",
    拾掇: "shí duo",
    掺和: "chān huo",
    簸箕: "bò ji",
    电量: "diàn liàng",
    荷载: "hè zǎi",
    调式: "diào shì",
    处身: "chǔ shēn",
    打手: "dǎ shǒu",
    弹弓: "dàn gōng",
    横蛮: "hèng mán",
    能干: "néng gàn",
    校点: "jiào diǎn",
    加载: "jiā zài",
    干校: "gàn xiào",
    哄传: "hōng chuán",
    校注: "jiào zhù",
    淤塞: "yū sè",
    马扎: "mǎ zhá",
    月氏: "yuè zhī",
    高干: "gāo gàn",
    经传: "jīng zhuàn",
    曾孙: "zēng sūn",
    好斗: "hào dòu",
    关卡: "guān qiǎ",
    逃奔: "táo bèn",
    磨蹭: "mó ceng",
    牟取: "móu qǔ",
    颤栗: "zhàn lì",
    蚂蚱: "mà zha",
    撮合: "cuō he",
    趔趄: "liè qie",
    摔打: "shuāi dǎ",
    台子: "tái zi",
    分得: "fēn de",
    粘着: "nián zhuó",
    采邑: "cài yì",
    散装: "sǎn zhuāng",
    婀娜: "ē nuó",
    兴味: "xìng wèi",
    行头: "xíng tou",
    气量: "qì liàng",
    调运: "diào yùn",
    处治: "chǔ zhì",
    乐音: "yuè yīn",
    充塞: "chōng sè",
    恫吓: "dòng hè",
    论调: "lùn diào",
    相中: "xiāng zhòng",
    民乐: "mín yuè",
    炮仗: "pào zhang",
    丧服: "sāng fú",
    骁将: "xiāo jiàng",
    量刑: "liàng xíng",
    缝补: "féng bǔ",
    财会: "cái kuài",
    大干: "dà gàn",
    历数: "lì shǔ",
    校场: "jiào chǎng",
    塞北: "sài běi",
    识相: "shí xiàng",
    辱没: "rǔ mò",
    鲜亮: "xiān liàng",
    语塞: "yǔ sè",
    露脸: "lòu liǎn",
    凉快: "liáng kuai",
    腰杆: "yāo gǎn",
    溜达: "liū da",
    嘎嘎: "gā gā",
    公干: "gōng gàn",
    桔梗: "jié gěng",
    挑逗: "tiǎo dòu",
    看门: "kān mén",
    乐歌: "yuè gē",
    拓片: "tà piàn",
    挑动: "tiǎo dòng",
    准将: "zhǔn jiàng",
    遒劲: "qiú jìng",
    磨坊: "mò fáng",
    逶迤: "wēi yí",
    搅和: "jiǎo huo",
    摩挲: "mó suō",
    作弄: "zuò nòng",
    苗头: "miáo tou",
    打颤: "dǎ zhàn",
    大藏: "dà zàng",
    畜牲: "chù shēng",
    勾搭: "gōu da",
    树荫: "shù yīn",
    树杈: "shù chà",
    铁杆: "tiě gǎn",
    将相: "jiàng xiàng",
    份子: "fèn zi",
    视差: "shì chā",
    绿荫: "lǜ yīn",
    枪杆: "qiāng gǎn",
    缝纫: "féng rèn",
    愁闷: "chóu mèn",
    点将: "diǎn jiàng",
    华佗: "huà tuó",
    劲射: "jìng shè",
    箱笼: "xiāng lǒng",
    终了: "zhōng liǎo",
    鬓发: "bìn fà",
    结巴: "jiē ba",
    苦干: "kǔ gàn",
    看家: "kān jiā",
    正旦: "zhēng dàn",
    中肯: "zhòng kěn",
    厦门: "xià mén",
    东莞: "dōng guǎn",
    食量: "shí liàng",
    宫调: "gōng diào",
    间作: "jiàn zuò",
    弹片: "dàn piàn",
    差池: "chā chí",
    漂白: "piǎo bái",
    杠子: "gàng zi",
    调处: "tiáo chǔ",
    好动: "hào dòng",
    转炉: "zhuàn lú",
    屏气: "bǐng qì",
    夹板: "jiā bǎn",
    哀乐: "āi yuè",
    干道: "gàn dào",
    苦处: "kǔ chù",
    劈柴: "pǐ chái",
    长势: "zhǎng shì",
    天华: "tiān huá",
    共处: "gòng chǔ",
    校验: "jiào yàn",
    出塞: "chū sài",
    磨盘: "mò pán",
    萎靡: "wěi mǐ",
    奔丧: "bēn sāng",
    唱和: "chàng hè",
    大调: "dà diào",
    非分: "fēi fèn",
    钻营: "zuān yíng",
    夹子: "jiā zi",
    超载: "chāo zài",
    更始: "gēng shǐ",
    铃铛: "líng dang",
    披散: "pī sàn",
    发还: "fā huán",
    转轮: "zhuàn lún",
    横财: "hèng cái",
    泡桐: "pāo tóng",
    抛撒: "pāo sǎ",
    天呀: "tiān yā",
    糊糊: "hū hu",
    躯壳: "qū qiào",
    通量: "tōng liàng",
    奉还: "fèng huán",
    午觉: "wǔ jiào",
    闷棍: "mèn gùn",
    浪头: "làng tou",
    砚台: "yàn tái",
    油坊: "yóu fáng",
    学长: "xué zhǎng",
    过载: "guò zài",
    笔调: "bǐ diào",
    衣被: "yī bèi",
    畜产: "xù chǎn",
    调阅: "diào yuè",
    蛮干: "mán gàn",
    曾祖: "zēng zǔ",
    提干: "tí gàn",
    变调: "biàn diào",
    覆没: "fù mò",
    模子: "mú zi",
    乐律: "yuè lǜ",
    称心: "chèn xīn",
    木杆: "mù gān",
    重印: "chóng yìn",
    自省: "zì xǐng",
    提调: "tí diào",
    看相: "kàn xiàng",
    芋头: "yù tou",
    下切: "xià qiē",
    塞上: "sài shàng",
    铺张: "pū zhāng",
    藤蔓: "téng wàn",
    薄幸: "bó xìng",
    解数: "xiè shù",
    褪去: "tuì qù",
    霰弹: "xiàn dàn",
    柚木: "yóu mù",
    痕量: "hén liàng",
    雅乐: "yǎ yuè",
    号哭: "háo kū",
    诈降: "zhà xiáng",
    猪圈: "zhū juàn",
    咋舌: "zé shé",
    铣床: "xǐ chuáng",
    防弹: "fáng dàn",
    健将: "jiàn jiàng",
    丽水: "lí shuǐ",
    削发: "xuē fà",
    空当: "kòng dāng",
    多相: "duō xiàng",
    鲜见: "xiǎn jiàn",
    划桨: "huá jiǎng",
    载波: "zài bō",
    跳蚤: "tiào zao",
    俏皮: "qiào pí",
    吧嗒: "bā dā",
    结发: "jié fà",
    了断: "liǎo duàn",
    同调: "tóng diào",
    石磨: "shí mò",
    时差: "shí chā",
    鼻塞: "bí sè",
    挑子: "tiāo zi",
    推磨: "tuī mò",
    武侯: "wǔ hóu",
    抹煞: "mǒ shā",
    调转: "diào zhuǎn",
    籍没: "jí mò",
    还债: "huán zhài",
    调演: "diào yǎn",
    分划: "fēn huá",
    奇偶: "jī ǒu",
    断喝: "duàn hè",
    闷雷: "mèn léi",
    狼藉: "láng jí",
    饭量: "fàn liàng",
    还礼: "huán lǐ",
    转调: "zhuǎn diào",
    星相: "xīng xiàng",
    手相: "shǒu xiàng",
    配乐: "pèi yuè",
    盖头: "gài tou",
    连杆: "lián gǎn",
    簿记: "bù jì",
    刀把: "dāo bà",
    量词: "liàng cí",
    名角: "míng jué",
    步调: "bù diào",
    校本: "jiào běn",
    账簿: "zhàng bù",
    隽永: "juàn yǒng",
    稍为: "shāo wéi",
    易传: "yì zhuàn",
    乐谱: "yuè pǔ",
    牵累: "qiān lěi",
    答理: "dā li",
    喝斥: "hè chì",
    吟哦: "yín é",
    干渠: "gàn qú",
    海量: "hǎi liàng",
    精当: "jīng dàng",
    着床: "zhuó chuáng",
    月相: "yuè xiàng",
    庶几: "shù jī",
    宫观: "gōng guàn",
    论处: "lùn chǔ",
    征辟: "zhēng bì",
    厚朴: "hòu pò",
    介壳: "jiè qiào",
    吭哧: "kēng chī",
    咯血: "kǎ xiě",
    铺陈: "pū chén",
    重生: "chóng shēng",
    乐理: "yuè lǐ",
    哀号: "āi háo",
    藏历: "zàng lì",
    刚劲: "gāng jìng",
    削平: "xuē píng",
    浓荫: "nóng yīn",
    城垛: "chéng duǒ",
    当差: "dāng chāi",
    正传: "zhèng zhuàn",
    并处: "bìng chǔ",
    创面: "chuāng miàn",
    旦角: "dàn jué",
    薄礼: "bó lǐ",
    晃荡: "huàng dang",
    臊子: "sào zi",
    家什: "jiā shí",
    闷头: "mēn tóu",
    美发: "měi fà",
    度数: "dù shu",
    着凉: "zháo liáng",
    闯将: "chuǎng jiàng",
    几案: "jī àn",
    姘头: "pīn tou",
    差数: "chā shù",
    散碎: "sǎn suì",
    壅塞: "yōng sè",
    寒颤: "hán zhàn",
    牵强: "qiān qiǎng",
    无间: "wú jiàn",
    轮转: "lún zhuàn",
    号叫: "háo jiào",
    铺排: "pū pái",
    降伏: "xiáng fú",
    轧钢: "zhá gāng",
    东阿: "dōng ē",
    病假: "bìng jià",
    累加: "lěi jiā",
    梗塞: "gěng sè",
    弹夹: "dàn jiā",
    钻心: "zuān xīn",
    晃眼: "huǎng yǎn",
    魔爪: "mó zhǎo",
    标量: "biāo liàng",
    憋闷: "biē mèn",
    猜度: "cāi duó",
    处士: "chǔ shì",
    官差: "guān chāi",
    讨还: "tǎo huán",
    长门: "cháng mén",
    馏分: "liú fēn",
    里弄: "lǐ lòng",
    色相: "sè xiàng",
    雅兴: "yǎ xìng",
    角力: "jué lì",
    弹坑: "dàn kēng",
    枝杈: "zhī chà",
    夹具: "jiā jù",
    处刑: "chǔ xíng",
    悍将: "hàn jiàng",
    好学: "hào xué",
    好好: "hǎo hǎo",
    银发: "yín fà",
    扫把: "sào bǎ",
    法相: "fǎ xiàng",
    贵干: "guì gàn",
    供气: "gōng qì",
    空余: "kòng yú",
    捆扎: "kǔn zā",
    瘠薄: "jí bó",
    浆糊: "jiàng hu",
    嘎吱: "gā zhī",
    调令: "diào lìng",
    法帖: "fǎ tiè",
    淋病: "lìn bìng",
    调派: "diào pài",
    转盘: "zhuàn pán",
    供稿: "gōng gǎo",
    差官: "chāi guān",
    忧闷: "yōu mèn",
    教长: "jiào zhǎng",
    重唱: "chóng chàng",
    酒兴: "jiǔ xìng",
    乐坛: "yuè tán",
    花呢: "huā ní",
    叱喝: "chì hè",
    膀臂: "bǎng bì",
    得空: "dé kòng",
    转圈: "zhuàn quān",
    横暴: "hèng bào",
    哄抬: "hōng tái",
    引吭: "yǐn háng",
    载货: "zài huò",
    中计: "zhòng jì",
    官长: "guān zhǎng",
    相面: "xiàng miàn",
    看头: "kàn tou",
    盼头: "pàn tou",
    意兴: "yì xìng",
    军乐: "jūn yuè",
    累次: "lěi cì",
    骨嘟: "gǔ dū",
    燕赵: "yān zhào",
    报丧: "bào sāng",
    弥撒: "mí sa",
    挨斗: "ái dòu",
    扁舟: "piān zhōu",
    丑角: "chǒu jué",
    吊丧: "diào sāng",
    强将: "qiáng jiàng",
    重奏: "chóng zòu",
    发辫: "fà biàn",
    着魔: "zháo mó",
    着法: "zhāo fǎ",
    盛放: "shèng fàng",
    填塞: "tián sè",
    凶横: "xiōng hèng",
    稽首: "qǐ shǒu",
    碑帖: "bēi tiè",
    冲量: "chōng liàng",
    发菜: "fà cài",
    假发: "jiǎ fà",
    翻卷: "fān juǎn",
    小量: "xiǎo liàng",
    胶着: "jiāo zhuó",
    里子: "lǐ zi",
    调调: "diào diao",
    散兵: "sǎn bīng",
    高挑: "gāo tiǎo",
    播撒: "bō sǎ",
    夹心: "jiā xīn",
    扇动: "shān dòng",
    叨扰: "tāo rǎo",
    霓裳: "ní cháng",
    捻子: "niǎn zi",
    弥缝: "mí féng",
    撒布: "sǎ bù",
    场院: "cháng yuàn",
    省亲: "xǐng qīn",
    提拉: "tí lā",
    惯量: "guàn liàng",
    强逼: "qiáng bī",
    强征: "qiáng zhēng",
    晕车: "yùn chē",
    数道: "shù dào",
    带累: "dài lèi",
    拓本: "tà běn",
    嫌恶: "xián wù",
    宿将: "sù jiàng",
    龟裂: "jūn liè",
    缠夹: "chán jiā",
    发式: "fà shì",
    隔扇: "gé shàn",
    天分: "tiān fèn",
    癖好: "pǐ hào",
    四通: "sì tōng",
    白术: "bái zhú",
    划伤: "huá shāng",
    角斗: "jué dòu",
    听差: "tīng chāi",
    岁差: "suì chā",
    丧礼: "sāng lǐ",
    脉脉: "mò mò",
    削瘦: "xuē shòu",
    撒播: "sǎ bō",
    莎草: "suō cǎo",
    犍为: "qián wéi",
    调头: "diào tóu",
    龙卷: "lóng juǎn",
    外调: "wài diào",
    字帖: "zì tiè",
    卷发: "juǎn fà",
    揣度: "chuǎi duó",
    洋相: "yáng xiàng",
    散光: "sǎn guāng",
    骨碌: "gū lu",
    薄命: "bó mìng",
    笼头: "lóng tóu",
    咽炎: "yān yán",
    碌碡: "liù zhou",
    片儿: "piàn er",
    纤手: "qiàn shǒu",
    散体: "sǎn tǐ",
    内省: "nèi xǐng",
    强留: "qiáng liú",
    解送: "jiè sòng",
    反间: "fǎn jiàn",
    少壮: "shào zhuàng",
    留空: "liú kōng",
    告假: "gào jià",
    咳血: "ké xuè",
    薄暮: "bó mù",
    铺轨: "pū guǐ",
    磨削: "mó xuē",
    治丧: "zhì sāng",
    叉子: "chā zi",
    哄动: "hōng dòng",
    蛾子: "é zi",
    出落: "chū luò",
    股长: "gǔ zhǎng",
    贵处: "guì chù",
    还魂: "huán hún",
    例假: "lì jià",
    刹住: "shā zhù",
    身量: "shēn liàng",
    同好: "tóng hào",
    模量: "mó liàng",
    更生: "gēng shēng",
    服丧: "fú sāng",
    率直: "shuài zhí",
    字模: "zì mú",
    散架: "sǎn jià",
    答腔: "dā qiāng",
    交恶: "jiāo wù",
    薄情: "bó qíng",
    眼泡: "yǎn pāo",
    袅娜: "niǎo nuó",
    草垛: "cǎo duò",
    冲劲: "chòng jìn",
    呢喃: "ní nán",
    切中: "qiè zhòng",
    挑灯: "tiǎo dēng",
    还愿: "huán yuàn",
    激将: "jī jiàng",
    更鼓: "gēng gǔ",
    没药: "mò yào",
    败兴: "bài xìng",
    切面: "qiē miàn",
    散户: "sǎn hù",
    累进: "lěi jìn",
    背带: "bēi dài",
    秤杆: "chèng gǎn",
    碾坊: "niǎn fáng",
    簿子: "bù zi",
    扳手: "bān shǒu",
    铅山: "yán shān",
    儒将: "rú jiàng",
    重光: "chóng guāng",
    剪发: "jiǎn fà",
    长上: "zhǎng shàng",
    小传: "xiǎo zhuàn",
    压轴: "yā zhòu",
    弱冠: "ruò guàn",
    花卷: "huā juǎn",
    横祸: "hèng huò",
    夹克: "jiā kè",
    光晕: "guāng yùn",
    披靡: "pī mǐ",
    对调: "duì diào",
    夹持: "jiā chí",
    空额: "kòng é",
    平调: "píng diào",
    铺床: "pū chuáng",
    丧钟: "sāng zhōng",
    作乐: "zuò lè",
    少府: "shào fǔ",
    数数: "shuò shuò",
    奔头: "bèn tou",
    进给: "jìn jǐ",
    率性: "shuài xìng",
    乐子: "lè zi",
    绑扎: "bǎng zā",
    挑唆: "tiǎo suō",
    漂洗: "piǎo xǐ",
    夹墙: "jiā qiáng",
    咳喘: "ké chuǎn",
    乜斜: "miē xie",
    错处: "cuò chù",
    闷酒: "mèn jiǔ",
    时调: "shí diào",
    重孙: "chóng sūn",
    经幢: "jīng chuáng",
    圩场: "xū chǎng",
    调门: "diào mén",
    花头: "huā tóu",
    划拉: "huá la",
    套色: "tào shǎi",
    粗率: "cū shuài",
    相率: "xiāng shuài",
    款识: "kuǎn zhì",
    吁请: "yù qǐng",
    荫蔽: "yīn bì",
    文蛤: "wén gé",
    嘀嗒: "dī dā",
    调取: "diào qǔ",
    交差: "jiāo chāi",
    落子: "luò zǐ",
    相册: "xiàng cè",
    絮叨: "xù dao",
    落发: "luò fà",
    异相: "yì xiàng",
    浸没: "jìn mò",
    角抵: "jué dǐ",
    卸载: "xiè zài",
    春卷: "chūn juǎn",
    扎挣: "zhá zheng",
    畜养: "xù yǎng",
    吡咯: "bǐ luò",
    垛子: "duò zi",
    恶少: "è shào",
    发际: "fà jì",
    红苕: "hóng sháo",
    糨糊: "jiàng hu",
    哭丧: "kū sāng",
    稍息: "shào xī",
    晕船: "yùn chuán",
    校样: "jiào yàng",
    外差: "wài chā",
    脚爪: "jiǎo zhǎo",
    铺展: "pū zhǎn",
    芫荽: "yán sui",
    夹紧: "jiā jǐn",
    尿泡: "suī pào",
    丧乱: "sāng luàn",
    凶相: "xiōng xiàng",
    华发: "huá fà",
    打场: "dǎ cháng",
    云量: "yún liàng",
    正切: "zhèng qiē",
    划拳: "huá quán",
    划艇: "huá tǐng",
    评传: "píng zhuàn",
    拉纤: "lā qiàn",
    句读: "jù dòu",
    散剂: "sǎn jì",
    骨殖: "gǔ shi",
    塞音: "sè yīn",
    铺叙: "pū xù",
    阏氏: "yān zhī",
    冷颤: "lěng zhàn",
    煞住: "shā zhù",
    少男: "shào nán",
    管乐: "guǎn yuè",
    号啕: "háo táo",
    纳降: "nà xiáng",
    拥塞: "yōng sè",
    万乘: "wàn shèng",
    杆儿: "gǎn ér",
    葛藤: "gé téng",
    簿籍: "bù jí",
    皮夹: "pí jiā",
    校准: "jiào zhǔn",
    允当: "yǔn dàng",
    器量: "qì liàng",
    选调: "xuǎn diào",
    扮相: "bàn xiàng",
    干才: "gàn cái",
    基干: "jī gàn",
    割切: "gē qiē",
    国乐: "guó yuè",
    卡壳: "qiǎ ké",
    辟谷: "bì gǔ",
    磨房: "mò fáng",
    咿呀: "yī yā",
    芥末: "jiè mo",
    薄技: "bó jì",
    产假: "chǎn jià",
    诗兴: "shī xìng",
    重出: "chóng chū",
    转椅: "zhuàn yǐ",
    酌量: "zhuó liang",
    簿册: "bù cè",
    藏青: "zàng qīng",
    的士: "dī shì",
    调人: "diào rén",
    解元: "jiè yuán",
    茎干: "jīng gàn",
    巨量: "jù liàng",
    榔头: "láng tou",
    率真: "shuài zhēn",
    喷香: "pèn xiāng",
    锁钥: "suǒ yuè",
    虾蟆: "há má",
    相图: "xiàng tú",
    兴会: "xìng huì",
    灶头: "zào tóu",
    重婚: "chóng hūn",
    钻洞: "zuān dòng",
    忖度: "cǔn duó",
    党参: "dǎng shēn",
    调温: "diào wēn",
    杆塔: "gān tǎ",
    葛布: "gé bù",
    拱券: "gǒng xuàn",
    夹生: "jiā shēng",
    露馅: "lòu xiàn",
    恰切: "qià qiè",
    散见: "sǎn jiàn",
    哨卡: "shào qiǎ",
    烫发: "tàng fà",
    体量: "tǐ liàng",
    挺括: "tǐng kuò",
    系带: "jì dài",
    相士: "xiàng shì",
    羊圈: "yáng juàn",
    转矩: "zhuàn jǔ",
    吧台: "bā tái",
    苍术: "cāng zhú",
    菲薄: "fěi bó",
    蛤蚧: "gé jiè",
    蛤蜊: "gé lí",
    瓜蔓: "guā wàn",
    怪相: "guài xiàng",
    临帖: "lín tiè",
    女红: "nǚ gōng",
    刨床: "bào chuáng",
    翘楚: "qiáo chǔ",
    数九: "shǔ jiǔ",
    谈兴: "tán xìng",
    雄劲: "xióng jìng",
    扎染: "zā rǎn",
    遮荫: "zhē yīn",
    周正: "zhōu zhèng",
    赚头: "zhuàn tou",
    扒手: "pá shǒu",
    搀和: "chān huo",
    诚朴: "chéng pǔ",
    肚量: "dù liàng",
    干结: "gān jié",
    工尺: "gōng chě",
    家累: "jiā lěi",
    曲水: "qū shuǐ",
    沙参: "shā shēn",
    挑花: "tiǎo huā",
    阿门: "ā mén",
    背篓: "bēi lǒu",
    瘪三: "biē sān",
    裁处: "cái chǔ",
    创痛: "chuāng tòng",
    福相: "fú xiàng",
    更动: "gēng dòng",
    豪兴: "háo xìng",
    还阳: "huán yáng",
    还嘴: "huán zuǐ",
    借调: "jiè diào",
    卷云: "juǎn yún",
    流弹: "liú dàn",
    想头: "xiǎng tou",
    削价: "xuē jià",
    校阅: "jiào yuè",
    雅量: "yǎ liàng",
    别传: "bié zhuàn",
    薄酒: "bó jiǔ",
    春假: "chūn jià",
    发妻: "fà qī",
    哗哗: "huā huā",
    宽绰: "kuān chuo",
    了悟: "liǎo wù",
    切花: "qiē huā",
    审度: "shěn duó",
    应许: "yīng xǔ",
    转台: "zhuàn tái",
    仔猪: "zǐ zhū",
    裁量: "cái liáng",
    藏戏: "zàng xì",
    乘兴: "chéng xìng",
    绸缪: "chóu móu",
    摧折: "cuī zhé",
    调经: "tiáo jīng",
    调职: "diào zhí",
    缝缀: "féng zhuì",
    骨朵: "gū duǒ",
    核儿: "hú er",
    恒量: "héng liàng",
    还价: "huán jià",
    浑朴: "hún pǔ",
    苦差: "kǔ chāi",
    面糊: "miàn hù",
    煞车: "shā chē",
    省视: "xǐng shì",
    什锦: "shí jǐn",
    信差: "xìn chāi",
    余切: "yú qiē",
    攒眉: "cuán méi",
    炸糕: "zhá gāo",
    钻杆: "zuàn gǎn",
    扒灰: "pá huī",
    拌和: "bàn huò",
    长调: "cháng diào",
    大溜: "dà liù",
    抖搂: "dǒu lōu",
    飞转: "fēi zhuàn",
    干仗: "gàn zhàng",
    好胜: "hào shèng",
    画片: "huà piàn",
    搅混: "jiǎo hún",
    螺杆: "luó gǎn",
    木模: "mù mú",
    怒号: "nù háo",
    频数: "pín shù",
    无宁: "wú níng",
    遗少: "yí shào",
    邮差: "yóu chāi",
    占卦: "zhān guà",
    占星: "zhān xīng",
    重审: "chóng shěn",
    自量: "zì liàng",
    调防: "diào fáng",
    发廊: "fà láng",
    反调: "fǎn diào",
    缝子: "fèng zi",
    更夫: "gēng fū",
    骨子: "gǔ zi",
    光杆: "guāng gǎn",
    夹棍: "jiā gùn",
    居丧: "jū sāng",
    巨贾: "jù gǔ",
    看押: "kān yā",
    空转: "kōng zhuàn",
    量力: "liàng lì",
    炮烙: "páo luò",
    赔还: "péi huán",
    扑扇: "pū shān",
    散记: "sǎn jì",
    散件: "sǎn jiàn",
    删削: "shān xuē",
    射干: "shè gàn",
    条几: "tiáo jī",
    偷空: "tōu kòng",
    削壁: "xuē bì",
    校核: "jiào hé",
    阴干: "yīn gān",
    择菜: "zhái cài",
    重九: "chóng jiǔ",
    主调: "zhǔ diào",
    自禁: "zì jīn",
    吧唧: "bā jī",
    便溺: "biàn niào",
    词调: "cí diào",
    叨咕: "dáo gu",
    落枕: "lào zhěn",
    铺砌: "pū qì",
    刷白: "shuà bái",
    委靡: "wěi mǐ",
    系泊: "xì bó",
    相马: "xiàng mǎ",
    熨帖: "yù tiē",
    转筋: "zhuàn jīn",
    棒喝: "bàng hè",
    傧相: "bīn xiàng",
    镐头: "gǎo tóu",
    间苗: "jiàn miáo",
    乐池: "yuè chí",
    卖相: "mài xiàng",
    屏弃: "bǐng qì",
    铅弹: "qiān dàn",
    切变: "qiē biàn",
    请调: "qǐng diào",
    群氓: "qún méng",
    散板: "sǎn bǎn",
    省察: "xǐng chá",
    事假: "shì jià",
    纤绳: "qiàn shéng",
    重影: "chóng yǐng",
    耕种: "gēng zhòng",
    种地: "zhòng dì",
    种菜: "zhòng cài",
    栽种: "zāi zhòng",
    接种: "jiē zhòng",
    垦种: "kěn zhòng",
    种殖: "zhòng zhí",
    种瓜: "zhòng guā",
    种豆: "zhòng dòu",
    种树: "zhòng shù",
    睡着: "shuì zháo",
    笼子: "lóng zi",
    重启: "chóng qǐ",
    重整: "chóng zhěng",
    重弹: "chóng tán",
    重足: "chóng zú",
    重山: "chóng shān",
    重游: "chóng yóu",
    重峦: "chóng luán",
    爷爷: "yé ye",
    奶奶: "nǎi nai",
    姥爷: "lǎo ye",
    爸爸: "bà ba",
    妈妈: "mā ma",
    婶婶: "shěn shen",
    舅舅: "jiù jiu",
    姑姑: "gū gu",
    叔叔: "shū shu",
    姨夫: "yí fu",
    舅母: "jiù mu",
    姑父: "gū fu",
    姐夫: "jiě fu",
    婆婆: "pó po",
    公公: "gōng gong",
    舅子: "jiù zi",
    姐姐: "jiě jie",
    哥哥: "gē ge",
    妹妹: "mèi mei",
    妹夫: "mèi fu",
    姨子: "yí zi",
    宝宝: "bǎo bao",
    娃娃: "wá wa",
    孩子: "hái zi",
    日子: "rì zi",
    样子: "yàng zi",
    狮子: "shī zi",
    身子: "shēn zi",
    架子: "jià zi",
    嫂子: "sǎo zi",
    鼻子: "bí zi",
    亭子: "tíng zi",
    折子: "zhé zi",
    面子: "miàn zi",
    脖子: "bó zi",
    辈子: "bèi zi",
    帽子: "mào zi",
    拍子: "pāi zi",
    柱子: "zhù zi",
    辫子: "biàn zi",
    鸽子: "gē zi",
    房子: "fáng zi",
    丸子: "wán zi",
    摊子: "tān zi",
    牌子: "pái zi",
    胡子: "hú zi",
    鬼子: "guǐ zi",
    矮子: "ǎi zi",
    鸭子: "yā zi",
    小子: "xiǎo zi",
    影子: "yǐng zi",
    屋子: "wū zi",
    对子: "duì zi",
    点子: "diǎn zi",
    本子: "běn zi",
    种子: "zhǒng zi",
    儿子: "ér zi",
    兔子: "tù zi",
    骗子: "piàn zi",
    院子: "yuàn zi",
    猴子: "hóu zi",
    嗓子: "sǎng zi",
    侄子: "zhí zi",
    柿子: "shì zi",
    钳子: "qián zi",
    虱子: "shī zi",
    瓶子: "píng zi",
    豹子: "bào zi",
    筷子: "kuài zi",
    篮子: "lán zi",
    绳子: "shéng zi",
    嘴巴: "zuǐ ba",
    耳朵: "ěr duo",
    茄子: "qié zi",
    蚌埠: "bèng bù",
    崆峒: "kōng tóng",
    琵琶: "pí pa",
    蘑菇: "mó gu",
    葫芦: "hú lu",
    狐狸: "hú li",
    桔子: "jú zi",
    盒子: "hé zi",
    桌子: "zhuō zi",
    竹子: "zhú zi",
    师傅: "shī fu",
    衣服: "yī fu",
    袜子: "wà zi",
    杯子: "bēi zi",
    刺猬: "cì wei",
    麦子: "mài zi",
    队伍: "duì wu",
    知了: "zhī liǎo",
    鱼儿: "yú er",
    馄饨: "hún tun",
    灯笼: "dēng long",
    庄稼: "zhuāng jia",
    聪明: "cōng ming",
    镜子: "jìng zi",
    银子: "yín zi",
    盘子: "pán zi",
    了却: "liǎo què",
    力气: "lì qi",
    席子: "xí zi",
    林子: "lín zi",
    朝霞: "zhāo xiá",
    朝夕: "zhāo xī",
    朝气: "zhāo qì",
    翅膀: "chì bǎng",
    省长: "shěng zhǎng",
    臧否: "zāng pǐ",
    否泰: "pǐ tài",
    变得: "biàn de",
    丈夫: "zhàng fu",
    豆腐: "dòu fu",
    笔杆: "bǐ gǎn",
    枞阳: "zōng yáng",
    行人: "xíng rén",
    打着: "dǎ zhe",
    // 一字不变调的词语（需要增补更多）
    // 有歧义的词：一楼、一栋、一层、一排、一连
    // “一楼”这个词，上下文语意是“一整栋楼”时，需要变调成四声；我住一楼时，则是一声
    第一: "dì yī",
    万一: "wàn yī",
    之一: "zhī yī",
    得之: "dé zhī",
    统一: "tǒng yī",
    唯一: "wéi yī",
    专一: "zhuān yī",
    单一: "dān yī",
    如一: "rú yī",
    其一: "qí yī",
    合一: "hé yī",
    逐一: "zhú yī",
    周一: "zhōu yī",
    初一: "chū yī",
    研一: "yán yī",
    归一: "guī yī",
    假一: "jiǎ yī",
    闻一: "wén yī",
    了了: "liǎo liǎo",
    公了: "gōng liǎo",
    私了: "sī liǎo",
    // 一 发音
    一月: "yī yuè",
    一号: "yī hào",
    一级: "yī jí",
    一等: "yī děng",
    一哥: "yī gē",
    月一: "yuè yī",
    一一: "yī yī",
    二一: "èr yī",
    三一: "sān yī",
    四一: "sì yī",
    五一: "wǔ yī",
    六一: "liù yī",
    七一: "qī yī",
    八一: "bā yī",
    九一: "jiǔ yī",
    "一〇": "yī líng",
    一零: "yī líng",
    一二: "yī èr",
    一三: "yī sān",
    一四: "yī sì",
    一五: "yī wǔ",
    一六: "yī liù",
    一七: "yī qī",
    一八: "yī bā",
    一九: "yī jiǔ",
    一又: "yī yòu",
    一饼: "yī bǐng",
    一楼: "yī lóu",
    为例: "wéi lì",
    为准: "wéi zhǔn",
    沧海: "cāng hǎi",
    难为: "nán wéi",
    责难: "zé nàn",
    患难: "huàn nàn",
    磨难: "mó nàn",
    大难: "dà nàn",
    刁难: "diāo nàn",
    殉难: "xùn nàn",
    落难: "luò nàn",
    罹难: "lí nàn",
    灾难: "zāi nàn",
    难民: "nàn mín",
    苦难: "kǔ nàn",
    危难: "wēi nàn",
    发难: "fā nàn",
    逃难: "táo nàn",
    避难: "bì nàn",
    遇难: "yù nàn",
    阻难: "zǔ nàn",
    厄难: "è nàn",
    徇难: "xùn nàn",
    空难: "kōng nàn",
    喜欢: "xǐ huan",
    朝朝: "zhāo zhāo",
    不行: "bù xíng",
    轧轧: "yà yà",
    弯曲: "wān qū",
    扭曲: "niǔ qū",
    曲直: "qū zhí",
    委曲: "wěi qū",
    酒曲: "jiǔ qū",
    曲径: "qū jìng",
    曲解: "qū jiě",
    歪曲: "wāi qū",
    曲线: "qū xiàn",
    曲阜: "qū fù",
    九曲: "jiǔ qū",
    曲折: "qū zhé",
    曲肱: "qū gōng",
    曲意: "qū yì",
    仡佬: "gē lǎo"
  };
  const Pattern2 = Object.keys(DICT2).map((key) => ({
    zh: key,
    pinyin: DICT2[key],
    probability: 2e-8,
    length: 2,
    priority: Priority.Normal,
    dict: Symbol("dict2")
  }));
  const DICT3 = {
    为什么: "wèi shén me",
    实际上: "shí jì shang",
    检察长: "jiǎn chá zhǎng",
    干什么: "gàn shén me",
    这会儿: "zhè huì er",
    尽可能: "jǐn kě néng",
    董事长: "dǒng shì zhǎng",
    了不起: "liǎo bù qǐ",
    参谋长: "cān móu zhǎng",
    朝鲜族: "cháo xiǎn zú",
    海内外: "hǎi nèi wài",
    禁不住: "jīn bú zhù",
    柏拉图: "bó lā tú",
    不在乎: "bú zài hu",
    洛杉矶: "luò shān jī",
    有点儿: "yǒu diǎn er",
    迫击炮: "pǎi jī pào",
    不得了: "bù dé liǎo",
    马尾松: "mǎ wěi sōng",
    运输量: "yùn shū liàng",
    发脾气: "fā pí qi",
    士大夫: "shì dà fū",
    鸭绿江: "yā lù jiāng",
    压根儿: "yà gēn er",
    对得起: "duì de qǐ",
    那会儿: "nà huì er",
    自个儿: "zì gě er",
    物理量: "wù lǐ liàng",
    怎么着: "zěn me zhāo",
    明晃晃: "míng huǎng huǎng",
    节假日: "jié jià rì",
    心里话: "xīn lǐ huà",
    发行量: "fā xíng liàng",
    兴冲冲: "xìng chōng chōng",
    分子量: "fēn zǐ liàng",
    国子监: "guó zǐ jiàn",
    老大难: "lǎo dà nán",
    党内外: "dǎng nèi wài",
    这么着: "zhè me zhāo",
    少奶奶: "shào nǎi nai",
    暗地里: "àn dì lǐ",
    更年期: "gēng nián qī",
    工作量: "gōng zuò liàng",
    背地里: "bèi dì lǐ",
    山里红: "shān li hóng",
    好好儿: "hǎo hāo er",
    交响乐: "jiāo xiǎng yuè",
    好意思: "hǎo yì si",
    吐谷浑: "tǔ yù hún",
    没意思: "méi yì si",
    理发师: "lǐ fà shī",
    塔什干: "tǎ shí gān",
    充其量: "chōng qí liàng",
    靠得住: "kào de zhù",
    车行道: "chē xíng dào",
    人行道: "rén xíng dào",
    中郎将: "zhōng láng jiàng",
    照明弹: "zhào míng dàn",
    烟幕弹: "yān mù dàn",
    没奈何: "mò nài hé",
    乱哄哄: "luàn hōng hōng",
    惠更斯: "huì gēng sī",
    载重量: "zài zhòng liàng",
    瞧得起: "qiáo de qǐ",
    纪传体: "jì zhuàn tǐ",
    阿房宫: "ē páng gōng",
    卷心菜: "juǎn xīn cài",
    戏班子: "xì bān zi",
    过得去: "guò de qù",
    花岗石: "huā gāng shí",
    外甥女: "wài sheng nǚ",
    团团转: "tuán tuán zhuàn",
    大堡礁: "dà bǎo jiāo",
    燃烧弹: "rán shāo dàn",
    劳什子: "láo shí zi",
    摇滚乐: "yáo gǔn yuè",
    夹竹桃: "jiā zhú táo",
    闹哄哄: "nào hōng hōng",
    三连冠: "sān lián guàn",
    重头戏: "zhòng tóu xì",
    二人转: "èr rén zhuàn",
    节骨眼: "jiē gǔ yǎn",
    知识面: "zhī shi miàn",
    护士长: "hù shi zhǎng",
    信号弹: "xìn hào dàn",
    干电池: "gān diàn chí",
    枪杆子: "qiāng gǎn zi",
    哭丧棒: "kū sāng bàng",
    鼻咽癌: "bí yān ái",
    瓦岗军: "wǎ gāng jūn",
    买得起: "mǎi de qǐ",
    癞蛤蟆: "lài há ma",
    脊梁骨: "jǐ liang gǔ",
    子母弹: "zǐ mǔ dàn",
    开小差: "kāi xiǎo chāi",
    女强人: "nǚ qiáng rén",
    英雄传: "yīng xióng zhuàn",
    爵士乐: "jué shì yuè",
    说笑话: "shuō xiào hua",
    碰头会: "pèng tóu huì",
    玻璃钢: "bō li gāng",
    曳光弹: "yè guāng dàn",
    少林拳: "shào lín quán",
    咏叹调: "yǒng tàn diào",
    少先队: "shào xiān duì",
    灵长目: "líng zhǎng mù",
    对着干: "duì zhe gàn",
    蒙蒙亮: "méng méng liàng",
    软骨头: "ruǎn gǔ tou",
    铺盖卷: "pū gài juǎn",
    和稀泥: "huò xī ní",
    背黑锅: "bēi hēi guō",
    红彤彤: "hóng tōng tōng",
    武侯祠: "wǔ hóu cí",
    打哆嗦: "dǎ duō suo",
    户口簿: "hù kǒu bù",
    马尾藻: "mǎ wěi zǎo",
    夜猫子: "yè māo zi",
    打手势: "dǎ shǒu shì",
    龙王爷: "lóng wáng yé",
    气头上: "qì tóu shang",
    糊涂虫: "hú tu chóng",
    笔杆子: "bǐ gǎn zi",
    占便宜: "zhàn pián yi",
    打主意: "dǎ zhǔ yì",
    多弹头: "duō dàn tóu",
    露一手: "lòu yì shǒu",
    堰塞湖: "yàn sè hú",
    保得住: "bǎo de zhù",
    趵突泉: "bào tū quán",
    奥得河: "ào de hé",
    司务长: "sī wù zhǎng",
    禁不起: "jīn bù qǐ",
    什刹海: "shí chà hǎi",
    莲花落: "lián huā lào",
    见世面: "jiàn shì miàn",
    豁出去: "huō chū qù",
    电位差: "diàn wèi chā",
    挨个儿: "āi gè er",
    那阵儿: "nà zhèn er",
    肺活量: "fèi huó liàng",
    大师傅: "dà shī fu",
    掷弹筒: "zhì dàn tǒng",
    打呼噜: "dǎ hū lu",
    广渠门: "ān qú mén",
    未见得: "wèi jiàn dé",
    大婶儿: "dà shěn er",
    谈得来: "tán de lái",
    脚丫子: "jiǎo yā zi",
    空包弹: "kōng bāo dàn",
    窝里斗: "wō li dòu",
    弹着点: "dàn zhuó diǎn",
    个头儿: "gè tóu er",
    看得起: "kàn de qǐ",
    糊涂账: "hú tu zhàng",
    大猩猩: "dà xīng xing",
    禁得起: "jīn de qǐ",
    法相宗: "fǎ xiàng zōng",
    可怜相: "kě lián xiàng",
    吃得下: "chī de xià",
    汉堡包: "hàn bǎo bāo",
    闹嚷嚷: "nào rāng rāng",
    数来宝: "shǔ lái bǎo",
    合得来: "hé de lái",
    干性油: "gān xìng yóu",
    闷葫芦: "mèn hú lu",
    呱呱叫: "guā guā jiào",
    西洋参: "xī yáng shēn",
    林荫道: "lín yīn dào",
    拉家常: "lā jiā cháng",
    卷铺盖: "juǎn pū gài",
    过得硬: "guò de yìng",
    飞将军: "fēi jiāng jūn",
    挑大梁: "tiǎo dà liáng",
    哈巴狗: "hǎ ba gǒu",
    过家家: "guò jiā jiā",
    催泪弹: "cuī lèi dàn",
    雨夹雪: "yǔ jiā xuě",
    敲竹杠: "qiāo zhú gàng",
    列车长: "liè chē zhǎng",
    华达呢: "huá dá ní",
    犯得着: "fàn de zháo",
    土疙瘩: "tǔ gē da",
    煞风景: "shā fēng jǐng",
    轻量级: "qīng liàng jí",
    羞答答: "xiū dā dā",
    石子儿: "shí zǐ er",
    达姆弹: "dá mǔ dàn",
    科教片: "kē jiào piān",
    侃大山: "kǎn dà shān",
    丁点儿: "dīng diǎn er",
    吃得消: "chī de xiāo",
    捋虎须: "luō hǔ xū",
    高丽参: "gāo lí shēn",
    众生相: "zhòng shēng xiàng",
    咽峡炎: "yān xiá yán",
    禁得住: "jīn de zhù",
    吃得开: "chī de kāi",
    柞丝绸: "zuò sī chóu",
    应声虫: "yìng shēng chóng",
    数得着: "shǔ de zháo",
    傻劲儿: "shǎ jìn er",
    铅玻璃: "qiān bō li",
    可的松: "kě dì sōng",
    划得来: "huá de lái",
    晕乎乎: "yūn hū hū",
    屎壳郎: "shǐ ke làng",
    尥蹶子: "liào juě zi",
    藏红花: "zàng hóng huā",
    闷罐车: "mèn guàn chē",
    卡脖子: "qiǎ bó zi",
    红澄澄: "hóng deng deng",
    赶得及: "gǎn de jí",
    当间儿: "dāng jiàn er",
    露马脚: "lòu mǎ jiǎo",
    鸡内金: "jī nèi jīn",
    犯得上: "fàn de shàng",
    钉齿耙: "dīng chǐ bà",
    饱和点: "bǎo hé diǎn",
    龙爪槐: "lóng zhǎo huái",
    喝倒彩: "hè dào cǎi",
    定冠词: "dìng guàn cí",
    担担面: "dàn dan miàn",
    吃得住: "chī de zhù",
    爪尖儿: "zhuǎ jiān er",
    支着儿: "zhī zhāo er",
    折跟头: "zhē gēn tou",
    阴着儿: "yīn zhāo er",
    烟卷儿: "yān juǎn er",
    宣传弹: "xuān chuán dàn",
    信皮儿: "xìn pí er",
    弦切角: "xián qiē jiǎo",
    缩砂密: "sù shā mì",
    说得来: "shuō de lái",
    水漂儿: "shuǐ piāo er",
    耍笔杆: "shuǎ bǐ gǎn",
    数得上: "shǔ de shàng",
    数不着: "shǔ bù zháo",
    数不清: "shǔ bù qīng",
    什件儿: "shí jiàn er",
    生死簿: "shēng sǐ bù",
    扇风机: "shān fēng jī",
    撒呓挣: "sā yì zheng",
    日记簿: "rì jì bù",
    热得快: "rè de kuài",
    亲家公: "qìng jia gōng",
    奇函数: "jī hán shù",
    拍纸簿: "pāi zhǐ bù",
    努劲儿: "nǔ jìn er",
    泥娃娃: "ní wá wa",
    内切圆: "nèi qiē yuán",
    哪会儿: "nǎ huì er",
    闷头儿: "mēn tóu er",
    没谱儿: "méi pǔ er",
    铆劲儿: "mǎo jìn er",
    溜肩膀: "liū jiān bǎng",
    了望台: "liào wàng tái",
    老来少: "lǎo lái shào",
    坤角儿: "kūn jué er",
    考勤簿: "kǎo qín bù",
    卷笔刀: "juǎn bǐ dāo",
    进给量: "jìn jǐ liàng",
    划不来: "huá bù lái",
    汗褂儿: "hàn guà er",
    鼓囊囊: "gǔ nāng nāng",
    够劲儿: "gòu jìn er",
    公切线: "gōng qiē xiàn",
    搁得住: "gé de zhù",
    赶浪头: "gǎn làng tóu",
    赶得上: "gǎn de shàng",
    干酵母: "gān jiào mǔ",
    嘎渣儿: "gā zhā er",
    嘎嘣脆: "gā bēng cuì",
    对得住: "duì de zhù",
    逗闷子: "dòu mèn zi",
    顶呱呱: "dǐng guā guā",
    滴溜儿: "dī liù er",
    大轴子: "dà zhòu zi",
    打板子: "dǎ bǎn zi",
    寸劲儿: "cùn jìn er",
    醋劲儿: "cù jìn er",
    揣手儿: "chuāi shǒu er",
    冲劲儿: "chòng jìn er",
    吃得来: "chī de lái",
    不更事: "bù gēng shì",
    奔头儿: "bèn tou er",
    百夫长: "bǎi fū zhǎng",
    娃娃亲: "wá wa qīn",
    死劲儿: "sǐ jìn er",
    骨朵儿: "gū duǒ er",
    功劳簿: "gōng láo bù",
    都江堰: "dū jiāng yàn",
    一担水: "yí dàn shuǐ",
    否极泰: "pǐ jí tài",
    泰来否: "tài lái pǐ",
    咳特灵: "ké tè líng",
    开户行: "kāi hù háng",
    郦食其: "lì yì jī",
    花事了: "huā shì liǎo",
    // 一字变调的词语（与两个字的字典冲突，故需要重新定义）
    一更更: "yì gēng gēng",
    一重山: "yì chóng shān",
    风一更: "fēng yì gēng",
    雪一更: "xuě yì gēng",
    归一码: "guī yì mǎ",
    // 一字不变调的词语（需要增补更多）
    星期一: "xīng qī yī",
    礼拜一: "lǐ bài yī",
    一季度: "yī jì dù",
    一月一: "yī yuè yī",
    一字马: "yī zì mǎ",
    一是一: "yī shì yī",
    一次方: "yī cì fāng",
    一阳指: "yī yáng zhǐ",
    一字决: "yī zì jué",
    一年级: "yī nián jí",
    一不做: "yī bú zuò",
    屈戌儿: "qū qu ér",
    难为水: "nán wéi shuǐ",
    难为情: "nán wéi qíng",
    行一行: "xíng yì háng",
    别别的: "biè bié de",
    干哪行: "gàn nǎ háng",
    干一行: "gàn yì háng",
    曲别针: "qū bié zhēn"
  };
  const Pattern3 = Object.keys(DICT3).map((key) => ({
    zh: key,
    pinyin: DICT3[key],
    probability: 2e-8,
    length: 3,
    priority: Priority.Normal,
    dict: Symbol("dict3")
  }));
  const DICT4 = {
    成吉思汗: "chéng jí sī hán",
    四通八达: "sì tōng bā dá",
    一模一样: "yì mú yí yàng",
    青藏高原: "qīng zàng gāo yuán",
    阿弥陀佛: "ē mí tuó fó",
    解放思想: "jiè fàng sī xiǎng",
    所作所为: "suǒ zuò suǒ wéi",
    迷迷糊糊: "mí mí hu hū",
    荷枪实弹: "hè qiāng shí dàn",
    兴高采烈: "xìng gāo cǎi liè",
    无能为力: "wú néng wéi lì",
    布鲁塞尔: "bù lǔ sài ěr",
    为所欲为: "wéi suǒ yù wéi",
    克什米尔: "kè shí mǐ ěr",
    没完没了: "méi wán méi liǎo",
    不为人知: "bù wéi rén zhī",
    结结巴巴: "jiē jiē bā bā",
    前仆后继: "qián pū hòu jì",
    铺天盖地: "pū tiān gài dì",
    直截了当: "zhí jié liǎo dàng",
    供不应求: "gōng bú yìng qiú",
    御史大夫: "yù shǐ dà fū",
    不为瓦全: "bù wéi wǎ quán",
    不可收拾: "bù kě shōu shi",
    胡作非为: "hú zuò fēi wéi",
    分毫不差: "fēn háo bú chà",
    模模糊糊: "mó mó hu hū",
    不足为奇: "bù zú wéi qí",
    悄无声息: "qiǎo wú shēng xī",
    了如指掌: "liǎo rú zhǐ zhǎng",
    深恶痛绝: "shēn wù tòng jué",
    高高兴兴: "gāo gāo xìng xìng",
    唉声叹气: "āi shēng tàn qì",
    汉藏语系: "hàn zàng yǔ xì",
    处心积虑: "chǔ xīn jī lǜ",
    泣不成声: "qì bù chéng shēng",
    半夜三更: "bàn yè sān gēng",
    失魂落魄: "shī hún luò pò",
    二十八宿: "èr shí bā xiù",
    转来转去: "zhuàn lái zhuàn qù",
    数以万计: "shǔ yǐ wàn jì",
    相依为命: "xiāng yī wéi mìng",
    恋恋不舍: "liàn liàn bù shě",
    屈指可数: "qū zhǐ kě shǔ",
    神出鬼没: "shén chū guǐ mò",
    结结实实: "jiē jiē shí shí",
    有的放矢: "yǒu dì fàng shǐ",
    叽哩咕噜: "jī lǐ gū lū",
    调兵遣将: "diào bīng qiǎn jiàng",
    载歌载舞: "zài gē zài wǔ",
    转危为安: "zhuǎn wēi wéi ān",
    踏踏实实: "tā tā shi shí",
    桑给巴尔: "sāng jǐ bā ěr",
    装模作样: "zhuāng mú zuò yàng",
    见义勇为: "jiàn yì yǒng wéi",
    相差无几: "xiāng chā wú jǐ",
    叹为观止: "tàn wéi guān zhǐ",
    闷闷不乐: "mèn mèn bú lè",
    喜怒哀乐: "xǐ nù āi lè",
    鲜为人知: "xiǎn wéi rén zhī",
    张牙舞爪: "zhāng yá wǔ zhǎo",
    为非作歹: "wéi fēi zuò dǎi",
    含糊其辞: "hán hú qí cí",
    疲于奔命: "pí yú bēn mìng",
    勉为其难: "miǎn wéi qí nán",
    依依不舍: "yī yī bù shě",
    顶头上司: "dǐng tóu shàng si",
    不着边际: "bù zhuó biān jì",
    大模大样: "dà mú dà yàng",
    寻欢作乐: "xún huān zuò lè",
    一走了之: "yì zǒu liǎo zhī",
    字里行间: "zì lǐ háng jiān",
    含含糊糊: "hán hán hu hū",
    恰如其分: "qià rú qí fèn",
    破涕为笑: "pò tì wéi xiào",
    深更半夜: "shēn gēng bàn yè",
    千差万别: "qiān chā wàn bié",
    数不胜数: "shǔ bú shèng shǔ",
    据为己有: "jù wéi jǐ yǒu",
    天旋地转: "tiān xuán dì zhuàn",
    养尊处优: "yǎng zūn chǔ yōu",
    玻璃纤维: "bō li xiān wéi",
    吵吵闹闹: "chāo chao nào nào",
    晕头转向: "yūn tóu zhuàn xiàng",
    土生土长: "tǔ shēng tǔ zhǎng",
    宁死不屈: "nìng sǐ bù qū",
    不省人事: "bù xǐng rén shì",
    尽力而为: "jìn lì ér wéi",
    精明强干: "jīng míng qiáng gàn",
    唠唠叨叨: "láo lao dāo dāo",
    叽叽喳喳: "jī ji zhā zhā",
    功不可没: "gōng bù kě mò",
    锲而不舍: "qiè ér bù shě",
    排忧解难: "pái yōu jiě nàn",
    稀里糊涂: "xī li hú tú",
    各有所长: "gè yǒu suǒ cháng",
    的的确确: "dí dí què què",
    哄堂大笑: "hōng táng dà xiào",
    听而不闻: "tīng ér bù wén",
    刀耕火种: "dāo gēng huǒ zhòng",
    内分泌腺: "nèi fèn mì xiàn",
    化险为夷: "huà xiǎn wéi yí",
    百发百中: "bǎi fā bǎi zhòng",
    重见天日: "chóng jiàn tiān rì",
    反败为胜: "fǎn bài wéi shèng",
    一了百了: "yì liǎo bǎi liǎo",
    大大咧咧: "dà da liē liē",
    心急火燎: "xīn jí huǒ liǎo",
    粗心大意: "cū xīn dà yi",
    鸡皮疙瘩: "jī pí gē da",
    夷为平地: "yí wéi píng dì",
    日积月累: "rì jī yuè lěi",
    设身处地: "shè shēn chǔ dì",
    投其所好: "tóu qí suǒ hào",
    间不容发: "jiān bù róng fà",
    人满为患: "rén mǎn wéi huàn",
    穷追不舍: "qióng zhuī bù shě",
    为时已晚: "wéi shí yǐ wǎn",
    如数家珍: "rú shǔ jiā zhēn",
    心里有数: "xīn lǐ yǒu shù",
    以牙还牙: "yǐ yá huán yá",
    神不守舍: "shén bù shǒu shě",
    孟什维克: "mèng shí wéi kè",
    各自为战: "gè zì wéi zhàn",
    怨声载道: "yuàn shēng zài dào",
    救苦救难: "jiù kǔ jiù nàn",
    好好先生: "hǎo hǎo xiān sheng",
    怪模怪样: "guài mú guài yàng",
    抛头露面: "pāo tóu lù miàn",
    游手好闲: "yóu shǒu hào xián",
    无所不为: "wú suǒ bù wéi",
    调虎离山: "diào hǔ lí shān",
    步步为营: "bù bù wéi yíng",
    好大喜功: "hào dà xǐ gōng",
    众矢之的: "zhòng shǐ zhī dì",
    长生不死: "cháng shēng bù sǐ",
    蔚为壮观: "wèi wéi zhuàng guān",
    不可胜数: "bù kě shèng shǔ",
    鬼使神差: "guǐ shǐ shén chāi",
    洁身自好: "jié shēn zì hào",
    敢作敢为: "gǎn zuò gǎn wéi",
    茅塞顿开: "máo sè dùn kāi",
    走马换将: "zǒu mǎ huàn jiàng",
    为时过早: "wéi shí guò zǎo",
    为人师表: "wéi rén shī biǎo",
    阴差阳错: "yīn chā yáng cuò",
    油腔滑调: "yóu qiāng huá diào",
    重蹈覆辙: "chóng dǎo fù zhé",
    骂骂咧咧: "mà ma liē liē",
    絮絮叨叨: "xù xù dāo dāo",
    如履薄冰: "rú lǚ bó bīng",
    损兵折将: "sǔn bīng zhé jiàng",
    拐弯抹角: "guǎi wān mò jiǎo",
    像模像样: "xiàng mú xiàng yàng",
    供过于求: "gōng guò yú qiú",
    开花结果: "kāi huā jiē guǒ",
    仔仔细细: "zǐ zǐ xì xì",
    川藏公路: "chuān zàng gōng lù",
    河北梆子: "hé běi bāng zi",
    长年累月: "cháng nián lěi yuè",
    正儿八经: "zhèng er bā jīng",
    不识抬举: "bù shí tái ju",
    重振旗鼓: "chóng zhèn qí gǔ",
    气息奄奄: "qì xī yān yān",
    紧追不舍: "jǐn zhuī bù shě",
    服服帖帖: "fú fu tiē tiē",
    强词夺理: "qiǎng cí duó lǐ",
    噼里啪啦: "pī li pā lā",
    人才济济: "rén cái jǐ jǐ",
    发人深省: "fā rén shēn xǐng",
    不足为凭: "bù zú wéi píng",
    为富不仁: "wéi fù bù rén",
    连篇累牍: "lián piān lěi dú",
    呼天抢地: "hū tiān qiāng dì",
    落落大方: "luò luò dà fāng",
    自吹自擂: "zì chuī zì léi",
    乐善好施: "lè shàn hào shī",
    以攻为守: "yǐ gōng wéi shǒu",
    磨磨蹭蹭: "mó mó cèng cèng",
    削铁如泥: "xuē tiě rú ní",
    助纣为虐: "zhù zhòu wéi nüè",
    以退为进: "yǐ tuì wéi jìn",
    嘁嘁喳喳: "qī qī chā chā",
    枪林弹雨: "qiāng lín dàn yǔ",
    令人发指: "lìng rén fà zhǐ",
    转败为胜: "zhuǎn bài wéi shèng",
    转弯抹角: "zhuǎn wān mò jiǎo",
    在劫难逃: "zài jié nán táo",
    正当防卫: "zhèng dàng fáng wèi",
    不足为怪: "bù zú wéi guài",
    难兄难弟: "nàn xiōng nàn dì",
    咿咿呀呀: "yī yī yā yā",
    弹尽粮绝: "dàn jìn liáng jué",
    阿谀奉承: "ē yú fèng chéng",
    稀里哗啦: "xī li huā lā",
    返老还童: "fǎn lǎo huán tóng",
    好高骛远: "hào gāo wù yuǎn",
    鹿死谁手: "lù sǐ shéi shǒu",
    差强人意: "chā qiáng rén yì",
    大吹大擂: "dà chuī dà léi",
    成家立业: "chéng jiā lì yè",
    自怨自艾: "zì yuàn zì yì",
    负债累累: "fù zhài lěi lěi",
    古为今用: "gǔ wéi jīn yòng",
    入土为安: "rù tǔ wéi ān",
    下不为例: "xià bù wéi lì",
    一哄而上: "yì hōng ér shàng",
    没头苍蝇: "méi tóu cāng ying",
    天差地远: "tiān chā dì yuǎn",
    风卷残云: "fēng juǎn cán yún",
    多灾多难: "duō zāi duō nàn",
    乳臭未干: "rǔ xiù wèi gān",
    行家里手: "háng jiā lǐ shǒu",
    狼狈为奸: "láng bèi wéi jiān",
    处变不惊: "chǔ biàn bù jīng",
    一唱一和: "yí chàng yí hè",
    一念之差: "yí niàn zhī chā",
    金蝉脱壳: "jīn chán tuō qiào",
    滴滴答答: "dī dī dā dā",
    硕果累累: "shuò guǒ léi léi",
    好整以暇: "hào zhěng yǐ xiá",
    红得发紫: "hóng de fā zǐ",
    传为美谈: "chuán wéi měi tán",
    富商大贾: "fù shāng dà gǔ",
    四海为家: "sì hǎi wéi jiā",
    了若指掌: "liǎo ruò zhǐ zhǎng",
    大有可为: "dà yǒu kě wéi",
    出头露面: "chū tóu lù miàn",
    鼓鼓囊囊: "gǔ gu nāng nāng",
    窗明几净: "chuāng míng jī jìng",
    泰然处之: "tài rán chǔ zhī",
    怒发冲冠: "nù fà chōng guān",
    有机玻璃: "yǒu jī bō li",
    骨头架子: "gǔ tou jià zi",
    义薄云天: "yì bó yún tiān",
    一丁点儿: "yī dīng diǎn er",
    时来运转: "shí lái yùn zhuǎn",
    陈词滥调: "chén cí làn diào",
    化整为零: "huà zhěng wéi líng",
    火烧火燎: "huǒ shāo huǒ liǎo",
    干脆利索: "gàn cuì lì suǒ",
    吊儿郎当: "diào er láng dāng",
    广种薄收: "guǎng zhòng bó shōu",
    种瓜得瓜: "zhòng guā dé guā",
    种豆得豆: "zhòng dòu dé dòu",
    难舍难分: "nán shě nán fēn",
    歃血为盟: "shà xuè wéi méng",
    奋发有为: "fèn fā yǒu wéi",
    阴错阳差: "yīn cuò yáng chā",
    东躲西藏: "dōng duǒ xī cáng",
    烟熏火燎: "yān xūn huǒ liǎo",
    钻牛角尖: "zuān niú jiǎo jiān",
    乔装打扮: "qiáo zhuāng dǎ bàn",
    改弦更张: "gǎi xián gēng zhāng",
    河南梆子: "hé nán bāng zi",
    好吃懒做: "hào chī lǎn zuò",
    何乐不为: "hé lè bù wéi",
    大出风头: "dà chū fēng tóu",
    攻城掠地: "gōng chéng lüè dì",
    漂漂亮亮: "piào piào liang liang",
    折衷主义: "zhé zhōng zhǔ yì",
    大马哈鱼: "dà mǎ hǎ yú",
    绿树成荫: "lǜ shù chéng yīn",
    率先垂范: "shuài xiān chuí fàn",
    家长里短: "jiā cháng lǐ duǎn",
    宽大为怀: "kuān dà wéi huái",
    左膀右臂: "zuǒ bǎng yòu bì",
    一笑了之: "yí xiào liǎo zhī",
    天下为公: "tiān xià wéi gōng",
    还我河山: "huán wǒ hé shān",
    何足为奇: "hé zú wéi qí",
    好自为之: "hǎo zì wéi zhī",
    风姿绰约: "fēng zī chuò yuē",
    大雨滂沱: "dà yǔ pāng tuó",
    传为佳话: "chuán wéi jiā huà",
    吃里扒外: "chī lǐ pá wài",
    重操旧业: "chóng cāo jiù yè",
    小家子气: "xiǎo jiā zi qì",
    少不更事: "shào bù gēng shì",
    难分难舍: "nán fēn nán shě",
    添砖加瓦: "tiān zhuān jiā wǎ",
    是非分明: "shì fēi fēn míng",
    舍我其谁: "shě wǒ qí shuí",
    偏听偏信: "piān tīng piān xìn",
    量入为出: "liàng rù wéi chū",
    降龙伏虎: "xiáng lóng fú hǔ",
    钢化玻璃: "gāng huà bō li",
    正中下怀: "zhèng zhòng xià huái",
    以身许国: "yǐ shēn xǔ guó",
    一语中的: "yì yǔ zhòng dì",
    丧魂落魄: "sàng hún luò pò",
    三座大山: "sān zuò dà shān",
    济济一堂: "jǐ jǐ yì táng",
    好事之徒: "hào shì zhī tú",
    干净利索: "gàn jìng lì suǒ",
    出将入相: "chū jiàng rù xiàng",
    袅袅娜娜: "niǎo niǎo nuó nuó",
    狐狸尾巴: "hú li wěi ba",
    好逸恶劳: "hào yì wù láo",
    大而无当: "dà ér wú dàng",
    打马虎眼: "dǎ mǎ hu yǎn",
    板上钉钉: "bǎn shàng dìng dīng",
    吆五喝六: "yāo wǔ hè liù",
    虾兵蟹将: "xiā bīng xiè jiàng",
    水调歌头: "shuǐ diào gē tóu",
    数典忘祖: "shǔ diǎn wàng zǔ",
    人事不省: "rén shì bù xǐng",
    曲高和寡: "qǔ gāo hè guǎ",
    屡教不改: "lǚ jiào bù gǎi",
    互为因果: "hù wéi yīn guǒ",
    互为表里: "hù wéi biǎo lǐ",
    厚此薄彼: "hòu cǐ bó bǐ",
    过关斩将: "guò guān zhǎn jiàng",
    疙疙瘩瘩: "gē ge dā dā",
    大腹便便: "dà fù pián pián",
    走为上策: "zǒu wéi shàng cè",
    冤家对头: "yuān jia duì tóu",
    有隙可乘: "yǒu xì kě chèng",
    一鳞半爪: "yì lín bàn zhǎo",
    片言只语: "piàn yán zhǐ yǔ",
    开花结实: "kāi huā jié shí",
    经年累月: "jīng nián lěi yuè",
    含糊其词: "hán hú qí cí",
    寡廉鲜耻: "guǎ lián xiǎn chǐ",
    成年累月: "chéng nián lěi yuè",
    不徇私情: "bú xùn sī qíng",
    不当人子: "bù dāng rén zǐ",
    膀大腰圆: "bǎng dà yāo yuán",
    指腹为婚: "zhǐ fù wéi hūn",
    这么点儿: "zhè me diǎn er",
    意兴索然: "yì xīng suǒ rán",
    绣花枕头: "xiù huā zhěn tou",
    无的放矢: "wú dì fàng shǐ",
    望闻问切: "wàng wén wèn qiè",
    舍己为人: "shě jǐ wèi rén",
    穷年累月: "qióng nián lěi yuè",
    排难解纷: "pái nàn jiě fēn",
    处之泰然: "chǔ zhī tài rán",
    指鹿为马: "zhǐ lù wéi mǎ",
    危如累卵: "wēi rú lěi luǎn",
    天兵天将: "tiān bīng tiān jiàng",
    舍近求远: "shě jìn qiú yuǎn",
    南腔北调: "nán qiāng běi diào",
    苦中作乐: "kǔ zhōng zuò lè",
    厚积薄发: "hòu jī bó fā",
    臭味相投: "xiù wèi xiāng tóu",
    长幼有序: "zhǎng yòu yǒu xù",
    逼良为娼: "bī liáng wéi chāng",
    悲悲切切: "bēi bēi qiè qiē",
    败军之将: "bài jūn zhī jiàng",
    欺行霸市: "qī háng bà shì",
    削足适履: "xuē zú shì lǚ",
    先睹为快: "xiān dǔ wéi kuài",
    啼饥号寒: "tí jī háo hán",
    疏不间亲: "shū bú jiàn qīn",
    神差鬼使: "shén chāi guǐ shǐ",
    敲敲打打: "qiāo qiāo dǎ dǎ",
    平铺直叙: "píng pū zhí xù",
    没头没尾: "méi tóu mò wěi",
    寥寥可数: "liáo liáo kě shǔ",
    哼哈二将: "hēng hā èr jiàng",
    鹤发童颜: "hè fà tóng yán",
    各奔前程: "gè bèn qián chéng",
    弹无虚发: "dàn wú xū fā",
    大人先生: "dà rén xiān sheng",
    与民更始: "yǔ mín gēng shǐ",
    树碑立传: "shù bēi lì zhuàn",
    是非得失: "shì fēi dé shī",
    实逼处此: "shí bī chǔ cǐ",
    塞翁失马: "sài wēng shī mǎ",
    日薄西山: "rì bó xī shān",
    切身体会: "qiè shēn tǐ huì",
    片言只字: "piàn yán zhǐ zì",
    跑马卖解: "pǎo mǎ mài xiè",
    宁折不弯: "nìng zhé bù wān",
    零零散散: "líng líng sǎn sǎn",
    量体裁衣: "liàng tǐ cái yī",
    连中三元: "lián zhòng sān yuán",
    礼崩乐坏: "lǐ bēng yuè huài",
    不为已甚: "bù wéi yǐ shèn",
    转悲为喜: "zhuǎn bēi wéi xǐ",
    以眼还眼: "yǐ yǎn huán yǎn",
    蔚为大观: "wèi wéi dà guān",
    未为不可: "wèi wéi bù kě",
    童颜鹤发: "tóng yán hè fà",
    朋比为奸: "péng bǐ wéi jiān",
    莫此为甚: "mò cǐ wéi shèn",
    夹枪带棒: "jiā qiāng dài bàng",
    富商巨贾: "fù shāng jù jiǎ",
    淡然处之: "dàn rán chǔ zhī",
    箪食壶浆: "dān shí hú jiāng",
    创巨痛深: "chuāng jù tòng shēn",
    草长莺飞: "cǎo zhǎng yīng fēi",
    坐视不救: "zuò shī bú jiù",
    以己度人: "yǐ jǐ duó rén",
    随行就市: "suí háng jiù shì",
    文以载道: "wén yǐ zài dào",
    文不对题: "wén bú duì tí",
    铁板钉钉: "tiě bǎn dìng dīng",
    身体发肤: "shēn tǐ fà fū",
    缺吃少穿: "quē chī shǎo chuān",
    目无尊长: "mù wú zūn zhǎng",
    吉人天相: "jí rén tiān xiàng",
    毁家纾难: "huǐ jiā shū nàn",
    钢筋铁骨: "gāng jīn tiě gǔ",
    丢卒保车: "diū zú bǎo jū",
    丢三落四: "diū sān là sì",
    闭目塞听: "bì mù sè tīng",
    削尖脑袋: "xuē jiān nǎo dài",
    为非作恶: "wéi fēi zuò è",
    人才难得: "rén cái nán dé",
    情非得已: "qíng fēi dé yǐ",
    切中要害: "qiè zhòng yào hài",
    火急火燎: "huǒ jí huǒ liǎo",
    画地为牢: "huà dì wéi láo",
    好酒贪杯: "hào jiǔ tān bēi",
    长歌当哭: "cháng gē dàng kū",
    载沉载浮: "zài chén zài fú",
    遇难呈祥: "yù nàn chéng xiáng",
    榆木疙瘩: "yú mù gē da",
    以邻为壑: "yǐ lín wéi hè",
    洋为中用: "yáng wéi zhōng yòng",
    言为心声: "yán wéi xīn shēng",
    言必有中: "yán bì yǒu zhòng",
    图穷匕见: "tú qióng bǐ xiàn",
    滂沱大雨: "páng tuó dà yǔ",
    目不暇给: "mù bù xiá jǐ",
    量才录用: "liàng cái lù yòng",
    教学相长: "jiào xué xiāng zhǎng",
    悔不当初: "huǐ bù dāng chū",
    呼幺喝六: "hū yāo hè liù",
    不足为训: "bù zú wéi xùn",
    不拘形迹: "bù jū xíng jī",
    傍若无人: "páng ruò wú rén",
    罪责难逃: "zuì zé nán táo",
    自我吹嘘: "zì wǒ chuī xū",
    转祸为福: "zhuǎn huò wéi fú",
    勇冠三军: "yǒng guàn sān jūn",
    易地而处: "yì dì ér chǔ",
    卸磨杀驴: "xiè mò shā lǘ",
    玩儿不转: "wán ér bú zhuàn",
    天道好还: "tiān dào hǎo huán",
    身单力薄: "shēn dān lì bó",
    撒豆成兵: "sǎ dòu chéng bīng",
    片纸只字: "piàn zhǐ zhī zì",
    宁缺毋滥: "nìng quē wú làn",
    没没无闻: "mò mò wú wén",
    量力而为: "liàng lì ér wéi",
    历历可数: "lì lì kě shǔ",
    口碑载道: "kǒu bēi zài dào",
    君子好逑: "jūn zǐ hǎo qiú",
    好为人师: "hào wéi rén shī",
    豪商巨贾: "háo shāng jù jiǎ",
    各有所好: "gè yǒu suǒ hào",
    度德量力: "duó dé liàng lì",
    指天为誓: "zhǐ tiān wéi shì",
    逸兴遄飞: "yì xìng chuán fēi",
    心宽体胖: "xīn kuān tǐ pán",
    为德不卒: "wéi dé bù zú",
    天下为家: "tiān xià wéi jiā",
    视为畏途: "shì wéi wèi tú",
    三灾八难: "sān zāi bā nàn",
    沐猴而冠: "mù hóu ér guàn",
    哩哩啦啦: "lī li lā lā",
    见缝就钻: "jiàn fèng jiù zuān",
    夹层玻璃: "jiā céng bō li",
    急公好义: "jí gōng hào yì",
    积年累月: "jī nián lěi yuè",
    划地为牢: "huá dì wéi láo",
    更名改姓: "gēng míng gǎi xìng",
    奉为圭臬: "fèng wéi guī niè",
    多难兴邦: "duō nàn xīng bāng",
    不破不立: "bú pò bú lì",
    坐地自划: "zuò dì zì huá",
    坐不重席: "zuò bù chóng xí",
    坐不窥堂: "zuò bù kuī táng",
    作嫁衣裳: "zuò jià yī shang",
    左枝右梧: "zuǒ zhī yòu wú",
    左宜右有: "zuǒ yí yòu yǒu",
    钻头觅缝: "zuān tóu mì fèng",
    钻天打洞: "zuān tiān dǎ dòng",
    钻皮出羽: "zuān pí chū yǔ",
    钻火得冰: "zuān huǒ dé bīng",
    钻洞觅缝: "zuàn dòng mì féng",
    钻冰求火: "zuān bīng qiú huǒ",
    子为父隐: "zǐ wéi fù yǐn",
    擢发难数: "zhuó fà nán shǔ",
    着人先鞭: "zhuó rén xiān biān",
    斫雕为朴: "zhuó diāo wéi pǔ",
    锥处囊中: "zhuī chǔ náng zhōng",
    椎心饮泣: "chuí xīn yǐn qì",
    椎心泣血: "chuí xīn qì xuè",
    椎牛飨士: "chuí niú xiǎng shì",
    椎牛歃血: "chuí niú shà xuè",
    椎牛发冢: "chuí niú fà zhǒng",
    椎埋屠狗: "chuí mái tú gǒu",
    椎埋狗窃: "chuí mái gǒu qiè",
    壮发冲冠: "zhuàng fā chōng guàn",
    庄严宝相: "zhuāng yán bǎo xiàng",
    转愁为喜: "zhuǎn chóu wéi xǐ",
    转嗔为喜: "zhuǎn chēn wéi xǐ",
    拽巷啰街: "zhuài xiàng luó jiē",
    拽耙扶犁: "zhuāi pá fú lí",
    拽布拖麻: "zhuài bù tuō má",
    箸长碗短: "zhù cháng wǎn duǎn",
    铸剑为犁: "zhù jiàn wéi lí",
    杼柚其空: "zhù yòu qí kōng",
    杼柚空虚: "zhù yòu kōng xū",
    助天为虐: "zhù tiān wéi nüè",
    属垣有耳: "zhǔ yuán yǒu ěr",
    属毛离里: "zhǔ máo lí lǐ",
    属辞比事: "zhǔ cí bǐ shì",
    逐物不还: "zhú wù bù huán",
    铢量寸度: "zhū liáng cùn duó",
    铢两悉称: "zhū liǎng xī chèn",
    侏儒观戏: "zhū rú guān xì",
    朱轓皁盖: "zhū fān zào gài",
    昼度夜思: "zhòu duó yè sī",
    诪张为幻: "zhōu zhāng wéi huàn",
    重明继焰: "chóng míng jì yàn",
    众啄同音: "zhòng zhuó tóng yīn",
    众毛攒裘: "zhòng máo cuán qiú",
    众好众恶: "zhòng hào zhòng wù",
    擿埴索涂: "zhāi zhí suǒ tú",
    稚齿婑媠: "zhì chǐ wǒ tuó",
    至当不易: "zhì dàng bú yì",
    指皂为白: "zhǐ zào wéi bái",
    指雁为羹: "zhǐ yàn wéi gēng",
    指树为姓: "zhǐ shù wéi xìng",
    指山说磨: "zhǐ shān shuō mò",
    止戈为武: "zhǐ gē wéi wǔ",
    枝干相持: "zhī gàn xiāng chí",
    枝大于本: "zh dà yú běn",
    支吾其词: "zhī wú qí cí",
    正身率下: "zhèng shēn shuài xià",
    正冠李下: "zhèng guàn lǐ xià",
    整冠纳履: "zhěng guān nà lǚ",
    整躬率物: "zhěng gōng shuài wù",
    整顿干坤: "zhěng dùn gàn kūn",
    针头削铁: "zhēn tóu xuē tiě",
    贞松劲柏: "zhēn sōng jìng bǎi",
    赭衣塞路: "zhě yī sè lù",
    折箭为誓: "shé jiàn wéi shì",
    折而族之: "zhé ér zú zhī",
    昭德塞违: "zhāo dé sè wéi",
    章句小儒: "zhāng jù xiǎo rú",
    湛恩汪濊: "zhàn ēn wāng huì",
    占风望气: "zhān fēng wàng qì",
    斩将搴旗: "zhǎn jiàng qiān qí",
    曾母投杼: "zēng mǔ tóu zhù",
    曾参杀人: "zēng shēn shā rén",
    造谣中伤: "zào yáo zhòng shāng",
    早占勿药: "zǎo zhān wù yào",
    凿龟数策: "záo guī shǔ cè",
    攒三聚五: "cuán sān jù wǔ",
    攒眉蹙额: "cuán mei cù é",
    攒零合整: "cuán líng hé zhěng",
    攒锋聚镝: "cuán fēng jù dí",
    载笑载言: "zài xiào zài yán",
    载酒问字: "zài jiǔ wèn zì",
    殒身不恤: "yǔn shēn bú xù",
    云舒霞卷: "yún shū xiá juǎn",
    月中折桂: "yuè zhōng shé guì",
    月落参横: "yuè luò shēn héng",
    鬻驽窃价: "yù nú qiè jià",
    鬻鸡为凤: "yù jī wéi fèng",
    遇难成祥: "yù nàn chéng xiáng",
    郁郁累累: "yù yù lěi lěi",
    玉卮无当: "yù zhī wú dàng",
    语笑喧阗: "yǔ xiào xuān tián",
    与世沉浮: "yǔ shì chén fú",
    与时消息: "yǔ shí xiāo xi",
    逾墙钻隙: "yú qiáng zuān xì",
    渔夺侵牟: "yú duó qīn móu",
    杅穿皮蠹: "yú chuān pí dù",
    余勇可贾: "yú yǒng kě gǔ",
    予智予雄: "yú zhì yú xióng",
    予取予求: "yú qǔ yú qiú",
    于家为国: "yú jiā wéi guó",
    有借无还: "yǒu jiè wú huán",
    有加无已: "yǒu jiā wú yǐ",
    有国难投: "yǒu guó nán tóu",
    游必有方: "yóu bì yǒu fāng",
    油干灯尽: "yóu gàn dēng jìn",
    尤云殢雨: "yóu yún tì yǔ",
    庸中皦皦: "yōng zhōng jiǎo jiǎo",
    郢书燕说: "yǐng shū yān shuō",
    营蝇斐锦: "yíng yíng fēi jǐn",
    鹰心雁爪: "yīng xīn yàn zhǎo",
    莺吟燕儛: "yīng yín yàn wǔ",
    应天顺时: "yīng tiān shùn shí",
    印累绶若: "yìn léi shòu ruò",
    隐占身体: "yǐn zhàn shēn tǐ",
    饮犊上流: "yìn dú shàng liú",
    引绳切墨: "yǐn shéng qiē mò",
    龈齿弹舌: "yín chǐ dàn shé",
    因缘为市: "yīn yuán wéi shì",
    因树为屋: "yīn shù wéi wū",
    溢美溢恶: "yì měi yì wù",
    抑塞磊落: "yì sè lěi luò",
    倚闾望切: "yǐ lǘ wàng qiē",
    以意为之: "yǐ yì wéi zhī",
    以言为讳: "yǐ yán wéi huì",
    以疏间亲: "yǐ shū jiàn qīn",
    以水济水: "yǐ shuǐ jǐ shuǐ",
    以书为御: "yǐ shū wéi yù",
    以守为攻: "yǐ shǒu wéi gōng",
    以升量石: "yǐ shēng liáng dàn",
    以慎为键: "yǐ shèn wéi jiàn",
    以筌为鱼: "yǐ quán wéi yú",
    以利累形: "yǐ lì lěi xíng",
    以毁为罚: "yǐ huǐ wéi fá",
    以黑为白: "yǐ hēi wéi bái",
    以规为瑱: "yǐ guī wéi tiàn",
    以古为鉴: "yǐ gǔ wéi jiàn",
    以宫笑角: "yǐ gōng xiào jué",
    以法为教: "yǐ fǎ wéi jiào",
    以大恶细: "yǐ dà wù xì",
    遗世忘累: "yí shì wàng lěi",
    遗寝载怀: "yí qǐn zài huái",
    移的就箭: "yí dì jiù jiàn",
    依头缕当: "yī tóu lǚ dàng",
    衣租食税: "yì zū shí shuì",
    衣轻乘肥: "yì qīng chéng féi",
    衣裳之会: "yī shang zhī huì",
    衣单食薄: "yī dān shí bó",
    一还一报: "yì huán yí bào",
    叶公好龙: "yè gōng hào lóng",
    野调无腔: "yě diào wú qiāng",
    瑶池女使: "yáo chí nǚ shǐ",
    幺麽小丑: "yāo mó xiǎo chǒu",
    养精畜锐: "yǎng jīng xù ruì",
    卬首信眉: "áng shǒu shēn méi",
    洋洋纚纚: "yáng yáng sǎ sǎ",
    羊羔美酒: "yáng gāo měi jiǔ",
    扬风扢雅: "yáng fēng jié yǎ",
    燕昭市骏: "yān zhāo shì jùn",
    燕昭好马: "yān zhāo hǎo mǎ",
    燕石妄珍: "yān shí wàng zhēn",
    燕骏千金: "yān jùn qiān jīn",
    燕金募秀: "yān jīn mù xiù",
    燕驾越毂: "yān jià yuè gǔ",
    燕歌赵舞: "yān gē zhào wǔ",
    燕岱之石: "yān dài zhī shí",
    燕处危巢: "yàn chǔ wēi cháo",
    掞藻飞声: "shàn zǎo fēi shēng",
    偃革为轩: "yǎn gé wéi xuān",
    妍蚩好恶: "yán chī hǎo è",
    压良为贱: "yā liáng wéi jiàn",
    搀行夺市: "chān háng duó shì",
    泣数行下: "qì shù háng xià",
    当行出色: "dāng háng chū sè",
    秀出班行: "xiù chū bān háng",
    儿女成行: "ér nǚ chéng háng",
    大行大市: "dà háng dà shì",
    寻行数墨: "xún háng shǔ mò",
    埙篪相和: "xūn chí xiāng hè",
    血债累累: "xuè zhài lěi lěi",
    炫玉贾石: "xuàn yù gǔ shí",
    炫石为玉: "xuàn shí wéi yù",
    悬石程书: "xuán dàn chéng shū",
    悬狟素飡: "xuán huán sù cān",
    悬龟系鱼: "xuán guī xì yú",
    揎拳捋袖: "xuān quán luō xiù",
    轩鹤冠猴: "xuān hè guàn hóu",
    畜妻养子: "xù qī yǎng zǐ",
    羞人答答: "xiū rén dā dā",
    修鳞养爪: "xiū lín yǎng zhǎo",
    熊据虎跱: "xióng jù hǔ zhì",
    兄死弟及: "xiōng sǐ dì jí",
    腥闻在上: "xīng wén zài shàng",
    兴文匽武: "xīng wén yǎn wǔ",
    兴观群怨: "xìng guān qún yuàn",
    兴高彩烈: "xìng gāo cǎi liè",
    心手相应: "xīn shǒu xiāng yìng",
    心口相应: "xīn kǒu xiāng yīng",
    挟势弄权: "xié shì nòng quán",
    胁肩累足: "xié jiān lěi zú",
    校短量长: "jiào duǎn liáng cháng",
    小眼薄皮: "xiǎo yǎn bó pí",
    硝云弹雨: "xiāo yún dàn yǔ",
    鸮鸣鼠暴: "xiāo míng shǔ bào",
    削株掘根: "xuē zhū jué gēn",
    削铁无声: "xuē tiě wú shēng",
    削职为民: "xuē zhí wéi mín",
    削木为吏: "xuē mù wéi lì",
    想望风褱: "xiǎng wàng fēng huái",
    香培玉琢: "xiang pei yu zhuó",
    相鼠有皮: "xiàng shǔ yǒu pí",
    相时而动: "xiàng shí ér dòng",
    相切相磋: "xiāng qiē xiāng cuō",
    相女配夫: "xiàng nǚ pèi fū",
    相门有相: "xiàng mén yǒu xiàng",
    挦章撦句: "xián zhāng chě jù",
    先我着鞭: "xiān wǒ zhuó biān",
    习焉不察: "xí yān bù chá",
    歙漆阿胶: "shè qī ē jiāo",
    晰毛辨发: "xī máo biàn fà",
    悉索薄赋: "xī suǒ bó fù",
    雾鳞云爪: "wù lín yún zhǎo",
    物稀为贵: "wù xī wéi guì",
    碔砆混玉: "wǔ fū hùn yù",
    武断专横: "wǔ duàn zhuān héng",
    五石六鹢: "wǔ shí liù yì",
    五色相宣: "wǔ sè xiāng xuān",
    五侯七贵: "wǔ hóu qī guì",
    五侯蜡烛: "wǔ hòu là zhú",
    五羖大夫: "wǔ gǔ dà fū",
    吾自有处: "wú zì yǒu chǔ",
    无下箸处: "wú xià zhù chǔ",
    无伤无臭: "wú shāng wú xiù",
    无能为役: "wú néng wéi yì",
    无寇暴死: "wú kòu bào sǐ",
    无孔不钻: "wú kǒng bú zuàn",
    无间可乘: "wú jiān kě chéng",
    无间冬夏: "wú jiān dōng xià",
    无恶不为: "wú è bù wéi",
    无动为大: "wú dòng wéi dà",
    诬良为盗: "wū liáng wéi dào",
    握拳透爪: "wò quán tòu zhǎo",
    文武差事: "wén wǔ chāi shì",
    委委佗佗: "wēi wēi tuó tuó",
    惟日为岁: "wéi rì wéi suì",
    帷薄不修: "wéi bó bù xiū",
    为善最乐: "wéi shàn zuì lè",
    为山止篑: "wéi shān zhǐ kuì",
    为仁不富: "wéi rén bú fù",
    为裘为箕: "wéi qiú wéi jī",
    为民父母: "wéi mín fù mǔ",
    为虺弗摧: "wéi huǐ fú cuī",
    为好成歉: "wéi hǎo chéng qiàn",
    为鬼为蜮: "wéi guǐ wéi yù",
    望风响应: "wàng fēng xiǎng yīng",
    望尘僄声: "wàng chén piào shēng",
    往渚还汀: "wǎng zhǔ huán tīng",
    王贡弹冠: "wáng gòng dàn guàn",
    亡国大夫: "wáng guó dà fū",
    万贯家私: "wàn guàn jiā sī",
    晚食当肉: "wǎn shí dàng ròu",
    晚节不保: "wǎn jié bù bǎo",
    玩岁愒时: "wán suì kài shí",
    蛙蟆胜负: "wā má shèng fù",
    吞言咽理: "tūn yán yàn lǐ",
    颓垣断堑: "tuí yuán duàn qiàn",
    推干就湿: "tuī gàn jiù shī",
    剸繁决剧: "tuán fán jué jù",
    团头聚面: "tuán tóu jù miàn",
    兔丝燕麦: "tù sī yàn mài",
    兔头麞脑: "tù tóu zhāng nǎo",
    兔葵燕麦: "tù kuí yàn mài",
    吐哺握发: "tǔ bǔ wò fà",
    投传而去: "tóu zhuàn ér qù",
    头没杯案: "tóu mò bēi àn",
    头昏脑闷: "tóu hūn nǎo mèn",
    头会箕敛: "tóu kuài jī liǎn",
    头出头没: "tóu chū tóu mò",
    痛自创艾: "tòng zì chuāng yì",
    同恶相助: "tóng wù xiāng zhù",
    同恶相恤: "tóng wù xiāng xù",
    痌瘝在抱: "tōng guān zài bào",
    通文调武: "tōng wén diào wǔ",
    停留长智: "tíng liú zhǎng zhì",
    铁树开华: "tiě shù kāi huā",
    条贯部分: "tiáo guàn bù fēn",
    挑牙料唇: "tiǎo yá liào chún",
    挑么挑六: "tiāo yāo tiāo liù",
    挑唇料嘴: "tiǎo chún liào zuǐ",
    恬不为意: "tián bù wéi yì",
    恬不为怪: "tián bù wéi guài",
    天下为笼: "tiān xià wéi lóng",
    天台路迷: "tiān tái lù mí",
    天年不遂: "tiān nián bú suì",
    探囊胠箧: "tàn náng qū qiè",
    谭言微中: "tán yán wēi zhòng",
    谈言微中: "tán yán wēi zhòng",
    狧穅及米: "shì kāng jí mǐ",
    随物应机: "suí wù yīng jī",
    搜岩采干: "sōu yán cǎi gàn",
    宋斤鲁削: "sòng jīn lǔ xuē",
    松筠之节: "sōng yún zhī jié",
    四亭八当: "sì tíng bā dàng",
    四马攒蹄: "sì mǎ cuán tí",
    四不拗六: "sì bú niù liù",
    思所逐之: "sī suǒ zhú zhī",
    丝恩发怨: "sī ēn fà yuàn",
    硕望宿德: "shuò wàng xiǔ dé",
    铄古切今: "shuò gǔ qiē jīn",
    顺风而呼: "shùn fēng ér hū",
    顺风吹火: "shùn fēng chuī huǒ",
    水中著盐: "shuǐ zhōng zhuó yán",
    双柑斗酒: "shuāng gān dǒu jiǔ",
    数米而炊: "shǔ mǐ ér chuī",
    数米量柴: "shǔ mǐ liáng chái",
    数理逻辑: "shù lǐ luó ji",
    数黑论黄: "shǔ hēi lùn huáng",
    数白论黄: "shǔ bái lùn huáng",
    束缊还妇: "shù yūn huán fù",
    束蒲为脯: "shù pú wéi pú",
    束椽为柱: "shù chuán wéi zhù",
    书缺有间: "shū quē yǒu jiàn",
    手足重茧: "shǒu zú chóng jiǎn",
    手足异处: "shǒu zú yì chǔ",
    手脚干净: "shǒu jiǎo gàn jìng",
    手不应心: "shǒu bù yīng xīn",
    螫手解腕: "shì shǒu jiě wàn",
    释知遗形: "shì zhī yí xíng",
    适时应务: "shì shí yīng wù",
    适情率意: "shì qíng shuài yì",
    适当其冲: "shì dāng qí chōng",
    视为知己: "shì wéi zhī jǐ",
    使羊将狼: "shǐ yáng jiàng láng",
    食为民天: "shí wéi mín tiān",
    拾掇无遗: "shí duō wú yí",
    实与有力: "shí yù yǒu lì",
    石英玻璃: "shí yīng bō li",
    石室金匮: "shí shì jīn guì",
    什袭珍藏: "shí xí zhēn cáng",
    什伍东西: "shí wǔ dōng xī",
    什围伍攻: "shí wéi wǔ gōng",
    十魔九难: "shí mó jiǔ nàn",
    诗书发冢: "shī shū fà zhǒng",
    虱处裈中: "shī chǔ kūn zhōng",
    师直为壮: "shī zhí wéi zhuàng",
    尸居龙见: "shī jū lóng xiàn",
    圣经贤传: "shèng jīng xián zhuàn",
    圣君贤相: "shèng jūn xián xiàng",
    生拖死拽: "shēng tuō sǐ zhuài",
    审己度人: "shěn jǐ duó rén",
    神武挂冠: "shén wǔ guà guàn",
    神龙失埶: "shén lóng shī shì",
    深文曲折: "shēn wén qǔ shé",
    深厉浅揭: "shēn lì qiǎn qì",
    深谷为陵: "shēn gǔ wéi líng",
    深恶痛疾: "shēn wù tòng jí",
    深仇宿怨: "shēn chóu xiǔ yuàn",
    舍己为公: "shě jǐ wèi gōng",
    舍短取长: "shě duǎn qǔ cháng",
    舍策追羊: "shě cè zhuī yáng",
    蛇蝎为心: "shé xiē wéi xīn",
    少成若性: "shào chéng ruò xìng",
    上当学乖: "shàng dàng xué guāi",
    赏不当功: "shǎng bù dāng gōng",
    善自为谋: "shàn zì wéi móu",
    善为说辞: "shàn wéi shuō cí",
    善善恶恶: "shàn shàn wù è",
    善财难舍: "shàn cái nán shě",
    苫眼铺眉: "shān yǎn pū méi",
    讪牙闲嗑: "shàn yá xián kē",
    山阴乘兴: "shān yīn chéng xīng",
    山殽野湋: "shān yáo yě wéi",
    山溜穿石: "shān liù chuān shí",
    山节藻棁: "shān jié zǎo zhuō",
    杀鸡为黍: "shā jī wéi shǔ",
    色厉胆薄: "sè lì dǎn bó",
    桑荫未移: "sāng yīn wèi yí",
    桑荫不徙: "sāng yīn bù xǐ",
    桑土绸缪: "sāng tǔ chóu miù",
    桑户棬枢: "sāng hù juàn shū",
    三战三北: "sān zhàn sān běi",
    三瓦两舍: "sān wǎ liǎng shě",
    三人为众: "sān rén wèi zhòng",
    三差两错: "sān chā liǎng cuò",
    塞井焚舍: "sāi jǐng fén shě",
    洒心更始: "sǎ xīn gèng shǐ",
    洒扫应对: "sǎ sǎo yìng duì",
    软红香土: "ruǎn hóng xiāng tǔ",
    入吾彀中: "rù wú gòu zhōng",
    入铁主簿: "rù tiě zhǔ bù",
    入理切情: "rù lǐ qiē qíng",
    汝成人耶: "rǔ chéng rén yé",
    如水投石: "rú shuǐ tóu shí",
    如切如磋: "rú qiē rú cuō",
    如登春台: "rú dēng chūn tái",
    肉薄骨并: "ròu bó gǔ bìng",
    柔情绰态: "róu qíng chuò tài",
    戎马劻勷: "róng mǎ kuāng ráng",
    日中为市: "rì zhōng wéi shì",
    日月参辰: "rì yuè shēn chén",
    日省月修: "rì xǐng yuè xiū",
    日削月割: "rì xuē yuè gē",
    日省月试: "rì xǐng yuè shì",
    任达不拘: "rèn dá bù jū",
    人言藉藉: "rén yán jí jí",
    人模狗样: "rén mú gǒu yàng",
    人莫予毒: "rén mò yú dú",
    热熬翻饼: "rè áo fān bǐng",
    圈牢养物: "juàn láo yǎng wù",
    取予有节: "qǔ yǔ yǒu jié",
    诎要桡腘: "qū yāo ráo guó",
    穷形尽相: "qióng xíng jìn xiàng",
    情凄意切: "qíng qī yì qiè",
    情见势屈: "qíng xiàn shì qū",
    情见乎辞: "qíng xiàn hū cí",
    清都绛阙: "qīng dōu jiàng què",
    倾肠倒肚: "qīng cháng dào dǔ",
    青紫被体: "qīng zǐ pī tǐ",
    青林黑塞: "qīng lín hēi sài",
    螓首蛾眉: "qín shǒu é méi",
    琴瑟之好: "qín sè zhī hào",
    且住为佳: "qiě zhù wéi jiā",
    切树倒根: "qiē shù dǎo gēn",
    切理餍心: "qiē lǐ yàn xīn",
    切近的当: "qiē jìn de dāng",
    翘足引领: "qiáo zú yǐn lǐng",
    巧发奇中: "qiǎo fā qí zhòng",
    强嘴拗舌: "jiàng zuǐ niù shé",
    强直自遂: "qiáng zhí zì suí",
    强死强活: "qiǎng sǐ qiǎng huó",
    强食自爱: "qiǎng shí zì ài",
    强食靡角: "qiǎng shí mí jiǎo",
    强弓劲弩: "qiáng gōng jìng nǔ",
    强聒不舍: "qiǎng guō bù shě",
    强凫变鹤: "qiáng fú biàn hè",
    强而后可: "qiǎng ér hòu kě",
    强得易贫: "qiǎng dé yì pín",
    遣兴陶情: "qiǎn xìng táo qíng",
    牵羊担酒: "qiān yáng dān jiǔ",
    千了百当: "qiān liǎo bǎi dàng",
    泣下如雨: "qì xià rú yǔ",
    起偃为竖: "qǐ yǎn wéi shù",
    岂弟君子: "kǎi tì jūn zǐ",
    綦溪利跂: "qí xī lì qí",
    棋输先著: "qí shū xiān zhuó",
    齐王舍牛: "qí wáng shě niú",
    欺天诳地: "qī tiān kuáng dì",
    普天率土: "pǔ tiān shuài tǔ",
    铺胸纳地: "pū xiōng nà dì",
    铺锦列绣: "pū jǐn liè xiù",
    破家为国: "pò jiā wèi guó",
    破觚为圜: "pò gū wéi yuán",
    萍飘蓬转: "píng piāo péng zhuàn",
    帡天极地: "píng tiān jí dì",
    屏声息气: "bǐng shēng xī qì",
    凭几据杖: "píng jī jù zhàng",
    贫嘴薄舌: "pín zuǐ bó shé",
    片语只辞: "piàn yǔ zhī cí",
    披发文身: "pī fà wén shēn",
    烹龙炮凤: "pēng lóng páo fèng",
    炰鳖脍鲤: "fǒu biē kuài lǐ",
    庞眉皓发: "páng méi hào fà",
    攀花折柳: "pān huā zhé liǔ",
    攀蟾折桂: "pān chán shé guì",
    女大难留: "nǚ dà nán liú",
    弄玉吹箫: "nòng yù chuī xiāo",
    弄管调弦: "nòng guǎn tiáo xián",
    弄粉调朱: "nòng fěn diào zhū",
    浓抹淡妆: "nóng mò dàn zhuāng",
    捻土为香: "niǎn tǔ wéi xiāng",
    年谊世好: "nián yì shì hǎo",
    年华垂暮: "nián huá chuí mù",
    儗不于伦: "nǐ bù yú lún",
    泥而不滓: "ní ér bù zǐ",
    能者为师: "néng zhě wéi shī",
    能不称官: "néng bú chèn guān",
    挠直为曲: "náo zhí wéi qū",
    难进易退: "nán jìn yì tuì",
    难得糊涂: "nán dé hú tú",
    南蛮鴂舌: "nán mán jué shé",
    南贩北贾: "nán fàn běi gǔ",
    牧猪奴戏: "mù zhū nú xì",
    目眢心忳: "mù yuān xīn tún",
    目挑心招: "mù tiǎo xīn zhāo",
    目量意营: "mù liàng yì yíng",
    木头木脑: "mù tóu mù nǎo",
    木干鸟栖: "mù gàn niǎo qī",
    侔色揣称: "móu sè chuǎi chèn",
    莫予毒也: "mò yú dú yě",
    抹粉施脂: "mò fěn shī zhī",
    磨砻镌切: "mó lóng juān qiē",
    磨棱刓角: "mó léng wán jiǎo",
    摸门不着: "mō mén bù zháo",
    摸不着边: "mō bù zhuó biān",
    命中注定: "mìng zhōng zhù dìng",
    鸣鹤之应: "míng hè zhī yìng",
    明效大验: "míng xiào dà yàn",
    名我固当: "míng wǒ gù dāng",
    邈处欿视: "miǎo chǔ kǎn shì",
    黾穴鸲巢: "měng xué qú cháo",
    绵里薄材: "mián lǐ bó cái",
    靡有孑遗: "mǐ yǒu jié yí",
    靡衣偷食: "mǐ yī tōu shí",
    迷恋骸骨: "mí liàn hái gǔ",
    扪参历井: "mén shēn lì jǐng",
    门单户薄: "mén dān hù bó",
    昧旦晨兴: "mèi dàn chén xīng",
    冒名接脚: "mào míng jiē jiǎo",
    毛遂堕井: "máo suí duò jǐng",
    毛发倒竖: "máo fā dǎo shù",
    卖文为生: "mài wén wéi shēng",
    卖李钻核: "mài lǐ zuān hé",
    买椟还珠: "mǎi dú huán zhū",
    埋三怨四: "mán sān yuàn sì",
    马入华山: "mǎ rù huá shān",
    落魄江湖: "luò pò jiāng hú",
    落落难合: "luò luò nán hé",
    落草为寇: "luò cǎo wéi kòu",
    罗织构陷: "luó zhī gòu xiàn",
    鸾凤和鸣: "luán fèng hè míng",
    率由旧章: "shuài yóu jiù zhāng",
    率土同庆: "shuài tǔ tóng qìng",
    率兽食人: "shuài shòu shí rén",
    率土归心: "shuài tǔ guī xīn",
    率马以骥: "shuài mǎ yǐ jì",
    率尔成章: "shuài ěr chéng zhāng",
    鲁斤燕削: "lǔ jīn yàn xuē",
    漏尽更阑: "lòu jìn gēng lán",
    笼鸟槛猿: "lóng niǎo jiàn yuán",
    笼鸟池鱼: "lóng niǎo chí yú",
    龙游曲沼: "lóng yóu qū zhǎo",
    龙血玄黄: "lóng xuè xuán huáng",
    龙雕凤咀: "lóng diāo fèng jǔ",
    六尺之讬: "liù chǐ zhī tuō",
    令原之戚: "líng yuán zhī qī",
    令人捧腹: "lìng rén pěng fù",
    陵劲淬砺: "líng jìng cuì lì",
    临敌易将: "lín dí yì jiàng",
    裂裳衣疮: "liè shang yī chuāng",
    裂冠毁冕: "liè guàn huǐ miǎn",
    了无惧色: "liǎo wú jù sè",
    了身达命: "liǎo shēn dá mìng",
    了然无闻: "liǎo rán wú wén",
    了不可见: "liǎo bù kě jiàn",
    了不长进: "liǎo bù zhǎng jìn",
    燎发摧枯: "liǎo fà cuī kū",
    审时度势: "shěn shí duó shì",
    量小力微: "liàng xiǎo lì wēi",
    相时度力: "xiāng shí duó lì",
    量枘制凿: "liàng ruì zhì záo",
    量如江海: "liàng rú jiāng hǎi",
    量金买赋: "liàng jīn mǎi fù",
    量己审分: "liàng jǐ shěn fēn",
    敛骨吹魂: "liǎn gǔ chuī hún",
    詈夷为跖: "lì yí wéi zhí",
    利令志惛: "lì lìng zhì hūn",
    李广不侯: "lǐ guǎng bú hòu",
    礼为情貌: "lǐ wéi qíng mào",
    礼让为国: "lǐ ràng wéi guó",
    犁生骍角: "lí shēng xīng jiǎo",
    离本徼末: "lí běn jiǎo mò",
    楞眉横眼: "léng méi hèng yǎn",
    擂天倒地: "léi tiān dǎo dì",
    累足成步: "lěi zú chéng bù",
    累瓦结绳: "lěi wǎ jié shéng",
    累土至山: "lěi tǔ zhì shān",
    累土聚沙: "lěi tǔ jù shā",
    累卵之危: "lěi luǎn zhī wēi",
    累累如珠: "lěi lěi rú zhū",
    累块积苏: "lěi kuài jī sū",
    乐山乐水: "lè shān lè shuǐ",
    潦原浸天: "lǎo yuán jìn tiān",
    老师宿儒: "lǎo shī xiǔ rú",
    牢什古子: "láo shí gǔ zi",
    琅嬛福地: "láng huán fú dì",
    揆情度理: "kuí qíng duó lǐ",
    旷日累时: "kuàng rì lěi shí",
    匡救弥缝: "kuāng jiù mí fèng",
    枯树生华: "kū shù shēng huā",
    口轻舌薄: "kǒu qīng shé bó",
    口角生风: "kǒu jiǎo shēng fēng",
    口角春风: "kǒu jiǎo chūn fēng",
    口角风情: "kǒu jiǎo fēng qíng",
    口干舌焦: "kǒu gān shé jiāo",
    口腹之累: "kǒu fù zhī lěi",
    空腹便便: "kōng fù pián pián",
    嗑牙料嘴: "kē yá liào zuǐ",
    刻木为鹄: "kè mù wéi hú",
    咳珠唾玉: "ké zhū tuò yù",
    咳唾成珠: "ké tuò chéng zhū",
    抗颜为师: "kàng yán wéi shī",
    开华结果: "kāi huā jié guǒ",
    峻阪盐车: "jùn bǎn yán chē",
    嚼铁咀金: "jiáo tiě jǔ jīn",
    嚼墨喷纸: "jué mò pēn zhǐ",
    倔头强脑: "juè tóu jiàng nǎo",
    倔头倔脑: "juè tóu juè nǎo",
    倦鸟知还: "juàn niǎo zhī huán",
    卷席而葬: "juǎn xí ér zàng",
    卷甲倍道: "juǎn jiǎ bèi dào",
    聚米为山: "jù mǐ wéi shān",
    举手相庆: "jǔ shǒu xiāng qìng",
    举世混浊: "jǔ shì hún zhuó",
    鞠为茂草: "jū wéi mào cǎo",
    拘神遣将: "jū shén qiǎn jiàng",
    居下讪上: "jū xià shàn shàng",
    久要不忘: "jiǔ yāo bú wàng",
    九转功成: "jiǔ zhuǎn gōng chéng",
    九蒸三熯: "jiǔ zhēng sān hàn",
    敬业乐群: "jìng yè lè qún",
    井底虾蟆: "jǐng dǐ xiā má",
    旌旗卷舒: "jīng qí juǎn shū",
    荆棘载途: "jīng jí zài tú",
    禁舍开塞: "jìn shě kāi sāi",
    祲威盛容: "jìn wēi shèng róng",
    进退消长: "jìn tuì xiāo cháng",
    进退应矩: "jìn tuì yīng jǔ",
    进退触籓: "jìn tuì chù fān",
    进退跋疐: "jìn tuì bá zhì",
    尽多尽少: "jǐn duō jǐn shǎo",
    锦囊还矢: "jǐn náng huán shǐ",
    矜己自饰: "jīn jǐ zì shì",
    矜功负气: "jīn gōng fù qì",
    津关险塞: "jīn guān xiǎn sài",
    金吾不禁: "jīn wú bú jìn",
    金翅擘海: "jīn chì bāi hǎi",
    解衣衣人: "jiě yī yī rén",
    解人难得: "jiě rén nán dé",
    解铃系铃: "jiě líng xì líng",
    解发佯狂: "jiě fà yáng kuáng",
    诘屈磝碻: "jié qū áo qiāo",
    教猱升木: "jiāo náo shēng mù",
    较瘦量肥: "jiào shòu liàng féi",
    角立杰出: "jiǎo lì jié chū",
    焦沙烂石: "jiāo shā làn shí",
    骄儿騃女: "jiāo ér sì nǚ",
    浇风薄俗: "jiāo fēng bó sú",
    降妖捉怪: "xiáng yāo zhuō guài",
    将取固予: "jiāng qǔ gù yǔ",
    将门有将: "jiàng mén yǒu jiàng",
    将夺固与: "jiāng duó gù yǔ",
    槛花笼鹤: "jiàn huā lóng hè",
    鉴影度形: "jiàn yǐng duó xíng",
    渐不可长: "jiàn bù kě zhǎng",
    见素抱朴: "xiàn sù bào pǔ",
    见弃于人: "jiàn qì yú rén",
    简丝数米: "jiǎn sī shǔ mǐ",
    俭不中礼: "jiǎn bú zhòng lǐ",
    间见层出: "jiàn xiàn céng chū",
    尖嘴薄舌: "jiān zuǐ bó shé",
    甲冠天下: "jiǎ guàn tiān xià",
    葭莩之亲: "jiā fú zhī qīn",
    家累千金: "jiā lèi qiān jīn",
    家给人足: "jiā jǐ rén zú",
    家道从容: "jiā dào cóng róng",
    夹袋人物: "jiā dài rén wù",
    霁风朗月: "jì fēng lǎng yuè",
    寄兴寓情: "jì xìng yù qíng",
    计深虑远: "jì shēn lǜ yuǎn",
    计功量罪: "jì gōng liàng zuì",
    掎裳连襼: "jǐ shang lián yì",
    虮虱相吊: "jǐ shī xiāng diào",
    疾不可为: "jí bù kě wéi",
    极深研几: "jí shēn yán jī",
    及宾有鱼: "jí bīn yǒu yú",
    激薄停浇: "jī bó tíng jiāo",
    积素累旧: "jī sù lěi jiù",
    积时累日: "jī shí lěi rì",
    积露为波: "jī lù wéi bō",
    积德累功: "jī dé lěi gōng",
    积谗糜骨: "jī chán méi gǔ",
    击排冒没: "jī pái mào mò",
    祸为福先: "huò wéi fú xiān",
    祸福相依: "huò fú xiāng yī",
    获隽公车: "huò jùn gōng chē",
    混应滥应: "hùn yīng làn yīng",
    毁舟为杕: "huǐ zhōu wéi duò",
    毁钟为铎: "huǐ zhōng wéi duó",
    毁冠裂裳: "huǐ guān liè cháng",
    晦盲否塞: "huì máng pǐ sè",
    回船转舵: "huí chuán zhuàn duò",
    潢池盗弄: "huáng chí dào nòng",
    黄冠草履: "huáng guàn cǎo lǚ",
    黄发儿齿: "huáng fà ér chǐ",
    黄发垂髫: "huáng fà chuí tiáo",
    还珠返璧: "huán zhū fǎn bì",
    还年驻色: "huán nián zhù sè",
    还年却老: "huán nián què lǎo",
    坏裳为裤: "huài shang wéi kù",
    画荻和丸: "huà dí huò wán",
    化枭为鸠: "huà xiāo wéi jiū",
    化腐为奇: "huà fǔ wéi qí",
    化鸱为凤: "huà chī wéi fèng",
    花不棱登: "huā bu lēng dēng",
    户限为穿: "hù xiàn wéi chuān",
    呼卢喝雉: "hū lú hè zhì",
    呼来喝去: "hū lái hè qù",
    呼不给吸: "hū bù jǐ xī",
    厚味腊毒: "hòu wèi xī dú",
    厚德载物: "hòu dé zài wù",
    鸿渐于干: "hóng jiàn yú gàn",
    洪炉燎发: "hóng lú liáo fà",
    红绳系足: "hóng shéng jì zú",
    红不棱登: "hóng bu lēng dēng",
    横抢硬夺: "hèng qiǎng yìng duó",
    横恩滥赏: "hèng ēn làn shǎng",
    恨海难填: "hèn hǎi nán tián",
    鹤发鸡皮: "hè fà jī pí",
    涸思干虑: "hé sī gān lǜ",
    河涸海干: "hé hé hǎi gān",
    和颜说色: "hé yán yuè sè",
    合从连衡: "hé zòng lián héng",
    浩浩汤汤: "hào hào shāng shāng",
    好勇斗狠: "hào yǒng dòu hěn",
    好问则裕: "hào wèn zé yù",
    好为事端: "hào wéi shì duān",
    好问决疑: "hào wèn jué yí",
    好生之德: "hào shēng zhī dé",
    好奇尚异: "hǎo qí shàng yì",
    好恶不同: "hǎo è bù tóng",
    好丹非素: "hào dān fēi sù",
    豪干暴取: "háo gàn bào qǔ",
    毫发不爽: "háo fà bù shuǎng",
    寒酸落魄: "hán suān luò pò",
    含英咀华: "hán yīng jǔ huá",
    含糊不明: "hán hú bù míng",
    过为已甚: "guò wéi yǐ shèn",
    桂折兰摧: "guì shé lán cuī",
    规旋矩折: "guī xuán jǔ shé",
    广文先生: "guǎng wén xiān sheng",
    广陵散绝: "guǎng líng sǎn jué",
    冠山戴粒: "guàn shān dài lì",
    冠屦倒施: "guàn jù dǎo shī",
    挂席为门: "guà xí wéi mén",
    寡见鲜闻: "guǎ jiàn xiǎn wén",
    瓜葛相连: "guā gé xiāng lián",
    鼓吻奋爪: "gǔ wěn fèn zhǎo",
    古调单弹: "gǔ diào dān tán",
    古调不弹: "gǔ diào bù tán",
    姑射神人: "gū yè shén rén",
    苟合取容: "gǒu hé qǔ róng",
    狗续侯冠: "gǒu xù hòu guàn",
    钩爪锯牙: "gōu zhǎo jù yá",
    共枝别干: "gòng zhī bié gàn",
    共为唇齿: "gòng wéi chún chǐ",
    拱手而降: "gǒng shǒu ér xiáng",
    拱肩缩背: "gǒng jiān suō bèi",
    功薄蝉翼: "gōng bó chán yì",
    弓调马服: "gōng diào mǎ fú",
    更姓改物: "gēng xìng gǎi wù",
    更仆难数: "gēng pú nán shǔ",
    更令明号: "gēng lìng míng hào",
    更待干罢: "gèng dài gàn bà",
    更唱迭和: "gēng chàng dié hé",
    更长梦短: "gēng cháng mèng duǎn",
    各色名样: "gè sè míng yàng",
    格格不纳: "gé gé bú nà",
    格格不吐: "gé gé bù tǔ",
    告朔饩羊: "gù shuò xì yáng",
    膏车秣马: "gào chē mò mǎ",
    高义薄云: "gāo yì bó yún",
    岗头泽底: "gāng tóu zé dǐ",
    敢为敢做: "gǎn wéi gǎn zuò",
    甘分随时: "gān fèn suí shí",
    甘处下流: "gān chǔ xià liú",
    干啼湿哭: "gàn tí shī kū",
    干名犯义: "gàn míng fàn yì",
    干将莫邪: "gān jiāng mò yé",
    干城之将: "gān chéng zhī jiàng",
    腹载五车: "fù zài wǔ chē",
    父债子还: "fù zhài zǐ huán",
    父为子隐: "fù wéi zǐ yǐn",
    辅世长民: "fǔ shì zhǎng mín",
    福为祸始: "fú wéi huò shǐ",
    符号逻辑: "fú hào luó jí",
    浮收勒折: "fú shōu lè shé",
    肤受之愬: "fū shòu zhī sù",
    否终则泰: "pǐ zhōng zé tài",
    佛头著粪: "fó tóu zhuó fèn",
    奉为楷模: "fèng wéi kǎi mó",
    凤靡鸾吪: "fèng mǐ luán é",
    封豨修蛇: "fēng xī xiū shé",
    风影敷衍: "fēng yǐng fū yǎn",
    丰屋蔀家: "fēng wū bù jiā",
    粪土不如: "fèn tǔ bù rú",
    分风劈流: "fēn fēng pǐ liú",
    沸沸汤汤: "fèi fèi shāng shāng",
    菲食薄衣: "fěi shí bó yī",
    飞将数奇: "fēi jiàng shù qí",
    放辟邪侈: "fàng pì xié chǐ",
    方领圆冠: "fāng lǐng yuán guàn",
    犯而不校: "fàn ér bú jiào",
    返本还源: "fǎn běn huán yuán",
    反劳为逸: "fǎn láo wéi yì",
    法轮常转: "fǎ lún cháng zhuàn",
    罚不当罪: "fá bù dāng zuì",
    发引千钧: "fà yǐn qiān jūn",
    发奸擿伏: "fā jiān tī fú",
    发短心长: "fà duǎn xīn cháng",
    二竖为虐: "èr shù wéi nüè",
    儿女心肠: "ér nǚ xīn cháng",
    儿女亲家: "ér nǚ qìng jiā",
    遏恶扬善: "è wù yáng shàn",
    饿殍枕藉: "è piǎo zhěn jí",
    饿殍载道: "è piǎo zài dào",
    恶醉强酒: "wù zuì qiǎng jiǔ",
    恶意中伤: "è yì zhòng shāng",
    恶湿居下: "wù shī jū xià",
    恶居下流: "wù jū xià liú",
    恶不去善: "wù bú qù shàn",
    扼吭夺食: "è háng duó shí",
    扼襟控咽: "è jīn kòng yān",
    峨峨汤汤: "é é shāng shāng",
    屙金溺银: "ē jīn niào yín",
    朵颐大嚼: "duǒ yí dà jiáo",
    夺人所好: "duó rén suǒ hào",
    多言数穷: "duō yán shuò qióng",
    多文为富: "duō wén wéi fù",
    多端寡要: "duō duān guǎ yào",
    多财善贾: "duō cái shàn gǔ",
    遁世无闷: "dùn shì wú mèn",
    遁迹黄冠: "dùn jì huáng guàn",
    堆案盈几: "duī àn yíng jī",
    断还归宗: "duàn huán guī zōng",
    短见薄识: "duǎn jiàn bó shí",
    蠹居棊处: "dù jū qí chǔ",
    度己以绳: "duó jǐ yǐ shéng",
    杜默为诗: "dù mò wéi shī",
    杜鹃啼血: "dù juān tí xuè",
    笃近举远: "dǔ jìn jǔ yuǎn",
    独有千秋: "dú yǒu qiān qiū",
    读书得间: "dú shū dé jiàn",
    斗转参横: "dǒu zhuǎn shēn héng",
    兜肚连肠: "dōu dǔ lián cháng",
    洞见症结: "dòng jiàn zhèng jié",
    恫疑虚喝: "dòng yí xū hè",
    动中窾要: "dòng zhōng kuǎn yào",
    东鸣西应: "dōng míng xī yīng",
    东鳞西爪: "dōng lín xī zhǎo",
    东量西折: "dōng liàng xī shé",
    东家西舍: "dōng jiā xī shè",
    东扯西拽: "dōng chě xī zhuāi",
    鼎铛有耳: "dǐng chēng yǒu ěr",
    鼎铛玉石: "dǐng chēng yù shí",
    钉头磷磷: "dīng tóu lín lín",
    跌宕不羁: "diē dàng bù jī",
    跌弹斑鸠: "diē dàn bān jiū",
    雕心雁爪: "diāo xīn yàn zhǎo",
    颠倒衣裳: "diān dǎo yī cháng",
    德薄能鲜: "dé bó néng xiǎn",
    得马折足: "dé mǎ shé zú",
    蹈其覆辙: "dǎo qí fù zhé",
    捣虚撇抗: "dǎo xū piē kàng",
    倒载干戈: "dào zài gān gē",
    倒裳索领: "dào cháng suǒ lǐng",
    倒果为因: "dào guǒ wéi yīn",
    叨在知己: "tāo zài zhī jǐ",
    叨陪末座: "tāo péi mò zuò",
    党豺为虐: "dǎng chái wéi nüè",
    当轴处中: "dāng zhóu chǔ zhōng",
    当着不着: "dāng zhuó bù zhuó",
    当务始终: "dāng wù shǐ zhōng",
    淡汝浓抹: "dàn rǔ nóng mǒ",
    弹丸脱手: "tán wán tuō shǒu",
    弹铗无鱼: "dàn jiá wú yú",
    箪食瓢饮: "dān sì piáo yǐn",
    大璞不完: "dà pú bù wán",
    大明法度: "dà míng fǎ dù",
    大车以载: "dà chē yǐ zài",
    打闷葫芦: "dǎ mèn hú lu",
    沓来踵至: "tà lái zhǒng zhì",
    厝火燎原: "cuò huǒ liǎo yuán",
    撮科打哄: "cuō kē dǎ hòng",
    寸积铢累: "cùn jī zhū lěi",
    啛啛喳喳: "cuì cuì chā chā",
    摧折豪强: "cuī zhé háo qiáng",
    摧刚为柔: "cuī gāng wéi róu",
    从俗就简: "cóng sú jiù jiǎn",
    此发彼应: "cǐ fā bǐ yīng",
    此唱彼和: "cǐ chàng bǐ hè",
    慈悲为本: "cí bēi wéi běn",
    纯属骗局: "chún shǔ piàn jú",
    春笋怒发: "chūn sǔn nù fā",
    垂头搨翼: "chuí tóu tà yì",
    传为笑谈: "chuán wéi xiào tán",
    传风扇火: "chuán fēng shān huǒ",
    穿红着绿: "chuān hóng zhuó lǜ",
    触处机来: "chù chǔ jī lái",
    处尊居显: "chǔ zūn jū xiǎn",
    处堂燕雀: "chǔ táng yàn què",
    处实效功: "chǔ shí xiào gōng",
    处高临深: "chǔ gāo lín shēn",
    出入无间: "chū rù wú jiān",
    出门应辙: "chū mén yīng zhé",
    出处语默: "chū chǔ yǔ mò",
    出处殊途: "chū chǔ shū tú",
    出处进退: "chū chǔ jìn tuì",
    愁山闷海: "chóu shān mèn hǎi",
    冲冠眦裂: "chōng guàn zì liè",
    齿牙为祸: "chǐ yá wéi huò",
    尺二冤家: "chǐ èr yuān jia",
    尺短寸长: "chǐ duǎn cùn cháng",
    尺寸之功: "chǐ cùn zhī gōng",
    城北徐公: "chéng běi xú gōng",
    成败兴废: "chéng bài xīng fèi",
    趁水和泥: "chèn shuǐ huò ní",
    称雨道晴: "chēng yǔ dào qíng",
    称体载衣: "chēng tǐ zài yī",
    称体裁衣: "chèn tǐ cái yī",
    称家有无: "chèn jiā yǒu wú",
    称德度功: "chēng dé duó gōng",
    沉吟章句: "chén yín zhāng jù",
    沉吟不决: "chén yín bù jué",
    沉疴宿疾: "chén kē sù jí",
    扯纤拉烟: "chě qiàn lā yān",
    扯顺风旗: "chě shùn fēng qí",
    车载船装: "chē zǎi chuán zhuāng",
    朝升暮合: "zhāo shēng mù gě",
    朝攀暮折: "zhāo pān mù shé",
    超今冠古: "chāo jīn guàn gǔ",
    倡而不和: "chàng ér bú hè",
    畅所欲为: "chàng suǒ yù wéi",
    苌弘碧血: "cháng hóng bì xiě",
    长幼尊卑: "zhǎng yòu zūn bēi",
    长绳系日: "cháng shéng jì rì",
    长年三老: "zhǎng nián sān lǎo",
    长春不老: "cháng chūn bù lǎo",
    长傲饰非: "zhǎng ào shì fēi",
    昌亭旅食: "chāng tíng lǚ shí",
    禅絮沾泥: "chán xù zhān ní",
    差三错四: "chā sān cuò sì",
    层台累榭: "céng tái lěi xiè",
    层见迭出: "céng xiàn dié chū",
    藏踪蹑迹: "cáng zōng niè jì",
    苍蝇见血: "cāng yíng jiàn xiě",
    餐松啖柏: "cān sōng dàn bó",
    骖风驷霞: "cān fēng sì xiá",
    参伍错综: "cēn wǔ cuò zōng",
    参辰卯酉: "shēn chén mǎo yǒu",
    材优干济: "cái yōu gān jǐ",
    材薄质衰: "cái bó zhì shuāi",
    才大难用: "cái dà nán yòng",
    才薄智浅: "cái bó zhì qiǎn",
    不足为意: "bù zú wéi yì",
    不足为据: "bù zú wéi jù",
    不足为法: "bù zú wéi fǎ",
    不足齿数: "bù zú chǐ shǔ",
    不着疼热: "bù zhuó téng rè",
    不知薡蕫: "bù zhī dǐng dǒng",
    不越雷池: "bú yuè léi chí",
    不相为谋: "bù xiāng wéi móu",
    不贪为宝: "bù tān wéi bǎo",
    不了而了: "bù liǎo ér liǎo",
    不可揆度: "bù kě kuí duó",
    不遑启处: "bù huáng qǐ chǔ",
    不当不正: "bù dāng bú zhèng",
    不差什么: "bú chà shén me",
    不差累黍: "bù chā lěi shǔ",
    擘两分星: "bò liǎng fēn xīng",
    簸土扬沙: "bǒ tǔ yáng shā",
    薄物细故: "bó wù xì gù",
    薄寒中人: "bó hán zhòng rén",
    博文约礼: "bó wén yuē lǐ",
    播糠眯目: "bō kāng mí mù",
    剥皮抽筋: "bō pí chōu jīn",
    剥肤椎髓: "bō fū chuí suǐ",
    波属云委: "bō zhǔ yún wěi",
    波骇云属: "bō hài yún zhǔ",
    兵微将寡: "bīng wēi jiàng guǎ",
    兵强将勇: "bīng qiáng jiàng yǒng",
    兵多将广: "bīng duō jiàng guǎng",
    兵不由将: "bīng bù yóu jiàng",
    冰解的破: "bīng jiě dì pò",
    彬彬济济: "bīn bīn jǐ jǐ",
    摽梅之年: "biào méi zhī nián",
    表里为奸: "biǎo lǐ wéi jiān",
    飙发电举: "biāo fā diàn jǔ",
    变贪厉薄: "biàn tān lì bó",
    敝盖不弃: "bì gài bú qì",
    秕言谬说: "bǐ yán miù shuō",
    比物属事: "bǐ wù zhǔ shì",
    被山带河: "pī shān dài hé",
    被甲枕戈: "pī jiǎ zhěn gē",
    被甲据鞍: "pī jiǎ jù ān",
    被褐怀玉: "pī hè huái yù",
    被发缨冠: "pī fà yīng guàn",
    背曲腰躬: "bèi qǔ yāo gōng",
    北窗高卧: "běi chuāng gāo wò",
    北辰星拱: "běi chén xīng gǒng",
    北鄙之音: "běi bǐ zhī yīn",
    卑宫菲食: "bēi gōng fěi shí",
    暴衣露冠: "pù yī lù guàn",
    暴腮龙门: "pù sāi lóng mén",
    暴露文学: "bào lù wén xué",
    暴虎冯河: "bào hǔ píng hé",
    抱蔓摘瓜: "bào wàn zhāi guā",
    抱法处势: "bào fǎ chǔ shì",
    褒贬与夺: "bāo biǎn yǔ duó",
    帮闲钻懒: "bāng xián zuān lǎn",
    拜将封侯: "bài jiàng fēng hóu",
    百兽率舞: "bǎi shòu shuài wǔ",
    百孔千创: "bǎi kǒng qiān chuāng",
    白衣卿相: "bái yī qīng xiàng",
    白首为郎: "bái shǒu wéi láng",
    白首相知: "bái shǒu xiāng zhī",
    把玩无厌: "bǎ wán wú yàn",
    拔锅卷席: "bá guō juǎn xí",
    拔本塞源: "bá běn sè yuán",
    傲不可长: "ào bù kě zhǎng",
    熬更守夜: "áo gēng shǒu yè",
    安时处顺: "ān shí chǔ shùn",
    安身为乐: "ān shēn wéi lè",
    安老怀少: "ān lǎo huái shào",
    安步当车: "ān bù dàng chē",
    爱人好士: "ài rén hào shì",
    矮人观场: "ǎi rén guān chǎng",
    捱风缉缝: "ái fēng jī fèng",
    挨山塞海: "āi shān sè hǎi",
    阿家阿翁: "ā jiā ā wēng",
    阿党相为: "ē dǎng xiāng wéi",
    追亡逐北: "zhuī wáng zhú běi",
    竹篮打水: "zhú lán dá shuǐ",
    知疼着热: "zhī téng zháo rè",
    语不惊人: "yǔ bù jīng rén",
    于今为烈: "yú jīn wéi liè",
    一日三省: "yí rì sān xǐng",
    穴居野处: "xué jū yě chǔ",
    五脊六兽: "wǔ jǐ liù shòu",
    无声无臭: "wú shēng wú xiù",
    谓予不信: "wèi yú bú xìn",
    舍身为国: "shě shēn wéi guó",
    杀妻求将: "shā qī qiú jiàng",
    强作解人: "qiǎng zuò jiě rén",
    气冲斗牛: "qì chōng dǒu niú",
    临深履薄: "lín shēn lǚ bó",
    钧天广乐: "jūn tiān guǎng yuè",
    艰难竭蹶: "jiān nán jié jué",
    夹七夹八: "jiā qī jiā bā",
    混混噩噩: "hún hún è è",
    厚古薄今: "hòu gǔ bó jīn",
    鬼怕恶人: "guǐ pà è rén",
    伽马射线: "gā mǎ shè xiàn",
    佛头着粪: "fó tóu zhuó fèn",
    奉为至宝: "fèng wéi zhì bǎo",
    登坛拜将: "dēng tán bài jiàng",
    晨昏定省: "chén hūn dìng xǐng",
    察察为明: "chá chá wéi míng",
    博闻强识: "bó wén qiáng zhì",
    避难就易: "bì nán jiù yì",
    了无生机: "liǎo wú shēng jī",
    // 一字不变调的词语，如果词语仅有单个一且一字在结尾的无需添加（需要增补更多）
    有一说一: "yǒu yī shuō yī",
    独一无二: "dú yī wú èr",
    说一不二: "shuō yī bù èr",
    举一反三: "jǔ yī fǎn sān",
    数一数二: "shǔ yī shǔ èr",
    杀一儆百: "shā yī jǐng bǎi",
    丁一卯二: "dīng yī mǎo èr",
    丁一确二: "dīng yī què èr",
    不一而止: "bù yī ér zhǐ",
    无一幸免: "wú yī xìng miǎn",
    // 来源：https://m.gushici.com/cyxy_4e00_4
    表里不一: "biǎo lǐ bù yī",
    良莠不一: "liáng yǒu bù yī",
    心口不一: "xīn kǒu bù yī",
    言行不一: "yán xíng bù yī",
    政令不一: "zhèng lìng bù yī",
    参差不一: "cēn cī bù yī",
    纷纷不一: "fēn fēn bù yī",
    毁誉不一: "huǐ yù bù yī",
    不一而三: "bù yī ér sān",
    百不一遇: "bǎi bù yī yù",
    言行抱一: "yán xíng bào yī",
    瑜百瑕一: "yú bǎi xiá yī",
    背城借一: "bèi chéng jiè yī",
    凭城借一: "píng chéng jiè yī",
    劝百讽一: "quàn bǎi fěng yī",
    群居和一: "qún jū hé yī",
    百不获一: "bǎi bù huò yī",
    百不失一: "bǎi bù shī yī",
    百无失一: "bǎi wú shī yī",
    万不失一: "wàn bù shī yī",
    万无失一: "wàn wú shī yī",
    合而为一: "hé ér wéi yī",
    合两为一: "hé liǎng wéi yī",
    合二为一: "hé èr wéi yī",
    天下为一: "tiān xià wéi yī",
    相与为一: "xiāng yǔ wéi yī",
    较若画一: "jiào ruò huà yī",
    较如画一: "jiào rú huà yī",
    斠若画一: "jiào ruò huà yī",
    言行若一: "yán xíng ruò yī",
    始终若一: "shǐ zhōng ruò yī",
    终始若一: "zhōng shǐ ruò yī",
    惟精惟一: "wéi jīng wéi yī",
    众多非一: "zhòng duō fēi yī",
    不能赞一: "bù néng zàn yī",
    问一答十: "wèn yī dá shí",
    一不扭众: "yī bù niǔ zhòng",
    一以贯之: "yī yǐ guàn zhī",
    一以当百: "yī yǐ dāng bǎi",
    百不当一: "bǎi bù dāng yī",
    十不当一: "shí bù dāng yī",
    以一警百: "yǐ yī jǐng bǎi",
    以一奉百: "yǐ yī fèng bǎi",
    以一持万: "yǐ yī chí wàn",
    以一知万: "yǐ yī zhī wàn",
    百里挑一: "bǎi lǐ tiāo yī",
    整齐划一: "zhěng qí huà yī",
    一来二去: "yī lái èr qù",
    一路公交: "yī lù gōng jiāo",
    一路汽车: "yī lù qì chē",
    一路巴士: "yī lù bā shì",
    朝朝朝落: "zhāo cháo zhāo luò",
    曲意逢迎: "qū yì féng yíng",
    一行不行: "yì háng bù xíng",
    行行不行: "háng háng bù xíng"
  };
  const Pattern4 = Object.keys(DICT4).map((key) => ({
    zh: key,
    pinyin: DICT4[key],
    probability: 2e-8,
    length: 4,
    priority: Priority.Normal,
    dict: Symbol("dict4")
  }));
  const DICT5 = {
    巴尔干半岛: "bā ěr gàn bàn dǎo",
    巴尔喀什湖: "bā ěr kā shí hú",
    不幸而言中: "bú xìng ér yán zhòng",
    布尔什维克: "bù ěr shí wéi kè",
    何乐而不为: "hé lè ér bù wéi",
    苛政猛于虎: "kē zhèng měng yú hǔ",
    蒙得维的亚: "méng dé wéi dì yà",
    民以食为天: "mín yǐ shí wéi tiān",
    事后诸葛亮: "shì hòu zhū gě liàng",
    物以稀为贵: "wù yǐ xī wéi guì",
    先下手为强: "xiān xià shǒu wéi qiáng",
    行行出状元: "háng háng chū zhuàng yuan",
    亚得里亚海: "yà dé lǐ yà hǎi",
    眼不见为净: "yǎn bú jiàn wéi jìng",
    竹筒倒豆子: "zhú tǒng dào dòu zi"
  };
  const Pattern5 = Object.keys(DICT5).map((key) => ({
    zh: key,
    pinyin: DICT5[key],
    probability: 2e-8,
    length: 5,
    priority: Priority.Normal,
    dict: Symbol("dict5")
  }));
  function getMaxProbability(a, b) {
    if (!a) {
      return b;
    }
    if (a.decimal < b.decimal) {
      return a;
    } else if (a.decimal === b.decimal) {
      return a.probability > b.probability ? a : b;
    } else {
      return b;
    }
  }
  function checkDecimal(prob) {
    if (prob.probability < 1e-300) {
      prob.probability *= 1e300;
      prob.decimal += 1;
    }
  }
  function getPatternDecimal(pattern2) {
    if (pattern2.priority === Priority.Custom) {
      return -(pattern2.length * pattern2.length * 100);
    }
    if (pattern2.priority === Priority.Surname) {
      return -(pattern2.length * pattern2.length * 10);
    }
    return 0;
  }
  function maxProbability(patterns, length) {
    const dp = [];
    let patternIndex = patterns.length - 1;
    let pattern2 = patterns[patternIndex];
    for (let i = length - 1; i >= 0; i--) {
      const suffixDP = i + 1 >= length ? { probability: 1, decimal: 0, patterns: [] } : dp[i + 1];
      while (pattern2 && pattern2.index + pattern2.length - 1 === i) {
        const startIndex = pattern2.index;
        const curDP = {
          probability: pattern2.probability * suffixDP.probability,
          decimal: suffixDP.decimal + getPatternDecimal(pattern2),
          patterns: suffixDP.patterns,
          concatPattern: pattern2
        };
        checkDecimal(curDP);
        dp[startIndex] = getMaxProbability(dp[startIndex], curDP);
        pattern2 = patterns[--patternIndex];
      }
      const iDP = {
        probability: 1e-13 * suffixDP.probability,
        decimal: 0,
        patterns: suffixDP.patterns
      };
      checkDecimal(iDP);
      dp[i] = getMaxProbability(dp[i], iDP);
      if (dp[i].concatPattern) {
        dp[i].patterns = dp[i].patterns.concat(dp[i].concatPattern);
        dp[i].concatPattern = void 0;
        delete dp[i + 1];
      }
    }
    return dp[0].patterns.reverse();
  }
  function getMinCount(a, b) {
    if (!a) {
      return b;
    }
    return a.count <= b.count ? a : b;
  }
  function getPatternCount(pattern2) {
    if (pattern2.priority === Priority.Custom) {
      return -(pattern2.length * pattern2.length * 1e5);
    }
    if (pattern2.priority === Priority.Surname) {
      return -(pattern2.length * pattern2.length * 100);
    }
    return 1;
  }
  function minTokenization(patterns, length) {
    const dp = [];
    let patternIndex = patterns.length - 1;
    let pattern2 = patterns[patternIndex];
    for (let i = length - 1; i >= 0; i--) {
      const suffixDP = i + 1 >= length ? { count: 0, patterns: [] } : dp[i + 1];
      while (pattern2 && pattern2.index + pattern2.length - 1 === i) {
        const startIndex = pattern2.index;
        const curDP = {
          count: getPatternCount(pattern2) + suffixDP.count,
          patterns: suffixDP.patterns,
          concatPattern: pattern2
        };
        dp[startIndex] = getMinCount(dp[startIndex], curDP);
        pattern2 = patterns[--patternIndex];
      }
      const iDP = {
        count: 1 + suffixDP.count,
        patterns: suffixDP.patterns
      };
      dp[i] = getMinCount(dp[i], iDP);
      if (dp[i].concatPattern) {
        dp[i].patterns = dp[i].patterns.concat(dp[i].concatPattern);
        dp[i].concatPattern = void 0;
        delete dp[i + 1];
      }
    }
    return dp[0].patterns.reverse();
  }
  function isIgnorablePattern(cur, pre) {
    if (pre.index + pre.length <= cur.index) {
      return false;
    }
    if (pre.priority > cur.priority) {
      return false;
    }
    if (pre.priority === cur.priority && pre.length > cur.length) {
      return false;
    }
    return true;
  }
  function reverseMaxMatch(patterns) {
    const filteredArr = [];
    for (let i = patterns.length - 1; i >= 0; ) {
      const { index: index2 } = patterns[i];
      let j = i - 1;
      while (j >= 0 && isIgnorablePattern(patterns[i], patterns[j])) {
        j--;
      }
      if (j < 0 || patterns[j].index + patterns[j].length <= index2) {
        filteredArr.push(patterns[i]);
      }
      i = j;
    }
    return filteredArr.reverse();
  }
  var TokenizationAlgorithm;
  (function(TokenizationAlgorithm2) {
    TokenizationAlgorithm2[TokenizationAlgorithm2["ReverseMaxMatch"] = 1] = "ReverseMaxMatch";
    TokenizationAlgorithm2[TokenizationAlgorithm2["MaxProbability"] = 2] = "MaxProbability";
    TokenizationAlgorithm2[TokenizationAlgorithm2["MinTokenization"] = 3] = "MinTokenization";
  })(TokenizationAlgorithm || (TokenizationAlgorithm = {}));
  class TrieNode {
    constructor(parent, prefix = "", key = "") {
      this.children = /* @__PURE__ */ new Map();
      this.fail = null;
      this.patterns = [];
      this.parent = parent;
      this.prefix = prefix;
      this.key = key;
    }
  }
  class AC {
    constructor() {
      this.dictMap = /* @__PURE__ */ new Map();
      this.queues = [];
      this.root = new TrieNode(null);
    }
    build(patternList) {
      this.buildTrie(patternList);
      this.buildFailPointer();
    }
    // 构建 trie 树
    buildTrie(patternList) {
      for (let pattern2 of patternList) {
        const zhChars = splitString(pattern2.zh);
        let cur = this.root;
        for (let i = 0; i < zhChars.length; i++) {
          let c = zhChars[i];
          if (!cur.children.has(c)) {
            const trieNode = new TrieNode(cur, zhChars.slice(0, i).join(""), c);
            cur.children.set(c, trieNode);
            this.addNodeToQueues(trieNode);
          }
          cur = cur.children.get(c);
        }
        this.insertPattern(cur.patterns, pattern2);
        pattern2.node = cur;
        this.addPatternToDictMap(pattern2);
      }
    }
    // 构建失败指针
    buildFailPointer() {
      let queue = [];
      let queueIndex = 0;
      this.queues.forEach((_queue) => {
        queue = queue.concat(_queue);
      });
      this.queues = [];
      while (queue.length > queueIndex) {
        let node = queue[queueIndex++];
        let failNode = node.parent && node.parent.fail;
        let key = node.key;
        while (failNode && !failNode.children.has(key)) {
          failNode = failNode.fail;
        }
        if (!failNode) {
          node.fail = this.root;
        } else {
          node.fail = failNode.children.get(key);
        }
      }
    }
    // 将 pattern 添加到 dictMap 中
    addPatternToDictMap(pattern2) {
      if (!this.dictMap.has(pattern2.dict)) {
        this.dictMap.set(pattern2.dict, /* @__PURE__ */ new Set());
      }
      this.dictMap.get(pattern2.dict).add(pattern2);
    }
    addNodeToQueues(trieNode) {
      if (!this.queues[stringLength(trieNode.prefix)]) {
        this.queues[stringLength(trieNode.prefix)] = [];
      }
      this.queues[stringLength(trieNode.prefix)].push(trieNode);
    }
    // 按照优先级插入 pattern
    insertPattern(patterns, pattern2) {
      for (let i = patterns.length - 1; i >= 0; i--) {
        const _pattern = patterns[i];
        if (pattern2.priority === _pattern.priority && pattern2.probability >= _pattern.probability) {
          patterns[i + 1] = _pattern;
        } else if (pattern2.priority > _pattern.priority) {
          patterns[i + 1] = _pattern;
        } else {
          patterns[i + 1] = pattern2;
          return;
        }
      }
      patterns[0] = pattern2;
    }
    removeDict(dictName) {
      if (this.dictMap.has(dictName)) {
        const set2 = this.dictMap.get(dictName);
        set2.forEach((pattern2) => {
          pattern2.node.patterns = pattern2.node.patterns.filter((_pattern) => _pattern !== pattern2);
        });
        this.dictMap.delete(dictName);
      }
    }
    // 搜索字符串返回匹配的模式串
    match(text, surname) {
      let cur = this.root;
      let result = [];
      const zhChars = splitString(text);
      for (let i = 0; i < zhChars.length; i++) {
        let c = zhChars[i];
        while (cur !== null && !cur.children.has(c)) {
          cur = cur.fail;
        }
        if (cur === null) {
          cur = this.root;
        } else {
          cur = cur.children.get(c);
          const pattern2 = cur.patterns.find((item) => {
            if (surname === "off") {
              return item.priority !== Priority.Surname;
            } else if (surname === "head") {
              return item.length - 1 - i === 0;
            } else {
              return true;
            }
          });
          if (pattern2) {
            result.push(Object.assign(Object.assign({}, pattern2), { index: i - pattern2.length + 1 }));
          }
          let failNode = cur.fail;
          while (failNode !== null) {
            const pattern3 = failNode.patterns.find((item) => {
              if (surname === "off") {
                return item.priority !== Priority.Surname;
              } else if (surname === "head") {
                return item.length - 1 - i === 0;
              } else {
                return true;
              }
            });
            if (pattern3) {
              result.push(Object.assign(Object.assign({}, pattern3), { index: i - pattern3.length + 1 }));
            }
            failNode = failNode.fail;
          }
        }
      }
      return result;
    }
    search(text, surname, algorithm = 2) {
      const patterns = this.match(text, surname);
      if (algorithm === 1) {
        return reverseMaxMatch(patterns);
      } else if (algorithm === 3) {
        return minTokenization(patterns, stringLength(text));
      }
      return maxProbability(patterns, stringLength(text));
    }
  }
  const PatternsNormal = [
    ...Pattern5,
    ...Pattern4,
    ...Pattern3,
    ...Pattern2,
    ...PatternNumberDict,
    ...PatternSurname
  ];
  const acTree = new AC();
  acTree.build(PatternsNormal);
  const customMultipleDict = new FastDictFactory();
  const getCustomMultpileDict = () => {
    return customMultipleDict;
  };
  const getSingleWordPinyin = (char) => {
    const pinyin2 = DICT1.get(char);
    return pinyin2 ? pinyin2.split(" ")[0] : char;
  };
  const getPinyin = (word, list, surname, segmentit) => {
    const matches = acTree.search(word, surname, segmentit);
    let matchIndex = 0;
    const zhChars = splitString(word);
    for (let i = 0; i < zhChars.length; ) {
      const match = matches[matchIndex];
      if (match && i === match.index) {
        if (match.length === 1 && match.priority <= Priority.Normal) {
          const char = zhChars[i];
          let pinyin2 = "";
          pinyin2 = processSepecialPinyin(char, zhChars[i - 1], zhChars[i + 1]);
          list[i] = {
            origin: char,
            result: pinyin2,
            isZh: pinyin2 !== char,
            originPinyin: pinyin2
          };
          i++;
          matchIndex++;
          continue;
        }
        const pinyins = match.pinyin.split(" ");
        let pinyinIndex = 0;
        for (let j = 0; j < match.length; j++) {
          const zhChars2 = splitString(match.zh);
          list[i + j] = {
            origin: zhChars2[j],
            result: pinyins[pinyinIndex],
            isZh: true,
            originPinyin: pinyins[pinyinIndex]
          };
          pinyinIndex++;
        }
        i += match.length;
        matchIndex++;
      } else {
        const char = zhChars[i];
        let pinyin2 = "";
        pinyin2 = processSepecialPinyin(char, zhChars[i - 1], zhChars[i + 1]);
        list[i] = {
          origin: char,
          result: pinyin2,
          isZh: pinyin2 !== char,
          originPinyin: pinyin2
        };
        i++;
      }
    }
    return { list, matches };
  };
  const getPinyinWithoutTone = (pinyin2) => {
    return pinyin2.replace(/(ā|á|ǎ|à)/g, "a").replace(/(ō|ó|ǒ|ò)/g, "o").replace(/(ē|é|ě|è)/g, "e").replace(/(ī|í|ǐ|ì)/g, "i").replace(/(ū|ú|ǔ|ù)/g, "u").replace(/(ǖ|ǘ|ǚ|ǜ)/g, "ü").replace(/(n̄|ń|ň|ǹ)/g, "n").replace(/(m̄|ḿ|m̌|m̀)/g, "m").replace(/(ê̄|ế|ê̌|ề)/g, "ê");
  };
  const getAllPinyin = (char, surname = "off") => {
    const customMultpileDict = getCustomMultpileDict();
    let pinyin2 = DICT1.get(char) ? DICT1.get(char).split(" ") : [];
    if (customMultpileDict.get(char)) {
      pinyin2 = customMultpileDict.get(char).split(" ");
    } else if (surname !== "off") {
      const surnamePinyin = Surnames[char];
      if (surnamePinyin) {
        pinyin2 = [surnamePinyin].concat(pinyin2.filter((py) => py !== surnamePinyin));
      }
    }
    return pinyin2;
  };
  const getMultiplePinyin = (word, surname = "off") => {
    let pinyin2 = getAllPinyin(word, surname);
    if (pinyin2.length > 0) {
      return pinyin2.map((value) => ({
        origin: word,
        result: value,
        isZh: true,
        originPinyin: value
      }));
    } else {
      return [
        {
          origin: word,
          result: word,
          isZh: false,
          originPinyin: word
        }
      ];
    }
  };
  const getInitialAndFinal = (pinyin2) => {
    const pinyin_arr = pinyin2.split(" ");
    const initial_arr = [];
    const final_arr = [];
    for (let _pinyin of pinyin_arr) {
      for (let _initial of InitialList) {
        if (_pinyin.startsWith(_initial)) {
          let _final = _pinyin.slice(_initial.length);
          if (SpecialInitialList.indexOf(_initial) !== -1 && SpecialFinalList.indexOf(_final) !== -1) {
            _final = SpecialFinalMap[_final];
          }
          initial_arr.push(_initial);
          final_arr.push(_final);
          break;
        }
      }
    }
    return {
      final: final_arr.join(" "),
      initial: initial_arr.join(" ")
      // 声母
    };
  };
  const getFinalParts = (pinyin2) => {
    const { final } = getInitialAndFinal(pinyin2);
    let head = "", body = "", tail = "";
    if (doubleFinalList.indexOf(getPinyinWithoutTone(final)) !== -1) {
      head = final[0];
      body = final[1];
      tail = final.slice(2);
    } else {
      body = final[0] || "";
      tail = final.slice(1) || "";
    }
    return { head, body, tail };
  };
  const getNumOfTone = (pinyin2) => {
    const reg_tone1 = /(ā|ō|ē|ī|ū|ǖ|n̄|m̄|ê̄)/;
    const reg_tone2 = /(á|ó|é|í|ú|ǘ|ń|ḿ|ế)/;
    const reg_tone3 = /(ǎ|ǒ|ě|ǐ|ǔ|ǚ|ň|m̌|ê̌)/;
    const reg_tone4 = /(à|ò|è|ì|ù|ǜ|ǹ|m̀|ề)/;
    const reg_tone0 = /(a|o|e|i|u|ü|ê)/;
    const special_tone = /(n|m)$/;
    const tone_num_arr = [];
    const pinyin_arr = pinyin2.split(" ");
    pinyin_arr.forEach((_pinyin) => {
      if (reg_tone1.test(_pinyin)) {
        tone_num_arr.push("1");
      } else if (reg_tone2.test(_pinyin)) {
        tone_num_arr.push("2");
      } else if (reg_tone3.test(_pinyin)) {
        tone_num_arr.push("3");
      } else if (reg_tone4.test(_pinyin)) {
        tone_num_arr.push("4");
      } else if (reg_tone0.test(_pinyin)) {
        tone_num_arr.push("0");
      } else if (special_tone.test(_pinyin)) {
        tone_num_arr.push("0");
      } else {
        tone_num_arr.push("");
      }
    });
    return tone_num_arr.join(" ");
  };
  const getPinyinWithNum = (pinyin2, originPinyin) => {
    const pinyin_arr = getPinyinWithoutTone(pinyin2).split(" ");
    const tone_num_arr = getNumOfTone(originPinyin).split(" ");
    const res_arr = [];
    pinyin_arr.forEach((item, index2) => {
      res_arr.push(`${item}${tone_num_arr[index2]}`);
    });
    return res_arr.join(" ");
  };
  const getFirstLetter = (pinyin2, isZh) => {
    const first_letter_arr = [];
    const pinyin_arr = pinyin2.split(" ");
    pinyin_arr.forEach((pinyin3) => {
      first_letter_arr.push(isZh ? pinyin3[0] : pinyin3);
    });
    return first_letter_arr.join(" ");
  };
  const validateType = (word) => {
    if (typeof word !== "string") {
      formatAppLog("error", "at node_modules/pinyin-pro/dist/index.mjs:24201", "The first param of pinyin is error: " + word + ' is not assignable to type "string".');
      return false;
    } else {
      return true;
    }
  };
  function isNonZhScope(char, scope) {
    if (scope instanceof RegExp) {
      return scope.test(char);
    }
    return true;
  }
  const middleWareNonZh = (list, options) => {
    let nonZh = options.nonZh;
    if (nonZh === "removed") {
      return list.filter((item) => item.isZh || !isNonZhScope(item.origin, options.nonZhScope));
    } else if (nonZh === "consecutive") {
      for (let i = list.length - 2; i >= 0; i--) {
        const cur = list[i];
        const pre = list[i + 1];
        if (!cur.isZh && !pre.isZh && isNonZhScope(cur.origin, options.nonZhScope) && isNonZhScope(pre.origin, options.nonZhScope)) {
          cur.origin += pre.origin;
          cur.result += pre.result;
          pre.delete = true;
        }
      }
      return list.filter((item) => !item.delete);
    } else {
      return list;
    }
  };
  const middlewareMultiple = (word, options) => {
    if (stringLength(word) === 1 && options.multiple) {
      return getMultiplePinyin(word, options.surname);
    } else {
      return false;
    }
  };
  const middlewarePattern = (list, options) => {
    switch (options.pattern) {
      case "pinyin":
        break;
      case "num":
        list.forEach((item) => {
          item.result = item.isZh ? getNumOfTone(item.result) : "";
        });
        break;
      case "initial":
        list.forEach((item) => {
          item.result = item.isZh ? getInitialAndFinal(item.result).initial : "";
        });
        break;
      case "final":
        list.forEach((item) => {
          item.result = item.isZh ? getInitialAndFinal(item.result).final : "";
        });
        break;
      case "first":
        list.forEach((item) => {
          item.result = getFirstLetter(item.result, item.isZh);
        });
        break;
      case "finalHead":
        list.forEach((item) => {
          item.result = item.isZh ? getFinalParts(item.result).head : "";
        });
        break;
      case "finalBody":
        list.forEach((item) => {
          item.result = item.isZh ? getFinalParts(item.result).body : "";
        });
        break;
      case "finalTail":
        list.forEach((item) => {
          item.result = item.isZh ? getFinalParts(item.result).tail : "";
        });
        break;
    }
  };
  const middlewareToneType = (list, options) => {
    switch (options.toneType) {
      case "symbol":
        break;
      case "none":
        list.forEach((item) => {
          if (item.isZh) {
            item.result = getPinyinWithoutTone(item.result);
          }
        });
        break;
      case "num": {
        list.forEach((item) => {
          if (item.isZh) {
            item.result = getPinyinWithNum(item.result, item.originPinyin);
          }
        });
        break;
      }
    }
  };
  const middlewareV = (list, options) => {
    if (options.v) {
      list.forEach((item) => {
        if (item.isZh) {
          item.result = item.result.replace(/ü/g, "v");
        }
      });
    }
  };
  const middlewareType = (list, options, word) => {
    if (options.multiple && stringLength(word) === 1) {
      let last = "";
      list = list.filter((item) => {
        const res = item.result !== last;
        last = item.result;
        return res;
      });
    }
    if (options.type === "array") {
      return list.map((item) => item.result);
    }
    if (options.type === "all") {
      return list.map((item) => {
        const pinyin2 = item.isZh ? item.result : "";
        const { initial, final } = getInitialAndFinal(pinyin2);
        const { head, body, tail } = getFinalParts(pinyin2);
        let polyphonic = [];
        if (pinyin2 !== "") {
          polyphonic = [pinyin2].concat(getAllPinyin(item.origin, options.surname).filter((item2) => item2 !== pinyin2));
        }
        return {
          origin: item.origin,
          pinyin: pinyin2,
          initial,
          final,
          first: getFirstLetter(item.result, item.isZh),
          finalHead: head,
          finalBody: body,
          finalTail: tail,
          num: Number(getNumOfTone(item.originPinyin)),
          isZh: item.isZh,
          polyphonic,
          inZhRange: !!DICT1.get(item.origin),
          result: item.result
        };
      });
    }
    return list.map((item) => item.result).join(options.separator);
  };
  const middlewareToneSandhi = (list, toneSandhi) => {
    if (toneSandhi === false) {
      list.forEach((item) => {
        if (item.origin === "一") {
          item.result = item.originPinyin = "yī";
        } else if (item.origin === "不") {
          item.result = item.originPinyin = "bù";
        }
      });
    }
    return list;
  };
  const DEFAULT_OPTIONS$2 = {
    pattern: "pinyin",
    toneType: "symbol",
    type: "string",
    multiple: false,
    mode: "normal",
    removeNonZh: false,
    nonZh: "spaced",
    v: false,
    separator: " ",
    toneSandhi: true,
    segmentit: 2
  };
  function pinyin(word, options) {
    options = Object.assign(Object.assign({}, DEFAULT_OPTIONS$2), options || {});
    const legal = validateType(word);
    if (!legal) {
      return word;
    }
    if (word === "") {
      return options.type === "array" || options.type === "all" ? [] : "";
    }
    if (options.surname === void 0) {
      if (options.mode === "surname") {
        options.surname = "all";
      } else {
        options.surname = "off";
      }
    }
    if (options.type === "all") {
      options.pattern = "pinyin";
    }
    if (options.pattern === "num") {
      options.toneType = "none";
    }
    if (options.removeNonZh) {
      options.nonZh = "removed";
    }
    let _list = Array(stringLength(word));
    let { list } = getPinyin(word, _list, options.surname, options.segmentit);
    list = middlewareToneSandhi(list, options.toneSandhi);
    list = middleWareNonZh(list, options);
    if (middlewareMultiple(word, options)) {
      list = middlewareMultiple(word, options);
    }
    middlewarePattern(list, options);
    middlewareToneType(list, options);
    middlewareV(list, options);
    return middlewareType(list, options, word);
  }
  var OutputFormat;
  (function(OutputFormat2) {
    OutputFormat2[OutputFormat2["AllSegment"] = 1] = "AllSegment";
    OutputFormat2[OutputFormat2["AllArray"] = 2] = "AllArray";
    OutputFormat2[OutputFormat2["AllString"] = 3] = "AllString";
    OutputFormat2[OutputFormat2["PinyinSegment"] = 4] = "PinyinSegment";
    OutputFormat2[OutputFormat2["PinyinArray"] = 5] = "PinyinArray";
    OutputFormat2[OutputFormat2["PinyinString"] = 6] = "PinyinString";
    OutputFormat2[OutputFormat2["ZhSegment"] = 7] = "ZhSegment";
    OutputFormat2[OutputFormat2["ZhArray"] = 8] = "ZhArray";
    OutputFormat2[OutputFormat2["ZhString"] = 9] = "ZhString";
  })(OutputFormat || (OutputFormat = {}));
  ({
    toneType: "symbol",
    mode: "normal",
    nonZh: "spaced",
    v: false,
    separator: " ",
    toneSandhi: true,
    segmentit: 2,
    format: OutputFormat.AllSegment
  });
  const _sfc_main$z = {
    data() {
      return {
        showSearch: false,
        searchText: ""
      };
    },
    methods: {
      onAddNewFriends() {
        uni.navigateTo({
          url: "/pages/friend/friend-add"
        });
      },
      firstLetter(strText) {
        let pinyinOptions = {
          toneType: "none",
          // 无声调
          type: "normal"
          // 普通拼音
        };
        let pyText = pinyin(strText, pinyinOptions);
        return pyText[0];
      },
      isEnglish(character) {
        return /^[A-Za-z]+$/.test(character);
      }
    },
    computed: {
      friends() {
        return this.friendStore.friends;
      },
      friendGroupMap() {
        let groupMap = /* @__PURE__ */ new Map();
        this.friends.forEach((f) => {
          if (this.searchText && !f.nickName.includes(this.searchText)) {
            return;
          }
          let letter2 = this.firstLetter(f.nickName).toUpperCase();
          if (!this.isEnglish(letter2)) {
            letter2 = "#";
          }
          if (f.online) {
            letter2 = "*";
          }
          if (groupMap.has(letter2)) {
            groupMap.get(letter2).push(f);
          } else {
            groupMap.set(letter2, [f]);
          }
        });
        let arrayObj = Array.from(groupMap);
        arrayObj.sort((a, b) => {
          if (a[0] == "#" || b[0] == "#") {
            return b[0].localeCompare(a[0]);
          }
          return a[0].localeCompare(b[0]);
        });
        groupMap = new Map(arrayObj.map((i) => [i[0], i[1]]));
        return groupMap;
      },
      friendIdx() {
        return Array.from(this.friendGroupMap.keys());
      },
      friendGroups() {
        return Array.from(this.friendGroupMap.values());
      }
    }
  };
  function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1$5);
    const _component_up_index_anchor = resolveEasycom(vue.resolveDynamicComponent("up-index-anchor"), __easycom_2$2);
    const _component_friend_item = resolveEasycom(vue.resolveDynamicComponent("friend-item"), __easycom_3$3);
    const _component_up_index_item = resolveEasycom(vue.resolveDynamicComponent("up-index-item"), __easycom_4$3);
    const _component_up_index_list = resolveEasycom(vue.resolveDynamicComponent("up-index-list"), __easycom_5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab-page friend" }, [
      vue.createVNode(_component_nav_bar, {
        add: "",
        search: "",
        onAdd: $options.onAddNewFriends,
        onSearch: _cache[0] || (_cache[0] = ($event) => $data.showSearch = !$data.showSearch)
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("好友")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onAdd"]),
      $data.showSearch ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "nav-bar"
      }, [
        vue.createElementVNode("view", { class: "nav-search" }, [
          vue.createVNode(_component_uni_search_bar, {
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.searchText = $event),
            radius: "100",
            cancelButton: "none",
            placeholder: "点击搜索好友"
          }, null, 8, ["modelValue"])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      $options.friends.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "friend-tip"
      }, " 温馨提示：您现在还没有任何好友，快点击右上方'+'按钮添加好友吧~ ")) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "friend-items"
      }, [
        vue.createVNode(_component_up_index_list, { "index-list": $options.friendIdx }, {
          default: vue.withCtx(() => [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($options.friendGroups, (friends, i) => {
                return vue.openBlock(), vue.createBlock(
                  _component_up_index_item,
                  null,
                  {
                    default: vue.withCtx(() => [
                      vue.createVNode(_component_up_index_anchor, {
                        text: $options.friendIdx[i] == "*" ? "在线" : $options.friendIdx[i]
                      }, null, 8, ["text"]),
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(friends, (friend, idx) => {
                          return vue.openBlock(), vue.createElementBlock("view", { key: idx }, [
                            vue.createVNode(_component_friend_item, { friend }, null, 8, ["friend"])
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ]),
                    _: 2
                    /* DYNAMIC */
                  },
                  1024
                  /* DYNAMIC_SLOTS */
                );
              }),
              256
              /* UNKEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["index-list"])
      ]))
    ]);
  }
  const PagesFriendFriend = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$y], ["__scopeId", "data-v-b7e6a9a8"], ["__file", "C:/Java/box-im/im-uniapp/pages/friend/friend.vue"]]);
  const _sfc_main$y = {
    name: "group-item",
    data() {
      return {};
    },
    methods: {
      showGroupInfo() {
        uni.navigateTo({
          url: "/pages/group/group-info?id=" + this.group.id
        });
      }
    },
    props: {
      group: {
        type: Object
      }
    }
  };
  function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "group-item",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.showGroupInfo())
    }, [
      vue.createVNode(_component_head_image, {
        name: $props.group.showGroupName,
        url: $props.group.headImage,
        size: "small"
      }, null, 8, ["name", "url"]),
      vue.createElementVNode("view", { class: "group-name" }, [
        vue.createElementVNode(
          "view",
          null,
          vue.toDisplayString($props.group.showGroupName),
          1
          /* TEXT */
        )
      ])
    ]);
  }
  const __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$x], ["__scopeId", "data-v-1f417333"], ["__file", "C:/Java/box-im/im-uniapp/components/group-item/group-item.vue"]]);
  const _sfc_main$x = {
    data() {
      return {
        showSearch: false,
        searchText: ""
      };
    },
    methods: {
      onFocusSearch() {
      },
      onCreateNewGroup() {
        uni.navigateTo({
          url: "/pages/group/group-edit"
        });
      }
    }
  };
  function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1$5);
    const _component_group_item = resolveEasycom(vue.resolveDynamicComponent("group-item"), __easycom_2$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "tab-page group" }, [
      vue.createVNode(_component_nav_bar, {
        add: "",
        search: "",
        onAdd: $options.onCreateNewGroup,
        onSearch: _cache[0] || (_cache[0] = ($event) => $data.showSearch = !$data.showSearch)
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("群聊")
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onAdd"]),
      $data.showSearch ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "nav-bar"
      }, [
        vue.createElementVNode("view", { class: "nav-search" }, [
          vue.createVNode(_component_uni_search_bar, {
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.searchText = $event),
            cancelButton: "none",
            radius: "100",
            placeholder: "点击搜索群聊"
          }, null, 8, ["modelValue"])
        ])
      ])) : vue.createCommentVNode("v-if", true),
      _ctx.groupStore.groups.length == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "group-tip"
      }, " 温馨提示：您现在还没有加入任何群聊，点击右上方'+'按钮可以创建群聊哦~ ")) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "group-items"
      }, [
        vue.createElementVNode("scroll-view", {
          class: "scroll-bar",
          "scroll-with-animation": "true",
          "scroll-y": "true"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList(_ctx.groupStore.groups, (group) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: group.id
              }, [
                !group.quit && group.showGroupName.includes($data.searchText) ? (vue.openBlock(), vue.createBlock(_component_group_item, {
                  key: 0,
                  group
                }, null, 8, ["group"])) : vue.createCommentVNode("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]))
    ]);
  }
  const PagesGroupGroup = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$w], ["__scopeId", "data-v-3945b5f1"], ["__file", "C:/Java/box-im/im-uniapp/pages/group/group.vue"]]);
  const _sfc_main$w = {
    name: "UniCard",
    emits: ["click"],
    props: {
      title: {
        type: String,
        default: ""
      },
      subTitle: {
        type: String,
        default: ""
      },
      padding: {
        type: String,
        default: "10px"
      },
      margin: {
        type: String,
        default: "15px"
      },
      spacing: {
        type: String,
        default: "0 10px"
      },
      extra: {
        type: String,
        default: ""
      },
      cover: {
        type: String,
        default: ""
      },
      thumbnail: {
        type: String,
        default: ""
      },
      isFull: {
        // 内容区域是否通栏
        type: Boolean,
        default: false
      },
      isShadow: {
        // 是否开启阴影
        type: Boolean,
        default: true
      },
      shadow: {
        type: String,
        default: "0px 0px 3px 1px rgba(0, 0, 0, 0.08)"
      },
      border: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      onClick(type) {
        this.$emit("click", type);
      }
    }
  };
  function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass(["uni-card", { "uni-card--full": $props.isFull, "uni-card--shadow": $props.isShadow, "uni-card--border": $props.border }]),
        style: vue.normalizeStyle({ "margin": $props.isFull ? 0 : $props.margin, "padding": $props.spacing, "box-shadow": $props.isShadow ? $props.shadow : "" })
      },
      [
        vue.createCommentVNode(" 封面 "),
        vue.renderSlot(_ctx.$slots, "cover", {}, () => [
          $props.cover ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__cover"
          }, [
            vue.createElementVNode("image", {
              class: "uni-card__cover-image",
              mode: "widthFix",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClick("cover")),
              src: $props.cover
            }, null, 8, ["src"])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.renderSlot(_ctx.$slots, "title", {}, () => [
          $props.title || $props.extra ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "uni-card__header"
          }, [
            vue.createCommentVNode(" 卡片标题 "),
            vue.createElementVNode("view", {
              class: "uni-card__header-box",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onClick("title"))
            }, [
              $props.thumbnail ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "uni-card__header-avatar"
              }, [
                vue.createElementVNode("image", {
                  class: "uni-card__header-avatar-image",
                  src: $props.thumbnail,
                  mode: "aspectFit"
                }, null, 8, ["src"])
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "uni-card__header-content" }, [
                vue.createElementVNode(
                  "text",
                  { class: "uni-card__header-content-title uni-ellipsis" },
                  vue.toDisplayString($props.title),
                  1
                  /* TEXT */
                ),
                $props.title && $props.subTitle ? (vue.openBlock(), vue.createElementBlock(
                  "text",
                  {
                    key: 0,
                    class: "uni-card__header-content-subtitle uni-ellipsis"
                  },
                  vue.toDisplayString($props.subTitle),
                  1
                  /* TEXT */
                )) : vue.createCommentVNode("v-if", true)
              ])
            ]),
            vue.createElementVNode("view", {
              class: "uni-card__header-extra",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onClick("extra"))
            }, [
              vue.createElementVNode(
                "text",
                { class: "uni-card__header-extra-text" },
                vue.toDisplayString($props.extra),
                1
                /* TEXT */
              )
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ], true),
        vue.createCommentVNode(" 卡片内容 "),
        vue.createElementVNode(
          "view",
          {
            class: "uni-card__content",
            style: vue.normalizeStyle({ padding: $props.padding }),
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onClick("content"))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
          ],
          4
          /* STYLE */
        ),
        vue.createElementVNode("view", {
          class: "uni-card__actions",
          onClick: _cache[4] || (_cache[4] = ($event) => $options.onClick("actions"))
        }, [
          vue.renderSlot(_ctx.$slots, "actions", {}, void 0, true)
        ])
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_4$2 = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$v], ["__scopeId", "data-v-ae4bee67"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-card/components/uni-card/uni-card.vue"]]);
  const _sfc_main$v = {
    data() {
      return {};
    },
    methods: {
      onModifyInfo() {
        uni.navigateTo({
          url: "/pages/mine/mine-edit"
        });
      },
      onModifyPassword() {
        uni.navigateTo({
          url: "/pages/mine/mine-password"
        });
      },
      onQuit() {
        uni.showModal({
          title: "确认退出?",
          success: (res) => {
            if (res.confirm) {
              formatAppLog("log", "at pages/mine/mine.vue:66", getApp());
              getApp().$vm.exit();
            }
          }
        });
      }
    },
    computed: {
      userInfo() {
        return this.userStore.userInfo;
      }
    }
  };
  function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_4$2);
    const _component_arrow_bar = vue.resolveComponent("arrow-bar");
    const _component_bar_group = vue.resolveComponent("bar-group");
    const _component_btn_bar = vue.resolveComponent("btn-bar");
    return vue.openBlock(), vue.createElementBlock("view", { class: "page mine" }, [
      vue.createVNode(_component_nav_bar, null, {
        default: vue.withCtx(() => [
          vue.createTextVNode("我的")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_uni_card, {
        "is-shadow": false,
        "is-full": "",
        border: false
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", {
            class: "content",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.onModifyInfo())
          }, [
            vue.createVNode(_component_head_image, {
              name: $options.userInfo.nickName,
              url: $options.userInfo.headImage,
              size: 160
            }, null, 8, ["name", "url"]),
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("view", { class: "info-primary" }, [
                vue.createElementVNode(
                  "text",
                  { class: "info-username" },
                  vue.toDisplayString($options.userInfo.userName),
                  1
                  /* TEXT */
                ),
                vue.withDirectives(vue.createElementVNode(
                  "text",
                  {
                    class: "iconfont icon-man",
                    color: "darkblue"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, $options.userInfo.sex == 0]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "text",
                  {
                    class: "iconfont icon-girl",
                    color: "darkred"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, $options.userInfo.sex == 1]
                ])
              ]),
              vue.createElementVNode("view", { class: "info-text" }, [
                vue.createElementVNode("text", { class: "label-text" }, " 昵称: "),
                vue.createElementVNode(
                  "text",
                  { class: "content-text" },
                  vue.toDisplayString($options.userInfo.nickName),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "info-text" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", { class: "label-text" }, " 签名: "),
                  vue.createElementVNode(
                    "text",
                    { class: "content-text" },
                    vue.toDisplayString($options.userInfo.signature),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_bar_group, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_arrow_bar, {
            title: "修改密码",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.onModifyPassword())
          })
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_bar_group, null, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_btn_bar, {
            title: "退出登录",
            type: "danger",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.onQuit())
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesMineMine = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$u], ["__scopeId", "data-v-7c2ebfa5"], ["__file", "C:/Java/box-im/im-uniapp/pages/mine/mine.vue"]]);
  const _sfc_main$u = {
    data() {
      return {
        userInfo: {}
      };
    },
    methods: {
      onShowFullImage() {
        let imageUrl = this.userInfo.headImage;
        if (imageUrl) {
          uni.previewImage({
            urls: [imageUrl]
          });
        }
      },
      onSendMessage() {
        let chat = {
          type: "PRIVATE",
          targetId: this.userInfo.id,
          showName: this.userInfo.nickName,
          headImage: this.userInfo.headImage
        };
        this.chatStore.openChat(chat);
        let chatIdx = this.chatStore.findChatIdx(chat);
        uni.navigateTo({
          url: "/pages/chat/chat-box?chatIdx=" + chatIdx
        });
      },
      onAddFriend() {
        this.$http({
          url: "/friend/add?friendId=" + this.userInfo.id,
          method: "POST"
        }).then((data) => {
          let friend = {
            id: this.userInfo.id,
            nickName: this.userInfo.nickName,
            headImage: this.userInfo.headImageThumb,
            online: this.userInfo.online
          };
          this.friendStore.addFriend(friend);
          uni.showToast({
            title: "对方已成为您的好友",
            icon: "none"
          });
        });
      },
      onDelFriend() {
        uni.showModal({
          title: "确认删除",
          content: `确认删除 '${this.userInfo.nickName}',并删除聊天记录吗?`,
          success: (res) => {
            if (res.cancel)
              return;
            this.$http({
              url: `/friend/delete/${this.userInfo.id}`,
              method: "delete"
            }).then((data) => {
              this.friendStore.removeFriend(this.userInfo.id);
              this.chatStore.removePrivateChat(this.userInfo.id);
              uni.showToast({
                title: `与 '${this.userInfo.nickName}'的好友关系已解除`,
                icon: "none"
              });
            });
          }
        });
      },
      updateFriendInfo() {
        let friend = JSON.parse(JSON.stringify(this.friendInfo));
        friend.headImage = this.userInfo.headImageThumb;
        friend.nickName = this.userInfo.nickName;
        this.$http({
          url: "/friend/update",
          method: "PUT",
          data: friend
        }).then(() => {
          this.friendStore.updateFriend(friend);
          this.chatStore.updateChatFromFriend(this.userInfo);
        });
      },
      loadUserInfo(id) {
        this.$http({
          url: "/user/find/" + id,
          method: "GET"
        }).then((user) => {
          this.userInfo = user;
          if (this.isFriend && (this.userInfo.headImageThumb != this.friendInfo.headImage || this.userInfo.nickName != this.friendInfo.nickName)) {
            this.updateFriendInfo();
          }
        });
      }
    },
    computed: {
      isFriend() {
        return !!this.friendInfo;
      },
      friendInfo() {
        let friends = this.friendStore.friends;
        let friend = friends.find((f) => f.id == this.userInfo.id);
        return friend;
      }
    },
    onLoad(options) {
      this.loadUserInfo(options.id);
    }
  };
  function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_4$2);
    const _component_btn_bar = vue.resolveComponent("btn-bar");
    const _component_bar_group = vue.resolveComponent("bar-group");
    return vue.openBlock(), vue.createElementBlock("view", { class: "page user-info" }, [
      vue.createVNode(_component_nav_bar, { back: "" }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("用户信息")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_uni_card, {
        "is-shadow": false,
        "is-full": "",
        border: false
      }, {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "content" }, [
            vue.createVNode(_component_head_image, {
              name: $data.userInfo.nickName,
              url: $data.userInfo.headImageThumb,
              size: 160,
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onShowFullImage())
            }, null, 8, ["name", "url"]),
            vue.createElementVNode("view", { class: "info-item" }, [
              vue.createElementVNode("view", { class: "info-primary" }, [
                vue.createElementVNode(
                  "text",
                  { class: "info-username" },
                  vue.toDisplayString($data.userInfo.userName),
                  1
                  /* TEXT */
                ),
                vue.withDirectives(vue.createElementVNode(
                  "text",
                  {
                    class: "iconfont icon-man",
                    color: "darkblue"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, $data.userInfo.sex == 0]
                ]),
                vue.withDirectives(vue.createElementVNode(
                  "text",
                  {
                    class: "iconfont icon-girl",
                    color: "darkred"
                  },
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vue.vShow, $data.userInfo.sex == 1]
                ])
              ]),
              vue.createElementVNode("view", { class: "info-text" }, [
                vue.createElementVNode("text", { class: "label-text" }, " 昵称: "),
                vue.createElementVNode(
                  "text",
                  { class: "content-text" },
                  vue.toDisplayString($data.userInfo.nickName),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "info-text" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", { class: "label-text" }, " 签名: "),
                  vue.createElementVNode(
                    "text",
                    { class: "content-text" },
                    vue.toDisplayString($data.userInfo.signature),
                    1
                    /* TEXT */
                  )
                ])
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_bar_group, null, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createVNode(
            _component_btn_bar,
            {
              type: "primary",
              title: "发送消息",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.onSendMessage())
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $options.isFriend]
          ]),
          vue.withDirectives(vue.createVNode(
            _component_btn_bar,
            {
              type: "primary",
              title: "加为好友",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.onAddFriend())
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, !$options.isFriend]
          ]),
          vue.withDirectives(vue.createVNode(
            _component_btn_bar,
            {
              type: "danger",
              title: "删除好友",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.onDelFriend())
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $options.isFriend]
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]);
  }
  const PagesCommonUserInfo = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$t], ["__scopeId", "data-v-b2c82734"], ["__file", "C:/Java/box-im/im-uniapp/pages/common/user-info.vue"]]);
  const _sfc_main$t = {
    name: "uniLink",
    props: {
      href: {
        type: String,
        default: ""
      },
      text: {
        type: String,
        default: ""
      },
      download: {
        type: String,
        default: ""
      },
      showUnderLine: {
        type: [Boolean, String],
        default: true
      },
      copyTips: {
        type: String,
        default: "已自动复制网址，请在手机浏览器里粘贴该网址"
      },
      color: {
        type: String,
        default: "#999999"
      },
      fontSize: {
        type: [Number, String],
        default: 14
      }
    },
    computed: {
      isShowA() {
        if ((this.isMail() || this.isTel()) && this._isH5 === true) {
          return true;
        }
        return false;
      }
    },
    created() {
      this._isH5 = null;
    },
    methods: {
      isMail() {
        return this.href.startsWith("mailto:");
      },
      isTel() {
        return this.href.startsWith("tel:");
      },
      openURL() {
        if (this.isTel()) {
          this.makePhoneCall(this.href.replace("tel:", ""));
        } else {
          plus.runtime.openURL(this.href);
        }
      },
      makePhoneCall(phoneNumber) {
        uni.makePhoneCall({
          phoneNumber
        });
      }
    }
  };
  function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
    return $options.isShowA ? (vue.openBlock(), vue.createElementBlock("a", {
      key: 0,
      class: vue.normalizeClass(["uni-link", { "uni-link--withline": $props.showUnderLine === true || $props.showUnderLine === "true" }]),
      href: $props.href,
      style: vue.normalizeStyle({ color: $props.color, fontSize: $props.fontSize + "px" }),
      download: $props.download
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, () => [
        vue.createTextVNode(
          vue.toDisplayString($props.text),
          1
          /* TEXT */
        )
      ], true)
    ], 14, ["href", "download"])) : (vue.openBlock(), vue.createElementBlock(
      "text",
      {
        key: 1,
        class: vue.normalizeClass(["uni-link", { "uni-link--withline": $props.showUnderLine === true || $props.showUnderLine === "true" }]),
        style: vue.normalizeStyle({ color: $props.color, fontSize: $props.fontSize + "px" }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.openURL && $options.openURL(...args))
      },
      [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createTextVNode(
            vue.toDisplayString($props.text),
            1
            /* TEXT */
          )
        ], true)
      ],
      6
      /* CLASS, STYLE */
    ));
  }
  const __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$s], ["__scopeId", "data-v-5db80ddb"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-link/components/uni-link/uni-link.vue"]]);
  const _sfc_main$s = {
    name: "UniSegmentedControl",
    emits: ["clickItem"],
    props: {
      current: {
        type: Number,
        default: 0
      },
      values: {
        type: Array,
        default() {
          return [];
        }
      },
      activeColor: {
        type: String,
        default: "#2979FF"
      },
      styleType: {
        type: String,
        default: "button"
      }
    },
    data() {
      return {
        currentIndex: 0
      };
    },
    watch: {
      current(val) {
        if (val !== this.currentIndex) {
          this.currentIndex = val;
        }
      }
    },
    created() {
      this.currentIndex = this.current;
    },
    methods: {
      _onClick(index2) {
        if (this.currentIndex !== index2) {
          this.currentIndex = index2;
          this.$emit("clickItem", {
            currentIndex: index2
          });
        }
      }
    }
  };
  function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: vue.normalizeClass([[$props.styleType === "text" ? "segmented-control--text" : "segmented-control--button"], "segmented-control"]),
        style: vue.normalizeStyle({ borderColor: $props.styleType === "text" ? "" : $props.activeColor })
      },
      [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($props.values, (item, index2) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass([[
                $props.styleType === "text" ? "" : "segmented-control__item--button",
                index2 === $data.currentIndex && $props.styleType === "button" ? "segmented-control__item--button--active" : "",
                index2 === 0 && $props.styleType === "button" ? "segmented-control__item--button--first" : "",
                index2 === $props.values.length - 1 && $props.styleType === "button" ? "segmented-control__item--button--last" : ""
              ], "segmented-control__item"]),
              key: index2,
              style: vue.normalizeStyle({ backgroundColor: index2 === $data.currentIndex && $props.styleType === "button" ? $props.activeColor : "", borderColor: index2 === $data.currentIndex && $props.styleType === "text" || $props.styleType === "button" ? $props.activeColor : "transparent" }),
              onClick: ($event) => $options._onClick(index2)
            }, [
              vue.createElementVNode("view", null, [
                vue.createElementVNode(
                  "text",
                  {
                    style: vue.normalizeStyle({ color: index2 === $data.currentIndex ? $props.styleType === "text" ? $props.activeColor : "#fff" : $props.styleType === "text" ? "#000" : $props.activeColor }),
                    class: vue.normalizeClass(["segmented-control__text", $props.styleType === "text" && index2 === $data.currentIndex ? "segmented-control__item--text" : ""])
                  },
                  vue.toDisplayString(item),
                  7
                  /* TEXT, CLASS, STYLE */
                )
              ])
            ], 14, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      6
      /* CLASS, STYLE */
    );
  }
  const __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$r], ["__scopeId", "data-v-86aa1171"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation({
        ...options
      });
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config2 = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, {
          styles,
          ...config2
        }, (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config: config2
        } = obj;
        this._animateRun(styles, config2).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config2 = {}) {
      this.animation.step(config2);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$r = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      // 生成样式数据
      stylesObject() {
        let styles = {
          ...this.styles,
          "transition-duration": this.duration / 1e3 + "s"
        };
        let transform2 = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform2 += line + ":" + styles[i] + ";";
        }
        return transform2;
      },
      // 初始化动画条件
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      /**
       *  ref 触发 初始化动画
       */
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      /**
       * 点击组件触发回调
       */
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      /**
       * ref 触发 动画分组
       * @param {Object} obj
       */
      step(obj, config2 = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `方法 ${i} 不存在`);
          }
        }
        this.animation.step(config2);
        return this;
      },
      /**
       *  ref 触发 执行动画
       */
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      // 开始过度动画
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform: transform2 } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform2;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      // 关闭过度动画
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform: transform2 } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform2;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      // 处理动画开始前的默认样式
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      // 处理内置组合动画
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      // 内置动画类型与实际动画对应字典
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      // 驼峰转中横线
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  const __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$q], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$q = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      // 开启动画
      animation: {
        type: Boolean,
        default: true
      },
      // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
      // message: 消息提示 ; dialog : 对话框
      type: {
        type: String,
        default: "center"
      },
      // maskClick
      isMaskClick: {
        type: Boolean,
        default: null
      },
      // TODO 2 个版本后废弃属性 ，使用 isMaskClick
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      /**
       * 监听type类型
       */
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      /**
       * 监听遮罩是否可点击
       * @param {Object} val
       */
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      // H5 下禁止底部滚动
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: this.isDesktop ? "fixforpc-top" : "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    // TODO vue3
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      /**
       * 公用方法，不显示遮罩层
       */
      closeMask() {
        this.maskShow = false;
      },
      /**
       * 公用方法，遮罩层禁止点击
       */
      disableMask() {
        this.mkclick = false;
      },
      // TODO nvue 取消冒泡
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:279", "缺少类型：", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      // TODO 处理冒泡事件，头条的冒泡事件有问题 ，先这样兼容
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      /**
       * 顶部弹出样式处理
       */
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      /**
       * 底部弹出样式处理
       */
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          paddingBottom: this.safeAreaInsets + "px",
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      /**
       * 中间弹出样式处理
       */
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$1);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
      },
      [
        vue.createElementVNode(
          "view",
          {
            onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
          },
          [
            $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
              key: "1",
              name: "mask",
              "mode-class": "fade",
              styles: $data.maskClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
            vue.createVNode(_component_uni_transition, {
              key: "2",
              "mode-class": $data.ani,
              name: "content",
              styles: $data.transClass,
              duration: $data.duration,
              show: $data.showTrans,
              onClick: $options.onTap
            }, {
              default: vue.withCtx(() => [
                vue.createElementVNode(
                  "view",
                  {
                    class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
                    style: vue.normalizeStyle({ backgroundColor: $options.bg }),
                    onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
                  },
                  [
                    vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
                  ],
                  6
                  /* CLASS, STYLE */
                )
              ]),
              _: 3
              /* FORWARDED */
            }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
          ],
          32
          /* NEED_HYDRATION */
        )
      ],
      2
      /* CLASS */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$p], ["__scopeId", "data-v-4dd3c44b"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$p = {
    name: "chat-group-readed",
    data() {
      return {
        items: ["已读", "未读"],
        current: 0,
        readedMembers: [],
        unreadMembers: []
      };
    },
    props: {
      msgInfo: {
        type: Object,
        required: true
      },
      groupMembers: {
        type: Array
      }
    },
    methods: {
      open() {
        this.$refs.popup.open();
        this.loadReadedUser();
      },
      loadReadedUser() {
        this.readedMembers = [];
        this.unreadMembers = [];
        this.$http({
          url: `/message/group/findReadedUsers?groupId=${this.msgInfo.groupId}&messageId=${this.msgInfo.id}`,
          method: "Get"
        }).then((userIds) => {
          this.groupMembers.forEach((member) => {
            if (member.userId == this.msgInfo.sendId || member.quit) {
              return;
            }
            if (userIds.find((userId) => member.userId == userId)) {
              this.readedMembers.push(member);
            } else {
              this.unreadMembers.push(member);
            }
          });
          this.items[0] = `已读(${this.readedMembers.length})`;
          this.items[1] = `未读(${this.unreadMembers.length})`;
          let chatInfo = {
            type: "GROUP",
            targetId: this.msgInfo.groupId
          };
          let msgInfo = {
            id: this.msgInfo.id,
            groupId: this.msgInfo.groupId,
            readedCount: this.readedMembers.length
          };
          this.chatStore.updateMessage(msgInfo, chatInfo);
        });
      },
      onClickItem(e) {
        this.current = e.currentIndex;
      }
    }
  };
  function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_segmented_control = resolveEasycom(vue.resolveDynamicComponent("uni-segmented-control"), __easycom_0$2);
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2);
    return vue.openBlock(), vue.createBlock(
      _component_uni_popup,
      {
        ref: "popup",
        type: "bottom"
      },
      {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "chat-group-readed" }, [
            vue.createElementVNode("view", { class: "uni-padding-wrap uni-common-mt" }, [
              vue.createVNode(_component_uni_segmented_control, {
                current: $data.current,
                values: $data.items,
                "style-type": "button",
                onClickItem: $options.onClickItem
              }, null, 8, ["current", "values", "onClickItem"])
            ]),
            vue.createElementVNode("view", { class: "content" }, [
              $data.current === 0 ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createElementVNode("scroll-view", {
                  class: "scroll-bar",
                  "scroll-with-animation": "true",
                  "scroll-y": "true"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.readedMembers, (m) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        key: m.userId
                      }, [
                        vue.createElementVNode("view", { class: "member-item" }, [
                          vue.createVNode(_component_head_image, {
                            name: m.aliasName,
                            online: m.online,
                            url: m.headImage,
                            size: 90
                          }, null, 8, ["name", "online", "url"]),
                          vue.createElementVNode(
                            "view",
                            { class: "member-name" },
                            vue.toDisplayString(m.aliasName),
                            1
                            /* TEXT */
                          )
                        ])
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])) : vue.createCommentVNode("v-if", true),
              $data.current === 1 ? (vue.openBlock(), vue.createElementBlock("view", { key: 1 }, [
                vue.createElementVNode("scroll-view", {
                  class: "scroll-bar",
                  "scroll-with-animation": "true",
                  "scroll-y": "true"
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($data.unreadMembers, (m) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        key: m.userId
                      }, [
                        vue.createElementVNode("view", { class: "member-item" }, [
                          vue.createVNode(_component_head_image, {
                            name: m.aliasName,
                            online: m.online,
                            url: m.headImage,
                            size: 90
                          }, null, 8, ["name", "online", "url"]),
                          vue.createElementVNode(
                            "view",
                            { class: "member-name" },
                            vue.toDisplayString(m.aliasName),
                            1
                            /* TEXT */
                          )
                        ])
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      },
      512
      /* NEED_PATCH */
    );
  }
  const __easycom_4$1 = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$o], ["__scopeId", "data-v-9a80f5fc"], ["__file", "C:/Java/box-im/im-uniapp/components/chat-group-readed/chat-group-readed.vue"]]);
  const _sfc_main$o = {
    name: "chat-message-item",
    props: {
      headImage: {
        type: String,
        required: true
      },
      showName: {
        type: String,
        required: true
      },
      msgInfo: {
        type: Object,
        required: true
      },
      groupMembers: {
        type: Array
      }
    },
    data() {
      return {
        audioPlayState: "STOP",
        innerAudioContext: null,
        menu: {
          show: false,
          style: ""
        }
      };
    },
    methods: {
      onSendFail() {
        uni.showToast({
          title: "该文件已发送失败，目前不支持自动重新发送，建议手动重新发送",
          icon: "none"
        });
      },
      onPlayAudio() {
        if (!this.innerAudioContext) {
          this.innerAudioContext = uni.createInnerAudioContext();
          let url2 = JSON.parse(this.msgInfo.content).url;
          this.innerAudioContext.src = url2;
          this.innerAudioContext.onEnded((e) => {
            formatAppLog("log", "at components/chat-message-item/chat-message-item.vue:129", "停止");
            this.audioPlayState = "STOP";
            this.emit();
          });
          this.innerAudioContext.onError((e) => {
            this.audioPlayState = "STOP";
            formatAppLog("log", "at components/chat-message-item/chat-message-item.vue:135", "播放音频出错");
            formatAppLog("log", "at components/chat-message-item/chat-message-item.vue:136", e);
            this.emit();
          });
        }
        if (this.audioPlayState == "STOP") {
          this.innerAudioContext.play();
          this.audioPlayState = "PLAYING";
        } else if (this.audioPlayState == "PLAYING") {
          this.innerAudioContext.pause();
          this.audioPlayState = "PAUSE";
        } else if (this.audioPlayState == "PAUSE") {
          this.innerAudioContext.play();
          this.audioPlayState = "PLAYING";
        }
        this.emit();
      },
      onSelectMenu(item) {
        this.$emit(item.key.toLowerCase(), this.msgInfo);
        this.menu.show = false;
      },
      onShowFullImage() {
        let imageUrl = JSON.parse(this.msgInfo.content).originUrl;
        uni.previewImage({
          urls: [imageUrl]
        });
      },
      onShowReadedBox() {
        this.$refs.chatGroupReaded.open();
      },
      emit() {
        this.$emit("audioStateChange", this.audioPlayState, this.msgInfo);
      },
      stopPlayAudio() {
        if (this.innerAudioContext) {
          this.innerAudioContext.stop();
          this.innerAudioContext = null;
          this.audioPlayState = "STOP";
        }
      }
    },
    computed: {
      loading() {
        return this.msgInfo.loadStatus && this.msgInfo.loadStatus === "loading";
      },
      loadFail() {
        return this.msgInfo.loadStatus && this.msgInfo.loadStatus === "fail";
      },
      data() {
        return JSON.parse(this.msgInfo.content);
      },
      fileSize() {
        let size = this.data.size;
        if (size > 1024 * 1024) {
          return Math.round(size / 1024 / 1024) + "M";
        }
        if (size > 1024) {
          return Math.round(size / 1024) + "KB";
        }
        return size + "B";
      },
      menuItems() {
        let items = [];
        if (this.msgInfo.type == this.$enums.MESSAGE_TYPE.TEXT) {
          items.push({
            key: "COPY",
            name: "复制",
            icon: "bars"
          });
        }
        if (this.msgInfo.selfSend && this.msgInfo.id > 0) {
          items.push({
            key: "RECALL",
            name: "撤回",
            icon: "refreshempty"
          });
        }
        items.push({
          key: "DELETE",
          name: "删除",
          icon: "trash",
          color: "#e64e4e"
        });
        if (this.msgInfo.type == this.$enums.MESSAGE_TYPE.FILE) {
          items.push({
            key: "DOWNLOAD",
            name: "下载并打开",
            icon: "download"
          });
        }
        return items;
      },
      isAction() {
        return this.$msgType.isAction(this.msgInfo.type);
      },
      isNormal() {
        const type = this.msgInfo.type;
        return this.$msgType.isNormal(type) || this.$msgType.isAction(type);
      }
    }
  };
  function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_long_press_menu = resolveEasycom(vue.resolveDynamicComponent("long-press-menu"), __easycom_1$4);
    const _component_loading = resolveEasycom(vue.resolveDynamicComponent("loading"), __easycom_2$6);
    const _component_uni_link = resolveEasycom(vue.resolveDynamicComponent("uni-link"), __easycom_3$2);
    const _component_chat_group_readed = resolveEasycom(vue.resolveDynamicComponent("chat-group-readed"), __easycom_4$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-msg-item" }, [
      $props.msgInfo.type == _ctx.$enums.MESSAGE_TYPE.RECALL || $props.msgInfo.type == _ctx.$enums.MESSAGE_TYPE.TIP_TEXT ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "chat-msg-tip"
        },
        vue.toDisplayString($props.msgInfo.content),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      $props.msgInfo.type == _ctx.$enums.MESSAGE_TYPE.TIP_TIME ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 1,
          class: "chat-msg-tip"
        },
        vue.toDisplayString(_ctx.$date.toTimeText($props.msgInfo.sendTime)),
        1
        /* TEXT */
      )) : vue.createCommentVNode("v-if", true),
      $options.isNormal ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 2,
          class: vue.normalizeClass(["chat-msg-normal", { "chat-msg-mine": $props.msgInfo.selfSend }])
        },
        [
          vue.createVNode(_component_head_image, {
            class: "avatar",
            onLongpress: _cache[0] || (_cache[0] = vue.withModifiers(($event) => _ctx.$emit("longPressHead"), ["prevent"])),
            id: $props.msgInfo.sendId,
            url: $props.headImage,
            name: $props.showName,
            size: "small"
          }, null, 8, ["id", "url", "name"]),
          vue.createElementVNode("view", { class: "chat-msg-content" }, [
            $props.msgInfo.groupId && !$props.msgInfo.selfSend ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "chat-msg-top"
            }, [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($props.showName),
                1
                /* TEXT */
              )
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "chat-msg-bottom" }, [
              $props.msgInfo.type == _ctx.$enums.MESSAGE_TYPE.TEXT ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
                vue.createVNode(_component_long_press_menu, {
                  items: $options.menuItems,
                  onSelect: $options.onSelectMenu
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("rich-text", {
                      class: "chat-msg-text",
                      nodes: _ctx.$emo.transform($props.msgInfo.content, "emoji-normal")
                    }, null, 8, ["nodes"])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["items", "onSelect"])
              ])) : vue.createCommentVNode("v-if", true),
              $props.msgInfo.type == _ctx.$enums.MESSAGE_TYPE.IMAGE ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 1,
                class: "chat-msg-image"
              }, [
                vue.createVNode(_component_long_press_menu, {
                  items: $options.menuItems,
                  onSelect: $options.onSelectMenu
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "img-load-box" }, [
                      vue.createElementVNode("image", {
                        class: "send-image",
                        mode: "heightFix",
                        src: JSON.parse($props.msgInfo.content).thumbUrl,
                        "lazy-load": "true",
                        onClick: _cache[1] || (_cache[1] = vue.withModifiers(($event) => $options.onShowFullImage(), ["stop"]))
                      }, null, 8, ["src"]),
                      $options.loading ? (vue.openBlock(), vue.createBlock(_component_loading, { key: 0 })) : vue.createCommentVNode("v-if", true)
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["items", "onSelect"]),
                $options.loadFail ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 0,
                  title: "发送失败",
                  onClick: _cache[2] || (_cache[2] = (...args) => $options.onSendFail && $options.onSendFail(...args)),
                  class: "send-fail iconfont icon-warning-circle-fill"
                })) : vue.createCommentVNode("v-if", true)
              ])) : vue.createCommentVNode("v-if", true),
              $props.msgInfo.type == _ctx.$enums.MESSAGE_TYPE.FILE ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 2,
                class: "chat-msg-file"
              }, [
                vue.createVNode(_component_long_press_menu, {
                  items: $options.menuItems,
                  onSelect: $options.onSelectMenu
                }, {
                  default: vue.withCtx(() => [
                    vue.createElementVNode("view", { class: "chat-file-box" }, [
                      vue.createElementVNode("view", { class: "chat-file-info" }, [
                        vue.createVNode(_component_uni_link, {
                          class: "chat-file-name",
                          text: $options.data.name,
                          showUnderLine: "true",
                          color: "#007BFF",
                          href: $options.data.url
                        }, null, 8, ["text", "href"]),
                        vue.createElementVNode(
                          "view",
                          { class: "chat-file-size" },
                          vue.toDisplayString($options.fileSize),
                          1
                          /* TEXT */
                        )
                      ]),
                      vue.createElementVNode("view", { class: "chat-file-icon iconfont icon-file" }),
                      $options.loading ? (vue.openBlock(), vue.createBlock(_component_loading, { key: 0 })) : vue.createCommentVNode("v-if", true)
                    ])
                  ]),
                  _: 1
                  /* STABLE */
                }, 8, ["items", "onSelect"]),
                $options.loadFail ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 0,
                  title: "发送失败",
                  onClick: _cache[3] || (_cache[3] = (...args) => $options.onSendFail && $options.onSendFail(...args)),
                  class: "send-fail iconfont icon-warning-circle-fill"
                })) : vue.createCommentVNode("v-if", true)
              ])) : vue.createCommentVNode("v-if", true),
              $props.msgInfo.type == _ctx.$enums.MESSAGE_TYPE.AUDIO ? (vue.openBlock(), vue.createBlock(_component_long_press_menu, {
                key: 3,
                items: $options.menuItems,
                onSelect: $options.onSelectMenu
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", {
                    class: "chat-msg-audio chat-msg-text",
                    onClick: _cache[4] || (_cache[4] = ($event) => $options.onPlayAudio())
                  }, [
                    vue.createElementVNode("text", { class: "iconfont icon-voice-play" }),
                    vue.createElementVNode(
                      "text",
                      { class: "chat-audio-text" },
                      vue.toDisplayString(JSON.parse($props.msgInfo.content).duration + '"'),
                      1
                      /* TEXT */
                    ),
                    $data.audioPlayState == "PAUSE" ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "iconfont icon-play"
                    })) : vue.createCommentVNode("v-if", true),
                    $data.audioPlayState == "PLAYING" ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 1,
                      class: "iconfont icon-pause"
                    })) : vue.createCommentVNode("v-if", true)
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["items", "onSelect"])) : vue.createCommentVNode("v-if", true),
              $options.isAction ? (vue.openBlock(), vue.createBlock(_component_long_press_menu, {
                key: 4,
                items: $options.menuItems,
                onSelect: $options.onSelectMenu
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", {
                    class: "chat-realtime chat-msg-text",
                    onClick: _cache[5] || (_cache[5] = ($event) => _ctx.$emit("call"))
                  }, [
                    $props.msgInfo.type == _ctx.$enums.MESSAGE_TYPE.ACT_RT_VOICE ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 0,
                      class: "iconfont icon-chat-voice"
                    })) : vue.createCommentVNode("v-if", true),
                    $props.msgInfo.type == _ctx.$enums.MESSAGE_TYPE.ACT_RT_VIDEO ? (vue.openBlock(), vue.createElementBlock("text", {
                      key: 1,
                      class: "iconfont icon-chat-video"
                    })) : vue.createCommentVNode("v-if", true),
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString($props.msgInfo.content),
                      1
                      /* TEXT */
                    )
                  ])
                ]),
                _: 1
                /* STABLE */
              }, 8, ["items", "onSelect"])) : vue.createCommentVNode("v-if", true),
              !$options.isAction ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 5,
                class: "chat-msg-status"
              }, [
                $props.msgInfo.selfSend && !$props.msgInfo.groupId && $props.msgInfo.status == _ctx.$enums.MESSAGE_STATUS.READED ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 0,
                  class: "chat-readed"
                }, "已读")) : vue.createCommentVNode("v-if", true),
                $props.msgInfo.selfSend && !$props.msgInfo.groupId && $props.msgInfo.status != _ctx.$enums.MESSAGE_STATUS.READED ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 1,
                  class: "chat-unread"
                }, "未读")) : vue.createCommentVNode("v-if", true)
              ])) : vue.createCommentVNode("v-if", true),
              $props.msgInfo.receipt ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 6,
                class: "chat-receipt",
                onClick: _cache[6] || (_cache[6] = (...args) => $options.onShowReadedBox && $options.onShowReadedBox(...args))
              }, [
                $props.msgInfo.receiptOk ? (vue.openBlock(), vue.createElementBlock("text", {
                  key: 0,
                  class: "tool-icon iconfont icon-ok"
                })) : (vue.openBlock(), vue.createElementBlock(
                  "text",
                  { key: 1 },
                  vue.toDisplayString($props.msgInfo.readedCount) + "人已读",
                  1
                  /* TEXT */
                ))
              ])) : vue.createCommentVNode("v-if", true)
            ])
          ])
        ],
        2
        /* CLASS */
      )) : vue.createCommentVNode("v-if", true),
      vue.createVNode(_component_chat_group_readed, {
        ref: "chatGroupReaded",
        groupMembers: $props.groupMembers,
        msgInfo: $props.msgInfo
      }, null, 8, ["groupMembers", "msgInfo"])
    ]);
  }
  const __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$n], ["__scopeId", "data-v-4543ac39"], ["__file", "C:/Java/box-im/im-uniapp/components/chat-message-item/chat-message-item.vue"]]);
  const _sfc_main$n = {
    name: "chat-record",
    data() {
      return {
        recording: false,
        moveToCancel: false,
        recordBarTop: 0,
        druation: 0,
        rcTimer: null
      };
    },
    methods: {
      onTouchMove(e) {
        const moveY = e.touches[0].clientY;
        this.moveToCancel = moveY < this.recordBarTop - 40;
      },
      onCancel() {
        if (this.recording) {
          this.moveToCancel = true;
          this.onEndRecord();
        }
      },
      onStartRecord() {
        if (this.recording) {
          return;
        }
        formatAppLog("log", "at components/chat-record/chat-record.vue:55", "开始录音");
        this.moveToCancel = false;
        this.initRecordBar();
        if (!this.$rc.checkIsEnable()) {
          return;
        }
        this.$rc.start().then(() => {
          this.recording = true;
          formatAppLog("log", "at components/chat-record/chat-record.vue:63", "开始录音成功");
          this.startTimer();
        }).catch((e) => {
          formatAppLog("log", "at components/chat-record/chat-record.vue:67", "录音失败" + JSON.stringify(e));
          uni.showToast({
            title: "录音失败",
            icon: "none"
          });
        });
      },
      onEndRecord() {
        if (!this.recording) {
          return;
        }
        this.recording = false;
        this.stopTimer();
        this.$rc.close();
        if (this.moveToCancel) {
          formatAppLog("log", "at components/chat-record/chat-record.vue:85", "录音取消");
          return;
        }
        if (this.druation <= 1) {
          uni.showToast({
            title: "说话时间太短",
            icon: "none"
          });
          return;
        }
        this.$rc.upload().then((data) => {
          this.$emit("send", data);
        }).catch((e) => {
          uni.showToast({
            title: e,
            icon: "none"
          });
        });
      },
      startTimer() {
        this.druation = 0;
        this.stopTimer();
        this.rcTimer = setInterval(() => {
          this.druation++;
          if (this.druation >= 60) {
            this.onEndRecord();
          }
        }, 1e3);
      },
      stopTimer() {
        this.rcTimer && clearInterval(this.rcTimer);
        this.rcTimer = null;
      },
      initRecordBar() {
        const query = uni.createSelectorQuery().in(this);
        query.select("#chat-record-bar").boundingClientRect((rect) => {
          this.recordBarTop = rect.top;
        }).exec();
      }
    },
    computed: {
      recordWindowStyle() {
        const windowHeight = uni.getSystemInfoSync().windowHeight;
        const bottom = windowHeight - this.recordBarTop + 12;
        return `bottom:${bottom}px;`;
      },
      recordTip() {
        if (this.druation > 50) {
          return `${60 - this.druation}s后将停止录音`;
        }
        return `录音时长:${this.druation}s`;
      }
    },
    unmounted() {
      this.stopTimer();
      this.recording = false;
    }
  };
  function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "chat-record" }, [
      vue.createElementVNode(
        "view",
        {
          class: vue.normalizeClass(["chat-record-bar", { recording: $data.recording }]),
          id: "chat-record-bar",
          onClick: _cache[0] || (_cache[0] = vue.withModifiers(() => {
          }, ["stop"])),
          onTouchstart: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.onStartRecord && $options.onStartRecord(...args), ["prevent"])),
          onTouchmove: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.onTouchMove && $options.onTouchMove(...args), ["prevent"])),
          onTouchend: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.onEndRecord && $options.onEndRecord(...args), ["prevent"]))
        },
        vue.toDisplayString($data.recording ? "正在录音" : "长按 说话"),
        35
        /* TEXT, CLASS, NEED_HYDRATION */
      ),
      $data.recording ? (vue.openBlock(), vue.createElementBlock(
        "view",
        {
          key: 0,
          class: "chat-record-window",
          style: vue.normalizeStyle($options.recordWindowStyle)
        },
        [
          vue.createElementVNode("view", { class: "rc-wave" }, [
            vue.createElementVNode("text", {
              class: "note",
              style: { "--d": "0" }
            }),
            vue.createElementVNode("text", {
              class: "note",
              style: { "--d": "1" }
            }),
            vue.createElementVNode("text", {
              class: "note",
              style: { "--d": "2" }
            }),
            vue.createElementVNode("text", {
              class: "note",
              style: { "--d": "3" }
            }),
            vue.createElementVNode("text", {
              class: "note",
              style: { "--d": "4" }
            }),
            vue.createElementVNode("text", {
              class: "note",
              style: { "--d": "5" }
            }),
            vue.createElementVNode("text", {
              class: "note",
              style: { "--d": "6" }
            })
          ]),
          vue.createElementVNode(
            "view",
            { class: "rc-tip" },
            vue.toDisplayString($options.recordTip),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", {
            class: "cancel-btn",
            onClick: _cache[4] || (_cache[4] = (...args) => $options.onCancel && $options.onCancel(...args))
          }, [
            vue.createVNode(_component_uni_icons, {
              class: vue.normalizeClass($data.moveToCancel ? "red" : "black"),
              type: "clear",
              size: $data.moveToCancel ? 45 : 40
            }, null, 8, ["class", "size"])
          ]),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["opt-tip", $data.moveToCancel ? "red" : "black"])
            },
            vue.toDisplayString($data.moveToCancel ? "松手取消" : "松手发送,上划取消"),
            3
            /* TEXT, CLASS */
          )
        ],
        4
        /* STYLE */
      )) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$m], ["__scopeId", "data-v-f6051c28"], ["__file", "C:/Java/box-im/im-uniapp/components/chat-record/chat-record.vue"]]);
  class LsjFile {
    constructor(data) {
      this.dom = null;
      this.files = /* @__PURE__ */ new Map();
      this.debug = data.debug || false;
      this.id = data.id;
      this.width = data.width;
      this.height = data.height;
      this.option = data.option;
      this.instantly = data.instantly;
      this.prohibited = data.prohibited;
      this.onchange = data.onchange;
      this.onprogress = data.onprogress;
      this.uploadHandle = this._uploadHandle;
    }
    /**
     * 创建File节点
     * @param {string}path webview地址
     */
    create(path) {
      if (!this.dom) {
        let styles = {
          top: "-200px",
          left: 0,
          width: "1px",
          height: "200px",
          background: "transparent"
        };
        let extras = {
          debug: this.debug,
          instantly: this.instantly,
          prohibited: this.prohibited
        };
        this.dom = plus.webview.create(path, this.id, styles, extras);
        this.setData(this.option);
        this._overrideUrlLoading();
        return this.dom;
      }
    }
    /**
     * 设置上传参数
     * @param {object|string}name 上传参数,支持a.b 和 a[b]
     */
    setData() {
      let [name, value = ""] = arguments;
      if (typeof name === "object") {
        Object.assign(this.option, name);
      } else {
        this._setValue(this.option, name, value);
      }
      this.debug && formatAppLog("log", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:97", JSON.stringify(this.option));
      this.dom.evalJS(`vm.setData('${JSON.stringify(this.option)}')`);
    }
    /**
     * 上传
     * @param {string}name 文件名称
     */
    async upload(name = "") {
      if (!this.option.url) {
        throw Error("未设置上传地址");
      }
      this.dom && this.dom.evalJS(`vm.upload('${name}')`);
    }
    // 选择文件change
    addFile(file, isCallChange) {
      let name = file.name;
      this.debug && formatAppLog("log", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:135", "文件名称", name, "大小", file.size);
      if (file) {
        let path = "";
        let suffix = name.substring(name.lastIndexOf(".") + 1).toLowerCase();
        let formats = this.prohibited.formats.toLowerCase();
        path = URL.createObjectURL(file);
        if (formats && !formats.includes(suffix)) {
          this.toast(`不支持上传${suffix.toUpperCase()}格式文件`);
          return false;
        }
        if (file.size > 1024 * 1024 * Math.abs(this.prohibited.size)) {
          this.toast(`附件大小请勿超过${this.prohibited.size}M`);
          return false;
        }
        try {
          if (!this.prohibited.distinct) {
            let homonymIndex = [...this.files.keys()].findIndex((item) => {
              return (item.substring(0, item.lastIndexOf("(")) || item.substring(0, item.lastIndexOf("."))) == name.substring(0, name.lastIndexOf(".")) && item.substring(item.lastIndexOf(".") + 1).toLowerCase() === suffix;
            });
            if (homonymIndex > -1) {
              name = `${name.substring(0, name.lastIndexOf("."))}(${homonymIndex + 1}).${suffix}`;
            }
          }
        } catch (e) {
        }
        this.files.set(name, { file, path, name, size: file.size, progress: 0, type: "waiting" });
        return true;
      }
    }
    /**
     * 移除文件
     * @param {string}name 不传name默认移除所有文件，传入name移除指定name的文件
     */
    clear(name = "") {
      this.dom && this.dom.evalJS(`vm.clear('${name}')`);
      if (!name) {
        this.files.clear();
      } else {
        this.files.delete(name);
      }
      return this.onchange(this.files);
    }
    /**
     * 提示框
     * @param {string}msg 轻提示内容
     */
    toast(msg) {
      uni.showToast({
        title: msg,
        icon: "none"
      });
    }
    /**
     * 微信小程序选择文件
     * @param {number}count 可选择文件数量
     */
    chooseMessageFile(type, count) {
      wx.chooseMessageFile({
        count,
        type,
        success: ({ tempFiles }) => {
          for (let file of tempFiles) {
            this.addFile(file);
          }
          this._uploadAfter();
        },
        fail: () => {
          this.toast(`打开失败`);
        }
      });
    }
    _copyObject(obj) {
      if (typeof obj !== "undefined") {
        return JSON.parse(JSON.stringify(obj));
      } else {
        return obj;
      }
    }
    /**
     * 自动根据字符串路径设置对象中的值 支持.和[]
     * @param	{Object} dataObj 数据源
     * @param	{String} name 支持a.b 和 a[b]
     * @param	{String} value 值
     * setValue(dataObj, name, value);
     */
    _setValue(dataObj, name, value) {
      let dataValue;
      if (typeof value === "object") {
        dataValue = this._copyObject(value);
      } else {
        dataValue = value;
      }
      let regExp2 = new RegExp("([\\w$]+)|\\[(:\\d)\\]", "g");
      const patten = name.match(regExp2);
      for (let i = 0; i < patten.length - 1; i++) {
        let keyName = patten[i];
        if (typeof dataObj[keyName] !== "object")
          dataObj[keyName] = {};
        dataObj = dataObj[keyName];
      }
      dataObj[patten[patten.length - 1]] = dataValue;
      this.debug && formatAppLog("log", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:260", "参数更新后", JSON.stringify(this.option));
    }
    _uploadAfter() {
      this.onchange(this.files);
      setTimeout(() => {
        this.instantly && this.upload();
      }, 1e3);
    }
    _overrideUrlLoading() {
      this.dom.overrideUrlLoading({ mode: "reject" }, (e) => {
        let { retype, item, files, end } = this._getRequest(
          e.url
        );
        let _this = this;
        switch (retype) {
          case "updateOption":
            this.dom.evalJS(`vm.setData('${JSON.stringify(_this.option)}')`);
            break;
          case "change":
            try {
              _this.files = new Map([..._this.files, ...JSON.parse(unescape(files))]);
            } catch (e2) {
              return formatAppLog("error", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:284", "出错了，请检查代码");
            }
            _this.onchange(_this.files);
            break;
          case "progress":
            try {
              item = JSON.parse(unescape(item));
            } catch (e2) {
              return formatAppLog("error", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:292", "出错了，请检查代码");
            }
            _this._changeFilesItem(item, end);
            break;
        }
      });
    }
    _getRequest(url2) {
      let theRequest = new Object();
      let index2 = url2.indexOf("?");
      if (index2 != -1) {
        let str = url2.substring(index2 + 1);
        let strs = str.split("&");
        for (let i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      }
      return theRequest;
    }
    _changeFilesItem(item, end = false) {
      this.debug && formatAppLog("log", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:316", "onprogress", JSON.stringify(item));
      this.onprogress(item, end);
      this.files.set(item.name, item);
    }
    _uploadHandle(item) {
      item.type = "loading";
      delete item.responseText;
      return new Promise((resolve, reject) => {
        this.debug && formatAppLog("log", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:325", "option", JSON.stringify(this.option));
        let { url: url2, name, method = "POST", header, formData } = this.option;
        let form = new FormData();
        for (let keys in formData) {
          form.append(keys, formData[keys]);
        }
        form.append(name, item.file);
        let xmlRequest = new XMLHttpRequest();
        xmlRequest.open(method, url2, true);
        for (let keys in header) {
          xmlRequest.setRequestHeader(keys, header[keys]);
        }
        xmlRequest.upload.addEventListener(
          "progress",
          (event) => {
            if (event.lengthComputable) {
              let progress = Math.ceil(event.loaded * 100 / event.total);
              if (progress <= 100) {
                item.progress = progress;
                this._changeFilesItem(item);
              }
            }
          },
          false
        );
        xmlRequest.ontimeout = () => {
          formatAppLog("error", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:353", "请求超时");
          item.type = "fail";
          this._changeFilesItem(item, true);
          return resolve(false);
        };
        xmlRequest.onreadystatechange = (ev) => {
          if (xmlRequest.readyState == 4) {
            if (xmlRequest.status == 200) {
              this.debug && formatAppLog("log", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:362", "上传完成：" + xmlRequest.responseText);
              item["responseText"] = xmlRequest.responseText;
              item.type = "success";
              this._changeFilesItem(item, true);
              return resolve(true);
            } else if (xmlRequest.status == 0) {
              formatAppLog("error", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:368", "status = 0 :请检查请求头Content-Type与服务端是否匹配，服务端已正确开启跨域，并且nginx未拦截阻止请求");
            }
            formatAppLog("error", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:370", "--ERROR--：status = " + xmlRequest.status);
            item.type = "fail";
            this._changeFilesItem(item, true);
            return resolve(false);
          }
        };
        xmlRequest.send(form);
      });
    }
    _uploadHandleWX(item) {
      item.type = "loading";
      delete item.responseText;
      return new Promise((resolve, reject) => {
        this.debug && formatAppLog("log", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:384", "option", JSON.stringify(this.option));
        let form = { filePath: item.file.path, ...this.option };
        form["fail"] = ({ errMsg = "" }) => {
          formatAppLog("error", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:387", "--ERROR--：" + errMsg);
          item.type = "fail";
          this._changeFilesItem(item, true);
          return resolve(false);
        };
        form["success"] = (res) => {
          if (res.statusCode == 200) {
            this.debug && formatAppLog("log", "at uni_modules/lsj-upload/components/lsj-upload/LsjFile.js:394", "上传完成,微信端返回不一定是字符串，根据接口返回格式判断是否需要JSON.parse：" + res.data);
            item["responseText"] = res.data;
            item.type = "success";
            this._changeFilesItem(item, true);
            return resolve(true);
          }
          item.type = "fail";
          this._changeFilesItem(item, true);
          return resolve(false);
        };
        let xmlRequest = uni.uploadFile(form);
        xmlRequest.onProgressUpdate(({ progress = 0 }) => {
          if (progress <= 100) {
            item.progress = progress;
            this._changeFilesItem(item);
          }
        });
      });
    }
  }
  const _sfc_main$m = {
    name: "Lsj-upload",
    props: {
      // 打印日志
      debug: { type: Boolean, default: false },
      // 是否去重文件（同名文件覆盖）
      distinct: { type: Boolean, default: false },
      // 自动上传
      instantly: { type: Boolean, default: false },
      // 上传接口参数设置
      option: { type: Object, default: () => {
      } },
      // 文件大小上限
      size: { type: Number, default: 10 },
      // 文件选择个数上限,超出后不触发点击
      count: { type: Number, default: 9 },
      // 是否允许多选文件
      multiple: { type: Boolean, default: true },
      // 允许上传的文件格式（多个以逗号隔开）
      formats: { type: String, default: "" },
      // input file选择限制
      accept: { type: String, default: "" },
      // 微信选择文件类型 
      //all=从所有文件选择，
      //video=只能选择视频文件，
      //image=只能选择图片文件，
      //file=可以选择除了图片和视频之外的其它的文件
      wxFileType: { type: String, default: "all" },
      // webviewID需唯一，不同窗口也不要同Id
      childId: { type: String, default: "lsjUpload" },
      // 文件选择触发面宽度
      width: { type: String, default: "100%" },
      // 文件选择触发面高度
      height: { type: String, default: "80rpx" },
      // top,left,bottom,right仅position=absolute时才需要传入
      top: { type: [String, Number], default: "" },
      left: { type: [String, Number], default: "" },
      bottom: { type: [String, Number], default: "" },
      right: { type: [String, Number], default: "" },
      // nvue不支持跟随窗口滚动
      position: {
        type: String,
        default: "static"
      }
    },
    data() {
      return {};
    },
    computed: {
      getStyles() {
        let styles = {
          width: this.width,
          height: this.height
        };
        if (this.position == "absolute") {
          styles["top"] = this.top;
          styles["bottom"] = this.bottom;
          styles["left"] = this.left;
          styles["right"] = this.right;
          styles["position"] = "fixed";
        }
        return styles;
      }
    },
    watch: {
      option(v) {
        this.lsjFile && this.show();
      }
    },
    updated() {
      if (this.isShow) {
        this.lsjFile && this.show();
      }
    },
    created() {
      uni.$on("$upload-show", this.emitShow);
      uni.$on("$upload-hide", this.hide);
    },
    beforeDestroy() {
      uni.$off("$upload-show", this.emitShow);
      uni.$off("$upload-hide", this.hide);
      this.lsjFile.dom.close();
    },
    mounted() {
      let pages2 = getCurrentPages();
      this.myRoute = pages2[pages2.length - 1].route;
      this._size = 0;
      let WEBID = "lsj_" + this.childId + (/* @__PURE__ */ new Date()).getTime();
      this.lsjFile = new LsjFile({
        id: WEBID,
        debug: this.debug,
        width: this.width,
        height: this.height,
        option: this.option,
        instantly: this.instantly,
        // 限制条件
        prohibited: {
          // 是否去重
          distinct: this.distinct,
          // 大小
          size: this.size,
          // 允许上传的格式
          formats: this.formats,
          // 限制选择的格式
          accept: this.accept,
          count: this.count,
          // 是否多选
          multiple: this.multiple
        },
        onchange: this.onchange,
        onprogress: this.onprogress
      });
      this.create();
    },
    methods: {
      setFiles(array2) {
        if (array2 instanceof Map) {
          for (let [key, item] of array2) {
            item["progress"] = 100;
            item["type"] = "success";
            this.lsjFile.files.set(key, item);
          }
        } else if (Array.isArray(array2)) {
          array2.forEach((item) => {
            if (item.name) {
              item["progress"] = 100;
              item["type"] = "success";
              this.lsjFile.files.set(item.name, item);
            }
          });
        }
        this.onchange(this.lsjFile.files);
      },
      setData() {
        this.lsjFile && this.lsjFile.setData(...arguments);
      },
      getDomStyles(callback) {
        let view = uni.createSelectorQuery().in(this).select(".lsj-file");
        view.fields(
          {
            size: true,
            rect: true
          },
          ({ height, width, top, left, right, bottom }) => {
            uni.createSelectorQuery().selectViewport().scrollOffset(({ scrollTop }) => {
              return callback({
                top: parseInt(top) + parseInt(scrollTop) + "px",
                left: parseInt(left) + "px",
                width: parseInt(width) + "px",
                height: parseInt(height) + "px"
              });
            }).exec();
          }
        ).exec();
      },
      emitShow() {
        let pages2 = getCurrentPages();
        let route2 = pages2[pages2.length - 1].route;
        if (route2 === this.myRoute) {
          return this.show();
        }
      },
      show() {
        this.debug && formatAppLog("log", "at uni_modules/lsj-upload/components/lsj-upload/lsj-upload.vue:211", "触发show函数");
        if (this._size && this._size >= this.count) {
          return;
        }
        this.isShow = true;
        this.lsjFile && this.getDomStyles((styles) => {
          this.lsjFile.dom.setStyle(styles);
        });
      },
      hide() {
        this.debug && formatAppLog("log", "at uni_modules/lsj-upload/components/lsj-upload/lsj-upload.vue:226", "触发hide函数");
        this.isShow = false;
        this.lsjFile && this.lsjFile.dom.setStyle({
          top: "-100px",
          left: "0px",
          width: "1px",
          height: "100px"
        });
      },
      /**
       * 手动提交上传
       * @param {string}name 文件名称，不传则上传所有type等于waiting和fail的文件
       */
      upload(name) {
        this.lsjFile && this.lsjFile.upload(name);
      },
      /**
       * @returns {Map} 已选择的文件Map集
       */
      onchange(files) {
        this.$emit("change", files);
        this._size = files.size;
        return files.size >= this.count ? this.hide() : this.show();
      },
      /**
       * @returns {object} 当前上传中的对象
       */
      onprogress(item, end = false) {
        this.$emit("progress", item);
        if (end) {
          setTimeout(() => {
            this.$emit("uploadEnd", item);
          }, 0);
        }
      },
      /**
       * 移除组件内缓存的某条数据
       * @param {string}name 文件名称,不指定默认清除所有文件
       */
      clear(name) {
        this.lsjFile.clear(name);
      },
      // 创建选择器
      create() {
        let path = "/uni_modules/lsj-upload/hybrid/html/uploadFile.html";
        let dom2 = this.lsjFile.create(path);
        dom2.setStyle({ position: this.position });
        dom2.loadURL(path);
        setTimeout(() => {
          this.$root.$scope.$getAppWebview().append(dom2);
          this.show();
        }, 300);
      },
      // 点击选择附件
      onClick() {
        if (this._size >= this.count) {
          this.toast(`只允许上传${this.count}个文件`);
          return;
        }
      },
      toast(msg) {
        uni.showToast({
          title: msg,
          icon: "none"
        });
      }
    }
  };
  function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "lsj-file",
        style: vue.normalizeStyle([$options.getStyles])
      },
      [
        vue.createElementVNode(
          "view",
          {
            ref: "lsj",
            class: "hFile",
            style: vue.normalizeStyle([$options.getStyles]),
            onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
          },
          [
            vue.renderSlot(_ctx.$slots, "default", {}, () => [
              vue.createElementVNode(
                "view",
                {
                  class: "defview",
                  style: vue.normalizeStyle([$options.getStyles])
                },
                "附件上传",
                4
                /* STYLE */
              )
            ], true)
          ],
          4
          /* STYLE */
        )
      ],
      4
      /* STYLE */
    );
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$l], ["__scopeId", "data-v-27a611eb"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/lsj-upload/components/lsj-upload/lsj-upload.vue"]]);
  const UNI_APP = {};
  {
    UNI_APP.BASE_URL = "https://www.boxim.online/api";
    UNI_APP.WS_URL = "wss://www.boxim.online/im";
  }
  const _sfc_main$l = {
    name: "file-upload",
    data() {
      return {
        fileMap: /* @__PURE__ */ new Map(),
        option: {
          url: UNI_APP.BASE_URL + "/file/upload",
          name: "file",
          header: {
            accessToken: uni.getStorageSync("loginInfo").accessToken
          }
        }
      };
    },
    props: {
      maxSize: {
        type: Number,
        default: 10
      },
      onBefore: {
        type: Function,
        default: null
      },
      onSuccess: {
        type: Function,
        default: null
      },
      onError: {
        type: Function,
        default: null
      }
    },
    methods: {
      show() {
        this.$refs.lsjUpload.show();
      },
      hide() {
        this.$refs.lsjUpload.hide();
      },
      onUploadEnd(item) {
        let file = this.fileMap.get(item.path);
        if (item.type == "fail") {
          this.onError(file);
          return;
        }
        let res = JSON.parse(item.responseText);
        if (res.code == 200) {
          this.onOk(file, res);
        } else if (res.code == 401) {
          this.refreshToken().then((res2) => {
            let newToken = res2.data.accessToken;
            this.option.header.accessToken = newToken;
            this.$refs.lsjUpload.setData(this.option);
            this.$refs.lsjUpload.upload(file.name);
          }).catch(() => {
            this.onError(file, res);
          });
        } else {
          this.onError(file, res);
        }
      },
      onChange(files) {
        if (!files.size) {
          return;
        }
        files.forEach((file, name) => {
          if (!this.fileMap.has(file.path)) {
            this.onBefore && this.onBefore(file);
            this.fileMap.set(file.path, file);
          }
        });
      },
      onOk(file, res) {
        this.fileMap.delete(file.path);
        this.$refs.lsjUpload.clear(file.name);
        this.onSuccess && this.onSuccess(file, res);
      },
      onFailed(file, res) {
        this.fileMap.delete(file.path);
        this.$refs.lsjUpload.clear(file.name);
        this.onError && this.onError(file, res);
      },
      refreshToken() {
        return new Promise((resolve, reject) => {
          let loginInfo = uni.getStorageSync("loginInfo");
          uni.request({
            method: "PUT",
            url: UNI_APP.BASE_URL + "/refreshToken",
            header: {
              refreshToken: loginInfo.refreshToken
            },
            success: (res) => {
              resolve(res.data);
            },
            fail: (res) => {
              reject(res);
            }
          });
        });
      }
    }
  };
  function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_lsj_upload = resolveEasycom(vue.resolveDynamicComponent("lsj-upload"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_lsj_upload, {
        ref: "lsjUpload",
        height: "100%",
        option: $data.option,
        onUploadEnd: $options.onUploadEnd,
        onChange: $options.onChange,
        size: $props.maxSize,
        instantly: true
      }, {
        default: vue.withCtx(() => [
          vue.renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
        /* FORWARDED */
      }, 8, ["option", "onUploadEnd", "onChange", "size"])
    ]);
  }
  const __easycom_4 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$k], ["__file", "C:/Java/box-im/im-uniapp/components/file-upload/file-upload.vue"]]);
  const _sfc_main$k = {
    name: "image-upload",
    data() {
      return {
        uploadHeaders: {
          "accessToken": uni.getStorageSync("loginInfo").accessToken
        }
      };
    },
    props: {
      maxCount: {
        type: Number,
        default: 1
      },
      maxSize: {
        type: Number,
        default: 5 * 1024 * 1024
      },
      sourceType: {
        type: String,
        default: "album"
      },
      onBefore: {
        type: Function,
        default: null
      },
      onSuccess: {
        type: Function,
        default: null
      },
      onError: {
        type: Function,
        default: null
      }
    },
    methods: {
      selectAndUpload() {
        uni.chooseImage({
          count: this.maxCount,
          //最多可以选择的图片张数，默认9
          sourceType: [this.sourceType],
          //album 从相册选图，camera 使用相机，默认二者都有。如需直接开相机或直接选相册，请只使用一个选项
          sizeType: ["original"],
          //original 原图，compressed 压缩图，默认二者都有
          success: (res) => {
            res.tempFiles.forEach((file) => {
              formatAppLog("log", "at components/image-upload/image-upload.vue:53", "文件:", file);
              if (!this.onBefore || this.onBefore(file)) {
                this.uploadImage(file);
              }
            });
          }
        });
      },
      uploadImage(file) {
        uni.uploadFile({
          url: UNI_APP.BASE_URL + "/image/upload",
          header: {
            accessToken: uni.getStorageSync("loginInfo").accessToken
          },
          filePath: file.path,
          // 要上传文件资源的路径
          name: "file",
          success: (res) => {
            let data = JSON.parse(res.data);
            if (data.code != 200) {
              uni.showToast({
                icon: "none",
                title: data.message
              });
              this.onError && this.onError(file, data);
            } else {
              this.onSuccess && this.onSuccess(file, data);
            }
          },
          fail: (err) => {
            formatAppLog("log", "at components/image-upload/image-upload.vue:83", err);
            this.onError && this.onError(file, err);
          }
        });
      }
    }
  };
  function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      onClick: _cache[0] || (_cache[0] = ($event) => $options.selectAndUpload())
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ]);
  }
  const __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$j], ["__file", "C:/Java/box-im/im-uniapp/components/image-upload/image-upload.vue"]]);
  const _sfc_main$j = {
    name: "chat-at-box",
    props: {
      ownerId: {
        type: Number
      },
      members: {
        type: Array
      }
    },
    data() {
      return {
        searchText: "",
        showMembers: []
      };
    },
    methods: {
      init(atUserIds) {
        this.showMembers = [];
        let userId = this.userStore.userInfo.id;
        if (this.ownerId == userId) {
          this.showMembers.push({
            userId: -1,
            showNickName: "全体成员"
          });
        }
        this.members.forEach((m) => {
          if (!m.quit && m.userId != userId) {
            m.checked = atUserIds.indexOf(m.userId) >= 0;
            this.showMembers.push(m);
          }
        });
      },
      open() {
        this.$refs.popup.open();
      },
      onSwitchChecked(member) {
        member.checked = !member.checked;
      },
      onClean() {
        this.showMembers.forEach((m) => {
          m.checked = false;
        });
      },
      onOk() {
        this.$refs.popup.close();
      },
      onChange(e) {
        if (!e.show) {
          this.$emit("complete", this.atUserIds);
        }
      }
    },
    computed: {
      atUserIds() {
        let ids = [];
        this.showMembers.forEach((m) => {
          if (m.checked) {
            ids.push(m.userId);
          }
        });
        return ids;
      }
    }
  };
  function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1$5);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2);
    return vue.openBlock(), vue.createBlock(_component_uni_popup, {
      ref: "popup",
      type: "bottom",
      onChange: $options.onChange
    }, {
      default: vue.withCtx(() => [
        vue.createElementVNode("view", { class: "chat-at-box" }, [
          vue.createElementVNode("view", { class: "chat-at-top" }, [
            vue.createElementVNode("view", { class: "chat-at-tip" }, " 选择要提醒的人"),
            vue.createElementVNode("button", {
              class: "chat-at-btn",
              type: "warn",
              size: "mini",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.onClean())
            }, "清空 "),
            vue.createElementVNode(
              "button",
              {
                class: "chat-at-btn",
                type: "primary",
                size: "mini",
                onClick: _cache[1] || (_cache[1] = ($event) => $options.onOk())
              },
              "确定(" + vue.toDisplayString($options.atUserIds.length) + ") ",
              1
              /* TEXT */
            )
          ]),
          vue.withDirectives(vue.createElementVNode(
            "scroll-view",
            {
              "scroll-x": "true",
              "scroll-left": "120"
            },
            [
              vue.createElementVNode("view", { class: "at-user-items" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.showMembers, (m) => {
                    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                      class: "at-user-item",
                      key: m.userId
                    }, [
                      vue.createVNode(_component_head_image, {
                        name: m.showNickName,
                        url: m.headImage,
                        size: "mini"
                      }, null, 8, ["name", "url"])
                    ])), [
                      [vue.vShow, m.checked]
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ],
            512
            /* NEED_PATCH */
          ), [
            [vue.vShow, $options.atUserIds.length > 0]
          ]),
          vue.createElementVNode("view", { class: "search-bar" }, [
            vue.createVNode(_component_uni_search_bar, {
              modelValue: $data.searchText,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.searchText = $event),
              cancelButton: "none",
              radius: "100",
              placeholder: "搜索"
            }, null, 8, ["modelValue"])
          ]),
          vue.createElementVNode("view", { class: "member-items" }, [
            vue.createElementVNode("scroll-view", {
              class: "scroll-bar",
              "scroll-with-animation": "true",
              "scroll-y": "true"
            }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.showMembers, (m) => {
                  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                    key: m.userId
                  }, [
                    vue.createElementVNode("view", {
                      class: vue.normalizeClass(["member-item", { checked: m.checked }]),
                      onClick: ($event) => $options.onSwitchChecked(m)
                    }, [
                      vue.createVNode(_component_head_image, {
                        name: m.showNickName,
                        online: m.online,
                        url: m.headImage,
                        size: "small"
                      }, null, 8, ["name", "online", "url"]),
                      vue.createElementVNode(
                        "view",
                        { class: "member-name" },
                        vue.toDisplayString(m.showNickName),
                        1
                        /* TEXT */
                      ),
                      vue.createCommentVNode('							<view class="member-checked">'),
                      vue.createCommentVNode('								<radio :checked="m.checked" @click.stop="onSwitchChecked(m)" />'),
                      vue.createCommentVNode("							</view>")
                    ], 10, ["onClick"])
                  ])), [
                    [vue.vShow, m.showNickName.includes($data.searchText)]
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ])
      ]),
      _: 1
      /* STABLE */
    }, 8, ["onChange"]);
  }
  const __easycom_6 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$i], ["__scopeId", "data-v-4a0f0007"], ["__file", "C:/Java/box-im/im-uniapp/components/chat-at-box/chat-at-box.vue"]]);
  const _sfc_main$i = {
    name: "chat-group-member-choose",
    props: {
      members: {
        type: Array
      },
      maxSize: {
        type: Number,
        default: -1
      }
    },
    data() {
      return {
        searchText: ""
      };
    },
    methods: {
      init(checkedIds, lockedIds) {
        this.members.forEach((m) => {
          m.checked = checkedIds.indexOf(m.userId) >= 0;
          m.locked = lockedIds.indexOf(m.userId) >= 0;
        });
      },
      open() {
        this.$refs.popup.open();
      },
      onSwitchChecked(m) {
        if (!m.locked) {
          m.checked = !m.checked;
        }
        if (this.maxSize > 0 && this.checkedIds.length > this.maxSize) {
          m.checked = false;
          uni.showToast({
            title: `最多选择${this.maxSize}位用户`,
            icon: "none"
          });
        }
      },
      onClean() {
        this.members.forEach((m) => {
          if (!m.locked) {
            m.checked = false;
          }
        });
      },
      onOk() {
        this.$refs.popup.close();
        this.$emit("complete", this.checkedIds);
      },
      isChecked(m) {
        return this.checkedIds.indexOf(m.userId) >= 0;
      }
    },
    computed: {
      checkedIds() {
        let ids = [];
        this.members.forEach((m) => {
          if (m.checked) {
            ids.push(m.userId);
          }
        });
        return ids;
      }
    }
  };
  function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1$5);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2);
    return vue.openBlock(), vue.createBlock(
      _component_uni_popup,
      {
        ref: "popup",
        type: "bottom"
      },
      {
        default: vue.withCtx(() => [
          vue.createElementVNode("view", { class: "chat-group-member-choose" }, [
            vue.createElementVNode("view", { class: "top-bar" }, [
              vue.createElementVNode("view", { class: "top-tip" }, "选择成员"),
              vue.createElementVNode("button", {
                class: "top-btn",
                type: "warn",
                size: "mini",
                onClick: _cache[0] || (_cache[0] = ($event) => $options.onClean())
              }, "清空 "),
              vue.createElementVNode(
                "button",
                {
                  class: "top-btn",
                  type: "primary",
                  size: "mini",
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.onOk())
                },
                "确定(" + vue.toDisplayString($options.checkedIds.length) + ") ",
                1
                /* TEXT */
              )
            ]),
            vue.withDirectives(vue.createElementVNode(
              "scroll-view",
              {
                "scroll-x": "true",
                "scroll-left": "120"
              },
              [
                vue.createElementVNode("view", { class: "checked-users" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($props.members, (m) => {
                      return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                        class: "user-item",
                        key: m.userId
                      }, [
                        vue.createVNode(_component_head_image, {
                          name: m.showNickName,
                          url: m.headImage,
                          size: 60
                        }, null, 8, ["name", "url"])
                      ])), [
                        [vue.vShow, m.checked]
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ],
              512
              /* NEED_PATCH */
            ), [
              [vue.vShow, $options.checkedIds.length > 0]
            ]),
            vue.createElementVNode("view", { class: "search-bar" }, [
              vue.createVNode(_component_uni_search_bar, {
                modelValue: $data.searchText,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.searchText = $event),
                cancelButton: "none",
                placeholder: "搜索"
              }, null, 8, ["modelValue"])
            ]),
            vue.createElementVNode("view", { class: "member-items" }, [
              vue.createElementVNode("scroll-view", {
                class: "scroll-bar",
                "scroll-with-animation": "true",
                "scroll-y": "true"
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($props.members, (m) => {
                    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                      key: m.userId
                    }, [
                      vue.createElementVNode("view", {
                        class: "member-item",
                        onClick: ($event) => $options.onSwitchChecked(m)
                      }, [
                        vue.createVNode(_component_head_image, {
                          name: m.showNickName,
                          online: m.online,
                          url: m.headImage,
                          size: 90
                        }, null, 8, ["name", "online", "url"]),
                        vue.createElementVNode(
                          "view",
                          { class: "member-name" },
                          vue.toDisplayString(m.showNickName),
                          1
                          /* TEXT */
                        ),
                        vue.createElementVNode("view", { class: "member-checked" }, [
                          vue.createElementVNode("radio", {
                            checked: m.checked,
                            disabled: m.locked,
                            onClick: vue.withModifiers(($event) => $options.onSwitchChecked(m), ["stop"])
                          }, null, 8, ["checked", "disabled", "onClick"])
                        ])
                      ], 8, ["onClick"])
                    ])), [
                      [vue.vShow, !m.quit && m.showNickName.includes($data.searchText)]
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])
          ])
        ]),
        _: 1
        /* STABLE */
      },
      512
      /* NEED_PATCH */
    );
  }
  const __easycom_7 = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$h], ["__scopeId", "data-v-f693a839"], ["__file", "C:/Java/box-im/im-uniapp/components/group-member-selector/group-member-selector.vue"]]);
  const popup = {
    data() {
      return {};
    },
    created() {
      this.popup = this.getParent();
    },
    methods: {
      /**
       * 获取父元素实例
       */
      getParent(name = "uniPopup") {
        let parent = this.$parent;
        let parentName = parent.$options.name;
        while (parentName !== name) {
          parent = parent.$parent;
          if (!parent)
            return false;
          parentName = parent.$options.name;
        }
        return parent;
      }
    }
  };
  const en = {
    "uni-popup.cancel": "cancel",
    "uni-popup.ok": "ok",
    "uni-popup.placeholder": "pleace enter",
    "uni-popup.title": "Hint",
    "uni-popup.shareTitle": "Share to"
  };
  const zhHans = {
    "uni-popup.cancel": "取消",
    "uni-popup.ok": "确定",
    "uni-popup.placeholder": "请输入",
    "uni-popup.title": "提示",
    "uni-popup.shareTitle": "分享到"
  };
  const zhHant = {
    "uni-popup.cancel": "取消",
    "uni-popup.ok": "確定",
    "uni-popup.placeholder": "請輸入",
    "uni-popup.title": "提示",
    "uni-popup.shareTitle": "分享到"
  };
  const messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const { t } = initVueI18n(messages);
  const _sfc_main$h = {
    name: "uniPopupDialog",
    mixins: [popup],
    emits: ["confirm", "close"],
    props: {
      inputType: {
        type: String,
        default: "text"
      },
      value: {
        type: [String, Number],
        default: ""
      },
      placeholder: {
        type: [String, Number],
        default: ""
      },
      type: {
        type: String,
        default: "error"
      },
      mode: {
        type: String,
        default: "base"
      },
      title: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      beforeClose: {
        type: Boolean,
        default: false
      },
      cancelText: {
        type: String,
        default: ""
      },
      confirmText: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        dialogType: "error",
        focus: false,
        val: ""
      };
    },
    computed: {
      okText() {
        return this.confirmText || t("uni-popup.ok");
      },
      closeText() {
        return this.cancelText || t("uni-popup.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-popup.placeholder");
      },
      titleText() {
        return this.title || t("uni-popup.title");
      }
    },
    watch: {
      type(val) {
        this.dialogType = val;
      },
      mode(val) {
        if (val === "input") {
          this.dialogType = "info";
        }
      },
      value(val) {
        this.val = val;
      }
    },
    created() {
      this.popup.disableMask();
      if (this.mode === "input") {
        this.dialogType = "info";
        this.val = this.value;
      } else {
        this.dialogType = this.type;
      }
    },
    mounted() {
      this.focus = true;
    },
    methods: {
      /**
       * 点击确认按钮
       */
      onOk() {
        if (this.mode === "input") {
          this.$emit("confirm", this.val);
        } else {
          this.$emit("confirm");
        }
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      /**
       * 点击取消按钮
       */
      closeDialog() {
        this.$emit("close");
        if (this.beforeClose)
          return;
        this.popup.close();
      },
      close() {
        this.popup.close();
      }
    }
  };
  function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-popup-dialog" }, [
      vue.createElementVNode("view", { class: "uni-dialog-title" }, [
        vue.createElementVNode(
          "text",
          {
            class: vue.normalizeClass(["uni-dialog-title-text", ["uni-popup__" + $data.dialogType]])
          },
          vue.toDisplayString($options.titleText),
          3
          /* TEXT, CLASS */
        )
      ]),
      $props.mode === "base" ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.createElementVNode(
            "text",
            { class: "uni-dialog-content-text" },
            vue.toDisplayString($props.content),
            1
            /* TEXT */
          )
        ], true)
      ])) : (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "uni-dialog-content"
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, () => [
          vue.withDirectives(vue.createElementVNode("input", {
            class: "uni-dialog-input",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.val = $event),
            type: $props.inputType,
            placeholder: $options.placeholderText,
            focus: $data.focus
          }, null, 8, ["type", "placeholder", "focus"]), [
            [vue.vModelDynamic, $data.val]
          ])
        ], true)
      ])),
      vue.createElementVNode("view", { class: "uni-dialog-button-group" }, [
        vue.createElementVNode("view", {
          class: "uni-dialog-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.closeDialog && $options.closeDialog(...args))
        }, [
          vue.createElementVNode(
            "text",
            { class: "uni-dialog-button-text" },
            vue.toDisplayString($options.closeText),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", {
          class: "uni-dialog-button uni-border-left",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.onOk && $options.onOk(...args))
        }, [
          vue.createElementVNode(
            "text",
            { class: "uni-dialog-button-text uni-button-color" },
            vue.toDisplayString($options.okText),
            1
            /* TEXT */
          )
        ])
      ])
    ]);
  }
  const __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$g], ["__scopeId", "data-v-d78c88b7"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue"]]);
  const _sfc_main$g = {
    data() {
      return {
        rtcInfo: {}
      };
    },
    props: {
      groupId: {
        type: Number
      }
    },
    methods: {
      open(rtcInfo) {
        this.rtcInfo = rtcInfo;
        this.$refs.popup.open();
      },
      onOk() {
        let users = this.rtcInfo.userInfos;
        let mine = this.userStore.userInfo;
        if (!users.find((user) => user.id == mine.id)) {
          users.push({
            id: mine.id,
            nickName: mine.nickName,
            headImage: mine.headImageThumb,
            isCamera: false,
            isMicroPhone: true
          });
        }
        const userInfos = encodeURIComponent(JSON.stringify(users));
        uni.navigateTo({
          url: `/pages/chat/chat-group-video?groupId=${this.groupId}&isHost=false
						&inviterId=${mine.id}&userInfos=${userInfos}`
        });
      }
    }
  };
  function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_uni_popup_dialog = resolveEasycom(vue.resolveDynamicComponent("uni-popup-dialog"), __easycom_1);
    const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_2);
    return vue.openBlock(), vue.createBlock(
      _component_uni_popup,
      {
        ref: "popup",
        type: "center"
      },
      {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_popup_dialog, {
            mode: "base",
            duration: 2e3,
            title: "是否加入通话?",
            confirmText: "加入",
            onConfirm: $options.onOk
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("div", { class: "group-rtc-join" }, [
                vue.createElementVNode("div", { class: "host-info" }, [
                  vue.createElementVNode("div", null, "发起人"),
                  vue.createVNode(_component_head_image, {
                    name: $data.rtcInfo.host.nickName,
                    url: $data.rtcInfo.host.headImage,
                    size: 80
                  }, null, 8, ["name", "url"])
                ]),
                vue.createElementVNode("div", { class: "user-info" }, [
                  vue.createElementVNode(
                    "div",
                    null,
                    vue.toDisplayString($data.rtcInfo.userInfos.length + "人正在通话中"),
                    1
                    /* TEXT */
                  ),
                  vue.createElementVNode("scroll-view", {
                    "scroll-x": "true",
                    "scroll-left": "120"
                  }, [
                    vue.createElementVNode("view", { class: "user-list" }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList($data.rtcInfo.userInfos, (user) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            class: "user-item",
                            key: user.id
                          }, [
                            vue.createVNode(_component_head_image, {
                              name: user.nickName,
                              url: user.headImage,
                              size: 80
                            }, null, 8, ["name", "url"])
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ])
                ])
              ])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onConfirm"])
        ]),
        _: 1
        /* STABLE */
      },
      512
      /* NEED_PATCH */
    );
  }
  const __easycom_8 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$f], ["__scopeId", "data-v-1a6a4ff4"], ["__file", "C:/Java/box-im/im-uniapp/components/group-rtc-join/group-rtc-join.vue"]]);
  const _sfc_main$f = {
    data() {
      return {
        chat: {},
        friend: {},
        group: {},
        groupMembers: [],
        isReceipt: false,
        // 是否回执消息
        scrollMsgIdx: 0,
        // 滚动条定位为到哪条消息
        chatTabBox: "none",
        showRecord: false,
        chatMainHeight: 0,
        // 聊天窗口高度
        keyboardHeight: 290,
        // 键盘高度
        windowHeight: 1e3,
        // 窗口高度
        initHeight: 1e3,
        // h5初始高度
        atUserIds: [],
        needScrollToBottom: false,
        // 需要滚动到底部 
        showMinIdx: 0,
        // 下标小于showMinIdx的消息不显示，否则可能很卡
        reqQueue: [],
        // 请求队列
        isSending: false,
        // 是否正在发送请求
        isShowKeyBoard: false,
        // 键盘是否正在弹起 
        editorCtx: null,
        // 编辑器上下文
        isEmpty: true,
        // 编辑器是否为空
        isFocus: false,
        // 编辑器是否焦点
        isReadOnly: false,
        // 编辑器是否只读
        playingAudio: null
        // 当前正在播放的录音消息
      };
    },
    methods: {
      onRecorderInput() {
        this.showRecord = true;
        this.switchChatTabBox("none");
      },
      onKeyboardInput() {
        this.showRecord = false;
        this.switchChatTabBox("none");
      },
      onSendRecord(data) {
        if (this.isBanned) {
          this.showBannedTip();
          return;
        }
        let msgInfo = {
          content: JSON.stringify(data),
          type: this.$enums.MESSAGE_TYPE.AUDIO,
          receipt: this.isReceipt
        };
        this.fillTargetId(msgInfo, this.chat.targetId);
        this.sendMessageRequest(msgInfo).then((m) => {
          m.selfSend = true;
          this.chatStore.insertMessage(m, this.chat);
          this.moveChatToTop();
          this.scrollToBottom();
          this.isReceipt = false;
        });
      },
      onRtCall(msgInfo) {
        if (msgInfo.type == this.$enums.MESSAGE_TYPE.ACT_RT_VOICE) {
          this.onPriviteVoice();
        } else if (msgInfo.type == this.$enums.MESSAGE_TYPE.ACT_RT_VIDEO) {
          this.onPriviteVideo();
        }
      },
      onPriviteVideo() {
        const friendInfo = encodeURIComponent(JSON.stringify(this.friend));
        uni.navigateTo({
          url: `/pages/chat/chat-private-video?mode=video&friend=${friendInfo}&isHost=true`
        });
      },
      onPriviteVoice() {
        const friendInfo = encodeURIComponent(JSON.stringify(this.friend));
        uni.navigateTo({
          url: `/pages/chat/chat-private-video?mode=voice&friend=${friendInfo}&isHost=true`
        });
      },
      onGroupVideo() {
        let ids = [this.mine.id];
        this.$refs.selBox.init(ids, ids);
        this.$refs.selBox.open();
      },
      onInviteOk(ids) {
        if (ids.length < 2) {
          return;
        }
        let users = [];
        ids.forEach((id) => {
          let m = this.groupMembers.find((m2) => m2.userId == id);
          users.push({
            id: m.userId,
            nickName: m.showNickName,
            headImage: m.headImage,
            isCamera: false,
            isMicroPhone: true
          });
        });
        const groupId = this.group.id;
        const inviterId = this.mine.id;
        const userInfos = encodeURIComponent(JSON.stringify(users));
        uni.navigateTo({
          url: `/pages/chat/chat-group-video?groupId=${groupId}&isHost=true
						&inviterId=${inviterId}&userInfos=${userInfos}`
        });
      },
      moveChatToTop() {
        let chatIdx = this.chatStore.findChatIdx(this.chat);
        this.chatStore.moveTop(chatIdx);
      },
      switchReceipt() {
        this.isReceipt = !this.isReceipt;
      },
      openAtBox() {
        this.$refs.atBox.init(this.atUserIds);
        this.$refs.atBox.open();
      },
      onAtComplete(atUserIds) {
        this.atUserIds = atUserIds;
      },
      onLongPressHead(msgInfo) {
        if (!msgInfo.selfSend && this.chat.type == "GROUP" && this.atUserIds.indexOf(msgInfo.sendId) < 0) {
          this.atUserIds.push(msgInfo.sendId);
        }
      },
      headImage(msgInfo) {
        if (this.chat.type == "GROUP") {
          let member = this.groupMembers.find((m) => m.userId == msgInfo.sendId);
          return member ? member.headImage : "";
        } else {
          return msgInfo.selfSend ? this.mine.headImageThumb : this.chat.headImage;
        }
      },
      showName(msgInfo) {
        if (this.chat.type == "GROUP") {
          let member = this.groupMembers.find((m) => m.userId == msgInfo.sendId);
          return member ? member.showNickName : "";
        } else {
          return msgInfo.selfSend ? this.mine.nickName : this.chat.showName;
        }
      },
      sendTextMessage() {
        this.editorCtx.getContents({
          success: (e) => {
            this.editorCtx.clear();
            this.atUserIds = [];
            this.isReceipt = false;
            if (this.isBanned) {
              this.showBannedTip();
              return;
            }
            let sendText = this.isReceipt ? "【回执消息】" : "";
            e.delta.ops.forEach((op) => {
              if (op.insert.image) {
                sendText += `#${op.attributes.alt};`;
              } else
                // 文字
                sendText += op.insert;
            });
            if (!sendText.trim() && this.atUserIds.length == 0) {
              return uni.showToast({
                title: "不能发送空白信息",
                icon: "none"
              });
            }
            let receiptText = this.isReceipt ? "【回执消息】" : "";
            let atText = this.createAtText();
            let msgInfo = {
              content: receiptText + sendText + atText,
              atUserIds: this.atUserIds,
              receipt: this.isReceipt,
              type: 0
            };
            this.fillTargetId(msgInfo, this.chat.targetId);
            this.sendMessageRequest(msgInfo).then((m) => {
              m.selfSend = true;
              this.chatStore.insertMessage(m, this.chat);
              this.moveChatToTop();
            }).finally(() => {
              this.scrollToBottom();
            });
          }
        });
      },
      createAtText() {
        let atText = "";
        this.atUserIds.forEach((id) => {
          if (id == -1) {
            atText += ` @全体成员`;
          } else {
            let member = this.groupMembers.find((m) => m.userId == id);
            if (member) {
              atText += ` @${member.showNickName}`;
            }
          }
        });
        return atText;
      },
      fillTargetId(msgInfo, targetId) {
        if (this.chat.type == "GROUP") {
          msgInfo.groupId = targetId;
        } else {
          msgInfo.recvId = targetId;
        }
      },
      scrollToBottom() {
        let size = this.messageSize;
        if (size > 0) {
          this.scrollToMsgIdx(size - 1);
        }
      },
      scrollToMsgIdx(idx) {
        if (idx == this.scrollMsgIdx && idx > 0) {
          this.$nextTick(() => {
            this.scrollMsgIdx = idx - 1;
            this.scrollToMsgIdx(idx);
          });
          return;
        }
        this.$nextTick(() => {
          this.scrollMsgIdx = idx;
        });
      },
      onShowEmoChatTab() {
        this.showRecord = false;
        this.switchChatTabBox("emo");
      },
      onShowToolsChatTab() {
        this.showRecord = false;
        this.switchChatTabBox("tools");
      },
      switchChatTabBox(chatTabBox) {
        this.chatTabBox = chatTabBox;
        this.reCalChatMainHeight();
        if (chatTabBox != "tools" && this.$refs.fileUpload) {
          this.$refs.fileUpload.hide();
        }
      },
      selectEmoji(emoText) {
        let path = this.$emo.textToPath(emoText);
        this.isReadOnly = true;
        this.isEmpty = false;
        this.$nextTick(() => {
          this.editorCtx.insertImage({
            src: path,
            alt: emoText,
            extClass: "emoji-small",
            nowrap: true,
            complete: () => {
              this.isReadOnly = false;
              this.editorCtx.blur();
            }
          });
        });
      },
      onUploadImageBefore(file) {
        if (this.isBanned) {
          this.showBannedTip();
          return;
        }
        let data = {
          originUrl: file.path,
          thumbUrl: file.path
        };
        let msgInfo = {
          id: 0,
          tmpId: this.generateId(),
          fileId: file.uid,
          sendId: this.mine.id,
          content: JSON.stringify(data),
          sendTime: (/* @__PURE__ */ new Date()).getTime(),
          selfSend: true,
          type: this.$enums.MESSAGE_TYPE.IMAGE,
          readedCount: 0,
          loadStatus: "loading",
          status: this.$enums.MESSAGE_STATUS.UNSEND
        };
        this.fillTargetId(msgInfo, this.chat.targetId);
        this.chatStore.insertMessage(msgInfo, this.chat);
        this.moveChatToTop();
        file.msgInfo = msgInfo;
        this.scrollToBottom();
        return true;
      },
      onUploadImageSuccess(file, res) {
        let msgInfo = JSON.parse(JSON.stringify(file.msgInfo));
        msgInfo.content = JSON.stringify(res.data);
        msgInfo.receipt = this.isReceipt;
        this.sendMessageRequest(msgInfo).then((m) => {
          msgInfo.loadStatus = "ok";
          msgInfo.id = m.id;
          this.isReceipt = false;
          this.chatStore.insertMessage(msgInfo, this.chat);
        });
      },
      onUploadImageFail(file, err) {
        let msgInfo = JSON.parse(JSON.stringify(file.msgInfo));
        msgInfo.loadStatus = "fail";
        this.chatStore.insertMessage(msgInfo, this.chat);
      },
      onUploadFileBefore(file) {
        if (this.isBanned) {
          this.showBannedTip();
          return;
        }
        let data = {
          name: file.name,
          size: file.size,
          url: file.path
        };
        let msgInfo = {
          id: 0,
          tmpId: this.generateId(),
          sendId: this.mine.id,
          content: JSON.stringify(data),
          sendTime: (/* @__PURE__ */ new Date()).getTime(),
          selfSend: true,
          type: this.$enums.MESSAGE_TYPE.FILE,
          readedCount: 0,
          loadStatus: "loading",
          status: this.$enums.MESSAGE_STATUS.UNSEND
        };
        this.fillTargetId(msgInfo, this.chat.targetId);
        this.chatStore.insertMessage(msgInfo, this.chat);
        this.moveChatToTop();
        file.msgInfo = msgInfo;
        this.scrollToBottom();
        return true;
      },
      onUploadFileSuccess(file, res) {
        let data = {
          name: file.name,
          size: file.size,
          url: res.data
        };
        let msgInfo = JSON.parse(JSON.stringify(file.msgInfo));
        msgInfo.content = JSON.stringify(data);
        msgInfo.receipt = this.isReceipt;
        this.sendMessageRequest(msgInfo).then((m) => {
          msgInfo.loadStatus = "ok";
          msgInfo.id = m.id;
          this.isReceipt = false;
          this.chatStore.insertMessage(msgInfo, this.chat);
        });
      },
      onUploadFileFail(file, res) {
        let msgInfo = JSON.parse(JSON.stringify(file.msgInfo));
        msgInfo.loadStatus = "fail";
        this.chatStore.insertMessage(msgInfo, this.chat);
      },
      onDeleteMessage(msgInfo) {
        uni.showModal({
          title: "删除消息",
          content: "确认删除消息?",
          success: (res) => {
            if (!res.cancel) {
              this.chatStore.deleteMessage(msgInfo, this.chat);
              uni.showToast({
                title: "删除成功",
                icon: "none"
              });
            }
          }
        });
      },
      onRecallMessage(msgInfo) {
        uni.showModal({
          title: "撤回消息",
          content: "确认撤回消息?",
          success: (res) => {
            if (!res.cancel) {
              let url2 = `/message/${this.chat.type.toLowerCase()}/recall/${msgInfo.id}`;
              this.$http({
                url: url2,
                method: "DELETE"
              }).then(() => {
                msgInfo = JSON.parse(JSON.stringify(msgInfo));
                msgInfo.type = this.$enums.MESSAGE_TYPE.RECALL;
                msgInfo.content = "你撤回了一条消息";
                msgInfo.status = this.$enums.MESSAGE_STATUS.RECALL;
                this.chatStore.insertMessage(msgInfo, this.chat);
              });
            }
          }
        });
      },
      onCopyMessage(msgInfo) {
        uni.setClipboardData({
          data: msgInfo.content,
          success: () => {
            uni.showToast({ title: "复制成功" });
          },
          fail: () => {
            uni.showToast({ title: "复制失败", icon: "none" });
          }
        });
      },
      onDownloadFile(msgInfo) {
        let url2 = JSON.parse(msgInfo.content).url;
        uni.downloadFile({
          url: url2,
          success(res) {
            if (res.statusCode === 200) {
              var filePath = encodeURI(res.tempFilePath);
              uni.openDocument({
                filePath,
                showMenu: true
              });
            }
          },
          fail(e) {
            uni.showToast({
              title: "文件下载失败",
              icon: "none"
            });
          }
        });
      },
      onScrollToTop() {
        if (this.showMinIdx == 0) {
          formatAppLog("log", "at pages/chat/chat-box.vue:565", "消息已滚动到顶部");
          return;
        }
        this.scrollToMsgIdx(this.showMinIdx);
        this.showMinIdx = this.showMinIdx > 20 ? this.showMinIdx - 20 : 0;
      },
      onShowMore() {
        if (this.chat.type == "GROUP") {
          uni.navigateTo({
            url: "/pages/group/group-info?id=" + this.group.id
          });
        } else {
          uni.navigateTo({
            url: "/pages/common/user-info?id=" + this.friend.id
          });
        }
      },
      onTextInput(e) {
        this.isEmpty = e.detail.html == "<p><br></p>";
      },
      onEditorReady() {
        const query = uni.createSelectorQuery().in(this);
        query.select("#editor").context((res) => {
          this.editorCtx = res.context;
        }).exec();
      },
      onEditorFocus(e) {
        this.isFocus = true;
        this.scrollToBottom();
        this.switchChatTabBox("none");
      },
      onEditorBlur(e) {
        this.isFocus = false;
      },
      onAudioStateChange(state, msgInfo) {
        const playingAudio = this.$refs["message" + msgInfo.id][0];
        if (state == "PLAYING" && playingAudio != this.playingAudio) {
          this.playingAudio && this.playingAudio.stopPlayAudio();
          this.playingAudio = playingAudio;
        }
      },
      loadReaded(fid) {
        this.$http({
          url: `/message/private/maxReadedId?friendId=${fid}`,
          method: "get"
        }).then((id) => {
          this.chatStore.readedMessage({
            friendId: fid,
            maxId: id
          });
        });
      },
      readedMessage() {
        if (this.unreadCount == 0) {
          return;
        }
        let url2 = "";
        if (this.chat.type == "GROUP") {
          url2 = `/message/group/readed?groupId=${this.chat.targetId}`;
        } else {
          url2 = `/message/private/readed?friendId=${this.chat.targetId}`;
        }
        this.$http({
          url: url2,
          method: "PUT"
        }).then(() => {
          this.chatStore.resetUnreadCount(this.chat);
          this.scrollToBottom();
        });
      },
      loadGroup(groupId) {
        this.$http({
          url: `/group/find/${groupId}`,
          method: "GET"
        }).then((group) => {
          this.group = group;
          this.chatStore.updateChatFromGroup(group);
          this.groupStore.updateGroup(group);
        });
        this.$http({
          url: `/group/members/${groupId}`,
          method: "GET"
        }).then((groupMembers) => {
          this.groupMembers = groupMembers;
        });
      },
      loadFriend(friendId) {
        this.$http({
          url: `/user/find/${friendId}`,
          method: "GET"
        }).then((friend) => {
          this.friend = friend;
          this.chatStore.updateChatFromFriend(friend);
          this.friendStore.updateFriend(friend);
        });
      },
      rpxTopx(rpx) {
        let info = uni.getSystemInfoSync();
        info.windowWidth * rpx / 750;
        return Math.floor(rpx);
      },
      sendMessageRequest(msgInfo) {
        return new Promise((resolve, reject) => {
          this.reqQueue.push({ msgInfo, resolve, reject });
          this.processReqQueue();
        });
      },
      processReqQueue() {
        if (this.reqQueue.length && !this.isSending) {
          this.isSending = true;
          const reqData = this.reqQueue.shift();
          this.$http({
            url: this.messageAction,
            method: "post",
            data: reqData.msgInfo
          }).then((res) => {
            reqData.resolve(res);
          }).catch((e) => {
            reqData.reject(e);
          }).finally(() => {
            this.isSending = false;
            this.processReqQueue();
          });
        }
      },
      reCalChatMainHeight() {
        setTimeout(() => {
          let h = this.windowHeight;
          h -= 50;
          if (this.isShowKeyBoard || this.chatTabBox != "none") {
            formatAppLog("log", "at pages/chat/chat-box.vue:709", "减去键盘高度:", this.keyboardHeight);
            h -= this.keyboardHeight;
            this.scrollToBottom();
          }
          h -= uni.getSystemInfoSync().statusBarHeight;
          this.chatMainHeight = h;
          formatAppLog("log", "at pages/chat/chat-box.vue:718", "窗口高度:", this.chatMainHeight);
          if (this.isShowKeyBoard || this.chatTabBox != "none") {
            this.scrollToBottom();
          }
        }, 30);
      },
      listenKeyBoard() {
        uni.onKeyboardHeightChange(this.keyBoardListener);
      },
      unListenKeyboard() {
        uni.offKeyboardHeightChange(this.keyBoardListener);
      },
      keyBoardListener(res) {
        this.isShowKeyBoard = res.height > 0;
        if (this.isShowKeyBoard) {
          this.keyboardHeight = res.height;
        }
        this.reCalChatMainHeight();
      },
      resizeListener() {
        formatAppLog("log", "at pages/chat/chat-box.vue:782", "resize");
        let keyboardHeight = this.initHeight - window.innerHeight;
        this.isShowKeyBoard = keyboardHeight > 150;
        if (this.isShowKeyBoard) {
          this.keyboardHeight = keyboardHeight;
        }
        this.reCalChatMainHeight();
      },
      focusInListener() {
        formatAppLog("log", "at pages/chat/chat-box.vue:791", "focusInListener");
        this.isShowKeyBoard = true;
        this.reCalChatMainHeight();
      },
      focusOutListener() {
        formatAppLog("log", "at pages/chat/chat-box.vue:796", "focusOutListener");
        this.isShowKeyBoard = false;
        this.reCalChatMainHeight();
      },
      showBannedTip() {
        let msgInfo = {
          tmpId: this.generateId(),
          sendId: this.mine.id,
          sendTime: (/* @__PURE__ */ new Date()).getTime(),
          type: this.$enums.MESSAGE_TYPE.TIP_TEXT
        };
        if (this.chat.type == "PRIVATE") {
          msgInfo.recvId = this.mine.id;
          msgInfo.content = "该用户已被管理员封禁,原因:" + this.friend.reason;
        } else {
          msgInfo.groupId = this.group.id;
          msgInfo.content = "本群聊已被管理员封禁,原因:" + this.group.reason;
        }
        this.chatStore.insertMessage(msgInfo, this.chat);
      },
      generateId() {
        return String((/* @__PURE__ */ new Date()).getTime()) + String(Math.floor(Math.random() * 1e3));
      }
    },
    computed: {
      mine() {
        return this.userStore.userInfo;
      },
      title() {
        if (!this.chat) {
          return "";
        }
        let title = this.chat.showName;
        if (this.chat.type == "GROUP") {
          let size = this.groupMembers.filter((m) => !m.quit).length;
          title += `(${size})`;
        }
        return title;
      },
      messageAction() {
        return `/message/${this.chat.type.toLowerCase()}/send`;
      },
      messageSize() {
        if (!this.chat || !this.chat.messages) {
          return 0;
        }
        return this.chat.messages.length;
      },
      unreadCount() {
        if (!this.chat || !this.chat.unreadCount) {
          return 0;
        }
        return this.chat.unreadCount;
      },
      isBanned() {
        return this.chat.type == "PRIVATE" && this.friend.isBanned || this.chat.type == "GROUP" && this.group.isBanned;
      },
      atUserItems() {
        let atUsers = [];
        this.atUserIds.forEach((id) => {
          if (id == -1) {
            atUsers.push({
              id: -1,
              showNickName: "全体成员"
            });
            return;
          }
          let member = this.groupMembers.find((m) => m.userId == id);
          if (member) {
            atUsers.push(member);
          }
        });
        return atUsers;
      }
    },
    watch: {
      messageSize: function(newSize, oldSize) {
        if (newSize > oldSize) {
          let pages2 = getCurrentPages();
          let curPage = pages2[pages2.length - 1].route;
          if (curPage == "pages/chat/chat-box") {
            this.scrollToBottom();
          } else {
            this.needScrollToBottom = true;
          }
        }
      },
      unreadCount: {
        handler(newCount, oldCount) {
          if (newCount > 0) {
            this.readedMessage();
          }
        }
      }
    },
    onLoad(options) {
      this.chat = this.chatStore.chats[options.chatIdx];
      let size = this.messageSize;
      this.showMinIdx = size > 20 ? size - 20 : 0;
      this.readedMessage();
      if (this.chat.type == "GROUP") {
        this.loadGroup(this.chat.targetId);
      } else {
        this.loadFriend(this.chat.targetId);
        this.loadReaded(this.chat.targetId);
      }
      this.chatStore.activeChat(options.chatIdx);
      this.isReceipt = false;
      this.listenKeyBoard();
      this.$nextTick(() => {
        this.windowHeight = uni.getSystemInfoSync().windowHeight;
        this.reCalChatMainHeight();
      });
    },
    onUnload() {
      this.unListenKeyboard();
    },
    onShow() {
      if (this.needScrollToBottom) {
        this.scrollToBottom();
        this.needScrollToBottom = false;
      }
    }
  };
  function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_chat_message_item = resolveEasycom(vue.resolveDynamicComponent("chat-message-item"), __easycom_1$2);
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_chat_record = resolveEasycom(vue.resolveDynamicComponent("chat-record"), __easycom_3$1);
    const _component_file_upload = resolveEasycom(vue.resolveDynamicComponent("file-upload"), __easycom_4);
    const _component_image_upload = resolveEasycom(vue.resolveDynamicComponent("image-upload"), __easycom_1$1);
    const _component_chat_at_box = resolveEasycom(vue.resolveDynamicComponent("chat-at-box"), __easycom_6);
    const _component_group_member_selector = resolveEasycom(vue.resolveDynamicComponent("group-member-selector"), __easycom_7);
    const _component_group_rtc_join = resolveEasycom(vue.resolveDynamicComponent("group-rtc-join"), __easycom_8);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page chat-box" }, [
      vue.createVNode(_component_nav_bar, {
        back: "",
        more: "",
        onMore: $options.onShowMore
      }, {
        default: vue.withCtx(() => [
          vue.createTextVNode(
            vue.toDisplayString($options.title),
            1
            /* TEXT */
          )
        ]),
        _: 1
        /* STABLE */
      }, 8, ["onMore"]),
      vue.createElementVNode(
        "view",
        {
          class: "chat-main-box",
          style: vue.normalizeStyle({ height: $data.chatMainHeight + "px" })
        },
        [
          vue.createElementVNode("view", {
            class: "chat-msg",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.switchChatTabBox("none"))
          }, [
            vue.createElementVNode("scroll-view", {
              class: "scroll-box",
              "scroll-y": "true",
              "upper-threshold": "200",
              onScrolltoupper: _cache[0] || (_cache[0] = (...args) => $options.onScrollToTop && $options.onScrollToTop(...args)),
              "scroll-into-view": "chat-item-" + $data.scrollMsgIdx
            }, [
              $data.chat ? (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                { key: 0 },
                vue.renderList($data.chat.messages, (msgInfo, idx) => {
                  return vue.openBlock(), vue.createElementBlock("view", { key: idx }, [
                    idx >= $data.showMinIdx ? (vue.openBlock(), vue.createBlock(_component_chat_message_item, {
                      key: 0,
                      ref_for: true,
                      ref: "message" + msgInfo.id,
                      headImage: $options.headImage(msgInfo),
                      onCall: ($event) => $options.onRtCall(msgInfo),
                      showName: $options.showName(msgInfo),
                      onRecall: $options.onRecallMessage,
                      onDelete: $options.onDeleteMessage,
                      onCopy: $options.onCopyMessage,
                      onLongPressHead: ($event) => $options.onLongPressHead(msgInfo),
                      onDownload: $options.onDownloadFile,
                      onAudioStateChange: $options.onAudioStateChange,
                      id: "chat-item-" + idx,
                      msgInfo,
                      groupMembers: $data.groupMembers
                    }, null, 8, ["headImage", "onCall", "showName", "onRecall", "onDelete", "onCopy", "onLongPressHead", "onDownload", "onAudioStateChange", "id", "msgInfo", "groupMembers"])) : vue.createCommentVNode("v-if", true)
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              )) : vue.createCommentVNode("v-if", true)
            ], 40, ["scroll-into-view"])
          ]),
          $data.atUserIds.length > 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "chat-at-bar",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.openAtBox())
          }, [
            vue.createElementVNode("view", { class: "iconfont icon-at" }, ": "),
            $data.atUserIds.length > 0 ? (vue.openBlock(), vue.createElementBlock("scroll-view", {
              key: 0,
              class: "chat-at-scroll-box",
              "scroll-x": "true",
              "scroll-left": "120"
            }, [
              vue.createElementVNode("view", { class: "chat-at-items" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($options.atUserItems, (m) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "chat-at-item",
                      key: m.userId
                    }, [
                      vue.createVNode(_component_head_image, {
                        name: m.showNickName,
                        url: m.headImage,
                        size: "minier"
                      }, null, 8, ["name", "url"])
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ])
            ])) : vue.createCommentVNode("v-if", true)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "send-bar" }, [
            !$data.showRecord ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "iconfont icon-voice-circle",
              onClick: _cache[3] || (_cache[3] = ($event) => $options.onRecorderInput())
            })) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "iconfont icon-keyboard",
              onClick: _cache[4] || (_cache[4] = ($event) => $options.onKeyboardInput())
            })),
            $data.showRecord ? (vue.openBlock(), vue.createBlock(_component_chat_record, {
              key: 2,
              class: "chat-record",
              onSend: $options.onSendRecord
            }, null, 8, ["onSend"])) : (vue.openBlock(), vue.createElementBlock("view", {
              key: 3,
              class: "send-text"
            }, [
              vue.createElementVNode("editor", {
                id: "editor",
                class: "send-text-area",
                placeholder: $data.isReceipt ? "[回执消息]" : "",
                "read-only": $data.isReadOnly,
                onFocus: _cache[5] || (_cache[5] = (...args) => $options.onEditorFocus && $options.onEditorFocus(...args)),
                onBlur: _cache[6] || (_cache[6] = (...args) => $options.onEditorBlur && $options.onEditorBlur(...args)),
                onReady: _cache[7] || (_cache[7] = (...args) => $options.onEditorReady && $options.onEditorReady(...args)),
                onInput: _cache[8] || (_cache[8] = (...args) => $options.onTextInput && $options.onTextInput(...args))
              }, null, 40, ["placeholder", "read-only"])
            ])),
            $data.chat && $data.chat.type == "GROUP" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 4,
              class: "iconfont icon-at",
              onClick: _cache[9] || (_cache[9] = ($event) => $options.openAtBox())
            })) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", {
              class: "iconfont icon-icon_emoji",
              onClick: _cache[10] || (_cache[10] = ($event) => $options.onShowEmoChatTab())
            }),
            $data.isEmpty ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 5,
              class: "iconfont icon-add",
              onClick: _cache[11] || (_cache[11] = ($event) => $options.onShowToolsChatTab())
            })) : vue.createCommentVNode("v-if", true),
            !$data.isEmpty || $data.atUserIds.length ? (vue.openBlock(), vue.createElementBlock(
              "button",
              {
                key: 6,
                class: "btn-send",
                type: "primary",
                onTouchend: _cache[12] || (_cache[12] = vue.withModifiers(($event) => $options.sendTextMessage(), ["prevent"])),
                size: "mini"
              },
              "发送",
              32
              /* NEED_HYDRATION */
            )) : vue.createCommentVNode("v-if", true)
          ])
        ],
        4
        /* STYLE */
      ),
      vue.createElementVNode("view", { class: "chat-tab-bar" }, [
        $data.chatTabBox == "tools" ? (vue.openBlock(), vue.createElementBlock(
          "view",
          {
            key: 0,
            class: "chat-tools",
            style: vue.normalizeStyle({ height: $data.keyboardHeight + "px" })
          },
          [
            vue.createElementVNode("view", { class: "chat-tools-item" }, [
              vue.createVNode(_component_file_upload, {
                ref: "fileUpload",
                onBefore: $options.onUploadFileBefore,
                onSuccess: $options.onUploadFileSuccess,
                onError: $options.onUploadFileFail
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "tool-icon iconfont icon-folder" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onBefore", "onSuccess", "onError"]),
              vue.createElementVNode("view", { class: "tool-name" }, "文件")
            ]),
            vue.createElementVNode("view", { class: "chat-tools-item" }, [
              vue.createVNode(_component_image_upload, {
                maxCount: 9,
                sourceType: "album",
                onBefore: $options.onUploadImageBefore,
                onSuccess: $options.onUploadImageSuccess,
                onError: $options.onUploadImageFail
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "tool-icon iconfont icon-picture" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onBefore", "onSuccess", "onError"]),
              vue.createElementVNode("view", { class: "tool-name" }, "相册")
            ]),
            vue.createElementVNode("view", { class: "chat-tools-item" }, [
              vue.createVNode(_component_image_upload, {
                sourceType: "camera",
                onBefore: $options.onUploadImageBefore,
                onSuccess: $options.onUploadImageSuccess,
                onError: $options.onUploadImageFail
              }, {
                default: vue.withCtx(() => [
                  vue.createElementVNode("view", { class: "tool-icon iconfont icon-camera" })
                ]),
                _: 1
                /* STABLE */
              }, 8, ["onBefore", "onSuccess", "onError"]),
              vue.createElementVNode("view", { class: "tool-name" }, "拍摄")
            ]),
            vue.createElementVNode("view", {
              class: "chat-tools-item",
              onClick: _cache[13] || (_cache[13] = ($event) => $options.onRecorderInput())
            }, [
              vue.createElementVNode("view", { class: "tool-icon iconfont icon-microphone" }),
              vue.createElementVNode("view", { class: "tool-name" }, "语音消息")
            ]),
            $data.chat.type == "GROUP" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "chat-tools-item",
              onClick: _cache[14] || (_cache[14] = ($event) => $options.switchReceipt())
            }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["tool-icon iconfont icon-receipt", $data.isReceipt ? "active" : ""])
                },
                null,
                2
                /* CLASS */
              ),
              vue.createElementVNode("view", { class: "tool-name" }, "回执消息")
            ])) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 音视频不支持小程序 "),
            $data.chat.type == "PRIVATE" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 1,
              class: "chat-tools-item",
              onClick: _cache[15] || (_cache[15] = ($event) => $options.onPriviteVideo())
            }, [
              vue.createElementVNode("view", { class: "tool-icon iconfont icon-video" }),
              vue.createElementVNode("view", { class: "tool-name" }, "视频通话")
            ])) : vue.createCommentVNode("v-if", true),
            $data.chat.type == "PRIVATE" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 2,
              class: "chat-tools-item",
              onClick: _cache[16] || (_cache[16] = ($event) => $options.onPriviteVoice())
            }, [
              vue.createElementVNode("view", { class: "tool-icon iconfont icon-call" }),
              vue.createElementVNode("view", { class: "tool-name" }, "语音通话")
            ])) : vue.createCommentVNode("v-if", true),
            $data.chat.type == "GROUP" ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 3,
              class: "chat-tools-item",
              onClick: _cache[17] || (_cache[17] = ($event) => $options.onGroupVideo())
            }, [
              vue.createElementVNode("view", { class: "tool-icon iconfont icon-call" }),
              vue.createElementVNode("view", { class: "tool-name" }, "语音通话")
            ])) : vue.createCommentVNode("v-if", true)
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true),
        $data.chatTabBox === "emo" ? (vue.openBlock(), vue.createElementBlock(
          "scroll-view",
          {
            key: 1,
            class: "chat-emotion",
            "scroll-y": "true",
            style: vue.normalizeStyle({ height: $data.keyboardHeight + "px" })
          },
          [
            vue.createElementVNode("view", { class: "emotion-item-list" }, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(_ctx.$emo.emoTextList, (emoText, i) => {
                  return vue.openBlock(), vue.createElementBlock("image", {
                    class: "emotion-item emoji-large",
                    title: emoText,
                    src: _ctx.$emo.textToPath(emoText),
                    key: i,
                    onClick: ($event) => $options.selectEmoji(emoText),
                    mode: "aspectFit",
                    "lazy-load": "true"
                  }, null, 8, ["title", "src", "onClick"]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ],
          4
          /* STYLE */
        )) : vue.createCommentVNode("v-if", true)
      ]),
      vue.createCommentVNode(" @用户时选择成员 "),
      vue.createVNode(_component_chat_at_box, {
        ref: "atBox",
        ownerId: $data.group.ownerId,
        members: $data.groupMembers,
        onComplete: $options.onAtComplete
      }, null, 8, ["ownerId", "members", "onComplete"]),
      vue.createCommentVNode(" 群语音通话时选择成员 "),
      vue.createVNode(_component_group_member_selector, {
        ref: "selBox",
        members: $data.groupMembers,
        maxSize: _ctx.configStore.webrtc.maxChannel,
        onComplete: $options.onInviteOk
      }, null, 8, ["members", "maxSize", "onComplete"]),
      vue.createVNode(_component_group_rtc_join, {
        ref: "rtcJoin",
        groupId: $data.group.id
      }, null, 8, ["groupId"])
    ]);
  }
  const PagesChatChatBox = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$e], ["__file", "C:/Java/box-im/im-uniapp/pages/chat/chat-box.vue"]]);
  const _sfc_main$e = {
    data() {
      return {
        url: "",
        wv: "",
        mode: "video",
        isHost: true,
        friend: {}
      };
    },
    methods: {
      onMessage(e) {
        this.onWebviewMessage(e.detail.data[0]);
      },
      onWebviewMessage(event) {
        formatAppLog("log", "at pages/chat/chat-private-video.vue:22", "来自webview的消息:" + JSON.stringify(event));
        switch (event.key) {
          case "WV_READY":
            this.initWebView();
            break;
          case "WV_CLOSE":
            uni.navigateBack();
            break;
        }
      },
      sendMessageToWebView(key, message) {
        if (!this.wv) {
          setTimeout(() => this.sendMessageToWebView(key, message), 100);
          return;
        }
        let event = {
          key,
          data: message
        };
        this.wv.evalJS(`onEvent('${encodeURIComponent(JSON.stringify(event))}')`);
      },
      initWebView() {
        this.wv = this.$scope.$getAppWebview().children()[0];
      },
      initUrl() {
        this.url = "/hybrid/html/rtc-private/index.html";
        this.url += "?mode=" + this.mode;
        this.url += "&isHost=" + this.isHost;
        this.url += "&baseUrl=" + UNI_APP.BASE_URL;
        this.url += "&loginInfo=" + JSON.stringify(uni.getStorageSync("loginInfo"));
        this.url += "&userInfo=" + JSON.stringify(this.userStore.userInfo);
        this.url += "&friend=" + JSON.stringify(this.friend);
        this.url += "&config=" + JSON.stringify(this.configStore.webrtc);
      }
    },
    onBackPress() {
      this.sendMessageToWebView("NAV_BACK", {});
    },
    onLoad(options) {
      uni.$on("WS_RTC_PRIVATE", (msg) => {
        this.sendMessageToWebView("RTC_MESSAGE", msg);
      });
      this.mode = options.mode;
      this.isHost = JSON.parse(options.isHost);
      this.friend = JSON.parse(decodeURIComponent(options.friend));
      this.initUrl();
    },
    onUnload() {
      uni.$off("WS_RTC_PRIVATE");
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("web-view", {
      class: "page chat-private-video",
      id: "chat-video-wv",
      onMessage: _cache[0] || (_cache[0] = (...args) => $options.onMessage && $options.onMessage(...args)),
      src: $data.url
    }, null, 40, ["src"]);
  }
  const PagesChatChatPrivateVideo = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$d], ["__scopeId", "data-v-fa1dc093"], ["__file", "C:/Java/box-im/im-uniapp/pages/chat/chat-private-video.vue"]]);
  const _sfc_main$d = {
    data() {
      return {
        url: "",
        wv: "",
        isHost: false,
        groupId: null,
        inviterId: null,
        userInfos: []
      };
    },
    methods: {
      onMessage(e) {
        this.onWebviewMessage(e.detail.data[0]);
      },
      onInsertMessage(msgInfo) {
      },
      onWebviewMessage(event) {
        formatAppLog("log", "at pages/chat/chat-group-video.vue:26", "来自webview的消息:" + JSON.stringify(event));
        switch (event.key) {
          case "WV_READY":
            this.initWebView();
            break;
          case "WV_CLOSE":
            uni.navigateBack();
            break;
          case "INSERT_MESSAGE":
            this.onInsertMessage(event.data);
            break;
        }
      },
      sendMessageToWebView(key, message) {
        if (!this.wv) {
          setTimeout(() => this.sendMessageToWebView(key, message), 100);
          return;
        }
        let event = {
          key,
          data: message
        };
        this.wv.evalJS(`onEvent('${encodeURIComponent(JSON.stringify(event))}')`);
      },
      initWebView() {
        this.wv = this.$scope.$getAppWebview().children()[0];
      },
      initUrl() {
        this.url = "/hybrid/html/rtc-group/index.html?";
        this.url += "baseUrl=" + UNI_APP.BASE_URL;
        this.url += "&groupId=" + this.groupId;
        this.url += "&userId=" + this.userStore.userInfo.id;
        this.url += "&inviterId=" + this.inviterId;
        this.url += "&isHost=" + this.isHost;
        this.url += "&loginInfo=" + JSON.stringify(uni.getStorageSync("loginInfo"));
        this.url += "&userInfos=" + JSON.stringify(this.userInfos);
        this.url += "&config=" + JSON.stringify(this.configStore.webrtc);
      }
    },
    onBackPress() {
      formatAppLog("log", "at pages/chat/chat-group-video.vue:79", "onBackPress");
      this.sendMessageToWebView("NAV_BACK", {});
    },
    onLoad(options) {
      uni.$on("WS_RTC_GROUP", (msg) => {
        this.sendMessageToWebView("RTC_MESSAGE", msg);
      });
      this.isHost = JSON.parse(options.isHost);
      this.inviterId = options.inviterId;
      this.groupId = options.groupId;
      this.userInfos = JSON.parse(decodeURIComponent(options.userInfos));
      this.initUrl();
    },
    onUnload() {
      uni.$off("WS_RTC_GROUP");
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("web-view", {
      class: "page chat-group-video",
      id: "chat-video-wv",
      onMessage: _cache[0] || (_cache[0] = (...args) => $options.onMessage && $options.onMessage(...args)),
      src: $data.url
    }, null, 40, ["src"]);
  }
  const PagesChatChatGroupVideo = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$c], ["__scopeId", "data-v-d085553c"], ["__file", "C:/Java/box-im/im-uniapp/pages/chat/chat-group-video.vue"]]);
  const _sfc_main$c = {
    data() {
      return {
        searchText: "",
        users: []
      };
    },
    methods: {
      onCancel() {
        uni.navigateBack();
      },
      onSearch() {
        this.$http({
          url: "/user/findByName?name=" + this.searchText,
          method: "GET"
        }).then((data) => {
          this.users = data;
        });
      },
      onAddFriend(user) {
        this.$http({
          url: "/friend/add?friendId=" + user.id,
          method: "POST"
        }).then((data) => {
          let friend = {
            id: user.id,
            nickName: user.nickName,
            headImage: user.headImage,
            online: user.online
          };
          this.friendStore.addFriend(friend);
          uni.showToast({
            title: "添加成功，对方已成为您的好友",
            icon: "none"
          });
        });
      },
      onShowUserInfo(user) {
        uni.navigateTo({
          url: "/pages/common/user-info?id=" + user.id
        });
      },
      isFriend(userId) {
        let friends = this.friendStore.friends;
        let friend = friends.find((f) => f.id == userId);
        return !!friend;
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1$5);
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_uni_tag = resolveEasycom(vue.resolveDynamicComponent("uni-tag"), __easycom_3$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page friend-add" }, [
      vue.createVNode(_component_nav_bar, { back: "" }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("添加好友")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", { class: "nav-search" }, [
          vue.createVNode(_component_uni_search_bar, {
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchText = $event),
            radius: "100",
            focus: true,
            onConfirm: _cache[1] || (_cache[1] = ($event) => $options.onSearch()),
            onCancel: _cache[2] || (_cache[2] = ($event) => $options.onCancel()),
            placeholder: "用户名/昵称"
          }, null, 8, ["modelValue"])
        ])
      ]),
      vue.createElementVNode("view", { class: "user-items" }, [
        vue.createElementVNode("scroll-view", {
          class: "scroll-bar",
          "scroll-with-animation": "true",
          "scroll-y": "true"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.users, (user) => {
              return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                key: user.id
              }, [
                vue.createElementVNode("view", { class: "user-item" }, [
                  vue.createVNode(_component_head_image, {
                    id: user.id,
                    name: user.nickName,
                    online: user.online,
                    url: user.headImage
                  }, null, 8, ["id", "name", "online", "url"]),
                  vue.createElementVNode("view", { class: "user-info" }, [
                    vue.createElementVNode("view", { class: "user-name" }, [
                      vue.createElementVNode(
                        "view",
                        null,
                        vue.toDisplayString(user.userName),
                        1
                        /* TEXT */
                      ),
                      user.status == 1 ? (vue.openBlock(), vue.createBlock(_component_uni_tag, {
                        key: 0,
                        circle: "",
                        type: "error",
                        text: "已注销",
                        size: "small"
                      })) : vue.createCommentVNode("v-if", true)
                    ]),
                    vue.createElementVNode(
                      "view",
                      { class: "nick-name" },
                      vue.toDisplayString(`昵称:${user.nickName}`),
                      1
                      /* TEXT */
                    )
                  ]),
                  vue.createElementVNode("view", { class: "user-btns" }, [
                    vue.withDirectives(vue.createElementVNode("button", {
                      type: "primary",
                      size: "mini",
                      onClick: vue.withModifiers(($event) => $options.onAddFriend(user), ["stop"])
                    }, "加为好友", 8, ["onClick"]), [
                      [vue.vShow, !$options.isFriend(user.id)]
                    ]),
                    vue.withDirectives(vue.createElementVNode(
                      "button",
                      {
                        type: "default",
                        size: "mini",
                        disabled: ""
                      },
                      "已添加",
                      512
                      /* NEED_PATCH */
                    ), [
                      [vue.vShow, $options.isFriend(user.id)]
                    ])
                  ])
                ])
              ])), [
                [vue.vShow, user.id != _ctx.userStore.userInfo.id]
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const PagesFriendFriendAdd = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$b], ["__scopeId", "data-v-1b1267ec"], ["__file", "C:/Java/box-im/im-uniapp/pages/friend/friend-add.vue"]]);
  const _sfc_main$b = {
    name: "UniNoticeBar",
    emits: ["click", "getmore", "close"],
    props: {
      text: {
        type: String,
        default: ""
      },
      moreText: {
        type: String,
        default: ""
      },
      backgroundColor: {
        type: String,
        default: "#FFF9EA"
      },
      speed: {
        // 默认1s滚动100px
        type: Number,
        default: 100
      },
      color: {
        type: String,
        default: "#FF9A43"
      },
      fontSize: {
        type: Number,
        default: 14
      },
      moreColor: {
        type: String,
        default: "#FF9A43"
      },
      single: {
        // 是否单行
        type: [Boolean, String],
        default: false
      },
      scrollable: {
        // 是否滚动，添加后控制单行效果取消
        type: [Boolean, String],
        default: false
      },
      showIcon: {
        // 是否显示左侧icon
        type: [Boolean, String],
        default: false
      },
      showGetMore: {
        // 是否显示右侧查看更多
        type: [Boolean, String],
        default: false
      },
      showClose: {
        // 是否显示左侧关闭按钮
        type: [Boolean, String],
        default: false
      }
    },
    data() {
      const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      const elIdBox = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
      return {
        textWidth: 0,
        boxWidth: 0,
        wrapWidth: "",
        webviewHide: false,
        elId,
        elIdBox,
        show: true,
        animationDuration: "none",
        animationPlayState: "paused",
        animationDelay: "0s"
      };
    },
    computed: {
      isShowGetMore() {
        return this.showGetMore === true || this.showGetMore === "true";
      },
      isShowClose() {
        return (this.showClose === true || this.showClose === "true") && (this.showGetMore === false || this.showGetMore === "false");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page2 = pages2[pages2.length - 1];
      var currentWebview = page2.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
      this.$nextTick(() => {
        this.initSize();
      });
    },
    methods: {
      initSize() {
        if (this.scrollable) {
          let query = [];
          let textQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((ret) => {
              this.textWidth = ret[0].width;
              resolve();
            });
          });
          let boxQuery = new Promise((resolve, reject) => {
            uni.createSelectorQuery().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((ret) => {
              this.boxWidth = ret[0].width;
              resolve();
            });
          });
          query.push(textQuery);
          query.push(boxQuery);
          Promise.all(query).then(() => {
            this.animationDuration = `${this.textWidth / this.speed}s`;
            this.animationDelay = `-${this.boxWidth / this.speed}s`;
            setTimeout(() => {
              this.animationPlayState = "running";
            }, 1e3);
          });
        }
      },
      loopAnimation() {
      },
      clickMore() {
        this.$emit("getmore");
      },
      close() {
        this.show = false;
        this.$emit("close");
      },
      onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return $data.show ? (vue.openBlock(), vue.createElementBlock(
      "view",
      {
        key: 0,
        class: "uni-noticebar",
        style: vue.normalizeStyle({ backgroundColor: $props.backgroundColor }),
        onClick: _cache[1] || (_cache[1] = (...args) => $options.onClick && $options.onClick(...args))
      },
      [
        $props.showIcon === true || $props.showIcon === "true" ? (vue.openBlock(), vue.createBlock(_component_uni_icons, {
          key: 0,
          class: "uni-noticebar-icon",
          type: "sound",
          color: $props.color,
          size: $props.fontSize * 1.5
        }, null, 8, ["color", "size"])) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "view",
          {
            ref: "textBox",
            class: vue.normalizeClass(["uni-noticebar__content-wrapper", {
              "uni-noticebar__content-wrapper--scrollable": $props.scrollable,
              "uni-noticebar__content-wrapper--single": !$props.scrollable && ($props.single || $props.moreText)
            }]),
            style: vue.normalizeStyle({ height: $props.scrollable ? $props.fontSize * 1.5 + "px" : "auto" })
          },
          [
            vue.createElementVNode("view", {
              id: $data.elIdBox,
              class: vue.normalizeClass(["uni-noticebar__content", {
                "uni-noticebar__content--scrollable": $props.scrollable,
                "uni-noticebar__content--single": !$props.scrollable && ($props.single || $props.moreText)
              }])
            }, [
              vue.createElementVNode("text", {
                id: $data.elId,
                ref: "animationEle",
                class: vue.normalizeClass(["uni-noticebar__content-text", {
                  "uni-noticebar__content-text--scrollable": $props.scrollable,
                  "uni-noticebar__content-text--single": !$props.scrollable && ($props.single || $props.showGetMore)
                }]),
                style: vue.normalizeStyle({
                  color: $props.color,
                  fontSize: $props.fontSize + "px",
                  lineHeight: $props.fontSize * 1.5 + "px",
                  width: $data.wrapWidth + "px",
                  "animationDuration": $data.animationDuration,
                  "-webkit-animationDuration": $data.animationDuration,
                  animationPlayState: $data.webviewHide ? "paused" : $data.animationPlayState,
                  "-webkit-animationPlayState": $data.webviewHide ? "paused" : $data.animationPlayState,
                  animationDelay: $data.animationDelay,
                  "-webkit-animationDelay": $data.animationDelay
                })
              }, vue.toDisplayString($props.text), 15, ["id"])
            ], 10, ["id"])
          ],
          6
          /* CLASS, STYLE */
        ),
        $options.isShowGetMore ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "uni-noticebar__more uni-cursor-point",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clickMore && $options.clickMore(...args))
        }, [
          $props.moreText.length > 0 ? (vue.openBlock(), vue.createElementBlock(
            "text",
            {
              key: 0,
              style: vue.normalizeStyle({ color: $props.moreColor, fontSize: $props.fontSize + "px" })
            },
            vue.toDisplayString($props.moreText),
            5
            /* TEXT, STYLE */
          )) : (vue.openBlock(), vue.createBlock(_component_uni_icons, {
            key: 1,
            type: "right",
            color: $props.moreColor,
            size: $props.fontSize * 1.1
          }, null, 8, ["color", "size"]))
        ])) : vue.createCommentVNode("v-if", true),
        $options.isShowClose ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "uni-noticebar-close uni-cursor-point"
        }, [
          vue.createVNode(_component_uni_icons, {
            type: "closeempty",
            color: $props.color,
            size: $props.fontSize * 1.1,
            onClick: $options.close
          }, null, 8, ["color", "size", "onClick"])
        ])) : vue.createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    )) : vue.createCommentVNode("v-if", true);
  }
  const __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$a], ["__scopeId", "data-v-c3453ea3"], ["__file", "C:/Java/box-im/im-uniapp/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue"]]);
  const _sfc_main$a = {
    data() {
      return {
        groupId: null,
        group: {},
        groupMembers: []
      };
    },
    methods: {
      onFocusSearch() {
      },
      onInviteMember() {
        uni.navigateTo({
          url: `/pages/group/group-invite?id=${this.groupId}`
        });
      },
      onShowMoreMmeber() {
        uni.navigateTo({
          url: `/pages/group/group-member?id=${this.groupId}`
        });
      },
      onEditGroup() {
        uni.navigateTo({
          url: `/pages/group/group-edit?id=${this.groupId}`
        });
      },
      onSendMessage() {
        let chat = {
          type: "GROUP",
          targetId: this.group.id,
          showName: this.group.showGroupName,
          headImage: this.group.headImage
        };
        this.chatStore.openChat(chat);
        let chatIdx = this.chatStore.findChatIdx(chat);
        uni.navigateTo({
          url: "/pages/chat/chat-box?chatIdx=" + chatIdx
        });
      },
      onQuitGroup() {
        uni.showModal({
          title: "确认退出?",
          content: `退出群聊后将不再接受群里的消息，确认退出吗?`,
          success: (res) => {
            if (res.cancel)
              return;
            this.$http({
              url: `/group/quit/${this.groupId}`,
              method: "DELETE"
            }).then(() => {
              uni.showModal({
                title: `退出成功`,
                content: `您已退出群聊'${this.group.name}'`,
                showCancel: false,
                success: () => {
                  setTimeout(() => {
                    uni.switchTab({
                      url: "/pages/group/group"
                    });
                    this.groupStore.removeGroup(this.groupId);
                    this.chatStore.removeGroupChat(this.groupId);
                  }, 100);
                }
              });
            });
          }
        });
      },
      onDissolveGroup() {
        uni.showModal({
          title: "确认解散?",
          content: `确认要解散群聊'${this.group.name}'吗?`,
          success: (res) => {
            if (res.cancel)
              return;
            this.$http({
              url: `/group/delete/${this.groupId}`,
              method: "delete"
            }).then(() => {
              uni.showModal({
                title: `解散成功`,
                content: `群聊'${this.group.name}'已解散`,
                showCancel: false,
                success: () => {
                  setTimeout(() => {
                    uni.switchTab({
                      url: "/pages/group/group"
                    });
                    this.groupStore.removeGroup(this.groupId);
                    this.chatStore.removeGroupChat(this.groupId);
                  }, 100);
                }
              });
            });
          }
        });
      },
      loadGroupInfo() {
        this.$http({
          url: `/group/find/${this.groupId}`,
          method: "GET"
        }).then((group) => {
          this.group = group;
          this.chatStore.updateChatFromGroup(group);
          this.groupStore.updateGroup(group);
        });
      },
      loadGroupMembers() {
        formatAppLog("log", "at pages/group/group-info.vue:170", "loadGroupMembers");
        this.$http({
          url: `/group/members/${this.groupId}`,
          method: "GET"
        }).then((members) => {
          this.groupMembers = members.filter((m) => !m.quit);
        });
      }
    },
    computed: {
      ownerName() {
        let member = this.groupMembers.find((m) => m.userId == this.group.ownerId);
        return member && member.showNickName;
      },
      isOwner() {
        return this.group.ownerId == this.userStore.userInfo.id;
      }
    },
    onLoad(options) {
      this.groupId = options.id;
      this.loadGroupInfo(options.id);
      this.loadGroupMembers(options.id);
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    const _component_uni_notice_bar = resolveEasycom(vue.resolveDynamicComponent("uni-notice-bar"), __easycom_3);
    const _component_btn_bar = vue.resolveComponent("btn-bar");
    const _component_bar_group = vue.resolveComponent("bar-group");
    return vue.openBlock(), vue.createElementBlock("view", { class: "page group-info" }, [
      vue.createVNode(_component_nav_bar, { back: "" }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("群聊信息")
        ]),
        _: 1
        /* STABLE */
      }),
      !$data.group.quit ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "group-members"
      }, [
        vue.createElementVNode("view", { class: "member-items" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.groupMembers, (member, idx) => {
              return vue.openBlock(), vue.createElementBlock("view", { key: idx }, [
                idx < 9 ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "member-item"
                }, [
                  vue.createVNode(_component_head_image, {
                    id: member.userId,
                    name: member.showNickName,
                    url: member.headImage,
                    size: "small",
                    online: member.online
                  }, null, 8, ["id", "name", "url", "online"]),
                  vue.createElementVNode("view", { class: "member-name" }, [
                    vue.createElementVNode(
                      "text",
                      null,
                      vue.toDisplayString(member.showNickName),
                      1
                      /* TEXT */
                    )
                  ])
                ])) : vue.createCommentVNode("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createElementVNode("view", {
            class: "invite-btn",
            onClick: _cache[0] || (_cache[0] = ($event) => $options.onInviteMember())
          }, [
            vue.createVNode(_component_uni_icons, {
              type: "plusempty",
              size: "20",
              color: "#888888"
            })
          ])
        ]),
        vue.createElementVNode(
          "view",
          {
            class: "member-more",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.onShowMoreMmeber())
          },
          vue.toDisplayString(`查看全部群成员${$data.groupMembers.length}人`) + ">",
          1
          /* TEXT */
        )
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "群聊名称"),
          vue.createElementVNode(
            "view",
            { class: "value" },
            vue.toDisplayString($data.group.name),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "群主"),
          vue.createElementVNode(
            "view",
            { class: "value" },
            vue.toDisplayString($options.ownerName),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "群名备注"),
          vue.createElementVNode(
            "view",
            { class: "value" },
            vue.toDisplayString($data.group.remarkGroupName),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "我在本群的昵称"),
          vue.createElementVNode(
            "view",
            { class: "value" },
            vue.toDisplayString($data.group.showNickName),
            1
            /* TEXT */
          )
        ]),
        $data.group.notice ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "form-item"
        }, [
          vue.createElementVNode("view", { class: "label" }, "群公告")
        ])) : vue.createCommentVNode("v-if", true),
        $data.group.notice ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "form-item"
        }, [
          vue.createVNode(_component_uni_notice_bar, {
            text: $data.group.notice
          }, null, 8, ["text"])
        ])) : vue.createCommentVNode("v-if", true),
        !$data.group.quit ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "group-edit",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.onEditGroup())
        }, "修改群聊资料 > ")) : vue.createCommentVNode("v-if", true)
      ]),
      !$data.group.quit ? (vue.openBlock(), vue.createBlock(_component_bar_group, { key: 1 }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_btn_bar, {
            type: "primary",
            title: "发送消息",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.onSendMessage())
          }),
          !$options.isOwner ? (vue.openBlock(), vue.createBlock(_component_btn_bar, {
            key: 0,
            type: "danger",
            title: "退出群聊",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.onQuitGroup())
          })) : vue.createCommentVNode("v-if", true),
          $options.isOwner ? (vue.openBlock(), vue.createBlock(_component_btn_bar, {
            key: 1,
            type: "danger",
            title: "解散群聊",
            onClick: _cache[5] || (_cache[5] = ($event) => $options.onDissolveGroup())
          })) : vue.createCommentVNode("v-if", true)
        ]),
        _: 1
        /* STABLE */
      })) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesGroupGroupInfo = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "C:/Java/box-im/im-uniapp/pages/group/group-info.vue"]]);
  const _sfc_main$9 = {
    data() {
      return {
        group: {},
        rules: {
          name: {
            rules: [{
              required: true,
              errorMessage: "请输入群聊名称"
            }]
          }
        }
      };
    },
    methods: {
      submit() {
        if (this.group.id) {
          this.modifyGroup();
        } else {
          this.createNewGroup();
        }
      },
      onUnloadImageSuccess(file, res) {
        this.group.headImage = res.data.originUrl;
        this.group.headImageThumb = res.data.thumbUrl;
      },
      modifyGroup() {
        this.$http({
          url: "/group/modify",
          method: "PUT",
          data: this.group
        }).then((group) => {
          this.groupStore.updateGroup(group);
          uni.showToast({
            title: "修改群聊信息成功",
            icon: "none"
          });
          setTimeout(() => {
            let pages2 = getCurrentPages();
            let prevPage = pages2[pages2.length - 2];
            prevPage.$vm.loadGroupInfo();
            uni.navigateBack();
          }, 1e3);
        });
      },
      createNewGroup() {
        this.$http({
          url: "/group/create",
          method: "POST",
          data: this.group
        }).then((group) => {
          this.groupStore.addGroup(group);
          uni.showToast({
            title: `群聊创建成功，快邀请小伙伴进群吧`,
            icon: "none",
            duration: 1500
          });
          setTimeout(() => {
            uni.navigateTo({
              url: "/pages/group/group-info?id=" + group.id
            });
          }, 1500);
        });
      },
      loadGroupInfo(id) {
        this.$http({
          url: `/group/find/${id}`,
          method: "GET"
        }).then((group) => {
          this.group = group;
          this.chatStore.updateChatFromGroup(group);
          this.groupStore.updateGroup(group);
        });
      },
      initNewGroup() {
        let userInfo = this.userStore.userInfo;
        this.group = {
          name: `${userInfo.userName}创建的群聊`,
          headImage: userInfo.headImage,
          headImageThumb: userInfo.headImageThumb,
          ownerId: this.userStore.userInfo.id
        };
      }
    },
    computed: {
      isOwner() {
        return this.userStore.userInfo.id == this.group.ownerId;
      }
    },
    onLoad(options) {
      if (options.id) {
        this.loadGroupInfo(options.id);
      } else {
        this.initNewGroup();
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_image_upload = resolveEasycom(vue.resolveDynamicComponent("image-upload"), __easycom_1$1);
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page group-edit" }, [
      vue.createVNode(_component_nav_bar, { back: "" }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("修改群资料")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "群聊头像"),
          vue.createElementVNode("view", { class: "value" }),
          $options.isOwner ? (vue.openBlock(), vue.createBlock(_component_image_upload, {
            key: 0,
            onSuccess: $options.onUnloadImageSuccess
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("image", {
                src: $data.group.headImageThumb,
                class: "group-image"
              }, null, 8, ["src"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onSuccess"])) : (vue.openBlock(), vue.createBlock(_component_head_image, {
            key: 1,
            class: "group-image",
            name: $data.group.showGroupName,
            url: $data.group.headImageThumb,
            size: 120
          }, null, 8, ["name", "url"]))
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "群聊名称"),
          vue.withDirectives(vue.createElementVNode("input", {
            class: vue.normalizeClass(["input", $options.isOwner ? "" : "disable"]),
            maxlength: "20",
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.group.name = $event),
            disabled: !$options.isOwner,
            placeholder: "请输入群聊名称"
          }, null, 10, ["disabled"]), [
            [vue.vModelText, $data.group.name]
          ])
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "群聊备注"),
          vue.withDirectives(vue.createElementVNode("input", {
            class: "input",
            maxlength: "20",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.group.remarkGroupName = $event),
            placeholder: $data.group.name
          }, null, 8, ["placeholder"]), [
            [vue.vModelText, $data.group.remarkGroupName]
          ])
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "我在本群的昵称"),
          vue.withDirectives(vue.createElementVNode("input", {
            class: "input",
            maxlength: "20",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.group.remarkNickName = $event),
            placeholder: _ctx.userStore.userInfo.nickName
          }, null, 8, ["placeholder"]), [
            [vue.vModelText, $data.group.remarkNickName]
          ])
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "群公告"),
          vue.withDirectives(vue.createElementVNode("textarea", {
            class: vue.normalizeClass(["notice", $options.isOwner ? "" : "disable"]),
            maxlength: "512",
            disabled: !$options.isOwner,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.group.notice = $event),
            placeholder: $options.isOwner ? "请输入群公告" : ""
          }, null, 10, ["disabled", "placeholder"]), [
            [vue.vModelText, $data.group.notice]
          ])
        ])
      ]),
      vue.createElementVNode("button", {
        class: "bottom-btn",
        type: "primary",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.submit())
      }, "提交")
    ]);
  }
  const PagesGroupGroupEdit = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__scopeId", "data-v-2de297f5"], ["__file", "C:/Java/box-im/im-uniapp/pages/group/group-edit.vue"]]);
  const _sfc_main$8 = {
    data() {
      return {
        groupId: null,
        searchText: "",
        groupMembers: [],
        friendItems: []
      };
    },
    methods: {
      onInviteFriends() {
        let inviteVo = {
          groupId: this.groupId,
          friendIds: []
        };
        this.friendItems.forEach((f) => {
          if (f.checked && !f.disabled) {
            inviteVo.friendIds.push(f.id);
          }
        });
        if (inviteVo.friendIds.length > 0) {
          this.$http({
            url: "/group/invite",
            method: "POST",
            data: inviteVo
          }).then(() => {
            uni.showToast({
              title: "邀请成功",
              icon: "none"
            });
            setTimeout(() => {
              let pages2 = getCurrentPages();
              let prevPage = pages2[pages2.length - 2];
              prevPage.$vm.loadGroupMembers();
              uni.navigateBack();
            }, 1e3);
          });
        }
      },
      onShowUserInfo(userId) {
        uni.navigateTo({
          url: "/pages/common/user-info?id=" + userId
        });
      },
      onSwitchChecked(friend) {
        if (!friend.disabled) {
          friend.checked = !friend.checked;
        }
      },
      initFriendItems() {
        this.friendItems = [];
        let friends = this.friendStore.friends;
        friends.forEach((f) => {
          let item = {
            id: f.id,
            headImage: f.headImage,
            nickName: f.nickName,
            online: f.online
          };
          item.disabled = this.isGroupMember(f.id);
          item.checked = item.disabled;
          this.friendItems.push(item);
        });
      },
      loadGroupMembers(id) {
        this.$http({
          url: `/group/members/${id}`,
          method: "GET"
        }).then((members) => {
          this.groupMembers = members.filter((m) => !m.quit);
          this.initFriendItems();
        });
      },
      isGroupMember(id) {
        return this.groupMembers.some((m) => m.userId == id);
      }
    },
    computed: {
      inviteSize() {
        return this.friendItems.filter((f) => !f.disabled && f.checked).length;
      }
    },
    onLoad(options) {
      this.groupId = options.id;
      this.loadGroupMembers(options.id);
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1$5);
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page group-invite" }, [
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", { class: "nav-search" }, [
          vue.createVNode(_component_uni_search_bar, {
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchText = $event),
            radius: "100",
            cancelButton: "none",
            placeholder: "输入好友昵称搜索"
          }, null, 8, ["modelValue"])
        ])
      ]),
      vue.createElementVNode("view", { class: "friend-items" }, [
        vue.createElementVNode("scroll-view", {
          class: "scroll-bar",
          "scroll-with-animation": "true",
          "scroll-y": "true"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.friendItems, (friend) => {
              return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
                key: friend.id
              }, [
                vue.createElementVNode("view", {
                  class: vue.normalizeClass(["friend-item", { checked: friend.checked, disabled: friend.disabled }]),
                  onClick: ($event) => $options.onSwitchChecked(friend)
                }, [
                  vue.createVNode(_component_head_image, {
                    name: friend.nickName,
                    online: friend.online,
                    url: friend.headImage
                  }, null, 8, ["name", "online", "url"]),
                  vue.createElementVNode(
                    "view",
                    { class: "friend-name" },
                    vue.toDisplayString(friend.nickName),
                    1
                    /* TEXT */
                  )
                ], 10, ["onClick"])
              ])), [
                [vue.vShow, !$data.searchText || friend.nickName.includes($data.searchText)]
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createElementVNode("button", {
        class: "bottom-btn",
        type: "primary",
        disabled: $options.inviteSize == 0,
        onClick: _cache[1] || (_cache[1] = ($event) => $options.onInviteFriends())
      }, "邀请(" + vue.toDisplayString($options.inviteSize) + ") ", 9, ["disabled"])
    ]);
  }
  const PagesGroupGroupInvite = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-fd91ec59"], ["__file", "C:/Java/box-im/im-uniapp/pages/group/group-invite.vue"]]);
  const _sfc_main$7 = {
    data() {
      return {
        isModify: false,
        searchText: "",
        group: {},
        groupMembers: []
      };
    },
    methods: {
      onShowUserInfo(userId) {
        uni.navigateTo({
          url: "/pages/common/user-info?id=" + userId
        });
      },
      onKickOut(member, idx) {
        uni.showModal({
          title: "确认移出?",
          content: `确定将成员'${member.showNickName}'移出群聊吗？`,
          success: (res) => {
            if (res.cancel)
              return;
            this.$http({
              url: `/group/kick/${this.group.id}?userId=${member.userId}`,
              method: "DELETE"
            }).then(() => {
              uni.showToast({
                title: `已将${member.showNickName}移出群聊`,
                icon: "none"
              });
              this.groupMembers.splice(idx, 1);
              this.isModify = true;
            });
          }
        });
      },
      loadGroupInfo(id) {
        this.$http({
          url: `/group/find/${id}`,
          method: "GET"
        }).then((group) => {
          this.group = group;
        });
      },
      loadGroupMembers(id) {
        this.$http({
          url: `/group/members/${id}`,
          method: "GET"
        }).then((members) => {
          this.groupMembers = members.filter((m) => !m.quit);
        });
      },
      isSelf(userId) {
        return this.userStore.userInfo.id == userId;
      }
    },
    computed: {
      isOwner() {
        return this.userStore.userInfo.id == this.group.ownerId;
      }
    },
    onLoad(options) {
      this.loadGroupInfo(options.id);
      this.loadGroupMembers(options.id);
    },
    onUnload() {
      if (this.isModify) {
        let pages2 = getCurrentPages();
        let prevPage = pages2[pages2.length - 2];
        prevPage.$vm.loadGroupMembers();
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_1$5);
    const _component_head_image = resolveEasycom(vue.resolveDynamicComponent("head-image"), __easycom_2$5);
    const _component_uni_tag = resolveEasycom(vue.resolveDynamicComponent("uni-tag"), __easycom_3$6);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page group-member" }, [
      vue.createVNode(_component_nav_bar, { back: "" }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("群成员")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "nav-bar" }, [
        vue.createElementVNode("view", { class: "nav-search" }, [
          vue.createVNode(_component_uni_search_bar, {
            modelValue: $data.searchText,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchText = $event),
            radius: "100",
            cancelButton: "none",
            placeholder: "输入昵称搜索"
          }, null, 8, ["modelValue"])
        ])
      ]),
      vue.createElementVNode("view", { class: "member-items" }, [
        vue.createElementVNode("scroll-view", {
          class: "scroll-bar",
          "scroll-with-animation": "true",
          "scroll-y": "true"
        }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.groupMembers, (member, idx) => {
              return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", { key: idx }, [
                vue.createElementVNode("view", {
                  class: "member-item",
                  onClick: ($event) => $options.onShowUserInfo(member.userId)
                }, [
                  vue.createVNode(_component_head_image, {
                    name: member.showNickName,
                    online: member.online,
                    url: member.headImage
                  }, null, 8, ["name", "online", "url"]),
                  vue.createElementVNode("view", { class: "member-name" }, [
                    vue.createTextVNode(
                      vue.toDisplayString(member.showNickName) + " ",
                      1
                      /* TEXT */
                    ),
                    member.userId == $data.group.ownerId ? (vue.openBlock(), vue.createBlock(_component_uni_tag, {
                      key: 0,
                      text: "群主",
                      size: "small",
                      circle: "",
                      type: "error"
                    })) : vue.createCommentVNode("v-if", true),
                    member.userId == _ctx.userStore.userInfo.id ? (vue.openBlock(), vue.createBlock(_component_uni_tag, {
                      key: 1,
                      text: "我",
                      size: "small",
                      circle: ""
                    })) : vue.createCommentVNode("v-if", true)
                  ]),
                  vue.createElementVNode("view", { class: "member-kick" }, [
                    vue.withDirectives(vue.createElementVNode("button", {
                      type: "warn",
                      plain: "",
                      size: "mini",
                      onClick: vue.withModifiers(($event) => $options.onKickOut(member, idx), ["stop"])
                    }, "移出群聊", 8, ["onClick"]), [
                      [vue.vShow, $options.isOwner && !$options.isSelf(member.userId)]
                    ])
                  ])
                ], 8, ["onClick"])
              ])), [
                [vue.vShow, !$data.searchText || member.showNickName.includes($data.searchText)]
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  const PagesGroupGroupMember = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__scopeId", "data-v-8f3f7636"], ["__file", "C:/Java/box-im/im-uniapp/pages/group/group-member.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        signTextAlign: "right",
        userInfo: {}
      };
    },
    methods: {
      onSexChange(e) {
        this.userInfo.sex = e.detail.value;
      },
      onUnloadImageSuccess(file, res) {
        this.userInfo.headImage = res.data.originUrl;
        this.userInfo.headImageThumb = res.data.thumbUrl;
      },
      onSubmit() {
        this.$http({
          url: "/user/update",
          method: "PUT",
          data: this.userInfo
        }).then(() => {
          this.userStore.setUserInfo(this.userInfo);
          uni.showToast({
            title: "修改成功",
            icon: "none"
          });
        });
      },
      onLineChange(e) {
        this.signTextAlign = e.detail.lineCount > 1 ? "left" : "right";
      }
    },
    onLoad() {
      let mine = this.userStore.userInfo;
      this.userInfo = JSON.parse(JSON.stringify(mine));
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_image_upload = resolveEasycom(vue.resolveDynamicComponent("image-upload"), __easycom_1$1);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page mine-edit" }, [
      vue.createVNode(_component_nav_bar, { back: "" }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("修改我的信息")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("view", { class: "form" }, [
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "头像"),
          vue.createVNode(_component_image_upload, {
            class: "value",
            onSuccess: $options.onUnloadImageSuccess
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("image", {
                src: $data.userInfo.headImageThumb,
                class: "head-image"
              }, null, 8, ["src"])
            ]),
            _: 1
            /* STABLE */
          }, 8, ["onSuccess"])
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "账号"),
          vue.createElementVNode(
            "view",
            { class: "value" },
            vue.toDisplayString($data.userInfo.userName),
            1
            /* TEXT */
          )
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "昵称"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              class: "input",
              maxlength: "20",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.userInfo.nickName = $event),
              placeholder: "请输入您的昵称"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.userInfo.nickName]
          ])
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "性别"),
          vue.createElementVNode(
            "radio-group",
            {
              class: "radio-group",
              onChange: _cache[1] || (_cache[1] = (...args) => $options.onSexChange && $options.onSexChange(...args))
            },
            [
              vue.createElementVNode("radio", {
                class: "radio",
                value: 0,
                checked: $data.userInfo.sex == 0
              }, "男", 8, ["checked"]),
              vue.createElementVNode("radio", {
                class: "radio",
                value: 1,
                checked: $data.userInfo.sex == 1
              }, "女", 8, ["checked"])
            ],
            32
            /* NEED_HYDRATION */
          )
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "个性签名"),
          vue.withDirectives(vue.createElementVNode(
            "textarea",
            {
              class: "signature",
              maxlength: "128",
              "auto-height": "",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.userInfo.signature = $event),
              style: vue.normalizeStyle({ "text-align": $data.signTextAlign }),
              onLinechange: _cache[3] || (_cache[3] = (...args) => $options.onLineChange && $options.onLineChange(...args)),
              placeholder: "编辑个性签名,展示我的独特态度"
            },
            null,
            36
            /* STYLE, NEED_HYDRATION */
          ), [
            [vue.vModelText, $data.userInfo.signature]
          ])
        ])
      ]),
      vue.createElementVNode("button", {
        type: "primary",
        class: "bottom-btn",
        onClick: _cache[4] || (_cache[4] = ($event) => $options.onSubmit())
      }, "提交")
    ]);
  }
  const PagesMineMineEdit = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-27f2e930"], ["__file", "C:/Java/box-im/im-uniapp/pages/mine/mine-edit.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        formData: {
          oldPassword: "",
          newPassword: "",
          confirmPassword: ""
        },
        rules: {
          oldPassword: {
            rules: [{
              required: true,
              errorMessage: "请输入原密码"
            }]
          },
          newPassword: {
            rules: [{
              required: true,
              errorMessage: "请输入新密码"
            }, {
              validateFunction: function(rule, value, data, callback) {
                if (data.confirmPassword != data.newPassword) {
                  callback("两次输入的密码不一致");
                }
                if (data.newPassword == data.oldPassword) {
                  callback("新密码不能和原密码一致");
                }
                return true;
              }
            }]
          },
          confirmPassword: {
            rules: [{
              required: true,
              errorMessage: "请输入确认密码"
            }, {
              validateFunction: function(rule, value, data, callback) {
                if (data.confirmPassword != data.newPassword) {
                  callback("两次输入的密码不一致");
                }
                return true;
              }
            }]
          }
        }
      };
    },
    methods: {
      onSubmit() {
        this.$refs.form.validate().then((res) => {
          this.$http({
            url: "/modifyPwd",
            method: "PUT",
            data: this.formData
          }).then((res2) => {
            uni.showToast({
              title: "修改密码成功",
              icon: "none"
            });
            setTimeout(() => {
              uni.navigateBack();
            }, 1e3);
          });
        }).catch((err) => {
          formatAppLog("log", "at pages/mine/mine-password.vue:88", "表单错误信息：", err);
        });
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules);
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_nav_bar = resolveEasycom(vue.resolveDynamicComponent("nav-bar"), __easycom_0$4);
    const _component_uni_easyinput = resolveEasycom(vue.resolveDynamicComponent("uni-easyinput"), __easycom_1$3);
    const _component_uni_forms_item = resolveEasycom(vue.resolveDynamicComponent("uni-forms-item"), __easycom_2$3);
    const _component_uni_forms = resolveEasycom(vue.resolveDynamicComponent("uni-forms"), __easycom_3$4);
    const _component_uni_card = resolveEasycom(vue.resolveDynamicComponent("uni-card"), __easycom_4$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "page mine-password" }, [
      vue.createVNode(_component_nav_bar, { back: "" }, {
        default: vue.withCtx(() => [
          vue.createTextVNode("修改密码")
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createVNode(_component_uni_card, {
        "is-shadow": false,
        "is-full": "",
        border: false
      }, {
        default: vue.withCtx(() => [
          vue.createVNode(_component_uni_forms, {
            ref: "form",
            modelValue: $data.formData,
            "label-position": "top",
            "label-width": "100%"
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_uni_forms_item, {
                label: "原密码",
                name: "oldPassword"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    type: "password",
                    modelValue: $data.formData.oldPassword,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.formData.oldPassword = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_forms_item, {
                label: "新密码",
                name: "newPassword"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    type: "password",
                    modelValue: $data.formData.newPassword,
                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.formData.newPassword = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              }),
              vue.createVNode(_component_uni_forms_item, {
                label: "确认密码",
                name: "confirmPassword"
              }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_uni_easyinput, {
                    type: "password",
                    modelValue: $data.formData.confirmPassword,
                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.formData.confirmPassword = $event)
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["modelValue"])
        ]),
        _: 1
        /* STABLE */
      }),
      vue.createElementVNode("button", {
        class: "bottom-btn",
        type: "primary",
        onClick: _cache[3] || (_cache[3] = ($event) => $options.onSubmit())
      }, "提交")
    ]);
  }
  const PagesMineMinePassword = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "C:/Java/box-im/im-uniapp/pages/mine/mine-password.vue"]]);
  __definePage("pages/chat/chat", PagesChatChat);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("pages/friend/friend", PagesFriendFriend);
  __definePage("pages/group/group", PagesGroupGroup);
  __definePage("pages/mine/mine", PagesMineMine);
  __definePage("pages/common/user-info", PagesCommonUserInfo);
  __definePage("pages/chat/chat-box", PagesChatChatBox);
  __definePage("pages/chat/chat-private-video", PagesChatChatPrivateVideo);
  __definePage("pages/chat/chat-group-video", PagesChatChatGroupVideo);
  __definePage("pages/friend/friend-add", PagesFriendFriendAdd);
  __definePage("pages/group/group-info", PagesGroupGroupInfo);
  __definePage("pages/group/group-edit", PagesGroupGroupEdit);
  __definePage("pages/group/group-invite", PagesGroupGroupInvite);
  __definePage("pages/group/group-member", PagesGroupGroupMember);
  __definePage("pages/mine/mine-edit", PagesMineMineEdit);
  __definePage("pages/mine/mine-password", PagesMineMinePassword);
  let requestList = [];
  let isRefreshToken = false;
  const request = (options) => {
    const header = options.header || {};
    const loginInfo = uni.getStorageSync("loginInfo");
    if (loginInfo) {
      header.accessToken = loginInfo.accessToken;
    }
    return new Promise(function(resolve, reject) {
      uni.request({
        url: UNI_APP.BASE_URL + options.url,
        method: options.method || "GET",
        header,
        data: options.data || {},
        async success(res) {
          if (res.data.code == 200) {
            return resolve(res.data.data);
          } else if (res.data.code == 400) {
            getApp().$vm.exit();
          } else if (res.data.code == 401) {
            formatAppLog("log", "at common/request.js:26", "token失效，尝试重新获取");
            if (isRefreshToken) {
              requestList.push(() => {
                resolve(request(options));
              });
              return;
            }
            isRefreshToken = true;
            const res2 = await reqRefreshToken(loginInfo);
            if (!res2 || res2.data.code != 200) {
              requestList = [];
              isRefreshToken = false;
              formatAppLog("log", "at common/request.js:40", "刷新token失败");
              getApp().$vm.exit();
              return;
            }
            let newInfo = res2.data.data;
            uni.setStorageSync("loginInfo", newInfo);
            requestList.forEach((cb) => cb());
            requestList = [];
            isRefreshToken = false;
            return resolve(request(options));
          } else {
            uni.showToast({
              icon: "none",
              title: res.data.message,
              duration: 1500
            });
            return reject(res.data);
          }
        },
        fail(error2) {
          uni.showToast({
            title: "网络似乎有点不给力哟",
            icon: "none",
            duration: 1500
          });
          return reject(error2);
        }
      });
    });
  };
  const reqRefreshToken = (loginInfo) => {
    return new Promise(function(resolve, reject) {
      uni.request({
        method: "PUT",
        url: UNI_APP.BASE_URL + "/refreshToken",
        header: {
          refreshToken: loginInfo.refreshToken
        },
        success: (res) => {
          resolve(res);
        },
        fail: (res) => {
          reject(res);
        }
      });
    });
  };
  let isNormal = function(type) {
    return type >= 0 && type < 10;
  };
  let isStatus = function(type) {
    return type >= 10 && type < 20;
  };
  let isTip = function(type) {
    return type >= 20 && type < 30;
  };
  let isAction = function(type) {
    return type >= 40 && type < 50;
  };
  let isRtcPrivate = function(type) {
    return type >= 100 && type < 200;
  };
  let isRtcGroup = function(type) {
    return type >= 200 && type < 300;
  };
  const messageType = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    isAction,
    isNormal,
    isRtcGroup,
    isRtcPrivate,
    isStatus,
    isTip
  }, Symbol.toStringTag, { value: "Module" }));
  const MESSAGE_TYPE = {
    TEXT: 0,
    IMAGE: 1,
    FILE: 2,
    AUDIO: 3,
    VIDEO: 4,
    RECALL: 10,
    READED: 11,
    RECEIPT: 12,
    TIP_TIME: 20,
    TIP_TEXT: 21,
    LOADING: 30,
    ACT_RT_VOICE: 40,
    ACT_RT_VIDEO: 41,
    USER_BANNED: 50,
    RTC_CALL_VOICE: 100,
    RTC_CALL_VIDEO: 101,
    RTC_ACCEPT: 102,
    RTC_REJECT: 103,
    RTC_CANCEL: 104,
    RTC_FAILED: 105,
    RTC_HANDUP: 106,
    RTC_CANDIDATE: 107,
    RTC_GROUP_SETUP: 200,
    RTC_GROUP_ACCEPT: 201,
    RTC_GROUP_REJECT: 202,
    RTC_GROUP_FAILED: 203,
    RTC_GROUP_CANCEL: 204,
    RTC_GROUP_QUIT: 205,
    RTC_GROUP_INVITE: 206,
    RTC_GROUP_JOIN: 207,
    RTC_GROUP_OFFER: 208,
    RTC_GROUP_ANSWER: 209,
    RTC_GROUP_CANDIDATE: 210,
    RTC_GROUP_DEVICE: 211
  };
  const USER_STATE = {
    OFFLINE: 0,
    FREE: 1,
    BUSY: 2
  };
  const TERMINAL_TYPE = {
    WEB: 0,
    APP: 1
  };
  const MESSAGE_STATUS = {
    UNSEND: 0,
    SENDED: 1,
    RECALL: 2,
    READED: 3
  };
  const enums = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    MESSAGE_STATUS,
    MESSAGE_TYPE,
    TERMINAL_TYPE,
    USER_STATE
  }, Symbol.toStringTag, { value: "Module" }));
  let wsurl = "";
  let accessToken = "";
  let messageCallBack = null;
  let closeCallBack = null;
  let connectCallBack = null;
  let isConnect = false;
  let rec = null;
  let isInit = false;
  let lastConnectTime = /* @__PURE__ */ new Date();
  let init = () => {
    if (isInit) {
      return;
    }
    isInit = true;
    uni.onSocketOpen((res) => {
      formatAppLog("log", "at common/wssocket.js:18", "WebSocket连接已打开");
      isConnect = true;
      let loginInfo = {
        cmd: 0,
        data: {
          accessToken
        }
      };
      uni.sendSocketMessage({
        data: JSON.stringify(loginInfo)
      });
    });
    uni.onSocketMessage((res) => {
      let sendInfo = JSON.parse(res.data);
      if (sendInfo.cmd == 0) {
        heartCheck.start();
        connectCallBack && connectCallBack();
        formatAppLog("log", "at common/wssocket.js:37", "WebSocket登录成功");
      } else if (sendInfo.cmd == 1) {
        heartCheck.reset();
      } else {
        formatAppLog("log", "at common/wssocket.js:43", "接收到消息", sendInfo);
        messageCallBack && messageCallBack(sendInfo.cmd, sendInfo.data);
      }
    });
    uni.onSocketClose((res) => {
      formatAppLog("log", "at common/wssocket.js:49", "WebSocket连接关闭");
      isConnect = false;
      closeCallBack && closeCallBack(res);
    });
    uni.onSocketError((e) => {
      formatAppLog("log", "at common/wssocket.js:55", e);
      isConnect = false;
      closeCallBack && closeCallBack({ code: 1006 });
    });
  };
  let connect = (url2, token) => {
    wsurl = url2;
    accessToken = token;
    if (isConnect) {
      return;
    }
    lastConnectTime = /* @__PURE__ */ new Date();
    uni.connectSocket({
      url: wsurl,
      success: (res) => {
        formatAppLog("log", "at common/wssocket.js:72", "websocket连接成功");
      },
      fail: (e) => {
        formatAppLog("log", "at common/wssocket.js:75", e);
        formatAppLog("log", "at common/wssocket.js:76", "websocket连接失败，10s后重连");
        setTimeout(() => {
          connect();
        }, 1e4);
      }
    });
  };
  let reconnect = (wsurl2, accessToken2) => {
    formatAppLog("log", "at common/wssocket.js:86", "尝试重新连接");
    if (isConnect) {
      return;
    }
    let timeDiff = (/* @__PURE__ */ new Date()).getTime() - lastConnectTime.getTime();
    let delay = timeDiff < 1e4 ? 1e4 - timeDiff : 0;
    rec && clearTimeout(rec);
    rec = setTimeout(function() {
      connect(wsurl2, accessToken2);
    }, delay);
  };
  let close$1 = (code2) => {
    if (!isConnect) {
      return;
    }
    uni.closeSocket({
      code: code2,
      complete: (res) => {
        formatAppLog("log", "at common/wssocket.js:108", "关闭websocket连接");
        isConnect = false;
      },
      fail: (e) => {
        formatAppLog("log", "at common/wssocket.js:112", "关闭websocket连接失败", e);
      }
    });
  };
  var heartCheck = {
    timeout: 1e4,
    //每段时间发送一次心跳包 这里设置为30s
    timeoutObj: null,
    //延时发送消息对象（启动心跳新建这个对象，收到消息后重置对象）
    start: function() {
      if (isConnect) {
        formatAppLog("log", "at common/wssocket.js:124", "发送WebSocket心跳");
        let heartBeat = {
          cmd: 1,
          data: {}
        };
        uni.sendSocketMessage({
          data: JSON.stringify(heartBeat),
          fail(res) {
            formatAppLog("log", "at common/wssocket.js:132", res);
          }
        });
      }
    },
    reset: function() {
      clearTimeout(this.timeoutObj);
      this.timeoutObj = setTimeout(function() {
        heartCheck.start();
      }, this.timeout);
    }
  };
  function sendMessage(agentData) {
    uni.sendSocketMessage({
      data: agentData
    });
  }
  let onConnect = (callback) => {
    connectCallBack = callback;
  };
  function onMessage(callback) {
    messageCallBack = callback;
  }
  function onClose(callback) {
    closeCallBack = callback;
  }
  const socketApi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    close: close$1,
    connect,
    init,
    onClose,
    onConnect,
    onMessage,
    reconnect,
    sendMessage
  }, Symbol.toStringTag, { value: "Module" }));
  const _sfc_main$4 = {
    data() {
      return {
        isInit: false,
        // 是否已经初始化
        isExit: false,
        // 是否已退出
        audioTip: null,
        reconnecting: false
        // 正在重连标志
      };
    },
    methods: {
      init() {
        this.isExit = false;
        this.loadStore().then(() => {
          this.initWebSocket();
          this.isInit = true;
        }).catch((e) => {
          formatAppLog("log", "at App.vue:27", e);
          this.exit();
        });
      },
      initWebSocket() {
        let loginInfo = uni.getStorageSync("loginInfo");
        init();
        connect(UNI_APP.WS_URL, loginInfo.accessToken);
        onConnect(() => {
          if (this.reconnecting) {
            this.reconnecting = false;
            uni.showToast({
              title: "已重新连接",
              icon: "none"
            });
          }
          this.pullPrivateOfflineMessage(this.chatStore.privateMsgMaxId);
          this.pullGroupOfflineMessage(this.chatStore.groupMsgMaxId);
        });
        onMessage((cmd, msgInfo) => {
          if (cmd == 2) {
            uni.showModal({
              content: "您已在其他地方登录，将被强制下线",
              showCancel: false
            });
            this.exit();
          } else if (cmd == 3) {
            this.handlePrivateMessage(msgInfo);
          } else if (cmd == 4) {
            this.handleGroupMessage(msgInfo);
          } else if (cmd == 5) {
            this.handleSystemMessage(msgInfo);
          }
        });
        onClose((res) => {
          formatAppLog("log", "at App.vue:68", "ws断开", res);
          this.reconnectWs();
        });
      },
      loadStore() {
        return this.userStore.loadUser().then(() => {
          const promises = [];
          promises.push(this.friendStore.loadFriend());
          promises.push(this.groupStore.loadGroup());
          promises.push(this.chatStore.loadChat());
          promises.push(this.configStore.loadConfig());
          return Promise.all(promises);
        });
      },
      unloadStore() {
        this.friendStore.clear();
        this.groupStore.clear();
        this.chatStore.clear();
        this.configStore.clear();
        this.userStore.clear();
      },
      pullPrivateOfflineMessage(minId) {
        this.chatStore.setLoadingPrivateMsg(true);
        request({
          url: "/message/private/pullOfflineMessage?minId=" + minId,
          method: "GET"
        }).catch(() => {
          this.chatStore.setLoadingPrivateMsg(false);
        });
      },
      pullGroupOfflineMessage(minId) {
        this.chatStore.setLoadingGroupMsg(true);
        request({
          url: "/message/group/pullOfflineMessage?minId=" + minId,
          method: "GET"
        }).catch(() => {
          this.chatStore.setLoadingGroupMsg(false);
        });
      },
      handlePrivateMessage(msg) {
        if (msg.type == MESSAGE_TYPE.LOADING) {
          this.chatStore.setLoadingPrivateMsg(JSON.parse(msg.content));
          return;
        }
        if (msg.type == MESSAGE_TYPE.READED) {
          this.chatStore.resetUnreadCount({
            type: "PRIVATE",
            targetId: msg.recvId
          });
          return;
        }
        if (msg.type == MESSAGE_TYPE.RECEIPT) {
          this.chatStore.readedMessage({
            friendId: msg.sendId
          });
          return;
        }
        msg.selfSend = msg.sendId == this.userStore.userInfo.id;
        let friendId = msg.selfSend ? msg.recvId : msg.sendId;
        this.loadFriendInfo(friendId, (friend) => {
          this.insertPrivateMessage(friend, msg);
        });
      },
      insertPrivateMessage(friend, msg) {
        if (isRtcPrivate(msg.type)) {
          let delayTime = 100;
          if (msg.type == MESSAGE_TYPE.RTC_CALL_VOICE || msg.type == MESSAGE_TYPE.RTC_CALL_VIDEO) {
            let mode = msg.type == MESSAGE_TYPE.RTC_CALL_VIDEO ? "video" : "voice";
            let pages2 = getCurrentPages();
            let curPage = pages2[pages2.length - 1].route;
            if (curPage != "pages/chat/chat-private-video") {
              const friendInfo = encodeURIComponent(JSON.stringify(friend));
              uni.navigateTo({
                url: `/pages/chat/chat-private-video?mode=${mode}&friend=${friendInfo}&isHost=false`
              });
              delayTime = 500;
            }
          }
          setTimeout(() => {
            uni.$emit("WS_RTC_PRIVATE", msg);
          }, delayTime);
          return;
        }
        let chatInfo = {
          type: "PRIVATE",
          targetId: friend.id,
          showName: friend.nickName,
          headImage: friend.headImage
        };
        this.chatStore.openChat(chatInfo);
        this.chatStore.insertMessage(msg, chatInfo);
        this.playAudioTip();
      },
      handleGroupMessage(msg) {
        if (msg.type == MESSAGE_TYPE.LOADING) {
          this.chatStore.setLoadingGroupMsg(JSON.parse(msg.content));
          return;
        }
        if (msg.type == MESSAGE_TYPE.READED) {
          let chatInfo = {
            type: "GROUP",
            targetId: msg.groupId
          };
          this.chatStore.resetUnreadCount(chatInfo);
          return;
        }
        if (msg.type == MESSAGE_TYPE.RECEIPT) {
          let chatInfo = {
            type: "GROUP",
            targetId: msg.groupId
          };
          let msgInfo = {
            id: msg.id,
            groupId: msg.groupId,
            readedCount: msg.readedCount,
            receiptOk: msg.receiptOk
          };
          this.chatStore.updateMessage(msgInfo, chatInfo);
          return;
        }
        msg.selfSend = msg.sendId == this.userStore.userInfo.id;
        this.loadGroupInfo(msg.groupId, (group) => {
          this.insertGroupMessage(group, msg);
        });
      },
      handleSystemMessage(msg) {
        if (msg.type == MESSAGE_TYPE.USER_BANNED) {
          close$1(3099);
          uni.showModal({
            content: "您的账号已被管理员封禁，原因:" + msg.content,
            showCancel: false
          });
          this.exit();
        }
      },
      insertGroupMessage(group, msg) {
        if (isRtcGroup(msg.type)) {
          let delayTime = 100;
          if (msg.type == MESSAGE_TYPE.RTC_GROUP_SETUP) {
            let pages2 = getCurrentPages();
            let curPage = pages2[pages2.length - 1].route;
            if (curPage != "pages/chat/chat-group-video") {
              const userInfos = encodeURIComponent(msg.content);
              const inviterId = msg.sendId;
              const groupId = msg.groupId;
              uni.navigateTo({
                url: `/pages/chat/chat-group-video?groupId=${groupId}&isHost=false
									&inviterId=${inviterId}&userInfos=${userInfos}`
              });
              delayTime = 500;
            }
          }
          setTimeout(() => {
            uni.$emit("WS_RTC_GROUP", msg);
          }, delayTime);
          return;
        }
        let chatInfo = {
          type: "GROUP",
          targetId: group.id,
          showName: group.showGroupName,
          headImage: group.headImageThumb
        };
        this.chatStore.openChat(chatInfo);
        this.chatStore.insertMessage(msg, chatInfo);
        this.playAudioTip();
      },
      loadFriendInfo(id, callback) {
        let friend = this.friendStore.findFriend(id);
        if (friend) {
          callback(friend);
        } else {
          request({
            url: `/friend/find/${id}`,
            method: "GET"
          }).then((friend2) => {
            this.friendStore.addFriend(friend2);
            callback(friend2);
          });
        }
      },
      loadGroupInfo(id, callback) {
        let group = this.groupStore.findGroup(id);
        if (group) {
          callback(group);
        } else {
          request({
            url: `/group/find/${id}`,
            method: "GET"
          }).then((group2) => {
            this.groupStore.addGroup(group2);
            callback(group2);
          });
        }
      },
      exit() {
        formatAppLog("log", "at App.vue:301", "exit");
        this.isExit = true;
        close$1(3099);
        uni.removeStorageSync("loginInfo");
        uni.reLaunch({
          url: "/pages/login/login"
        });
        this.unloadStore();
      },
      playAudioTip() {
      },
      refreshToken(loginInfo) {
        return new Promise((resolve, reject) => {
          if (!loginInfo || !loginInfo.refreshToken) {
            reject();
            return;
          }
          request({
            url: "/refreshToken",
            method: "PUT",
            header: {
              refreshToken: loginInfo.refreshToken
            }
          }).then((newLoginInfo) => {
            uni.setStorageSync("loginInfo", newLoginInfo);
            resolve();
          }).catch((e) => {
            reject(e);
          });
        });
      },
      reconnectWs() {
        if (this.isExit) {
          return;
        }
        this.reconnecting = true;
        this.reloadUserInfo().then((userInfo) => {
          uni.showToast({
            title: "连接已断开，尝试重新连接...",
            icon: "none"
          });
          this.userStore.setUserInfo(userInfo);
          let loginInfo = uni.getStorageSync("loginInfo");
          reconnect(UNI_APP.WS_URL, loginInfo.accessToken);
        }).catch(() => {
          setTimeout(() => {
            this.reconnectWs();
          }, 5e3);
        });
      },
      reloadUserInfo() {
        return request({
          url: "/user/self",
          method: "GET"
        });
      },
      closeSplashscreen(delay) {
        setTimeout(() => {
          formatAppLog("log", "at App.vue:370", "plus.navigator.closeSplashscreen()");
          plus.navigator.closeSplashscreen();
        }, delay);
      }
    },
    onLaunch() {
      this.$mountStore();
      this.closeSplashscreen(1e3);
      let loginInfo = uni.getStorageSync("loginInfo");
      this.refreshToken(loginInfo).then(() => {
        this.init();
        this.closeSplashscreen(0);
      }).catch(() => {
        uni.navigateTo({
          url: "/pages/login/login"
        });
      });
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "C:/Java/box-im/im-uniapp/App.vue"]]);
  const emoTextList = [
    "憨笑",
    "媚眼",
    "开心",
    "坏笑",
    "可怜",
    "爱心",
    "笑哭",
    "拍手",
    "惊喜",
    "打气",
    "大哭",
    "流泪",
    "饥饿",
    "难受",
    "健身",
    "示爱",
    "色色",
    "眨眼",
    "暴怒",
    "惊恐",
    "思考",
    "头晕",
    "大吐",
    "酷笑",
    "翻滚",
    "享受",
    "鼻涕",
    "快乐",
    "雀跃",
    "微笑",
    "贪婪",
    "红心",
    "粉心",
    "星星",
    "大火",
    "眼睛",
    "音符",
    "叹号",
    "问号",
    "绿叶",
    "燃烧",
    "喇叭",
    "警告",
    "信封",
    "房子",
    "礼物",
    "点赞",
    "举手",
    "拍手",
    "点头",
    "摇头",
    "偷瞄",
    "庆祝",
    "疾跑",
    "打滚",
    "惊吓",
    "起跳"
  ];
  let transform = (content, extClass) => {
    return content.replace(/\#[\u4E00-\u9FA5]{1,3}\;/gi, (emoText) => {
      let word = emoText.replace(/\#|\;/gi, "");
      let idx = emoTextList.indexOf(word);
      if (idx == -1) {
        return emoText;
      }
      let path = textToPath(emoText);
      let img = `<img src="${path}" class="${extClass}"/>`;
      return img;
    });
  };
  let textToPath = (emoText) => {
    let word = emoText.replace(/\#|\;/gi, "");
    let idx = emoTextList.indexOf(word);
    return `/static/emoji/${idx}.gif`;
  };
  const emotion = {
    emoTextList,
    transform,
    textToPath
  };
  let toTimeText = (timeStamp, simple) => {
    var dateTime = new Date(timeStamp);
    var currentTime = Date.parse(/* @__PURE__ */ new Date());
    var timeDiff = currentTime - dateTime;
    var timeText = "";
    if (timeDiff <= 6e4) {
      timeText = "刚刚";
    } else if (timeDiff > 6e4 && timeDiff < 36e5) {
      timeText = Math.floor(timeDiff / 6e4) + "分钟前";
    } else if (timeDiff >= 36e5 && timeDiff < 864e5 && !isYestday(dateTime)) {
      timeText = formatDateTime(dateTime).substr(11, 5);
    } else if (isYestday(dateTime)) {
      timeText = "昨天" + formatDateTime(dateTime).substr(11, 5);
    } else if (isYear(dateTime)) {
      timeText = formatDateTime(dateTime).substr(5, simple ? 5 : 14);
    } else {
      timeText = formatDateTime(dateTime);
      if (simple) {
        timeText = timeText.substr(2, 8);
      }
    }
    return timeText;
  };
  let isYestday = (date2) => {
    var yesterday = new Date(/* @__PURE__ */ new Date() - 1e3 * 60 * 60 * 24);
    return yesterday.getYear() === date2.getYear() && yesterday.getMonth() === date2.getMonth() && yesterday.getDate() === date2.getDate();
  };
  let isYear = (date2) => {
    return date2.getYear() === (/* @__PURE__ */ new Date()).getYear();
  };
  let formatDateTime = (date2) => {
    if (date2 === "" || !date2) {
      return "";
    }
    var dateObject = new Date(date2);
    var y = dateObject.getFullYear();
    var m = dateObject.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    var d = dateObject.getDate();
    d = d < 10 ? "0" + d : d;
    var h = dateObject.getHours();
    h = h < 10 ? "0" + h : h;
    var minute = dateObject.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    var second = dateObject.getSeconds();
    second = second < 10 ? "0" + second : second;
    return y + "/" + m + "/" + d + " " + h + ":" + minute + ":" + second;
  };
  const date = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    formatDateTime,
    isYear,
    isYestday,
    toTimeText
  }, Symbol.toStringTag, { value: "Module" }));
  const { toString: toString$1 } = Object.prototype;
  function isArray(val) {
    return toString$1.call(val) === "[object Array]";
  }
  function isObject(val) {
    return val !== null && typeof val === "object";
  }
  function isDate(val) {
    return toString$1.call(val) === "[object Date]";
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
  }
  function forEach(obj, fn) {
    if (obj === null || typeof obj === "undefined") {
      return;
    }
    if (typeof obj !== "object") {
      obj = [obj];
    }
    if (isArray(obj)) {
      for (let i = 0, l = obj.length; i < l; i++) {
        fn.call(null, obj[i], i, obj);
      }
    } else {
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          fn.call(null, obj[key], key, obj);
        }
      }
    }
  }
  function isPlainObject$1(obj) {
    return Object.prototype.toString.call(obj) === "[object Object]";
  }
  function deepMerge() {
    const result = {};
    function assignValue(val, key) {
      if (typeof result[key] === "object" && typeof val === "object") {
        result[key] = deepMerge(result[key], val);
      } else if (typeof val === "object") {
        result[key] = deepMerge({}, val);
      } else {
        result[key] = val;
      }
    }
    for (let i = 0, l = arguments.length; i < l; i++) {
      forEach(arguments[i], assignValue);
    }
    return result;
  }
  function isUndefined(val) {
    return typeof val === "undefined";
  }
  function encode(val) {
    return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
  }
  function buildURL(url2, params) {
    if (!params) {
      return url2;
    }
    let serializedParams;
    if (isURLSearchParams(params)) {
      serializedParams = params.toString();
    } else {
      const parts = [];
      forEach(params, (val, key) => {
        if (val === null || typeof val === "undefined") {
          return;
        }
        if (isArray(val)) {
          key = `${key}[]`;
        } else {
          val = [val];
        }
        forEach(val, (v) => {
          if (isDate(v)) {
            v = v.toISOString();
          } else if (isObject(v)) {
            v = JSON.stringify(v);
          }
          parts.push(`${encode(key)}=${encode(v)}`);
        });
      });
      serializedParams = parts.join("&");
    }
    if (serializedParams) {
      const hashmarkIndex = url2.indexOf("#");
      if (hashmarkIndex !== -1) {
        url2 = url2.slice(0, hashmarkIndex);
      }
      url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url2;
  }
  function isAbsoluteURL(url2) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
  }
  function combineURLs(baseURL, relativeURL) {
    return relativeURL ? `${baseURL.replace(/\/+$/, "")}/${relativeURL.replace(/^\/+/, "")}` : baseURL;
  }
  function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) {
      return combineURLs(baseURL, requestedURL);
    }
    return requestedURL;
  }
  function settle(resolve, reject, response) {
    const { validateStatus } = response.config;
    const status = response.statusCode;
    if (status && (!validateStatus || validateStatus(status))) {
      resolve(response);
    } else {
      reject(response);
    }
  }
  const mergeKeys$1 = (keys, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      }
    });
    return config3;
  };
  const adapter = (config2) => new Promise((resolve, reject) => {
    const fullPath = buildURL(buildFullPath(config2.baseURL, config2.url), config2.params);
    const _config = {
      url: fullPath,
      header: config2.header,
      complete: (response) => {
        config2.fullPath = fullPath;
        response.config = config2;
        try {
          if (typeof response.data === "string") {
            response.data = JSON.parse(response.data);
          }
        } catch (e) {
        }
        settle(resolve, reject, response);
      }
    };
    let requestTask;
    if (config2.method === "UPLOAD") {
      delete _config.header["content-type"];
      delete _config.header["Content-Type"];
      const otherConfig = {
        filePath: config2.filePath,
        name: config2.name
      };
      const optionalKeys = [
        "files",
        "timeout",
        "formData"
      ];
      requestTask = uni.uploadFile({ ..._config, ...otherConfig, ...mergeKeys$1(optionalKeys, config2) });
    } else if (config2.method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        _config.timeout = config2.timeout;
      }
      requestTask = uni.downloadFile(_config);
    } else {
      const optionalKeys = [
        "data",
        "method",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      requestTask = uni.request({ ..._config, ...mergeKeys$1(optionalKeys, config2) });
    }
    if (config2.getTask) {
      config2.getTask(requestTask, config2);
    }
  });
  const dispatchRequest = (config2) => adapter(config2);
  function InterceptorManager() {
    this.handlers = [];
  }
  InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
      fulfilled,
      rejected
    });
    return this.handlers.length - 1;
  };
  InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  };
  InterceptorManager.prototype.forEach = function forEach2(fn) {
    this.handlers.forEach((h) => {
      if (h !== null) {
        fn(h);
      }
    });
  };
  const mergeKeys = (keys, globalsConfig, config2) => {
    const config3 = {};
    keys.forEach((prop) => {
      if (!isUndefined(config2[prop])) {
        config3[prop] = config2[prop];
      } else if (!isUndefined(globalsConfig[prop])) {
        config3[prop] = globalsConfig[prop];
      }
    });
    return config3;
  };
  const mergeConfig = (globalsConfig, config2 = {}) => {
    const method = config2.method || globalsConfig.method || "GET";
    let config3 = {
      baseURL: globalsConfig.baseURL || "",
      method,
      url: config2.url || "",
      params: config2.params || {},
      custom: { ...globalsConfig.custom || {}, ...config2.custom || {} },
      header: deepMerge(globalsConfig.header || {}, config2.header || {})
    };
    const defaultToConfig2Keys = ["getTask", "validateStatus"];
    config3 = { ...config3, ...mergeKeys(defaultToConfig2Keys, globalsConfig, config2) };
    if (method === "DOWNLOAD") {
      if (!isUndefined(config2.timeout)) {
        config3.timeout = config2.timeout;
      } else if (!isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else if (method === "UPLOAD") {
      delete config3.header["content-type"];
      delete config3.header["Content-Type"];
      const uploadKeys = [
        "files",
        "filePath",
        "name",
        "timeout",
        "formData"
      ];
      uploadKeys.forEach((prop) => {
        if (!isUndefined(config2[prop])) {
          config3[prop] = config2[prop];
        }
      });
      if (isUndefined(config3.timeout) && !isUndefined(globalsConfig.timeout)) {
        config3.timeout = globalsConfig.timeout;
      }
    } else {
      const defaultsKeys = [
        "data",
        "timeout",
        "dataType",
        "responseType",
        "sslVerify",
        "firstIpv4"
      ];
      config3 = { ...config3, ...mergeKeys(defaultsKeys, globalsConfig, config2) };
    }
    return config3;
  };
  const defaults = {
    baseURL: "",
    header: {},
    method: "GET",
    dataType: "json",
    responseType: "text",
    custom: {},
    timeout: 6e4,
    sslVerify: true,
    firstIpv4: false,
    validateStatus: function validateStatus(status) {
      return status >= 200 && status < 300;
    }
  };
  var clone = function() {
    function _instanceof(obj, type) {
      return type != null && obj instanceof type;
    }
    var nativeMap;
    try {
      nativeMap = Map;
    } catch (_) {
      nativeMap = function() {
      };
    }
    var nativeSet;
    try {
      nativeSet = Set;
    } catch (_) {
      nativeSet = function() {
      };
    }
    var nativePromise;
    try {
      nativePromise = Promise;
    } catch (_) {
      nativePromise = function() {
      };
    }
    function clone2(parent, circular, depth, prototype, includeNonEnumerable) {
      if (typeof circular === "object") {
        depth = circular.depth;
        prototype = circular.prototype;
        includeNonEnumerable = circular.includeNonEnumerable;
        circular = circular.circular;
      }
      var allParents = [];
      var allChildren = [];
      var useBuffer = typeof Buffer != "undefined";
      if (typeof circular == "undefined")
        circular = true;
      if (typeof depth == "undefined")
        depth = Infinity;
      function _clone(parent2, depth2) {
        if (parent2 === null)
          return null;
        if (depth2 === 0)
          return parent2;
        var child;
        var proto;
        if (typeof parent2 != "object") {
          return parent2;
        }
        if (_instanceof(parent2, nativeMap)) {
          child = new nativeMap();
        } else if (_instanceof(parent2, nativeSet)) {
          child = new nativeSet();
        } else if (_instanceof(parent2, nativePromise)) {
          child = new nativePromise(function(resolve, reject) {
            parent2.then(function(value) {
              resolve(_clone(value, depth2 - 1));
            }, function(err) {
              reject(_clone(err, depth2 - 1));
            });
          });
        } else if (clone2.__isArray(parent2)) {
          child = [];
        } else if (clone2.__isRegExp(parent2)) {
          child = new RegExp(parent2.source, __getRegExpFlags(parent2));
          if (parent2.lastIndex)
            child.lastIndex = parent2.lastIndex;
        } else if (clone2.__isDate(parent2)) {
          child = new Date(parent2.getTime());
        } else if (useBuffer && Buffer.isBuffer(parent2)) {
          if (Buffer.from) {
            child = Buffer.from(parent2);
          } else {
            child = new Buffer(parent2.length);
            parent2.copy(child);
          }
          return child;
        } else if (_instanceof(parent2, Error)) {
          child = Object.create(parent2);
        } else {
          if (typeof prototype == "undefined") {
            proto = Object.getPrototypeOf(parent2);
            child = Object.create(proto);
          } else {
            child = Object.create(prototype);
            proto = prototype;
          }
        }
        if (circular) {
          var index2 = allParents.indexOf(parent2);
          if (index2 != -1) {
            return allChildren[index2];
          }
          allParents.push(parent2);
          allChildren.push(child);
        }
        if (_instanceof(parent2, nativeMap)) {
          parent2.forEach(function(value, key) {
            var keyChild = _clone(key, depth2 - 1);
            var valueChild = _clone(value, depth2 - 1);
            child.set(keyChild, valueChild);
          });
        }
        if (_instanceof(parent2, nativeSet)) {
          parent2.forEach(function(value) {
            var entryChild = _clone(value, depth2 - 1);
            child.add(entryChild);
          });
        }
        for (var i in parent2) {
          var attrs = Object.getOwnPropertyDescriptor(parent2, i);
          if (attrs) {
            child[i] = _clone(parent2[i], depth2 - 1);
          }
          try {
            var objProperty = Object.getOwnPropertyDescriptor(parent2, i);
            if (objProperty.set === "undefined") {
              continue;
            }
            child[i] = _clone(parent2[i], depth2 - 1);
          } catch (e) {
            if (e instanceof TypeError) {
              continue;
            } else if (e instanceof ReferenceError) {
              continue;
            }
          }
        }
        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(parent2);
          for (var i = 0; i < symbols.length; i++) {
            var symbol = symbols[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, symbol);
            if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
              continue;
            }
            child[symbol] = _clone(parent2[symbol], depth2 - 1);
            Object.defineProperty(child, symbol, descriptor);
          }
        }
        if (includeNonEnumerable) {
          var allPropertyNames = Object.getOwnPropertyNames(parent2);
          for (var i = 0; i < allPropertyNames.length; i++) {
            var propertyName = allPropertyNames[i];
            var descriptor = Object.getOwnPropertyDescriptor(parent2, propertyName);
            if (descriptor && descriptor.enumerable) {
              continue;
            }
            child[propertyName] = _clone(parent2[propertyName], depth2 - 1);
            Object.defineProperty(child, propertyName, descriptor);
          }
        }
        return child;
      }
      return _clone(parent, depth);
    }
    clone2.clonePrototype = function clonePrototype(parent) {
      if (parent === null)
        return null;
      var c = function() {
      };
      c.prototype = parent;
      return new c();
    };
    function __objToStr(o) {
      return Object.prototype.toString.call(o);
    }
    clone2.__objToStr = __objToStr;
    function __isDate(o) {
      return typeof o === "object" && __objToStr(o) === "[object Date]";
    }
    clone2.__isDate = __isDate;
    function __isArray(o) {
      return typeof o === "object" && __objToStr(o) === "[object Array]";
    }
    clone2.__isArray = __isArray;
    function __isRegExp(o) {
      return typeof o === "object" && __objToStr(o) === "[object RegExp]";
    }
    clone2.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
      var flags = "";
      if (re.global)
        flags += "g";
      if (re.ignoreCase)
        flags += "i";
      if (re.multiline)
        flags += "m";
      return flags;
    }
    clone2.__getRegExpFlags = __getRegExpFlags;
    return clone2;
  }();
  class Request {
    /**
    * @param {Object} arg - 全局配置
    * @param {String} arg.baseURL - 全局根路径
    * @param {Object} arg.header - 全局header
    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
    * @param {String} arg.dataType = [json] - 全局默认的dataType
    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
    * @param {Object} arg.custom - 全局默认的自定义参数
    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
    */
    constructor(arg = {}) {
      if (!isPlainObject$1(arg)) {
        arg = {};
        formatAppLog("warn", "at uni_modules/uview-plus/libs/luch-request/core/Request.js:39", "设置全局参数必须接收一个Object");
      }
      this.config = clone({ ...defaults, ...arg });
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }
    /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */
    setConfig(f) {
      this.config = f(this.config);
    }
    middleware(config2) {
      config2 = mergeConfig(this.config, config2);
      const chain = [dispatchRequest, void 0];
      let promise2 = Promise.resolve(config2);
      this.interceptors.request.forEach((interceptor) => {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });
      this.interceptors.response.forEach((interceptor) => {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });
      while (chain.length) {
        promise2 = promise2.then(chain.shift(), chain.shift());
      }
      return promise2;
    }
    /**
    * @Function
    * @param {Object} config - 请求配置项
    * @prop {String} options.url - 请求路径
    * @prop {Object} options.data - 请求参数
    * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
    * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
    * @prop {Object} [options.header = config.header] - 请求header
    * @prop {Object} [options.method = config.method] - 请求方法
    * @returns {Promise<unknown>}
    */
    request(config2 = {}) {
      return this.middleware(config2);
    }
    get(url2, options = {}) {
      return this.middleware({
        url: url2,
        method: "GET",
        ...options
      });
    }
    post(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "POST",
        ...options
      });
    }
    put(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "PUT",
        ...options
      });
    }
    delete(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "DELETE",
        ...options
      });
    }
    options(url2, data, options = {}) {
      return this.middleware({
        url: url2,
        data,
        method: "OPTIONS",
        ...options
      });
    }
    upload(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "UPLOAD";
      return this.middleware(config2);
    }
    download(url2, config2 = {}) {
      config2.url = url2;
      config2.method = "DOWNLOAD";
      return this.middleware(config2);
    }
  }
  function colorGradient(startColor = "rgb(0, 0, 0)", endColor = "rgb(255, 255, 255)", step = 10) {
    const startRGB = hexToRgb(startColor, false);
    const startR = startRGB[0];
    const startG = startRGB[1];
    const startB = startRGB[2];
    const endRGB = hexToRgb(endColor, false);
    const endR = endRGB[0];
    const endG = endRGB[1];
    const endB = endRGB[2];
    const sR = (endR - startR) / step;
    const sG = (endG - startG) / step;
    const sB = (endB - startB) / step;
    const colorArr = [];
    for (let i = 0; i < step; i++) {
      let hex = rgbToHex(`rgb(${Math.round(sR * i + startR)},${Math.round(sG * i + startG)},${Math.round(sB * i + startB)})`);
      if (i === 0)
        hex = rgbToHex(startColor);
      if (i === step - 1)
        hex = rgbToHex(endColor);
      colorArr.push(hex);
    }
    return colorArr;
  }
  function hexToRgb(sColor, str = true) {
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    sColor = String(sColor).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      if (!str) {
        return sColorChange;
      }
      return `rgb(${sColorChange[0]},${sColorChange[1]},${sColorChange[2]})`;
    }
    if (/^(rgb|RGB)/.test(sColor)) {
      const arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      return arr.map((val) => Number(val));
    }
    return sColor;
  }
  function rgbToHex(rgb) {
    const _this = rgb;
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    if (/^(rgb|RGB)/.test(_this)) {
      const aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
      let strHex = "#";
      for (let i = 0; i < aColor.length; i++) {
        let hex = Number(aColor[i]).toString(16);
        hex = String(hex).length == 1 ? `${0}${hex}` : hex;
        if (hex === "0") {
          hex += hex;
        }
        strHex += hex;
      }
      if (strHex.length !== 7) {
        strHex = _this;
      }
      return strHex;
    }
    if (reg.test(_this)) {
      const aNum = _this.replace(/#/, "").split("");
      if (aNum.length === 6) {
        return _this;
      }
      if (aNum.length === 3) {
        let numHex = "#";
        for (let i = 0; i < aNum.length; i += 1) {
          numHex += aNum[i] + aNum[i];
        }
        return numHex;
      }
    } else {
      return _this;
    }
  }
  function colorToRgba(color2, alpha) {
    color2 = rgbToHex(color2);
    const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    let sColor = String(color2).toLowerCase();
    if (sColor && reg.test(sColor)) {
      if (sColor.length === 4) {
        let sColorNew = "#";
        for (let i = 1; i < 4; i += 1) {
          sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
        }
        sColor = sColorNew;
      }
      const sColorChange = [];
      for (let i = 1; i < 7; i += 2) {
        sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
      }
      return `rgba(${sColorChange.join(",")},${alpha})`;
    }
    return sColor;
  }
  const colorGradient$1 = {
    colorGradient,
    hexToRgb,
    rgbToHex,
    colorToRgba
  };
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  const zIndex = {
    toast: 10090,
    noNetwork: 10080,
    // popup包含popup，actionsheet，keyboard，picker的值
    popup: 10075,
    mask: 10070,
    navbar: 980,
    topTips: 975,
    sticky: 970,
    indexListSticky: 965
  };
  let platform = "none";
  platform = "vue3";
  platform = "plus";
  const platform$1 = platform;
  const http = new Request();
  let themeType = ["primary", "success", "error", "warning", "info"];
  function setConfig(configs) {
    index.shallowMerge(config, configs.config || {});
    index.shallowMerge(props$4, configs.props || {});
    index.shallowMerge(color, configs.color || {});
    index.shallowMerge(zIndex, configs.zIndex || {});
  }
  index.setConfig = setConfig;
  const $u = {
    route,
    date: index.timeFormat,
    // 另名date
    colorGradient: colorGradient$1.colorGradient,
    hexToRgb: colorGradient$1.hexToRgb,
    rgbToHex: colorGradient$1.rgbToHex,
    colorToRgba: colorGradient$1.colorToRgba,
    test,
    type: themeType,
    http,
    config,
    // uview-plus配置信息相关，比如版本号
    zIndex,
    debounce,
    throttle,
    mixin,
    mpMixin,
    props: props$4,
    ...index,
    color,
    platform: platform$1
  };
  uni.$u = $u;
  const install = (Vue2) => {
    Vue2.config.globalProperties.$u = $u;
    Vue2.mixin(mixin);
  };
  const uviewPlus = {
    install
  };
  var isVue2 = false;
  function set(target, key, val) {
    if (Array.isArray(target)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      return val;
    }
    target[key] = val;
    return val;
  }
  function del(target, key) {
    if (Array.isArray(target)) {
      target.splice(key, 1);
      return;
    }
    delete target[key];
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  let supported;
  let perf;
  function isPerformanceSupported() {
    var _a;
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else if (typeof global !== "undefined" && ((_a = global.perf_hooks) === null || _a === void 0 ? void 0 : _a.performance)) {
      supported = true;
      perf = global.perf_hooks.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function now() {
    return isPerformanceSupported() ? perf.now() : Date.now();
  }
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = Object.assign({}, defaultSettings);
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        },
        now() {
          return now();
        }
      };
      if (hook) {
        hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
          if (pluginId === this.plugin.id) {
            this.fallbacks.setSettings(value);
          }
        });
      }
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const descriptor = pluginDescriptor;
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && descriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(descriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor: descriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
   * pinia v2.1.7
   * (c) 2023 Eduardo San Martin Morote
   * @license MIT
   */
  let activePinia;
  const setActivePinia = (pinia2) => activePinia = pinia2;
  const getActivePinia = () => vue.hasInjectionContext() && vue.inject(piniaSymbol) || activePinia;
  const piniaSymbol = Symbol("pinia");
  function isPlainObject(o) {
    return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
  }
  var MutationType;
  (function(MutationType2) {
    MutationType2["direct"] = "direct";
    MutationType2["patchObject"] = "patch object";
    MutationType2["patchFunction"] = "patch function";
  })(MutationType || (MutationType = {}));
  const IS_CLIENT = typeof window !== "undefined";
  const USE_DEVTOOLS = IS_CLIENT;
  const _global = /* @__PURE__ */ (() => typeof window === "object" && window.window === window ? window : typeof self === "object" && self.self === self ? self : typeof global === "object" && global.global === global ? global : typeof globalThis === "object" ? globalThis : { HTMLElement: null })();
  function bom(blob, { autoBom = false } = {}) {
    if (autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
      return new Blob([String.fromCharCode(65279), blob], { type: blob.type });
    }
    return blob;
  }
  function download(url2, name, opts) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url2);
    xhr.responseType = "blob";
    xhr.onload = function() {
      saveAs(xhr.response, name, opts);
    };
    xhr.onerror = function() {
      console.error("could not download file");
    };
    xhr.send();
  }
  function corsEnabled(url2) {
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", url2, false);
    try {
      xhr.send();
    } catch (e) {
    }
    return xhr.status >= 200 && xhr.status <= 299;
  }
  function click(node) {
    try {
      node.dispatchEvent(new MouseEvent("click"));
    } catch (e) {
      const evt = document.createEvent("MouseEvents");
      evt.initMouseEvent("click", true, true, window, 0, 0, 0, 80, 20, false, false, false, false, 0, null);
      node.dispatchEvent(evt);
    }
  }
  const _navigator = typeof navigator === "object" ? navigator : { userAgent: "" };
  const isMacOSWebView = /* @__PURE__ */ (() => /Macintosh/.test(_navigator.userAgent) && /AppleWebKit/.test(_navigator.userAgent) && !/Safari/.test(_navigator.userAgent))();
  const saveAs = !IS_CLIENT ? () => {
  } : (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement !== "undefined" && "download" in HTMLAnchorElement.prototype && !isMacOSWebView ? downloadSaveAs : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in _navigator ? msSaveAs : (
        // Fallback to using FileReader and a popup
        fileSaverSaveAs
      )
    )
  );
  function downloadSaveAs(blob, name = "download", opts) {
    const a = document.createElement("a");
    a.download = name;
    a.rel = "noopener";
    if (typeof blob === "string") {
      a.href = blob;
      if (a.origin !== location.origin) {
        if (corsEnabled(a.href)) {
          download(blob, name, opts);
        } else {
          a.target = "_blank";
          click(a);
        }
      } else {
        click(a);
      }
    } else {
      a.href = URL.createObjectURL(blob);
      setTimeout(function() {
        URL.revokeObjectURL(a.href);
      }, 4e4);
      setTimeout(function() {
        click(a);
      }, 0);
    }
  }
  function msSaveAs(blob, name = "download", opts) {
    if (typeof blob === "string") {
      if (corsEnabled(blob)) {
        download(blob, name, opts);
      } else {
        const a = document.createElement("a");
        a.href = blob;
        a.target = "_blank";
        setTimeout(function() {
          click(a);
        });
      }
    } else {
      navigator.msSaveOrOpenBlob(bom(blob, opts), name);
    }
  }
  function fileSaverSaveAs(blob, name, opts, popup2) {
    popup2 = popup2 || open("", "_blank");
    if (popup2) {
      popup2.document.title = popup2.document.body.innerText = "downloading...";
    }
    if (typeof blob === "string")
      return download(blob, name, opts);
    const force = blob.type === "application/octet-stream";
    const isSafari = /constructor/i.test(String(_global.HTMLElement)) || "safari" in _global;
    const isChromeIOS = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((isChromeIOS || force && isSafari || isMacOSWebView) && typeof FileReader !== "undefined") {
      const reader = new FileReader();
      reader.onloadend = function() {
        let url2 = reader.result;
        if (typeof url2 !== "string") {
          popup2 = null;
          throw new Error("Wrong reader.result type");
        }
        url2 = isChromeIOS ? url2 : url2.replace(/^data:[^;]*;/, "data:attachment/file;");
        if (popup2) {
          popup2.location.href = url2;
        } else {
          location.assign(url2);
        }
        popup2 = null;
      };
      reader.readAsDataURL(blob);
    } else {
      const url2 = URL.createObjectURL(blob);
      if (popup2)
        popup2.location.assign(url2);
      else
        location.href = url2;
      popup2 = null;
      setTimeout(function() {
        URL.revokeObjectURL(url2);
      }, 4e4);
    }
  }
  function toastMessage(message, type) {
    const piniaMessage = "🍍 " + message;
    if (typeof __VUE_DEVTOOLS_TOAST__ === "function") {
      __VUE_DEVTOOLS_TOAST__(piniaMessage, type);
    } else if (type === "error") {
      console.error(piniaMessage);
    } else if (type === "warn") {
      console.warn(piniaMessage);
    } else {
      console.log(piniaMessage);
    }
  }
  function isPinia(o) {
    return "_a" in o && "install" in o;
  }
  function checkClipboardAccess() {
    if (!("clipboard" in navigator)) {
      toastMessage(`Your browser doesn't support the Clipboard API`, "error");
      return true;
    }
  }
  function checkNotFocusedError(error2) {
    if (error2 instanceof Error && error2.message.toLowerCase().includes("document is not focused")) {
      toastMessage('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn");
      return true;
    }
    return false;
  }
  async function actionGlobalCopyState(pinia2) {
    if (checkClipboardAccess())
      return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(pinia2.state.value));
      toastMessage("Global state copied to clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to serialize the state. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalPasteState(pinia2) {
    if (checkClipboardAccess())
      return;
    try {
      loadStoresState(pinia2, JSON.parse(await navigator.clipboard.readText()));
      toastMessage("Global state pasted from clipboard.");
    } catch (error2) {
      if (checkNotFocusedError(error2))
        return;
      toastMessage(`Failed to deserialize the state from clipboard. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  async function actionGlobalSaveState(pinia2) {
    try {
      saveAs(new Blob([JSON.stringify(pinia2.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (error2) {
      toastMessage(`Failed to export the state as JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  let fileInput;
  function getFileOpener() {
    if (!fileInput) {
      fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = ".json";
    }
    function openFile() {
      return new Promise((resolve, reject) => {
        fileInput.onchange = async () => {
          const files = fileInput.files;
          if (!files)
            return resolve(null);
          const file = files.item(0);
          if (!file)
            return resolve(null);
          return resolve({ text: await file.text(), file });
        };
        fileInput.oncancel = () => resolve(null);
        fileInput.onerror = reject;
        fileInput.click();
      });
    }
    return openFile;
  }
  async function actionGlobalOpenStateFile(pinia2) {
    try {
      const open2 = getFileOpener();
      const result = await open2();
      if (!result)
        return;
      const { text, file } = result;
      loadStoresState(pinia2, JSON.parse(text));
      toastMessage(`Global state imported from "${file.name}".`);
    } catch (error2) {
      toastMessage(`Failed to import the state from JSON. Check the console for more details.`, "error");
      console.error(error2);
    }
  }
  function loadStoresState(pinia2, state) {
    for (const key in state) {
      const storeState = pinia2.state.value[key];
      if (storeState) {
        Object.assign(storeState, state[key]);
      } else {
        pinia2.state.value[key] = state[key];
      }
    }
  }
  function formatDisplay(display) {
    return {
      _custom: {
        display
      }
    };
  }
  const PINIA_ROOT_LABEL = "🍍 Pinia (root)";
  const PINIA_ROOT_ID = "_root";
  function formatStoreForInspectorTree(store) {
    return isPinia(store) ? {
      id: PINIA_ROOT_ID,
      label: PINIA_ROOT_LABEL
    } : {
      id: store.$id,
      label: store.$id
    };
  }
  function formatStoreForInspectorState(store) {
    if (isPinia(store)) {
      const storeNames = Array.from(store._s.keys());
      const storeMap = store._s;
      const state2 = {
        state: storeNames.map((storeId) => ({
          editable: true,
          key: storeId,
          value: store.state.value[storeId]
        })),
        getters: storeNames.filter((id) => storeMap.get(id)._getters).map((id) => {
          const store2 = storeMap.get(id);
          return {
            editable: false,
            key: id,
            value: store2._getters.reduce((getters, key) => {
              getters[key] = store2[key];
              return getters;
            }, {})
          };
        })
      };
      return state2;
    }
    const state = {
      state: Object.keys(store.$state).map((key) => ({
        editable: true,
        key,
        value: store.$state[key]
      }))
    };
    if (store._getters && store._getters.length) {
      state.getters = store._getters.map((getterName) => ({
        editable: false,
        key: getterName,
        value: store[getterName]
      }));
    }
    if (store._customProperties.size) {
      state.customProperties = Array.from(store._customProperties).map((key) => ({
        editable: true,
        key,
        value: store[key]
      }));
    }
    return state;
  }
  function formatEventData(events) {
    if (!events)
      return {};
    if (Array.isArray(events)) {
      return events.reduce((data, event) => {
        data.keys.push(event.key);
        data.operations.push(event.type);
        data.oldValue[event.key] = event.oldValue;
        data.newValue[event.key] = event.newValue;
        return data;
      }, {
        oldValue: {},
        keys: [],
        operations: [],
        newValue: {}
      });
    } else {
      return {
        operation: formatDisplay(events.type),
        key: formatDisplay(events.key),
        oldValue: events.oldValue,
        newValue: events.newValue
      };
    }
  }
  function formatMutationType(type) {
    switch (type) {
      case MutationType.direct:
        return "mutation";
      case MutationType.patchFunction:
        return "$patch";
      case MutationType.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let isTimelineActive = true;
  const componentStateTypes = [];
  const MUTATIONS_LAYER_ID = "pinia:mutations";
  const INSPECTOR_ID = "pinia";
  const { assign: assign$1 } = Object;
  const getStoreType = (id) => "🍍 " + id;
  function registerPiniaDevtools(app, pinia2) {
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app
    }, (api) => {
      if (typeof api.now !== "function") {
        toastMessage("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html.");
      }
      api.addTimelineLayer({
        id: MUTATIONS_LAYER_ID,
        label: `Pinia 🍍`,
        color: 15064968
      });
      api.addInspector({
        id: INSPECTOR_ID,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              actionGlobalCopyState(pinia2);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await actionGlobalPasteState(pinia2);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              actionGlobalSaveState(pinia2);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await actionGlobalOpenStateFile(pinia2);
              api.sendInspectorTree(INSPECTOR_ID);
              api.sendInspectorState(INSPECTOR_ID);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: 'Reset the state (with "$reset")',
            action: (nodeId) => {
              const store = pinia2._s.get(nodeId);
              if (!store) {
                toastMessage(`Cannot reset "${nodeId}" store because it wasn't found.`, "warn");
              } else if (typeof store.$reset !== "function") {
                toastMessage(`Cannot reset "${nodeId}" store because it doesn't have a "$reset" method implemented.`, "warn");
              } else {
                store.$reset();
                toastMessage(`Store "${nodeId}" reset.`);
              }
            }
          }
        ]
      });
      api.on.inspectComponent((payload, ctx) => {
        const proxy = payload.componentInstance && payload.componentInstance.proxy;
        if (proxy && proxy._pStores) {
          const piniaStores = payload.componentInstance.proxy._pStores;
          Object.values(piniaStores).forEach((store) => {
            payload.instanceData.state.push({
              type: getStoreType(store.$id),
              key: "state",
              editable: true,
              value: store._isOptionsAPI ? {
                _custom: {
                  value: vue.toRaw(store.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => store.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(store.$state).reduce((state, key) => {
                  state[key] = store.$state[key];
                  return state;
                }, {})
              )
            });
            if (store._getters && store._getters.length) {
              payload.instanceData.state.push({
                type: getStoreType(store.$id),
                key: "getters",
                editable: false,
                value: store._getters.reduce((getters, key) => {
                  try {
                    getters[key] = store[key];
                  } catch (error2) {
                    getters[key] = error2;
                  }
                  return getters;
                }, {})
              });
            }
          });
        }
      });
      api.on.getInspectorTree((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          let stores = [pinia2];
          stores = stores.concat(Array.from(pinia2._s.values()));
          payload.rootNodes = (payload.filter ? stores.filter((store) => "$id" in store ? store.$id.toLowerCase().includes(payload.filter.toLowerCase()) : PINIA_ROOT_LABEL.toLowerCase().includes(payload.filter.toLowerCase())) : stores).map(formatStoreForInspectorTree);
        }
      });
      api.on.getInspectorState((payload) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia2 : pinia2._s.get(payload.nodeId);
          if (!inspectedStore) {
            return;
          }
          if (inspectedStore) {
            payload.state = formatStoreForInspectorState(inspectedStore);
          }
        }
      });
      api.on.editInspectorState((payload, ctx) => {
        if (payload.app === app && payload.inspectorId === INSPECTOR_ID) {
          const inspectedStore = payload.nodeId === PINIA_ROOT_ID ? pinia2 : pinia2._s.get(payload.nodeId);
          if (!inspectedStore) {
            return toastMessage(`store "${payload.nodeId}" not found`, "error");
          }
          const { path } = payload;
          if (!isPinia(inspectedStore)) {
            if (path.length !== 1 || !inspectedStore._customProperties.has(path[0]) || path[0] in inspectedStore.$state) {
              path.unshift("$state");
            }
          } else {
            path.unshift("state");
          }
          isTimelineActive = false;
          payload.set(inspectedStore, path, payload.state.value);
          isTimelineActive = true;
        }
      });
      api.on.editComponentState((payload) => {
        if (payload.type.startsWith("🍍")) {
          const storeId = payload.type.replace(/^🍍\s*/, "");
          const store = pinia2._s.get(storeId);
          if (!store) {
            return toastMessage(`store "${storeId}" not found`, "error");
          }
          const { path } = payload;
          if (path[0] !== "state") {
            return toastMessage(`Invalid path for store "${storeId}":
${path}
Only state can be modified.`);
          }
          path[0] = "$state";
          isTimelineActive = false;
          payload.set(store, path, payload.state.value);
          isTimelineActive = true;
        }
      });
    });
  }
  function addStoreToDevtools(app, store) {
    if (!componentStateTypes.includes(getStoreType(store.$id))) {
      componentStateTypes.push(getStoreType(store.$id));
    }
    setupDevtoolsPlugin({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes,
      app,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: true
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (api) => {
      const now2 = typeof api.now === "function" ? api.now.bind(api) : Date.now;
      store.$onAction(({ after, onError, name, args }) => {
        const groupId = runningActionId++;
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🛫 " + name,
            subtitle: "start",
            data: {
              store: formatDisplay(store.$id),
              action: formatDisplay(name),
              args
            },
            groupId
          }
        });
        after((result) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              title: "🛬 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                result
              },
              groupId
            }
          });
        });
        onError((error2) => {
          activeAction = void 0;
          api.addTimelineEvent({
            layerId: MUTATIONS_LAYER_ID,
            event: {
              time: now2(),
              logType: "error",
              title: "💥 " + name,
              subtitle: "end",
              data: {
                store: formatDisplay(store.$id),
                action: formatDisplay(name),
                args,
                error: error2
              },
              groupId
            }
          });
        });
      }, true);
      store._customProperties.forEach((name) => {
        vue.watch(() => vue.unref(store[name]), (newValue, oldValue) => {
          api.notifyComponentUpdate();
          api.sendInspectorState(INSPECTOR_ID);
          if (isTimelineActive) {
            api.addTimelineEvent({
              layerId: MUTATIONS_LAYER_ID,
              event: {
                time: now2(),
                title: "Change",
                subtitle: name,
                data: {
                  newValue,
                  oldValue
                },
                groupId: activeAction
              }
            });
          }
        }, { deep: true });
      });
      store.$subscribe(({ events, type }, state) => {
        api.notifyComponentUpdate();
        api.sendInspectorState(INSPECTOR_ID);
        if (!isTimelineActive)
          return;
        const eventData = {
          time: now2(),
          title: formatMutationType(type),
          data: assign$1({ store: formatDisplay(store.$id) }, formatEventData(events)),
          groupId: activeAction
        };
        if (type === MutationType.patchFunction) {
          eventData.subtitle = "⤵️";
        } else if (type === MutationType.patchObject) {
          eventData.subtitle = "🧩";
        } else if (events && !Array.isArray(events)) {
          eventData.subtitle = events.type;
        }
        if (events) {
          eventData.data["rawEvent(s)"] = {
            _custom: {
              display: "DebuggerEvent",
              type: "object",
              tooltip: "raw DebuggerEvent[]",
              value: events
            }
          };
        }
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: eventData
        });
      }, { detached: true, flush: "sync" });
      const hotUpdate = store._hotUpdate;
      store._hotUpdate = vue.markRaw((newStore) => {
        hotUpdate(newStore);
        api.addTimelineEvent({
          layerId: MUTATIONS_LAYER_ID,
          event: {
            time: now2(),
            title: "🔥 " + store.$id,
            subtitle: "HMR update",
            data: {
              store: formatDisplay(store.$id),
              info: formatDisplay(`HMR update`)
            }
          }
        });
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
      });
      const { $dispose } = store;
      store.$dispose = () => {
        $dispose();
        api.notifyComponentUpdate();
        api.sendInspectorTree(INSPECTOR_ID);
        api.sendInspectorState(INSPECTOR_ID);
        api.getSettings().logStoreChanges && toastMessage(`Disposed "${store.$id}" store 🗑`);
      };
      api.notifyComponentUpdate();
      api.sendInspectorTree(INSPECTOR_ID);
      api.sendInspectorState(INSPECTOR_ID);
      api.getSettings().logStoreChanges && toastMessage(`"${store.$id}" store installed 🆕`);
    });
  }
  let runningActionId = 0;
  let activeAction;
  function patchActionForGrouping(store, actionNames, wrapWithProxy) {
    const actions = actionNames.reduce((storeActions, actionName) => {
      storeActions[actionName] = vue.toRaw(store)[actionName];
      return storeActions;
    }, {});
    for (const actionName in actions) {
      store[actionName] = function() {
        const _actionId = runningActionId;
        const trackedStore = wrapWithProxy ? new Proxy(store, {
          get(...args) {
            activeAction = _actionId;
            return Reflect.get(...args);
          },
          set(...args) {
            activeAction = _actionId;
            return Reflect.set(...args);
          }
        }) : store;
        activeAction = _actionId;
        const retValue = actions[actionName].apply(trackedStore, arguments);
        activeAction = void 0;
        return retValue;
      };
    }
  }
  function devtoolsPlugin({ app, store, options }) {
    if (store.$id.startsWith("__hot:")) {
      return;
    }
    store._isOptionsAPI = !!options.state;
    patchActionForGrouping(store, Object.keys(options.actions), store._isOptionsAPI);
    const originalHotUpdate = store._hotUpdate;
    vue.toRaw(store)._hotUpdate = function(newStore) {
      originalHotUpdate.apply(this, arguments);
      patchActionForGrouping(store, Object.keys(newStore._hmrPayload.actions), !!store._isOptionsAPI);
    };
    addStoreToDevtools(
      app,
      // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
      store
    );
  }
  function createPinia() {
    const scope = vue.effectScope(true);
    const state = scope.run(() => vue.ref({}));
    let _p = [];
    let toBeInstalled = [];
    const pinia2 = vue.markRaw({
      install(app) {
        setActivePinia(pinia2);
        {
          pinia2._a = app;
          app.provide(piniaSymbol, pinia2);
          app.config.globalProperties.$pinia = pinia2;
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(app, pinia2);
          }
          toBeInstalled.forEach((plugin) => _p.push(plugin));
          toBeInstalled = [];
        }
      },
      use(plugin) {
        if (!this._a && !isVue2) {
          toBeInstalled.push(plugin);
        } else {
          _p.push(plugin);
        }
        return this;
      },
      _p,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: scope,
      _s: /* @__PURE__ */ new Map(),
      state
    });
    if (USE_DEVTOOLS && typeof Proxy !== "undefined") {
      pinia2.use(devtoolsPlugin);
    }
    return pinia2;
  }
  const isUseStore = (fn) => {
    return typeof fn === "function" && typeof fn.$id === "string";
  };
  function patchObject(newState, oldState) {
    for (const key in oldState) {
      const subPatch = oldState[key];
      if (!(key in newState)) {
        continue;
      }
      const targetValue = newState[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        newState[key] = patchObject(targetValue, subPatch);
      } else {
        {
          newState[key] = subPatch;
        }
      }
    }
    return newState;
  }
  function acceptHMRUpdate(initialUseStore, hot) {
    return (newModule) => {
      const pinia2 = hot.data.pinia || initialUseStore._pinia;
      if (!pinia2) {
        return;
      }
      hot.data.pinia = pinia2;
      for (const exportName in newModule) {
        const useStore = newModule[exportName];
        if (isUseStore(useStore) && pinia2._s.has(useStore.$id)) {
          const id = useStore.$id;
          if (id !== initialUseStore.$id) {
            console.warn(`The id of the store changed from "${initialUseStore.$id}" to "${id}". Reloading.`);
            return hot.invalidate();
          }
          const existingStore = pinia2._s.get(id);
          if (!existingStore) {
            console.log(`[Pinia]: skipping hmr because store doesn't exist yet`);
            return;
          }
          useStore(pinia2, existingStore);
        }
      }
    };
  }
  const noop = () => {
  };
  function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
    subscriptions.push(callback);
    const removeSubscription = () => {
      const idx = subscriptions.indexOf(callback);
      if (idx > -1) {
        subscriptions.splice(idx, 1);
        onCleanup();
      }
    };
    if (!detached && vue.getCurrentScope()) {
      vue.onScopeDispose(removeSubscription);
    }
    return removeSubscription;
  }
  function triggerSubscriptions(subscriptions, ...args) {
    subscriptions.slice().forEach((callback) => {
      callback(...args);
    });
  }
  const fallbackRunWithContext = (fn) => fn();
  function mergeReactiveObjects(target, patchToApply) {
    if (target instanceof Map && patchToApply instanceof Map) {
      patchToApply.forEach((value, key) => target.set(key, value));
    }
    if (target instanceof Set && patchToApply instanceof Set) {
      patchToApply.forEach(target.add, target);
    }
    for (const key in patchToApply) {
      if (!patchToApply.hasOwnProperty(key))
        continue;
      const subPatch = patchToApply[key];
      const targetValue = target[key];
      if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !vue.isRef(subPatch) && !vue.isReactive(subPatch)) {
        target[key] = mergeReactiveObjects(targetValue, subPatch);
      } else {
        target[key] = subPatch;
      }
    }
    return target;
  }
  const skipHydrateSymbol = Symbol("pinia:skipHydration");
  function skipHydrate(obj) {
    return Object.defineProperty(obj, skipHydrateSymbol, {});
  }
  function shouldHydrate(obj) {
    return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
  }
  const { assign } = Object;
  function isComputed(o) {
    return !!(vue.isRef(o) && o.effect);
  }
  function createOptionsStore(id, options, pinia2, hot) {
    const { state, actions, getters } = options;
    const initialState = pinia2.state.value[id];
    let store;
    function setup() {
      if (!initialState && !hot) {
        {
          pinia2.state.value[id] = state ? state() : {};
        }
      }
      const localState = hot ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        vue.toRefs(vue.ref(state ? state() : {}).value)
      ) : vue.toRefs(pinia2.state.value[id]);
      return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
        if (name in localState) {
          console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${name}" in store "${id}".`);
        }
        computedGetters[name] = vue.markRaw(vue.computed(() => {
          setActivePinia(pinia2);
          const store2 = pinia2._s.get(id);
          return getters[name].call(store2, store2);
        }));
        return computedGetters;
      }, {}));
    }
    store = createSetupStore(id, setup, options, pinia2, hot, true);
    return store;
  }
  function createSetupStore($id, setup, options = {}, pinia2, hot, isOptionsStore) {
    let scope;
    const optionsForPlugin = assign({ actions: {} }, options);
    if (!pinia2._e.active) {
      throw new Error("Pinia destroyed");
    }
    const $subscribeOptions = {
      deep: true
      // flush: 'post',
    };
    {
      $subscribeOptions.onTrigger = (event) => {
        if (isListening) {
          debuggerEvents = event;
        } else if (isListening == false && !store._hotUpdating) {
          if (Array.isArray(debuggerEvents)) {
            debuggerEvents.push(event);
          } else {
            console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug.");
          }
        }
      };
    }
    let isListening;
    let isSyncListening;
    let subscriptions = [];
    let actionSubscriptions = [];
    let debuggerEvents;
    const initialState = pinia2.state.value[$id];
    if (!isOptionsStore && !initialState && !hot) {
      {
        pinia2.state.value[$id] = {};
      }
    }
    const hotState = vue.ref({});
    let activeListener;
    function $patch(partialStateOrMutator) {
      let subscriptionMutation;
      isListening = isSyncListening = false;
      {
        debuggerEvents = [];
      }
      if (typeof partialStateOrMutator === "function") {
        partialStateOrMutator(pinia2.state.value[$id]);
        subscriptionMutation = {
          type: MutationType.patchFunction,
          storeId: $id,
          events: debuggerEvents
        };
      } else {
        mergeReactiveObjects(pinia2.state.value[$id], partialStateOrMutator);
        subscriptionMutation = {
          type: MutationType.patchObject,
          payload: partialStateOrMutator,
          storeId: $id,
          events: debuggerEvents
        };
      }
      const myListenerId = activeListener = Symbol();
      vue.nextTick().then(() => {
        if (activeListener === myListenerId) {
          isListening = true;
        }
      });
      isSyncListening = true;
      triggerSubscriptions(subscriptions, subscriptionMutation, pinia2.state.value[$id]);
    }
    const $reset = isOptionsStore ? function $reset2() {
      const { state } = options;
      const newState = state ? state() : {};
      this.$patch(($state) => {
        assign($state, newState);
      });
    } : (
      /* istanbul ignore next */
      () => {
        throw new Error(`🍍: Store "${$id}" is built using the setup syntax and does not implement $reset().`);
      }
    );
    function $dispose() {
      scope.stop();
      subscriptions = [];
      actionSubscriptions = [];
      pinia2._s.delete($id);
    }
    function wrapAction(name, action) {
      return function() {
        setActivePinia(pinia2);
        const args = Array.from(arguments);
        const afterCallbackList = [];
        const onErrorCallbackList = [];
        function after(callback) {
          afterCallbackList.push(callback);
        }
        function onError(callback) {
          onErrorCallbackList.push(callback);
        }
        triggerSubscriptions(actionSubscriptions, {
          args,
          name,
          store,
          after,
          onError
        });
        let ret;
        try {
          ret = action.apply(this && this.$id === $id ? this : store, args);
        } catch (error2) {
          triggerSubscriptions(onErrorCallbackList, error2);
          throw error2;
        }
        if (ret instanceof Promise) {
          return ret.then((value) => {
            triggerSubscriptions(afterCallbackList, value);
            return value;
          }).catch((error2) => {
            triggerSubscriptions(onErrorCallbackList, error2);
            return Promise.reject(error2);
          });
        }
        triggerSubscriptions(afterCallbackList, ret);
        return ret;
      };
    }
    const _hmrPayload = /* @__PURE__ */ vue.markRaw({
      actions: {},
      getters: {},
      state: [],
      hotState
    });
    const partialStore = {
      _p: pinia2,
      // _s: scope,
      $id,
      $onAction: addSubscription.bind(null, actionSubscriptions),
      $patch,
      $reset,
      $subscribe(callback, options2 = {}) {
        const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
        const stopWatcher = scope.run(() => vue.watch(() => pinia2.state.value[$id], (state) => {
          if (options2.flush === "sync" ? isSyncListening : isListening) {
            callback({
              storeId: $id,
              type: MutationType.direct,
              events: debuggerEvents
            }, state);
          }
        }, assign({}, $subscribeOptions, options2)));
        return removeSubscription;
      },
      $dispose
    };
    const store = vue.reactive(assign(
      {
        _hmrPayload,
        _customProperties: vue.markRaw(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      partialStore
      // must be added later
      // setupStore
    ));
    pinia2._s.set($id, store);
    const runWithContext = pinia2._a && pinia2._a.runWithContext || fallbackRunWithContext;
    const setupStore = runWithContext(() => pinia2._e.run(() => (scope = vue.effectScope()).run(setup)));
    for (const key in setupStore) {
      const prop = setupStore[key];
      if (vue.isRef(prop) && !isComputed(prop) || vue.isReactive(prop)) {
        if (hot) {
          set(hotState.value, key, vue.toRef(setupStore, key));
        } else if (!isOptionsStore) {
          if (initialState && shouldHydrate(prop)) {
            if (vue.isRef(prop)) {
              prop.value = initialState[key];
            } else {
              mergeReactiveObjects(prop, initialState[key]);
            }
          }
          {
            pinia2.state.value[$id][key] = prop;
          }
        }
        {
          _hmrPayload.state.push(key);
        }
      } else if (typeof prop === "function") {
        const actionValue = hot ? prop : wrapAction(key, prop);
        {
          setupStore[key] = actionValue;
        }
        {
          _hmrPayload.actions[key] = prop;
        }
        optionsForPlugin.actions[key] = prop;
      } else {
        if (isComputed(prop)) {
          _hmrPayload.getters[key] = isOptionsStore ? (
            // @ts-expect-error
            options.getters[key]
          ) : prop;
          if (IS_CLIENT) {
            const getters = setupStore._getters || // @ts-expect-error: same
            (setupStore._getters = vue.markRaw([]));
            getters.push(key);
          }
        }
      }
    }
    {
      assign(store, setupStore);
      assign(vue.toRaw(store), setupStore);
    }
    Object.defineProperty(store, "$state", {
      get: () => hot ? hotState.value : pinia2.state.value[$id],
      set: (state) => {
        if (hot) {
          throw new Error("cannot set hotState");
        }
        $patch(($state) => {
          assign($state, state);
        });
      }
    });
    {
      store._hotUpdate = vue.markRaw((newStore) => {
        store._hotUpdating = true;
        newStore._hmrPayload.state.forEach((stateKey) => {
          if (stateKey in store.$state) {
            const newStateTarget = newStore.$state[stateKey];
            const oldStateSource = store.$state[stateKey];
            if (typeof newStateTarget === "object" && isPlainObject(newStateTarget) && isPlainObject(oldStateSource)) {
              patchObject(newStateTarget, oldStateSource);
            } else {
              newStore.$state[stateKey] = oldStateSource;
            }
          }
          set(store, stateKey, vue.toRef(newStore.$state, stateKey));
        });
        Object.keys(store.$state).forEach((stateKey) => {
          if (!(stateKey in newStore.$state)) {
            del(store, stateKey);
          }
        });
        isListening = false;
        isSyncListening = false;
        pinia2.state.value[$id] = vue.toRef(newStore._hmrPayload, "hotState");
        isSyncListening = true;
        vue.nextTick().then(() => {
          isListening = true;
        });
        for (const actionName in newStore._hmrPayload.actions) {
          const action = newStore[actionName];
          set(store, actionName, wrapAction(actionName, action));
        }
        for (const getterName in newStore._hmrPayload.getters) {
          const getter = newStore._hmrPayload.getters[getterName];
          const getterValue = isOptionsStore ? (
            // special handling of options api
            vue.computed(() => {
              setActivePinia(pinia2);
              return getter.call(store, store);
            })
          ) : getter;
          set(store, getterName, getterValue);
        }
        Object.keys(store._hmrPayload.getters).forEach((key) => {
          if (!(key in newStore._hmrPayload.getters)) {
            del(store, key);
          }
        });
        Object.keys(store._hmrPayload.actions).forEach((key) => {
          if (!(key in newStore._hmrPayload.actions)) {
            del(store, key);
          }
        });
        store._hmrPayload = newStore._hmrPayload;
        store._getters = newStore._getters;
        store._hotUpdating = false;
      });
    }
    if (USE_DEVTOOLS) {
      const nonEnumerable = {
        writable: true,
        configurable: true,
        // avoid warning on devtools trying to display this property
        enumerable: false
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((p) => {
        Object.defineProperty(store, p, assign({ value: store[p] }, nonEnumerable));
      });
    }
    pinia2._p.forEach((extender) => {
      if (USE_DEVTOOLS) {
        const extensions = scope.run(() => extender({
          store,
          app: pinia2._a,
          pinia: pinia2,
          options: optionsForPlugin
        }));
        Object.keys(extensions || {}).forEach((key) => store._customProperties.add(key));
        assign(store, extensions);
      } else {
        assign(store, scope.run(() => extender({
          store,
          app: pinia2._a,
          pinia: pinia2,
          options: optionsForPlugin
        })));
      }
    });
    if (store.$state && typeof store.$state === "object" && typeof store.$state.constructor === "function" && !store.$state.constructor.toString().includes("[native code]")) {
      console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${store.$id}".`);
    }
    if (initialState && isOptionsStore && options.hydrate) {
      options.hydrate(store.$state, initialState);
    }
    isListening = true;
    isSyncListening = true;
    return store;
  }
  function defineStore(idOrOptions, setup, setupOptions) {
    let id;
    let options;
    const isSetupStore = typeof setup === "function";
    if (typeof idOrOptions === "string") {
      id = idOrOptions;
      options = isSetupStore ? setupOptions : setup;
    } else {
      options = idOrOptions;
      id = idOrOptions.id;
      if (typeof id !== "string") {
        throw new Error(`[🍍]: "defineStore()" must be passed a store id as its first argument.`);
      }
    }
    function useStore(pinia2, hot) {
      const hasContext = vue.hasInjectionContext();
      pinia2 = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      pinia2 || (hasContext ? vue.inject(piniaSymbol, null) : null);
      if (pinia2)
        setActivePinia(pinia2);
      if (!activePinia) {
        throw new Error(`[🍍]: "getActivePinia()" was called but there was no active Pinia. Are you trying to use a store before calling "app.use(pinia)"?
See https://pinia.vuejs.org/core-concepts/outside-component-usage.html for help.
This will fail in production.`);
      }
      pinia2 = activePinia;
      if (!pinia2._s.has(id)) {
        if (isSetupStore) {
          createSetupStore(id, setup, options, pinia2);
        } else {
          createOptionsStore(id, options, pinia2);
        }
        {
          useStore._pinia = pinia2;
        }
      }
      const store = pinia2._s.get(id);
      if (hot) {
        const hotId = "__hot:" + id;
        const newStore = isSetupStore ? createSetupStore(hotId, setup, options, pinia2, true) : createOptionsStore(hotId, assign({}, options), pinia2, true);
        hot._hotUpdate(newStore);
        delete pinia2.state.value[hotId];
        pinia2._s.delete(hotId);
      }
      if (IS_CLIENT) {
        const currentInstance = vue.getCurrentInstance();
        if (currentInstance && currentInstance.proxy && // avoid adding stores that are just built for hot module replacement
        !hot) {
          const vm = currentInstance.proxy;
          const cache = "_pStores" in vm ? vm._pStores : vm._pStores = {};
          cache[id] = store;
        }
      }
      return store;
    }
    useStore.$id = id;
    return useStore;
  }
  let mapStoreSuffix = "Store";
  function setMapStoreSuffix(suffix) {
    mapStoreSuffix = suffix;
  }
  function mapStores(...stores) {
    if (Array.isArray(stores[0])) {
      console.warn(`[🍍]: Directly pass all stores to "mapStores()" without putting them in an array:
Replace
	mapStores([useAuthStore, useCartStore])
with
	mapStores(useAuthStore, useCartStore)
This will fail in production if not fixed.`);
      stores = stores[0];
    }
    return stores.reduce((reduced, useStore) => {
      reduced[useStore.$id + mapStoreSuffix] = function() {
        return useStore(this.$pinia);
      };
      return reduced;
    }, {});
  }
  function mapState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function() {
        return useStore(this.$pinia)[key];
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function() {
        const store = useStore(this.$pinia);
        const storeKey = keysOrMapper[key];
        return typeof storeKey === "function" ? storeKey.call(this, store) : store[storeKey];
      };
      return reduced;
    }, {});
  }
  const mapGetters = mapState;
  function mapActions(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[key](...args);
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = function(...args) {
        return useStore(this.$pinia)[keysOrMapper[key]](...args);
      };
      return reduced;
    }, {});
  }
  function mapWritableState(useStore, keysOrMapper) {
    return Array.isArray(keysOrMapper) ? keysOrMapper.reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[key];
        },
        set(value) {
          return useStore(this.$pinia)[key] = value;
        }
      };
      return reduced;
    }, {}) : Object.keys(keysOrMapper).reduce((reduced, key) => {
      reduced[key] = {
        get() {
          return useStore(this.$pinia)[keysOrMapper[key]];
        },
        set(value) {
          return useStore(this.$pinia)[keysOrMapper[key]] = value;
        }
      };
      return reduced;
    }, {});
  }
  function storeToRefs(store) {
    {
      store = vue.toRaw(store);
      const refs = {};
      for (const key in store) {
        const value = store[key];
        if (vue.isRef(value) || vue.isReactive(value)) {
          refs[key] = // ---
          vue.toRef(store, key);
        }
      }
      return refs;
    }
  }
  const PiniaVuePlugin = function(_Vue) {
    _Vue.mixin({
      beforeCreate() {
        const options = this.$options;
        if (options.pinia) {
          const pinia2 = options.pinia;
          if (!this._provided) {
            const provideCache = {};
            Object.defineProperty(this, "_provided", {
              get: () => provideCache,
              set: (v) => Object.assign(provideCache, v)
            });
          }
          this._provided[piniaSymbol] = pinia2;
          if (!this.$pinia) {
            this.$pinia = pinia2;
          }
          pinia2._a = this;
          if (IS_CLIENT) {
            setActivePinia(pinia2);
          }
          if (USE_DEVTOOLS) {
            registerPiniaDevtools(pinia2._a, pinia2);
          }
        } else if (!this.$pinia && options.parent && options.parent.$pinia) {
          this.$pinia = options.parent.$pinia;
        }
      },
      destroyed() {
        delete this._pStores;
      }
    });
  };
  const pinia = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    get MutationType() {
      return MutationType;
    },
    PiniaVuePlugin,
    acceptHMRUpdate,
    createPinia,
    defineStore,
    getActivePinia,
    mapActions,
    mapGetters,
    mapState,
    mapStores,
    mapWritableState,
    setActivePinia,
    setMapStoreSuffix,
    skipHydrate,
    storeToRefs
  }, Symbol.toStringTag, { value: "Module" }));
  const useUserStore = defineStore("userStore", {
    state: () => {
      return {
        userInfo: {}
      };
    },
    actions: {
      setUserInfo(userInfo) {
        this.userInfo = userInfo;
      },
      clear() {
        this.userInfo = {};
      },
      loadUser() {
        return new Promise((resolve, reject) => {
          request({
            url: "/user/self",
            method: "GET"
          }).then((userInfo) => {
            formatAppLog("log", "at store/userStore.js:23", userInfo);
            this.setUserInfo(userInfo);
            resolve();
          }).catch((res) => {
            reject(res);
          });
        });
      }
    }
  });
  let cacheChats = [];
  const useChatStore = defineStore("chatStore", {
    state: () => {
      return {
        chats: [],
        privateMsgMaxId: 0,
        groupMsgMaxId: 0,
        loadingPrivateMsg: false,
        loadingGroupMsg: false
      };
    },
    actions: {
      initChats(chatsData) {
        cacheChats = [];
        this.chats = [];
        for (let chat of chatsData.chats) {
          chat.stored = false;
          cacheChats.push(JSON.parse(JSON.stringify(chat)));
          if (this.chats.length < 15) {
            this.chats.push(chat);
          }
        }
        this.privateMsgMaxId = chatsData.privateMsgMaxId || 0;
        this.groupMsgMaxId = chatsData.groupMsgMaxId || 0;
        cacheChats.forEach((chat) => {
          chat.messages.forEach((msg) => {
            if (msg.loadStatus == "loading") {
              msg.loadStatus = "fail";
            }
          });
        });
      },
      openChat(chatInfo) {
        let chats = this.curChats;
        let chat = null;
        for (let idx in chats) {
          if (chats[idx].type == chatInfo.type && chats[idx].targetId === chatInfo.targetId) {
            chat = chats[idx];
            this.moveTop(idx);
            break;
          }
        }
        if (chat == null) {
          chat = {
            targetId: chatInfo.targetId,
            type: chatInfo.type,
            showName: chatInfo.showName,
            headImage: chatInfo.headImage,
            lastContent: "",
            lastSendTime: (/* @__PURE__ */ new Date()).getTime(),
            unreadCount: 0,
            messages: [],
            atMe: false,
            atAll: false,
            stored: false
          };
          chats.unshift(chat);
          this.saveToStorage();
        }
      },
      activeChat(idx) {
        let chats = this.curChats;
        if (idx >= 0) {
          chats[idx].unreadCount = 0;
        }
      },
      resetUnreadCount(chatInfo) {
        let chats = this.curChats;
        for (let idx in chats) {
          if (chats[idx].type == chatInfo.type && chats[idx].targetId == chatInfo.targetId) {
            chats[idx].unreadCount = 0;
            chats[idx].atMe = false;
            chats[idx].atAll = false;
            chats[idx].stored = false;
            this.saveToStorage();
          }
        }
      },
      readedMessage(pos) {
        let chat = this.findChatByFriend(pos.friendId);
        chat.messages.forEach((m) => {
          if (m.id && m.selfSend && m.status < MESSAGE_STATUS.RECALL) {
            if (!pos.maxId || m.id <= pos.maxId) {
              m.status = MESSAGE_STATUS.READED;
              chat.stored = false;
            }
          }
        });
        if (!chat.stored) {
          this.saveToStorage();
        }
      },
      removeChat(idx) {
        let chats = this.curChats;
        chats[idx].delete = true;
        chats[idx].stored = false;
        this.saveToStorage();
      },
      removePrivateChat(userId) {
        let chats = this.curChats;
        for (let idx in chats) {
          if (chats[idx].type == "PRIVATE" && chats[idx].targetId == userId) {
            this.removeChat(idx);
          }
        }
      },
      removeGroupChat(groupId) {
        let chats = this.curChats;
        for (let idx in chats) {
          if (chats[idx].type == "GROUP" && chats[idx].targetId == groupId) {
            this.removeChat(idx);
          }
        }
      },
      moveTop(idx) {
        if (this.isLoading()) {
          return;
        }
        let chats = this.curChats;
        if (idx > 0) {
          let chat = chats[idx];
          chats.splice(idx, 1);
          chats.unshift(chat);
          chat.lastSendTime = (/* @__PURE__ */ new Date()).getTime();
          chat.stored = false;
          this.saveToStorage();
        }
      },
      insertMessage(msgInfo, chatInfo) {
        let type = chatInfo.type;
        if (msgInfo.id && type == "PRIVATE" && msgInfo.id > this.privateMsgMaxId) {
          this.privateMsgMaxId = msgInfo.id;
        }
        if (msgInfo.id && type == "GROUP" && msgInfo.id > this.groupMsgMaxId) {
          this.groupMsgMaxId = msgInfo.id;
        }
        let chat = this.findChat(chatInfo);
        let message = this.findMessage(chat, msgInfo);
        if (message) {
          Object.assign(message, msgInfo);
          if (msgInfo.type == MESSAGE_TYPE.RECALL) {
            chat.lastContent = msgInfo.content;
          }
          chat.stored = false;
          this.saveToStorage();
          return;
        }
        if (msgInfo.type == MESSAGE_TYPE.IMAGE) {
          chat.lastContent = "[图片]";
        } else if (msgInfo.type == MESSAGE_TYPE.FILE) {
          chat.lastContent = "[文件]";
        } else if (msgInfo.type == MESSAGE_TYPE.AUDIO) {
          chat.lastContent = "[语音]";
        } else if (msgInfo.type == MESSAGE_TYPE.ACT_RT_VOICE) {
          chat.lastContent = "[语音通话]";
        } else if (msgInfo.type == MESSAGE_TYPE.ACT_RT_VIDEO) {
          chat.lastContent = "[视频通话]";
        } else if (msgInfo.type == MESSAGE_TYPE.TEXT || msgInfo.type == MESSAGE_TYPE.RECALL || msgInfo.type == MESSAGE_TYPE.TIP_TEXT) {
          chat.lastContent = msgInfo.content;
        }
        chat.lastSendTime = msgInfo.sendTime;
        chat.sendNickName = msgInfo.sendNickName;
        if (!msgInfo.selfSend && msgInfo.status != MESSAGE_STATUS.READED && msgInfo.type != MESSAGE_TYPE.TIP_TEXT) {
          chat.unreadCount++;
        }
        if (!msgInfo.selfSend && chat.type == "GROUP" && msgInfo.atUserIds && msgInfo.status != MESSAGE_STATUS.READED) {
          const userStore = useUserStore();
          let userId = userStore.userInfo.id;
          if (msgInfo.atUserIds.indexOf(userId) >= 0) {
            chat.atMe = true;
          }
          if (msgInfo.atUserIds.indexOf(-1) >= 0) {
            chat.atAll = true;
          }
        }
        if (!chat.lastTimeTip || chat.lastTimeTip < msgInfo.sendTime - 600 * 1e3) {
          chat.messages.push({
            sendTime: msgInfo.sendTime,
            type: MESSAGE_TYPE.TIP_TIME
          });
          chat.lastTimeTip = msgInfo.sendTime;
        }
        let insertPos = chat.messages.length;
        if (msgInfo.id && msgInfo.id > 0) {
          for (let idx in chat.messages) {
            if (chat.messages[idx].id && msgInfo.id < chat.messages[idx].id) {
              insertPos = idx;
              formatAppLog("log", "at store/chatStore.js:217", `消息出现乱序,位置:${chat.messages.length},修正至:${insertPos}`);
              break;
            }
          }
        }
        if (insertPos == chat.messages.length) {
          chat.messages[insertPos] = msgInfo;
        } else {
          chat.messages.splice(insertPos, 0, msgInfo);
        }
        chat.stored = false;
        this.saveToStorage();
      },
      updateMessage(msgInfo, chatInfo) {
        let chat = this.findChat(chatInfo);
        let message = this.findMessage(chat, msgInfo);
        if (message) {
          Object.assign(message, msgInfo);
          chat.stored = false;
          this.saveToStorage();
        }
      },
      deleteMessage(msgInfo, chatInfo) {
        let chat = this.findChat(chatInfo);
        for (let idx in chat.messages) {
          if (chat.messages[idx].id && chat.messages[idx].id == msgInfo.id) {
            chat.messages.splice(idx, 1);
            break;
          }
          if (msgInfo.selfSend && chat.messages[idx].selfSend && chat.messages[idx].sendTime == msgInfo.sendTime) {
            chat.messages.splice(idx, 1);
            break;
          }
        }
        chat.stored = false;
        this.saveToStorage();
      },
      updateChatFromFriend(friend) {
        let chat = this.findChatByFriend(friend.id);
        if (chat && (chat.headImage != friend.headImageThumb || chat.showName != friend.nickName)) {
          chat.headImage = friend.headImageThumb;
          chat.showName = friend.nickName;
          chat.stored = false;
          this.saveToStorage();
        }
      },
      updateChatFromGroup(group) {
        let chat = this.findChatByGroup(group.id);
        if (chat && (chat.headImage != group.headImageThumb || chat.showName != group.showGroupName)) {
          chat.headImage = group.headImageThumb;
          chat.showName = group.showGroupName;
          chat.stored = false;
          this.saveToStorage();
        }
      },
      setLoadingPrivateMsg(loading) {
        this.loadingPrivateMsg = loading;
        if (!this.isLoading()) {
          this.refreshChats();
        }
      },
      setLoadingGroupMsg(loading) {
        this.loadingGroupMsg = loading;
        if (!this.isLoading()) {
          this.refreshChats();
        }
      },
      refreshChats() {
        if (!cacheChats) {
          return;
        }
        cacheChats.sort((chat1, chat2) => {
          return chat2.lastSendTime - chat1.lastSendTime;
        });
        this.chats = cacheChats;
        cacheChats = null;
        this.saveToStorage();
      },
      saveToStorage(state) {
        if (this.isLoading()) {
          return;
        }
        const userStore = useUserStore();
        let userId = userStore.userInfo.id;
        let key = "chats-app-" + userId;
        let chatKeys = [];
        this.chats.forEach((chat) => {
          let chatKey = `${key}-${chat.type}-${chat.targetId}`;
          if (!chat.stored) {
            if (chat.delete) {
              uni.removeStorageSync(chatKey);
            } else {
              uni.setStorageSync(chatKey, chat);
            }
            chat.stored = true;
          }
          if (!chat.delete) {
            chatKeys.push(chatKey);
          }
        });
        let chatsData = {
          privateMsgMaxId: this.privateMsgMaxId,
          groupMsgMaxId: this.groupMsgMaxId,
          chatKeys
        };
        uni.setStorageSync(key, chatsData);
        this.chats = this.chats.filter((chat) => !chat.delete);
      },
      clear(state) {
        cacheChats = [];
        this.chats = [];
        this.privateMsgMaxId = 0;
        this.groupMsgMaxId = 0;
        this.loadingPrivateMsg = false;
        this.loadingGroupMsg = false;
      },
      loadChat(context) {
        return new Promise((resolve, reject) => {
          let userStore = useUserStore();
          let userId = userStore.userInfo.id;
          let chatsData = uni.getStorageSync("chats-app-" + userId);
          if (chatsData) {
            if (chatsData.chatKeys) {
              (/* @__PURE__ */ new Date()).getTime();
              chatsData.chats = [];
              chatsData.chatKeys.forEach((key) => {
                let chat = uni.getStorageSync(key);
                if (chat) {
                  chatsData.chats.push(chat);
                }
              });
            }
            this.initChats(chatsData);
          }
          resolve();
        });
      }
    },
    getters: {
      isLoading: (state) => () => {
        return state.loadingPrivateMsg || state.loadingGroupMsg;
      },
      curChats: (state) => {
        if (cacheChats && state.isLoading()) {
          return cacheChats;
        }
        return state.chats;
      },
      findChatIdx: (state) => (chat) => {
        let chats = state.curChats;
        for (let idx in chats) {
          if (chats[idx].type == chat.type && chats[idx].targetId === chat.targetId) {
            chat = state.chats[idx];
            return idx;
          }
        }
      },
      findChat: (state) => (chat) => {
        let chats = state.curChats;
        let idx = state.findChatIdx(chat);
        return chats[idx];
      },
      findChatByFriend: (state) => (fid) => {
        return state.curChats.find((chat) => chat.type == "PRIVATE" && chat.targetId == fid);
      },
      findChatByGroup: (state) => (gid) => {
        return state.curChats.find((chat) => chat.type == "GROUP" && chat.targetId == gid);
      },
      findMessage: (state) => (chat, msgInfo) => {
        if (!chat) {
          return null;
        }
        for (let idx in chat.messages) {
          if (msgInfo.id && chat.messages[idx].id == msgInfo.id) {
            return chat.messages[idx];
          }
          if (msgInfo.tmpId && chat.messages[idx].tmpId && chat.messages[idx].tmpId == msgInfo.tmpId) {
            return chat.messages[idx];
          }
        }
      }
    }
  });
  const useFriendStore = defineStore("friendStore", {
    state: () => {
      return {
        friends: [],
        timer: null
      };
    },
    actions: {
      setFriends(friends) {
        friends.forEach((f) => {
          f.online = false;
          f.onlineWeb = false;
          f.onlineApp = false;
        });
        this.friends = friends;
      },
      updateFriend(friend) {
        let f = this.findFriend(friend.id);
        let copy = JSON.parse(JSON.stringify(f));
        Object.assign(f, friend);
        f.online = copy.online;
        f.onlineWeb = copy.onlineWeb;
        f.onlineApp = copy.onlineApp;
      },
      removeFriend(id) {
        this.friends.forEach((f, idx) => {
          if (f.id == id) {
            this.friends.splice(idx, 1);
          }
        });
      },
      addFriend(friend) {
        this.friends.push(friend);
      },
      setOnlineStatus(onlineTerminals) {
        this.friends.forEach((f) => {
          let userTerminal = onlineTerminals.find((o) => f.id == o.userId);
          if (userTerminal) {
            f.online = true;
            f.onlineWeb = userTerminal.terminals.indexOf(TERMINAL_TYPE.WEB) >= 0;
            f.onlineApp = userTerminal.terminals.indexOf(TERMINAL_TYPE.APP) >= 0;
          } else {
            f.online = false;
            f.onlineWeb = false;
            f.onlineApp = false;
          }
        });
      },
      refreshOnlineStatus() {
        if (this.friends.length > 0) {
          let userIds = [];
          this.friends.forEach((f) => userIds.push(f.id));
          request({
            url: "/user/terminal/online?userIds=" + userIds.join(","),
            method: "GET"
          }).then((onlineTerminals) => {
            this.setOnlineStatus(onlineTerminals);
          });
        }
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.refreshOnlineStatus();
        }, 3e4);
      },
      clear() {
        clearTimeout(this.timer);
        this.friends = [];
        this.timer = null;
      },
      loadFriend() {
        return new Promise((resolve, reject) => {
          request({
            url: "/friend/list",
            method: "GET"
          }).then((friends) => {
            this.setFriends(friends);
            this.refreshOnlineStatus();
            resolve();
          }).catch((res) => {
            reject();
          });
        });
      }
    },
    getters: {
      findFriend: (state) => (id) => {
        return state.friends.find((f) => f.id == id);
      }
    }
  });
  const useGroupStore = defineStore("groupStore", {
    state: () => {
      return {
        groups: [],
        activeIndex: -1
      };
    },
    actions: {
      setGroups(groups) {
        this.groups = groups;
      },
      activeGroup(index2) {
        this.activeIndex = index2;
      },
      addGroup(group) {
        this.groups.unshift(group);
      },
      removeGroup(groupId) {
        this.groups.forEach((g, index2) => {
          if (g.id == groupId) {
            this.groups.splice(index2, 1);
            if (this.activeIndex >= this.groups.length) {
              this.activeIndex = this.groups.length - 1;
            }
          }
        });
      },
      updateGroup(group) {
        let g = this.findGroup(group.id);
        Object.assign(g, group);
      },
      clear() {
        this.groups = [];
        this.activeGroup = -1;
      },
      loadGroup() {
        return new Promise((resolve, reject) => {
          request({
            url: "/group/list",
            method: "GET"
          }).then((groups) => {
            this.setGroups(groups);
            resolve();
          }).catch((res) => {
            reject(res);
          });
        });
      }
    },
    getters: {
      findGroup: (state) => (id) => {
        return state.groups.find((g) => g.id == id);
      }
    }
  });
  const useConfigStore = defineStore("configStore", {
    state: () => {
      return {
        webrtc: {}
      };
    },
    actions: {
      setConfig(config2) {
        this.webrtc = config2.webrtc;
      },
      clear() {
        this.webrtc = {};
      },
      loadConfig() {
        return new Promise((resolve, reject) => {
          request({
            url: "/system/config",
            method: "GET"
          }).then((config2) => {
            formatAppLog("log", "at store/configStore.js:23", "系统配置", config2);
            this.setConfig(config2);
            resolve();
          }).catch((res) => {
            reject(res);
          });
        });
      }
    }
  });
  const _sfc_main$3 = {
    name: "bar-group"
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "bar-group" }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]);
  }
  const barGroup = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-60976667"], ["__file", "C:/Java/box-im/im-uniapp/components/bar/bar-group.vue"]]);
  const _sfc_main$2 = {
    name: "arrow-bar",
    props: {
      title: {
        type: String,
        required: true
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_0$5);
    return vue.openBlock(), vue.createElementBlock("view", { class: "arrow-bar" }, [
      vue.createElementVNode(
        "text",
        { class: "title" },
        vue.toDisplayString($props.title),
        1
        /* TEXT */
      ),
      vue.createVNode(_component_uni_icons, {
        class: "arrow",
        type: "right",
        size: "16"
      })
    ]);
  }
  const arrowBar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-b22ddecd"], ["__file", "C:/Java/box-im/im-uniapp/components/bar/arrow-bar.vue"]]);
  const _sfc_main$1 = {
    name: "btn-bar",
    props: {
      title: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: false
      },
      type: {
        type: String,
        default: "normal"
      },
      color: {
        type: String,
        default: "#000"
      }
    },
    computed: {
      style() {
        let color2 = "#000";
        switch (this.type) {
          case "danger":
            color2 = "#f14747";
            break;
          case "primary":
            color2 = "#35567f";
            break;
        }
        return `color: ${color2};`;
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "btn-bar",
        style: vue.normalizeStyle($options.style)
      },
      [
        $props.icon ? (vue.openBlock(), vue.createElementBlock(
          "text",
          {
            key: 0,
            class: vue.normalizeClass(["icon iconfont", $props.icon])
          },
          null,
          2
          /* CLASS */
        )) : vue.createCommentVNode("v-if", true),
        vue.createElementVNode(
          "text",
          { class: "title" },
          vue.toDisplayString($props.title),
          1
          /* TEXT */
        )
      ],
      4
      /* STYLE */
    );
  }
  const btnBar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-ff28c47e"], ["__file", "C:/Java/box-im/im-uniapp/components/bar/btn-bar.vue"]]);
  const _sfc_main = {
    name: "switch-bar",
    props: {
      title: {
        type: String,
        required: true
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        value: this.checked
      };
    },
    methods: {
      onChange(e) {
        this.value = true;
        setTimeout(() => {
          this.value = false;
        }, 100);
        this.$emit("change", e);
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "switch-bar" }, [
      vue.createElementVNode(
        "text",
        { class: "title" },
        vue.toDisplayString($props.title),
        1
        /* TEXT */
      ),
      vue.createElementVNode("switch", {
        class: "switch",
        checked: $props.checked,
        color: "#18bc37",
        onChange: _cache[0] || (_cache[0] = (...args) => $options.onChange && $options.onChange(...args))
      }, null, 40, ["checked"])
    ]);
  }
  const switchBar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6d6dc2d1"], ["__file", "C:/Java/box-im/im-uniapp/components/bar/switch-bar.vue"]]);
  const rc = uni.getRecorderManager();
  let startTime = null;
  let checkIsEnable = () => {
    return true;
  };
  let start = () => {
    return new Promise((resolve, reject) => {
      rc.onStart(() => {
        startTime = /* @__PURE__ */ new Date();
        resolve();
      });
      rc.onError((e) => {
        formatAppLog("log", "at common/recorder-app.js:17", e);
        reject(e);
      });
      rc.start({
        format: "mp3"
        // 录音格式，可选值：aac/mp3
      });
    });
  };
  let close = () => {
    rc.stop();
  };
  let upload = () => {
    return new Promise((resolve, reject) => {
      rc.onStop((wavFile, a, b) => {
        uni.uploadFile({
          url: UNI_APP.BASE_URL + "/file/upload",
          header: {
            accessToken: uni.getStorageSync("loginInfo").accessToken
          },
          filePath: wavFile.tempFilePath,
          name: "file",
          success: (res) => {
            let r = JSON.parse(res.data);
            if (r.code != 200) {
              reject(r.message);
            } else {
              const duration = ((/* @__PURE__ */ new Date()).getTime() - startTime.getTime()) / 1e3;
              const data = {
                duration: Math.round(duration),
                url: r.data
              };
              resolve(data);
            }
          },
          fail: (e) => {
            reject(e);
          }
        });
      });
    });
  };
  const recorder = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    checkIsEnable,
    close,
    start,
    upload
  }, Symbol.toStringTag, { value: "Module" }));
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(uviewPlus);
    app.use(createPinia());
    app.component("bar-group", barGroup);
    app.component("arrow-bar", arrowBar);
    app.component("btn-bar", btnBar);
    app.component("switch-bar", switchBar);
    app.config.globalProperties.$http = request;
    app.config.globalProperties.$wsApi = socketApi;
    app.config.globalProperties.$msgType = messageType;
    app.config.globalProperties.$emo = emotion;
    app.config.globalProperties.$enums = enums;
    app.config.globalProperties.$date = date;
    app.config.globalProperties.$rc = recorder;
    app.config.globalProperties.$mountStore = () => {
      app.config.globalProperties.chatStore = useChatStore();
      app.config.globalProperties.friendStore = useFriendStore();
      app.config.globalProperties.groupStore = useGroupStore();
      app.config.globalProperties.configStore = useConfigStore();
      app.config.globalProperties.userStore = useUserStore();
    };
    return {
      app,
      pinia
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
