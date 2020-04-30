import React, { Component, ReactNode } from 'react'

import { Container, Content, Text, Form, Item, Label, Input, Button, Body } from 'native-base'

import styles from './style'

export class RegisterBody extends Component<any, any> {

    render(): ReactNode {
        const { actions } = this.props

        return(
            <Container style={styles.containerRegister}>
                <Content>
                    <Body>
                        <Text style={styles.textHeader}>Cadastre-se</Text>
                        <Text style={styles.textSecundary}>e comece a comprar!</Text>
                    </Body>
                    <Form style={styles.contentForm}>
                        <Item floatingLabel>
                            <Label style={styles.textLabel}>Nome:</Label>
                            <Input 
                                onChangeText={
                                    (value) => actions.setName(String(value))
                                }
                            />
                        </Item>

                        <Item floatingLabel>
                            <Label style={styles.textLabel}>Email:</Label>
                            <Input
                                autoCapitalize='none'
                                keyboardType="email-address" 
                                onChangeText={
                                    (value) => actions.setEmail(String(value))
                                }
                            />
                        </Item>

                        <Item floatingLabel>
                            <Label style={styles.textLabel}>Senha:</Label>
                            <Input
                                autoCapitalize='none'
                                secureTextEntry={true} 
                                onChangeText={
                                    (value) => actions.setPassword(String(value))
                                }
                            />
                        </Item>

                        <Item floatingLabel>
                            <Label style={styles.textLabel}>Confirme sua senha:</Label>
                            <Input
                                autoCapitalize='none'
                                secureTextEntry={true} 
                                onChangeText={
                                    (value) => actions.setConfirmPassword(String(value))
                                }
                            />
                        </Item>

                        <Item floatingLabel>
                            <Label style={styles.textLabel}>Idade:</Label>
                            <Input
                                keyboardType='numeric'
                                onChangeText={
                                    (value) => actions.setAge(Number(value))
                                }
                            />
                        </Item>

                        <Item floatingLabel>
                            <Label style={styles.textLabel}>Endereço:</Label>
                            <Input
                                onChangeText={
                                    (value) => actions.setAddress(String(value))
                                }
                            />
                        </Item>

                        <Button block  style={styles.buttonRegister} onPress={() => actions.handlerRegister()}>
                            <Text style={styles.buttonText}>Cadastrar!</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

