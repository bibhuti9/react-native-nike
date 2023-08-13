declare module 'react-native-config' {
  interface ConfigType {
    Environment: 'production' | 'development' | 'staging';
    BACKEND_URI: string;
  }
  const Config: ConfigType;
  export default Config;
}
