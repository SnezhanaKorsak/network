import React, {ComponentType} from "react";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from "react-router-dom";
import {PATH} from "../App";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T> (Component: ComponentType<T>) {
    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth,  ...restProps} = props

        if(!props.isAuth) return <Redirect to={PATH.LOGIN}/>
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}