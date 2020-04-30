import React, { Component, ReactNode } from 'react'

import { Container, Content, Text, List, ListItem, CardItem, Body, Icon, ActionSheet } from 'native-base'

import styles from './style'
import style from '../LoginPage/style'

export class HomeBody extends Component<any, any> {
    render(): ReactNode {
        const { actions } = this.props
        const products: any[] = actions.state.products
        return(
            <Container style={styles.container}>
                <Content style={styles.cotentItem}>
                    <Text style={styles.textHeader}>Escolha seu produto</Text>
                    <List dataArray={products}  renderRow={(product: any) => (
                        <ListItem key={product.id} style={styles.list} onPress={() => actions.openDetails(product)}>
                            <CardItem>
                                <Body>
                                    <Text style={styles.productName}>{product.name}</Text>
                                    <Text style={styles.productPrice} >R$ {product.price.toFixed(2)}</Text>
                                </Body>

                                <Icon name="cart" style={styles.cartProduct} />
                            </CardItem>
                        </ListItem>
                    )} />
                </Content>
            </Container>
        )
    }
}