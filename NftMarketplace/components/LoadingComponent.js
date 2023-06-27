//to create a loading like component
import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import {Colors} from "../constants/ConstantsExports"

const LoadingComponent = ({isLoading,style,color}) => (
  <ActivityIndicator animating={isLoading} color={color} hidesWhenStopped={true} style={style} size="large"/>
);

export default LoadingComponent;