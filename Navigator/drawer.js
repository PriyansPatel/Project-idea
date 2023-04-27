import *as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StarScreen from '../Screens/starscreen';
import TataPunch from '../Screens/TataPunch';
import Mahindra from '../Screens/MahindraXUV300';
import Volkswagen from '../Screens/Volkswagen';
import Skoda from '../Screens/Skoda';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={StarScreen}/>
            <Drawer.Screen name="TataPunch" component={TataPunch}/>
            <Drawer.Screen name="Mahindra" component={Mahindra}/>
            <Drawer.Screen name="Volkswagen" component={Volkswagen}/>
            <Drawer.Screen name="Skoda" component={Skoda}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;

//npm install @react-navigation/drawer @react-navigation/native firebase