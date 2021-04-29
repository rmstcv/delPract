import {nouisSlider} from "./modules/nouisSliderConfig";
import swiperSlider from "./modules/slider";
import map from "./modules/map";
import modal from "./modules/modal";
import Form from './modules/form.js';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    
    nouisSlider();
    swiperSlider();
    map();
    modal();
    new Form('form', 'input', 'input[name="name"]', 'input[name="tel"]', 'input[name="message"]', ".checkbox-label", ".form").initForm();

});