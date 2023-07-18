import { Text, View, Pressable, TextInput, SafeAreaView } from 'react-native'

import SelectDropdown from 'react-native-select-dropdown'
import styles from '../../assets/style/styles'
import daftarPoli from '../../assets/json/poli'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const FormInput = () => {
  return (
      <SafeAreaView>
    <TextInput style={styles.formInput} maxLength={16} placeholder="NIK" keyboardType='numeric' />
      <TextInput style={styles.formInput} placeholder="Nama Lengkap" />
      <TextInput style={styles.formInput} placeholder="Alamat" />
      <TextInput style={styles.formInput} placeholder="Dokter" />
      <SelectDropdown
      data={daftarPoli}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={'Poli Tujuan'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={isOpened => {
              return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
      />
      <View style={styles.submit}>
      <Pressable>
      <Text style={styles.textSubmit}>Submit</Text>
      </Pressable>
      </View>
      </SafeAreaView>
  )
}

const Reservasi = () =>{
    return (
      <View style={styles.reservasi}>
        <FormInput />
      </View>
    )
}

export default Reservasi;