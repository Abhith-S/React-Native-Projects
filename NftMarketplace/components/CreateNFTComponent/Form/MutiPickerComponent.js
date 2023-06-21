import React, { useState } from "react";
import { ScrollView, Modal, Text, Pressable, View, TouchableOpacity, Image } from "react-native";
import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';

import styles from './MultiPickerStyles'

const MultiPicker = ({ items, placeholder, icon, selectedItems, onChangeItems }) => {
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(selectedItems);

    const windowHeight = Dimensions.get('window').height;

    function selectItems(id) {
        if (selected?.includes(id)) {
            setSelected(selected.filter(x => x != id));
        } else {
            setSelected([...selected, id]);
        }
    }

    function closeModel() {
        onChangeItems(selected);
        setVisible(false);
    }

    return (
        <View>
            <View>
                <Pressable
                    style={styles.inputArea}
                    onPress={() => setVisible(true)
                    }>
                    {icon && (
                        <View style={styles.iconContainer}>
                            <Image source={icon} />
                        </View>
                    )}
                    <Text style={{ paddingLeft: icon ? 0 : 15 }}>{placeholder}</Text>
                </Pressable>
                {
                    selected?.length > 0 && <View style={styles.previewContainer}>
                        {selected?.map((id, index) => (
                            <View key={index} style={styles.previewItem}>
                                <Text>{items?.find(x => x.id == id).name}</Text>
                                <TouchableOpacity onPress={() => {
                                    setSelected(selected.filter(x => x != id));
                                    onChangeItems(selected.filter(x => x != id));
                                }}>
                                    <Image style={styles.closeIcon} source={require('./close.png')} />
                                </TouchableOpacity>
                            </View>
                        ))}
                    </View>
                }
            </View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    console.log("Modal has been closed.");
                    setVisible(!visible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.mainContainer}>

                        <View style={styles.itemsContainer}>
                            <ScrollView style={{ maxHeight: (windowHeight - 200) }}>
                                {
                                    items?.length == 0 ? (
                                        <Text style={{ textAlign: 'center' }}>No items to select</Text>
                                    ) : (
                                        items?.map((item, index) => (
                                            <View
                                                key={index}
                                                style={styles.itemContainer}
                                            >
                                                <TouchableOpacity onPress={() => selectItems(item?.id)} >
                                                    <Text
                                                        style={selected?.includes(item.id) ? { color: '#000' } : { color: '#bbb' }}
                                                    >
                                                        {item.name}
                                                    </Text>
                                                </TouchableOpacity>
                                            </View>

                                        ))
                                    )
                                }
                            </ScrollView>
                        </View>

                        <Pressable
                            style={styles.btnAction}
                            onPress={() => closeModel()}
                        >
                            <Text style={styles.btnAction_text}>{items?.length == 0 ? 'Close' : 'Done'}</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

MultiPicker.propTypes = {
    items: PropTypes.array,
    placeholder: PropTypes.string,
    selectedItems: PropTypes.array,
    onChangeItems: PropTypes.func
}

MultiPicker.defaultProps = {
    items: [],
    placeholder: 'Select',
    selectedItems: []
}

export default MultiPicker;