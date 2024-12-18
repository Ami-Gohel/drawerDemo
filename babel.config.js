process.env.EXPO_ROUTER_APP_ROOT = "../../App";
module.exports = function(api) {
  api.cache(true);
  return {
      presets: ['babel-preset-expo'],
       plugins: [
      'react-native-reanimated/plugin',
      
    ],
    
  };
};
