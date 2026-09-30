"use strict";
const electron = require("electron");
electron.contextBridge.exposeInMainWorld("ipcRenderer", {
  on(...args) {
    const [channel, listener] = args;
    return electron.ipcRenderer.on(
      channel,
      (event, ...args2) => listener(event, ...args2)
    );
  },
  off(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.off(channel, ...omit);
  },
  send(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.send(channel, ...omit);
  },
  sendSync(...args) {
    const [channel, ...omit] = args;
    if (channel === "task") {
      return electron.ipcRenderer.invoke("deskpro-task", ...omit);
    }
    return electron.ipcRenderer.sendSync(channel, ...omit);
  },
  invoke(...args) {
    const [channel, ...omit] = args;
    return electron.ipcRenderer.invoke(channel, ...omit);
  }
  // You can expose other APTs you need here.
  // ...
});
function domReady(condition = ["complete", "interactive"]) {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true);
    } else {
      document.addEventListener("readystatechange", () => {
        if (condition.includes(document.readyState)) {
          resolve(true);
        }
      });
    }
  });
}
const safeDOM = {
  append(parent, child) {
    if (!Array.from(parent.children).find((e) => e === child)) {
      return parent.appendChild(child);
    }
  },
  remove(parent, child) {
    if (Array.from(parent.children).find((e) => e === child)) {
      return parent.removeChild(child);
    }
  }
};
function useLoading() {
  const styleContent = `
    .app-loading-overlay {
      position: fixed;
      z-index: 9999;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(249, 251, 255, 0.85);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .boxes {
      --size: 32px;
      --duration: 800ms;
      height: calc(var(--size) * 2);
      width: calc(var(--size) * 3);
      position: relative;
      transform-style: preserve-3d;
      transform-origin: 50% 50%;
      transform: rotateX(60deg) rotateZ(45deg) rotateY(0deg) translateZ(0px);
    }
    .boxes .box {
      width: var(--size);
      height: var(--size);
      top: 0;
      left: 0;
      position: absolute;
      transform-style: preserve-3d;
    }
    .boxes .box:nth-child(1) {
      transform: translate(100%, 0);
      -webkit-animation: box1 var(--duration) linear infinite;
      animation: box1 var(--duration) linear infinite;
    }
    .boxes .box:nth-child(2) {
      transform: translate(0, 100%);
      -webkit-animation: box2 var(--duration) linear infinite;
      animation: box2 var(--duration) linear infinite;
    }
    .boxes .box:nth-child(3) {
      transform: translate(100%, 100%);
      -webkit-animation: box3 var(--duration) linear infinite;
      animation: box3 var(--duration) linear infinite;
    }
    .boxes .box:nth-child(4) {
      transform: translate(200%, 0);
      -webkit-animation: box4 var(--duration) linear infinite;
      animation: box4 var(--duration) linear infinite;
    }
    .boxes .box > div {
      --background: #5c8df6;
      --top: auto;
      --right: auto;
      --bottom: auto;
      --left: auto;
      --translateZ: calc(var(--size) / 2);
      --rotateY: 0deg;
      --rotateX: 0deg;
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--background);
      top: var(--top);
      right: var(--right);
      bottom: var(--bottom);
      left: var(--left);
      transform: rotateY(var(--rotateY)) rotateX(var(--rotateX))
        translateZ(var(--translateZ));
    }
    .boxes .box > div:nth-child(1) {
      --top: 0;
      --left: 0;
    }
    .boxes .box > div:nth-child(2) {
      --background: #145af2;
      --right: 0;
      --rotateY: 90deg;
    }
    .boxes .box > div:nth-child(3) {
      --background: #447cf5;
      --rotateX: -90deg;
    }
    .boxes .box > div:nth-child(4) {
      --background: #dbe3f4;
      --top: 0;
      --left: 0;
      --translateZ: calc(var(--size) * 3 * -1);
    }

    @-webkit-keyframes box1 {
      0%,
      50% {
        transform: translate(100%, 0);
      }
      100% {
        transform: translate(200%, 0);
      }
    }

    @keyframes box1 {
      0%,
      50% {
        transform: translate(100%, 0);
      }
      100% {
        transform: translate(200%, 0);
      }
    }
    @-webkit-keyframes box2 {
      0% {
        transform: translate(0, 100%);
      }
      50% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(100%, 0);
      }
    }
    @keyframes box2 {
      0% {
        transform: translate(0, 100%);
      }
      50% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(100%, 0);
      }
    }
    @-webkit-keyframes box3 {
      0%,
      50% {
        transform: translate(100%, 100%);
      }
      100% {
        transform: translate(0, 100%);
      }
    }
    @keyframes box3 {
      0%,
      50% {
        transform: translate(100%, 100%);
      }
      100% {
        transform: translate(0, 100%);
      }
    }
    @-webkit-keyframes box4 {
      0% {
        transform: translate(200%, 0);
      }
      50% {
        transform: translate(200%, 100%);
      }
      100% {
        transform: translate(100%, 100%);
      }
    }
    @keyframes box4 {
      0% {
        transform: translate(200%, 0);
      }
      50% {
        transform: translate(200%, 100%);
      }
      100% {
        transform: translate(100%, 100%);
      }
    }
    html {
      -webkit-font-smoothing: antialiased;
    }

    * {
      box-sizing: border-box;
    }
    *:before,
    *:after {
      box-sizing: border-box;
    }

    body {
      min-height: 100vh;
      font-family: Roboto, Arial;
      color: #adafb6;
      background: #f9fbff;
    }
  `;
  const htmlContent = `<div class="app-loading-overlay" data-loader-source="preload">
    <div class="boxes">
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>`;
  const oStyle = document.createElement("style");
  const oDiv = document.createElement("div");
  oStyle.id = "app-loading-style";
  oStyle.innerHTML = styleContent;
  oDiv.innerHTML = htmlContent;
  return {
    appendLoading() {
      try {
        safeDOM.append(document.head, oStyle);
        safeDOM.append(document.body, oDiv);
      } catch {
      }
    },
    removeLoading() {
      safeDOM.remove(document.head, oStyle);
      safeDOM.remove(document.body, oDiv);
      const staticOverlay = document.querySelector(
        '.app-loading-overlay[data-loader-source="preload"]'
      );
      if (staticOverlay && staticOverlay.parentElement) {
        staticOverlay.parentElement.removeChild(staticOverlay);
      }
      try {
        electron.ipcRenderer.send("react-ready");
      } catch {
      }
    }
  };
}
const { appendLoading, removeLoading } = useLoading();
domReady().then(appendLoading);
window.onmessage = (ev) => {
  ev.data.payload === "removeLoading" && removeLoading();
};
setTimeout(removeLoading, 4999);
