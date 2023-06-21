import * as React from 'react';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

const LoadingComponent = ({isLoading}) => (
  <ActivityIndicator animating={isLoading} color={MD2Colors.red800} hidesWhenStopped={true} />
);

export default LoadingComponent;