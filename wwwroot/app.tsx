import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {

}

interface State {

}

class AppComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    onIncrement() {
        alert("Increment");
    }

    render() {
        return (
            <div>
                <h1>App Component</h1>
                <a onClick={this.onIncrement}>+</a>
            </div>
        )
    }
}

export default AppComponent;



