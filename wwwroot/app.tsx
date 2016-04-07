import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
    compliment?: string;
}

interface State {

}

class AppComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    getInitialState() {
        alert("called?");
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



