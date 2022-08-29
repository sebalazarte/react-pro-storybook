"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FontColor = exports.Terceary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        color: { control: 'select' },
        size: { control: 'select' },
        fontColor: { control: 'color' }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
exports.Basic = Template.bind({});
exports.Basic.args = {
    label: 'Ejemplo',
    size: 'h1',
    allCaps: false
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    label: 'Solo mayuscula',
    size: 'normal',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    label: 'Color secundario',
    size: 'normal',
    color: 'secondary'
};
exports.Terceary = Template.bind({});
exports.Terceary.args = {
    label: 'Color ternario',
    size: 'normal',
    color: 'tertiary'
};
exports.FontColor = Template.bind({});
exports.FontColor.args = {
    label: 'Color personalizado',
    size: 'normal',
    fontColor: '#5517ac'
};
