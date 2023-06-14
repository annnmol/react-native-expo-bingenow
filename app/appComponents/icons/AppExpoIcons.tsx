import React from 'react';
import { StyleProp, Text } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export type IconName = keyof typeof Ionicons['glyphMap'] | keyof typeof MaterialIcons['glyphMap'] | keyof typeof FontAwesome['glyphMap'] | keyof typeof MaterialCommunityIcons['glyphMap'];

interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
  style?: StyleProp<any>
}

const AppExpoIcons: React.FC<IconProps> = ({ name, size = 24, color = '#282828', style }) => {
  const renderIcon = () => {
    if (Ionicons['glyphMap'].hasOwnProperty(name)) {
      const IconComponent = Ionicons as any;
      return <IconComponent name={name} size={size} color={color} style={style}/>;
    }

    if (MaterialIcons['glyphMap'].hasOwnProperty(name)) {
      const IconComponent = MaterialIcons as any;
      return <IconComponent name={name} size={size} color={color} style={style}/>;
    }

    if (FontAwesome['glyphMap'].hasOwnProperty(name)) {
      const IconComponent = FontAwesome as any;
      return <IconComponent name={name} size={size} color={color} style={style}/>;
    }
    if (MaterialCommunityIcons['glyphMap'].hasOwnProperty(name)) {
      const IconComponent = MaterialCommunityIcons as any;
      return <IconComponent name={name} size={size} color={color} style={style}/>;
    }

    return null;
  };

  return renderIcon();
};

export default AppExpoIcons;
