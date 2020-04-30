import React, { Component, ReactNode } from 'react'

import  api from '../../services/api'
import { RegisterBody } from './view'

import { AsyncStorage } from 'react-native'

type State = { name: string, email: string, password: string, confirmPassword: string, age: number, address: string }

export class RegisterPage extends Component<any, State> {
    constructor(props: any) {
        super(props)

        this.state = { name: "", email: "", password: "", confirmPassword: "", age: 0, address: ""}
    }

    public setName(value: string): void {
        this.setState({ name: value })
    }

    public setEmail(value: string): void {
        this.setState({ email: value })
    }

    public setPassword(value: string): void {
        this.setState({ password: value })
    }

    public setConfirmPassword(value: string): void {
        this.setState({ confirmPassword: value })
    }

    public setAge(value: number): void {
        this.setState({ age: value })
    }

    public setAddress(value: string): void {
        this.setState({ address: value })
    }

    public async handlerRegister(): Promise<void> {
        console.log("State: ", this.state)

        const body = {
            address: this.state.address,
            age: this.state.age,
            email: this.state.email,
            name: this.state.name,
            userPassword: this.state.password,
        }

        if (this.state.confirmPassword !== body.userPassword) {
            return alert("Senhas não conferem!")
        } else if (!body.name || !body.email || !body.userPassword || !this.state.confirmPassword || !body.age || !body.address) {
            return alert("Todos os campos são obrigatorios!")
        } else {
            api.post('/user/customer/add', body).then(() => {
                this.props.navigation.navigate('login')
            }).catch(err => {
                console.log(err)
            })
        }
    }

    render(): ReactNode {
        return(
            <RegisterBody actions={this} />
        )
    }
}