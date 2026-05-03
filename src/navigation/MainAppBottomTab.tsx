import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import {
  Animated,
  Easing,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useEffect, useMemo, useRef } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ms, vs } from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import Cart from '../screens/cart/cart';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
const Tab = createBottomTabNavigator();

const COLORS = {
  active: '#2563EB',
  inactive: '#94A3B8',
  activeBg: '#DBEAFE',
  bar: '#FFFFFF',
  badge: '#EF4444',
  badgeText: '#FFFFFF',
};

const TAB_BAR_SIDE_INSET = ms(16);
const TAB_BAR_BOTTOM = ms(14);
const TAB_BAR_HEIGHT = Platform.OS === 'ios' ? vs(64) : vs(60);

type IoniconName =
  | 'home'
  | 'home-outline'
  | 'person'
  | 'person-outline'
  | 'search'
  | 'search-outline'
  | 'cart'
  | 'cart-outline'
  | 'ellipse';

const getTabIconName = (routeName: string, focused: boolean): IoniconName => {
  switch (routeName) {
    case 'Home':
      return focused ? 'home' : 'home-outline';
    case 'Profile':
      return focused ? 'person' : 'person-outline';
    case 'Search':
      return focused ? 'search' : 'search-outline';
    case 'Cart':
      return focused ? 'cart' : 'cart-outline';
    default:
      return 'ellipse';
  }
};

interface TabItemProps {
  routeName: string;
  label: string;
  focused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  badgeCount?: number;
}

function TabItem({
  routeName,
  label,
  focused,
  onPress,
  onLongPress,
  badgeCount,
}: TabItemProps) {
  const focusAnim = useRef(new Animated.Value(focused ? 1 : 0)).current;
  const pressAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: focused ? 1 : 0,
      duration: 220,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [focused, focusAnim]);

  const iconScale = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.1],
  });

  const labelOpacity = focusAnim;
  const labelTranslate = focusAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [4, 0],
  });

  const handlePressIn = () => {
    Animated.spring(pressAnim, {
      toValue: 0.92,
      useNativeDriver: true,
      speed: 30,
      bounciness: 6,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(pressAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 6,
    }).start();
  };

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      android_ripple={null}
      style={styles.tabItemPressable}
      hitSlop={6}
    >
      <Animated.View
        style={[
          styles.tabItemInner,
          focused && styles.tabItemInnerFocused,
          { transform: [{ scale: pressAnim }] },
        ]}
      >
        <Animated.View style={{ transform: [{ scale: iconScale }] }}>
          <Ionicons
            name={getTabIconName(routeName, focused)}
            size={ms(22)}
            color={focused ? COLORS.active : COLORS.inactive}
          />
          {badgeCount && badgeCount > 0 ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText} numberOfLines={1}>
                {badgeCount > 99 ? '99+' : badgeCount}
              </Text>
            </View>
          ) : null}
        </Animated.View>

        {focused ? (
          <Animated.Text
            numberOfLines={1}
            style={[
              styles.tabLabel,
              {
                opacity: labelOpacity,
                transform: [{ translateY: labelTranslate }],
              },
            ]}
          >
            {label}
          </Animated.Text>
        ) : null}
      </Animated.View>
    </Pressable>
  );
}

function CustomTabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const containerStyle = useMemo(
    () => [
      styles.tabBar,
      {
        bottom: Math.max(TAB_BAR_BOTTOM, insets.bottom * 0.5 + ms(6)),
      },
    ],
    [insets.bottom],
  );

  return (
    <View style={containerStyle} pointerEvents="box-none">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === 'string'
            ? options.tabBarLabel
            : options.title ?? route.name;

        const focused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!focused && !event.defaultPrevented) {
            navigation.navigate(route.name as never);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const badgeCount =
          typeof options.tabBarBadge === 'number'
            ? options.tabBarBadge
            : undefined;

        return (
          <TabItem
            key={route.key}
            routeName={route.name}
            label={label as string}
            focused={focused}
            onPress={onPress}
            onLongPress={onLongPress}
            badgeCount={badgeCount}
          />
        );
      })}
    </View>
  );
}

function MyTabs() {
  const { items } = useSelector((state: RootState) => state.cartSlice);

  return (
    <Tab.Navigator
      detachInactiveScreens={false}
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        lazy: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{ tabBarBadge: items.length > 0 ? items.length : undefined }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    left: TAB_BAR_SIDE_INSET,
    right: TAB_BAR_SIDE_INSET,
    height: TAB_BAR_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.bar,
    borderRadius: ms(40),
    paddingHorizontal: ms(8),
    elevation: 12,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.14,
    shadowRadius: 18,
  },
  tabItemPressable: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItemInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: ms(12),
    paddingVertical: ms(8),
    borderRadius: ms(28),
    gap: ms(6),
  },
  tabItemInnerFocused: {
    backgroundColor: COLORS.activeBg,
  },
  tabLabel: {
    fontSize: ms(12),
    fontWeight: '700',
    color: COLORS.active,
  },
  badge: {
    position: 'absolute',
    top: -ms(4),
    right: -ms(8),
    minWidth: ms(16),
    height: ms(16),
    paddingHorizontal: ms(4),
    borderRadius: ms(8),
    backgroundColor: COLORS.badge,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: COLORS.badgeText,
    fontSize: ms(10),
    fontWeight: '700',
    lineHeight: ms(12),
  },
});

export default MyTabs;
