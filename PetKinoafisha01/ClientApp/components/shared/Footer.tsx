import * as React from "react";

export default class Footer extends React.Component<{}, {}> {
    constructor(props) {
        super(props);
    }
    render() {
        return <footer className="footer text-center">
            <p>KinoAfisha</p>
            <p>Copyright (c) 2020 Serhii Melnyk</p>
        </footer>;
    }
}