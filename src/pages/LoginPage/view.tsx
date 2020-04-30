import React, { Component, ReactNode } from 'react'

import { Container, Content, Form, Item, Label, Input, Button, Text, Icon, Body } from 'native-base'

import styles from './style'

export class LoginBody extends Component<any, any> {
    
    render():ReactNode {
        const { actions } = this.props

        return (    
            <Container style={styles.containerLogIn}>
                <Content style={styles.contentLogIn}>
                    <Body style={styles.bodyText}>
                        <Text style={styles.textBody}>Conecte-se</Text>
                        <Text style={styles.textBodySecyndary}>e encontre os melhores produtos!</Text>
                    </Body>
                    <Form style={styles.formLogIn}>
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

                        <Button  success block style={styles.butonLogIn} onPress={ () => actions.sigIn() }>
                            <Text style={styles.butonRegisterText}>Entrar</Text>
                        </Button>
                        
                        <Button transparent iconLeft style={styles.butonRegister} onPress={() => actions.openRegister()}>
                            <Icon name='arrow-back' style={styles.iconBack} />
                            <Text style={styles.textLabel}>Não possuo cadastro.</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}