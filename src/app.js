import "./style/style.css";
import "./script/component/navbar.js";
import "./script/component/jumb_img.js";
import "./script/component/footer.js";
import "regenerator-runtime";
import imgSrc from "./img/undraw_breakfast_psiw.png";
import main from "./script/view/main.js";

document.querySelector('.image-header').src = imgSrc;
document.addEventListener("DOMContentLoaded", main);