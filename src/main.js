import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/styles/tailwind.css";
import "./assets/styles/global.css";
import { registerGlobalComponents } from "./utils/import";

import { projectAuth } from "@/configs/firebase";

let app;
//khi thay đổi dữ liệu của user
projectAuth.onAuthStateChanged(() => {
  //nếu app chưa được khởi tạo thì mới khởi tạo. ngược lại thì bỏ qua dòng if này
  if (!app) {
    app = createApp(App);
    registerGlobalComponents(app);
    app.use(router);
    app.mount("#app");
  }
});
