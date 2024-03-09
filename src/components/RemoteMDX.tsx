import { Callout, Cards, RemoteContent, Steps, Tabs } from 'nextra/components';


const RemoteMDX = (props: any) => (
  <RemoteContent
    components={{ Callout, Cards, Steps, Tabs }}
    {...props}
  />
);

export default RemoteMDX;
