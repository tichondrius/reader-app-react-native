import React, {Component} from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, 
         ActivityIndicator, Linking, BackHandler,
         Image, } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
export const COLLAPSE_STORIES_TYPE = 'drawer/COLLAPSE_STORIES_TYPE';
export const COLLAPSE_CATEGORIES = 'drawer/COLLAPSE_CATEGORIES';
import { collapseStoryType, collapseCategories } from '../../redux/modules/drawer'
import { GroupMenu as Group, ItemMenu as Item} from '../../components';

export class Drawer extends Component{
  constructor(props) {
    super(props);
    this.handleNavStoryType = this.handleNavStoryType.bind(this);
  }
  handleNavStoryType(type) {
    
  }
  render() {
    const { isStoriesTypeExpande, isCategoriesExpande, collapseStoryType } = this.props;
      return (
          <View>
            <ScrollView>
              <View style={styles.container}>
                  <View style={styles.imageContainer}>
                      <Image
                      resizeMode='contain'
                      style={styles.image}
                      source={require('../../images/background-navbar.jpg')}
                      />
                  </View>
              </View>
              <View style={StyleSheet.menu}>
                <Group 
                    label="Loại truyện"
                    onTouch={() => collapseStoryType()}
                    icon={<Icon name="clear-all" size={25} color='#11c1f2'/>}
                    isOpen={isStoriesTypeExpande}
                >
                  <Item 
                    icon={<Icon name="apps" size={25} />}
                    onTouch={() => this.handleNavStoryType('all')}
                    label="Tất cả" />
                  <Item 
                    icon={<Icon name="image" size={25} />}
                    onTouch={() => this.handleNavStoryType('comic')}
                    label="Truyện tranh" />
                  <Item 
                    icon={<Icon name="library-books" size={25} />}
                    onTouch={() => this.handleNavStoryType('read')}
                    label="Truyện chữ" />
                </Group>
                <Group 
                    canDropDown={false}
                    onTouch={() => {}} 
                    label="Tìm kiếm" 
                    icon={<Icon name="search" size={25} color='#11c1f2'/>}>
                </Group>
                  <Group 
                    canDropDown={false}
                    onTouch={() => Linking.openURL("http://truyenkhin.top/#/home")} 
                    label="truyenkhin.top" 
                    icon={<Icon name="language" size={25} color='#11c1f2'/>}>
                </Group>
                <Group 
                    canDropDown={false}
                    onTouch={() => {}} 
                    label="Cài đặt" 
                    icon={<Icon name="settings" size={25} color='#11c1f2'/>}>
                </Group>
                  <Group 
                    canDropDown={false}
                    onTouch={() => BackHandler.exitApp()} 
                    label="Thoát"
                    icon={<Icon name="reply-all" size={25} color='#11c1f2'/>}>
                </Group>
              </View>
          </ScrollView>
          </View>
      );
      
  }
}

const mapStateToProps = (state) => ({
    isStoriesTypeExpande: state.drawer.isStoriesTypeExpande,
    isCategoriesExpande: state.drawer.isCategoriesExpande,
})

const mapDispatchToProps = (dispatch) => ({
  collapseCategories: () => dispatch(collapseCategories()),
  collapseStoryType: () => dispatch(collapseStoryType()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
    backgroundColor: 'skyblue'
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    flex: 1,
  },
  menu: {
    marginTop: 10,
  },
});

