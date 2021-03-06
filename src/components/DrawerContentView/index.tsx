import React from 'react';
//
import {
    DrawerContent,
    HeaderDrawer,
    ButtonUserHeader,
    ButtonCloseHeader,
} from './styles';
import { Ionicons } from '@expo/vector-icons';
import { DrawerProps } from '../DrawerInfoUser';

const DrawerContentView: React.FC<DrawerProps> = ({ navigation, children }) => {
    return (
        <DrawerContent>
            <HeaderDrawer>
                <ButtonUserHeader>
                    <Ionicons name="md-person-outline" size={33} color="#71b8dc" />
                </ButtonUserHeader>
                <ButtonCloseHeader onPress={() => navigation.closeDrawer()}>
                    <Ionicons name="md-close-sharp" size={33} color="#71b8dc" />
                </ButtonCloseHeader>
            </HeaderDrawer>
            {children}
        </DrawerContent>
    );
};

export default DrawerContentView;
