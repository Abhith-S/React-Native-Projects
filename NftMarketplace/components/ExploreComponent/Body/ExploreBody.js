//react
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TextInput,
  Button,
  Image,
} from "react-native";

//redux
import { useSelector, useDispatch } from "react-redux";

//external packages
import axios from "axios";

//component imports
import LoadingComponent from "../../LoadingComponent";
import { updateResponseData } from "../../../src/features/serverData/serverResponseSlice";
import {Spacing,Colors} from "../../../constants/ConstantsExports"

//no next Page url available now ,so for testign used this
const serverDataUrl =
  "http://139.59.69.142:5000/api/products?search=status:publish";

const ExploreBody = () => {

  //redux
  const dispatch = useDispatch();
  const responseData = useSelector(
    (state) => state.serverResponse.responseData
  );
  //console.log(responseData);
  
  const nextPageUrl = useSelector((state) => state.serverResponse.nextPageUrl);
  //console.log(nextPageUrl)

  const handleForwardPagination = async () => {

    try{

    const response = await axios.get(serverDataUrl);
    const newResponseData = response.data;

    // Merge the new data with the existing responseData
    const mergedResponseData = {
      ...responseData,
      data: [...responseData.data, ...newResponseData.data],
    };

    // Dispatch the updated data
    dispatch(updateResponseData({ responseData: mergedResponseData }));

    //console.log(mergedResponseData.next_page_url);
    
    }catch(err){
      console.log(err)
    }
    
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
        overScrollMode={"never"}
        ListFooterComponent={<LoadingComponent color={Colors.primary} style={{marginBottom:Spacing*17}}/>}
        //onEndReached={handleForwardPagination}
        data={responseData.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.image.original }}
                key={item.id}
                style={styles.listImage}
              />
              <Text>{item.name}</Text>
              <Text>$ {item.price}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  listImage: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    borderRadius: 20,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "6%",
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
});

export default ExploreBody;
