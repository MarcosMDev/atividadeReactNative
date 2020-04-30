import React, { Component, ReactNode } from 'react'

import {  } from 'native-base'

import api from '../../services/api'
import { HomeBody } from './view'

export class HomePage extends Component<any, any> {
    
    constructor(props: any) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        api.get('/product/list').then(response => {
            this.setState({ products: response.data })
        })
    }

    public openDetails(product: any): void {
        this.props.navigation.navigate('details', product)
    }

    render(): ReactNode {
        return (
            <HomeBody actions={this} />
        )
    }
}
