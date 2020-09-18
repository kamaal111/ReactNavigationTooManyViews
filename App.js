import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const HomeScreen = () => {
  const sourceURL =
    'https://cdn.geekwire.com/wp-content/uploads/2019/10/0151-Summit-20191008-DD.jpg';

  return (
    <View style={{...styles.container, backgroundColor: 'green'}}>
      <View>
        <View>
          <View>
            <View>
              <View>
                <View>
                  <View>
                    <View>
                      <View>
                        <View>
                          <View>
                            <View>
                              <View>
                                <View>
                                  <View>
                                    <View>
                                      <View>
                                        <View>
                                          <View>
                                            <View>
                                              <View>
                                                <View>
                                                  <View>
                                                    <View>
                                                      <View>
                                                        <View>
                                                          <View>
                                                            <View>
                                                              <View>
                                                                <View>
                                                                  <View>
                                                                    <View>
                                                                      <View>
                                                                        <View>
                                                                          <View>
                                                                            <View>
                                                                              <View>
                                                                                <View>
                                                                                  <View>
                                                                                    <View>
                                                                                      <View>
                                                                                        <View>
                                                                                          <View>
                                                                                            <View>
                                                                                              <View>
                                                                                                <View>
                                                                                                  <View>
                                                                                                    <View>
                                                                                                      <View>
                                                                                                        <View>
                                                                                                          <View>
                                                                                                            <View>
                                                                                                              <View>
                                                                                                                <View>
                                                                                                                  <View>
                                                                                                                    <View>
                                                                                                                      <View>
                                                                                                                        <View>
                                                                                                                          <View>
                                                                                                                            <View>
                                                                                                                              <Text>
                                                                                                                                You
                                                                                                                                can
                                                                                                                                see
                                                                                                                                this
                                                                                                                                but
                                                                                                                                not
                                                                                                                                the
                                                                                                                                image
                                                                                                                                below
                                                                                                                              </Text>
                                                                                                                              <View>
                                                                                                                                {/** REMOVE THE ABOVE TO UNVEIL THE BALLMER  63 View */}
                                                                                                                                <Image
                                                                                                                                  style={
                                                                                                                                    styles.image
                                                                                                                                  }
                                                                                                                                  source={{
                                                                                                                                    uri: sourceURL,
                                                                                                                                  }}
                                                                                                                                />
                                                                                                                              </View>
                                                                                                                            </View>
                                                                                                                          </View>
                                                                                                                        </View>
                                                                                                                      </View>
                                                                                                                    </View>
                                                                                                                  </View>
                                                                                                                </View>
                                                                                                              </View>
                                                                                                            </View>
                                                                                                          </View>
                                                                                                        </View>
                                                                                                      </View>
                                                                                                    </View>
                                                                                                  </View>
                                                                                                </View>
                                                                                              </View>
                                                                                            </View>
                                                                                          </View>
                                                                                        </View>
                                                                                      </View>
                                                                                    </View>
                                                                                  </View>
                                                                                </View>
                                                                              </View>
                                                                            </View>
                                                                          </View>
                                                                        </View>
                                                                      </View>
                                                                    </View>
                                                                  </View>
                                                                </View>
                                                              </View>
                                                            </View>
                                                          </View>
                                                        </View>
                                                      </View>
                                                    </View>
                                                  </View>
                                                </View>
                                              </View>
                                            </View>
                                          </View>
                                        </View>
                                      </View>
                                    </View>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const InnerStack = createStackNavigator();

const ModelStackNavigator = () => {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen name="Home" component={HomeScreen} />
    </InnerStack.Navigator>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ModelStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
});

export default App;
