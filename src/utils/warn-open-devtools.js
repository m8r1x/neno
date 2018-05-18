import { remote } from "electron";

remote.getCurrentWebContents().on("devtools-opened", function() {
  // eslint-disable-next-line no-console
  console.warn(
    "%c⚠️⚠️Halt!!!⚠️🚫\n" +
      "%cPlease🙏 close this window unless you know what you're doing.👨‍💻⛔\n" +
      "%cNonetheless we recommend that you be careful, to avoid🚫" +
      " compromising your privacy🔑 and security🔒!",
    "color: red; font-size:30px;",
    "color: blue; font-size:18px;",
    "color: green; font-size:15px;"
  );
});
