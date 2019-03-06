import React from "react";
import { observer } from "mobx-react";

@observer
class MobxDemo extends React.Component {
	render() {
		return <div>{this.props.todo.title}</div>;
	}
}

export default MobxDemo;
