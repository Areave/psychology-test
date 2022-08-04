import * as React from "react";
import {Types} from "../../utils/types";
import {ComponentTemplate} from "./ComponentTemplate";
import {connect} from 'react-redux'

const Component = (Comp: React.FC<any>): Types.HOC => {

    return (props) => {
      return <Comp {...props}/>
  }
};

const mapStateToProps = (state: Types.State) => {
    return {}
};
const mapDispatchToProps = {};

export const JokeComp = connect(mapStateToProps, mapDispatchToProps)(Component(ComponentTemplate));