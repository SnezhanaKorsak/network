import React from 'react';
import {Header} from "./Header";
import {AppStateType} from "../../redux/redux-store";
import {connect} from 'react-redux';
import {getAuthDataTC} from "../../redux/authReducer";


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    getAuthDataTC: () => void
}
type PropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


class HeaderContainer extends React.Component<PropsType> {
    componentDidMount(): void {
        this.props.getAuthDataTC()
    }

    render(): React.ReactNode {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }

}

export default connect(mapStateToProps, {getAuthDataTC})(HeaderContainer)