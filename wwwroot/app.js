var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent(props) {
        _super.call(this, props);
    }
    AppComponent.prototype.getInitialState = function () {
        alert("called?");
    };
    AppComponent.prototype.onIncrement = function () {
        alert("Increment");
    };
    AppComponent.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h1", null, "App Component"), React.createElement("a", {"onClick": this.onIncrement}, "+")));
    };
    return AppComponent;
})(React.Component);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppComponent;
