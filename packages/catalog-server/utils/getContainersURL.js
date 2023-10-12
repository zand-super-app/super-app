const getContainersURL = ({
  hostname = 'https://1f76-83-110-11-204.ngrok-free.app/catalog-service',
  appName,
  version,
  platform,
}) => {
  return `${hostname}/${appName}?platform=${platform}&appVersion=${version}`;
};

export default getContainersURL;
