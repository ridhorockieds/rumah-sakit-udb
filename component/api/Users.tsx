import {View, Text, FlatList} from 'react-native';
import {useEffect, useState} from 'react';

import styles from '../../assets/style/styles'

const Users = () => {
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    let getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then((response) => response.json())
          .then((json) => setUsers(json))
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        setLoading(true);
        getUsers();
    }, []);
    return(
        <View>
            {isLoading ? <Text>Loading...</Text> :
            (
              <FlatList
                data={users}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <View style={styles.cards}>
                  <Text style={{fontWeight:'bold', color:'black', fontSize: 18}}>{item.name}</Text>
                  <Text style={{color:'black'}}>{item.email}</Text>
                  <Text style={{color:'black'}}>{item.phone}</Text>
                  </View>}
              />
            )}
        </View>
    );
};

export default Users;