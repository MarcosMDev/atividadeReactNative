import React, { Component, ReactNode } from 'react'

import { Container, Content, CardItem, Card, Text, Body } from 'native-base'

import styles from './style'

export class DetailPage extends Component<any, any> {
    
    render(): ReactNode {
        const product = this.props.route.params

        let amount 

        if(amount === 0) {
            amount = 'Sem estoque'
        } else {
            amount = product.amount
        }

        return(
            <Container style={styles.container}>
                <Content style={styles.contentDetail}>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={styles.textHeaderTitle}>{product.name}</Text>

                                <Text style={styles.textHeader}>Fabricante: <Text style={styles.textSecundary}>{product.factory.name}</Text></Text>

                                <Text style={styles.textHeader}>Preço: <Text style={styles.textPrice}>R${product.price.toFixed(2)}</Text></Text>

                                <Text style={styles.textHeader}>Produtos em estoque: <Text style={styles.textSecundary}>{amount}</Text></Text>

                                <Text style={styles.textHeader}>Detalhes tecnico: <Text style={styles.textSecundary}>Lorem ipsum placerat eros felis tempor class egestas, aliquam erat vulputate pharetra nam egestas, congue dolor metus interdum porta vestibulum. facilisis congue dolor malesuada odio blandit donec curabitur, ut pulvinar consequat facilisis nec lorem id tempor, ac vitae bibendum praesent eleifend ligula. ut placerat elementum lobortis class taciti dui nulla sapien ut tempus, ultricies habitant ultricies diam vivamus aliquet mollis fames mi netus, donec pharetra lorem quisque nunc quisque amet convallis erat. aliquam porta curabitur aliquam aptent tempor euismod quisque nisl, inceptos curabitur urna lacus sed laoreet proin, cubilia tempor venenatis aptent nibh quisque velit. 
                                </Text></Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}


