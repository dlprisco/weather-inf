import React, {} from 'react';
import {WiRain, WiDaySunny, WiLightning, WiCloudy, WiHail, WiDayHaze, WiFog} from 'weather-icons-react';

export const weatherConditions = {
  "Rain": {
    color: '#005BEA',
    title: 'Raining',
    subtitle: 'Get a cup of coffee',
    icon: 'rain'
  },
  "Clear": {
    color: '#f7b733',
    title: 'So Sunny',
    subtitle: 'It is hurting my eyes',
    icon: 'sunny'
  },
  "Thunderstorm": {
    color: '#616161',
    title: 'A Storm is coming',
    subtitle: 'Because Gods are angry',
    icon: 'lightning'
  },
  "Clouds": {
    color: '#1F1C2C',
    title: 'Clouds',
    subtitle: 'Clouds everywhere',
    icon: 'cloudy'
  },

  "Snow": {
    color: '#00d2ff',
    title: 'Snow',
    subtitle: 'Get out and build a snowman for me',
    icon: 'snowy'
  },
  "Drizzle": {
    color: '#076585',
    title: 'Drizzle',
    subtitle: 'Partially raining...',
    icon: 'hail'
  },
  "Haze": {
    color: '#66A6FF',
    title: 'Haze',
    subtitle: 'Another name for Partial Raining',
    icon: 'weather-hail'
  },
  "Mist": {
    color: '#3CD3AD',
    title: 'Mist',
    subtitle: "Don't roam in forests!",
    icon: 'fog'
  }
};

export const weatherIcons = {
  'rain': <WiRain size={385} color='#fff'/>,
  'sunny': <WiDaySunny size={385} color='#fff'/>,
  'lightning': <WiLightning size={385} color='#fff'/>,
  'cloudy': <WiCloudy size={385} color='#fff'/>,
  'hail': <WiHail size={385} color='#fff'/>,
  'weather-hail': <WiDayHaze size={385} color='#fff'/>,
  'fog': <WiFog size={385} color='#fff'/>
}