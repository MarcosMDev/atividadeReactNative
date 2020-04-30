import React, { Component, ReactNode } from 'react'

import { AsyncStorage } from 'react-native'

import api from '../../services/api'
import { LoginBody } from './view'

type State = { email: string, password: string }

export class LoginPage extends Component<any, State> {

    constructor(props: any) {
        super(props)
        this.state = { email: "", password: ""}
    }

    public setEmail(value: string): void {
        this.setState({ email: value })
    }

    public setPassword(value: string): void {
        this.setState({ password: value })
    }

    public async setToken(value: string): Promise<void> {
        await AsyncStorage.setItem('tokenUser', JSON.stringify(value))
    }

    public async sigIn(): Promise<any> {
        console.log("State:", this.state)

        const body = {
            login: this.state.email,
            password: this.state.password
        }

        if (!body.login || !body.password) {
            return alert("Todos os campos são obrigatorios!")
        }

        api.post('/user/login', body).then(response => {
            this.setToken(response.data)
            this.props.navigation.navigate('home')
        }).catch(() => {
            return alert('Email ou senha invalido!')
        })
    }

    public openRegister(): void {
        this.props.navigation.navigate('register')
    }

    render(): ReactNode {
        return (    
            <LoginBody  actions={this} />
        )
    }
}