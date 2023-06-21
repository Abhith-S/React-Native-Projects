import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import {Colors} from "../constants/ConstantsExports"

const LoadingComponent = ({isLoading,style}) => (
  <ActivityIndicator animating={isLoading} color={Colors.primary} hidesWhenStopped={true} style={style} size="large"/>
);

export default LoadingComponent;